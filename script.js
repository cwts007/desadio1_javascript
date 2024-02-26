let quantity = 0;
let total = 0;
const price = 400000;

document.getElementById("plus").addEventListener("click", function () {
  quantity++;
  total = quantity * price;
  document.getElementById("quantity").innerText = quantity;
  document.getElementById("total").innerText = total;
});

document.getElementById("minus").addEventListener("click", function () {
  if (quantity > 0) {
    quantity--;
    total = quantity * price;
    document.getElementById("quantity").innerText = quantity;
    document.getElementById("total").innerText = total;
  }
});
