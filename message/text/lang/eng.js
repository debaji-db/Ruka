/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix, ownerNumber } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩 ~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.Hi = (pushname) => {
    return `*👋️𝒽𝒾 ${pushname}! 𝓃𝒾𝒸𝑒 𝓉𝑜 𝓂𝑒𝑒𝓉 𝓎𝑜𝓊~*`
}    

exports.wrongFormat = () => {
    return `Incorrect format! Please check the usage in *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Please enter the message!`
}

exports.cmdNotFound = (cmd) => {
    return `gomenasaii *${prefix}{cmd}* not found, randii!!`
}

exports.blocked = () => {
    return `Bot not receiving calls. You have been blocked because breaking the rules!\n\nReasons: Calling the bot\nContact the owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `This command only Owner-sama can use!`
}

exports.doneOwner = () => {
    return `Done, Owner-sama~`
}

exports.groupOnly = () => {
    return `This command can only be used in group!`
}

exports.adminOnly = () => {
    return `This command can only be used by group admins!`
}

exports.notNsfw = () => {
    return `NSFW command hasn't been enabled!`
}

exports.nsfwOn = () => {
    return `NSFW command was successfully *enabled*!`
}

exports.nsfwOff = () => {
    return `NSFW command was successfully *disabled*!`
}

exports.nsfwAlready = () => {
    return `NSFW command was successfully enabled before.`
}

exports.addedGroup = (chat) => {
    return `Thank you for inviting me in your group, members of *${chat.contact.name}*!\n\n*Please register in bot direct message by typing:* \n*${prefix}register* name | age\n for example $register fbi | 21`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------\n\nTotal blocked: *${blockNumber.length}* user(s)\n`
}

exports.notPremium = () => {
    return `Sorry! This command can only be used by premium users.`
}

exports.notAdmin = () => {
    return `The user is not an admin!`
}

exports.adminAlready = () => {
    return `Cannot promote a user who is an admin already!`
}

exports.botNotPremium = () => {
    return `This bot does not support premium commands. Please contact the owner of this bot.`
}

exports.botNotAdmin = () => {
    return `Make the bot as admin first!`
}

exports.ytFound = (res) => {
    return `*Video found!*\n\n➸ *Title*: ${res.title}\n➸ *Description*:\n${res.desc}\n➸ *Duration*: ${res.duration} minutes\n\nMedia is being shipped, please wait...`
}

exports.notRegistered = () => {
    return `ʏᴏᴜ ʜᴀᴠɴ'ᴛ ʀᴇɢɪsᴛᴇʀᴇᴅ ɪɴ ᴏᴜʀ ᴅᴀᴛᴀʙᴀsᴇ!\n\nᴘʟᴇᴀsᴇ ʀᴇɢɪsᴛᴇʀ ɪɴ ʙᴏᴛ ᴅᴍ ʙʏ ᴛʏᴘɪɴɢ:* \n*${prefix}register* name | age\n 𝒻𝑜𝓇 𝑒𝓍𝒶𝓂𝓅𝓁𝑒 fbi | 21`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\n𝙔𝙤𝙪𝙧 𝙖𝙘𝙘𝙤𝙪𝙣𝙩 𝙬𝙖𝙨 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧𝙚𝙙 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚 𝙙𝙖𝙩𝙖:\n\n➸ *Name*: ${name}\n➸ *Age*: ${age}\n➸ *ID*: ${userId}\n➸ *Time registered*: ${time}\n➸ *Serial*: ${serial}\n\nNote:\nDO NOT share your *serial* to someone!\n\nConsider to read *${prefix}rules* first.`
}

exports.registeredAlready = () => {
    return `You've registered before.`
}

exports.received = (pushname) => {
    return `Hello ${pushname}!\nThank you for reporting, we will work on it ASAP.`
}

exports.limit = (time) => {
    return `Sorry, but you have reached the limit using this commands.\nPlease wait *${time.hours}* hour(s) *${time.minutes}* minute(s) *${time.seconds}* second(s) more.`
}

exports.videoLimit = () => {
    return `The video size is too large!`
}

exports.joox = (result) => {
    return `*Song found!*\n\n➸ *Singer*: ${result[0].penyanyi}\n➸ *Title*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Duration*: ${result[0].duration}\n\nMedia is being shipped, please wait...`
}

exports.gsm = (result) => {
    return `➸ *Phone model*: ${result.title}\n➸ *Spesification*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Ingredients*: ${result.bahan}\n\n*Steps*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Title*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durations*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, SO, premi, benet, adm, level, requiredXp, xp) => {
    return `🎉🎉🎉🅿🆁🅾🅵🅸🅻🅴 🎉🎉🎉\n\n📝 *Username*: ${username}\n\n💌 *Status*: ${status}\n\n🛩️ *Premium*: ${premi}\n\n♥️ *Haigusha: ${SO}*\n\n🔰 *Banned*: ${benet}\n\n👑 *Admin*: ${adm}\n\nYour progress:\n💚️ *Level*: ${level}\n♥️ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nAnnouncement for all group members of ${(name || formattedTitle)}\nIf somebody sending a group link on this group, they will be kicked automatically by bot.\n\nThank you.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Anti-group link feature was successfully *disabled*!`
}

exports.detectorOnAlready = () => {
    return `Anti-group link feature has been enabled before.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nYou've sent a group link!\nSorry, but you have to leave...\nNice knowing you~`
}

exports.levelingOn = () => {
    return `Leveling feature was successfully *enabled*!`
}

exports.dtectorOn = (name, formattedTitle) => {
    return `*「 ANTI YOUTUBE LINK 」*\n\nAnnouncement for all group members ${(name || formattedTitle)}\nIf somebody sending a youtube link on this group, they will be kicked automatically by bot.\n\nThank you.\n- Admin ${(name || formattedTitle)}`
}

exports.dtectorOff = () => {
    return `Anti-youtube link feature was successfully *disabled*!`
}

exports.dtectorOnAlready = () => {
    return `Anti-youtube link feature has been enabled before.`
}

exports.linkDtected = () => {
    return `*「 ANTI YOUTUBE LINK 」*\n\nYou've sent a youtube link!\nSorry, but you have to leave...\nNice knowing you~`
}

exports.deetectorOn = (name, formattedTitle) => {
    return `*「 ANTI SCAM LINK 」*\n\nAnnouncement for all group members ${(name || formattedTitle)}\nIf somebody sending a scam link on this group, they will be kicked automatically by bot.\n\nThank you.\n- Admin ${(name || formattedTitle)}`
}

exports.deetectorOff = () => {
    return `Anti-scam link feature was successfully *disabled*!`
}

exports.deetectorOnAlready = () => {
    return `Anti-scam link feature has been enabled before.`
}

exports.linkDeetected = () => {
    return `*「  SCAM LINK 」*\n\nYou've sent a scam link!\nSorry, but you have to leave...\nNice knowing you~`
}
exports.levelingOff = () => {
    return `Leveling feature was successfully *disabled*!`
}

exports.levelingOnAlready = () => {
    return `Leveling feature has been enabled before.`
}

exports.levelingNotOn = () => {
    return `Leveling feature hasn't been enabled!`
}

exports.levelNull = () => {
    return `You don't have any level yet!`
}

exports.welcome = (event) => {
    return `Welcome @${event.who.replace('@c.us', '')}!`
}

exports.welcomeOn = () => {
    return `Welcome feature was successfully *enabled*!`
}

exports.welcomeOff = () => {
    return `Welcome feature was successfully *disabled*!`
}

exports.welcomeOnAlready = () => {
    return `Welcome feature has been enabled before.`
}

exports.strictOnAlready = () => {
    return `*Strict Mode has been already enabled before.*`
}

exports.strictOn = (name) => {
    return `Smart Mode is now enabled on *${name}*\nthis mode will allow your group from being spammed\nwarning:spammers will be kicked if spammed`
}

exports.strictOff = (name) => {
    return `Smart Mode is now disabled on *${name}*`
}

exports.minimalDb = () => {
    return `Need at least *10* users that have a level in database!`
}

exports.autoStikOn = () => {
    return `Auto-sticker feature was successfully *enabled*!`
}

exports.autoStikOff = () => {
    return `Auto-sticker feature was successfully *enabled*!`
}

exports.autoStikOnAlready = () => {
    return `Auto-sticker feature has been enabled before.`
}

exports.afkOn = (pushname, reason) => {
    return `AFK *enabled*!\n\n➸ *Username*: ${pushname}\n➸ *Reason*: ${reason}`
}

