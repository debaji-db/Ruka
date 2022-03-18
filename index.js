/* eslint-disable no-unused-vars */
const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { ind, eng } = require('./message/text/lang/')
const { loader } = require('./function')
const { version, bugs } = require('./package.json')
const msgHandler = require('./message/index.js')
const figlet = require('figlet')
const canvas = require('discord-canvas')
const { ownerBot } = require('./config.json')
const fs = require('fs-extra')
const { groupLimit, memberLimit } = require('./database/bot/setting.json')
const express = require('express')
const app = express()

const start = (ruka = new Client()) => {
    console.log(color(figlet.textSync('ruka Bot', 'Larry 3D'), 'cyan'))
    console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(loader.getAllDirFiles('./database').length), color('Library:', 'yellow'), color(loader.getAllDirFiles('./lib').length), color('Function:', 'yellow'), color(loader.getAllDirFiles('./function').length))
    console.log(color('=> Source code version:', 'yellow'), color(version))
    console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color(bugs.url))
    console.log(color('[ruka]'), color('rukaBot is now online!', 'yellow'))
    console.log(color('[FBI]', 'cyan'), color('Welcome back, fbi! Hope you are doing well~', 'magenta'))

    // Creating a localhost
    app.get('/', (req, res) => res.status(200).send('ruka Client'))
    const PORT = process.env.PORT || 8080 || 5000 || 3000
    app.listen(PORT, () => {
        console.log(color('Localhost is running!', 'yellow'))
    })  

    // Uncomment code di bawah untuk mengaktifkan auto-update file changes. Tidak disarankan untuk long-time use.
    // Uncomment code below to activate auto-update file changes. Not recommended for long-time use.
    // loader.nocache('../message/index.js', (m) => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))

    ruka.onStateChanged((state) => {
        console.log(color('[ruka]'), state)
        if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') ruka.forceRefocus()
    })

    ruka.onAddedToGroup(async (chat) => {
        const gc = await ruka.getAllGroups()
        console.log(color('[ruka]'), 'Added to a new group. Name:', color(chat.contact.name, 'yellow'), 'Total members:', color(chat.groupMetadata.participants.length, 'yellow'))
        if (chat.groupMetadata.participants.includes(ownerBot)) {
            await ruka.sendText(chat.id, eng.addedGroup(chat))
        } else if (gc.length > groupLimit) {
            await ruka.sendText(chat.id, `Max groups reached!\n\nCurrent status: ${gc.length}/${groupLimit}`)
            await ruka.deleteChat(chat.id)
            await ruka.leaveGroup(chat.id)
        } else if (chat.groupMetadata.participants.length < memberLimit) {
            await ruka.sendText(chat.id, `Need at least ${memberLimit} members in group!`)
            await ruka.deleteChat(chat.id)
            await ruka.leaveGroup(chat.id)
        } else {
            await ruka.sendText(chat.id, eng.addedGroup(chat))
        }
    })

    ruka.onMessage((message) => {
        // Uncomment code di bawah untuk mengaktifkan auto-delete cache pesan.
        // Uncomment code below to activate auto-delete message cache.
        /*
        ruka.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    console.log(color('[ruka]'), color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    ruka.cutMsgCache()
                    console.log(color('[ruka]'), color('Cache deleted!', 'yellow'))
                }
            })
        */
        
        // Comment code msgHandler di bawah untuk mengaktifkan auto-update. Kemudian, uncomment code require di bawah msgHandler.
        // Comment code below to activate auto-update. Then, uncomment require code below msgHandler.
        msgHandler(ruka, message)
        // require('./message/index.js')(ruka, message)
    })

    ruka.onIncomingCall(async (callData) => {
        await ruka.sendText(callData.peerJid, eng.blocked(ownerBot))
        await ruka.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked.`, 'yellow'))
    })
    ruka.onGlobalParticipantsChanged(async (event) => {
        const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = _welcome.includes(event.chat)
        const det = await ruka.getChatById(event.chat)
        const botNumbers = await ruka.getHostNumber() + '@c.us'
        try {
            if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                const pic = await ruka.getProfilePicFromServer(event.who)
                if (pic === undefined) {
                    var pp = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
                } else {
                    var pp = pic
                }
                await ruka.sendFileFromUrl(event.chat, pp, 'profile.jpg', `Welcome to *${det.contact.formattedName}!* \n\n@${event.who.replace('@c.us', '')} \n\nHave fun with us✨ \n\n *Group Description* ❤️ \n\n ${det.groupMetadata.desc}`)
            }
        } catch (err) {
            console.error(err)
        }
    })
}
create(options(start))
    .then((ruka) => start(ruka))
    .catch((err) => console.error(err))
