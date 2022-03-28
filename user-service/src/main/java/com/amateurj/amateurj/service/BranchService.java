package com.amateurj.amateurj.service;

import com.amateurj.dto.response.BranchResponseDto;
import com.amateurj.mapper.IBranchMapper;
import com.amateurj.repository.IBranchRepository;
import com.amateurj.repository.entity.Branch;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BranchService {
    
    private final IBranchRepository branchRepository;
    private final IBranchMapper branchMapper;

    public void save(Branch branch){
        branchRepository.save(branch);
    }

    public void update(Branch branch){
        branchRepository.save(branch);
    }

    public void delete(Branch branch){
        branchRepository.delete(branch);
    }

    public List<Branch> findAll(){
        return branchRepository.findAll();
    }

    public List<BranchResponseDto> getBranches(){
        List<Branch> branches = branchRepository.findAll();
        List<BranchResponseDto> branchResponseDtoList = new ArrayList<>();
        for (int i = 0; i < branches.size(); i++) {
            BranchResponseDto branchResponseDto = branchMapper.toBranchResponseDto(branches.get(i));
            branchResponseDtoList.add(branchResponseDto);
        }
        return branchResponseDtoList;
    }

    public Branch findById(long id){
        Optional<Branch> branch = branchRepository.findById(id);
        if (branch.isPresent())
            return branch.get();
        else
            return null;
    }
}
