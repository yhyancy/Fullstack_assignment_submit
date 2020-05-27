package com.fsd2020;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EnrekaserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnrekaserverApplication.class, args);
	}

}
