import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rating } from '../rating';
import { RatingServiceService } from '../rating-service.service';

@Component({
    selector: 'app-rating-form',
    templateUrl: './rating-form.component.html',
    styleUrls: ['./rating-form.component.scss'],
})
export class RatingFormComponent {
    grading: number = 1;
    feedback: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ratingService: RatingServiceService,
    ) {}

    onSubmit() {
        const rating = new Rating(this.feedback, this.grading);
        this.ratingService
            .save(rating)
            .subscribe((result: any) => this.gotoRatingList());
    }

    gotoRatingList() {
        this.router.navigate(['/ratings']);
    }
}
