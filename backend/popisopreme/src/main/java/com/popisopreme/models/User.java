package com.popisopreme.models;
import org.springframework.security.crypto.bcrypt.BCrypt;

public class User {
	
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private String password;
    private boolean isActive;
    private Role role;

    public User(String fname, String lname, String email, String username,String pass, boolean active, Role role) {
        
    	firstName = fname;
    	lastName = lname;
        this.email = email;
        this.username = username;
        this.role = role;
        this.setRawPassword(password);
        isActive = active;
    }

    public User() {
    	
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String fname) {
        this.firstName = fname;
    }
    
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lname) {
        this.lastName = lname;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getIsActive() {
    	return isActive;
    }
    
    public void setIsActive(boolean active) {
    	isActive = active;
    }
    
    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String uname) {
        this.username = uname;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }

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
