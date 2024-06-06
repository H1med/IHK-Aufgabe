package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String feedback;
    private int rating;

    public Rating(String feedback, int rating) {
        this.feedback = feedback;
        this.rating = rating;
    }

    // No-arg constructor required by JPA
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
