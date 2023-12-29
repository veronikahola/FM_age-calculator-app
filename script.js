const button = document.querySelector('.button');


const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');

const formFieldDay = document.querySelector('.day');
const formFieldMonth = document.querySelector('.month');
const formFieldYear = document.querySelector('.year');


const requiredDay = formFieldDay.querySelector('.required');
const validDay = formFieldDay.querySelector('.valid');

const requiredMonth = formFieldMonth.querySelector('.required');
const validMonth = formFieldMonth.querySelector('.valid');

const requiredYear = formFieldYear.querySelector('.required');
const validYear = formFieldYear.querySelector('.valid');


let finalDay = 0;
let finalMonth = 0;
let finalYear = 0;

let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

let numberOfDays;
let numberOfMonths;
let numberOfYears;


button.addEventListener('click', function () {
    initial();

    // current date
    const valueDay = Number(inputDay.value);
    const valueMonth = Number(inputMonth.value);
    const valueYear = Number(inputYear.value);

    

    // day logic
    // calculating max number of days based on given month
    let maxValueDay;

    if (valueMonth === 1 || valueMonth === 3 || valueMonth === 5 || valueMonth === 7 || valueMonth === 8 || valueMonth === 10 || valueMonth === 12) {
        maxValueDay = 31;
    } else if (valueMonth === 4 || valueMonth === 6 || valueMonth === 9 || valueMonth === 11) {
        maxValueDay = 30;
    } else if (valueMonth === 2) {
        if (valueYear % 4 === 0 && (valueYear % 100 !== 0 || valueYear % 400 === 0)) {
            maxValueDay = 29;
        } else {
            maxValueDay = 28;
        }
    }
    // reguired field
    if (inputDay.value === '') {
        error(inputDay, requiredDay, finalDay);

    // must be valid field
    } else {
        succes(inputDay, requiredDay);

        if (valueDay > maxValueDay && valueDay !== 29) {
            error(inputDay, validDay, finalDay);

        } else if (valueDay < 1 ||
            (valueDay > maxValueDay && valueDay !== 29)) {
            error(inputDay, validDay, finalDay);

        } else {
            finalDay = valueDay;
            succes(inputDay, requiredDay);
        }
    }

    // month logic
    // reguired field
    if (inputMonth.value === '') {
        error(inputMonth, requiredMonth, finalMonth);

    // must be valid field
    } else {
        succes(inputMonth, requiredMonth);

        if (valueMonth < 1 || valueMonth > 12) {
            error(inputMonth, validMonth, finalMonth);

        } else {
            finalMonth = valueMonth;
            succes(inputMonth, requiredMonth);
        }
    }

    // year logic
    // reguired field
    if (inputYear.value === '') {
        error(inputYear, requiredYear, finalYear);

    // must be valid field
    } else {
        succes(inputYear, requiredYear);

        if (valueYear > currentYear) {
            error(inputYear, requiredYear, finalYear);
        } else {
            finalYear = valueYear;
            succes(inputYear, requiredYear);
        }
    }


    // getting the final values to calculate with
    if (finalDay > 0 && finalMonth > 0 && finalYear > 0) {
        calculate(finalDay, finalMonth, finalYear)

    } else {
        initial();
    }
});


// function to calculate the results
const calculate = (day, month, year) => {

    numberOfYears = currentYear - finalYear;
    numberOfMonths = currentMonth - finalMonth;
    numberOfDays = currentDay - finalDay;


    document.querySelector('.years').innerHTML = numberOfYears;
    document.querySelector('.months').innerHTML = numberOfMonths;
    document.querySelector('.days').innerHTML = numberOfDays;
}


// function to set the '--' value
const initial = () => {
    document.querySelector('.years').textContent= '--';
    document.querySelector('.months').textContent = '--';
    document.querySelector('.days').textContent = '--';
}


//functions to handle error/succes messages and design
    const error = (color, remove, zero) => {
        color.style.borderColor = 'hsl(0, 100%, 67%)'
        remove.classList.remove('hidden');
        zero = 0;

        if (zero === finalDay) {
            finalDay = 0;
        } else if (zero === finalMonth) {
            finalMonth = 0;
        } else if (zero === finalYear) {
            finalYear = 0;
        }
    }

    const succes = (color, add) => {
        color.style.borderColor = 'hsl(0, 0%, 86%)'
        add.classList.add('hidden');
    }