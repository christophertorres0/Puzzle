function nextImage(el){

if (el.src.match("Images/Goblin.png")){

el.src = "Images/prowler.gif";

// if the image is a cherry, change it to a lemon!

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.png";

// if the image is a lemon, change it to an orange!

} else if (el.src.match("Images/kingpen.png")){

el.src = "Images/Goblin.png";

// if the image is an orange, change it to a cherry!

} else {

// do nothing

}
}
