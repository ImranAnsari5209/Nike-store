const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 19999,
        colors: [
            {
                code: "black",
                img: "images/AirForce 1.png",
            },
            {
                code: "darkblue",
                img: "images/AirForce 1.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 11499,
        colors: [
            {
                code: "lightgray",
                img: "images/AirJordan 1.png",
            },
            {
                code: "green",
                img: "images/AirJordan 1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Nike Cortez",
        price: 21999,
        colors: [
            {
                code: "lightgray",
                img: "images/NIKE+CORTEZ.png",
            },
            {
                code: "green",
                img: "images/NIKE+CORTEZ.png",
            },
        ],
    },
    {
        id: 4,
        title: "Nike Pegasus",
        price: 16999,
        colors: [
            {
                code: "black",
                img: "images/NikeFieldGeneral.png",
            },
            {
              code: "lightgray",
              img: "images/NikeFieldGeneral.png",

            },
        ],
    },
    {
        id: 5,
        title: "Nike Vapourfly",
        price: 19999,
        colors: [
            {
                code: "gray",
                img: "images/NikeVapourfly 3.png",
            },
            {
                code: "black",
                img: "images/NikeVapourfly 3.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});