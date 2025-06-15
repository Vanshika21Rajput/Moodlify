package com.example.Moodlify;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@Controller
public class Controllers {
    @Autowired
    service ser;
    @Autowired
    OAuth2AuthorizedClientService fg;
    @RequestMapping("/logins")
    public String metho() throws JsonProcessingException {

        return "redirect:index.html";
    }
    @RequestMapping("/home")
    public String methow() throws JsonProcessingException {

        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        System.out.print("username"+authentication.getName());
        OAuth2AuthorizedClient auth= fg.loadAuthorizedClient("spotify",authentication.getName());
        System.out.print("username"+auth);
     //   ser.getsongs("happy");
        return "redirect:home.html";
    }

@CrossOrigin("https://moodlify.onrender.com")
@ResponseBody
   @GetMapping("/fetch-songs/{mood}")
    public List<String> star(@PathVariable("mood") String m) throws JsonProcessingException {
        System.out.println("hiiii"+m);

         List<String>l=ser.getsongs(m);
        System.out.println("l"+l);
        return l;
    }



//    @RequestMapping ("/callback")
//    public void meth(@RequestParam("code") String code)
//    {
//        RestTemplate rp=new RestTemplate();
//        HttpHeaders hd=new HttpHeaders();
//        String clientId="8a8eb08b5ef94b9e956fdd5c761dfe31";
//        String clientSecret="2cddb1496262478eae2fd1e5ac86d4be";
//       hd.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//        hd.setBasicAuth(clientId, clientSecret); // Very important
//        MultiValueMap<String, String> form = new LinkedMultiValueMap<>();
//        form.add("grant_type", "authorization_code");
//        form.add("code", code); // From /callback?code=...
//        String redirectUri="https://localhost:8080/callback";
//        form.add("redirect_uri", redirectUri);
//
//
//        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(form, hd);
//        String tokenEndpoint="https://accounts.spotify.com/api/token";
//        ResponseEntity<String> response = rp.postForEntity(tokenEndpoint, request, String.class);
//        System.out.println("heelllooo jiiii inside callback");
//        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_USER"));
//        Authentication authentication = new UsernamePasswordAuthenticationToken("spotifyUserId_or_email", null, authorities);
//
//        // Step 4: Set authentication in security context
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//
//
//    }

//    @RequestMapping("/fetch-songs")
//    public ResponseEntity<List<Song>> meth(@RequestParam String m)
//    {
//        List<Song>l=ser.getsongsonmood(mood);
//
//
//
//
//    }

}
