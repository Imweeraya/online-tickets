import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Movie, Theater } from "./theater.model"; // Make sure to import the necessary classes

const PROTOCOL = 'https';
const HOST = `https://cpsu-test-api.herokuapp.com/api/camt2023`;
const PORT = 3500;

@Injectable()
export class TheaterRepository {
    
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;
    }

    getMovie(id: number): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.baseUrl + `theaters/${id}/movies`);
    }

}
