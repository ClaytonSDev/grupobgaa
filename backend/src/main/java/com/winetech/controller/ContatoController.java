package com.winetech.controller;

import com.winetech.model.MensagemContato;
import com.winetech.repository.MensagemContatoRepository;
import com.winetech.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contato")
@CrossOrigin(origins = "http://localhost:5173") // permite chamadas do frontend
public class ContatoController {

    @Autowired
    private MensagemContatoRepository repository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Void> receberMensagem(@RequestBody MensagemContato mensagem) {
        // Salva no banco
        repository.save(mensagem);

        // Envia e-mail
        emailService.enviar(mensagem);

        // Retorna status 201 Created
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
