package com.winetech.service;

import com.winetech.model.MensagemContato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviar(MensagemContato mensagem) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo("winetech33@gmail.com"); // destino fixo ou dinâmico
        email.setSubject("Nova mensagem de contato: " + mensagem.getAssunto());
        email.setText("Nome: " + mensagem.getNome() + "\nEmail: " + mensagem.getEmail() +
                "\nAssunto: " + mensagem.getAssunto() + "\nMensagem:\n" + mensagem.getMensagem());

        mailSender.send(email);
    }
}
