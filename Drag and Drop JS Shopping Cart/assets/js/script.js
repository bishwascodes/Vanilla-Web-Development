// selecting the products and the cart areas
const products = document.querySelectorAll(".products article");
const cartArea = document.getElementById("cart-area");

// Functions for the drag and drop handling
let dragOver = e =>{
    // to make it droppable area
    e.preventDefault();
};

let drop = e => {
    console.log("Dropped");
    let id = e.dataTransfer.getData("text/plain"); // Retrieve the ID
    let draggedElement = document.querySelector(`article[data-product-id='${id}']`); // Access the dragged element
    console.log(draggedElement); 
};

let dragStart = (e) => {
    console.log("Drag Started");
    e.dataTransfer.setData("text/plain", e.target.getAttribute("data-product-id")); // transfer the draggable data to our cart area

    cartArea.addEventListener('dragover', dragOver);
    cartArea.addEventListener('drop', drop);
};

// listening to the dragging of either of the products
products.forEach(product => {
    product.addEventListener('dragstart', dragStart);
})

