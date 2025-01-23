let dragStart = (e) => {
    console.log("Drag Started");
}
const products = document.querySelectorAll(".products article");
products.forEach(product => {
    product.addEventListener('dragstart', dragStart);
})

console.log(products)