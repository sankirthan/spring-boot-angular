package com.example.springbootangular.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootangular.model.Greeting;

@RestController
@RequestMapping("/api/greeting")
public class GreetingController {

	@GetMapping
	public Greeting greeting() {
		return new Greeting("Hello Angular from Spring Boot");
	}
	
}
