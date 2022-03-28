package com.amateurj.amateurj.repository;

import com.amateurj.repository.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICourseRepository extends JpaRepository<Course,Long> {
    Optional<Course> findByAuthId(Long id);
}
