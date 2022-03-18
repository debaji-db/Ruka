/* eslint-disable no-case prefix+-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */

/**
 * This source code below is free, please DO NOT sell this in any form!
 * Source code ini gratis, jadi tolong JANGAN jual dalam bentuk apapun!
 *
 * If you copying one of our source code, please give us CREDITS. Because this is one of our hardwork.
 * Apabila kamu menjiplak salah satu source code ini, tolong berikan kami CREDIT. Karena ini adalah salah satu kerja keras kami.
 *
 * If you want to contributing to this source code, pull requests are always open.
 * Apabila kamu ingin berkontribusi ke source code ini, pull request selalu kami buka.
 *
 * Thanks for the contributions.
 * Terima kasih atas kontribusinya.
 */

/********** MODULES **********/
const { decryptMedia, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const sagiri = require('sagiri')
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const fetch = require('node-fetch')
const isPorn = require('is-porn')
const exec = require('await-exec')
const config = require('../config.json')
const saus = sagiri(config.nao, { results: 5 })
const axios = require('axios')
const tts = require('node-gtts')
const nekobocc = require('nekobocc')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const bent = require('bent')
const waifulist = require("public-waifulist")
const waifuclient = new waifulist()
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const canvas = require('canvacord')
const mathjs = require('mathjs')
const emojiUnicode = require('emoji-unicode')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const ocrtess = require('node-tesseract-ocr')
const translate = require('@vitalets/google-translate-api')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const genshin = require('genshin')
const google = require('google-it')
const cron = require('node-cron')
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
/********** END OF MODULES **********/

/********** UTILS **********/
const { msgFilter, color, processTime, isUrl, createSerial } = require('../tools')
const { nsfw, weeaboo, downloader, fun, misc, toxic, spam, rugaapi} = require('../lib')
const { wall, liriklagu, quotemaker,getRandom} = require('../lib/fun')
const { uploadImages } = require('../tools/fetcher')
const { ind, eng } = require('./text/lang/')
const { daily, level, register, afk, reminder, premium, limit} = require('../function')
const cd = 4.32e+7
const limitCount = 25
const errorImg = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
const dateNow = moment.tz('Asia/Jakarta').format('DD-MM-YYYY')
const ocrconf = {
    lang: 'eng',
    oem: '1',
    psm: '3'
}
/********** END OF UTILS **********/

/********** DATABASES **********/
const _nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antinsfw = JSON.parse(fs.readFileSync('./database/group/antinsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const _autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'))
const _ban = JSON.parse(fs.readFileSync('./database/bot/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'))
const _mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const _reminder = JSON.parse(fs.readFileSync('./database/user/reminder.json'))
const _daily = JSON.parse(fs.readFileSync('./database/user/daily.json'))
const _stick = JSON.parse(fs.readFileSync('./database/bot/sticker.json'))
const _setting = JSON.parse(fs.readFileSync('./database/bot/setting.json'))
const smart = JSON.parse(fs.readFileSync('./database/bot/smart.json'))
let { memberLimit, groupLimit } = _setting
/********** END OF DATABASES **********/

/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
module.exports = msgHandler = async (ruka = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const botNumber = await ruka.getHostNumber() + '@c.us'
        const blockNumber = await ruka.getBlockedIds()
        const ownerNumber = config.ownerBot
        const authorWm = config.authorStick
        const packWm = config.packStick
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await ruka.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
        const cmd = caption || body || ''
        const command = cmd.toLowerCase().split(' ')[0] || ''
        const prefix = /^[$]/.test(command) ? command.match(/^[$]/gi) : '-' // Multi-Prefix by: VideFrelan
        const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const args = body.trim().split(/ +/).slice(1)
        const uaOverride = config.uaOverride
        const q = args.join(' ')
        const ar = args.map((v) => v.toLowerCase())
        const url = args.length !== 0 ? args[0] : ''

        /********** VALIDATOR **********/
        const isCmd = body.startsWith(prefix)
        const owners = ['919366665173@c.us']
        const isOwner = owners.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isSmart = smart.includes(chat.id)
        const isBanned = _ban.includes(sender.id)
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const isRegistered = register.checkRegisteredUser(sender.id, _registered)
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
        const isNsfw = isGroupMsg ? _nsfw.includes(groupId) : false
        const isWelcomeOn = isGroupMsg ? _welcome.includes(groupId) : false
        const isDetectorOn = isGroupMsg ? _antilink.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isMute = isGroupMsg ? _mute.includes(chat.id) : false
        const isAfkOn = isGroupMsg ? afk.checkAfkUser(sender.id, _afk) : false
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedVoice = quotedMsg && quotedMsg.type === 'ptt'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isAudio = type === 'audio'
        const isVoice = type === 'ptt'
        const isGif = mimetype === 'image/gif'
        /********** END OF VALIDATOR **********/

        // Automate
        premium.expiredCheck(_premium)
        cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Hang tight, it\'s time to reset usage limits...')
            fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })

        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = level.getLevelingLevel(sender.id, _level)
        var role = 'Warrior'
        if (levelRole <= 2) {
            var role = 'Elite III'
        } else if (levelRole <= 4) {
            var role = 'Elite II'
        } else if (levelRole <= 6) {
            var role = 'Elite I'
        } else if (levelRole <= 8) {
            var role = 'Master IV'
        } else if (levelRole <= 10) {
            var role = 'Master III'
        } else if (levelRole <= 12) {
            var role = 'Master II'
        } else if (levelRole <= 14) {
            var role = 'Master I'
        } else if (levelRole <= 16) {
            var role = 'Grandmaster V'
        } else if (levelRole <= 18) {
            var role = 'Grandmaster IV'
        } else if (levelRole <= 20) {
            var role = 'Grandmaster III'
        } else if (levelRole <= 22) {
            var role = 'Grandmaster II'
        } else if (levelRole <= 24) {
            var role = 'Grandmaster I'
        } else if (levelRole <= 26) {
            var role = 'Epic V'
        } else if (levelRole <= 28) {
            var role = 'Epic IV'
        } else if (levelRole <= 30) {
            var role = 'Epic III'
        } else if (levelRole <= 32) {
            var role = 'Epic II'
        } else if (levelRole <= 34) {
            var role = 'Epic I'
        } else if (levelRole <= 36) {
            var role = 'Legend V'
        } else if (levelRole <= 38) {
            var role = 'Legend IV'
        } else if (levelRole <= 40) {
            var role = 'Legend III'
        } else if (levelRole <= 42) {
            var role = 'Legend II'
        } else if (levelRole <= 44) {
            var role = 'Legend I'
        } else if (levelRole <= 46) {
            var role = 'Mythic'
        } else if (levelRole <= 50) {
            var role = 'Mythic Glory'
        }

        // Leveling 
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await ruka.sendFile(from, './media/levelup.jpg', 'levelup.jpg', `_*「 LEVEL UP! 」*_\n\n➸ *📃️Name*: ${pushname}\n➸ *🎯️XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *❤️Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *🔮️Role*: *${role}*\n\nCongrats!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }

        // Anti group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                const valid = await ruka.inviteInfo(chats)
                if (valid) {
                    console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'))
                    await ruka.reply(from, eng.linkDetected(), id)
                    await ruka.removeParticipant(groupId, sender.id)
                } else {
                    console.log(color('[WARN]', 'yellow'), color('Received a group link but it is not a valid link!', 'yellow'))
                }
            }
        }

        // Anti virtext by: @VideFrelan
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
           if (chats.length > 5000) {
               await ruka.sendTextWithMentions(from, `@${sender.id} is detected sending a virtext.\nYou will be kicked!`)
               await ruka.removeParticipant(groupId, sender.id)
            }
        } 
               
        // Sticker keywords by: @hardianto02_
        if (isGroupMsg && isRegistered) {
            if (_stick.includes(chats)) {
                await ruka.sendImageAsSticker(from, `./temp/sticker/${chats}.webp`, { author: authorWm, pack: packWm })
            }
        }

        // Anti fake group link detector by: Baguettou
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.(?!whatsapp.com))/gi))) {
                console.log(color('[KICK]', 'red'), color('Received a fake group link!', 'yellow'))
                await ruka.reply(from, 'Fake group link detected!', id)
                await ruka.removeParticipant(groupId, sender.id)
            }
        }

        // Anti NSFW link
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiNsfw && !isOwner) {
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link:', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[NSFW]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await ruka.reply(from, eng.linkNsfw(), id)
                        await ruka.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }

        // Auto sticker
        if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await ruka.sendImageAsSticker(from, imageBase64, { author: authorWm, pack: packWm })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // Auto sticker video
        if (isGroupMsg && isAutoStickerOn && isMedia && isVideo && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await ruka.sendMp4AsSticker(from, videoBase64, { stickerMetadata: true, pack: packWm, author: authorWm, fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', crop: false, loop: 0 })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // AFK by Slavyan
        if (isGroupMsg) {
            for (let ment of mentionedJidList) {
                if (afk.checkAfkUser(ment, _afk)) {
                    const getId = afk.getAfkId(ment, _afk)
                    const getReason = afk.getAfkReason(getId, _afk)
                    const getTime = afk.getAfkTime(getId, _afk)
                    await ruka.reply(from, eng.afkMentioned(getReason, getTime), id)
                }
            }
            if (afk.checkAfkUser(sender.id, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                await ruka.sendText(from, eng.afkDone(pushname))
            }
        }

        // Mute
        if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return
        
        // Ignore banned and blocked users
        if (isCmd && _ban.includes(sender.id)) return ruka.reply(from, 'Gomenasaii, you\'re banned from using the bot!', id)
        if (isCmd && (isBanned || isBlocked) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && (isBanned || isBlocked) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti spam
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isSmart) spam.into(message, color, isBotGroupAdmins)
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await ruka.sendSeen(from)
        }
        if (isCmd && isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
            await ruka.sendSeen(from)
        }
        
        // Anti spam
        if (isCmd && !isPremium && !isOwner) msgFilter.addFilter(from)

         //getuserinfo
         async function getUserInfo(message) {
            const data = await ruka.getContact(message.mentionedJidList[0])
            console.log(data) 
            return data.pushname
        
        }

              //function
       function yta(url) {
        return new Promise((resolve, reject) => {
            if (ytIdRegex.test(url)) {
                let ytId = ytIdRegex.exec(url)
                url = 'https://youtu.be/' + ytId[1]
                post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                    url,
                    q_auto: 0,
                    ajax: 1
                })
                    .then(res => res.json())
                    .then(res => {
                        let document = (new JSDOM(res.result)).window.document
                        let type = document.querySelectorAll('td')
                        let filesize = type[type.length - 10].innerHTML
                        let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                        let mthumb = document.querySelector('img').src
                        let mtitle = document.querySelector('b').innerHTML
    
                        post('https://www.y2mate.com/mates/en60/convert', {
                            type: 'youtube',
                            _id: id[1],
                            v_id: ytId[1],
                            ajax: '1',
                            token: '',
                            ftype: 'mp3',
                            fquality: 128
                        })
                            .then(res => res.json())
                            .then(res => {
                                let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                                resolve({
                                    mdl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                    mthumb,
                                    mtitle,
                                    filesizeF: filesize,
                                    filesize: KB
                                })
                            }).catch(reject)
                    }).catch(reject)
            } else reject('URL INVALID')
        })
    }
    
    function post(url, formdata) {
        console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
        return fetch(url, {
            method: 'POST',
            headers: {
                accept: "/",
                'accept-language': "en-US,en;q=0.9",
                'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
        })
    }
    
    function ytv(url) {
        return new Promise((resolve, reject) => {
            if (ytIdRegex.test(url)) {
                let ytId = ytIdRegex.exec(url)
                url = 'https://youtu.be/' + ytId[1]
                post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                    url,
                    q_auto: 0,
                    ajax: 1
                })
                    .then(res => res.json())
                    .then(res => {
                        let document = (new JSDOM(res.result)).window.document
                        let type = document.querySelectorAll('td')
                        let vfilesize = type[type.length - 10].innerHTML
                        let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                        let vthumb = document.querySelector('img').src
                        let vtitle = document.querySelector('b').innerHTML
    
                        post('https://www.y2mate.com/mates/en60/convert', {
                            type: 'youtube',
                            _id: id[1],
                            v_id: ytId[1],
                            ajax: '1',
                            token: '',
                            ftype: 'mp4',
                            fquality: 360
                        })
                            .then(res => res.json())
                            .then(res => {
                                let KB = parseFloat(vfilesize) * (1000 * /MB$/.test(vfilesize))
                                resolve({
                                    vdl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                    vthumb,
                                    vtitle,
                                    vfilesizeF: vfilesize,
                                    vfilesize: KB
                                })
                            }).catch(reject)
                    }).catch(reject)
            } else reject('URL INVALID')
        })
    }
    
    function post(url, formdata) {
        console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
        return fetch(url, {
            method: 'POST',
            headers: {
                accept: "/",
                'accept-language': "en-US,en;q=0.9",
                'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
        })
    }

     //automated text
     if(message.body == 'Hi'){
        const hii = ['./media/rukaa.jpg', './media/rukaa2.jpg', './media/rukaa3.jpg', './media/h.jpg', './media/g.jpg', './media/f.jpg', './media/e.jpg', './media/d.jpg', './media/c.jpg', './media/b.jpg', './media/a.jpg' ,'./media/rukaa4.jpg']
        const randomhii = hii[Math.floor(Math.random() * hii.length)]
        ruka.sendFile(from, randomhii, 'message.body', `*👋️Hi ${pushname}, I'm Ruka nice to meet you~*`, id)
    }
    if(message.body == '😘'){
        ruka.reply(message.from, `love you too😘😘😘,${pushname}`, id)
    }
    if(message.body == '🙂'){
        ruka.reply(message.from, `🙂🙂🙂🙂`, id)
    }
    if(message.body == '🥺'){
        ruka.reply(message.from, `🥺🥺watashi wa`, id)
    }
    if(message.body == 'Bot'){
        ruka.reply(message.from, 'gand mar', id)
      }
    if(message.body == 'Hello'){
          ruka.reply(message.from, 'hola, i am Ruka nice to meet u 🤭❤️', id)
        }
    if(message.body == 'Arigato'){
        ruka.sendPtt(message.from, './media/arigato.mp3', id)
    }
    if(message.body == 'Yo'){
        ruka.sendPtt(message.from, './media/senpai.mp3', id)
    }
    if(message.body == 'Bye'){
        ruka.sendPtt(message.from, './media/nikal.mp3', id)
    }
    if(message.body == 'Ohayo'){
        ruka.sendPtt(message.from, './media/ohayoo.mp3', id)
    }
    if(message.body == 'Oyasumi'){
      ruka.sendPtt(message.from, './media/oyasumi.mp3', id)
  }
    if(message.body == 'bsdk'){
      ruka.reply(message.from, 'shut the fuck up bitch', id)
  }
    if(message.body == 'Bae'){
        ruka.sendPtt(message.from, './media/onichan.mp3', id)
    }
    if(message.body == 'Ok'){
        ruka.sendPtt(message.from, './media/layla.mp3', id)
    }
    if(message.body == 'Naruto'){
        ruka.sendPtt(message.from, './media/dattebayo.mp3', id)
    }
    if(message.body == 'Itachi'){
        ruka.sendPtt(message.from, './media/mangekyo.mp3', id)
    }
    if(message.body == 'Madara'){
      ruka.sendPtt(message.from, './media/madara.mp3', id)
  }
    if(message.body == 'Pain'){
        ruka.sendPtt(message.from, './media/pain.mp3', id)
    }
    if(message.body == 'Obito'){
        ruka.sendPtt(message.from, './media/obito.mp3', id)
    }
    if(message.body == 'Sasuke'){
        ruka.sendPtt(message.from, './media/sasuke.mp3', id)
    }
    if(message.body == 'Ruka'){
      ruka.sendPtt(message.from, './media/ruka.mp3', id)
    }
    if(message.body == 'Gg'){
      ruka.sendPtt(message.from, './media/mlbb/gg.mp3', id)
    }
    if(message.body == 'Wp'){
      ruka.sendPtt(message.from, './media/mlbb/wp.mp3', id)
    }
    if(message.body == 'Evos'){
      ruka.sendPtt(message.from, './media/mlbb/squad/evos.mp3', id)
    }
    if(message.body == 'Blacklist'){
        ruka.sendPtt(message.from, './media/mlbb/squad/blacklist.mp3', id)
      }
    if(message.body == 'Onic'){
      ruka.sendPtt(message.from, './media/mlbb/squad/onic.mp3', id)
    }
    if(message.body == 'Aura'){
      ruka.sendPtt(message.from, './media/mlbb/squad/aura.mp3', id)
    }
    if(message.body == 'Btr'){
      ruka.sendPtt(message.from, './media/mlbb/squad/btr.mp3', id)
    }
    if(message.body == 'Alterego'){
      ruka.sendPtt(message.from, './media/mlbb/squad/alter.mp3', id)
    }
    if(message.body == 'Rrq'){
      ruka.sendPtt(message.from, './media/mlbb/squad/rrq.mp3', id)
    }
    if(message.body == 'Geek'){
      ruka.sendPtt(message.from, './media/mlbb/squad/geek.mp3', id)
    }
    if(message.body == 'Aerowolf'){
      ruka.sendPtt(message.from, './media/mlbb/squad/aerowolf.mp3', id)
    }
 
        switch (command) {
            // Register by Slavyan
            case prefix+ 'register':
                if (isRegistered) return await ruka.reply(from, eng.registeredAlready(), id)
                if (isGroupMsg) return await ruka.reply(from, eng.pcOnly(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                const namaUser = q.substring(0, q.indexOf('|') - 1)
                const umurUser = q.substring(q.lastIndexOf('|') + 2)
                const serialUser = createSerial(20)
                if (Number(umurUser) >= 40) return await ruka.reply(from, eng.ageOld(), id)
                register.addRegisteredUser(sender.id, namaUser, umurUser, time, serialUser, _registered)
                await ruka.reply(from, eng.registered(namaUser, umurUser, sender.id, time, serialUser), id)
                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
            break

            // Level [BETA] by Slavyan
            case prefix+ 'level':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isLevelingOn) return await ruka.reply(from, eng.levelingNotOn(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                const userLevel = level.getLevelingLevel(sender.id, _level)
                const userXp = level.getLevelingXp(sender.id, _level)
                const ppLink = await ruka.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                } else {
                    pepe = ppLink
                }
                const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setRank(Number(level.getUserRank(sender.id, _level)))
                    .setCurrentXP(userXp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(requiredXp)
                    .setProgressBar('#ffa200', 'COLOR')
                    .setBackground('COLOR', '#000000')
                    .setUsername(pushname)
                    .setDiscriminator(sender.id.substring(6, 10))
                rank.build()
                    .then(async (buffer) => {
                        const imageBase64 = `data:image/png;base64,${buffer.toString('base64')}`
                        await ruka.sendImage(from, imageBase64, 'rank.png', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'leaderboard':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isLevelingOn) return await ruka.reply(from, eng.levelingNotOn(), id)
                if (!isGroupMsg) return await ruka.reply(from. eng.groupOnly(), id)
                const resp = _level
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '*── 「 LEADERBOARDS 」 ──*\n\n'
                try {
                    for (let i = 0; i < 4; i++) {
                        var roles = 'warrior'
                        if (resp[i].level >= 2) {
                            roles = 'ELITE III'
                        } else if (resp[i].level >= 4) {
                            roles = 'ELITE II'
                        } else if (resp[i].level >= 6) {
                            roles = 'ELITE I'
                        } else if (resp[i].level >= 8) {
                            roles = 'MASTER IV'
                        } else if (resp[i].level >= 10) {
                            roles = 'MASTER III'
                        } else if (resp[i].level >= 12) {
                            roles = 'MASTER II'
                        } else if (resp[i].level >= 14) {
                            roles = 'MASTER I'
                        } else if (resp[i].level >= 16) {
                            roles = 'GRANDMASTER V'
                        } else if (resp[i].level >= 18) {
                            roles = 'GRANDMASTER IV'
                        } else if (resp[i].level >= 20) {
                            roles = 'GRANDMASTER III'
                        } else if (resp[i].level >= 22) {
                            roles = 'GRANDMASTER II'
                        } else if (resp[i].level >= 24) {
                            roles = 'GRANDMASTER I'
                        } else if (resp[i].level >= 26) {
                            roles = 'EPIC V'
                        } else if (resp[i].level >= 28) {
                            roles = 'EPIC IV'
                        } else if (resp[i].level >= 30) {
                            roles = 'EPIC III'
                        } else if (resp[i].level >= 32) {
                            roles = 'EPIC II'
                        } else if (resp[i].level >= 34) {
                            roles = 'EPIC I'
                        } else if (resp[i].level >= 36) {
                            roles = 'LEGEND V'
                        } else if (resp[i].level >= 38) {
                            roles = 'LEGEND IV'
                        } else if (resp[i].level >= 40) {
                            roles = 'LEGEND III'
                        } else if (resp[i].level >= 42) {
                            roles = 'LEGEND II'
                        } else if (resp[i].level >= 44) {
                            roles = 'LEGEND I'
                        } else if (resp[i].level >= 46) {
                            roles = 'MYTHIC'
                        } else if (resp[i].level >= 50) {
                            roles = 'MYTHIC GLORY'
                        }
                        leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`
                    }
                    await ruka.reply(from, leaderboard, id)
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, eng.minimalDb(), id)
                }
            break

            // Downloader
            case prefix+ 'joox': // By Hafizh
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                const dataJoox = await axios.get(`https://api.vhtear.com/music?query=${q}&apikey=${config.vhtear}`)
                const cardJoox = new canvas.Spotify()
                    .setAuthor(dataJoox.data.result[0].penyanyi)
                    .setAlbum(dataJoox.data.result[0].album)
                    .setStartTimestamp(dataJoox.data.result[0].duration)
                    .setEndTimestamp(10)
                    .setImage(dataJoox.data.result[0].linkImg)
                    .setTitle(dataJoox.data.result[0].judul)
                cardJoox.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_joox.png`)
                        await ruka.sendFile(from, `${sender.id}_joox.png`, 'joox.png', eng.joox(dataJoox.data), id)
                        fs.unlinkSync(`${sender.id}_joox.png`)
                        await ruka.sendFileFromUrl(from, dataJoox.data.result[0].linkMp3, 'joox.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'igdl': // by: VideFrelan
            case prefix+ 'instadl':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('instagram.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.insta(url)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.post.length; i++) {
                            if (result.post[i].type === 'image') {
                                await ruka.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.jpg', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            } else if (result.post[i].type === 'video') {
                                await ruka.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.mp4', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            }
                        }
                        console.log('Success sending Instagram media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break 
            case prefix+ 'facebook':
            case prefix+ 'fb':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(pushname), id)
                if (!isUrl(url) && !url.includes('facebook.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.fb(url)
                    .then(async ({ result }) => {
                            await ruka.sendFileFromUrl(from, result.VideoUrl, 'videofb.mp4', '', id)
                            console.log(from, 'Success sending Facebook video!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'yts':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!args.length >=1 ) return await ruka.reply(from, 'Wrong Format 🚫 ', id);{
                const nama = body.slice(5)
                await yts(nama, function ( err, r ) {
                const videos = r.videos.slice( 0, 10 )
                let hasil = `𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐒𝐞𝐚𝐫𝐜𝐡 𝐨𝐟 -'${nama}'`
                hasil += `\n`;
                Object.keys(videos).forEach(function (i) {
                hasil += `\n✧ Title: ${videos[i].title}\n🗃 Channel : ${videos[i].author.name}\n 🕐 Duration: ${videos[i].timestamp}\n🔗 Link: https://www.youtube.com/watch?v=${videos[i].videoId}\n`;
                    });
                hasil += '\n*RUKA BOT YOUTUBE SEARCH*';
                ruka.sendLinkWithAutoPreview(from, hasil, id)
                    })
                }         
            break
            case prefix+ 'mp3':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length == 0) return ruka.reply(from, `Is it a YouTube video link ? bishh, I can't help you... I am blind`, id)
                await ruka.reply(from, `[ WAIT ]`, id)
                const mp3 = await yta(args[0])
                const { mtitle, filesize, mdl_link, mthumb } = mp3
                if (filesize > '40' * 1000) return ruka.reply(from, `File size is too big onii chan :(\n${mdl_link}`, id)
                await ruka.sendImage(from, mthumb, 'thumb.jpg',`✧ Title: ${mtitle}\n㎅ Filesize: ${filesize}`, id)
                await ruka.sendFileFromUrl(from, mdl_link, `${mtitle}.mp3`, id)
            break
            case prefix+ 'mp4':
                        if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                        if (args.length == 0) return ruka.reply(from, `Is it a YouTube video link ? Sorry sis, I can't help you... I am blind`, id)
                        await ruka.reply(from, `[ WAIT ]`, id)
                        const mp4 = await ytv(args[0])
                        const { vtitle, vfilesize, vdl_link, vthumb } = mp4
                        if (vfilesize > '40' * 1000) return ruka.reply(from, `File size is too big onii chan :(\n${vdl_link}`, id)
                        await ruka.sendImage(from, vthumb, 'thumb.jpg',`✧ Title: ${vtitle}\n㎅ Filesize: ${vfilesize}`, id)
                        await ruka.sendFileFromUrl(from, vdl_link, `${vtitle}.mp4`, `${vtitle}`, id)
             break
            case prefix+ 'tiktokpic':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    console.log(`Get profile pic for ${q}`)
                    const tkt = await axios.get(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${q}`)
                    if (tkt.data.error) return ruka.reply(from, tkt.data.error, id)
                    await ruka.sendFileFromUrl(from, tkt.data.result, 'tiktokpic.jpg', 'Ini :D', id)
                    console.log('Success sending TikTok profile pic!')
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'tiktoknowm': // by: VideFrelan
            case prefix+ 'tktnowm':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.tikNoWm(url)
                    .then(async ({ result }) => {
                        await ruka.sendFileFromUrl(from, result.thumb, 'TiktokNoWM.jpg', `➸ *Username*: ${result.username}\n➸ *Caption*: ${result.caption}\n➸ *Uploaded on*: ${result.uploaded_on}\n\nSedang dikirim, sabar ya...`, id)
                        const responses = await fetch(result.link)
                        const buffer = await responses.buffer()
                        fs.writeFileSync(`./temp/${sender.id}_TikTokNoWm.mp4`, buffer)
                        await ruka.sendFile(from, `./temp/${sender.id}_TikTokNoWm.mp4`, `${sender.id}_TikTokNoWm.mp4`, '', id)
                        console.log('Success sending TikTok video with no WM!')
                        fs.unlinkSync(`./temp/${sender.id}_TikTokNoWm.mp4`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'tiktok':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.tik(url)
                    .then(async ({ result })=> {
                        await ruka.sendFileFromUrl(from, result.video, 'TikTok.mp4', '', id)
                        console.log('Success sending TikTok video!')
                    })
                    .catch(async (err) => {
                        console.log(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'twitter':
            case prefix+ 'twt':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('twitter.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.tweet(url)
                    .then(async (data) => {
                        if (data.type === 'video') {
                            const content = data.variants.filter((x) => x.content_type !== 'application/x-mpegURL').sort((a, b) => b.bitrate - a.bitrate)
                            const result = await misc.shortener(content[0].url)
                            console.log('Shortlink:', result)
                            await ruka.sendFileFromUrl(from, content[0].url, 'video.mp4', `Link HD: ${result}`, id)
                                .then(() => console.log('Success sending Twitter media!'))
                                .catch(async (err) => {
                                    console.error(err)
                                    await ruka.reply(from, 'Error!', id)
                                })
                        } else if (data.type === 'photo') {
                            for (let i = 0; i < data.variants.length; i++) {
                                await ruka.sendFileFromUrl(from, data.variants[i], data.variants[i].split('/media/')[1], '', id)
                                .then(() => console.log('Success sending Twitter media!'))
                                .catch(async (err) => {
                                    console.error(err)
                                    await ruka.reply(from, 'Error!', id)
                                })
                            }
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'moddroid': // Chikaa Chantekkzz
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.modroid(q)
                    .then(async ({ status, result }) => {
                        if (status !== 200) {
                            await ruka.reply(from, 'Not found.', id)
                        } else {
                            await ruka.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[0].title}\n\n➸ *Size*: ${result[0].size}\n➸ *Publisher*: ${result[0].publisher}\n➸ *Version*: ${result[0].latest_version}\n➸ *Genre*: ${result[0].genre}\n\n*Download link*\n${result[0].download}`, id)
                            console.log('Success sending APK mod!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'happymod': // chikaa chantexxzz
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                downloader.happymod(q)
                    .then(async ({ status, result }) => {
                        if (status !== 200) {
                            await ruka.reply(from, 'Not found.', id)
                        } else {
                            await ruka.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[0].title}\n\n➸ *Size*: ${result[0].size}\n➸ *Root*: ${result[0].root}\n➸ *Version*: ${result[0].version}\n➸ *Price*: ${result[0].price}\n\n*Download link*\n${result[0].download}`, id)
                            console.log('Success sending APK mod!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'linedl': // chikaa chantexxzz
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) return await ruka.reply(from, eng.pcOnly(), id)
                if (!isUrl(url) && !url.includes('store.line.me')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                downloader.line(url)
                    .then(async (res) => {
                        await ruka.sendFileFromUrl(from, res.thumb, 'line.png', `*「 LINE STICKER DOWNLOADER 」*\n\n➸ *Title*: ${res.title}\n➸ *Sticker type*: ${res.type}\n\n_Media sedang dikirim, mohon tunggu sebentar..._`, id)
                        for (let i = 0; i < res.sticker.length; i++) {
                            await ruka.sendStickerfromUrl(from, `${res.sticker[i]}`, null, { author: authorWm, pack: packWm })
                            console.log('Success sending Line sticker!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break

            // Misc
            case prefix+ 'ocr': // by: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage || isQuotedSticker) {
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage || isQuotedSticker ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    fs.writeFileSync(`./temp/${sender.id}.jpg`, mediaData)
                    ocrtess.recognize(`./temp/${sender.id}.jpg`, ocrconf)
                        .then(async (text) => {
                            await ruka.reply(from, `*...:* *OCR RESULT* *:...*\n\n${text}`, id)
                            fs.unlinkSync(`./temp/${sender.id}.jpg`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'google': // chika-chantekkzz
            case prefix+ 'googlesearch':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.reply(from, eng.wait(), id)
                google({ 'query': q, 'no-display': true })
                    .then(async (results) => {
                        let txt = `*── 「 GOOGLE SEARCH 」 ──*\n\n*by: fbi*\n\n_*Search results for: ${q}*_`
                        for (let i = 0; i < results.length; i++) {
                            txt += `\n\n➸ *Title*: ${results[i].title}\n➸ *Desc*: ${results[i].snippet}\n➸ *Link*: ${results[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, txt, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'say':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.sendText(from, q)
            break
            case prefix+ 'monika':
		let a = body.slice(8)
		const y = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=m&background=class&body=1&face=b&text=${encodeURI(a)}`)
		return ruka.sendFileFromUrl(from, y.data['message'], 'monika.png', '', id)
        break
	case prefix+ 'yuri':
		let a2 = body.slice(6)
		const y2 = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=y&background=class&body=1&face=b&text=${encodeURI(a2)}`)
		return ruka.sendFileFromUrl(from, y2.data['message'], 'yuri.png', '', id)
        break
	case prefix+'natsuki':
		let a3 = body.slice(9)
		const y3 = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=n&background=class&body=1&face=b&text=${encodeURI(a3)}`)
		return ruka.sendFileFromUrl(from, y3.data['message'], 'natsuki.png', '', id)
        break
	case prefix+ 'sayori':
		let a4 = body.slice(8)
		const y4 = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=s&background=class&body=1&face=b&text=${encodeURI(a4)}`)
		return ruka.sendFileFromUrl(from, y4.data['message'], 'sayori.png', '', id)
        break
    case prefix+ 'choose':
                const choices = body.split(',')
                if (choices.length < 2) return ruka.reply(from, 'Not enough choices to pick from. Seperate your choices with a commas', id)
                return ruka.reply(from, `So, I choose.... *${choices[Math.floor(Math.random()*choices.length)]}*`, id)
            break
            case prefix+ 'afk': // by Slavyan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (isAfkOn) return await ruka.reply(from, eng.afkOnAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const reason = q ? q : 'No Reason.'
                afk.addAfkUser(sender.id, time, reason, _afk)
                await ruka.reply(from, eng.afkOn(pushname, reason), id)
            break
            case prefix+'sing':
            if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
            const songs = ['./media/songs/kokorashi.mp3', './media/songs/zexaa.mp3', './media/songs/kyayahi.mp3', './media/songs/suntara.mp3', './media/songs/terijukinajar.mp3', './media/songs/batbangai.mp3', './media/songs/rabta.mp3', './media/songs/churalo.mp3', './media/songs/terahoone.mp3', './media/songs/terikasturi.mp3', './media/songs/chahu.mp3', './media/songs/zannat.mp3', './media/songs/tiger.mp3', './media/songs/preya.mp3', './media/songs/jotumnaho.mp3', './media/songs/kabir.mp3', './media/songs/tumsehi.mp3', './media/songs/or.mp3', './media/songs/pelo.mp3', './media/songs/tujaane.mp3', './media/songs/hoisonna.mp3', './media/songs/dildara.mp3', './media/songs/pehela.mp3', './media/songs/pehelanasha.mp3', './media/songs/changes.mp3', './media/songs/yn.mp3' ,  './media/songs/jeena.mp3', './media/songs/kuchkuch.mp3', './media/songs/wwu.mp3', './media/songs/ly.mp3', './media/songs/useem.mp3', './media/songs/ed.mp3', './media/songs/holdon.mp3', './media/songs/sia.mp3','./media/songs/maintera.mp3', './media/songs/sad.mp3', './media/songs/everneed.mp3', './media/songs/waybackhome.mp3', './media/songs/intoyourarms.mp3', './media/songs/footxmood.mp3', './media/songs/playdate.mp3', './media/songs/goodbye.mp3', './media/songs/onetime.mp3', './media/songs/mood.mp3', './media/songs/harehare.mp3', './media/songs/lauv.mp3','./media/songs/bts.mp3', './media/songs/tum-mile.mp3', './media/songs/umbrella.mp3', './media/songs/loveisgone.mp3', './media/songs/past-lives.mp3','./media/songs/romeo.mp3', './media/songs/perfect.mp3', './media/songs/sugar-crush.mp3', './media/songs/bluebird.mp3', './media/songs/lovesickgirls.mp3', './media/songs/rentagirlfriend.mp3', './media/songs/kiminotodi.mp3']
            const randomSong = songs[Math.floor(Math.random() * songs.length)]
            await ruka.sendPtt(from,randomSong, id)
           break
    case prefix+ 'aiquote' :
         const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
         await ruka.sendFileFromUrl(from, aiquote.data, 'quote.jpg', 'Powered By Ruka With ❤️' , id )
         break
     case prefix+ 'quotemaker':
        arg = body.trim().split('|')
        if (arg.length >= 3) {
        ruka.reply(from, 'Processing...', message.id) 
        const quotes = arg[1]
        const author = arg[2]
        const theme = arg[3]
        try {
        const resolt = await func.quotemaker(quotes, author, theme)
        ruka.sendFile(from, resolt, 'quotesmaker.jpg','...')
        } catch {
        ruka.reply(from, 'It looks like that the image failed to process', message.id)
        }
        } else {
        ruka.reply(from, 'Usage: \n%quotemaker | quote | author', message.id)
        }
        break
     case prefix+ 'covid':
         arg = body.trim().split(' ')
         console.log(...arg[1])
         var slicedArgs = Array.prototype.slice.call(arg, 1);
         console.log(slicedArgs)
         const country = await slicedArgs.join(' ')
         console.log(country)
         const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
         const { cases, todayCases, deaths, todayDeaths, active } = response2.data
         await ruka.sendText(from, '🌎️Covid Info -' + country + ' 🌍️\n\n✨️Total Cases: ' + `${cases}` + '\n📆️Today\'s Cases: ' + `${todayCases}` + '\n☣️Total Deaths: ' + `${deaths}` + '\n☢️Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️Active Cases: ' + `${active}` + '.')
         break
         case prefix+ 'lyrics':
            if (args.length == 0) return ruka.reply(from, 'Wrong Format', message.id)
            const lagu = body.slice(7)
            console.log(lagu)
            const lirik = await liriklagu(lagu)
            ruka.sendText(from, lirik, 'here u go dear')
            break 
        case prefix+ 'shortlink':
            if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
            if (!isUrl(url)) return await ruka.reply(from, eng.wrongFormat(), id)
            const urlShort = await misc.shortener(url)
            await ruka.reply(from, eng.wait(), id)
            await ruka.reply(from, urlShort, id)
            console.log('Success!')
        break
            case prefix+ 'wikipedia': // By: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.wikien(q)
                    .then(async ( { result }) => {
                        if (result.status !== '200') {
                            await ruka.reply(from, 'Not Found!', id)
                        } else {
                            await ruka.reply(from, `➸ *PageId*: ${result.pageid}\n➸ *Title*: ${result.title}\n➸ *Result*: ${result.desc}`, id)
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'genshininfo': // chika chantexxzz
            case prefix+ 'genshin':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    console.log('Searching for character...')
                    const character = await genshin.characters(q)
                    await ruka.sendFileFromUrl(from, character.image, `${character.name}.jpg`, `*「 GENSHIN IMPACT 」*\n\n*${character.name}*\n${character.description}\n\n"_${character.quote}_" - ${character.name}\n\n➸ *Name*: ${character.name}\n➸ *Seiyuu*: ${character.cv}\n➸ *Region*: ${character.city}\n➸ *Rating*: ${character.rating}\n➸ *Vision*: ${character.element}\n➸ *Weapon*: ${character.weapon}\n\n${character.url}`)
                    console.log('Success sending Genshin Impact character!')
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error or character not found!', id)
                }
            break
            case prefix+ 'jadwaltv': // Chika chantexxzz
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (ar.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.reply(from, eng.wait(), id)
                try {
                    const jtv = await axios.get(`http://api.hurtzcrafter.xyz/jadwaltv?channel=${ar[0]}`)
                    if (jtv.data.status === 'true') {
                        let jtvx = '*── 「 TV 」 ──*\n'
                        for (let i = 0; i < jtv.data.result.length; i++) {
                            jtvx += `\n${jtv.data.result[i].jam}: ${jtv.data.result[i].tayang}`
                        }
                        await ruka.sendText(from, jtvx)
                    } else {
                        await ruka.sendText(from, 'Channel not found!')
                    }
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'instastory': // By: VideFrelan
            case prefix+ 'igstory':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.its(q)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.story.itemlist.length; i++) {
                            const { urlDownload } = result.story.itemlist[i]
                            await ruka.sendFileFromUrl(from, urlDownload, '', 'By: VideFrelan', id)
                            console.log('Success sending IG Story!')
                        }
                    })
            break
            case prefix+ 'kbbi':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.kbbi(q)
                    .then(async ({ result }) => {
                        await ruka.reply(from, result.hasil, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'linesticker':
            case prefix+ 'linestiker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                if (!isOwner) limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.linesticker()
                    .then(async ({ result }) => {
                        let lines = '*── 「 LINE STICKERS 」 ──*'
                        for (let i = 0; i < result.hasil.length; i++) {
                            lines +=  `\n\n➸ *Title*: ${result.hasil[i].title}\n➸ *URL*: ${result.hasil[i].uri}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, lines, id)
                        console.log('Success sending sticker Line!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'jadwalsholat':
            case prefix+ 'jadwalsolat':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.reply(from, eng.wait(), id)
                misc.jadwalSholat(q)
                    .then((data) => {
                        data.map(async ({isya, subuh, dzuhur, ashar, maghrib, terbit}) => {
                            const x = subuh.split(':')
                            const y = terbit.split(':')
                            const xy = x[0] - y[0]
                            const yx = x[1] - y[1]
                            const perbandingan = `${xy < 0 ? Math.abs(xy) : xy} jam ${yx < 0 ? Math.abs(yx) : yx} menit`
                            const msg = `Jadwal sholat untuk ${q} dan sekitarnya ( *${dateNow}* )\n\nDzuhur: ${dzuhur}\nAshar: ${ashar}\nMaghrib: ${maghrib}\nIsya: ${isya}\nSubuh: ${subuh}\n\nDiperkirakan matahari akan terbit pada pukul ${terbit} dengan jeda dari subuh sekitar ${perbandingan}`
                            await ruka.reply(from, msg, id)
                            console.log('Success sending jadwal sholat!')
                        })
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'gempa':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.reply(from, eng.wait(), id)
                misc.bmkg()
                    .then(async ({ kedalaman, koordinat, lokasi, magnitude, map, potensi, waktu }) => {
                        const teksInfo = `${lokasi}\n\nKoordinat: ${koordinat}\nKedalaman: ${kedalaman}\nMagnitudo: ${magnitude} SR\nPotensi: ${potensi}\n\n${waktu}`
                        await ruka.sendFileFromUrl(from, map, 'gempa.jpg', teksInfo, id)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'igstalk':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.igStalk(q)
                    .then(async ({ graphql }) => {
                        if (graphql === undefined) {
                            await ruka.reply(from, 'Not found.', id)
                        } else {
                            const { biography, edge_followed_by, edge_follow, full_name, is_private, is_verified, profile_pic_url_hd, username, edge_owner_to_timeline_media } = graphql.user
                            const text = `*── 「 IG STALK 」 ──*\n\n➸ *Username*: ${username}\n➸ *Bio*: ${biography}\n➸ *Full name*: ${full_name}\n➸ *Followers*: ${edge_followed_by.count}\n➸ *Followings*: ${edge_follow.count}\n➸ *Private*: ${is_private ? 'Yes' : 'No'}\n➸ *Verified*: ${is_verified ? 'Yes' : 'No'}\n➸ *Total posts*: ${edge_owner_to_timeline_media.count}`
                            await ruka.sendFileFromUrl(from, profile_pic_url_hd, 'insta.jpg', text, id)
                            console.log('Success sending IG stalk!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'gsmarena':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    misc.gsmarena(q)
                        .then(async ({ result }) => {
                            await ruka.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.gsm(result), id)
                            console.log('Success sending phone info!')
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'receipt':
            case prefix+ 'resep':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    misc.resep(q)
                        .then(async ({ result }) => {
                            await ruka.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.receipt(result), id)
                            console.log('Success sending food receipt!')
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'findsticker':
            case prefix+ 'findstiker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    misc.sticker(q)
                        .then(async ({ result }) => {
                            if (result.response !== 200) return await ruka.reply(from, 'Not found!', id)
                            for (let i = 0; i < result.data.length; i++) {
                                await ruka.sendStickerfromUrl(from, result.data[i], null, { author: authorWm, pack: packWm })
                            }
                            console.log('Success sending sticker!')
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, `Error!\n\n${err}`, id)
                }
            break
            case prefix+ 'movie':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.movie(q)
                    .then(async ({ result }) => {
                        let movies = `Result for: *${result.judul}*`
                        for (let i = 0; i < result.data.length; i++) {
                            movies +=  `\n\n➸ *Quality:* : ${result.data[i].resolusi}\n➸ *URL*: ${result.data[i].urlDownload}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        movies += '\n\nBy: fbi'
                        await ruka.reply(from, movies, id)
                        console.log('Success sending movie result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'cekongkir': // By: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                const kurir = q.substring(0, q.indexOf('|') - 1)
                const askot = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const tukot = q.substring(q.lastIndexOf('|') + 2)
                misc.ongkir(kurir, askot, tukot)
                    .then(async ({ result }) => {
                        let onkir = `*── 「 ${result.title} 」 ──*`
                        for (let i = 0; i < result.data.length; i++) {
                            onkir +=  `\n\n➸ *Layanan*: ${result.data[i].layanan}\n➸ *Estimasi*: ${result.data[i].etd}\n➸ *Tarif*: ${result.data[i].tarif}\n➸ *Info*: ${result.informasi}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        onkir += '\n\nBy: fbi'
                        await ruka.reply(from, onkir, id)
                        console.log('Success sending ongkir info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'distance':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kotaAsal = q.substring(0, q.indexOf('|') - 1)
                const kotaTujuan = q.substring(q.lastIndexOf('|') + 2)
                misc.distance(kotaAsal, kotaTujuan)
                    .then(async ({ result }) => {
                        if (result.response !== 200) {
                            await ruka.reply(from, 'Error!', id)
                        } else {
                            await ruka.reply(from, result.data, id)
                            console.log('Success sending distance info!')
                        }
                    })
            break
            case prefix+ 'tts':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const speech = q.substring(q.indexOf('|') + 2)
                const ptt = tts(ar[0])
                try {
                    ptt.save(`${speech}.mp3`, speech, async () => {
                        await ruka.sendPtt(from, `${speech}.mp3`, id)
                        fs.unlinkSync(`${speech}.mp3`)
                    })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'tomp3': // by: Piyobot
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isVideo || isQuotedVideo) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await ruka.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'toptt':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const name = new Date() * 1
                    fs.writeFileSync(`./temp/audio/${name}.mp3`, mediaData)
                    await ruka.sendPtt(from, `./temp/audio/${name}.mp3`, id)
                    fs.unlinkSync(`./temp/audio/${name}.mp3`)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'playstore':
            case prefix+ 'ps':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    misc.playstore(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { app_id, icon, title, developer, description, price, free } = result[i]
                                await ruka.sendFileFromUrl(from, icon, `${title}.jpg`, eng.playstore(app_id, title, developer, description, price, free))
                            }
                            console.log('Success sending PlayStore result!')
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'math':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (typeof mathjs.evaluate(q) !== 'number') {
                    await ruka.reply(from, eng.notNum(q), id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, `*── 「 MATH 」 ──*\n\n${q} = ${mathjs.evaluate(q)}`, id)
                }
            break
            case prefix+ 'shopee':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                const namaBarang = q.substring(0, q.indexOf('|') - 1)
                const jumlahBarang = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    misc.shopee(namaBarang, jumlahBarang)
                        .then(async ({ result }) => {
                            for (let i = 0; i < result.items.length; i++) {
                                const { nama, harga, terjual, shop_location, description, link_product, image_cover } = result.items[i]
                                await ruka.sendFileFromUrl(from, image_cover, `${nama}.jpg`, eng.shopee(nama, harga, terjual, shop_location, description, link_product))
                            }
                            console.log('Success sending Shopee data!')
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'mutual':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) return await ruka.reply(from, 'Command ini tidak bisa digunakan di dalam grup!', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, 'Looking for a partner...', id)
                await ruka.sendContact(from, register.getRegisteredRandomId(_registered))
                await ruka.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case prefix+ 'next':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) return await ruka.reply(from, 'Command ini tidak bisa digunakan di dalam grup!', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, 'Looking for a partner...', id)
                await ruka.sendContact(from, register.getRegisteredRandomId(_registered))
                await ruka.sendText(from, `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case prefix+ 'listsurah':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.reply(from, eng.wait(), id)
                misc.listSurah()
                    .then(async ({ result }) => {
                        let list = '*── 「 AL-QUR\'AN 」 ──*\n\n'
                        for (let i = 0; i < result.list.length; i++) {
                            list += `${result.list[i]}\n\n`
                        }
                        await ruka.reply(from, list, id)
                        console.log('Success sending Al-Qur\'an list!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'surah':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.reply(from, eng.wait(), id)
                misc.getSurah(args[0])
                    .then(async ({ result }) => {
                        await ruka.reply(from, `${result.surah}\n\n${result.quran}`, id)
                        console.log('Success sending surah!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'hadis': // irham01
            case prefix+ 'hadees':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (ar.length !== 1) return await ruka.reply(from, eng.hadis(), id)
                await ruka.reply(from, eng.wait(), id)
                try {
                    if (ar[0] === 'darimi') {
                        const hdar = await axios.get(`https://api.hadith.sutanlab.id/books/darimi/${args[1]}`)
                        await ruka.sendText(from, `${hdar.data.data.contents.arab}\n${hdar.data.data.contents.id}\n\n*H.R. Darimi*`, id)
                    } else if (ar[0] === 'ahmad') {
                        const hmad = await axios.get(`https://api.hadith.sutanlab.id/books/ahmad/${args[1]}`)
                        await ruka.sendText(from, `${hmad.data.data.contents.arab}\n${hmad.data.data.contents.id}\n\n*H.R. Ahmad*`, id)
                    } else if (ar[0] === 'bukhari') {
                        const hbukh = await axios.get(`https://api.hadith.sutanlab.id/books/bukhari/${args[1]}`)
                        await ruka.sendText(from, `${hbukh.data.data.contents.arab}\n${hbukh.data.data.contents.id}\n\n*H.R. Bukhori*`, id)
                    } else if (ar[0] === 'muslim') {
                        const hmus = await axios.get(`https://api.hadith.sutanlab.id/books/muslim/${args[1]}`)
                        await ruka.sendText(from, `${hmus.data.data.contents.arab}\n${hmus.data.data.contents.id}\n\n*H.R. Muslim*`, id)
                    } else if (ar[0] === 'malik') {
                        const hmal = await axios.get(`https://api.hadith.sutanlab.id/books/malik/${args[1]}`)
                        await ruka.sendText(from, `${hmal.data.data.contents.arab}\n${hmal.data.data.contents.id}\n\n*H.R. Malik*`, id)
                    } else if (ar[0] === 'nasai') {
                        const hnas = await axios.get(`https://api.hadith.sutanlab.id/books/nasai/${args[1]}`)
                        await ruka.sendText(from, `${hnas.data.data.contents.arab}\n${hnas.data.data.contents.id}\n\n*H.R. Nasa'i*`, id)
                    } else if (ar[0] === 'tirmidzi') {
                        const htir = await axios.get(`https://api.hadith.sutanlab.id/books/tirmidzi/${args[1]}`)
                        await ruka.sendText(from, `${htir.data.data.contents.arab}\n${htir.data.data.contents.id}\n\n*H.R. Tirmidzi*`, id)
                    } else if (ar[0] === 'ibnumajah') {
                        const hibn = await axios.get(`https://api.hadith.sutanlab.id/books/ibnu-majah/${args[1]}`)
                        await ruka.sendText(from, `${hibn.data.data.contents.arab}\n${hibn.data.data.contents.id}\n\n*H.R. Ibnu Majah*`, id)
                    } else if (ar[0] === 'abudaud') {
                        const habud = await axios.get(`https://api.hadith.sutanlab.id/books/abu-daud/${args[1]}`)
                        await ruka.sendText(from, `${habud.data.data.contents.arab}\n${habud.data.data.contents.id}\n\n*H.R. Abu Daud*`, id)
                    } else {
                        await ruka.sendText(from, eng.hadis(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'asmaulhusna': // irham01
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                const asmaulHusna = await axios.get (`https://api-melodicxt-2.herokuapp.com/api/asmaallHusna?number=${args[0]}&apiKey=${config.melodic}`)
                const assna = asmaulHusna.data.result
                ruka.sendFileFromUrl(from, 'https://i2.wp.com/seruni.id/wp-content/uploads/2016/09/Allah.png?resize=696%2C696&ssl=1', 'gambar.jpg', eng.asmaulHusna(assna), id)
            break
            case prefix+ 'randomquran': // irham01
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                const ranquran = await axios.get('https://api.zeks.xyz/api/randomquran')
                const auquran = ranquran.data.result.audio
                await ruka.reply(from, eng.randomQuran(ranquran), id)
                await ruka.sendFileFromUrl(from, auquran, 'rquran.mp3', '', id)
            break
            case prefix+ 'motivasi':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                misc.motivasi()
                    .then(async (body) => {
                        const motivasiSplit = body.split('\n')
                        const randomMotivasi = motivasiSplit[Math.floor(Math.random() * motivasiSplit.length)]
                        await ruka.sendText(from, randomMotivasi)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'play':  
            if (!q) return await ruka.reply(from, 'You haven`t provided the song name', id)
            // let yt = q.includes("https://youtu.be/")
          //  if ( yt == "false" ) return await ruka.reply(from, 'You haven't provided a youtube link', id)
            await ruka.reply(from, 'WAIT' ,id)
            // const vserplay2 = body.slice(7)
            const { data } = await axios.get(`https://devilictears.herokuapp.com/api/ytplay?query=${q}&apikey=VqQMjBUw`)
            if (!data.result.title) {
                await ruka.reply(from, "Didnt find any result", id)
            } else if (Number(data.result.size.split('MB')[0]) >= 30.00) {
                await ruka.reply(from, 'music must be under 30 MB!', id)
            } else {
                await ruka.sendFileFromUrl(from, data.result.thumb, 'thumb.jpg', `Now playing...\n\n📝 Title: ${data.result.title}\n\n───────────⚪───────────\n♪♫•♪ ♪♫•♪ ♪♫•♪\n───────────⚪───────────\n💽 *Size: ${data.result.size}\n👍 Like: ${data.result.likes}\n💻 Views: ${data.result.views}\n🔎 Channel: ${data.result.channel}\n📆 Uploaded_At: ${data.result.uploadDate}\n📻 Type: Mp3\n🔗 Link Download: ${data.result.result}\n📑 Description: ${data.result.desc}\n_Song is coming... Wait_`, id)
                await ruka.sendFileFromUrl(from, data.result.result, 'play.mp3' , '', id)
                // await limitAdd(serial)
            }
            break
            case prefix+ 'playv':         
            if (!url) return await ruka.reply(from, 'Wrong Format', id)
            await ruka.reply(from, 'WAIT' ,id)
           // const vserplay2 = body.slice(7)
            const getvid = await axios.get(`https://yoothoob.vercel.app/fromLink?link=${url}`)
            if (getvid.data.status === false) {
                await ruka.reply(from, getvid.data.message, id)
            } else if (Number(getvid.data.result.size.split('MB')[0]) >= 50.00) {
                await ruka.reply(from, 'Video must be under 10 MB!', id)
            } else {
                await ruka.sendFileFromUrl(from, getvid.data.result.thumb, 'thumb.jpg', `Now playing...\n\n📝 Title: ${getvid.data.result.title}\n\n───────────⚪───────────\n(>‿◠)✌\n───────────⚪───────────\n💾 Size: ${getvid.data.result.size}\n📺 Type: Mp4\n🔗 Link Download: ${getvid.data.result.link}\n_video is coming... Wait_`, id)
                await ruka.sendFileFromUrl(from, getvid.data.result.link, 'play.mp4' , '', id)
    
            }
            break
            case prefix+ 'whois':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.whois(args[0])
                    .then(async ({ result }) => {
                        await ruka.reply(from, `*── 「 WHOIS 」 ──*\n\n➸ *IP address*: ${result.ip_address}\n➸ *City*: ${result.city}\n➸ *Region*: ${result.region}\n➸ *Country*: ${result.country}\n➸ *ZIP code*: ${result.postal_code}\n➸ *Latitude and longitude*: ${result.latitude_longitude}\n➸ *Time zone*: ${result.time_zone}\n➸ *Call code*: ${result.calling_code}\n➸ *Currency*: ${result.currency}\n➸ *Language code*: ${result.languages}\n➸ *ASN*: ${result.asn}\n➸ *Organization*: ${result.org}`, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'email': // By: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                const emailTarget = q.substring(0, q.indexOf('|') - 1)
                const subjectEmail = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const messageEmail = q.substring(q.lastIndexOf('|') + 2)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.email(emailTarget, subjectEmail, messageEmail)
                    .then(async ({ result }) => {
                        if (result.status === '204') {
                            await ruka.reply(from, 'Server busy!', id)
                        } else {
                            await ruka.reply(from, `*Success sending email*!\n➸ *Target*: ${emailTarget}\n➸ *Subject*: ${result.subjek}\n➸ *Message*: ${result.pesan}`, id)
                            console.log('Success sending email!')
                        }
                    })
            break
            case prefix+ 'addsticker': // by @hardianto02_
            case prefix+ 'addstiker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id) 
                if (isQuotedSticker) {
                    if (_stick.includes(q)) {
                        await ruka.reply(from, eng.stickerAddAlready(q), id)
                    } else { 
                        _stick.push(q)
                        fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        fs.writeFileSync(`./temp/sticker/${q}.webp`, mediaData)
                        await ruka.reply(from, eng.stickerAdd(), id)
                    }
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'delsticker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (_stick.includes(q)) {
                    _stick.splice(q, 1)
                    fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                    fs.unlinkSync(`./temp/sticker/${q}.webp`)
                    await ruka.reply(from, eng.stickerDel(), id)
                } else {
                    await ruka.reply(from, eng.stickerNotFound())
                }
            break
            case prefix+ 'stickerlist':
            case prefix+ 'liststicker':
            case prefix+ 'stikerlist':
            case prefix+ 'liststiker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                let stickerList = `*── 「 STICKER DATABASE 」 ──*\nTotal: ${_stick.length}\n\n`
                for (let i of _stick) {
                    stickerList += `➸ ${i.replace(_stick)}\n`
                }
                await ruka.sendText(from, stickerList)
            break
            case prefix+ 'toxic':
                if (!isRegistered) return await ruka.reply(from , eng.notRegistered(), id)
                await ruka.reply(from, toxic(), id)
            break
            case prefix+ 'alkitab':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.reply(from, eng.wait(), id)
                misc.alkitab(q)
                    .then(async ({ result }) => {
                        let alkitab = '*── 「 AL-KITAB 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            alkitab +=  `\n\n➸ *Ayat*: ${result[i].ayat}\n➸ *Isi*: ${result[i].isi}\n➸ *Link*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, alkitab, id)
                        console.log('Success sending Al-Kitab!')
                    })
            break
            case prefix+ 'reminder': // by Slavyan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const timeRemind = q.substring(0, q.indexOf('|') - 1)
                const messRemind = q.substring(q.lastIndexOf('|') + 2)
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender.id, messRemind, timeRemind, _reminder)
                await ruka.sendTextWithMentions(from, eng.reminderOn(messRemind, parsedTime, sender))
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender.id, _reminder)) {
                        await ruka.sendTextWithMentions(from, eng.reminderAlert(reminder.getReminderMsg(sender.id, _reminder), sender))
                        _reminder.splice(reminder.getReminderPosition(sender.id, _reminder), 1)
                        fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
            break
            case prefix+ 'imagetourl':
            case prefix+ 'imgtourl':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await ruka.reply(from, linkImg, id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'infohoax':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.infoHoax()
                    .then(async ({ result }) => {
                        let txt = '*── 「 HOAX 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            const { tag, title, link } = result[i]
                            txt += `\n\n➸ *Status*: ${tag}\n➸ *Deskripsi*: ${title}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.sendFileFromUrl(from, result[0].image, 'hoax.jpg', txt, id)
                        console.log('Success sending info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'trending':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.trendingTwt()
                    .then(async ({ result }) => {
                        let txt = '*── 「 TWITTER TRENDING 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            const { hastag, rank, tweet, link } = result[i]
                            txt += `\n\n${rank}. *${hastag}*\n➸ *Tweets*: ${tweet}\n➸ *Link*: ${link}`
                        }
                        await ruka.reply(from, txt, id)
                        console.log('Success sending trending!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'jobseek':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.jobSeek()
                    .then(async ({ result }) => {
                        let txt = '*── 「 JOOB SEEK 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            const { perusahaan, link, profesi, gaji, lokasi, pengalaman, edukasi, desc, syarat } = result[i]
                            txt += `\n\n➸ *Perusahaan*: ${perusahaan}\n➸ *Lokasi*: ${lokasi}\n➸ *Profesi*: ${profesi}\n➸ *Gaji*: ${gaji}\n➸ *Pengalaman*: ${pengalaman}\n➸ *Deskripsi*: ${desc}\n➸ *Syarat*: ${syarat}\n➸ *Edukasi*: ${edukasi}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, txt, id)
                        console.log('Success sending jobseek!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'call':
            case prefix+ 'spamcall':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.call(q)
                    .then(async ({ result }) => {
                        await ruka.reply(from, result.logs, id)
                        console.log(`Success calling number: ${q}`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'spamsms':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 2) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isNaN(Number(args[0])) && isNaN(Number(args[1]))) return await ruka.reply(from, eng.wrongFormat(), id)
                if (Number(args[1]) > 10) return await ruka.reply(from, 'Maximum 10 SMS.', id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.spamsms(args[0], args[1])
                    .then(async ({ status, logs, msg }) => {
                        if (status !== 200) {
                            await ruka.reply(from, msg, id)
                        } else {
                            await ruka.reply(from, logs, id)
                            console.log('Success sending spam!')
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'translate':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg) {
                const textos = quotedMsg.body
                const languagets = args[0]
                translate(textos, {to: languagets}).then(ress => {ruka.reply(from, ress.text, id)})
                } else {
                const texto = q.substring(0, q.indexOf('|') - 1)
                const languaget = q.substring(q.lastIndexOf('|') + 2)
                translate(texto, {to: languaget}).then(res => {ruka.reply(from, res.text, id)})
                }
            break
            case prefix+ 'bass':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await ruka.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'nightcore':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter('asetrate=44100*1.25')
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await ruka.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break

            // Bot
            case prefix+ 'menu':
            case prefix+ 'help':
                const jumlahUser = _registered.length
                const levelMenu = level.getLevelingLevel(sender.id, _level)
                const xpMenu = level.getLevelingXp(sender.id, _level)
                const reqXpMenu = 5 * Math.pow(levelMenu, 2) + 50 * 1 + 100
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.sendFile(from , './media/menu.jpg', 'menu.jpg',eng.menu(jumlahUser, levelMenu, xpMenu, role, pushname, reqXpMenu, isPremium ? 'YES' : 'NO'))
                break
            case prefix+ 'rules':
            case prefix+ 'rule':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.sendText(from, eng.rules())
            break
            case prefix+ 'nsfw':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isNsfw) return await ruka.reply(from, eng.nsfwAlready(), id)
                    _nsfw.push(groupId)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_nsfw))
                    await ruka.reply(from, eng.nsfwOn(), id)
                } else if (ar[0] === 'disable') {
                    _nsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_nsfw))
                    await ruka.reply(from, eng.nsfwOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'status':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.sendText(from, `*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem / 1024 / 1024)} MB\n*CPU*: ${os.cpus()[0].model}`)
            break
            case prefix+ 'listblock':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                let block = eng.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace('@c.us', '')}\n`
                }
                await ruka.sendTextWithMentions(from, block)
            break
            case prefix+ 'ownerbot':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.sendContact(from, ownerNumber)
            break
            case prefix+ 'runtime': // BY HAFIZH
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                const formater = (seconds) => {
                    const pad = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
                }
                const uptime = process.uptime()
                await ruka.reply(from, `*── 「 RUKA BOT UPTIME 」 ──*\n\n❏${formater(uptime)}`, id)
            break
            case prefix+ 'speed':
            case prefix+ 'p':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} secs`)
            break
            case prefix+ 'delete':
            case prefix+ 'del':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!quotedMsg) return await ruka.reply(from, eng.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
            case prefix+ 'report':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.emptyMess(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const lastReport = daily.getLimit(sender.id, _daily)
                if (lastReport !== undefined && cd - (Date.now() - lastReport) > 0) {
                    const time = ms(cd - (Date.now() - lastReport))
                    await ruka.reply(from, eng.daily(time), id)
                } else {
                    if (isGroupMsg) {
                        await ruka.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q}`)
                        await ruka.reply(from, eng.received(pushname), id)
                    } else {
                        await ruka.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${q}`)
                        await ruka.reply(from, eng.received(pushname), id)
                    }
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+ 'join':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('chat.whatsapp.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                const checkInvite = await ruka.inviteInfo(url)
                if (isOwner) {
                    await ruka.joinGroupViaLink(url)
                    await ruka.reply(from, eng.ok(), id)
                    await ruka.sendText(checkInvite.id, `Hello!! I was invited by ${pushname}`)
                } else {
                    const getGroupData = await ruka.getAllGroups()
                    if (getGroupData.length >= groupLimit) {
                        await ruka.reply(from, `Invite refused. Max group is: ${groupLimit}`, id)
                    } else if (getGroupData.size <= memberLimit) {
                        await ruka.reply(from, `Invite refused. Minimum member is: ${memberLimit}`, id)
                    } else {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await ruka.joinGroupViaLink(url)
                        await ruka.reply(from, eng.ok(), id)
                        await ruka.sendText(checkInvite.id, `Hello!! I was invited by ${pushname}`)
                    }
                }
            break
            case prefix+ 'premiumcheck':
            case prefix+ 'cekpremium':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                await ruka.reply(from, `*── 「 PREMIUM EXPIRED 」 ──*\n\n➸ *ID*: ${sender.id}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`, id)
            break
            case prefix+ 'premiumlist':
            case prefix+ 'listpremium':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                let listPremi = '*── 「 PREMIUM USERS 」 ──*\n\n'
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push(await ruka.getContact(premium.getAllPremiumUser(_premium)[i]))
                    listPremi += `${i + 1}. wa.me/${premium.getAllPremiumUser(_premium)[i].replace('@c.us', '')}\n➸ *Name*: ${arrayPremi[i].pushname}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                }
                await ruka.reply(from, listPremi, id)
            break
            case prefix+ 'getpic':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (mentionedJidList.length !== 0) {
                    const userPic = await ruka.getProfilePicFromServer(mentionedJidList[0])
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var pek = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                    } else {
                        pek = userPic
                    }
                    await ruka.sendFileFromUrl(from, pek, 'pic.jpg', '', id)
                } else if (args.length !== 0) {
                    const userPic = await ruka.getProfilePicFromServer(args[0] + '@c.us')
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var peks = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                    } else {
                        peks = userPic
                    }
                    await ruka.sendFileFromUrl(from, peks, 'pic.jpg', '', id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'serial':
                if (!isRegistered) return await ruka.reply(from, eng.registered(), id)
                if (isGroupMsg) return await ruka.reply(from, eng.pcOnly(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                const serials = args[0]
                if (register.checkRegisteredUserFromSerial(serials, _registered)) {
                    const name = register.getRegisteredNameFromSerial(serials, _registered)
                    const age = register.getRegisteredAgeFromSerial(serials, _registered)
                    const time = register.getRegisteredTimeFromSerial(serials, _registered)
                    const id = register.getRegisteredIdFromSerial(serials, _registered)
                    await ruka.sendText(from, eng.registeredFound(name, age, time, serials, id))
                } else {
                    await ruka.sendText(from, eng.registeredNotFound(serials))
                }
            break
            case prefix+ 'limit':
                if (isPremium || isOwner) return await ruka.reply(from, '⤞ Limit left: ∞ (UNLIMITED)', id)
                await ruka.reply(from, `⤞ Limit left: ${limit.getLimit(sender.id, _limit, limitCount)} / 25\n\n*_The limit is reset at 00:00 WIB_*`, id)
            break

            // Weeb zone
            case prefix+ 'neko':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Get neko image...')
                await ruka.sendFileFromUrl(from, (await neko.sfw.neko()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'character': // by Anto
            case prefix+'chara':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                try {
                    const chara_key = await axios.get(`https://api.jikan.moe/v3/search/character?q=${q}`)
                    const { name, description, favourites, media, image } = chara_key.data.result
                    let text_1 = `*── 「 ${name.full} 」 ──*\n➸ *Name*: ${name.full}\n➸ *Japanese*: ${name.native}\n➸ *ID*: ${chara_key.data.result.id}\n➸ *Favourite*: ${favourites}\n\n`
                    for (let i = 0; i < media.nodes.length; i++) {
                        const { id, idMal, title, type } = media.nodes[i]
                        text_1 += `\n\n➸ *Title*: ${title.romaji}\n➸ *Type*: ${type}\n➸ *Japanese*: ${title.native}\n➸ *Chara ID*: ${idMal}\n➸ *ID*: ${id}\n\n`
                    }
                    text_1 += `➸ *Description*: ${description}`
                    await ruka.sendFileFromUrl(from, image.large, `${q}.jpg`, `${text_1}`, id)
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error or chara not foud!', id)
                }
            break
            case prefix+ 'images':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                console.log('Getting desired image...')
                    if (args.length == 0) return ruka.reply(from, `To search for images from pinterest\nType: ${prefix}images [search]\nExample: ${prefix}images Hyouka`, id)
                    const cariwall = body.slice(8)
                    const hasilwall = await fun.fdci(cariwall)
                    await ruka.sendFileFromUrl(from, hasilwall, '', 'ruka ✨️', id)
                    .catch(() => {
                        ruka.reply(from, 'Something went wrong Error!', id)
                    })
                    break
            case prefix+ 'wallpaper':
                case prefix+ 'wp':
                    if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                    await ruka.reply(from, eng.wait(), id)
                    console.log('Getting wallpaper image...')
                    if (args.length == 0) return ruka.reply(from, 'Wrong Format!', id)
                    const query = body.slice(6)
                    const walls = await wall(query)
                         await ruka.sendFileFromUrl(from, walls, 'walls.jpg', 'ruka ', id)
                   break
            case prefix+ 'sr':
                 if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                 await ruka.reply(from, eng.wait(), id)
                 arg = body.trim().split(' ')
                 const sr = arg[1]
                 try {
                 const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
                 const {
                        postLink,
                        title,
                        subreddit,
                        url,
                        nsfw,
                        spoiler
                    } = response1.data
    
                    const isNsfw = _nsfw.includes(from)
                    if (nsfw == true) {
                          if ((isGroupMsg) && (isNsfw)) {
                                    await ruka.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `${title}` + '\n\nPostlink:' + `${postLink}`)
                          } else if ((isGroupMsg) && (!isNsfw)) {
                                    await ruka.reply(from, `NSFW is not registered on *${name}*`, id)
                          }
                    } else { 
                          await ruka.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `${title}` + '\n\nPostlink:' + `${postLink}`)
                    }
                    } catch(err) {
                        console.log(err)
                        await ruka.reply(from, 'There is no such subreddit, bishh!', id) 
                    }
                    break
            case prefix+ 'kemono':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Get kemonomimi image...')
                await ruka.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'kusonime':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                weeaboo.anime(q)
                    .then(async ({ info, link_dl, sinopsis, thumb, title, error, status }) => {
                        if (status === false) {
                            return await ruka.reply(from, error, id)
                        } else {
                            let animek = `${title}\n\n${info}\n\nSinopsis: ${sinopsis}\n\nLink download:\n${link_dl}`
                            await ruka.sendFileFromUrl(from, thumb, 'animek.jpg', animek, null, null, true)
                                .then(() => console.log('Success sending anime info!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'komiku':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                weeaboo.manga(q)
                    .then(async ({ genre, info, link_dl, sinopsis, thumb }) => {
                        let mangak = `${info}${genre}\nSinopsis: ${sinopsis}\nLink download:\n${link_dl}`
                        await ruka.sendFileFromUrl(from, thumb, 'mangak.jpg', mangak, null, null, true)
                            .then(() => console.log('Success sending manga info!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'anime':
                const keyword = message.body.replace('$anime', '')
                try {
                const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}`)
                const parsed = await data.json()
                if (!parsed) {
                  await ruka.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime', id)
                  console.log("Sent!")
                  return null
                  }
                const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
                const content = `*Anime Found!*
    ✨️ *Title:* ${title}
    
    🎆️ *Episodes:* ${episodes}
    
    💌️ *Rating:* ${rated}
    
    ❤️ *Score:* ${score}
    
    💚️ *Synopsis:* ${synopsis}
    
    🌐️ *URL*: ${url}`
    
                const image = await bent("buffer")(image_url)
                const base64 = `data:image/jpg;base64,${image.toString("base64")}`
                ruka.sendImage(from, base64, title, content)
               } catch (err) {
                 console.error(err.message)
                 await ruka.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
               }
              break
            case prefix+ 'wait':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    weeaboo.wait(imageBase64)
                        .then(async (result) => {
                            if (result.docs && result.docs.length <= 0) {
                                return await ruka.reply(from, 'Anime not found! :(', id)
                            } else {
                                const { title, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
                                let teks = ''
                                if (similarity < 0.92) {
                                    teks = 'Low similarity. 🤔\n\n'
                                } else {
                                    teks += `*Title*: ${title}\n*Romaji*: ${title_romaji}\n*English*: ${title_english}\n*Episode*: ${episode}\n*Similarity*: ${(similarity * 100).toFixed(1)}%`
                                    const video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
                                    await ruka.sendFileFromUrl(from, video, `${title_romaji}.mp4`, teks, id)
                                        .then(() => console.log('Success sending anime source!'))
                                }
                            }
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'source':
            case prefix+ 'sauce':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    try {
                        const imageLink = await uploadImages(mediaData, `sauce.${sender.id}`)
                        console.log('Searching for source...')
                        const results = await saus(imageLink)
                        for (let i = 0; i < results.length; i++) {
                            let teks = ''
                            if (results[i].similarity < 80.00) {
                                teks = 'Low similarity. 🤔\n\n'
                            } else {
                                teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                                await ruka.sendLinkWithAutoPreview(from, results[i].url, teks)
                                    .then(() => console.log('Source found!'))
                            }
                        }
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'waifu':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                weeaboo.waifu(false)
                    .then(async ({ url }) => {
                        await ruka.sendFileFromUrl(from, url, 'waifu.png', '', id)
                            .then(() => console.log('Success sending waifu!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'anitoki':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                weeaboo.anitoki()
                    .then(async ({ result }) => {
                        let anitoki = '*── 「 ANITOKI LATEST 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            anitoki += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, anitoki, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'neonime':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                weeaboo.neonime()
                    .then(async ({ status, result }) => {
                        if (status !== 200) return await ruka.reply(from, 'Not found.', id)
                        let neoInfo = '*── 「 NEONIME LATEST 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            const { date, title, link, desc } = result[i]
                            neoInfo += `\n\n➸ *Title*: ${title}\n➸ *Date*: ${date}\n➸ *Synopsis*: ${desc}\n➸ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, neoInfo, id)
                        console.log('Success sending Neonime latest update!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'anoboy':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                weeaboo.anoboy()
                    .then(async ({ result }) => {
                        let anoboyInfo = '*── 「 ANOBOY ON-GOING 」 ──*'
                        for (let i = 0; i < result.length; i++) {
                            anoboyInfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, anoboyInfo, id)
                        console.log('Success sending on-going anime!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'nimesticker': // by CHIKAA CHANTEKKXXZZ
            case prefix+ 'animesticker': 
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                weeaboo.snime()
                    .then(async (body) => {
                        const wifegerak = body.split('\n')
                        const wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        await ruka.sendStickerfromUrl(from, wifegerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'quotenime':
            case prefix+ 'quotesnime':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                console.log('Sending random quote...')
                const quoteznime = await axios.get('https://mhankbarbar.tech/api/quotesnime/random')
                await ruka.sendText(from, `➸ *Quotes* : ${quoteznime.data.data.quote}\n➸ *Character* : ${quoteznime.data.data.chara} from Anime ${quoteznime.data.data.anime}`, id)
                    .then(() => console.log('Success sending quotes..'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break

            // Fun

            case prefix+ 'slap':
                const caption = `${message.sender.pushname.toString()}  *slapped* ${await getUserInfo(message)}`
                const slaps = ['./media/video/slap/slap.mp4', './media/video/slap/slap2.mp4', './media/video/slap/slap3.mp4', './media/video/slap/slap4.mp4']
                const randomslaps = slaps[Math.floor(Math.random() * slaps.length)]
                await ruka.sendVideoAsGif(from, randomslaps, 'fbi.mp4', caption, message.id)
                break
        case prefix+ 'kiss':
                    const captions = `${message.sender.pushname.toString()}  *kissed* ${await getUserInfo(message)}`
                    const kisses = ['./media/video/kiss/kiss.mp4', './media/video/kiss/kiss2.mp4', './media/video/kiss/kiss3.mp4', './media/video/kiss/kiss4.mp4']
                    const randomkisses = kisses[Math.floor(Math.random() * kisses.length)]
                    await ruka.sendVideoAsGif(from, randomkisses, 'fbi.mp4', captions, message.id)
                    break
        case prefix+ 'pat':
               const captionss = `${message.sender.pushname.toString()}  *patted* ${await getUserInfo(message)}`
               const pats = ['./media/video/pat/pat.mp4', './media/video/pat/pat2.mp4', './media/video/pat/pat3.mp4', './media/video/pat/pat4.mp4', './media/video/pat/pat5.mp4']
               const randompats = pats[Math.floor(Math.random() * pats.length)]
               await ruka.sendVideoAsGif(from, randompats, 'fbi.mp4', captionss, message.id)
               break
        case prefix+ 'hug':
                const captionsss = `${message.sender.pushname.toString()}  *hugged* ${await getUserInfo(message)}`
                const hugs = ['./media/video/hug/hug.mp4', './media/video/hug/hug2.mp4', './media/video/hug/hug3.mp4', './media/video/hug/hug4.mp4']
                const randomhugs = hugs[Math.floor(Math.random() * hugs.length)]
                await ruka.sendVideoAsGif(from, randomhugs, 'fbi.mp4', captionsss, message.id)
                break
        case prefix+ 'punch':
                    const captionssss = `${message.sender.pushname.toString()}  *punched* ${await getUserInfo(message)}`
                    const punches =  ['./media/video/punch/punch.mp4', './media/video/punch/punch2.mp4', './media/video/punch/punch3.mp4']
                    const randompunches = punches[Math.floor(Math.random() * punches.length)]
                    await ruka.sendVideoAsGif(from, randompunches, 'fbi.mp4', captionssss, message.id)
                    break
        case prefix+ 'owo':
                   const captionsssss = `${message.sender.pushname.toString()}  *UwU* ${await getUserInfo(message)}`
                   const owos =['./media/video/owo/owo.mp4', './media/video/owo/owo2.mp4', './media/video/owo/owo3.mp4']
                   const randomowos = owos[Math.floor(Math.random() * owos.length)]
                   await ruka.sendVideoAsGif(from, randomowos, 'fbi.mp4', captionsssss, message.id)
                   break
          case prefix+ 'bapak': // By Kris
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                axios.get(`https://api.terhambar.com/bpk?kata=${q}`)
                    .then(async (res) => await ruka.reply(from, res.data.text, id))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'puisi': // By Kris
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/puisi2')
                    .then(async (res) => await ruka.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'cerpen': // By Kris
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(async (res) => await ruka.reply(from, res.data.data, id))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'creepyfact': // By Kris
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await ruka.reply(from, creepyz, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'quotes':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                misc.quotes()
                .then(async ({ result }) => {
                    await ruka.reply(from, `➸ *Quotes*: ${result.quotes}\n➸ *Author*: ${result.author}`, id)
                })
            break
            case prefix+ 'asupan': // shansekai
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                fun.asupan()
                    .then(async (body) => {
                        const asupan = body.split('\n')
                        const asupanx = asupan[Math.floor(Math.random() * asupan.length)]
                        await ruka.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'asupan.mp4', 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', id)
                        console.log('Success sending video!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'citacita': // Piyobot
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.cita()
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        await ruka.sendFileFromUrl(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'dadu': // by CHIKAA CHANTEKKXXZZ
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.dadu()
                    .then(async (body) => {
                        const dadugerak = body.split('\n')
                        const dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
                        await ruka.sendStickerfromUrl(from, dadugerakx, null, { author: authorWm, pack: packWm })
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'dogesticker': // by CHIKAA CHANTEKKXXZZ
            case prefix+ 'doge':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.doge()
                    .then(async (body) => {
                        const dogeg = body.split('\n')
                        const dogegx = dogeg[Math.floor(Math.random() * dogeg.length)]
                        await ruka.sendStickerfromUrl(from, dogegx, null, { author: authorWm, pack: packWm })
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'profile':
            case prefix+ 'me':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg) {
                    const getQuoted = quotedMsgObj.sender.id
                    const profilePic = await ruka.getProfilePicFromServer(getQuoted)
                    const username = quotedMsgObj.sender.name
                    const statuses = await ruka.getStatus(getQuoted)
                    const benet = _ban.includes(getQuoted) ? 'Yes' : 'No'
                    const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                    const premi = premium.checkPremiumUser(getQuoted, _premium) ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(getQuoted, _level)
                    const xpMe = level.getLevelingXp(getQuoted, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfp = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                    } else {
                        pfp = profilePic
                    }
                    await ruka.sendFileFromUrl(from, pfp, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                } else {
                    const profilePic = await ruka.getProfilePicFromServer(sender.id)
                    const username = pushname
                    const statuses = await ruka.getStatus(sender.id)
                    const benet = isBanned ? 'Yes' : 'No'
                    const adm = isGroupAdmins ? 'Yes' : 'No'
                    const premi = isPremium ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(sender.id, _level)
                    const xpMe = level.getLevelingXp(sender.id, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfps = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                    } else {
                        pfps = profilePic
                    }
                    await ruka.sendFileFromUrl(from, pfps, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                }
            break
            case prefix+ 'hartatahta':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating harta tahta text...')
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'partner':
            case prefix+ 'pasangan':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const nama = q.substring(0, q.indexOf('|') - 1)
                const pasangan = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                fun.pasangan(nama, pasangan)
                    .then(async ({ result }) => {
                        await ruka.reply(from, result.hasil, id)
                            .then(() => console.log('Success sending fortune!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'zodiac':
            case prefix+ 'zodiak':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                fun.zodiak(args[0])
                    .then(async ({ result }) => {
                        if (result.status === 204) {
                            return await ruka.reply(from, result.ramalan, id)
                        } else {
                            let ramalan = `Zodiak: ${result.zodiak}\n\nRamalan: ${result.ramalan}\n\nAngka laksek: ${result.nomorKeberuntungan}\n\n${result.motivasi}\n\n${result.inspirasi}`
                            await ruka.reply(from, ramalan, id)
                                .then(() => console.log('Success sending zodiac fortune!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'write':
                        if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                        if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                        await ruka.reply(from, eng.wait(), id)
                        if (args.length == 0) return ruka.reply(from, `Make the bot write the text that is sent as an image\nUsage: ${prefix}nulis [teks]\n\nexample: ${prefix}nulis i love you 3000`, id)
                    const nulisq = body.slice(7)
                    const nulisp = await rugaapi.tulis(nulisq)
                    await ruka.sendImage(from, `${nulisp}`, '', 'Here dear ✨️', id)
                    .catch(() => {
                        ruka.reply(from, 'There is an Error!', id)
                    })
            break
            case prefix+ 'ffbanner': // By: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating FF banner...')
                const teks1ffanjg = q.substring(0, q.indexOf('|') - 1)
                const teks2ffanjg = q.substring(q.lastIndexOf('|') + 2)
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/bannerff?title=${teks1ffanjg}&text=${teks2ffanjg}&apikey=${config.vhtear}`, id)
                console.log('Success!')
            break
            case prefix+ 'caklontong': //By: VideFrelan
                if (!isGroupMsg) return ruka.reply(from, eng.groupOnly(), id)
                if (!isRegistered) return  ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                const sleep = (ms) => {
                    return new Promise(resolve => setTimeout(resolve, ms))
                }
                fun.caklontong()
                    .then(async ( { result }) => {
                        await ruka.reply(from, `➸ *Soal*: ${result.soal}`, id)
                        await ruka.sendText(from, '30 Detik Tersisa...')
                        await sleep(10000)
                        await ruka.sendText(from, '20 Detik Tersisa...')
                        await sleep(10000)
                        await ruka.sendText(from, '10 Detik Tersisa...')
                        await sleep(10000)
                        await ruka.reply(from, `➸ *Jawaban*: ${result.jawaban}\n${result.desk}`, id)
                        console.log('Success sending the answers!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!')
                    })
            break
            case prefix+ 'tebakgambar':
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                const tsleep = (ms) => {
                    return new Promise(resolve => setTimeout(resolve, ms))
                }
                fun.tbkgmbr()
                    .then(async ({ result }) => {
                        await ruka.sendFileFromUrl(from, result.soal_gbr, 'TebakGambar.jpg', '', id)
                        await ruka.sendText(from, '50 Detik Tersisa...')
                        await tsleep(10000)
                        await ruka.sendText(from, '40 Detik Tersisa...')
                        await tsleep(10000)
                        await ruka.sendText(from, '30 Detik Tersisa...')
                        await tsleep(10000)
                        await ruka.sendText(from, '20 Detik Tersisa...')
                        await tsleep(10000)
                        await ruka.sendText(from, '10 Detik Tersisa...')
                        await tsleep(10000)
                        await ruka.reply(from, `➸ *Jawaban*: ${result.jawaban}`, id)
                        console.log('Success sending tebakgambar result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!')
                    })
            break    
            case prefix+ 'fflogo': // By: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating FF logo...')
                const karakter = q.substring(0, q.indexOf('|') - 1)
                const teksff = q.substring(q.lastIndexOf('|') + 2)
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/logoff?hero=${karakter}&text=${teksff}&apikey=${config.vhtear}`, id)
                console.log('Success!')
            break
            case prefix+ 'text3d':
            case prefix+ '3dtext':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating 3D text...')
                await ruka.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/text3d?text=${q}`,`${q}.jpg`, '', id)
                console.log('Success creating 3D text!')
            break
            case prefix+ 'simi': // by: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.simi(q)
                    .then(async ({ jawaban }) => {
                        await ruka.reply(from, jawaban, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, `Error!\n\n${err}`, id)
                    })
            break
            case prefix+ 'glitchtext':
            case prefix+ 'glitext':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const teks1 = q.substring(0, q.indexOf('|') - 1)
                const teks2 = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating glitch text...')
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${teks1}&text2=${teks2}&apikey=${config.vhtear}`, 'glitch.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        co
                        nsole.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'phmaker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const kiri = q.substring(0, q.indexOf('|') - 1)
                const kanan = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating Pornhub text...')
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${kiri}&text2=${kanan}&apikey=${config.vhtear}`, 'ph.jpg', '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'blackpink':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating Blackpink text...')
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creting image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'galaxy':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating galaxy text...')
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/galaxytext?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
                    .then(() => console.log('Success creating image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'tod':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.reply(from, 'Before playing, promise to carry out whatever orders are given.' , id)
                await ruka.sendText(from, `Please type *${prefix}truth* or *${prefix}dare*`)
            break
            case prefix+ 'weton':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const tgl = q.substring(0, q.indexOf('|') - 1)
                const bln = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const thn = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                fun.weton(tgl, bln, thn)
                    .then(async ({ result }) => {
                        await ruka.reply(from, result.hasil, id)
                        console.log('Success sending weton info!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'truth':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.truth()
                    .then(async (body) => {
                        const tod = body.split('\n')
                        const randomTod = tod[Math.floor(Math.random() * tod.length)]
                        await ruka.reply(from, randomTod, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'hilih':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                fun.hilihteks(q)
                    .then(async ( { result }) => {
                        await ruka.reply(from, result.kata, id)
                        console.log('Success sending hilih text!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'ship':
    arg = body.trim().split(' ')
    const per = Math.floor(Math.random() * 100)
    var shiptext = `❣️❣️  Matchmaking ❣️❣️  ...
    ------------------------------------
            ${arg[1]}  x  ${arg[2]}
    ------------------------------------
    ${sentence}`
if (per < 25) { 
var sentence = `${per}% worse then average`
} else if (per < 50) {
var sentence = `${per}% i dont know how your parents will feel about this relationshiip...❇️` 
} else if (per < 75) {
var sentence = `${per}% good,rather then dying single... ⭐️` 
} else if (per < 90) {
var sentence = `${per}% Sugoi,go for sex🤩️` 
} else {
var sentence = `${per}% Incredible,u guys can be perefect couple 😍️` 
}
var shiptext = `❣️❣️  Matchmaking ❣️❣️  ...
------------------------------------
        ${arg[1]}  x  ${arg[2]}
------------------------------------
${sentence}`
await ruka.sendTextWithMentions(from, shiptext)
break
            case prefix+ 'dare':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                fun.dare()
                    .then(async (body) => {
                        const dare = body.split('\n')
                        const randomDare = dare[Math.floor(Math.random() * dare.length)]
                        await ruka.reply(from, randomDare, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'howgay':
        		if (args.length == 0) return ruka.reply(from, `To find out how gay someone is using ${prefix}howgay his name\n\nExample: ${prefix}howgay johnny`, id)
            fetch('https://raw.githubusercontent.com/debaji-db/howgay/patch-2/howgay.txt')
            .then(res => res.text())
            .then(body => {
                let splithowgay = body.split('\n')
                let randomhowgay = splithowgay[Math.floor(Math.random() * splithowgay.length)]
                ruka.reply(from, randomhowgay, id)
            })
            .catch(() => {
                ruka.reply(from, 'Something went wrong error!', id)
            })
            break
            case prefix+ 'triggered':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await ruka.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0 })
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'trash':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await ruka.reply(from, eng.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await ruka.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                        } else {
                            ypfps = ypics
                        }
                    }
                    canvas.Canvas.trash(ypfps)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await ruka.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'hitler':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await ruka.reply(from, eng.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await ruka.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypf = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                        } else {
                            ypf = ypics
                        }
                    }
                    canvas.Canvas.hitler(ypf)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await ruka.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'wasted':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini..., sticker nya lagi di kirim', id).then(() => ruka.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'dropwater':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (!isGroupMsg) return ruka.reply(from, `This command can only be used within group!`, id)
               {
               const anjay = body.slice(11)
               if (args.length === 1) return ruka.reply(from, `Send command $type [Text],for example type i love u 3000`, id)
               ruka.reply(from, eng.wait(), id)
               const puppeteer = require('puppeteer')
                try {
                (async () => {
                const browser = await puppeteer.launch({
                headless: true,
                });
               const page = await browser.newPage();
               await page.goto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", {waitUntil: "networkidle2" })
               .then(async () => {
               await page.type("#text-0", anjay);
               await page.click("#submit");
               await new Promise(resolve => setTimeout(resolve, 3000));
               const element = await page.$( 'div[class="thumbnail"] > img' );
              const text = await (await element.getProperty("src")).jsonValue();
              const urlmp4 = ({ url: text })
               ruka.sendFileFromUrl(from, text, id)
               browser.close();
               })
               .catch((err => {
             console.log(err)
              ruka.reply(from, 'error', id)
                }))
                })();
                } catch (error) {
                console.log('error bang')
                 ruka.reply(from, 'error', id)
                }
                }
                break
            case prefix+ 'kiss':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                try {
                    if (isMedia && isImage || isQuotedImage) {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await ruka.reply(from, eng.wait(), id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const ppRaw = await ruka.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(encryptMedia, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await ruka.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await ruka.reply(from, eng.wrongFormat(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'rip':
                if (!isGroupMsg) return await ruka.reply(from, 'Group Only', id)
                try {
                        await ruka.reply(from, '[wait]', id)
                        for (let i = 0; i < mentionedJidList.length; i++) {
                            const rpics = await ruka.getProfilePicFromServer(mentionedJidList[i])
                            if (rpics === undefined) {
                                var rpfps = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                            } else {
                                rpfps = rpics
                            }
                        } 
                        canvas.Canvas.rip(rpfps)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_rip.png`)
                                await ruka.sendFile(from, `${sender.id}_rip.png`, `${sender.id}_rip.png`, '', id)
                                fs.unlinkSync(`${sender.id}_rip.png`)
                            })
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'phcomment':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const usernamePh = q.substring(0, q.indexOf('|') - 1)
                const commentPh = q.substring(q.lastIndexOf('|') + 2)
                const ppPhRaw = await ruka.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                } else {
                    ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await ruka.reply(from, eng.wait(), id)
                const preprocessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await ruka.sendFileFromUrl(from, preprocessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break
            case prefix+ 'neontext':
            case prefix+ 'neon':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const atasnya = q.substring(0, q.indexOf('|') - 1)
                const tengahnya = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
                const bawahnya = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                await ruka.sendFileFromUrl(from, `http://docs-jojo.herokuapp.com/api/neon?text1=${atasnya}&text2=${tengahnya}&text3=${bawahnya}`, 'neon.jpg', '', id)
                console.log('Success creating image!')
            break
            case prefix+ 'firemaker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/fire_maker?text=${q}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case prefix+ 'mlmaker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const namaHero = q.substring(0, q.indexOf('|') - 1)
                const teksMl = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${namaHero}&text=${teksMl}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case prefix+ 'balloonmaker':
            case prefix+ 'blmaker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const namaKiri = q.substring(0, q.indexOf('|') - 1)
                const namaKanan = q.substring(q.lastIndexOf('|') + 2)
                await ruka.reply(from, eng.wait(), id)
                await ruka.sendFileFromUrl(from, `https://api.vhtear.com/balloonmaker?text1=${namaKiri}&text2=${namaKanan}&apikey=${config.vhtear}`)
                console.log('Success creating image!')
            break
            case prefix+ 'sliding':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                await ruka.sendVideoAsGif(from, `https://api.vhtear.com/slidingtext?text=${q}&apikey=${config.vhtear}`, 'sliding.gif', '', id)
                console.log('Success creating GIF!')
            break
            case prefix+ 'text': // by: irham01
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                try {
                    if (ar[0] === 'burnpaper') {
                        const vfburn = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfburn.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'candlemug') {
                        const vfcandlemug = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfcandlemug.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'lovemsg') {
                        const vflovemsg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vflovemsg.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'mugflower') {
                        const vfmugflower = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfmugflower.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'narutobanner') {
                        const vfnarutobanner = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfnarutobanner.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'paperonglass') {
                        const vfpaperonglass = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfpaperonglass.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'romancetext') {
                        const vfromancetext = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfromancetext.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'shadowtext') {
                        const vfshadowtext = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vfshadowtext.data.result.img, `${q}.jpg`, '', id)
                    } else if (ar[0] === 'tiktokeffect') {
                        const vftiktokeffect = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text=${args[1]}`)
                        await ruka.sendFileFromUrl(from, vftiktokeffect.data.result.img, `${q}.jpg`, '', id)
                    } else {
                        await ruka.reply(from, eng.menuText(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break

            // Sticker
            case prefix+ 'stikernobg':
            case prefix+ 'stickernobg': // by: VideFrelan
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    await ruka.sendImageAsSticker(from, mediaData, { author: authorWm, pack: packWm, removebg: true })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)                
                    /*const q = await uploadImages(mediaData, `stickernobg.${sender.id}`)
                    misc.stickernobg(q)
                        .then(async ({ result }) => {
                            await ruka.sendStickerfromUrl(from, result.image, null, { author: authorWm, pack: packWm })
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })*/
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'stickerwm': // By Slavyan
            case prefix+ 'stcwm':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await ruka.sendImageAsSticker(from, imageBase64, { author: author, pack: packname })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'stickermeme': //Chika Chantexx
            case prefix+ 'stcmeme':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const top = q.substring(0, q.indexOf('|') - 1)
                    const topp = top.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('#', '~h').replace('/', '~s')
                    const bottom = q.substring(q.lastIndexOf('|') + 2)
                    const bottomm = bottom.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('#', '~h').replace('/', '~s')
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const getUrl = await uploadImages(mediaData, `meme.${sender.id}`)
                    const create = `https://api.memegen.link/images/custom/${topp}/${bottomm}.png?background=${getUrl}`
                    await ruka.sendStickerfromUrl(from, create, null, { author: authorWm, pack: packWm, keepScale: true })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'takestick': // By: VideFrelan, Chika Chantexx
            case prefix+ 'take':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const mediaDataTake = await decryptMedia(quotedMsg)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaDataTake.toString('base64')}`
                    await ruka.sendImageAsSticker(from, imageBase64, { author: author, pack: packname })
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'sticker':
            case prefix+ 'stiker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await ruka.sendImageAsSticker(from, imageBase64, { author: authorWm, pack: packWm })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'stickerp':
            case prefix+ 'stikerp':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await ruka.sendImageAsSticker(from, imageBase64, { author: authorWm, pack: packWm, keepScale: true })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'stickergif':
            case prefix+ 'stikergif':
            case prefix+ 'sgif':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (isMedia && isVideo || isGif || isQuotedVideo || isQuotedGif) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        const encryptMedia = isQuotedGif || isQuotedVideo ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const _mimetype = isQuotedVideo || isQuotedGif ? quotedMsg.mimetype : mimetype
                    const videoBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await ruka.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, author: authorWm, pack: packWm, keepScale: true, fps: 30, startTime: '00:00:00.0', endTime : '00:00:20.0', crop: false, loop: 0 })
                            .then(() => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                            })
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, eng.videoLimit(), id)
                    }
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'ttg':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.reply(from, eng.wait(), id)
                await ruka.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${config.vhtear}`, null, { author: authorWm, pack: packWm })
                    .then(() => console.log('Success creating GIF!'))
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'ttp':
                if (args.length < 1) return reply('what do you want to use as a text sticker??')
                ranp = getRandom('.png')
                rano = getRandom('.webp')
                ppt = body.slice(4).trim()
                anu = await fetchJson(`https://xteam.xyz/attp?file&text=${ppt}`, {method: 'get'})
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(from, 'wrong format!', id)
                    ruka.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: rukaa})
                    fs.unlinkSync(rano)
                })
                    await limitAdd(sender)
                break 
            case prefix+ 'stickertoimg':
            case prefix+ 'stikertoimg':
            case prefix+ 'toimg':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isQuotedSticker) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await ruka.sendFile(from, imageBase64, 'sticker.jpg', '', id)
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'emojisticker':
            case prefix+ 'emojistiker':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const emoji = emojiUnicode(args[0])
                await ruka.reply(from, eng.wait(), id)
                console.log('Creating emoji code for =>', emoji)
                await ruka.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${config.vhtear}`, null, { author: authorWm, pack: packWm })
                    .then(async () => {
                        await ruka.reply(from, eng.ok(), id)
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Emoji not supported!', id)
                    })
            break
            case prefix+ 'goimg':
                {
                const qwery = q.split('|')[0]
                const jum = q.split('|')[1]
                if(!qwery) return await ruka.reply(from, `Enter the keyword, for example = ${prefix}goimg Ruka | 3`, id)
                if(!jum) return await ruka.reply(from, `Number of images required, example = ${prefix}goimg images of Ruka | 3`, id)
                if(jum >=25) return await ruka.reply(from, 'Too many numbers! Max 25', id)
                var gis = require('g-i-s');
                var opts = {
                    searchTerm: qwery
                  };
                  gis(opts, logResults);  
                function logResults(error, results) {
                    if (error) {
                      ruka.reply(from, 'Error', id)
                    }
                    else {
                      const item = results.slice(0, jum)
                      item.forEach(async(res) => {
                          console.log(res)
                        ruka.sendImage(from, res.url, null, `⛓️ Link : ${qwery}\n🎆 Image size : ${res.height} x ${res.width}`)  
                        
                        })
                     }
                  }		
                }
                break
                case prefix+ 'fsticker':
                    {
                    const qewery = q.split('|')[0]
                    const jhum = q.split('|')[1]
                    if(!qewery) return await ruka.reply(from, `Enter the keyword, for example = ${prefix}fstickerRuka | 3`, id)
                    if(!jhum) return await ruka.reply(from, `Number of stickers required, example = ${prefix}fsticker sticker of Ruka | 3`, id)
                    if(jhum >=25) return await ruka.reply(from, 'Too many numbers! Max 25', id)
                    var gis = require('g-i-s');
                    var opts = {
                        searchTerm: qewery
                      };
                      gis(opts, logResults);  
                    function logResults(error, results) {
                        if (error) {
                          ruka.reply(from, 'Error', id)
                        }
                        else {
                          const items = results.slice(0, jhum)
                          items.forEach(async(res) => {
                              console.log(res)
                            ruka.sendImageAsSticker(from, res.url, null, `⛓️ Link : ${qewery}\n🎆 Image size : ${res.height} x ${res.width}`)  
                            
                            })
                         }
                      }		
                    }
                    break

            // NSFW
            case prefix+ 'multilewds':
            case prefix+ 'multilewd':
            case prefix+ 'mlewds':
            case prefix+ 'mlewd':
                // Premium feature, contact the owner.
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                    await ruka.reply(from, eng.botNotPremium(), id)
                } else {
                    if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                    await ruka.reply(from, eng.botNotPremium(), id)
                }
            break
            case prefix+ 'multifetish':
            case prefix+ 'mfetish':
                // Premium feature, contact the owner.
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                    await ruka.reply(from, eng.botNotPremium(), id)
                } else {
                    if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                    await ruka.reply(from, eng.botNotPremium(), id)
                }
            break
            case prefix+ 'lewds':
            case prefix+ 'lewd':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await ruka.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await ruka.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                }
            break
            case prefix+ 'fetish':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (ar.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        if (ar[0] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await ruka.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, err, id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        if (ar[0] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (ar[0] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (ar[0] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (ar[0] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (ar[0] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (ar[0] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (ar[0] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (ar[0] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await ruka.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await ruka.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+ 'nhentai':
            case prefix+ 'nh':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isNaN(Number(args[0]))) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await ruka.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        }
                    } else {
                        await ruka.reply(from, eng.nhFalse(), id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await ruka.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        }
                    } else {
                        await ruka.reply(from, eng.nhFalse(), id)
                    }
                }
            break
            case prefix+ 'nhdl':
                // Premium feature, contact the owner.
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                    await ruka.reply(from, eng.botNotPremium(), id)
                } else {
                    if (!isPremium) return await ruka.reply(from, eng.notPremium(), id)
                    await ruka.reply(from, eng.botNotPremium(), id)
                }
            break
            case prefix+ 'nhsearch':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `*── 「 NHENTAI 」 ──*\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await ruka.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `*── 「 NHENTAI 」 ──*\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await ruka.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
                        })
                        .catch(async(err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                }
            break
            case prefix+ 'nekopoi':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.latest()
                        let text = '*── 「 NEKOPOI LATEST 」 ──*'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.latest()
                        let text = '*── 「 NEKOPOI LATEST 」 ──*'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+ 'nekosearch':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '*── 「 NEKOPOI 」 ──*'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '*── 「 NEKOPOI 」 ──*'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await ruka.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+ 'lolivid':  //Piyobot
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                weeaboo.loli()
                    .then(async (body) => {
                        let lolipiyo = body.split('\n')
                        let papololi = lolipiyo[Math.floor(Math.random() * lolipiyo.length)]
                        await ruka.sendFileFromUrl(from, papololi, 'loli.mp4', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    })
            break
            case prefix+ 'waifu18':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    weeaboo.waifu(true)
                        .then(async ({ url }) => {
                            await ruka.sendFileFromUrl(from, url, 'waifu.png', '', id)
                                .then(() => console.log('Success sending waifu!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    weeaboo.waifu(true)
                        .then(async ({ url }) => {
                            await ruka.sendFileFromUrl(from, url, 'waifu.png', '', id)
                                .then(() => console.log('Success sending waifu!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                }
            break
            case prefix+ 'phdl':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('pornhub.com')) return await ruka.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await ruka.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await ruka.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await ruka.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await ruka.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.error(err)
                        await ruka.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+ 'yuri':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                }
            break
            case prefix+ 'lewdavatar':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, (await neko.nsfw.avatar()).url, 'avatar.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, (await neko.nsfw.avatar()).url, 'avatar.jpg', '', id)
                }
            break
            case prefix+ 'femdom':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    await ruka.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                }
            break
            case prefix+ 'cersex':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await ruka.reply(from, eng.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    nsfw.cersex()
                        .then(async ({ result }) => {
                            await ruka.sendFileFromUrl(from, result.image, 'cersex.jpg', `*── 「 ${result.judul} 」 ──*\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    nsfw.cersex()
                        .then(async ({ result }) => {
                            await ruka.sendFileFromUrl(from, result.image, 'cersex.jpg', `*── 「 ${result.judul} 」 ──*\n\n${result.cerita}`, id)
                            console.log('Success sending cersex!')
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await ruka.reply(from, 'Error!', id)
                        })
                }
            break

            // Moderation command
            case prefix+ 'revoke':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return ruka.reply(from, eng.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.revokeGroupInviteLink(groupId)
                await ruka.sendTextWithMentions(from, `Group link revoked by @${sender.id.replace('@c.us', '')}`)
            break
            case prefix+ 'grouplink':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const gcLink = await ruka.getGroupInviteLink(groupId)
                await ruka.reply(from, gcLink, id)
            break
            case prefix+ 'mutegc':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return ruka.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.setGroupToAdminsOnly(groupId, true)
                    await ruka.sendText(from, eng.gcMute())
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.setGroupToAdminsOnly(groupId, false)
                    await ruka.sendText(from, eng.gcUnmute())
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'add':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (args.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                try {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.addParticipant(from, `${args[0]}@c.us`)
                    await ruka.sendText(from, '🎉 Welcome! 🎉')
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, 'Error!', id)
                }
            break
            case prefix+ 'kick':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length === 0) return await ruka.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                for (let i of mentionedJidList) {
                    if (groupAdmins.includes(i)) return await ruka.sendText(from, eng.wrongFormat())
                    await ruka.removeParticipant(groupId, i)
                }
            break
            case prefix+ 'promote':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return await ruka.reply(from, eng.adminAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.promoteParticipant(groupId, mentionedJidList[0])
                await ruka.reply(from, eng.ok(), id)
            break
            case prefix+ 'demote':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await ruka.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await ruka.reply(from, eng.notAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await ruka.demoteParticipant(groupId, mentionedJidList[0])
                await ruka.reply(from, eng.ok(), id)
            break
            case prefix+ 'leave':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                await ruka.sendText(from, 'Bye Sayonara 👋')
                await ruka.leaveGroup(groupId)
            break
            case prefix+ 'admins':
            case prefix+ 'admin':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupAdm = await ruka.getGroupAdmins(groupId)
                const lastAdmin = daily.getLimit(sender.id, _daily)
                if (lastAdmin !== undefined && cd - (Date.now() - lastAdmin) > 0) {
                    const time = ms(cd - (Date.now() - lastAdmin))
                    await ruka.reply(from, eng.daily(time), id)
                } else if (isOwner) {
                    let txt = '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *R U K A  B O T* 〙'
                    await ruka.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *R U K A  B O T* 〙'
                    await ruka.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+ 'ping':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupMem = await ruka.getGroupMembers(groupId)
                const lastEveryone = daily.getLimit(sender.id, _daily)
                if (lastEveryone !== undefined && cd - (Date.now() - lastEveryone) > 0) {
                    const time = ms(cd - (Date.now() - lastEveryone))
                    await ruka.reply(from, eng.daily(time), id)
                } else if (isOwner || isPremium) {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *RU K A  B O T* 〙'
                    await ruka.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *R U K A  B O T* 〙'
                    await ruka.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+ 'groupicon':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return ruka.reply(from, eng.botNotAdmin(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await ruka.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await ruka.setGroupIcon(groupId, imageBase64)
                    await ruka.sendText(from, eng.ok())
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'groupinfo' :
                if (!isGroupMsg) return ruka.reply(from, '.', message.id) 
                var totalMem = chat.groupMetadata.participants.length
                var desc = chat.groupMetadata.desc
                var groupname = name
	            var strict = smart.includes(chat.id)
                var welgrp = _welcome.includes(chat.id)
                var ngrp = _nsfw.includes(chat.id)
                var grouppic = await ruka.getProfilePicFromServer(chat.id)
                if (grouppic == undefined) {
                     var pfp = errorurl
                } else {
                     var pfp = grouppic 
                }
                await ruka.sendFileFromUrl(from, pfp, 'group.png', `*${groupname}* 
    
     🌐️ *Members: ${totalMem}*
     
     💌️ *Welcome: ${welgrp}*

     💚️ *Strict Mode: ${strict}*
    
     🔮️ *Detector* : *${isDetectorOn}*
    
     ⚜️ *NSFW: ${ngrp}*
    
     📃️ *Group Description* 
    
    ${desc}`)
                break
            case prefix+ 'antilink':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await ruka.reply(from, eng.detectorOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.push(groupId)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await ruka.reply(from, eng.detectorOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await ruka.reply(from, eng.detectorOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'leveling':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isLevelingOn) return await ruka.reply(from, eng.levelingOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await ruka.reply(from, eng.levelingOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await ruka.reply(from, eng.levelingOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'strict':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (smart.includes(chat.id)) return ruka.reply(from, eng.strictOnAlready(), id)
					smart.push(chat.id)
					fs.writeFileSync('./database/bot/smart.json', JSON.stringify(smart))
                	return ruka.reply(from, eng.strictOn(), id)
                } else if (ar[0] === 'disable') {
                    let inx = smart.indexOf(from)
                    smart.splice(inx, 1)
                    fs.writeFileSync('./database/bot/smart.json', JSON.stringify(smart))
                    return ruka.reply(from, eng.strictOff(), id)
			}
			return ruka.reply(from, `No such Option (*${arg[1]}*)`, id)
            break
            case prefix+ 'welcome':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isWelcomeOn) return await ruka.reply(from, eng.welcomeOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.push(groupId)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await ruka.reply(from, eng.welcomeOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.splice(groupId, 1)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await ruka.reply(from, eng.welcomeOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'autosticker':
            case prefix+ 'autostiker':
            case prefix+ 'autostik':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isAutoStickerOn) return await ruka.reply(from, eng.autoStikOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _autosticker.push(groupId)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await ruka.reply(from, eng.autoStikOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _autosticker.splice(groupId, 1)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await ruka.reply(from, eng.autoStikOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'antinsfw':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await ruka.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await ruka.reply(from, eng.antiNsfwOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.push(groupId)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await ruka.reply(from, eng.antiNsfwOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await ruka.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await ruka.reply(from, eng.antiNsfwOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break

            // Owner command
            case prefix+ 'block':
            case prefix+ 'blok':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                        await ruka.contactBlock(blok)
                    }
                    await ruka.reply(from, eng.doneOwner(), id)
                } else if (args.length === 1) {
                    await ruka.contactBlock(args[0] + '@c.us')
                    await ruka.reply(from, eng.doneOwner(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'unblock':
            case prefix+ 'unblok':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                        await ruka.contactUnblock(blok)
                    }
                    await ruka.reply(from, eng.doneOwner(), id)
                } else if (args.length === 1) {
                    await ruka.contactUnblock(args[0] + '@c.us')
                    await ruka.reply(from, eng.doneOwner(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'bc':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (!q) return await ruka.reply(from, eng.emptyMess(), id)
                const chats = await ruka.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await ruka.getChatById(bcs)
                    if (!cvk.isReadOnly) await ruka.sendText(bcs, `${q}\n\n- *R U K A* \n_Broadcasted message_`)
                }
                await ruka.reply(from, eng.doneOwner(), id)
            break
            case prefix+ 'bcimg':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (isMedia) {
                var buff = await decryptMedia(message)
                  }
                const chatx = await ruka.getAllChatIds()
                for (let id of chatx) {
                try {
                if (isMedia) ruka.sendFile(id, `data:image/jpg;base64,${buff.toString('base64')}`, 'bcimg.jpg', body.slice(4) )
                if (!isMedia) ruka.sendText(id, body.slice(4))
                } catch(err) {
                }
                }
               break
               case prefix+ 'bcgroup':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (!q) return await ruka.reply(from, eng.emptyMess(), id)
                const allGroupz = await ruka.getAllGroups()
               for (let gclist of allGroupz) {
                    let cvk = await ruka.getChatById(gclist)
                    if (!cvk.isReadOnly) await ruka.sendText(gclist, `${q}\n\n- *R U K A* \n_Broadcasted message_`)
                }
                await ruka.reply(from, eng.doneOwner(), id)
            break
            case prefix+ 'clearall':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                const allChats = await ruka.getAllChats()
                for (let delChats of allChats) {
                    await ruka.deleteChat(delChats.id)
                }
                await ruka.reply(from, eng.doneOwner(), id)
            break
            case prefix+ 'leaveall':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (!q) return await ruka.reply(from, eng.emptyMess(), id)
                const allGroup = await ruka.getAllGroups()
                for (let gclist of allGroup) {
                    await ruka.sendText(gclist.contact.id, q)
                    await ruka.leaveGroup(gclist.contact.id)
                }
                await ruka.reply(from, eng.doneOwner())
            break
            case prefix+ 'getses':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                const ses = await ruka.getSnapshot()
                await ruka.sendFile(from, ses, 'session.png', eng.doneOwner())
            break
            case prefix+ 'ban':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                            _ban.push(benet)
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        }
                        await ruka.reply(from, eng.doneOwner(), id)
                    } else {
                        _ban.push(args[1] + '@c.us')
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await ruka.reply(from, eng.doneOwner(), id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                        _ban.splice(mentionedJidList[0], 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await ruka.reply(from, eng.doneOwner(), id)
                    } else{
                        _ban.splice(args[1] + '@c.us', 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await ruka.reply(from, eng.doneOwner(), id)
                    }
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'eval':
            case prefix+ 'ev':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (!q) return await ruka.reply(from, eng.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await ruka.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await ruka.reply(from, err, id)
                }
            break
            case prefix+ 'shutdown':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                await ruka.sendText(from, 'Otsukaresama deshita~ 👋')
                    .then(async () => await ruka.kill())
                    .catch(() => new Error('Target closed.'))
            break
            case prefix+ 'premium':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let prem of mentionedJidList) {
                            if (prem === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                            premium.addPremiumUser(prem, args[2], _premium)
                            await ruka.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${prem}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await ruka.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await ruka.reply(from, eng.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await ruka.reply(from, eng.doneOwner(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await ruka.reply(from, eng.doneOwner(), id)
                    }
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'setstatus':
            case prefix+ 'setstats':
            case prefix+ 'setstat':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (!q) return await ruka.reply(from, eng.emptyMess(), id)
                await ruka.setMyStatus(q)
                await ruka.reply(from, eng.doneOwner(), id)
            break
            case prefix+ 'mute':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(pushname), id)
                if (!isGroupMsg) return await ruka.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await ruka.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isMute) return await ruka.reply(from, eng.muteChatOnAlready(), id)
                    _mute.push(groupId)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await ruka.reply(from, eng.muteChatOn(), id)
                } else if (ar[0] === 'disable') {
                    _mute.splice(groupId, 1)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await ruka.reply(from, eng.muteChatOff(), id)
                } else {
                    await ruka.reply(from, eng.wrongFormat(), id)
                }
            break
            case prefix+ 'setname':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                if (!q || q.length > 25) return await ruka.reply(from, eng.wrongFormat(), id)
                await ruka.setMyName(q)
                await ruka.reply(from, eng.nameChanged(q), id)
            break
            case prefix+ 'grouplist':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                const getGroups = await ruka.getAllGroups()
                let txtGc = '*── 「 GROUP LIST 」 ──*\n'
                for (let i = 0; i < getGroups.length; i++) {
                    txtGc += `\n\n❏ *Name*: ${getGroups[i].name}\n❏ *Unread messages*: ${getGroups[i].unreadCount} messages`
                }
                await ruka.sendText(from, txtGc)
            break
            case prefix+ 'reset':
                if (!isOwner) return await ruka.reply(from, eng.ownerOnly(), id)
                const reset = []
                _limit = reset
                console.log('Hang tight, it\'s time to reset usage limits...')
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                await ruka.reply(from, eng.doneOwner(), id)
                console.log('Success!')
            break
            case prefix+ 'developer':
                if (!isRegistered) return await ruka.reply(from, eng.notRegistered(), id)
                await ruka.sendContact(from, ownerNumber)
            break
            default:
                if (isCmd) {
                    await ruka.reply(from, eng.cmdNotFound(command), id)
                }  else if (command.startsWith('$')) {
                    const up = await axios.get('vhttps://raw.githubusercontent.com/AlenSaito1/simple-pokedex/main/3e8488cf4beeb4312aedc57112c44c71.jpg')
                     ruka.sendFileFromUrl(from, up.data.url, 'off.jpg', `Do you mean *$help*`, id)
                  }
                  break
            }
                 } catch (err) {
                  console.error(color('[ERROR]', 'red'), err)
    }
}
/********** END OF MESSAGE HANDLER **********/
