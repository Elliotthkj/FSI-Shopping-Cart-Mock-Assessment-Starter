document.getElementById("quantity-up").addEventListener("click", increaseQuantity);

function increaseQuantity() {
  let totalQuantity = document.getElementsByClassName("total-quantity");
  totalQuantity.innerHTML = "Increasing quantity"; // Why is this not working?!
  console.log("I'm trying to increment quantity");
}
