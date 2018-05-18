package com.popisopreme.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.popisopreme.models.Role;
import com.popisopreme.models.User;
import com.popisopreme.repositories.UserRepository;

@Service
public class UserService {

	private List<User> Users=new ArrayList<>(Arrays.asList(
		new User("ime1","prezime","email","username1","password1",true,new Role("admin")),
		new User("ime2","prezime","email","username2","password2",true,new Role("popisivac")),
		new User("ime3","prezime","email","username3","password3",true,new Role("popisivac")))); 

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	private UserRepository userRepository;
				
	public List<User> getAllUsers(){
		return Users;
	}
			
	public String createUser(User user) {
    	/*boolean postoji = false;
		User u = null;
		
		for(int x=0;x<Users.size();x++) {
			
			u = Users.get(x);
			
			if(u.getUsername().equals(uname)) {
				
				if(user.getPassword() != "") {
					
					if(user.getPassword().length() < 8) throw new Error("Å ifra mora sadrÅ¾avati minimalno 8 karaktera");
					user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
					u.setPassword(user.getPassword());
				}
				
				if(user.getUsername() != "") {
					
					if(user.getUsername().length() <3 || user.getUsername().length() >16) throw new Error("KorisniÄ�ko ime mora sadrÅ¾avati 3 do 16 karaktera");
					if(checkIfUsernameExists(user.getUsername())) throw new Error("KorisniÄ�ko ime je veÄ‡ u upotrebi");
				}
				
				postoji = true;
			}		
		}*/
    	try {
	    	if(user.getUsername().length() > 16 || user.getUsername().length() < 3 ) throw new Error("Korisnicko ime minimalno 3 karaktera, maksimalno 16");
	    	if(user.getPassword().length() < 8) throw new Error("Lozinka ima minimalno 8 znakova");
	   		Users.add(user);
    	}
    	catch(Exception e){
			return e.getMessage();
		}
    	return "{\"message\":\"Uspjesno kreirana user\"}";
	}
	
	public void deleteUser(String uname) {
		Users.removeIf(t -> t.getUsername().equals(uname));
	}

    public boolean checkIfUsernameExists(String username) {
    	
		for(int x=0;x<Users.size();x++) {
		
				if(Users.get(x).getUsername().equals(username)) {
					return true;
				}		
		}
		return false;
    }

	public User updateUser(User user, String uname) {
		
		boolean postoji = false;
		User u = null;
		
		for(int x=0;x<Users.size();x++) {
			
			u = Users.get(x);
			
			if(u.getUsername().equals(uname)) {
				
				if(user.getPassword() != "") {
					
					if(user.getPassword().length() < 8) throw new Error("Sifra mora sadrzavati minimalno 8 karaktera");
					user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
					u.setPassword(user.getPassword());
				}
				
				if(user.getUsername() != "") {
					
					if(user.getUsername().length() <3 || user.getUsername().length() >16) throw new Error("Korisnicko ime mora sadrzavati 3 do 16 karaktera");
					if(checkIfUsernameExists(user.getUsername()) && user.getUsername() != uname) throw new Error("Korisnicko ime je vec u upotrebi");
					u.setUsername(user.getUsername());
				}
				
				postoji = true;
			}		
		}
		
		if(postoji == false) throw new Error("Korisnik ne postoji");
		return u;
	}
	
}