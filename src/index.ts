import program from "commander";
import dotenv from "dotenv";

dotenv.config();

import { log } from "./logging";
import { runDay } from "./exec";
import init from "./init";

export const __basepath = __dirname;

program.version("1.0.0");

program
  .command("init <year> <day>")
  .description("Initialize AOC day")
  .action(async (year: string, day: string) => {
    await init(year, day);
  });

program
  .command("exec <year> [day]  [part]")
  .description("Advent of Code runner")
  .option("-1, --one", "Run Part One", false)
  .option("-2, --two", "Run Part Two", false)
  .action(
    (year: string, day: string | undefined, part: "string" | undefined) => {
      // if day is undefined, run all days with all parts
      if (year.length !== 4 || +year > new Date().getFullYear()) {
        log.error("Wrong year!");
        return;
      }

      if (day === undefined) {
        log.info("Running all days...");
        for (let i = 1; i <= 25; i++) {
          runDay(year, `day${i.toString().padStart(2, "0")}`, {
            runPartOne: true,
            runPartTwo: true,
          });
        }
      } else {
        // else run the selected day
        const parsedDay = parseInt(day);
        let path = day;
        if (!isNaN(parsedDay)) {
          path = `day${day.padStart(2, "0")}`;
        }

        runDay(year, path, {
          runPartOne: true,
          runPartTwo: true,
        });
      }
    }
  );

program.parse(process.argv);
