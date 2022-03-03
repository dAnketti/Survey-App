package com.amateurj.repository;

import com.amateurj.repository.entity.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IResponseRepository extends JpaRepository<Response,Long> {
}
