package sales.savvy.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public String removeCartItem(@RequestParam String username,
									@RequestParam int productId) {
		service.removeCartItem(username, productId);
		return "Deleted successfully";
	}
	
	@DeleteMapping("/clearCart")
	public ResponseEntity<String> clearCart(@RequestParam String username) {
		try {
			service.clearCart(username);
			return ResponseEntity.ok("Cart cleared successfully");
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error clearing cart: " + e.getMessage());
		}
	}
}
