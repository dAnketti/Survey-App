package com.amateurj.repository;

import com.amateurj.repository.entity.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IAuthUserRepository extends JpaRepository<AuthUser,Long> {
    Optional<AuthUser> findByEmailAndPassword(String email, String password);
}
