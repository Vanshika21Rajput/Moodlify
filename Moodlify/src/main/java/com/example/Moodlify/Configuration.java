package com.example.Moodlify;

import org.springframework.context.annotation.Bean;


import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    public SecurityFilterChain method(HttpSecurity hs) throws Exception {
     return   (SecurityFilterChain)hs.csrf(o->o.disable())
             .oauth2Login(o->o.loginPage("/logins").defaultSuccessUrl("/home",true))
                .authorizeHttpRequests(o->o.requestMatchers("/logins","/register","/index.html","/home.html","/callback","/oauth2/**").permitAll().anyRequest().authenticated())
        .build();
    }
}
