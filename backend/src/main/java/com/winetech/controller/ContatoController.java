package com.winetech.controller;

import com.winetech.model.MensagemContato;
import com.winetech.repository.MensagemContatoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
public class ContatoController {

    @Autowired
    private MensagemContatoRepository repository;

    @PostMapping
    public ResponseEntity<?> receberMensagem(@Valid @RequestBody MensagemContato mensagem) {
        MensagemContato salva = repository.save(mensagem);
        return ResponseEntity.status(201).body(salva);
    }

    @GetMapping("/todos")
    public ResponseEntity<?> listarMensagens() {
        return ResponseEntity.ok(repository.findAll());
    }
}
