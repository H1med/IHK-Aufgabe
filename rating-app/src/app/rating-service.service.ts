import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Rating } from './rating';

@Injectable({
    providedIn: 'root',
})
export class RatingServiceService {
    private ratingUrl: string;

    constructor(private http: HttpClient) {
        this.ratingUrl = 'http://localhost:8080';
    }

    public findAll(): Observable<Rating[]> {
        return this.http.get<Rating[]>(this.ratingUrl);
    }

    public save(rating: Rating) {
        return this.http.post<Rating>(this.ratingUrl, rating);
    }
}
