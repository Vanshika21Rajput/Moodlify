package com.example.Moodlify;

public class Song {
    String id;
    String name;
    String uri;

    public Song(String id, String name, String uri) {
        this.id=id;
        this.name=name;
        this.uri=uri;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
