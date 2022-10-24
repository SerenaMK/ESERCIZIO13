// SALUTO
let data = new Date();
let ora = data.getHours();
let minuti = data.getMinutes();

if (ora > 5 && ora < 12) {
    document.getElementById("saluti").innerHTML = `<span>Buongiorno! Sono le ${ora}:${minuti}.</span>`;
}
else if (ora > 12 && ora < 18) {
    document.getElementById("saluti").innerHTML = `<span>Buon pomeriggio! Sono le ${ora}:${minuti}.</span>`;
}
else {
    document.getElementById("saluti").innerHTML = `<span>Buonasera! Sono le ${ora}:${minuti}.</span>`;
}