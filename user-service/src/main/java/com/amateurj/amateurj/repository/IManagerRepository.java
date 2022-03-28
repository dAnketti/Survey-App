package com.amateurj.amateurj.repository;

import com.amateurj.repository.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IManagerRepository extends JpaRepository<Manager,Long> {
    Optional<Manager> findByAuthId(Long id);
}
