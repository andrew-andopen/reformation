const h1Tag = document.querySelector('h1')
const h2Tag = document.querySelector('h2')
const textAreaTag = document.querySelector('textarea')
const submitTag = document.querySelector("a")
const socialBlock = document.querySelector(".social")






//Submit positive form
const formPos = document.getElementById("form-pos")


//Submit negative form
const formNeg = document.getElementById("form-neg")




//Submit wasClicked
// const formWasClicked = document.getElementById("form-wasClicked")


// const redirect = function () {
//     window.location.href = 'https://clients.mindbodyonline.com/classic/mainclass?studioid=435666&tg=&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=8%2f21%2f2020&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1';

// }


if(formPos){
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
            submitTag.style.display = "none"
            // submitTag.innerHTML = "Book class"
            // submitTag.id = "bookID";
            // submitTag.setAttribute("href", "https://clients.mindbodyonline.com/classic/mainclass?studioid=435666&tg=&vt=&lvl=&stype=-7&view=day&trn=0&page=&catid=&prodid=&date=8%2f21%2f2020&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1");
            socialBlock.style.display = "block"
            formWasClicked.style.display = "block"
       
        } else {
          formH1Tag.innerHTML = `Sorry, please reload your page and try again`
        }
        };
        xhr.send(formData);
        };
            
}







else if(formNeg) {

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
            h2Tag.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            textAreaTag.style.display = "none"
            submitTag.style.display = "none";
        } else {
          formH1Tag.innerHTML = `Sorry, please reload your page and try again`
        }
        };
        xhr.send(formData);
        };

}


// else if(form-wasClicked) {

//     formWasClicked.onsubmit = function(event) {
//         event.preventDefault();
//         var formData = new FormData(formWasClicked);
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", formWasClicked.action, true);
//         xhr.onload = function(e) {
//         console.log(xhr);
//         var response = JSON.parse(xhr.response);
//         if (xhr.status === 200) {
//             redirect()
//         } else {
//           formH1Tag.innerHTML = `Sorry, please reload your page and try again`
//         }
//         };
//         xhr.send(formData);
//         };

// }













//URL parameters

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const email = urlParams.get('email')
console.log(email);

const fname = urlParams.get('firstname')
console.log(fname);

const lname = urlParams.get('lastname')
console.log(lname);


const emailTag = document.querySelectorAll("email")
const firstNameTag = document.querySelectorAll("fname")
const lastNameTag = document.querySelectorAll("lname")

// emailTag.value = email
// firstNameTag.value = fname
// lastNameTag.value = lname


// emailTag.forEach(emailInput => emailInput.value = fname);
firstNameTag.forEach(firstNameInput => firstNameInput.value = fname);
lastNameTag.forEach(lastNameInput => lastNameInput.value = lname);



emailTag.forEach((emailInput) => {
    emailInput.value = fname
  });