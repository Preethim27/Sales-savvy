package sales.savvy.dto;

public class RemoveCartItem {
	private String username;
	private Long productId;
	public RemoveCartItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RemoveCartItem(String username, Long productId) {
		super();
		this.username = username;
		this.productId = productId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "RemoveCartItem [username=" + username + ", productId=" + productId + "]";
	}
	
	
}
