package sales.savvy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import sales.savvy.dto.LoginData;
import sales.savvy.entity.User;
import sales.savvy.service.UserService;

@CrossOrigin("*")
@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/signUp")
	public String addUser(@RequestBody User user) {		
		return service.addingUser(user);
	}
	
	@PostMapping("/signIn")
	public String signIn(@RequestBody LoginData data) {
		return service.validateUser(data);
	}
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable Long id) {
		service.deleteUser(id);
	}
}