exports.afkOnAlready = () => {
    return `AFK feature has been enabled before.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! The person is on AFK state, don't bother!\n➸ *Reason*: ${getReason}\n➸ *Since*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* is back from AFK, welcome~`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nOnly admins who can send message in this group.` 
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nAll members can send message in this group now.`
}

exports.notNum = (q) => {
    return `"${q}", are not a numbers!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Name*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Free*: ${free}\n➸ *Price*: ${price}\n➸ *Description*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Name*: ${nama}\n➸ *Price*: ${harga}\n➸ *Sold*: ${terjual}\n➸ *Location*: ${shop_location}\n➸ *Product link*: ${link_product}\n➸ *Description*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nYour account is successfully registered! Please check my message in your private chat ${pushname}~ :3`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAccount found!\n\n➸ *Name*: ${name}\n➸ *Age*: ${age}\n➸ *ID*: ${userId}\n➸ *Time registered*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Account with serial: *${serial}* not found!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Title*: ${result.title}\n➸ *Duration*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia is being shipped, please wait...`
}

exports.pcOnly = () => {
    return `This command can only be used in private chat!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nYou've sent a group link!\nSorry, but you have to leave...`
}

exports.ageOld = () => {
    return `You're too old for using this feature! Please go back to your youth to be able to using this feature.`
}

exports.fakeLink = () => {
    return `Ow, this link looks kinda suspicious, for the security of the members of this group I'm gonna kick you.\nBye~.`
}

exports.randomQuran = (ranquran) => {
    return `
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Surah name*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Meaning*: ${ranquran.data.result.arti}
*Number*: ${ranquran.data.result.nomor}
*Description*: ${ranquran.data.result.keterangan}
*Audio link*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
*List of hadees*:
1. Bukhari hadees has 6638 hadees
    _usage_: ${prefix}hadees bukhari 1
2. Muslim hadees has 4930 hadees
    _usage_: ${prefix}hadees muslim 25
3. Tirmidzi hadees has 3625 hadees
    _usage_: ${prefix}hadees tirmidzi 10
4. Nasai hadees has 5364 hadees
    _usage_: ${prefix}hadees nasai 6
5. Ahmad hadees 4305 hadees
    _usage_: ${prefix}hadees ahmad 5
6. Abu Daud hadees 4419 hadees
    _usage_: ${prefix}hadees abudaud 45
7. Malik hadees 1587 hadees
    _usage_: ${prefix}hadees malik 45
8. Ibnu Majah hadees 4285 hadees
    _usage_: ${prefix}hadees ibnumajah 8
9. Darimi hadees 2949 hadees
    _usage_: ${prefix}hadees darimi 3
    `
}

exports.menuText = () => {
    return `
╔══❉ *Text 𝐌𝐚𝐤𝐞𝐫 (Ruka)* ❉═══
║
║ For spaces, use *+*
║ Example: ${prefix}text1 neon good+morning
║
╟⊱ *${prefix}text1 burnpaper* _text_
╟⊱ *${prefix}text1 candlemug* _text_
╟⊱ *${prefix}text1 lovemsg* _text_
╟⊱ *${prefix}text1 mugflower* _text_
╟⊱ *${prefix}text1 narutobanner* _text_
╟⊱ *${prefix}text1 paperonglass* _text_
╟⊱ *${prefix}text1 romancetext* _text_
╟⊱ *${prefix}text1 shadowtext* _text_
╟⊱ *${prefix}text1 tiktokeffect* _text_
║
╚══❉ *RukaBot* ❉════
    `
}


exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

You run out of usage limit! Please do the following:
❏ *_Wait until 12:00 AM (GMT+7)_*
    `
}

exports.asmaulHusna = (assna) => {
    return `
───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──

*${assna.name}*
❏ *Number*: ${assna.number}
❏ *Transliteration*: ${assna.transliteration}
❏ *English*: ${assna.en.meaning}
    `
}

exports.levelup = (pushname, level, fetchXp, currentLevel, role) => {
    return`_*「 𝐿𝐸𝒱𝐸𝐿 𝒰𝒫 ! 」*_\n\n\n➸ *📃️Name*: ${pushname}\n➸ *🎯️XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *❤️Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *🔮️Role*: *${role}*\n\nCongrats!! 🎉🎉`
}

const botname = 'Ruka' 
var d = new Date()
var n = d.getHours()
var text = 'Konbanwa'
if (n > 12) text = 'Kon\'nichiwa'
if (n < 12) text = 'Ohayo0'

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `👋️Hi (❤ω❤) ${text} ${pushname}, I'm ${botname}!
    *ѕυρρσят υѕ ву ƒσℓℓσωιηg υѕ ση ιηѕтαgяαм* :https://instagram.com/ign_flextzy
        
   *ѕυρρσят му fb page* :https://www.facebook.com/flexplaysMl/
   *𝙎𝙤𝙪𝙧𝙘𝙚 𝙘𝙤𝙙𝙚 (dont forget to give a ⭐)* : https://github.com/debaji-db/Ruka

    *Commands might be disabled because of spamming, or by group admin*
    *DON'T CALL OR YOU'LL BE BLOCKED*

======================
➸ *Name*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Role*: ${role}
➸ *Premium*: ${premium}
======================

Total registered: *${jumlahUser}*

  *𝑇ℎ𝑒 𝑓𝑜𝑙𝑙𝑜𝑤𝑖𝑛𝑔 𝑚𝑒𝑛𝑢𝑠 𝑎𝑟𝑒 𝑎𝑣𝑎𝑖𝑙𝑎𝑏𝑙𝑒:*


     💈 🅳🅾🆆🅽🅻🅾🅰🅳🅴🆁 💈

