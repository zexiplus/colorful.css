#!/usr/bin/env node
const programe = require('commander')
const {listColors, createCss} = require('..')
const themes = require('../lib/themes')


const version = require('../package').version

programe.version(version, '--version')

programe
    .usage('create <name>')
    .command('create <name>')
    .action((name, cmd) => {
        console.log(`create name is ${name}`)
        createCss()
    })


programe
    .usage('list [num] [-v|-l|-r]')
    .command('list [num]')
    .option('-v --view', 'list by the most watched')
    .option('-l --like', 'list by the most liked')
    .option('-r --rating', 'list by the highest ranking')
    .action((num, cmd) => {
        if (cmd.view) {
            listColors(themes, {
                key: 'view', 
                startIndex: 0, 
                num: num
            })
        } else if (cmd.like) {
            listColors(themes, {
                key: 'view',
                startIndex: 0,
                num: num
            })
        } else if (cmd.rating) {
            listColors(themes, {
                key: 'rating',
                startIndex: 0,
                num: num
            })
        } else {
            listColors(themes, {
                startIndex: 0,
                num: num
            })
        }
    })

programe.parse(process.argv)

if (!programe.args.length) {
    programe.help()
}