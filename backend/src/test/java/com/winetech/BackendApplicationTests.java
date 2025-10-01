package com.winetech;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles; // <-- ADICIONE ESTA LINHA

@SpringBootTest
@ActiveProfiles("test") // <-- Linha que causou o erro de compilação
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}
}
