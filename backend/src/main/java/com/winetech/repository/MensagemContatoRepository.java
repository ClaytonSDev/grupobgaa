package com.winetech.repository;

import com.winetech.model.MensagemContato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MensagemContatoRepository extends JpaRepository<MensagemContato, Long> {
    // Não precisa de código aqui! Os métodos CRUD básicos já estão prontos.
}