// SALUTO
let data = new Date();
let ora = data.getHours();

if (ora < 12) {
    document.getElementById("saluti").innerHTML = `<span>Buongiorno! Sono le ${data.getHours()}:${data.getMinutes()}.</span>`;
}
else if (ora < 18) {
    document.getElementById("saluti").innerHTML = `<span>Buon pomeriggio! Sono le ${data.getHours()}:${data.getMinutes()}.</span>`;
}
else {
    document.getElementById("saluti").innerHTML = `<span>Buonasera! Sono le ${data.getHours()}:${data.getMinutes()}.</span>`;
}