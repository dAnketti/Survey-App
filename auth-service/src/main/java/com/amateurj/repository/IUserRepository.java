package com.amateurj.repository;

import com.amateurj.repository.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<Auth,Long> {

}
