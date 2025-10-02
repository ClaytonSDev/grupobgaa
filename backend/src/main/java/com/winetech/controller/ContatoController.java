package com.winetech.controller;

import com.winetech.model.MensagemContato;
import com.winetech.repository.MensagemContatoRepository;
import com.winetech.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
public class ContatoController {

    @Autowired
    private MensagemContatoRepository repository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<?> receberMensagem(@Valid @RequestBody MensagemContato mensagem) {
        try {
            // Salva no banco
            MensagemContato salva = repository.save(mensagem);

            // Dispara os e-mails
            emailService.enviar(salva);

            return ResponseEntity.status(201).body(salva);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao processar a mensagem: " + e.getMessage());
        }
    }

    @GetMapping("/todos")
    public ResponseEntity<?> listarMensagens() {
        return ResponseEntity.ok(repository.findAll());
    }
}
