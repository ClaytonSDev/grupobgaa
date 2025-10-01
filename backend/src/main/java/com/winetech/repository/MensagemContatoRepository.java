package com.winetech.repository;

import com.winetech.model.MensagemContato;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface MensagemContatoRepository extends JpaRepository<MensagemContato, Long> {
}