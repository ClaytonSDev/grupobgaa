package com.winetech.controller;

import com.winetech.model.Teste;
import com.winetech.repository.TesteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teste")
public class TesteController {

    private final TesteRepository repository;

    public TesteController(TesteRepository repository) {
        this.repository = repository;
    }

    // CREATE (POST) - URL: /teste
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED) // Retorna 201
    public Teste salvar(@RequestBody Teste teste) {
        return repository.save(teste);
    }

    // READ (GET) - URL: /teste
    @GetMapping
    public List<Teste> listar() {
        return repository.findAll();
    }

    // UPDATE (PUT) - URL: /teste/{id}
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK) // Retorna 200
    public Teste atualizar(@PathVariable Long id, @RequestBody Teste teste) {
        // Garante que o ID do objeto seja o mesmo da URL para atualizar
        teste.setId(id);
        return repository.save(teste);
    }

    // DELETE (DELETE) - URL: /teste/{id}
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT) // Retorna 204
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}