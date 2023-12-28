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

console.log('Current Day:', currentDay);
console.log('Current Month:', currentMonth);
console.log('Current Year:', currentYear);


button.addEventListener('click', function () {
    const valueDay = Number(inputDay.value);
    const valueMonth = Number(inputMonth.value);
    const valueYear = Number(inputYear.value);

    const isLeapYear = (year) => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

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

    // day
    if (inputDay.value === '') {
        requiredDay.classList.remove('hidden');
    } else {
        requiredDay.classList.add('hidden');
        initial();

        if (valueDay < 1 || (valueDay > maxValueDay && valueDay !== 29)) {
            validDay.classList.remove('hidden');
            initial();
        } else {
            console.log(valueDay);
            finalDay = valueDay;
            validDay.classList.add('hidden');
        }
    }

    // month
    if (inputMonth.value === '') {
        requiredMonth.classList.remove('hidden');
        initial();
    } else {
        requiredMonth.classList.add('hidden');

        if (valueMonth < 1 || valueMonth > 12) {
            validMonth.classList.remove('hidden');
            initial();
        } else {
            console.log(valueMonth);
            finalMonth = valueMonth;
            validMonth.classList.add('hidden');
        }
    }

    // year
    if (inputYear.value === '') {
        requiredYear.classList.remove('hidden');
        document.querySelector('.years').innerHTML = '--';
    document.querySelector('.months').innerHTML = '--';
    document.querySelector('.days').innerHTML = '--';
    } else {
        requiredYear.classList.add('hidden');

        if (valueYear > currentYear) {
            validYear.classList.remove('hidden');
            document.querySelector('.years').innerHTML = '--';
    document.querySelector('.months').innerHTML = '--';
    document.querySelector('.days').innerHTML = '--';
        } else {
            console.log(valueYear);
            finalYear = valueYear;
            validYear.classList.add('hidden');
        }
    }


    if (finalDay > 0 && finalMonth > 0 && finalYear > 0) {
        console.log(`yes! the input is ${finalDay}.${finalMonth}.${finalYear}`);
        calculate(finalDay, finalMonth, finalYear)
    }


    
});



const calculate = (day, month, year) => {
    numberOfYears = currentYear - finalYear;
    numberOfMonths = currentMonth - finalMonth;
    numberOfDays = currentDay - finalDay;

    document.querySelector('.years').innerHTML = numberOfYears;
    document.querySelector('.months').innerHTML = numberOfMonths;
    document.querySelector('.days').innerHTML = numberOfDays;
}

const initial = () => {
    document.querySelector('.years').innerHTML = '--';
    document.querySelector('.months').innerHTML = '--';
    document.querySelector('.days').innerHTML = '--';
}