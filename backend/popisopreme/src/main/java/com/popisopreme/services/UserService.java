package com.popisopreme.services;

import java.math.BigInteger;
import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Update.update;
import static org.springframework.data.mongodb.core.query.Query.query;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.popisopreme.models.User;
import com.popisopreme.repositories.UserRepository;

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
    		
    		//if (userRepository.findById(user.getUsername()) != null) throw new Error("Korisnicko ime je vec u upotrebi");
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
    	
    	//if (userRepository.findOne(query(where("username").is(username))) == null) return false;
		return true;
    }

	public String updateUser(User user, String id) {
		
		try {
		if (userRepository.findById(id) == null) throw new Error("Korisnik ne postoji");
		
		if(user.getPassword() != "") {
			
			if(user.getPassword().length() < 8) throw new Error("Sifra mora sadrzavati minimalno 8 karaktera");
			user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		}
		
		if(user.getUsername() != "") {
			
			if(user.getUsername().length() <3 || user.getUsername().length() >16) throw new Error("Korisnicko ime mora sadrzavati 3 do 16 karaktera");
			//if(checkIfUsernameExists(user.getUsername()) && user.getUsername() != uname) throw new Error("Korisnicko ime je vec u upotrebi");
		}
		userRepository.save(user);
		}
		catch(Exception e) {
			return e.getMessage();
		}
		return "{\"message\":\"Uspješno izmijenjen korisnik\"}";
	}
	
}