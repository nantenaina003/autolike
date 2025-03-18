function toggleBorder(element) {
    if (element.style.border) {
        element.style.border = "";
        element.style.padding = "";
        element.style.borderRadius = "";
    } else {
        Object.assign(element.style, {
            border: "1px solid #0078FFA1",
            padding: "5px",
            borderRadius: "10%",
            transition: "0.5s"
        });
    }
}

var aimer = document.querySelector('#image');
aimer.addEventListener('click', function() {
    toggleBorder(aimer);
});

var adore = document.querySelector('#image1');
adore.addEventListener('click', function() {
    toggleBorder(adore);
});

var solidaire = document.querySelector('#image2');
solidaire.addEventListener('click', function() {
    toggleBorder(solidaire);
});

var haha = document.querySelector('#image3');
haha.addEventListener('click', function() {
    toggleBorder(haha);
});

var wow = document.querySelector('#image4');
wow.addEventListener('click', function() {
    toggleBorder(wow);
});

var triste = document.querySelector('#image5');
triste.addEventListener('click', function() {
    toggleBorder(triste);
});

var grrr = document.querySelector('#image6');
grrr.addEventListener('click', function() {
    toggleBorder(grrr);
});



var moon = document.querySelector('.moon');
var sun = document.querySelector('.sun');
var form = document.querySelector('.form');
var fond = document.querySelector('.fond');
var label = document.querySelector('.label');
var lab = document.querySelector('.lab')
var mp = document.querySelector('.mp');
var bn = document.querySelector('.bn');
var ou = document.querySelector('.ou');
var num = document.querySelector('.number');
var input = document.querySelector('.input');

moon.addEventListener('click', function(){
 Object.assign(sun.style, {
  display: "block",
  transition: "0.5s"
 });
 Object.assign(moon.style, {
  display: "none",
  transition: "0.5s"
 });
 
 fond.style.transition = "0.5s";
 fond.classList.add('active');
 form.style.transition = "0.5s";
 form.classList.add('active');
 label.style.transition = "0.5s";
 label.classList.add('active');
 mp.style.transition = "0.5s";
 mp.classList.add('active');
 bn.style.transition = "0.5s";
 bn.classList.add('active');
 ou.style.transition = "0.5s";
 ou.classList.add('active');
 lab.style.transition = "0.5s";
 lab.classList.add('active');
 num.style.transition = "0.5s";
 num.classList.add('active');
 input.style.transition = "0.5s";
 input.classList.add('active');
});


sun.addEventListener('click', function(){
 Object.assign(sun.style, {
  display: "none",
  transition: "0.5s"
 });
 Object.assign(moon.style, {
  display: "block",
  transition: "0.5s"
 });
 
 fond.style.transition = "0.5s";
 fond.classList.remove('active');
 form.style.transition = "0.5s";
 form.classList.remove('active');
 label.style.transition = "0.5s";
 label.classList.remove('active');
 mp.style.transition = "0.5s";
 mp.classList.remove('active');
 bn.style.transition = "0.5s";
 bn.classList.remove('active');
 ou.style.transition = "0.5s";
 ou.classList.remove('active');
 lab.style.transition = "0.5s";
 lab.classList.remove('active');
 num.style.transition = "0.5s";
 num.classList.remove('active');
 input.style.transition = "0.5s";
 input.classList.remove('active');
});

var button = document.querySelector('.button');
var num1 = document.querySelector('.number').value;
var inp1 = document.querySelector('.input').value;

button.addEventListener('click', function(){
 if (num1 === "" && inp1 === "") {
 alert('Veuillez completer le champ vide!!!');
}
});
