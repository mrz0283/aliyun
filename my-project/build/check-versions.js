'use strict'
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec(cmd) {
    // 执行cmd命令拿到当前版本号
    return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
    {
        name: 'node',
        // 拿到当前的版本号
        currentVersion: semver.clean(process.version),
        // 拿到pageage中node的版本号
        versionRequirement: packageConfig.engines.node
    }
]

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        // 打印npm版本号
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm
    })
}

// 循环版本数组
module.exports = function () {
    const warnings = []

    for (let i = 0; i < versionRequirements.length; i++) {
        const mod = versionRequirements[i]

        // 检测当前版本是否在所要求的版本范围内
        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            )
        }
    }

    if (warnings.length) {
        console.log('')
        console.log(chalk.yellow('To use this template, you must update following to modules:'))
        console.log()

        for (let i = 0; i < warnings.length; i++) {
            const warning = warnings[i]
            console.log('  ' + warning)
        }

        console.log()
        // 版本不符合退出程序
        process.exit(1)
    }
}
