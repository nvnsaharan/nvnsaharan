"use strict";

const mainBody = document.querySelector("#the_body");
const about = document.querySelector("#AboutMe");
const resume = document.querySelector("#Resume");
const gmail = document.querySelector("#gmail");
const coronatracker = document.querySelector("#corona-tracker");
const fbClone = document.querySelector("#fb-tracker");
const themableResume = document.querySelector("#themableResume");
const videoChatApp = document.querySelector("#videoChatApp");
const dayHeader = document.querySelector("#Day-header");
const timeHeader = document.querySelector("#Time-header");
const skills = document.querySelector("#Skills");
const multiplayerSnake = document.querySelector("#multiplayerSnake");
const aboutContent = document.querySelector("#about-content");
const projectContent = document.querySelector("#project-content");

const wait = (delay = 100) =>
    new Promise((resolve) => setTimeout(resolve, delay));

document.addEventListener("DOMContentLoaded", () => {
    wait(7500).then(() => {
        about.click();
    });
});
project.addEventListener("click", () => {
    const projectBox = new WinBox({
        title: "About Projects",
        width: "800px",
        height: "600px",
        x: "5%",
        y: "5%",
        url: "./pages/about.html#Projects",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
gmail.addEventListener("click", () => {
    const gmailBox = new WinBox({
        title: "Contect",
        width: "800px",
        height: "600px",
        x: "5%",
        y: "5%",
        url: "https://nvnsaharan.github.io/contect_me/",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
multiplayerSnake.addEventListener("click", () => {
    const multiplayerSnakeBox = new WinBox({
        title: "SnakeGame 2",
        width: "700px",
        height: "700px",
        url: "https://thesnakegame2.netlify.app/",
        x: "5%",
        y: "20px",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
skills.addEventListener("click", () => {
    const skillsBox = new WinBox({
        title: "Skills",
        width: "900px",
        height: "650px",
        url: "https://nvnsaharan.github.io/skillcircle/",
        x: "5%",
        y: "5%",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
themableResume.addEventListener("click", () => {
    const themableResumeBox = new WinBox({
        title: "nvnpdfresume",
        url: "https://nvnpdfresume.web.app/",
        width: "80%",
        height: "80%",
        x: "5%",
        y: "5%",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
fbClone.addEventListener("click", () => {
    const fbCloneBox = new WinBox({
        title: "Fb clone",
        url: "https://myfacebclone.web.app/",
        width: "80%",
        height: "80%",
        x: "5%",
        y: "5%",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
coronatracker.addEventListener("click", () => {
    const coronatrackerBox = new WinBox({
        title: "My Covid-19 Tracker",
        url: "https://mycovid-tracker.web.app/",
        width: "80%",
        height: "80%",
        x: "5%",
        y: "5%",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "About Me",
        width: "50%",
        height: "600px",
        x: "5%",
        y: "5%",
        url: "./pages/about.html",
        onfocus: function () {
            this.setBackground("#b3b3b3b8");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});
resume.addEventListener("click", () => {
    const resumeBox = new WinBox({
        title: "Resume",
        url: "./pages/resume.html",
        width: "900px",
        height: "600px",
        x: "5%",
        y: "5%",
        onfocus: function () {
            this.setBackground("#000000b5");
        },
        onblur: function () {
            this.setBackground("#777777b5");
        },
    });
});

function currentTime() {
    var date = new Date();
    /* creating object of Date class */

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = hour >= 12 ? "PM" : "AM";
    /* assigning AM/PM */

    hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
    /* assigning hour in 12-hour format */

    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
    document.getElementById("digit_clock_midday").innerText = midday;
    document.getElementById("digit_clock_time").innerText =
        hour + ":" + min + ":" + sec;
    /* adding time to the div */

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var fulldays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var curWeekDay = fulldays[date.getDay()]; // get day

    var curDay = date.getDate(); // get date

    var curMonth = months[date.getMonth()]; // get month

    var curYear = date.getFullYear(); // get year

    document.getElementById("digit_clock_day").innerHTML = curWeekDay;
    document.getElementById("digit_clock_month").innerHTML = curMonth;
    document.getElementById("digit_clock_year").innerHTML = curYear;
    document.getElementById("digit_clock_thedate").innerHTML = curDay;
    var t = setTimeout(currentTime, 1000);
    /* setting timer */

    dayHeader.innerText = days[date.getDay()];
    timeHeader.innerText = hour + ":" + min + " " + midday;
}

function changeTime(k) {
    /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();

const changeWallpaper = (e) => {
    switch (e) {
        case 1:
            mainBody.style.background = "url(../images/wallpapers/1.jpg)";
            break;

        case 2:
            mainBody.style.background = "url(../images/wallpapers/2.jpg)";
            break;

        default:
            return;
    }
};
