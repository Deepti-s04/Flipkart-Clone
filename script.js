function searchProduct() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product");
  
    products.forEach(function(product) {
      let productName = product.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  