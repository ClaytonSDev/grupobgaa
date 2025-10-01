package com.winetech.config;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EnvLoader {

    @PostConstruct
    public void loadEnv() {
        Dotenv dotenv = Dotenv.configure().load();
        dotenv.entries().forEach(entry ->
                System.setProperty(entry.getKey(), entry.getValue())
        );

        // Teste de carregamento das variáveis
        System.out.println("MAIL_HOST = " + System.getProperty("MAIL_HOST"));
        System.out.println("DB_HOST = " + System.getProperty("DB_HOST"));
    }
}
