package com.amateurj.amateurj.service;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.repository.ICourseRepository;
import com.amateurj.repository.entity.Course;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {
    
    private final ICourseRepository classroomRepository;

    public void save(Course course){
        classroomRepository.save(course);
    }

    public void update(Course course){
        classroomRepository.save(course);
    }

    public void delete(Course course){
        classroomRepository.delete(course);
    }

    public void findAll(){
        classroomRepository.findAll();
    }

    public String findByAuthId(AuthIdDto authIdDto){
        Optional<Course> classroom = classroomRepository.findByAuthId(authIdDto.getAuthId());
        if (classroom.isPresent())
            return String.valueOf(classroom.get().getId());
        else
            return "Kullanıcı Bulunamadı";
    }
}
