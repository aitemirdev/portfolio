const token = "6884770966:AAGawaro9D5uyceoZVXopjpN6hyLMJ_nz7k";
const CHAT_ID = "-1001917976411";
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;
const form = document.querySelector('#form')

form.addEventListener("submit", function (e){
    e.preventDefault()

    let message = `<b>Name:</b> ${this.name.value} \n`;
    message += `<b>Email:</b> ${this.email.value} \n`;
    message += `<b>Message:</b> ${this.text.value} \n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    })
        .then((res) => {
            this.name.value = "";
            this.email.value = "";
            this.text.value = "";
        })
        .catch((err) => {
            console.warn(err)
        })
        .finally(() => {
            console.log("end")
        })
})









let navOne = document.querySelector('.nav-one');
let navTwo = document.querySelector('.nav-two');
let navThree = document.querySelector('.nav-three');
let navFour = document.querySelector('.nav-four');
let header = document.querySelector('#header');

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    if (scroll > 440) {
        header.style.animation = "header 1s alternate linear"
    } else {
        header.style.animation = ""
    }


    if (scroll > 0 && scroll < 485) {
        navOne.style.color = 'dodgerblue'
        navTwo.style.color = '#fff'
        navThree.style.color = "#fff"
        navFour.style.color = "#fff"
    } else if (scroll > 485 && scroll < 1980) {
        navTwo.style.color = 'dodgerblue'
        navOne.style.color = '#fff'
        navThree.style.color = "#fff"
        navFour.style.color = "#fff"

    } else if (scroll > 1980 && scroll < 2980) {
        navTwo.style.color = '#fff'
        navOne.style.color = '#fff'
        navThree.style.color = "dodgerblue"
        navFour.style.color = "#fff"
    } else if (scroll > 2980) {
        navTwo.style.color = '#fff'
        navOne.style.color = '#fff'
        navThree.style.color = "#fff"
        navFour.style.color = "dodgerblue"
    } else {
        navTwo.style.color = '#fff'
        navOne.style.color = '#fff'
        navThree.style.color = "#fff"
        navFour.style.color = "#fff"
    }

})


const menuNav = document.querySelectorAll(".menu a")
const menu = document.querySelector('.menu')
const btn = document.querySelector('.burger-menu button')

btn.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block"
        menu.style.display = "flex"

    } else menu.style.display = "none"
})


menuNav.forEach(el => {
    el.addEventListener("click", () => {
        if (menu.style.display === "none") {
            menu.style.display = "block"
            menu.style.display = "flex"
        } else menu.style.display = "none"
    })
})


















window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    const lineTile = [
        {
            title: "60%"
        },
        {
            title: "55%"
        }
        , {
            title: "55%"
        }
        ,
    ]
    const line = document.querySelectorAll(".skills-left-block div");


    if (scroll > 485) {
        for (let i = 0; i < line.length; i++) {
            // console.log(line[i].style.width)
            console.log(line[i].style.width = lineTile[i].title)
        }
    } else {
        for (let i = 0; i < line.length; i++) {
            console.log(line[i].style.width = '0px')
        }
    }

})


AOS.init();


const img = document.querySelector(".about-img"),
    input = document.querySelector('#myfile');

input.addEventListener('change', () => {
    img.src = URL.createObjectURL(input.files[0])
})

