package com.winetech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class BackendApplication {

	static {
		try {
			Dotenv dotenv = Dotenv.configure()
					.ignoreIfMalformed()
					.load();

			// Injeta variáveis no System Properties
			dotenv.entries().forEach(entry -> {
				System.setProperty(entry.getKey(), entry.getValue());
			});

			// Diagnóstico leve (sem expor senhas)
			System.out.println("Variáveis de ambiente carregadas com sucesso.");
		} catch (Exception e) {
			System.err.println("Erro ao carregar o arquivo .env: " + e.getMessage());
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
