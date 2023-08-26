import { Component, Injectable } from "@angular/core";
import { TheaterRepository } from "../model/theater.repository";
import { Movie } from "../model/theater.model";

@Injectable({
    providedIn: "root"
})
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {
    activeMenu = 1; 
    activeMovie : Movie | undefined; 
    constructor(private repository: TheaterRepository) {}

    changeMenu(menuId: number): void {
        this.activeMenu = menuId;
        this.getMovie(menuId); 
    }

     getMovie(id: number): void {
        this.repository.getMovie(id);
    }

    

    
}
