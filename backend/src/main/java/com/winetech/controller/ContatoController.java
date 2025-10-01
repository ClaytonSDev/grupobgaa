package com.winetech.controller;

import com.winetech.model.MensagemContato;
import com.winetech.repository.MensagemContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato") // Este é o ENDPOINT que o frontend chamará
public class ContatoController {

    // O Spring injeta (instancia) o Repositório que acabamos de criar
    @Autowired
    private MensagemContatoRepository repository;

    // Mapeia requisições POST para /api/contato
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED) // Retorna o código 201 Created
    public MensagemContato receberMensagem(@RequestBody MensagemContato mensagem) {
        // O Spring Boot automaticamente converte o JSON recebido para o objeto MensagemContato
        return repository.save(mensagem);
    }
}