const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./ReadMeFolder/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });

        console.log(`

        Your README.md file has been added to the ReadMeFolder.
        
        `)
    });
};

module.exports = newFile => {
    return writeFile(newFile);
}