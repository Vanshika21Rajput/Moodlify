package com.example.Moodlify;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.DataInput;
import java.util.List;

import static org.springframework.security.config.Elements.HTTP;

@Service
public class service {
    @Autowired
    OAuth2AuthorizedClientService authorizedClientService ;

    public void getsongs(String mood) throws JsonProcessingException {
        System.out.print("hello jiii");
        String sg="pop";
        Float tarv=0.1f;
        Float tare=0.6f;
        Float tara=0.8f;


        RestTemplate rt=new RestTemplate();
        HttpHeaders  hd=new HttpHeaders();


        Authentication  authentication= SecurityContextHolder.getContext().getAuthentication();
        OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(
                "spotify", authentication.getName());

        String accessToken = authorizedClient.getAccessToken().getTokenValue();
        hd.set("Authorization","Token"+accessToken);
        HttpEntity ent=new HttpEntity<>(hd);

        String rec_uri="https://api.spotify.com/v1/recommendations?seed_genres=sg&target_valency=tarv&target_energy=tare";
 ResponseEntity<String> re=rt.exchange(rec_uri, HttpMethod.GET,ent,String.class);
        ObjectMapper obj=new ObjectMapper();
        obj.readValue( re.getBody(),Song.class);
        System.out.print(re.getBody());




    }


}
