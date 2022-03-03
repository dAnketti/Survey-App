package com.amateurj.service;

import com.amateurj.repository.IResponseRepository;
import com.amateurj.repository.entity.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ResponseService {

    private final IResponseRepository repository;

    public void save(Response response){
        repository.save(response);
    }

    public List<Response> findAll(){
        return repository.findAll();
    }
}
