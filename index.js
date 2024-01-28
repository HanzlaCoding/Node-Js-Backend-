// Make list using file system
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, '/files');
for (let i = 0; i < 5; i++){
    fs.writeFileSync(filepath, `Dummy data ${i}`);
};
// Crud = create,read,update & delete with file system
const filepath = `${dirpath}/text.txt`;
fs.writeFileSync(filepath, `Dummy data`);
// Read file in file system
fs.readFile(filepath,"utf8",(err,files)=>{
    console.log(files)
});
// File data means inner text update
fs.appendFile(filepath,"ye wo ghatiyatext hai.",(err)=>{
    if(!err){
        console.log("File is updated")
    }
    else{console.log("Error")}
});
// Reading file data
fs.rename(filepath,`${dirpath}/f.txt`,(err)=>{
    if(!err){
        console.log("File is created");
    }
});
// Delete file
fs.unlinkSync(`${dirpath}/f.txt`);