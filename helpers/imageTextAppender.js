var fs = require('fs'),
    gm = require('gm');

function appendText(imgPath, text) {

    let texts = text.split(' ');
    console.log(texts)
    

    console.log(imgPath)
    let outputPath = '/Users/kirlev/Projects/JS/Hackaton/label-generator-wth-hackathon/public/final.png';
    console.log(outputPath)

    gm(imgPath)
        .font("SpectralSC-Regular.ttf", 32)
        .stroke("#ffffff")
        .drawText(200, 310, text)
        .write(outputPath, function (err) {
            if (!err) console.log('done');
            else console.log(err)
        });
    return outputPath;
}

module.exports = appendText;