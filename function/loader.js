/* eslint-disable no-empty-function */
const fs = require('fs-extra')
const { color } = require('../tools')

/**
 * Returns an array of files.
 * @param {*} dirPath 
 * @param {string[]} [arrayOfFiles]
 * @returns {string[]}
 */
const getAllDirFiles = (dirPath, arrayOfFiles) => {
    const files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach((f) => {
        if (fs.statSync(dirPath + '/' + f).isDirectory()) {
            arrayOfFiles = getAllDirFiles(dirPath + '/' + f, arrayOfFiles)
        } else {
            arrayOfFiles.push(f)
        }
    })
    return arrayOfFiles
} 

/**
 * Uncache a changes.
 * @param {*} module 
 */
const uncache = (module = '.') => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}

/**
 * Delete file cache.
 * @param {*} module 
 * @param {*} call 
 */
const nocache = (module, call = () => {}) => {
    console.log(color('[WATCH]', 'orange'), color(`=> '${module}'`, 'yellow'), 'file is now being watched by me!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        call(module)
    })
}

module.exports = {
    getAllDirFiles,
    uncache,
    nocache
}