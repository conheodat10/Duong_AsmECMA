/*
    Destructuring - phân vùng
     - mảng
     - sự vật
*/

// const user = ["datlt", "thienth", "sontv"]
// console.log(người dùng[0]);
// console.log(người dùng[1]);
// console.log(người dùng[2]);

// const [user1, , user3] = người dùng;
// console.log(user1, user3);

/*--- hủy đối tượng ---*/
// const sản phẩm = {
// id: 1,
// prdName: "Sản phẩm 1",
// giá: 500,
// mô tả: "Nội dung chính"
// }
// const id = product.id
// const prdName = product.prdName;
// console.log(id);
// console.log(prdName);

// const { id, prdName, price, description = 'Nội dung mô tả' } = sản phẩm
// console.log(id);
// console.log(prdName);
// console.log(giá);
// console.log(mô tả);


const product = {
    id: 1,
    prdName: "product 1",
    price: 500,
    description: "Nội dung chính",
    subProduct: {
        prdName: "Sản phẩm phụ"
    }
}

const { prdName, subProduct: { prdName: subName } } = product
console.log(subName);