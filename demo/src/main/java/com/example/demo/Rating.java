package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "feedback darf nicht leer sein")
    @Size(max = 255, message = "Das Feedback darf maximal 255 Zeichen lang sein")
    private String feedback;

    @Min(value = 1, message = "Die Bewertung muss mindestens 1 sein")
    @Max(value = 5, message = "Die Bewertung darf nicht größer als 5 sein")
    private int rating;

    public Rating(String feedback, int rating) {
        this.feedback = feedback;
        this.rating = rating;
    }

    protected Rating() {
    }

    public Long getId() {
        return this.id;
    }
    public String getFeedback() {
        return this.feedback;
    }
    public int getRating() {
        return this.rating;
    }
    public void setId(Long id) {
        this.id = id;
    }
}
