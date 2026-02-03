package sales.savvy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sales.savvy.dto.LoginData;
import sales.savvy.entity.User;
import sales.savvy.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
	@Autowired
	UserRepository repo;

	@Override
	public void addUser(User user) {
		repo.save(user);
	}

	@Override
	public User getUser(String username) {
		return repo.findByUsername(username);
	}

	public String validateUser(LoginData data) {
		String webUsername = data.getUsername();
		String webPassword = data.getPassword();
		User u = getUser(webUsername);
		
		if(u == null) {
			return "invalid";
		} else {
			String dbPassword = u.getPassword();
			if(webPassword.equals(dbPassword)) {
				String role = u.getRole();
				if("admin".equals(role)) 
					return "admin";
				else 
					return "customer";
			}
			else 
				return "invalid";
		}
	}

	@Override
	public String addingUser(User user) {
		String username = user.getUsername();
		User u = getUser(username);
		if(u == null) {
			addUser(user);
			return "success";
		} else {
			return "fail";
		}
	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public void deleteUser(Long id) {
		repo.deleteById(id);
	}
	
}
