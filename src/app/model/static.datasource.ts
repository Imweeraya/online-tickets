import { Injectable } from '@angular/core';
import { Movie, SeatData, Theater } from './theater.model';
import { Observable, from } from 'rxjs';


@Injectable()
export class StaticDataSource {
  private theaters: Theater[] = [
    new Theater(
      1,
      'โรงภาพยนตร์ 1',
      new Movie(
        'บลู บีเทิล',
        'Action, Adventure, Sci - Fi',
        'G',
        130,
        'https://3bugs.com/online-tickets/images/movie01.jpg'
      ),
      200,
      new SeatData(
        1,
        'some-show-time',
        1,
        [] // Add unavailable seats as needed
      )
    ),
    new Theater(
      2,
      'โรงภาพยนตร์ 2',
      new Movie(
        'บาร์บี้',
        'Adventure, Comedy, Fantasy',
        'G',
        115,
        'https://3bugs.com/online-tickets/images/movie02.jpg'
      ),
      180,
      new SeatData(
        2,
        'another-show-time',
        2,
        [] // Add unavailable seats as needed
      )
    ),
    new Theater(
      3,
      'โรงภาพยนตร์ 3',
      new Movie(
        'มอนโด รัก | โพสต์ | ลบ | ลืม',
        'Romantic, Sci - Fi',
        '13',
        130,
        'https://3bugs.com/online-tickets/images/movie03.jpg'
      ),
      250,
      new SeatData(
        3,
        'yet-another-show-time',
        3,
        [] // Add unavailable seats as needed
      )
    ),
    new Theater(
      4,
      'โรงภาพยนตร์ 4',
      new Movie(
        'นะหน้าทอง',
        'Erotic, Horror',
        '18',
        100,
        'https://3bugs.com/online-tickets/images/movie04.jpg'
      ),
      180,
      new SeatData(
        4,
        'last-show-time',
        4,
        [] // Add unavailable seats as needed
      )
    ),
    
  ];

  getTheater(): Observable<Theater[]> {
    return from([this.theaters]);
  }
  

  getTheaterById(id: number): Theater | undefined {
    return this.theaters.find(theater => theater.id === id);
  }

  getMovieById(theaterId: number, movieId: number): Movie | undefined {
    const theater = this.getTheaterById(theaterId);
    if (theater) {
      return theater.movie;
    }
    return undefined;
  }

  
}
