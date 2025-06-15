package com.example.Moodlify;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.DataInput;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.security.config.Elements.HTTP;

@Service
public class service {
    @Autowired
    OAuth2AuthorizedClientService authorizedClientService ;

    public List<String> getsongs( String mood) throws JsonProcessingException {
        System.out.print("hello jiii");
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(
                "spotify", authentication.getName());

        OAuth2AccessToken accessToken = authorizedClient.getAccessToken();

        System.out.println(accessToken);
        String token= accessToken.getTokenValue();
        System.out.println("oauthclient"+authorizedClient);
        System.out.println( "expire"+authorizedClient.getAccessToken().getExpiresAt()
         );
        System.out.println( "issued"+authorizedClient.getAccessToken().getIssuedAt()
        );

        System.out.println( "tkn"+token);

        MultiValueMap<String ,String> mp= new LinkedMultiValueMap<>();
        String m=mood.toLowerCase();
        System.out.println("Matched: default (mood was: " + m + ")");
        switch (m) {
            case "happy" -> {
                mp.add("q","artist:Atif Aslam");
                mp.add("type","track");
                mp.add("limit","3");

            }
            case "energetic"->
            {
                mp.add("q","artist:Dua Lipa");
                mp.add("type","track");
                mp.add("limit","5");


            }
            case "romantic"->
            {
                mp.add("q","artist:Taylor Swift");
                mp.add("type","track");
                mp.add("limit","5");
            }
            case "relaxed"->
            {
                mp.add("q","artist:KK");
                mp.add("type","track");
                mp.add("limit","5");
            }
            default -> {
                System.out.println("Matched: default (mood was: " + mood + ")");
                mp.add("q", "artist:Arijit Singh");
                mp.add("type", "track");
                mp.add("limit", "5");

            }
            }

//        MultiValueMap<String,String>mp=new LinkedMultiValueMap<>();
//        mp.add("q","Arijit+Singh+All+Sad+Songs");
//        mp.add("type","track");
//        mp.add("limit","10");
        UriComponentsBuilder builder = UriComponentsBuilder
                .fromUriString("https://api.spotify.com/v1/search")
               .queryParams(mp);
        RestTemplate rt = new RestTemplate();
        String f=builder.toUriString();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        System.out.println("token"+authorizedClient.getAccessToken().getScopes().toString());
        HttpEntity<?> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response = rt.exchange(
                f,
                HttpMethod.GET,
                entity,
                String.class
        );

                ObjectMapper objectMapper=new ObjectMapper();
        JsonNode root = objectMapper.readTree(response.getBody());
        JsonNode items = root.path("tracks").path("items");
        System.out.println(items);
        List<String> songs = new ArrayList<>();



        for (JsonNode item : items) {
            String id = item.path("id").asText();
            String name = item.path("name").asText();
            String uri = item.path("external_urls").path("spotify").asText();

            songs.add(objectMapper.writeValueAsString(new Song(id, name, uri)));
        }
        System.out.println("fill uri"+f);
        System.out.println(songs);

//        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
//            ObjectMapper mapper = new ObjectMapper();
//            JsonNode root = mapper.readTree(response.getBody());
//            System.out.println(response.getBody());
//            //  System.out.println("Track: " + root.get("tracks").get(0).get("name").asText());
//        } else {
//            System.out.println("Status: " + response.getStatusCode());
//            System.out.println("Body: " + response.getBody()); // might be null
//        }

//        System.out.println("Status: " + response.getStatusCode());
//        System.out.println("Body: " + response.getBody());
        // Print headers too
//       ResponseEntity.ok();
       System.out.println("songs list: " +  songs);
        return  songs;

    }

    }







