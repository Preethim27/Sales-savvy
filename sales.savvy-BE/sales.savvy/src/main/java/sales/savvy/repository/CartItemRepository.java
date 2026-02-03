package sales.savvy.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import sales.savvy.entity.Cart;
import sales.savvy.entity.CartItems;
import sales.savvy.entity.Product;

public interface CartItemRepository extends CrudRepository<CartItems, Long>{
	
	CartItems findByCartAndProduct(Cart cart, Product product);

	CartItems findByCart_IdAndProduct_Id(Long id, Long pid);

	@Transactional
	@Modifying
	@Query("DELETE FROM CartItems ci WHERE ci.cart = :cart")
	void deleteByCart(@Param("cart") Cart cart);
	
	@Transactional
	@Modifying
	@Query("DELETE FROM CartItems ci WHERE ci.cart = :cart")
	void deleteByProductId(@Param("productId") Long productId);
}
