import { Movie, Theater } from "./theater.model";

export class Show {
    constructor(
        public id: number,
        public movie: Movie,
        public theater: Theater,
        public showTime: string,
        public unavailableSeats: string[]
    ) {}
}