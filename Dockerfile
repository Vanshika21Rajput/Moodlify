FROM openjdk:21-slim
WORKDIR "/app"
COPY target/Moodlify-0.0.1-SNAPSHOT.jar /app/Moodlify.jar
CMD ["java","-jar","Moodlify-0.0.1-SNAPSHOT.jar"]