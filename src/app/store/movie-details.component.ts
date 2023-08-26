import { Component } from "@angular/core";
import { Movie } from "../model/theater.model";
import { TheaterRepository } from "../model/theater.repository";

@Component({
    selector: "movie-detail",
    templateUrl: "./movie-details.component.html",
})
export class MovieDetails {
    activeMovie : Movie | undefined; 
    constructor(private repository: TheaterRepository) {}
    
    getMovie(id: number): void {
        this.repository.getMovie(id);
    }

}
