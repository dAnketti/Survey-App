package com.amateurj.amateurj.repository;

import com.amateurj.repository.entity.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBranchRepository extends JpaRepository<Branch, Long> {
}
