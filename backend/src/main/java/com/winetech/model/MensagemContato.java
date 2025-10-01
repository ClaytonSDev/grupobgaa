package com.winetech.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "mensagens_contato")
@Getter // Adiciona todos os métodos GETTERS
@Setter // Adiciona todos os métodos SETTERS
@NoArgsConstructor // Adiciona o construtor sem argumentos (necessário para JPA/Hibernate)
@AllArgsConstructor // Adiciona um construtor com todos os campos (útil para testes)
public class MensagemContato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false, length = 1000)
    private String mensagem;

    // Todos os Getters e Setters estão implicitamente aqui, graças ao Lombok!
}