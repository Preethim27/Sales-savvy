package sales.savvy.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "user_id", unique = true)
	private User user;
	
	@OneToMany(
		mappedBy = "cart",
		cascade = CascadeType.ALL,
		orphanRemoval = true
	)
	@JsonManagedReference
	private List<CartItems> itemList = new ArrayList<CartItems>();

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(Long id, List<CartItems> itemList) {
		super();
		this.id = id;
		this.itemList = itemList;
	}

	public Cart(User user) {
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<CartItems> getItemList() {
		return itemList;
	}

	public void setItemList(List<CartItems> itemList) {
		this.itemList = itemList;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", user=" + user + ", itemList=" + itemList + "]";
	}
}
