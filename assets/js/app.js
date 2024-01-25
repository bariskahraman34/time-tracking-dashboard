const dailyRoutines = document.querySelector('.daily-rutines-container');
const titles = document.querySelectorAll('.title');
const time = document.querySelectorAll('.time');
const timezone = document.querySelectorAll('.timezone-btn');
const previous = document.querySelectorAll('.last-week');

let periodOfTime;

const jsonFilePath = 'assets/js/data.json';

async function fetchData(jsonFilePath){
    const response = await fetch(jsonFilePath)
    const data = await response.json();
    return getData(data)
}

for (const period of timezone) {
    period.addEventListener('click',periodBtn)
}

function periodBtn(){
    for (const period of timezone) {
        period.classList.remove('active');
    }
    this.classList.add('active');
    periodOfTime = this.id;
    console.log(periodOfTime)
    fetchData(jsonFilePath);
}

async function getData(data){
    for (const period of timezone) {
        if(period.classList.contains('active')){
            periodOfTime = period.id;
        }
    }
    for (let i = 0 ; i < titles.length ; i++) {
        titles[i].innerHTML = `${data[i].title}`;
        if(periodOfTime == "weekly"){
            time[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`
            previous[i].innerHTML = `Last-Week ${data[i].timeframes.weekly.previous}hrs`
        }else if(periodOfTime == "daily"){
            time[i].innerHTML = `${data[i].timeframes.daily.current}hrs`
            previous[i].innerHTML = `Last-Week ${data[i].timeframes.daily.previous}hrs`
        }else if(periodOfTime == "monthly"){
            time[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`
            previous[i].innerHTML = `Last-Week ${data[i].timeframes.monthly.previous}hrs`
        }
    }
}

fetchData(jsonFilePath)