const chalk = require('chalk')

function sortByOptions(themes, key) {
    if (!themes && !Array.isArray(themes) && !themes.length) {
        return console.log('checkout your themes array')
    }
    if (key === 'rating') {
        return themes.sort((a, b) => {
            return b[key].overall - a[key].overall
        })
    } else {
        return themes.sort((a, b) => {
            return b[key].count - a[key].count
        })
    }
}

function cutArr(arr, startIndex, num) {
    return arr.slice(startIndex, startIndex + num)
}

function logWithColors(arr) {
    arr.forEach(item => {
        createStrip(item)
    })
}

function createStrip(obj) {
    let chalkArr = obj.swatches.map((item, index) => {
        return chalk.bgHex(item.hex)(`#${item.hex}`) + ' '
    })
    console.log(`${chalkArr.join('')} Name:${obj.name} Like:${obj.like.count} View:${obj.view.count} Rating:${obj.rating.overall} \n`)
}

module.exports = {
    sortByOptions,
    cutArr,
    logWithColors
}

