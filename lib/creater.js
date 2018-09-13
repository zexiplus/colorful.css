const fs = require('fs')
const path = require('path')
const log = console.log

const originFile = fs.createReadStream(path.join(__dirname, '../output/template.css'))
const cssFile = fs.createWriteStream(path.join(__dirname, '../output/colorful.css'))

// originFile.pipe(cssFile)

function createStyle(arr, file) {
    let str = `
        button[bgcolor="a"] {
            background-color: ${arr[0]};
        }
        button[bgcolor="b"] {
            background-color: ${arr[1]};
        }
        button[bgcolor="c"] {
            background-color: ${arr[2]};
        }
        button[bgcolor="d"] {
            background-color: ${arr[3]};
        }
        button[bgcolor="e"] {
            background-color: ${arr[4]};
        }
    `
    file.write(str)
}

// createStyle(['#333', '#345', '#234', '#342', '#fff'], cssFile)

module.exports = {
    createCss(arr) {
        createStyle(arr, cssFile)
    },
    pickColor(str) {
        if (!str || str.length === 0) return
        let arr = str.match(/#[\w\d]{6}/g)
        return arr
    }
}