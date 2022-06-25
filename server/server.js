let path = require('path');
let fs = require('fs');
let request = require('request');



let chirps = [
    {
        name: 'chirpPersonOne',
        chirp: 'Hello!'
    },
    {
        name:'chirpPersonTwo',
        chirp: 'yo'
    },
    {
        name:'chirpPersonOne',
        chirp: 'Have you run into the Three Fingers yet?'
    },
    {
        name: 'chirpPersonTwo',
        chirp: `Yeah but I didn't realize that walking up to that door naked gave permission for THAT`
    },
    {
        name: 'chirpPersonThree',
        chirp: `What are you two f$%king talking about`
    }
]

// for(var i = 0; i <= chirps.length; i++) {
//     console.log(chirps.i)
// }


let dataPath = path.join(__dirname, '../chirps.json')

let redditPath = path.join(__dirname, '../reddit.js')

let parsedChirps = JSON.stringify(chirps)

fs.writeFile(dataPath, parsedChirps, err => {
    if(err) {
        console.log(err);
    }
    
})

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    
   
    var chirps = JSON.parse(data);
    console.log(chirps)
//     for(var i = 0; i <= chirps.length; i++) {
//     console.log(chirps[i]);
    
// }
});

articlePath = path.join(__dirname, '../popular-articles.json');

var redditArray = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);

    // console.log(res);
    fs.writeFile(redditPath, res.body, err => {
        if(err) console.log(err);

        JSON.parse(body).data.children.forEach(item => {
            
            redditItem = {
                title: item.data.title,
                author: item.data.author,
                url: item.data.url
            }

            redditArray.push(redditItem)

            let parsedArray = JSON.stringify(redditArray);

            // fs.writeFile(articlePath, redditArray, err => {
            //     if(err) {
            //         console.log(err);
            //     }
            // })
            fs.writeFile(articlePath, parsedArray, err => {
                if(err) {
                    console.log(err);
                }
            })
            // console.log(item.data.title);
            // console.log(item.data.author);
            // console.log(item.data.url);
        });
    });
});

// https://reddit.com/r/popular.json

// var redditData = async function () {
//     var redditArray = [];
//     const result = await new Promise((resolve, reject) => {
//         request('https://reddit.com/r/popular.json', (err, res, body) => {
//             if(err) console.log(err);
        
//             // console.log(res);
            
//         })
//     })
// }