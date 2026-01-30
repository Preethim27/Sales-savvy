package sales.savvy.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sales.savvy.dto.CartData;
import sales.savvy.dto.CartItemDTO;
import sales.savvy.dto.RemoveCartItem;
import sales.savvy.entity.Cart;
import sales.savvy.entity.CartItems;
import sales.savvy.entity.Product;
import sales.savvy.entity.User;
import sales.savvy.repository.CartItemRepository;
import sales.savvy.repository.CartRepository;
import sales.savvy.repository.ProductRepository;
import sales.savvy.repository.UserRepository;

@Service
public class CartServiceImplementation implements CartService {
	@Autowired
	CartRepository cartRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	ProductRepository productRepo;
	
	@Autowired
	CartItemRepository cartItemRepo;
	
	
	@Override
	@Transactional
	public void addToCart(CartData data) {
		User user = userRepo.findByUsername(data.getUsername());
		if(user == null) {
			throw new RuntimeException("User not found");
		}
		
		System.out.println("USERNAME: " + data.getUsername());
		System.out.println("PRODUCT ID: " + data.getProductId());
		System.out.println("QUANTITY: " + data.getQuantity());

		Cart cart = cartRepo.findByUser(user);
		
		Product product = productRepo.findById(data.getProductId()).orElseThrow(() -> 
		new RuntimeException("Product not found"));
		if(cart == null) {
			cart = new Cart(user);
			cartRepo.save(cart);
		}
		
		CartItems item =  cartItemRepo.findByCartAndProduct(cart, product);
		if(item == null) {
			item = new CartItems();
			item.setProduct(product);
			item.setCart(cart);
			item.setQuantity(data.getQuantity());
		} else {
			item.setQuantity(item.getQuantity() + data.getQuantity());
		}
		
		cartItemRepo.save(item);
		
		}
	
	
	
	@Override
	@Transactional(readOnly = true)
	public List<CartItemDTO> getCartItems(String username) {
		User user = userRepo.findByUsername(username);
		Cart optCart = cartRepo.findByUser(user);
		if (optCart == null) return new ArrayList<>();

		Cart cart = optCart;
		List<CartItemDTO> out = new ArrayList<>();
		for (CartItems ci : cart.getItemList()) {
			Product p = ci.getProduct();
			out.add(new CartItemDTO(
					p.getId(), p.getName(), p.getDescription(),
					p.getPrice(), p.getImage(), ci.getQuantity()
					));
		}
		return out;
	}

	@Override
	@Transactional
	public void updateCartItem(CartData data) {
		User user = userRepo.findByUsername(data.getUsername());
		Cart cart = cartRepo.findByUser(user);
		
		Long pid = data.getProductId();
		CartItems item = cartItemRepo.findByCart_IdAndProduct_Id(cart.getId(), pid);
		if(item == null) {
			throw new RuntimeException("Cart item not found");
		}
		
		int newQty = (int)data.getQuantity();
		if(newQty > 0) {
			item.setQuantity(newQty);
			cartItemRepo.save(item);
		} else {
			cartItemRepo.delete(item);
		}
	}


	@Override
	public void removeCartItem(RemoveCartItem data) {
		// TODO Auto-generated method stub
		User user = userRepo.findByUsername(data.getUsername());
		Cart cart = cartRepo.findByUser(user);
		
		CartItems item = cartItemRepo.findByCart_IdAndProduct_Id(cart.getId(), data.getProductId());
		cartItemRepo.delete(item);
	}
}






