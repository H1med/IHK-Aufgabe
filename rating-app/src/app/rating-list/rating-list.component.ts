import { Component, OnInit } from '@angular/core';

import { Rating } from '../rating';
import { RatingServiceService } from '../rating-service.service';

@Component({
    selector: 'app-rating-list',
    templateUrl: './rating-list.component.html',
    styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
    ratings: Rating[] = [];

    constructor(private ratingService: RatingServiceService) {}

    ngOnInit() {
        this.ratingService.findAll().subscribe((data) => {
            this.ratings = data;
        });
    }

    getAverageRating(): number {
        if (this.ratings.length === 0) {
            return 0;
        }
        const total = this.ratings.reduce(
            (sum, rating) => sum + rating.rating,
            0,
        );
        return total / this.ratings.length;
    }
}
