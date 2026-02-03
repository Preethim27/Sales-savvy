package sales.savvy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sales.savvy.entity.Product;
import sales.savvy.repository.CartItemRepository;
import sales.savvy.repository.ProductRepository;

@Service
public class ProductServiceImplementation implements ProductService{
	@Autowired
	ProductRepository repo;
	
	@Autowired
	CartItemRepository cartItemRepo;

	@Override
	public void addProduct(Product product) {
		repo.save(product);
	}

	
	@Override
	public List<Product> getAllProducts() {
		return repo.findAll();
	}

	@Override
	public Product updateProduct(Product product) {
		return repo.save(product);
	}

	@Transactional
	public void deleteProduct(Long id) {
		System.out.println("Deleteing product with id: " + id);
		cartItemRepo.deleteByProductId(id);
		System.out.println("Deleted cart items for product " + id);
		repo.deleteById(id);
		System.out.println("Deleted product "+ id);		
	}


	@Override
	public Product searchProduct(Long id) {
		Product p = repo.findById(id).get();
		return p;
	}


}
