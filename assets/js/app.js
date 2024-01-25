const dailyRoutines = document.querySelector('.daily-rutines-container');
const titles = document.querySelectorAll('.title');

const jsonFilePath = 'assets/js/data.json';

async function fetchData(jsonFilePath){
    const response = await fetch(jsonFilePath)
    const data = await response.json();
    return getData(data)
}

async function getData(data){
    console.log(data);
    for (let i = 0 ; i < titles.length ; i++) {
        titles[i].innerHTML = `${data[i].title}`
    }
}

fetchData(jsonFilePath)