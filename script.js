let right=document.getElementById("right")
let slider=document.getElementsByClassName("slider")[0]
right.onclick=function(){
    console.log("right")
    slider.style.transform="translateX(-100%)"
}