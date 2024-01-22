document.addEventListener('DOMContentLoaded', function () {

let showerText = document.getElementById("showerText");
const originDate = new Date(2024, 0, 1);
const nowDate = new Date();
if((getDaysTo(originDate, nowDate))%2 == 0){
    showerText.textContent = "Shower Today";
}else{
    showerText.textContent = "No Shower Today";
}


let violinText = document.getElementById("violinText");
// if(nowDate.getDay)
switch(nowDate.getDay){
    case 0: violinText.textContent = "Today 7:00 PM" 
    case 1: violinText.textContent = "Today 8:00 PM" 
    default: violinText.textContent = "Saturday 8:00 PM & Sunday 7:00 PM" 
}
});


function getDayOfYear(date) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let dayOfYear = date.getDate();

    for (let i = 0; i < date.getMonth(); i++) {
        dayOfYear += monthDays[i];
    }

    // Check for leap year and adjust for February
    if (date.getMonth() > 1 && ((date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || date.getFullYear() % 400 === 0)) {
        dayOfYear++;
    }

    return dayOfYear;
}
function getDaysTo(currentDate,  targetDate){    
    // Calculate the difference in milliseconds
    var differenceInMilliseconds = targetDate.getTime() - currentDate.getTime();
    
    // Convert milliseconds to days
    var differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 3600 * 24));
    
    console.log(differenceInDays + " days until " + targetDate.toDateString());

    return differenceInDays;

}



function toggleCard(cardID){
    let card = document.getElementById(cardID);
    if(card.style.display == "block"){
        card.style.display = "none";
    }
    else{
        card.classList.remove("slide-out")
        card.classList.add("slide");
        card.style.display = "block";
    }
    
}
