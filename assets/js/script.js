// CREA la variabile che contiene la DATA di oggi
let data = new Date();

// ARRAY con i nomi dei mesi
let mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]


// STAMPA
document.getElementById("data").innerHTML += `<span>${data.getDate()} / ${mesi[data.getMonth()]} / ${data.getFullYear()}</span>`;

document.getElementById("dataIntera").innerHTML += `<span>${data}</span>`;
document.getElementById("dataGiorno").innerHTML += `<span>${data.getDate()}</span>`;
document.getElementById("dataMese").innerHTML += `<span>${mesi[data.getMonth()]}</span>`;
document.getElementById("dataOggi").innerHTML += `<span>${data.getDate()}-${data.getMonth()}-${data.getFullYear()}</span>`;


// SALUTO
let saluti = ["Buongiorno", "Buon pomeriggio", "Buonasera"];
let ora = data.getHours();

if (ora < 12) {
    document.getElementById("saluti").innerHTML = `<span>Buongiorno! Sono le ${data.getHours()}:${data.getMinutes()}.</span>`;
}
else if (ora > 12 && ora < 18) {
    document.getElementById("saluti").innerHTML = `<span>Buon pomeriggio! Sono le ${data.getHours()}:${data.getMinutes()}.</span>`;
}
else {
    document.getElementById("saluti").innerHTML = `<span>Buonasera! Sono le ${data.getHours()}:${data.getMinutes()}.</span>`;
}