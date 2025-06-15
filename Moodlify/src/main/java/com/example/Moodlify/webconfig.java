package com.example.Moodlify;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class webconfig implements WebMvcConfigurer {
    @Override

    public void addCorsMappings(CorsRegistry reg)
    {
        reg.addMapping("https://moodlify.onrender.com")
                .allowedOrigins("*")
                .allowedMethods("*");
    }
}
