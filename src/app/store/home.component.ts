import { Component, OnInit } from "@angular/core";
import { TheaterRepository } from "../model/theater.repository"; // Import the TheaterRepository
import { Theater } from "../model/theater.model"; // Import the Theater class

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    theaters: Theater[] = [];

    constructor(private theaterRepository: TheaterRepository) {}

    ngOnInit(): void {
        this.loadTheaters();
    }

    loadTheaters(): void {
        this.theaterRepository.getTheaters().subscribe(
            theaters => {
                this.theaters = theaters;
            },
            error => {
                console.error("An error occurred while fetching theaters:", error);
            }
        );
    }
}
