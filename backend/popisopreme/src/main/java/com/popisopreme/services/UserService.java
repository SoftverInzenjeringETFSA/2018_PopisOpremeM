package com.popisopreme.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.popisopreme.models.Role;
import com.popisopreme.models.User;

@Service
public class UserService {

	private List<User> Users=new ArrayList<>(Arrays.asList(
		new User("ime1","prezime","email","username1","password1",true,new Role("admin")),
		new User("ime2","prezime","email","username2","password2",true,new Role("popisivac")),
		new User("ime3","prezime","email","username3","password3",true,new Role("popisivac")))); 
				
	public List<User> getAllUsers(){
		return Users;
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
					
					if(user.getPassword().length() < 8) throw new Error("Šifra mora sadržavati minimalno 8 karaktera");
					user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
					u.setPassword(user.getPassword());
				}
				
				if(user.getUsername() != "") {
					
					if(user.getUsername().length() <3 || user.getUsername().length() >16) throw new Error("Korisničko ime mora sadržavati 3 do 16 karaktera");
					if(checkIfUsernameExists(user.getUsername()) && user.getUsername() != uname) throw new Error("Korisničko ime je već u upotrebi");
					u.setUsername(user.getUsername());
				}
				
				postoji = true;
			}		
		}
		
		if(postoji == false) throw new Error("Korisnik ne postoji");
		return u;
	}
	
}