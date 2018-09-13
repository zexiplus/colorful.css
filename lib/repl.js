const inquirer = require('inquirer')
const { createCss, pickColor } = require('./creater')

module.exports = function (choices) {
    inquirer.prompt([{
        type: 'list',
        name: 'choice your favorite themes \n',
        pageSize: choices.length * 10 || 1000,
        choices: choices
    }]).then(res => {
        let colorArr = pickColor(res['choice your favorite themes \n'])
        createCss(colorArr)
    })
}