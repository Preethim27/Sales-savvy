package sales.savvy.service;

import java.util.List;

import sales.savvy.entity.Product;

public interface ProductService {

	void addProduct(Product product);

	
	List<Product> getAllProducts();

	Product updateProduct(Product product);

	void deleteProduct(Long id);
	
	Product searchProduct(Long id);
}
