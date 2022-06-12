const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


const article = [
{
id:1,
title: "UI Components for Unity Gaming",
category: "App-design",
img: "images/card-images/Rectangle45.png"
},
{
id:2,
title: "Analytics Mobile App - Blurr Series",
category: "Animation",
img: "./images/card-images/Rectangle46.png"
},
{
id:3,
title: "Estaro - Dark-mode - Task Management App",
category: "Web-design",
img: "./images/card-images/Rectangle47.png"
},
{
id:4,
title: "Live streaming application for gamers.",
category: "Illustration",
img: "./images/card-images/Rectangle48.png"
},
{
id:5,
title: "Dark Mockup for Unity Gaming",
category: "3D",
img: "./images/card-images/Rectangle49.png"
},
{
id:6,
title: "SMM - Social Media Management - App UI",
category: "Typography",
img: "./images/card-images/Rectangle50.png"
},
{
id:7,
title: "SMM - Social Media Management - App UI",
category: "3D",
img: "./images/card-images/Rectangle51.png"
},
{
id:8,
title: "SMM - Social Media Management - App UI",
category: "Illustration",
img: "./images/card-images/Rectangle52.png"
},
{
    id:9,
    title: "SMM - Social Media Management - App UI",
    category: "Illustration",
    img: "./images/card-images/Rectangle52.png"
    },
    {
        id:10,
        title: "SMM - Social Media Management - App UI",
        category: "Illustration",
        img: "./images/card-images/Rectangle52.png"
        },
]


const sectionCenter =  document.querySelector (".section-center");
const container = document.querySelector(".btn-container");
// load items
window.addEventListener("DOMContentLoaded", function (){
displayArticleItems(article);
displayarticleBtns();
});
//display all items
function displayArticleItems(articleItems){
let displayArticle = articleItems.slice(0, 8).map( function (item){
    return `<article class="article-item">
                <img src=${item.img} alt=${item.category} class="photo" />
                <p class="article-text">
                ${item.title}
                </p>
            </article>`;
    });
displayArticle = displayArticle.join("")
sectionCenter.innerHTML= displayArticle
};
// get unique items
function displayarticleBtns(){
const categories = article.reduce(
    function (values, item) {
    if (!values.includes(item.category)) {
        values.push(item.category)
    }
    return values;
    },
    ["All"]
);
//add unique category btns into html
const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button"
        data-id=${category}> ${category}
        </button>`;
    }).join("");
container.innerHTML = categoryBtns;
const filterBtn = container.querySelectorAll(".filter-btn");

// filter items
filterBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const articleCategory = article.filter(function(articleItem){
    if(articleItem.category === category){
    return articleItem;
    }
    });
    if(category === "All"){
    displayArticleItems(article)
    }
    else{
    displayArticleItems(articleCategory)
    }
    console.log(category);
    });
});
};
const loadmore = document.querySelector('#loadmore');
    let currentItems = 8;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.article-item')];
        for (let i = currentItems; i < currentItems + 1; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 1;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    });
   const btnClicked = document.querySelector(".button");
   btnClicked.addEventListener('click', (e => {
    e.preventDefault();

    btnClicked.style.background = "red";
}));
