package sales.savvy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sales.savvy.entity.Product;
import sales.savvy.repository.ProductRepository;

@Service
public class ProductServiceImplementation implements ProductService{
	@Autowired
	ProductRepository repo;

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

	@Override
	public void deleteProduct(Long id) {
		repo.deleteById(id);
	}


	@Override
	public Product searchProduct(Long id) {
		Product p = repo.findById(id).get();
		return p;
	}


}
