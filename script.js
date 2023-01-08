(()=>{
const city = document.getElementById('city');
const country = document.getElementById('country');
const budget = document.getElementById('budget');
const start_date = document.getElementById('date-start');
const end_date = document.getElementById('date-end');
const numOfPersons = document.getElementById('persons');
const transfer = document.getElementById('transfer');
const storageVal = localStorage.getItem('travel_database');
const database = (storageVal) ? JSON.parse(storageVal) : [];
const databaseResult = document.getElementById('database');

const render = () => {
    const cardLinesStr = database.map((value, index) =>
        `<div class="card"> 
            <span class="card_line1" index="${index}">From Haifa to ${value.city}/${value.country}</span>
            <span class="card_line2" index="${index}">Expected budget: ${value.budget} ILS</span>
            <span class="card_line3" index="${index}">
            ${value.start_date} - ${value.end_date}
            | ${value.numOfPersons} persons
            | ${value.transfer}
             </span>
         </div>`).join("");
    console.log(cardLinesStr);
    databaseResult.innerHTML = cardLinesStr;
}
render();

function addRecord() {
    database.push({
        city: city.value, country: country.value, budget: budget.value,
        start_date: start_date.value, end_date: end_date.value, numOfPersons: numOfPersons.value,
        transfer: transfer.value
    });
    console.log(database);
    localStorage.setItem('travel_database', JSON.stringify(database));
    render();
}

const add_btn = document.getElementById('add_btn');
add_btn.onclick = addRecord;

})();
