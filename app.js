//choosing the item in (arrow)
const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{

    
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click",()=>{
        
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;

        // to provide rotations to the click button 
        //conditions for the screen 
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){ 
            //what we do after clicking is defined here
            movieLists[i].style.transform = `translateX(${
            //this will get the objects value for us as movilist is object that why we are 
            //using idexing.
            movieLists[i].computedStyleMap().get("transform")[0].x.value- 300}px)`; 
            // 300 px because we want that when we press button the new frame of movie should have same margin as it have before.
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

        
    })

});

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active"); 
    });
    ball.classList.toggle("active");
} );