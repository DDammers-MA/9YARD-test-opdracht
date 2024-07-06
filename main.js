document.addEventListener('DOMContentLoaded', () => {

const randomNumber = Math.floor(Math.random() * 20) + 1;  //genereerd een random getal tussen 1 en 20

document.getElementById('Counter').innerHTML = randomNumber; //hier word het getaal geplaat op de plek met de id counter
const tableBody = document.getElementById('number-table').querySelector('tbody');


for (let i = 1; i < randomNumber; i++){ //hiet word een loop van 1 tot wilekeurig getal
    const row = document.createElement('tr');
    const tabelNumer = document.createElement('td');
    const reultaat = document.createElement('td');
    const deler = document.createElement('td');
    const overige = document.createElement('td');

    tabelNumer.textContent = i;

    if (randomNumber % i === 0) {//cotoleer of het deelbaar
        //maakt  een groene text van deelbaar
        reultaat.textContent = 'Deelbaar';
        reultaat.classList.add('green');
        deler.textContent = '';
        overige.textContent = '';
   
    } else {
        //en als het niet deelbaar is dan word er een rode niet deelbaar in de tabel gezet
        reultaat.textContent = 'Niet Deelbaar';
        reultaat.classList.add('red');

        //kijk naar de grootste deler en de overige en zet deze dan in de tabel
        const largestDivisor = Math.floor(randomNumber / i);
        const remainder = randomNumber % i;
        deler.textContent = largestDivisor;
        overige.textContent = remainder;
    }

    //voeg alle nieuwe javascript gegenerede html aan elkaar
    row.appendChild(tabelNumer);
    row.appendChild(reultaat);
    row.appendChild(deler);
    row.appendChild(overige);


    // Voegt de rijen toe aan het tabel
    tableBody.appendChild(row);
    }

});