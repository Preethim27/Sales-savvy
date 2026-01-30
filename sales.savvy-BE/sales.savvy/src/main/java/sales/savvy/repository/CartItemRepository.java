package sales.savvy.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import sales.savvy.entity.Cart;
import sales.savvy.entity.CartItems;
import sales.savvy.entity.Product;

public interface CartItemRepository extends JpaRepository<CartItems, Long>{
	CartItems findByCartAndProduct(Cart cart, Product product);

	CartItems findByCart_IdAndProduct_Id(Long id, Long pid);

}
