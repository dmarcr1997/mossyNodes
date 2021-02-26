const fs = require('fs');
const prompt = require('prompt-sync')();
 
let file = fs.readFile('information.json', 'utf8', (err, data) => {
    if (err){
        console.error(err);
    } else {
        let newData = run(JSON.parse(data));  
        fs.unlinkSync('information.json')
        fs.writeFileSync('information.json', JSON.stringify(newData));         
    }
})

const run = (data) => {
    let newObj = Object.assign(data);
    let again = 'n';
    do {
        let choice = prompt('Would you like to input a project or coursework: ');
        switch(choice){
            case 'p':
                const name = prompt('Enter the name of this project: ');
                const repo = prompt('Enter the project repo: ');
                const demo = prompt('Enter the project demo: ');
                const img = prompt('Enter project image location: ');
                data.projects.push({name, repo, demo, img});
            case 'c':
                console.log('Next Time!!!');
            default:
                console.log('Nope')
        }
        again = prompt('Would you like to enter another(y/n): ')
    } while(again =='y');
    return newObj;
}

