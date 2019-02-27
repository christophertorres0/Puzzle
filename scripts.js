// GOBLIN --> PROWLER--> KINGPEN //
function nextImage(el){

if (el.src.match("Images/Goblin.PNG")){

el.src = "Images/prowler.gif";

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.PNG";


} else if (el.src.match("Images/kingpen.PNG")){

el.src = "Images/Goblin.PNG";


} else {

// do nothing

}
}


// PROWLER --> GOBLIN --> KINGPEN //
function nextImage2(el){

if (el.src.match("Images/prowler.gif")){

el.src = "Images/Goblin.PNG";

} else if (el.src.match("Images/Goblin.PNG")){

el.src = "Images/kingpen.PNG";

} else if (el.src.match("Images/kingpen.PNG")){

el.src = "Images/prowler.gif";

} else {

}
}

// KINGPEN --> GOBLIN --> PROWLER //
function nextImage3(el){

if (el.src.match("Images/kingpen.PNG")){

el.src = "Images/Goblin.PNG";

} else if (el.src.match("Images/Goblin.PNG")){

el.src = "Images/prowler.gif";

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.PNG";

}
 else {


}

}
