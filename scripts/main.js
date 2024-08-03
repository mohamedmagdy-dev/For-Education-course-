const mobileNavToggle = document.querySelector(".mobile-navigation-toggle");
const navigation = document.querySelector("header .container nav");
mobileNavToggle.addEventListener("click",()=>{

  navigation.classList.toggle("opened");
})