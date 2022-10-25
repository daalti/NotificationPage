const submitBtn = document.querySelector(".read-btn");
const notificationsNumber = document.querySelector("#number");
const red = document.querySelectorAll(".red-circle");
const people = document.querySelectorAll(".people-container");

submitBtn.addEventListener("click", () => {  
    for (let i = 0, len = people.length; i < len; ++i) { 
        people[i].classList.remove("no-read");
        red[i].classList.add("red-circle-opacity");
    }
    notificationsNumber.textContent = 0;
});

people.forEach(function(item){
    item.addEventListener("click", function(e) {
        if (item.classList.contains("no-read"))
        {
            let number = notificationsNumber.textContent;
            notificationsNumber.textContent = number - 1;
        }
        item.classList.remove("no-read");
        let redCircle = item.querySelector(".people").querySelector(".people-text").querySelector(".red-circle");
        redCircle.classList.add("red-circle-opacity");
    });
});