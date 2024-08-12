var menu = document.querySelector("#menu");
var overlay = document.querySelector("#banner_overlay")
var menuitem = document.querySelector("nav ul")
var imgbox = document.getElementsByClassName("img-box")
var text = document.getElementsByClassName("text")
var blogitem = document.getElementsByClassName("blog-item")


menu.addEventListener(
    "click", function(e){
        document.body.classList.toggle("open-menu")
    }
)

overlay.addEventListener(
    "click", function(){
        document.body.classList.remove("open-menu");
    }
)

document.addEventListener(
    "scroll", function(e){
        if(window.scrollY>=40){
            document.body.classList.add("sticky-nav");
        } else {
            document.body.classList.remove("sticky-nav");  
        }
    } 
)

for(i of blogitem){
    i.addEventListener(
        "mouseover", function(e){
            console.log(imgbox[0])
            imgbox[e.target.dataset.i].style.transform = "scale(1)";
        }
    )
}






// overlay.addEventListener(
//     "click",
//     function(){
//         menuitem.style.left = ""
//     }
// )
