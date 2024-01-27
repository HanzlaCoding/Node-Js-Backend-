const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, '/files');
for (let i = 0; i < 5; i++){
    fs.writeFileSync(`${dirpath}/text${i}.txt`, `Dummy data ${i}`);
};