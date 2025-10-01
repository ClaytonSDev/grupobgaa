package com.winetech.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Indica que esta classe contém configurações
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Aplica a configuração a TODOS os endpoints (/**)
        registry.addMapping("/**")
                // ⚠️ Mude aqui se seu frontend NÃO usa a porta 3000 ou 5173
                .allowedOrigins("http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5173")

                // Métodos HTTP que o frontend pode usar
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")

                // Permite todos os headers (cabeçalhos)
                .allowedHeaders("*");

        // Se você usar autenticação baseada em sessão/cookies, descomente a linha abaixo:
        // .allowCredentials(true);
    }
}