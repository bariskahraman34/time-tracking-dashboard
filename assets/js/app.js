const jsonFilePath = 'assets/js/data.json';

async function fetchData(jsonFilePath){
    const response = await fetch(jsonFilePath)
    const data = await response.json();
    getData(data)
}

async function getData(data){
    console.log(data);
}

fetchData(jsonFilePath)