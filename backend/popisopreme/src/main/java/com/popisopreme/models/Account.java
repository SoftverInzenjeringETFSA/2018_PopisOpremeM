package com.popisopreme.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Email;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;

@Entity
public class Account extends BaseModel {
    private String fullName;
    private String email;
    private String username;
    private String password;
    private Role role;

    public Account(String fullName, String email, String username, String password, Role role) {
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.role = role;

        this.setRawPassword(password);
    }

    public Account() {
    }

    @Basic
    @Column(name = "fullName", nullable = false)
    @Size(min = 4, max = 255) @NotNull
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Basic
    @Column(name = "email", unique = true, nullable = false)
    @Email @Size(max = 255) @NotNull
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    @Basic
    @Column(name = "username", unique = true, nullable = false)
    @Size(min = 4, max = 16) @NotNull
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password", nullable = false)
    @Size(min = 8, max = 255) @NotNull
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    @ManyToOne
    @JoinColumn(name = "roleId", referencedColumnName = "id", nullable = false)
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public void setRawPassword(String password) {
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
    }
}