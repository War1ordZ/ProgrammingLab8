FROM openjdk:19-jdk-slim

WORKDIR /app

COPY target/LabBack-0.0.1-SNAPSHOT.jar app.jar

ENV SERVER_PORT=8080

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]