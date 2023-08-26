import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Show } from "./show.model"; // Make sure to import the Show class
import { Theater } from "./theater.model";
import { Movie } from "./theater.model"; // Make sure to import the Movie class

const PROTOCOL = 'https';
const HOST = `https://cpsu-test-api.herokuapp.com/api/camt2023`;
const PORT = 3500;

@Injectable()
export class ShowRepository {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;
    }

    getShows(): Observable<Show[]> {
        return this.http.get<Show[]>(this.baseUrl + "shows");
    }

    getShowsByTheater(theater: Theater): Observable<Show[]> {
        return this.http.get<Show[]>(this.baseUrl + `theaters/${theater.id}/shows`);
    }

    getShowsByMovie(movie: Movie): Observable<Show[]> {
        return this.http.get<Show[]>(this.baseUrl + `movies/${movie.name}/shows`);
    }

}
