package com.popisopreme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.popisopreme.models.User;
import com.popisopreme.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}

	@RequestMapping(method= RequestMethod.POST, value="/createUser")
    public String create(@RequestBody User user) {
		userService.createUser(user);
		return "{\"message\":\"Uspješno napravljen user\"}";
	}
		
	@RequestMapping(method= RequestMethod.PUT, value="/updateUser/{username}")
	public String update(@RequestBody User user,@PathVariable String username) {
		userService.updateUser(user, username);
		return "{\"message\":\"Uspješno promijenjeni podaci\"}";
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value="/deleteUser/{username}")
	public String delete(@PathVariable String username) {
		userService.deleteUser(username);
		return "{\"message\":\"Uspješno obrisan korisnik\"}";
	}
}