𝟷. *${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔*
 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔 𝚟𝚒𝚍𝚎𝚘. 
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚏𝚋*
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔* 𝚟𝚒𝚍𝚎𝚘_𝚕𝚒𝚗𝚔

 𝟸. *${prefix}𝚢𝚝𝚖𝚙𝟹*
 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝚊𝚞𝚍𝚒𝚘.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚢𝚝𝚖𝚙𝟹* 𝚕𝚒𝚗𝚔
 
 𝟹. *${prefix}𝚢𝚝𝚖𝚙𝟺*
 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝚟𝚒𝚍𝚎𝚘.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚢𝚝𝚖𝚙𝟺* 𝚕𝚒𝚗𝚔
 
 4. *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔*
 𝙳𝚘𝚠𝚗𝚕𝚊𝚘𝚍 𝚃𝚒𝚔𝚃𝚘𝚔 𝚟𝚒𝚍𝚎𝚘.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔* 𝚕𝚒𝚗𝚔
 
 5. *${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛*
 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚃𝚠𝚒𝚝𝚝𝚎𝚛 𝚖𝚎𝚍𝚒𝚊.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚝𝚠𝚝*
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚠𝚒𝚝𝚎𝚛* 𝚕𝚒𝚗𝚔

 6. *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚙𝚒𝚌*
 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚃𝚒𝚔𝚃𝚘𝚔 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚙𝚒𝚌.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚙𝚒𝚌* 𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎
 
 7. *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖*
 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚃𝚒𝚔𝚃𝚘𝚔 𝚟𝚒𝚍𝚎𝚘 𝚠𝚒𝚝𝚑 𝚗𝚘 𝚆𝙼.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚝𝚔𝚝𝚗𝚘𝚠𝚖*
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖* 𝚕𝚒𝚗𝚔
 
 8. *${prefix}𝚖𝚘𝚍𝚍𝚛𝚘𝚒𝚍*
 𝚂𝚎𝚊𝚛𝚌𝚑 𝚏𝚘𝚛 𝚖𝚘𝚍 𝚘𝚗 𝚖𝚘𝚍𝚍𝚛𝚘𝚒𝚍.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚘𝚍𝚍𝚛𝚘𝚒𝚍* 𝙰𝙿𝙺_𝚗𝚊𝚖𝚎
 
 9. *${prefix}𝚑𝚊𝚙𝚙𝚢𝚖𝚘𝚍*
 𝚂𝚎𝚊𝚛𝚌𝚑 𝚏𝚘𝚛 𝚖𝚘𝚍 𝚘𝚗 𝚑𝚊𝚙𝚙𝚢𝚖𝚘𝚍.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚑𝚊𝚙𝚙𝚢𝚖𝚘𝚍* 𝙰𝙿𝙺_𝚗𝚊𝚖𝚎

 𝟷0. *${prefix}𝚕𝚒𝚗𝚎𝚍𝚕*
 𝙻𝚒𝚗𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛.
 𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
 𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚒𝚗𝚎𝚍𝚕* 𝚜𝚝𝚒𝚌𝚔𝚎𝚛_𝚕𝚒𝚗𝚔


        🧸 🅱🅾🆃  🧸

𝟷. *${prefix}𝚛𝚞𝚕𝚎𝚜*
𝙼𝚞𝚜𝚝 𝚛𝚎𝚊𝚍.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚛𝚞𝚕𝚎*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚛𝚞𝚕𝚎𝚜*

𝟸. *${prefix}𝚖𝚎𝚗𝚞*
𝙳𝚒𝚜𝚙𝚕𝚊𝚢𝚜 𝚊𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚎𝚗𝚞* 𝚒𝚗𝚍𝚎𝚡_𝚗𝚞𝚖𝚋𝚎𝚛

𝟹. *${prefix}𝚜𝚝𝚊𝚝𝚞𝚜*
𝙳𝚒𝚜𝚙𝚕𝚊𝚢𝚜 𝚋𝚘𝚝 𝚜𝚝𝚊𝚝𝚞𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚝𝚊𝚝𝚜*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚝𝚊𝚝𝚞𝚜*

𝟺. *${prefix}𝚕𝚒𝚜𝚝𝚋𝚕𝚘𝚌𝚔*
𝙲𝚑𝚎𝚌𝚔 𝚋𝚕𝚘𝚌𝚔𝚎𝚍 𝚗𝚞𝚖𝚋𝚎𝚛𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *listblock*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚒𝚜𝚝𝚋𝚕𝚘𝚌𝚔*

𝟻. *${prefix}𝚙𝚒𝚗𝚐*
𝙲𝚑𝚎𝚌𝚔 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚜𝚙𝚎𝚎𝚍.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚙*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚙𝚒𝚗𝚐*

𝟼. *${prefix}𝚍𝚎𝚕𝚎𝚝𝚎*
𝙳𝚎𝚕𝚎𝚝𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚏𝚛𝚘𝚖 𝚋𝚘𝚝𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚍𝚎𝚕*
𝚄𝚜𝚊𝚐𝚎: 𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝚍𝚎𝚕𝚎𝚝𝚎𝚍 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚍𝚎𝚕𝚎𝚝𝚎*.

𝟽. *${prefix}𝚛𝚎𝚙𝚘𝚛𝚝*
𝚁𝚎𝚙𝚘𝚛𝚝 𝚋𝚞𝚐𝚜 𝚝𝚘 owner.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚛𝚎𝚙𝚘𝚛𝚝* 𝚝𝚎𝚡𝚝

8. *${prefix}𝚓𝚘𝚒𝚗*
𝙹𝚘𝚒𝚗 𝚝𝚘 𝚐𝚛𝚘𝚞𝚙 𝚟𝚒𝚊 𝚕𝚒𝚗𝚔.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚓𝚘𝚒𝚗* 𝚐𝚛𝚘𝚞𝚙'𝚜_𝚕𝚒𝚗𝚔

9. *${prefix}𝚘𝚠𝚗𝚎𝚛𝚋𝚘𝚝*
𝚂𝚎𝚗𝚍 𝚘𝚠𝚗𝚎𝚛 𝚌𝚘𝚗𝚝𝚊𝚌𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚘𝚠𝚗𝚎𝚛𝚋𝚘𝚝*

𝟷0. *${prefix}𝚐𝚎𝚝𝚙𝚒𝚌*
𝚂𝚎𝚗𝚍 𝚞𝚜𝚎𝚛'𝚜 𝚙𝚛𝚘𝚏𝚒𝚕𝚎 𝚙𝚒𝚌.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚐𝚎𝚝𝚙𝚒𝚌* @𝚞𝚜𝚎𝚛/𝟼𝟸𝟾𝟷𝟸𝚡𝚡𝚡𝚡𝚡𝚡𝚡𝚡

𝟷1. *${prefix}𝚙𝚛𝚎𝚖𝚒𝚞𝚖𝚌𝚑𝚎𝚌𝚔*
𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝚊𝚌𝚝𝚒𝚟𝚎 𝚝𝚒𝚖𝚎 𝚌𝚑𝚎𝚌𝚔.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚌𝚎𝚔𝚙𝚛𝚎𝚖𝚒𝚞𝚖*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚙𝚛𝚎𝚖𝚒𝚞𝚖𝚌𝚑𝚎𝚌𝚔*

𝟷2. *${prefix}𝚙𝚛𝚎𝚖𝚒𝚞𝚖𝚕𝚒𝚜𝚝*
𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝚞𝚜𝚎𝚛𝚜 𝚕𝚒𝚜𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖𝚒𝚞𝚖*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚙𝚛𝚎𝚖𝚒𝚞𝚖𝚕𝚒𝚜𝚝*


       🎐 🅼🅸🆂🅲 🎐

𝟷. *${prefix}𝚜𝚊𝚢*
𝚃𝚑𝚎 𝚋𝚘𝚝 𝚠𝚒𝚕𝚕 𝚛𝚎𝚙𝚎𝚊𝚝 𝚢𝚘𝚞𝚛 𝚖𝚎𝚜𝚜𝚊𝚐𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚊𝚢* 𝚝𝚎𝚡𝚝

𝟸. *${prefix}𝚕𝚢𝚛𝚒𝚌𝚜*
𝚂𝚎𝚊𝚛𝚌𝚑 𝚏𝚘𝚛 𝚜𝚘𝚗𝚐 𝚕𝚢𝚛𝚒𝚌𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚢𝚛𝚒𝚌* 𝚜𝚘𝚗𝚐'𝚜_𝚝𝚒𝚝𝚕𝚎

𝟹. *${prefix}𝚜𝚑𝚘𝚛𝚝𝚕𝚒𝚗𝚔*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚊 𝚜𝚑𝚘𝚛𝚝𝚕𝚒𝚗𝚔.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚑𝚘𝚛𝚝𝚕𝚒𝚗𝚔* 𝚕𝚒𝚗𝚔

𝟺. *${prefix}𝚠𝚒𝚔𝚒en*
𝚂𝚎𝚗𝚍 𝚆𝚒𝚔𝚒𝚙𝚎𝚍𝚒𝚊 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚐𝚒𝚟𝚎𝚗 𝚝𝚎𝚡𝚝(en).
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *wikien*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚠𝚒𝚔𝚒𝚎𝚗* (text)

5. *${prefix}𝚒𝚐𝚜𝚝𝚊𝚕𝚔*
𝚂𝚝𝚊𝚕𝚔 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 𝚊𝚌𝚌𝚘𝚞𝚗𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *igstalk*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚒𝚐𝚜𝚝𝚊𝚕𝚔* 𝚒𝚐_𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎

6. *${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑*
𝚂𝚎𝚗𝚍𝚒𝚗𝚐 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝚜𝚎𝚊𝚛𝚌𝚑 𝚛𝚎𝚜𝚞𝚕𝚝𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚢𝚝𝚜*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑* 𝚚𝚞𝚎𝚛𝚢

7. *${prefix}𝚝𝚝𝚜*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚊 𝚃𝚎𝚡𝚝 𝚝𝚘 𝚂𝚙𝚎𝚎𝚌𝚑
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *tts*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚝𝚜* 𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎_𝚌𝚘𝚍𝚎 | 𝚝𝚎𝚡𝚝

8. *${prefix}𝚊𝚏𝚔*
𝚂𝚎𝚝 𝚢𝚘𝚞𝚛 𝚊𝚌𝚌𝚘𝚞𝚗𝚝 𝚝𝚘 𝙰𝙵𝙺 𝚖𝚘𝚍𝚎, 𝙸 𝚠𝚒𝚕𝚕 𝚝𝚑𝚎𝚖 𝚠𝚑𝚘 𝚖𝚎𝚗𝚝𝚒𝚘𝚗𝚎𝚍 𝚢𝚘𝚞.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *afk*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚏𝚔* 𝚛𝚎𝚊𝚜𝚘𝚗. 𝚂𝚎𝚗𝚍 𝚊𝚗𝚢 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚝𝚘 𝚐𝚛𝚘𝚞𝚙 𝚝𝚘 𝚍𝚒𝚜𝚊𝚋𝚕𝚎.

9. *${prefix}𝚏𝚒𝚗𝚍𝚜𝚝𝚒𝚌𝚔𝚎𝚛*
𝚂𝚎𝚊𝚛𝚌𝚑 𝚜𝚝𝚒𝚌𝚔𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚏𝚒𝚗𝚍𝚜𝚝𝚒𝚔𝚎𝚛*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚏𝚒𝚗𝚍𝚜𝚝𝚒𝚌𝚔𝚎𝚛* 𝚝𝚎𝚡𝚝

𝟷0. *${prefix}𝚖𝚊𝚝𝚑*
𝙰 𝚌𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛.
* = 𝚖𝚞𝚕𝚝𝚒𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗
+ = 𝚊𝚍𝚍𝚒𝚝𝚒𝚘𝚗
- = 𝚜𝚞𝚋𝚝𝚛𝚊𝚌𝚝𝚒𝚘𝚗
/ = 𝚍𝚒𝚟𝚒𝚜𝚒𝚘𝚗
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - math
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚊𝚝𝚑* 𝟷𝟸*𝟷𝟸

𝟷1. *${prefix}𝚙𝚕𝚊𝚢*
𝙿𝚕𝚊𝚢 𝚊𝚞𝚍𝚒𝚘 𝚏𝚛𝚘𝚖 𝚈𝚘𝚞𝚃𝚞𝚋𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *play*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚙𝚕𝚊𝚢* 𝚝𝚒𝚝𝚕𝚎

𝟷2. *${prefix}𝚕𝚒𝚗𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛*
𝙻𝚊𝚝𝚎𝚜𝚝 𝙻𝚒𝚗𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚕𝚒𝚗𝚎𝚜𝚝𝚒𝚔𝚎𝚛*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚒𝚗𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛*

𝟷3. *${prefix}𝚖𝚘𝚟𝚒𝚎*
𝚂𝚎𝚊𝚛𝚌𝚑 𝚏𝚘𝚛 𝚖𝚘𝚟𝚒𝚎𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚘𝚟𝚒𝚎* 𝚝𝚒𝚝𝚕𝚎

𝟷4. *${prefix}𝚛𝚎𝚖𝚒𝚗𝚍𝚎𝚛*
𝚁𝚎𝚖𝚒𝚗𝚍𝚎𝚛. 
*𝚜* - 𝚜𝚎𝚌𝚘𝚗𝚍𝚜
*𝚖* - 𝚖𝚒𝚗𝚞𝚝𝚎𝚜
*𝚑* - 𝚑𝚘𝚞𝚛𝚜
*𝚍* - 𝚍𝚊𝚢𝚜
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *reminder*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚛𝚎𝚖𝚒𝚗𝚍𝚎𝚛* 𝟷𝟶𝚜 | 𝚛𝚎𝚖𝚒𝚗𝚍𝚎𝚛_𝚖𝚎𝚜𝚜𝚊𝚐𝚎

𝟷5. *${prefix}𝚒𝚖𝚊𝚐𝚎𝚝𝚘𝚞𝚛𝚕*
𝙸𝚖𝚊𝚐𝚎 𝚞𝚙𝚕𝚘𝚊𝚍𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚒𝚖𝚐𝚝𝚘𝚞𝚛𝚕*
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚒𝚖𝚊𝚐𝚎𝚝𝚘𝚞𝚛𝚕* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚒𝚖𝚊𝚐𝚎𝚝𝚘𝚞𝚛𝚕*.

16. *${prefix}𝚝𝚛𝚎𝚗𝚍𝚒𝚗𝚐*
𝚃𝚠𝚒𝚝𝚝𝚎𝚛 𝚝𝚛𝚎𝚗𝚍𝚒𝚗𝚐𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: - *trending*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚛𝚎𝚗𝚍𝚒𝚗𝚐*

𝟷7. *${prefix}𝚎𝚖𝚊𝚒𝚕*
𝚂𝚎𝚗𝚍 𝚊𝚗 𝚎𝚖𝚊𝚒𝚕.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚎𝚖𝚊𝚒𝚕* 𝚎𝚖𝚊𝚒𝚕 | 𝚜𝚞𝚋𝚓𝚎𝚌𝚝 | 𝚖𝚎𝚜𝚜𝚊𝚐𝚎

18. *${prefix}𝚚𝚞𝚘𝚝𝚎𝚜*
𝚁𝚊𝚗𝚍𝚘𝚖 𝙸𝚗𝚍𝚘𝚗𝚎𝚜𝚒𝚊𝚗 𝚚𝚞𝚘𝚝𝚎𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚚𝚞𝚘𝚝𝚎𝚜*

19. *${prefix}𝚐𝚎𝚗𝚜𝚑𝚒𝚗𝚒𝚗𝚏𝚘*
𝙶𝚎𝚗𝚜𝚑𝚒𝚗 𝙸𝚖𝚙𝚊𝚌𝚝 𝚌𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛𝚜 𝚒𝚗𝚏𝚘.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚐𝚎𝚗𝚜𝚑𝚒𝚗*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚐𝚎𝚗𝚜𝚑𝚒𝚗𝚒𝚗𝚏𝚘* 𝚌𝚑𝚊𝚛𝚊_𝚗𝚊𝚖𝚎

20. *${prefix}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎*
𝚃𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎 𝚊 𝚝𝚎𝚡𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚝𝚛𝚊𝚗𝚜*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎* 𝚝𝚎𝚡𝚝 | 𝚌𝚘𝚍𝚎_𝚕𝚊𝚗𝚐

𝟸1. *${prefix}𝚌𝚘𝚟𝚒𝚍*
𝙲𝚑𝚎𝚌𝚔 𝚊 𝙲𝙾𝚅𝙸𝙳-𝟷𝟿 𝚌𝚊𝚜𝚎𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚌𝚘𝚛𝚘𝚗𝚊*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚌𝚘𝚟𝚒𝚍* 𝚗𝚊𝚝𝚒𝚘𝚗_𝚗𝚊𝚖𝚎

𝟸2. *${prefix}𝚝𝚘𝚖𝚙𝟹*
𝙲𝚘𝚗𝚟𝚎𝚛𝚝 𝚊 𝚟𝚒𝚍𝚎𝚘 𝚝𝚘 𝚊𝚞𝚍𝚒𝚘 𝚘𝚗𝚕𝚢 (𝙼𝙿𝟹).
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚊 𝚟𝚒𝚍𝚎𝚘 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚝𝚘𝚖𝚙𝟹* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚟𝚒𝚍𝚎𝚘 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚝𝚘𝚖𝚙𝟹*.

𝟸3. *${prefix}𝚝𝚝𝚙*
𝚃𝚎𝚡𝚝 𝚝𝚘 𝚜𝚝𝚒𝚌𝚔𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎𝙻 *${prefix}𝚝𝚝𝚙* 𝚝𝚎𝚡𝚝

24. *${prefix}translate*
translate a message.
𝚄𝚜𝚊𝚐𝚎: *${prefix}translate* (text)


    🪄 🆂🆃🅸🅲🅺🅴🆁 🪄

𝟷. *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚏𝚛𝚘𝚖 𝚒𝚖𝚊𝚐𝚎𝚜 𝚜𝚎𝚗𝚝 𝚘𝚛 𝚛𝚎𝚙𝚕𝚒𝚎𝚍.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚝𝚒𝚔𝚎𝚛*
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢  *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛* 

𝟸. *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚐𝚒𝚏*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚏𝚛𝚘𝚖 𝚟𝚒𝚍𝚎𝚘𝚜/𝙶𝙸𝙵𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚝𝚒𝚔𝚎𝚛𝚐𝚒𝚏*
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚟𝚒𝚍𝚎𝚘𝚜/𝙶𝙸𝙵𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚐𝚒𝚏* 

𝟹. *${prefix}𝚝𝚝𝚐*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚝𝚎𝚡𝚝 𝚝𝚘 𝙶𝙸𝙵 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚝𝚐* 𝚝𝚎𝚡𝚝

𝟺. *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚝𝚘𝚒𝚖𝚐*
𝙲𝚘𝚗𝚟𝚎𝚛𝚝 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚝𝚘 𝚒𝚖𝚊𝚐𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚝𝚒𝚔𝚎𝚛𝚝𝚘𝚒𝚖𝚐*
𝚄𝚜𝚊𝚐𝚎: 𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚝𝚘𝚒𝚖𝚐*.

𝟻. *${prefix}𝚎𝚖𝚘𝚓𝚒𝚜𝚝𝚒𝚌𝚔𝚎𝚛*
𝙲𝚘𝚗𝚟𝚎𝚛𝚝 𝚎𝚖𝚘𝚓𝚒 𝚝𝚘 𝚜𝚝𝚒𝚌𝚔𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚎𝚖𝚘𝚓𝚒𝚜𝚝𝚒𝚔𝚎𝚛*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚎𝚖𝚘𝚓𝚒𝚜𝚝𝚒𝚌𝚔𝚎𝚛* 𝚎𝚖𝚘𝚓𝚒

𝟼. *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚠𝚖*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚠𝚒𝚝𝚑 𝚖𝚎𝚝𝚊𝚍𝚊𝚝𝚊/𝚆𝙼.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚝𝚌𝚠𝚖*
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚠𝚖* 𝚙𝚊𝚌𝚔_𝚗𝚊𝚖𝚎 | 𝚊𝚞𝚝𝚑𝚘𝚛_𝚗𝚊𝚖𝚎 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚠𝚖* 𝚙𝚊𝚌𝚔_𝚗𝚊𝚖𝚎 | 𝚊𝚞𝚝𝚑𝚘𝚛_𝚗𝚊𝚖𝚎.

𝟽. *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚖𝚎𝚖𝚎*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚖𝚎𝚖𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚝𝚌𝚖𝚎𝚖𝚎*
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛* 𝚞𝚙𝚙𝚎𝚛_𝚝𝚎𝚡𝚝 | 𝚋𝚘𝚝𝚝𝚘𝚖_𝚝𝚎𝚡𝚝 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛* 𝚞𝚙𝚙𝚎𝚛_𝚝𝚎𝚡𝚝 | 𝚋𝚘𝚝𝚝𝚘𝚖_𝚝𝚎𝚡𝚝.

𝟾. *${prefix}𝚝𝚊𝚔𝚎𝚜𝚝𝚒𝚌𝚔*
𝙴𝚍𝚒𝚝 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚖𝚎𝚝𝚊𝚍𝚊𝚝𝚊.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: 𝚁𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚝𝚊𝚔𝚎𝚜𝚝𝚒𝚌𝚔* 𝚙𝚊𝚌𝚔_𝚗𝚊𝚖𝚎 | 𝚊𝚞𝚝𝚑𝚘𝚛_𝚗𝚊𝚖𝚎


   💌🆆🅴🅴🅱 🆂🅴🅲🆃🅸🅾🅽💌

𝟷. *${prefix}𝚗𝚎𝚔𝚘*
𝚂𝚎𝚗𝚍 𝚊 𝚗𝚎𝚔𝚘 𝚐𝚒𝚛𝚕 𝚙𝚑𝚘𝚝𝚘.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚎𝚔𝚘*

𝟸. *${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛*
𝚂𝚎𝚗𝚍 𝚊𝚗𝚒𝚖𝚎 𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚠𝚙*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛*

𝟹. *${prefix}𝚔𝚎𝚖𝚘𝚗𝚘*
𝚂𝚎𝚗𝚍 𝚔𝚎𝚖𝚘𝚗𝚘𝚖𝚒𝚖𝚒 𝚐𝚒𝚛𝚕 𝚙𝚑𝚘𝚝𝚘𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚔𝚎𝚖𝚘𝚗𝚘*

𝟺. *${prefix}𝚔𝚞𝚜𝚘𝚗𝚒𝚖𝚎*
𝙻𝚘𝚘𝚔 𝚏𝚘𝚛 𝚊𝚗𝚒𝚖𝚎 𝚒𝚗𝚏𝚘 𝚊𝚗𝚍 𝚋𝚊𝚝𝚌𝚑 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚕𝚒𝚗𝚔𝚜 𝚘𝚗 𝙺𝚞𝚜𝚘𝚗𝚒𝚖𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚔𝚞𝚜𝚘𝚗𝚒𝚖𝚎* 𝚊𝚗𝚒𝚖𝚎'𝚜_𝚝𝚒𝚝𝚕𝚎

𝟻. *${prefix}𝚔𝚘𝚖𝚒𝚔𝚞*
𝙻𝚘𝚘𝚔𝚒𝚗𝚐 𝚏𝚘𝚛 𝚖𝚊𝚗𝚐𝚊 𝚒𝚗𝚏𝚘 𝚊𝚗𝚍 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚕𝚒𝚗𝚔𝚜 𝚘𝚗 𝙺𝚘𝚖𝚒𝚔𝚞.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚔𝚘𝚖𝚒𝚔𝚞* 𝚖𝚊𝚗𝚐𝚊'𝚜_𝚝𝚒𝚝𝚕𝚎

𝟼. *${prefix}𝚠𝚊𝚒𝚝*
𝚂𝚎𝚊𝚛𝚌𝚑 𝚊𝚗𝚒𝚖𝚎 𝚜𝚘𝚞𝚛𝚌𝚎 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚜𝚌𝚛𝚎𝚎𝚗𝚜𝚑𝚘𝚝𝚜 𝚜𝚌𝚎𝚗𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚜𝚌𝚛𝚎𝚎𝚗𝚜𝚑𝚘𝚝𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚠𝚊𝚒𝚝* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚜𝚌𝚛𝚎𝚎𝚗𝚜𝚑𝚘𝚝𝚜 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚠𝚊𝚒𝚝*.

𝟽. *${prefix}𝚜𝚘𝚞𝚛𝚌𝚎*
𝙻𝚘𝚘𝚔 𝚏𝚘𝚛 𝚜𝚘𝚞𝚛𝚌𝚎𝚜 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚍𝚘𝚞𝚓𝚒𝚗 𝚙𝚊𝚗𝚎𝚕, 𝚒𝚕𝚕𝚞𝚜𝚝𝚛𝚊𝚝𝚒𝚘𝚗𝚜, 𝚊𝚗𝚍 𝚒𝚖𝚊𝚐𝚎𝚜 𝚛𝚎𝚕𝚊𝚝𝚎𝚍 𝚝𝚘 𝚊𝚗𝚒𝚖𝚎.

𝟾. *${prefix}𝚠𝚊𝚒𝚏𝚞*
𝚂𝚎𝚗𝚍 𝚛𝚊𝚗𝚍𝚘𝚖 𝚠𝚊𝚒𝚏𝚞 𝚙𝚑𝚘𝚝𝚘𝚜.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚠𝚊𝚒𝚏𝚞*

𝟿. *${prefix}𝚊𝚗𝚒𝚝𝚘𝚔𝚒*
𝙰𝚗𝚒𝚝𝚘𝚔𝚒 𝚏𝚊𝚗𝚜𝚞𝚋 𝚕𝚊𝚝𝚎𝚜𝚝 𝚞𝚙𝚍𝚊𝚝𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚗𝚒𝚝𝚘𝚔𝚒*

𝟷𝟶. *${prefix}𝚗𝚎𝚘𝚗𝚒𝚖𝚎*
𝙽𝚎𝚘𝚗𝚒𝚖𝚎 𝚏𝚊𝚗𝚜𝚞𝚋 𝚕𝚊𝚝𝚎𝚜𝚝 𝚞𝚙𝚍𝚊𝚝𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚎𝚘𝚗𝚒𝚖𝚎*

𝟷𝟷. *${prefix}𝚊𝚗𝚘𝚋𝚘𝚢*
𝙾𝚗-𝚐𝚘𝚒𝚗𝚐 𝚊𝚗𝚒𝚖𝚎 𝚘𝚗 𝙰𝚗𝚘𝚋𝚘𝚢 𝚏𝚊𝚗𝚜𝚞𝚋.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚗𝚘𝚋𝚘𝚢*

𝟷𝟸. *${prefix}𝚊𝚗𝚒𝚖𝚎*
𝙻𝚘𝚘𝚔𝚒𝚗𝚐 𝚏𝚘𝚛 𝚖𝚊𝚗𝚐𝚊 𝚒𝚗𝚏𝚘 𝚊𝚗𝚍 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚕𝚒𝚗𝚔𝚜 𝚘𝚗 𝙺𝚘𝚖𝚒𝚔𝚞.


     ⛱️🅵🆄🅽⛱️

1. *${prefix}𝚠𝚛𝚒𝚝𝚎*
𝙼𝚊𝚔𝚎 𝚗𝚘𝚝𝚎𝚜 𝚠𝚛𝚒𝚝𝚝𝚎𝚗 𝚒𝚗 𝚊 𝚋𝚘𝚘𝚔.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚗𝚞𝚕𝚒𝚜*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚠𝚛𝚒𝚝𝚎* 𝚝𝚎𝚡𝚝

2. *${prefix}𝚐𝚕𝚒𝚝𝚌𝚑𝚝𝚎𝚡𝚝*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚊 𝚐𝚕𝚒𝚝𝚌𝚑 𝚜𝚝𝚢𝚕𝚎𝚍 𝚝𝚎𝚡𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚐𝚕𝚒𝚝𝚎𝚡𝚝*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚐𝚕𝚒𝚝𝚌𝚑𝚝𝚎𝚡𝚝* 𝚝𝚎𝚡𝚝𝟷 | 𝚝𝚎𝚡𝚝𝟸

3. *${prefix}𝚜𝚒𝚖𝚒*
𝚂𝚒𝚖𝚒𝚂𝚒𝚖𝚒 𝚌𝚑𝚊𝚝. (𝙸𝚗𝚍𝚒𝚊/𝚓𝚊𝚙𝚊𝚗𝚎𝚜𝚎/𝚒𝚗𝚍𝚘𝚗𝚎𝚜𝚒𝚊𝚗/𝚑𝚒/𝚊𝚛𝚊𝚋)
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚒𝚖𝚒* 𝚝𝚎𝚡𝚝

4. *${prefix}𝚝𝚘𝚍*
𝙿𝚕𝚊𝚢 𝚝𝚛𝚞𝚝𝚑 𝚘𝚛 𝚍𝚊𝚛𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚝𝚘𝚍*

5. *${prefix}𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍*
𝙰𝚙𝚙𝚕𝚢 𝚊 𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍 𝚎𝚏𝚏𝚎𝚌𝚝 𝚝𝚘 𝚒𝚖𝚊𝚐𝚎.
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚜𝚘𝚖𝚎𝚘𝚗𝚎 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍* 𝚘𝚛 𝚢𝚘𝚞 𝚌𝚊𝚗 𝚍𝚒𝚛𝚎𝚌𝚝𝚕𝚢 𝚞𝚜𝚎 *${prefix}𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍*.

6. *${prefix}𝚔𝚒𝚜𝚜*
𝙺𝚒𝚜𝚜 𝚜𝚘𝚖𝚎𝚘𝚗𝚎 ( ͡° ͜ʖ ͡°).
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚔𝚒𝚜𝚜* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚔𝚒𝚜𝚜*.

7. *${prefix}𝚠𝚊𝚜𝚝𝚎𝚍*
𝙲𝚛𝚎𝚊𝚝𝚎 𝚊 𝚠𝚊𝚜𝚝𝚎𝚍 𝚎𝚏𝚏𝚎𝚌𝚝.
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚠𝚊𝚜𝚝𝚎𝚍* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚠𝚊𝚜𝚝𝚎𝚍*.


   🚨🅼🅾🅳🅴🆁🅰🆃🅸🅾🅽🚨

𝟷. *${prefix}𝚊𝚍𝚍*
𝙰𝚍𝚍 𝚞𝚜𝚎𝚛𝚜 𝚝𝚘 𝚐𝚛𝚘𝚞𝚙.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚍𝚍* 𝟿𝟷𝟿𝚡𝚡𝚡𝚡𝚡𝚡𝚡𝚡𝚡𝚡

𝟸. *${prefix}𝚔𝚒𝚌𝚔*
𝚁𝚎𝚖𝚘𝚟𝚎 𝚖𝚎𝚖𝚋𝚎𝚛𝚜 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚔𝚒𝚌𝚔* @𝚖𝚎𝚖𝚋𝚎𝚛𝟷

𝟹. *${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎*
𝙿𝚛𝚘𝚖𝚘𝚝𝚎 𝚖𝚎𝚖𝚋𝚎𝚛 𝚝𝚘 𝚋𝚎𝚌𝚘𝚖𝚎 𝚊𝚍𝚖𝚒𝚗.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎* @𝚖𝚎𝚖𝚋𝚎𝚛𝟷

𝟺. *${prefix}𝚍𝚎𝚖𝚘𝚝𝚎*
𝙳𝚎𝚖𝚘𝚝𝚎 𝚖𝚎𝚖𝚋𝚎𝚛 𝚏𝚛𝚘𝚖 𝚊𝚍𝚖𝚒𝚗.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚍𝚎𝚖𝚘𝚝𝚎* @𝚖𝚎𝚖𝚋𝚎𝚛𝟷

𝟻. *${prefix}𝚕𝚎𝚊𝚟𝚎*
𝙻𝚎𝚊𝚟𝚎 𝚋𝚘𝚝 𝚏𝚛𝚘𝚖 𝚐𝚛𝚘𝚞𝚙.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚊𝚟𝚎*

𝟼. *${prefix}𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎*
𝙼𝚎𝚗𝚝𝚒𝚘𝚗 𝚊𝚕𝚕 𝚐𝚛𝚘𝚞𝚙 𝚖𝚎𝚖𝚋𝚎𝚛𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎*

𝟽. *${prefix}𝚗𝚜𝚏𝚠*
𝚃𝚘𝚘𝚐𝚕𝚎 𝙽𝚂𝙵𝚆 𝚖𝚘𝚍𝚎.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚜𝚏𝚠* 𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎

𝟾. *${prefix}𝚐𝚛𝚘𝚞𝚙𝚒𝚌𝚘𝚗*
𝙲𝚑𝚊𝚗𝚐𝚎 𝚐𝚛𝚘𝚞𝚙 𝚒𝚌𝚘𝚗.
𝚄𝚜𝚊𝚐𝚎: 𝚂𝚎𝚗𝚍 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚐𝚛𝚘𝚞𝚙𝚒𝚌𝚘𝚗* 𝚘𝚛 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎𝚜 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚐𝚛𝚘𝚞𝚙𝚒𝚌𝚘𝚗*.

𝟿. *${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔*
𝚃𝚘𝚘𝚐𝚕𝚎 𝚊𝚗𝚝𝚒-𝚐𝚛𝚘𝚞𝚙 𝚕𝚒𝚗𝚔 𝚏𝚎𝚊𝚝𝚞𝚛𝚎.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔* 𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎

𝟷𝟶. *${prefix}𝚠𝚎𝚕𝚌𝚘𝚖𝚎*
𝚃𝚘𝚘𝚐𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎 𝚏𝚎𝚊𝚝𝚞𝚛𝚎.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚠𝚎𝚕𝚌𝚘𝚖𝚎* 𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎

𝟷𝟷. *${prefix}𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛*
𝚃𝚘𝚘𝚐𝚕𝚎 𝚊𝚞𝚝𝚘-𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚏𝚎𝚊𝚝𝚞𝚛𝚎. 𝙴𝚟𝚎𝚛𝚢 𝚜𝚎𝚗𝚍𝚎𝚍 𝚒𝚖𝚊𝚐𝚎 𝚠𝚒𝚕𝚕 𝚖𝚊𝚍𝚎 𝚒𝚗𝚝𝚘 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚔𝚎𝚛 𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚔*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚔𝚎𝚛* 𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎

𝟷𝟸. *${prefix}𝚊𝚗𝚝𝚒𝚗𝚜𝚏𝚠*
𝚃𝚘𝚘𝚐𝚕𝚎 𝚊𝚗𝚝𝚒-𝙽𝚂𝙵𝚆 𝚕𝚒𝚗𝚔.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚊𝚗𝚝𝚒𝚗𝚜𝚏𝚠* 𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎

𝟷𝟹. *${prefix}𝚖𝚞𝚝𝚎𝚐𝚌*
𝚂𝚎𝚝 𝚐𝚛𝚘𝚞𝚙 𝚝𝚘 𝚊𝚍𝚖𝚒𝚗 𝚘𝚗𝚕𝚢 𝚠𝚑𝚘 𝚌𝚊𝚗 𝚜𝚎𝚗𝚍 𝚊 𝚖𝚎𝚜𝚜𝚊𝚐𝚎.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚞𝚝𝚎𝚐𝚌* 𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎

14. *${prefix}groupinfo*
to check the group description.
𝚄𝚜𝚊𝚐𝚎: *${prefix}groupinfo*


     🔞🅽🆂🅵🆆🔞

𝟷. *${prefix}𝚕𝚎𝚠𝚍𝚜*
𝚂𝚎𝚗𝚍 𝚕𝚎𝚠𝚍 𝚊𝚗𝚒𝚖𝚎 𝚙𝚒𝚌𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚕𝚎𝚠𝚍*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚠𝚍𝚜*

𝟸. *${prefix}𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍𝚜*
𝚂𝚎𝚗𝚍 𝚞𝚙 𝚝𝚘 𝟻 𝚊𝚗𝚒𝚖𝚎 𝚕𝚎𝚠𝚍 𝚙𝚒𝚌𝚜. (𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙾𝙽𝙻𝚈)
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍𝚜 𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍 𝚖𝚕𝚎𝚠𝚍 𝚖𝚕𝚎𝚠𝚍𝚜*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍𝚜*

𝟹. *${prefix}𝚗𝚑𝚎𝚗𝚝𝚊𝚒*
𝚂𝚎𝚗𝚍𝚒𝚗𝚐 𝚍𝚘𝚞𝚓𝚒𝚗𝚜𝚑𝚒 𝚒𝚗𝚏𝚘 𝚏𝚛𝚘𝚖 𝚗𝙷𝚎𝚗𝚝𝚊𝚒.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚗𝚑*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚑𝚎𝚗𝚝𝚊𝚒* 𝚌𝚘𝚍𝚎

𝟺. *${prefix}𝚗𝚑𝚍𝚕*
𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚍𝚘𝚞𝚓𝚒𝚗 𝚏𝚛𝚘𝚖 𝚗𝙷𝚎𝚗𝚝𝚊𝚒 𝚊𝚜 𝚊 𝙿𝙳𝙵 𝚏𝚒𝚕𝚎. (𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙾𝙽𝙻𝚈)
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚑𝚍𝚕* 𝚌𝚘𝚍𝚎

𝟻. *${prefix}𝚗𝚎𝚔𝚘𝚙𝚘𝚒*
𝚂𝚎𝚗𝚍 𝚝𝚑𝚎 𝚕𝚊𝚝𝚎𝚜𝚝 𝚟𝚒𝚍𝚎𝚘 𝚕𝚒𝚗𝚔 𝙽𝚎𝚔𝚘𝚙𝚘𝚒.𝟷. *${prefix}𝚕𝚎𝚠𝚍𝚜*
𝚂𝚎𝚗𝚍 𝚕𝚎𝚠𝚍 𝚊𝚗𝚒𝚖𝚎 𝚙𝚒𝚌𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚕𝚎𝚠𝚍*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚠𝚍𝚜*

𝟸. *${prefix}𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍𝚜*
𝚂𝚎𝚗𝚍 𝚞𝚙 𝚝𝚘 𝟻 𝚊𝚗𝚒𝚖𝚎 𝚕𝚎𝚠𝚍 𝚙𝚒𝚌𝚜. (𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙾𝙽𝙻𝚈)
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍𝚜 𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍 𝚖𝚕𝚎𝚠𝚍 𝚖𝚕𝚎𝚠𝚍𝚜*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚞𝚕𝚝𝚒𝚕𝚎𝚠𝚍𝚜*

𝟹. *${prefix}𝚗𝚑𝚎𝚗𝚝𝚊𝚒*
𝚂𝚎𝚗𝚍𝚒𝚗𝚐 𝚍𝚘𝚞𝚓𝚒𝚗𝚜𝚑𝚒 𝚒𝚗𝚏𝚘 𝚏𝚛𝚘𝚖 𝚗𝙷𝚎𝚗𝚝𝚊𝚒.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚗𝚑*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚑𝚎𝚗𝚝𝚊𝚒* 𝚌𝚘𝚍𝚎

𝟺. *${prefix}𝚗𝚑𝚍𝚕*
𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚍𝚘𝚞𝚓𝚒𝚗 𝚏𝚛𝚘𝚖 𝚗𝙷𝚎𝚗𝚝𝚊𝚒 𝚊𝚜 𝚊 𝙿𝙳𝙵 𝚏𝚒𝚕𝚎. (𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙾𝙽𝙻𝚈)
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚑𝚍𝚕* 𝚌𝚘𝚍𝚎

𝟻. *${prefix}𝚗𝚎𝚔𝚘𝚙𝚘𝚒*
𝚂𝚎𝚗𝚍 𝚝𝚑𝚎 𝚕𝚊𝚝𝚎𝚜𝚝 𝚟𝚒𝚍𝚎𝚘 𝚕𝚒𝚗𝚔 𝙽𝚎𝚔𝚘𝚙𝚘𝚒.

𝟼. *${prefix}𝚖𝚞𝚕𝚝𝚒𝚏𝚎𝚝𝚒𝚜𝚑*
𝚂𝚎𝚗𝚍 𝚞𝚙 𝚝𝚘 𝟻 𝚏𝚎𝚝𝚒𝚜𝚑 𝚙𝚒𝚌𝚜. (𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙾𝙽𝙻𝚈)
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚖𝚏𝚎𝚝𝚒𝚜𝚑*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚖𝚞𝚕𝚝𝚒𝚏𝚎𝚝𝚒𝚜𝚑* 𝚊𝚛𝚖𝚙𝚒𝚝𝚜/𝚏𝚎𝚎𝚝𝚜/𝚝𝚑𝚒𝚐𝚑𝚜/𝚊𝚜𝚜/𝚋𝚘𝚘𝚋𝚜/𝚋𝚎𝚕𝚕𝚢/𝚜𝚒𝚍𝚎𝚋𝚘𝚘𝚋𝚜/𝚊𝚑𝚎𝚐𝚊𝚘

𝟽. *${prefix}𝚠𝚊𝚒𝚏𝚞𝟷𝟾*
𝚂𝚎𝚗𝚍 𝚛𝚊𝚗𝚍𝚘𝚖 𝙽𝚂𝙵𝚆 𝚠𝚊𝚒𝚏𝚞 𝚙𝚑𝚘𝚝𝚘𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚠𝚊𝚒𝚏𝚞𝟷𝟾*

𝟾. *${prefix}𝚏𝚎𝚝𝚒𝚜𝚑*
𝚂𝚎𝚗𝚍 𝚏𝚎𝚝𝚒𝚜𝚑 𝚙𝚒𝚌𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚏𝚎𝚝𝚒𝚜𝚑* 𝚊𝚛𝚖𝚙𝚒𝚝𝚜/𝚏𝚎𝚎𝚝𝚜/𝚝𝚑𝚒𝚐𝚑𝚜/𝚊𝚜𝚜/𝚋𝚘𝚘𝚋𝚜/𝚋𝚎𝚕𝚕𝚢/𝚜𝚒𝚍𝚎𝚋𝚘𝚘𝚋𝚜/𝚊𝚑𝚎𝚐𝚊𝚘

𝟿. *${prefix}𝚙𝚑𝚍𝚕*
𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚟𝚒𝚍𝚎𝚘𝚜 𝚏𝚛𝚘𝚖 𝙿𝚘𝚛𝚗𝚑𝚞𝚋.
𝚄𝚜𝚊𝚐𝚎 *${prefix}𝚙𝚑𝚍𝚕* 𝚕𝚒𝚗𝚔

𝟷𝟶. *${prefix}𝚢𝚞𝚛𝚒*
𝚂𝚎𝚗𝚍 𝚛𝚊𝚗𝚍𝚘𝚖 𝚢𝚞𝚛𝚒 𝚙𝚒𝚌𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚢𝚞𝚛𝚒*

𝟷𝟷. *${prefix}𝚕𝚎𝚠𝚍𝚊𝚟𝚊𝚝𝚊𝚛*
𝚂𝚎𝚗𝚍 𝚛𝚊𝚗𝚍𝚘𝚖 𝚕𝚎𝚠𝚍 𝚊𝚟𝚊𝚝𝚊𝚛𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚠𝚍𝚊𝚟𝚊𝚝𝚊𝚛*

𝟷𝟸. *${prefix}𝚏𝚎𝚖𝚍𝚘𝚖*
𝚂𝚎𝚗𝚍 𝚛𝚊𝚗𝚍𝚘𝚖 𝚏𝚎𝚖𝚍𝚘𝚖 𝚙𝚒𝚌𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚏𝚎𝚖𝚍𝚘𝚖*

𝟷𝟹. *${prefix}𝚗𝚑𝚜𝚎𝚊𝚛𝚌𝚑*
𝚗𝙷𝚎𝚗𝚝𝚊𝚒 𝚜𝚎𝚊𝚛𝚌𝚑.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚑𝚜𝚎𝚊𝚛𝚌𝚑* 𝚚𝚞𝚎𝚛𝚢

𝟷𝟺. *${prefix}𝚗𝚎𝚔𝚘𝚜𝚎𝚊𝚛𝚌𝚑*
𝙽𝚎𝚔𝚘𝚙𝚘𝚒 𝚜𝚎𝚊𝚛𝚌𝚑.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚎𝚔𝚘𝚜𝚎𝚊𝚛𝚌𝚑* 𝚚𝚞𝚎𝚛𝚢


     📚🅾🆆🅽🅴🆁📚
Hello Owner-sama ヽ(・∀・)ﾉ!

𝟷. *${prefix}𝚋𝚌*
𝙼𝚊𝚔𝚎 𝚊 𝚋𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚋𝚌* 𝚝𝚎𝚡𝚝

𝟸. *${prefix}𝚋𝚌𝚒𝚖𝚐*
𝙼𝚊𝚔𝚎 𝚊 𝚋𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 𝚠𝚒𝚝𝚑 𝚊𝚗 𝚒𝚖𝚊𝚐𝚎.
𝚄𝚜𝚊𝚐𝚎: 𝚛𝚎𝚙𝚕𝚢 𝚠𝚒𝚝𝚑 𝚊𝚗 𝚒𝚖𝚊𝚐𝚎 𝚘𝚛  𝚌𝚊𝚙𝚝𝚒𝚘𝚗 *${prefix}𝚋𝚌𝚒𝚖𝚐* 𝚝𝚎𝚡𝚝

𝟹. *${prefix}𝚌𝚕𝚎𝚊𝚛𝚊𝚕𝚕*
𝙳𝚎𝚕𝚎𝚝𝚎𝚜 𝚊𝚕𝚕 𝚌𝚑𝚊𝚝𝚜 𝚘𝚗 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚊𝚌𝚌𝚘𝚞𝚗𝚝.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚌𝚕𝚎𝚊𝚛𝚊𝚕𝚕*

𝟺. *${prefix}𝚐𝚎𝚝𝚜𝚎𝚜*
𝚃𝚊𝚔𝚎 𝚊 𝚜𝚌𝚛𝚎𝚎𝚗𝚜𝚑𝚘𝚝 𝚘𝚏 𝚝𝚑𝚎 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚊𝚌𝚌𝚘𝚞𝚗𝚝.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚐𝚎𝚝𝚜𝚎𝚜*

𝟻. *${prefix}𝚋𝚊𝚗 / un𝚋𝚊𝚗*
𝙰𝚍𝚍/𝚛𝚎𝚖𝚘𝚟𝚎 𝚋𝚊𝚗𝚗𝚎𝚍 𝚞𝚜𝚎𝚛𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚋𝚊𝚗*  @𝚞𝚜𝚎𝚛

𝟼. *${prefix}𝚕𝚎𝚊𝚟𝚎𝚊𝚕𝚕*
𝙻𝚎𝚊𝚟𝚎 𝚏𝚛𝚘𝚖 𝚊𝚕𝚕 𝚐𝚛𝚘𝚞𝚙𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚊𝚟𝚎𝚊𝚕𝚕*

7. *${prefix}𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗*
𝚂𝚑𝚞𝚝𝚍𝚘𝚠𝚗 𝚋𝚘𝚝.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗*

8. *${prefix}𝚙𝚛𝚎𝚖𝚒𝚞𝚖*
𝙰𝚍𝚍/𝚛𝚎𝚖𝚘𝚟𝚎 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚞𝚜𝚎𝚛𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚙𝚛𝚎𝚖𝚒𝚞𝚖* 𝚊𝚍𝚍/𝚍𝚎𝚕 @𝚞𝚜𝚎𝚛

𝟿. *${prefix}𝚜𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜*
𝚂𝚎𝚝 𝚊𝚋𝚘𝚞𝚝 𝚖𝚎.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚜𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜 𝚜𝚎𝚝𝚜𝚝𝚊𝚝*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚝𝚊𝚝𝚞𝚜* 𝚝𝚎𝚡𝚝

𝟷𝟶. *${prefix}𝚜𝚎𝚛𝚒𝚊𝚕*
𝙲𝚑𝚎𝚌𝚔 𝚞𝚜𝚎𝚛'𝚜 𝚜𝚎𝚛𝚒𝚊𝚕.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚜𝚎𝚛𝚒𝚊𝚕* 𝚞𝚜𝚎𝚛_𝚜𝚎𝚛𝚒𝚊𝚕𝟼. *${prefix}𝚎𝚟𝚊𝚕*

𝟷𝟷. *${prefix}𝚎𝚡𝚒𝚏*
𝙰𝚍𝚓𝚞𝚜𝚝 𝚢𝚘𝚞𝚛 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚆𝙼.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚎𝚡𝚒𝚏* 𝚙𝚊𝚌𝚔_𝚗𝚊𝚖𝚎 | 𝚊𝚞𝚝𝚑𝚘𝚛_𝚗𝚊𝚖𝚎

𝟷𝟸. *${prefix}𝚖𝚞𝚝𝚎*
𝙼𝚞𝚝𝚎 𝚊𝚕𝚕 𝚞𝚜𝚎𝚛𝚜.
𝚄𝚜𝚊𝚐𝚎: 𝚄𝚜𝚎 *${prefix}𝚖𝚞𝚝𝚎* 𝚝𝚘 𝚖𝚞𝚝𝚎 𝚊𝚗𝚍 𝚞𝚜𝚎 *${prefix}𝚖𝚞𝚝𝚎* 𝚘𝚗𝚌𝚎 𝚊𝚐𝚊𝚒𝚗 𝚝𝚘 𝚞𝚗𝚖𝚞𝚝𝚎.

𝟷𝟹. *${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎*
𝙲𝚑𝚊𝚗𝚐𝚎 𝚋𝚘𝚝'𝚜 𝚗𝚊𝚖𝚎. 𝙼𝚊𝚡𝚒𝚖𝚞𝚖 𝟸𝟻 𝚌𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛𝚜.
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚗𝚊𝚖𝚎* 𝚗𝚎𝚠_𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎

𝟷𝟺. *${prefix}𝚋𝚕𝚘𝚌𝚔/ un𝚋𝚕𝚘𝚌𝚔*
𝙱𝚕𝚘𝚌𝚔 𝚞𝚜𝚎𝚛.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: *𝚋𝚕𝚘c𝚔*
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚋𝚕𝚘𝚌𝚔* @𝚞𝚜𝚎𝚛/91𝟾𝟷𝟸𝚡𝚡𝚡𝚡𝚡𝚡𝚡𝚡


   🔮🅻🅴🆅🅴🅻🅸🅽🅶🔮

𝟷. *${prefix}𝚕𝚎𝚟𝚎𝚕*
𝙲𝚑𝚎𝚌𝚔 𝚢𝚘𝚞𝚛 𝚕𝚎𝚟𝚎𝚕.
𝙰𝚕𝚒𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚟𝚎𝚕*

𝟸. *${prefix}𝚕𝚎𝚊𝚍𝚎𝚛𝚋𝚘𝚊𝚛𝚍*
𝙲𝚑𝚎𝚌𝚔 𝚕𝚎𝚊𝚍𝚎𝚛𝚋𝚘𝚊𝚛𝚍.
𝙰𝚕𝚒𝚊𝚊𝚜𝚎𝚜: -
𝚄𝚜𝚊𝚐𝚎: *${prefix}𝚕𝚎𝚊𝚍𝚎𝚛𝚋𝚘𝚊𝚛𝚍*

𝙷𝚘𝚙𝚎 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚊 𝚐𝚛𝚎𝚊𝚝 𝚍𝚊𝚢 𝚊𝚑𝚎𝚊𝚍, 𝚄𝚠𝚄!`
}

exports.rules = () => {
    return `
    📢🆁🆄🅻🅴🆂📢

1. 𝘿𝙤 𝙉𝙊𝙏 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩. 
𝙋𝙚𝙣𝙖𝙡𝙩𝙮: *𝙒𝘼𝙍𝙉/𝙎𝙊𝙁𝙏 𝘽𝙇𝙊𝘾𝙆*

2. 𝘿𝙤 𝙉𝙊𝙏 𝙘𝙖𝙡𝙡 𝙗𝙤𝙩.
𝙋𝙚𝙣𝙖𝙡𝙩𝙮: *𝙎𝙊𝙁𝙏 𝘽𝙇𝙊𝘾𝙆*

3. 𝘿𝙤 𝙉𝙊𝙏 𝙚𝙭𝙥𝙡𝙤𝙞𝙩 𝙗𝙤𝙩𝙨.
𝙋𝙚𝙣𝙖𝙡𝙩𝙮: *𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝙉𝙏 𝘽𝙇𝙊𝘾𝙆*

𝙄𝙛 𝙩𝙝𝙚 𝙧𝙪𝙡𝙚𝙨 𝙖𝙧𝙚 𝙪𝙣𝙙𝙚𝙧𝙨𝙩𝙤𝙤𝙙, 𝙥𝙡𝙚𝙖𝙨𝙚 𝙩𝙮𝙥𝙚  *${prefix}𝙢𝙚𝙣𝙪* 𝙩𝙤 𝙜𝙚𝙩 𝙨𝙩𝙖𝙧𝙩𝙚𝙙!

𝙎𝙤𝙪𝙧𝙘𝙚 𝙘𝙤𝙙𝙚 (dont forget to give a ⭐):
https://github.com/debaji-db/Ruka
𝙬𝙖.𝙢𝙚/919366665173 (𝙛𝙗𝙞 𝙠𝙪𝙣)
    `
}

exports.tos = () => {
    return `
-----------------------------------------
 🎄[ TERMS OF SERVICE ]🎄
----------------------------------------
The owner/hoster of this bot is independent from the responsibility and supervision of the developer (Debajit).
Owner/hoster may plagiarize, add, delete, replace source code with notes *DO NOT SELL* this source code in any form.
If an error occurs, the first person you should contact is the owner/hoster.  

Contact person:
wa.me/919366665173 (Developer)

You guys can also support me to keep this bot up to date with:
919366665173 (GPay)

Thank you!

Fbi.`

}
