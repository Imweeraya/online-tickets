import { Component } from "@angular/core";
import { TheaterRepository } from "../model/theater.repository";
import { Movie } from "../model/theater.model";

@Component({
    selector: "app-booking",
    templateUrl: "./booking.component.html",
})
export class HomeComponent {
    activeMenu = 1; // Default active menu
    activeMovie : Movie | undefined; // Currently selected movie

    constructor(private repository: TheaterRepository) {}

    changeMenu(menuId: number): void {
        this.activeMenu = menuId;
        this.getMovie(menuId); // Fetch movies for the selected theater
    }

     getMovie(id: number): void {
        this.repository.getMovie(id);
    }

    
}
