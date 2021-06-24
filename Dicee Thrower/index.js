var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

image1=document.querySelector("img.img1");
image1.setAttribute("src","images/dice"+randomNumber1+".png");

image2=document.querySelector("img.img2");
image2.setAttribute("src","images/dice"+randomNumber2+".png");

//we can also directly use document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
//we can also directly use document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {
document.querySelector("h1").textContent="🎉 Wohooo!\nPlayer 1 Wins!";
document.querySelector("h1").classList.remove("paddedh1");
}

else if (randomNumber2>randomNumber1) {
document.querySelector("h1").textContent="🎉 Wohooo!\nPlayer 2 Wins!";
document.querySelector("h1").classList.remove("paddedh1");
}

else {
  document.querySelector("h1").textContent="Issa Draw!";
  document.querySelector("h1").classList.add("paddedh1");
}
