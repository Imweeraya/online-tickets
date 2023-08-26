import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Theater } from "./theater.model"; // Make sure to import the Theater class

const PROTOCOL = 'https';
const HOST = `https://cpsu-test-api.herokuapp.com/api/camt2023`;
const PORT = 3500;

@Injectable()
export class TheaterRepository {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;
    }

    getTheaters(): Observable<Theater[]> {
        return this.http.get<Theater[]>(this.baseUrl + "theaters");
    }

    getTheaterById(id: number): Observable<Theater> {
        return this.http.get<Theater>(this.baseUrl + `theaters/${id}`);
    }

}

