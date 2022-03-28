package com.amateurj.amateurj.service;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.repository.IStudentRepository;
import com.amateurj.repository.entity.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final IStudentRepository studentRepository;

    public void save(Student student){
        studentRepository.save(student);
    }

    public void update(Student student){
        studentRepository.save(student);
    }

    public void delete(Student student){
        studentRepository.delete(student);
    }

    public void findAll(){
        studentRepository.findAll();
    }

    public String findByAuthId(AuthIdDto authIdDto){
        Optional<Student> student = studentRepository.findByAuthId(authIdDto.getAuthId());
        if (student.isPresent())
            return String.valueOf(student.get().getId());
        else
            return "Kullanıcı Bulunamadı";
    }
}
