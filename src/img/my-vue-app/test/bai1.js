let products = ["mercedes", "audi", "ford", "lamborghini"];

const showProduct = () => {
    if (products.length === 0) {
        console.log("Không có sản phẩm để hiển thị.");
    } else {
        console.log("Các sản phẩm trong mảng:");
        for (let i = 0; i < products.length; i++) {
            console.log(products[i]);
        }
    }
}
const addProduct = () => {
    let productName = prompt("Nhập tên sản phẩm:");
    while (productName.length < 5) {
        productName = prompt("Tên sản phẩm phải có ít nhất 5 ký tự. Vui lòng nhập lại:");
    }
    products.push(productName);
    console.log("Sản phẩm đã được thêm vào mảng.");
}

const removeProduct = () => {
    let productName = prompt("Nhập tên sản phẩm cần xóa:");
    let index = products.indexOf(productName);
    if (index !== -1) {
        products.splice(index, 1);
        console.log("Sản phẩm đã được xóa khỏi mảng.");
        showProduct();
    } else {
        console.log("Không tìm thấy sản phẩm cần xóa.");
    }
}

const updateProduct = () => {
    let productName = prompt("Nhập tên sản phẩm cần cập nhật:");
    let index = products.indexOf(productName);
    if (index !== -1) {
        let newProductName = prompt("Nhập tên sản phẩm mới:");
        products[index] = newProductName;
        console.log("Sản phẩm đã được cập nhật.");
        showProduct();
    } else {
        console.log("Không tìm thấy sản phẩm cần cập nhật.");
    }
}

const removeAllProduct = () => {
    products = [];
    console.log("Tất cả sản phẩm đã được xóa khỏi mảng.");
    showProduct();
}

showProduct();

addProduct();

removeProduct();

updateProduct();

removeAllProduct();