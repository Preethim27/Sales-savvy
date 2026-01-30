package sales.savvy.service;

import java.util.List;

import sales.savvy.dto.CartData;
import sales.savvy.dto.CartItemDTO;
import sales.savvy.dto.RemoveCartItem;

public interface CartService {

	void addToCart(CartData data);

	List<CartItemDTO> getCartItems(String username);

	void updateCartItem(CartData data);

	void removeCartItem(RemoveCartItem data);
	
}
