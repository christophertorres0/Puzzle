// GOBLIN --> PROWLER--> KINGPEN //
function nextImage(el){

if (el.src.match("Images/goblin.png")){

el.src = "Images/prowler.gif";

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.png";


} else if (el.src.match("Images/kingpen.png")){

el.src = "Images/goblin.png";


} else {

// do nothing

}
}


// PROWLER --> GOBLIN --> KINGPEN //
function nextImage2(el){

if (el.src.match("Images/prowler.gif")){

el.src = "Images/goblin.png";

} else if (el.src.match("Images/goblin.png")){

el.src = "Images/kingpen.png";

} else if (el.src.match("Images/kingpen.png")){

el.src = "Images/prowler.gif";

} else {

}
}

// KINGPEN --> GOBLIN --> PROWLER //
function nextImage3(el){

if (el.src.match("Images/kingpen.png")){

el.src = "Images/goblin.png";

} else if (el.src.match("Images/goblin.png")){

el.src = "Images/prowler.gif";

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.png";

}
 else {


}

}
