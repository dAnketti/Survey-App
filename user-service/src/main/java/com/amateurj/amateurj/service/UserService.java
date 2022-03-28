package com.amateurj.amateurj.service;

import com.amateurj.constants.UserTypes;
import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.dto.request.BranchRequestDto;
import com.amateurj.dto.request.ManagerRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.dto.response.UserResponseDto;
import com.amateurj.manager.IUserManager;
import com.amateurj.mapper.IBranchMapper;
import com.amateurj.mapper.IUserMapper;
import com.amateurj.repository.IUserRepository;
import com.amateurj.repository.entity.Branch;
import com.amateurj.repository.entity.Manager;
import com.amateurj.repository.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final IUserRepository userRepository;
    private final IUserMapper userMapper;
    private final IUserManager userManager;
    private final BranchService branchService;
    private final IBranchMapper branchMapper;
    private final ManagerService managerService;


    public void save(User user){
        user.setUserType(UserTypes.ADMIN);
        user.setCreatedDate(System.currentTimeMillis());
        userRepository.save(user);
    }
    public void update(User user){
        userRepository.save(user);
    }
    public void delete(User user){
        userRepository.delete(user);
    }
    public List<UserResponseDto> findAll(){
        return userRepository.findAll().stream().map(UserResponseDto::new).collect(Collectors.toList());
    }

    public String findByAuthId(AuthIdDto authIdDto){
        Optional<User> user = userRepository.findByAuthId(authIdDto.getAuthId());
        if (user.isPresent())
            return String.valueOf(user.get().getId());
        else
            return "Kullanıcı Bulunamadı";
    }

    public String addNewManager(ManagerRequestDto requestDto){
        RegisterRequestDto registerRequestDto = userMapper.toRegisterDto(requestDto);
        long id = userManager.save(registerRequestDto).getBody();
        Branch branch = branchService.findById(requestDto.getBranchId());
        Manager manager = userMapper.toManager(requestDto);
        manager.setAuthId(id);
        manager.setCreatedDate(System.currentTimeMillis());
        manager.setBranch(branch);
        manager.setUserType(UserTypes.MANAGER);
        if (branch != null)
            branch.setManager(manager);
        managerService.save(manager);
        return "Kayıt Başarılı";
    }

    public String addNewBranch(BranchRequestDto branchRequestDto){
        Branch branch = branchMapper.toBranch(branchRequestDto);
        branchService.save(branch);
        return "Kayıt Başarılı";
    }

}
