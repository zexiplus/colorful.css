#!/usr/bin/env node

const programe = require('commander')

const version = require('../package').version

programe.version(version)

programe
    .command('list')
    .alias('l')
    description('list colors')
    .options('-bv --by-view [num]', 'select most view')
    .options('-bl --by-like [num]', 'select most like')
    .action((env, options) => {
        let num = options.num
    })

programe
    .command('init')
    .description('init a project')
    .alias('i')
    .action(() => {
        console.log('init successfully')
    })


programe.parse(process.argv)

if (!programe.args.length) {
    programe.help()
}