export class Rating {
    id?: string;
    feedback: string;
    rating: number;

    constructor(feedback: string, rating: number) {
        this.feedback = feedback;
        this.rating = rating;
    }
}
