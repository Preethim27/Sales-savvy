package sales.savvy.service;

import java.util.List;

import sales.savvy.dto.LoginData;
import sales.savvy.entity.User;

public interface UserService {

	void addUser(User user);

	User getUser(String username);

	String validateUser(LoginData data);

	String addingUser(User user);

	List<User> getAllUsers();

	void deleteUser(Long id);

}
