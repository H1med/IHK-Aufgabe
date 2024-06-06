package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api/ratings")
@CrossOrigin(origins = "http://localhost:4200")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @PostMapping
    public Rating createRating(@RequestBody Rating rating) {
        return ratingRepository.save(rating);
    }

    @GetMapping
    public List<Rating> getAllRatings() {
        return (List<Rating>) ratingRepository.findAll();
    }
}

