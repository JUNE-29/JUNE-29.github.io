const dDayForm = document.getElementById("dDay-form");
const dDayTitleInput =  dDayForm.querySelector("#input-dDay-title");
const dDayInput = dDayForm.querySelector("#input-dDay");
const dDaySubmit = dDayForm.querySelector("#dDay-submit");
const dDayLabel = dDayForm.querySelector("#dDay-massage");
const spanDDayTitle = dDayForm.querySelector("#dDay-title");
const spanDDay = dDayForm.querySelector("#dDay");
const button = document.querySelector("#dDay-delete-btn");

const DDAY_KEY = "dDay";

let dDayList = [];

function saveDDay() {
    localStorage.setItem(DDAY_KEY, JSON.stringify(dDayList));
}

// function deleteDDay() {
//     console.log("a");
//     localStorage.removeItem(DDAY_KEY);
//     saveDDay();
    
//     dDayLabel.classList.remove(HIDDEN_CLASSNAME);
//     dDayTitleInput.classList.remove(HIDDEN_CLASSNAME);
//     dDayInput.classList.remove(HIDDEN_CLASSNAME);
//     dDaySubmit.classList.remove(HIDDEN_CLASSNAME);

//     spanDDayTitle.classList.add(HIDDEN_CLASSNAME);
//     spanDDay.classList.add(HIDDEN_CLASSNAME);
//     button.classList.add(HIDDEN_CLASSNAME);
// }

function DDayCalculator(dDay) {
    const date = new Date();
    const now = new Date(
    date.getFullYear(), date.getMonth(), 
    date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    const dDayDay = new Date(dDay) - now;

    const dDayDate = Math.floor(dDayDay / (1000 * 60 * 60 * 24));
    return dDayDate;
}

function paintDDay(dDayObj) {
    const dDayTitle = dDayObj.title;
    const dDay = dDayObj.day;

    // button.classList.remove(HIDDEN_CLASSNAME);
    // button.addEventListener("click", deleteDDay);
    
    spanDDayTitle.innerText= `${dDayTitle}`;
    spanDDay.innerText= `D-${DDayCalculator(dDay)}`;
    setInterval(DDayCalculator,600000);

    dDayTitleInput.classList.add(HIDDEN_CLASSNAME);
    dDayInput.classList.add(HIDDEN_CLASSNAME);
    dDaySubmit.classList.add(HIDDEN_CLASSNAME);
    dDayLabel.classList.add(HIDDEN_CLASSNAME);
}

function addDDay(event) {
    event.preventDefault();
    const dDayTitle = dDayTitleInput.value;
    const dDay = dDayInput.value;
    const dDayObj = {
        title: dDayTitle,
        day: dDay
    };
    dDayList.push(dDayObj);
    paintDDay(dDayObj);
    saveDDay();
}

dDayForm.addEventListener("submit", addDDay);

const savedDDay = localStorage.getItem(DDAY_KEY);

if(savedDDay !== null) {
    const parsedDDay = JSON.parse(savedDDay);
    dDayList = parsedDDay;
    parsedDDay.forEach(paintDDay);
} else {

}