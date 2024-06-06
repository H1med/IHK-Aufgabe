import { Component } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
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

    specialCharacterValidator: ValidatorFn =
        Validators.pattern('[\\w\\s.,?!-]*');
    isFeedbackValid(): boolean {
        return !/[^\w\s.,?!-]/.test(this.feedback);
    }

    onSubmit() {
        if (!this.isFeedbackValid()) {
            return;
        }

        const rating = new Rating(this.feedback, this.grading);
        this.ratingService
            .save(rating)
            .subscribe((result: any) => this.gotoRatingList());
    }

    gotoRatingList() {
        this.router.navigate(['/ratings']);
    }
}
