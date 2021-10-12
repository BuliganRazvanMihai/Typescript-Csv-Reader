import fs from 'fs';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string,string, number,number,MatchResult, string]

export abstract class CsvFileReader<T> {
    data: T[] = [];
    
    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;

    read() : void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf8', //the type of content we expect from the file
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        }
        ).map(this.mapRow);
    }
}
