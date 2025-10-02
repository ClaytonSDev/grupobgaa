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
        try {
            // 1. Email para a WineTech
            SimpleMailMessage emailParaEmpresa = new SimpleMailMessage();
            emailParaEmpresa.setTo("winetech33@gmail.com");
            emailParaEmpresa.setSubject("Nova mensagem de contato: " + mensagem.getAssunto());
            emailParaEmpresa.setText("Nome: " + mensagem.getNome() + "\nEmail: " + mensagem.getEmail() +
                    "\nAssunto: " + mensagem.getAssunto() + "\nMensagem:\n" + mensagem.getMensagem());
            mailSender.send(emailParaEmpresa);

            // 2. Resposta automática para o cliente
            SimpleMailMessage respostaParaCliente = new SimpleMailMessage();
            respostaParaCliente.setTo(mensagem.getEmail());
            respostaParaCliente.setSubject("Recebemos sua mensagem!");
            respostaParaCliente.setText("Olá " + mensagem.getNome() + ",\n\n" +
                    "Agradecemos por entrar em contato conosco. Recebemos sua mensagem com o assunto \"" +
                    mensagem.getAssunto() + "\" e responderemos em breve.\n\n" +
                    "Atenciosamente,\nEquipe WineTech 🍷");
            mailSender.send(respostaParaCliente);

            System.out.println("Emails enviados com sucesso!");
        } catch (Exception e) {
            System.err.println("Erro ao enviar emails:");
            e.printStackTrace();
        }
    }
}
