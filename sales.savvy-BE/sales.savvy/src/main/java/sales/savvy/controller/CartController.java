package sales.savvy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sales.savvy.dto.CartData;
import sales.savvy.dto.CartItemDTO;
import sales.savvy.dto.RemoveCartItem;
import sales.savvy.service.CartService;

@CrossOrigin("*")
@RestController
public class CartController {
	@Autowired
	CartService service;
	
	@PostMapping("/addToCart")
	public String addToCart(@RequestBody CartData data) {
		service.addToCart(data);
		return "success";
	}
	
	@PatchMapping("/updateCartItem")
	public String updateCartItem(@RequestBody CartData data) {
		service.updateCartItem(data);
		return "success";
	}
	
	@GetMapping("/viewCart")
	public List<CartItemDTO> getCartItems(@RequestParam String username) {
		return service.getCartItems(username);
	}
	
	@DeleteMapping("/removeCartItem") 
	public String removeCartItem(@RequestBody RemoveCartItem data) {
		service.removeCartItem(data);
		return "Deleted successfully";
	}
}
