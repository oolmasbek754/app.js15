const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

function writeFile(text) {
    fs.writeFileSync(filePath, text);
    console.log('Faylga yozildi');
}

function readFile() {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('Fayldagi ma\'lumot:', data);
}

function appendFile(text) {
    fs.appendFileSync(filePath, '\n' + text);
    console.log('Faylga qo\'shildi');
}

writeFile('Salom dunyo!');
appendFile('Yangi qator');
readFile();
