package com.winetech.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "mensagens_contato")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MensagemContato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String assunto; // ← novo campo incluído

    @Column(nullable = false, length = 1000)
    private String mensagem;
}
