function nextImage(el){

if (el.src.match("Images/Goblin.PNG")){

el.src = "Images/prowler.gif";

// if the image is a cherry, change it to a lemon!

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.PNG";

// if the image is a lemon, change it to an orange!

} else if (el.src.match("Images/kingpen.PNG")){

el.src = "Images/Goblin.PNG";

// if the image is an orange, change it to a cherry!

} else {

// do nothing

}
}
