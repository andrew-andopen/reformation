const h1Tag = document.querySelector('h1')
const h2Tag = document.querySelector('h2')
const textAreaTag = document.querySelector('textarea')
const submitTag = document.querySelector("a")



//Submit positive form
const formPos = document.getElementById("form-pos")

formPos.onsubmit = function(event) {
event.preventDefault();
var formData = new FormData(formPos);
var xhr = new XMLHttpRequest();
xhr.open("POST", formPos.action, true);
xhr.onload = function(e) {
console.log(xhr);
var response = JSON.parse(xhr.response);
if (xhr.status === 200) {
    h1Tag.innerHTML = "Thanks for your feedback.";
    h2Tag.innerHTML = "Why not book your next class while you’re here?";
    textAreaTag.style.display = "none"
    submitTag.innerHTML = "Book class"
    submitTag.setAttribute("href", "https://clients.mindbodyonline.com/classic/mainclass?studioid=435666&tg=31&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=8%2f21%2f2020&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1");
    
} else {
  formH1Tag.innerHTML = `Sorry, please reload your page and try again`
}
};
xhr.send(formData);
};


//Submit negative form
const formNeg = document.getElementById("form-neg")

formNeg.onsubmit = function(event) {
event.preventDefault();
var formData = new FormData(formNeg);
var xhr = new XMLHttpRequest();
xhr.open("POST", formNeg.action, true);
xhr.onload = function(e) {
console.log(xhr);
var response = JSON.parse(xhr.response);
if (xhr.status === 200) {
    h1Tag.innerHTML = "Thanks for your feedback.";
    h2Tag.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    textAreaTag.style.display = "none"
    submitTag.style.display = "none"
    
    
} else {
  formH1Tag.innerHTML = `Sorry, please reload your page and try again`
}
};
xhr.send(formData);
};


console.log(h1Tag)
