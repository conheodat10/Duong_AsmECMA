// Tạo 1 mảng sản phẩm bao gồm các tên sản phẩm sau: mercedes, audi, ford, lamborghini
// Viết 1 hàm showProduct thực hiện chức năng hiển thị ra tất cả các sản phẩm trong mảng
// kiểm tra Xem mảng sản phẩm có phải là mảng trống hay không (2 điểm)
// if is a log log ra "không có sản phẩm để hiển thị"
// if array has data, log out all product iname in an array
// viết 1 hàm addProduct để thực hiện việc thêm sản phẩm  ( 2 điểm )
// nhập tên sản phẩm từ bàn phím
// kiểm tra nếu tên sản phẩm nhỏ hơn 5 ký tự thì bắt đầu nhập lại
// if data input into invalid, allow add on an array products
// viết 1 hàm removeProduct để thực hiện việc xóa sản phẩm ( 2 điểm )
// nhập tên sản phẩm cần xóa từ bàn phím
// if find found product name to delete, thì thực hiện việc xóa tên sản phẩm đó khỏi mảng
// nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần xóa"
// display redata in an array after đã xóa sản phẩm thành công
// viết 1 hàm cập nhậtSản phẩm thực hiện cập nhật sản phẩm   ( 2 điểm )
// nhập tên sản phẩm cần cập nhật từ bàn phím
// nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần cập nhật"
// nếu tìm thấy thì thực hiện cập nhật giá trị tên sản phẩm đó
// show back data in an array after đã cập nhật thành công
// viết 1 hàm removeAllProduct thực hiện việc xóa toàn bộ sản phẩm trong mảng, sau đó bên trong hàm này sẽ gọi lại hàm showProduct để thực hiện ( 2 điểm )

let products = ["mercedes", "audi", "ford", "lamborghini"];

function showProduct() {
    if (products.length === 0) {
        console.log("Không có sản phẩm để hiển thị.");
    } else {
        console.log("Các sản phẩm trong mảng:");
        for (let i = 0; i < products.length; i++) {
            console.log(products[i]);
        }
    }
}
function addProduct() {
    let productName = prompt("Nhập tên sản phẩm:");
    while (productName.length < 4) {
        productName = prompt("Tên sản phẩm phải có ít nhất 4 ký tự. Vui lòng nhập lại:");
    }
    products.push(productName);
    console.log("Sản phẩm đã được thêm vào mảng.");
}

function removeProduct() {
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

function updateProduct() {
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

function removeAllProduct() {
    products = [];
    console.log("Tất cả sản phẩm đã được xóa khỏi mảng.");
    showProduct();
}

showProduct();

addProduct();

removeProduct();

updateProduct();

removeAllProduct();