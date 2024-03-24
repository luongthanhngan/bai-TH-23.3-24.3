document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.querySelector(".card_action button:nth-child(1)");
    const cartButton = document.querySelector(".card_action button:nth-child(2)");

    buyButton.addEventListener("click", function() {
        // Xử lý khi người dùng nhấn nút mua hàng
        alert("Bạn đã chọn mua sản phẩm này!");
    });

    cartButton.addEventListener("click", function() {
        // Xử lý khi người dùng nhấn nút thêm vào giỏ hàng
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });
});