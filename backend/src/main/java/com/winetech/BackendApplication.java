package com.winetech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class BackendApplication {

	// ESTE É O BLOCO DE CARREGAMENTO E DIAGNÓSTICO.
	// Ele é executado antes do main() e antes da inicialização do Spring.
	static {
		Dotenv dotenv = null;
		try {
			dotenv = Dotenv.configure()
					.ignoreIfMalformed()
					.load();

			// TENTATIVA: Injeta as variáveis no System Properties
			dotenv.entries().forEach(entry -> {
				System.setProperty(entry.getKey(), entry.getValue());
			});

			// DIAGNÓSTICO: Estas linhas mostram o que foi REALMENTE carregado.
			System.out.println("DIAGNÓSTICO: DB_USERNAME carregado: " + dotenv.get("DB_USERNAME"));
			System.out.println("DIAGNÓSTICO: DB_PASSWORD carregado: " + dotenv.get("DB_PASSWORD"));

		} catch (Exception e) {
			// Isso deve pegar o erro se o arquivo .env não for encontrado
			System.err.println("ERRO GRAVE DE LEITURA DO ARQUIVO .ENV: " + e.getMessage());
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}