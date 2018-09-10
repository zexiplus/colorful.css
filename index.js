const { cutArr, sortByOptions, logWithColors } = require('./lib/core')
const createCss = require('./lib/createcss')

function listColors(arr, options) {
    if (!options) {
        return logWithColors(arr)
    } else {
        if (options.key !== undefined) {
            arr = sortByOptions(arr, options.key)
        }
        if (options.startIndex !== undefined && options.num !== undefined) {
            arr = cutArr(arr, options.startIndex, options.num)
        }
        return logWithColors(arr)
    }
}

// colorful(themes)

module.exports = {
    listColors,
    createCss
}