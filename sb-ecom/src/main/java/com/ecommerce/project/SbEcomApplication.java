package com.ecommerce.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SbEcomApplication {

	public static void main(String[] args) {
		System.out.println("=== Stripe Env Check ===");
		System.out.println("System.getenv: " + System.getenv("STRIPE_SECRET_KEY"));
		SpringApplication.run(SbEcomApplication.class, args);
	}


}
