package com.labback.services;

import com.labback.data.domain.users.Role;
import com.labback.data.domain.users.User;
import com.labback.data.dto.UserDTO;
import com.labback.jwt.JwtProvider;
import com.labback.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    public void register(UserDTO userDTO) {
        User user = User.builder()
                .username(userDTO.getUsername())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
    }

    public String getUsernameFromToken(String token) {
        return jwtProvider.getUsernameFromJwt(token);
    }
}
