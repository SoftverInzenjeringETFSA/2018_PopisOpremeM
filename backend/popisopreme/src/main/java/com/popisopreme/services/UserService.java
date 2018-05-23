package com.popisopreme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.popisopreme.models.User;
import com.popisopreme.repositories.UserRepository;

import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

@Service
public class UserService {

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	private UserRepository userRepository;
				
	public List<User> getAllUsers(){
		
		return userRepository.findAll();
	}
			
	public String createUser(User user) {
    	
    	try {
    		
    		if(checkIfUsernameExists(user.getUsername())) throw new Error("Korisnicko ime je vec u upotrebi");
	    	if(user.getUsername().length() > 16 || user.getUsername().length() < 3 ) throw new Error("Korisnicko ime minimalno 3 karaktera, maksimalno 16");
	    	if(user.getPassword().length() < 8) throw new Error("Lozinka ima minimalno 8 znakova");
	   		userRepository.save(new User(user));
    	}
    	catch(Exception e){
			return e.getMessage();
		}
    	return "{\"message\":\"Uspješno registrovan korisnik\"}";
	}
	
	public String deleteUser(String id) {

		try {
			userRepository.deleteById(id);
			}
			catch(Exception e) {
				return e.getMessage();
			}
			return "Delete successful";
	}

    public boolean checkIfUsernameExists(String username) {
    	
    	if (userRepository.findByUsername(username) == null) return false;
    	
		return true;
    }

	public String updateUser(User user, String id) {
		
		try {
			
		Optional<User> found = userRepository.findById(id);
		
		if (found == null) throw new Error("Korisnik ne postoji");
		
		User toUpdate = found.get();
		
		if(user.getPassword() != "") {
			
			if(user.getPassword().length() < 8) throw new Error("Šifra mora sadrzavati minimalno 8 karaktera");
			
			toUpdate.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		}
		if(user.getUsername() != "") {
			
			if(user.getUsername().length() <3 || user.getUsername().length() >16) throw new Error("Korisnicko ime mora sadrzavati 3 do 16 karaktera");
			
			if(checkIfUsernameExists(user.getUsername())) throw new Error("Korisnicko ime je vec u upotrebi");
			
			toUpdate.setUsername(user.getUsername());
		}
		userRepository.save(toUpdate);
		}
		catch(Exception e) {
			return e.getMessage();
		}
		return "{\"message\":\"Uspješno izmijenjen korisnik\"}";
	}
	
	public User login(String username, String password) {
		if (userRepository.findByUsername(username) != null) 
			return userRepository.findByUsername(username);
		return new User();
	}
	
}