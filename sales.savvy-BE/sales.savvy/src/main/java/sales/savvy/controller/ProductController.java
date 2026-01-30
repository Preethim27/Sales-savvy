package sales.savvy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sales.savvy.entity.Product;
import sales.savvy.service.ProductService;

@CrossOrigin("*")
@RestController
public class ProductController {
	@Autowired
	ProductService service;
	
	@PostMapping("/addProduct") 
	public String addProduct(@RequestBody Product product) {
		service.addProduct(product);
		return "success"; 
	}
	
	@GetMapping("/searchProduct")
	public Product searchProduct(@RequestParam Long id) {
		return service.searchProduct(id);
	}
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts() {
		return service.getAllProducts();
	}
	
	@PostMapping("/updateProduct") 
	public Product updateProduct(@RequestBody Product product) {
		return service.updateProduct(product);
	}
	
	@GetMapping("/deleteProduct")
	public void deleteProduct(Long id) {
		service.deleteProduct(id);
	}
}
