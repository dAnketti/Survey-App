package com.amateurj.amateurj.controller;

import com.amateurj.dto.request.BranchRequestDto;
import com.amateurj.dto.response.BranchResponseDto;
import com.amateurj.mapper.IBranchMapper;
import com.amateurj.repository.entity.Branch;
import com.amateurj.service.BranchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/branch")
@RequiredArgsConstructor
public class BranchController {
    private final BranchService branchService;
    private final IBranchMapper branchMapper;

    @PostMapping("/save")
    public ResponseEntity<String> save (@RequestBody BranchRequestDto branchRequestDto){
        Branch branch = branchMapper.toBranch(branchRequestDto);
        branchService.save(branch);
        return ResponseEntity.ok("Kayıt Başarılı");
    }

    @PutMapping("/update")
    public ResponseEntity<String> update (@RequestBody BranchRequestDto branchRequestDto){
        Branch branch = branchMapper.toBranch(branchRequestDto);
        branchService.save(branch);
        return ResponseEntity.ok("Güncelleme Başarılı");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete (@RequestBody long id){
        Branch branch = branchService.findById(id);
        branchService.delete(branch);
        return ResponseEntity.ok("Silme İşlemi Başarılı");
    }

    @PostMapping("/findall")
    public ResponseEntity<List<Branch>> findAll () {
        return ResponseEntity.ok(branchService.findAll());
    }

    @PostMapping("/getbranches")
    public ResponseEntity<List<BranchResponseDto>> getBranches () {
        return ResponseEntity.ok(branchService.getBranches());
    }
}
