import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Theater } from "./theater.model";

const PROTOCOL = 'https';
const HOST = `https://cpsu-test-api.herokuapp.com/api/camt2023
/theaters`;
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;
  }
  
  getTheaters(): Observable<Theater[]> {
    return this.http.get<Theater[]>(this.baseUrl + "products");
  }
  
  
}
