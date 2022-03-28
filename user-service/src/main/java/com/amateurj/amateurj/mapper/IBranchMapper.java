package com.amateurj.amateurj.mapper;

import com.amateurj.dto.request.BranchRequestDto;
import com.amateurj.dto.response.BranchResponseDto;
import com.amateurj.repository.entity.Branch;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface IBranchMapper {
    Branch toBranch(BranchRequestDto branchRequestDto);
    BranchResponseDto toBranchResponseDto(Branch branch);
}
