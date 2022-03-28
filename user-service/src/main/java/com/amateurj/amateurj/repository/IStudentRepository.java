package com.amateurj.amateurj.repository;

import com.amateurj.repository.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IStudentRepository extends JpaRepository<Student,Long> {
    Optional<Student> findByAuthId(Long id);
}
