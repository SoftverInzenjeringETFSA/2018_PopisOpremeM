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
		return userService.createUser(user);
	}
		
	@RequestMapping(method= RequestMethod.PUT, value="/updateUser/{id}")
	public String update(@RequestBody User user,@PathVariable String id) {
		return userService.updateUser(user, id);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value="/deleteUser/{id}")
	public String delete(@PathVariable String id) {
		return userService.deleteUser(id);
	}
	
	@RequestMapping(method= RequestMethod.POST, value="/login")
	public User login(@PathVariable String username, @PathVariable String password) {
		return userService.login(username, password);
	}
}

