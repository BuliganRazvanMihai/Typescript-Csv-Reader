import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string,string, number,number,MatchResult, string]

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),// the date of the match
            row[1],// the home team
            row[2],// the away team
            parseInt(row[3]),// the goals of the home team
            parseInt(row[4]),// the goals of the away team
            row[5] as MatchResult,//the result of the game
            row[6]//the name of the referee
        ];
    }
}
