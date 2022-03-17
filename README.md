<div align="center">
<img src="https://images6.alphacoders.com/113/thumbbig-1139611.webp" alt="Rukabot" width="500" />

# **RUKA BOT**
A simple and easy-to-use Whatsapp bot based on open-wa-automate-nodejs and written in Javascript

<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/debaji-db"><img src="https://avatars.githubusercontent.com/u/69307770?s=400&u=2bde7476446c504a43401a306a9f6f6c442a0bd1&v=4" height="128" width="128" /></a>

  <p align="center">
  <a href="https://github.com/debaji-db"><img title="Author" src="https://img.shields.io/badge/Author-debajidb-purple.svg?style=for-the-badge&logo=github" /></a>
</p>

 <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <img src="https://img.shields.io/badge/maintained%3F-yes-green.svg?style=flat" />
  
  # Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* [Tesseract](https://s.id/vftesseract)
* Any text editor

# Requirements Heroku
* [Chrome](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-chromedriver)
* [FFmpeg](https://elements.heroku.com/buildpacks/jonathanong/heroku-buildpack-ffmpeg-latest)
* [Tesseract](https://elements.heroku.com/buildpacks/matteotiziano/heroku-buildpack-tesseract)
* [Canvas](https://elements.heroku.com/buildpacks/automattic/node-canvas)

> Heroku hosting is not recommended for public group.
>

# Installation
## 📝 Cloning this repo
```cmd
> git clone https://github.com/debaji-db/Ruka.git
> cd Ruka
```

## ✍️ Editing the file
Edit the required value in `config.json`.
```json
{
    "ownerBot": "9193xxxxxxxx@c.us", 
    "prefix": "$",
    "uaOverride": "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    "nao": "api-key",
    "vhtear": "api-key",
    "melodic": "administrator",
    "tobz": "BotWeA",
    "lol": "api-key",
    "authorStick": "@fbi_kun",
    "packStick": "RukaBot"
}
```

`ownerBot`: your WhatsApp number.  
`prefix`: based on the latest update, you don't need to change the prefix, because this bot has multiple prefix.  
`uaOverride`: your user agent.  
`nao`: SauceNAO API key. You can get it [here](https://saucenao.com/user.php) by creating an account.  
`vhtear`: VHTear API key. You can get it [here](https://api.vhtear.com/) by purchasing his API key.  
`melodic`: MelodicXT API key. You can use `administrator` key.   
`tobz`: Tobz API key. You can use `BotWeA` key.   
`lol`: LolHuman API key. You can get it [here](https://lolhuman.herokuapp.com/) by creating an account.  
`authorStick`: name of the author sticker pack.  
`packStick`: name of the sticker pack.  

## 🗣️ Changing language
If you want to change the language to English, replace all `ind` function to `eng`.   
Example:
```js
ind.wrongFormat()
```
To:
```js
eng.wrongFormat()
```

## 🧾 Installing the Tesseract
* Download the file [here](https://s.id/vftesseract).
* After that, run downloaded file as Administrator.
* Complete the installation.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\Program Files\Tesseract-OCR;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've Tesseract installed, verify that it's working by running this command to see version number:
```cmd
> tesseract -version
```

## 🛠️ Installing the FFmpeg
* Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
* Extract the file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've FFmpeg installed, verify that it's working by running this command to see version number:
```cmd
> ffmpeg -version
```

## 🔍 Installing the dependencies
```cmd
> npm install
```

## 🆗 Running the bot
Regular node:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js
> pm2 monit
```
 # Known issue
## ESM error
To prevent this, please use `node-fetch` and `parse-ms` with v2.x version.
```cmd
> npm install node-fetch@2.6.5
> npm install parse-ms@2.1.0
```

# Features
If you want to unlock premium commands, please buy me a coffee at least 1 on Ko-fi platform.

|     Deploy       |  Availability  |
| :--------------: | :------------: |
| Heroku           |       ✔️       |
| Local            |       ✔️       |

|     Leveling     |  Availability  |
| :--------------: | :------------: |
| Leveling         |       ✔️       |

|     Sticker Maker     | Availability |
| :-------------------: | :----------: |
| Send/reply image      |      ✔️      |
| Send/reply GIF        |      ✔️      |
| Send/reply MP4        |      ✔️      |
| Text to sticker       |      ✔️      |
| Text to sticker GIF   |      ✔️      |
| Sticker to image      |      ✔️      |
| Sticker WM            |      ✔️      |
| Take sticker          |      ✔️      |

|      Downloader     | Availability |
| :-----------------: | :----------: |
| Facebook video      |      ✔️      |
| YouTube audio/video |      ✔️      |
| TikTok video        |      ✔️      |
| TikTok profile pic  |      ✔️      |
| Twitter video/image |      ✔️      |
| Instagram post      |      ✔️      |
| Instagram story     |      ✔️      |
| LK21                |      ✔️      |
| TikTok no WM        |      ✔️      |

|         Misc         | Availability |
| :------------------: | :----------: |
| OCR (Image to Text)  |      ✔️      |
| Say                  |      ✔️      |
| Search lyrics        |      ✔️      |
| Shortlink maker      |      ✔️      |
| Wikipedia (EN)       |      ✔️      |
| YouTube search       |      ✔️      |
| Text to speech       |      ✔️      |
| AFK                  |      ✔️      |
| Distance calculator  |      ✔️      |
| Sticker search       |      ✔️      |
| Calculator           |      ✔️      |
| Random contact       |      ✔️      |
| YouTube play         |      ✔️      |
| Whois                |      ✔️      |
| SMS gateway          |      ✔️      |
| Al-Qur'an tafseer    |      ✔️      |
| Al-Kitab search      |      ✔️      |
| LK21 scraper         |      ✔️      |
| Reminder             |      ✔️      |
| Image uploader       |      ✔️      |
| Sholat schedule      |      ✔️      |
| Latest Line stickers |      ✔️      |
| Check postage        |      ✔️      |
| Sending email        |      ✔️      |
| Random quotes        |      ✔️      |
| Genshin chara info   |      ✔️      |
| Bass boost           |      ✔️      |

|          Fun          | Availability |
| :-------------------: | :----------: |
| Weton jodoh           |      ✔️      |
| Horoscope             |      ✔️      |
| Harta tahta maker     |      ✔️      |
| Writing text maker    |      ✔️      |
| Glitch text maker     |      ✔️      |
| SimSimi chatbot       |      ✔️      |
| Blackpink logo maker  |      ✔️      |
| Pornhub logo maker    |      ✔️      |
| Galaxy text maker     |      ✔️      |
| Truth or dare         |      ✔️      |
| Asupan TikTok         |      ✔️      |
| PH comment maker      |      ✔️      |
| Triggered maker       |      ✔️      |
| Kiss image maker      |      ✔️      |
| 3D text maker         |      ✔️      |
| Freefire logo maker   |      ✔️      |
| Freefire banner maker |      ✔️      |
| Sliding text maker    |      ✔️      |
| Hero ML maker         |      ✔️      |
| Fire text maker       |      ✔️      |
| Couple balloon maker  |      ✔️      |
| Wasted maker          |      ✔️      |
| Cakl Lontong quiz     |      ✔️      |
| Hilih-ify text        |      ✔️      |
| Tebak gambar quiz     |      ✔️      |
| Random doge stickers  |      ✔️      |
| Dice                  |      ✔️      |

|       Weeb Zone       | Availability |
| :-------------------: | :----------: |
| Random neko girl      |      ✔️      |
| Random wallpaper      |      ✔️      |
| Random kemonomimi     |      ✔️      |
| Kusonime scraper      |      ✔️      |
| Komiku scraper        |      ✔️      |
| Random Video Loli     |      ✔️      |
| Anime tracer          |      ✔️      |
| Source finder         |      ✔️      |
| Random waifu pics     |      ✔️      |
| Anitoki latest update |      ✔️      |
| Random anime stickers |      ✔️      |
| Neonime latest update |      ✔️      |
| Anoboy on-going list  |      ✔️      |
| Search character      |      ✔️      |
| Sticker keywords      |      ✔️      |

|        Bot       | Availability |
| :--------------: | :----------: |
| Server usage     |      ✔️      |
| Blocked list     |      ✔️      |
| Ping             |      ✔️      |
| Delete messages  |      ✔️      |
| Bug report       |      ✔️      |
| Join group       |      ✔️      |
| Check serials    |      ✔️      |

|        Owner       | Availability |
| :----------------: | :----------: |
| Broadcasting       |      ✔️      |
| Broadcasting with img     |      ✔️      |
| Clear all messages |      ✔️      |
| Leave all groups   |      ✔️      |
| Get snapshot       |      ✔️      |
| Ban                |      ✔️      |
| Eval               |      ✔️      |
| Shutdown           |      ✔️      |
| Add premium user   |      ✔️      |
| Set bot's info     |      ✔️      |
| Mute bot           |      ✔️      |
| Block              |      ✔️      |
| Unblock            |      ✔️      |

|    Moderation    | Availability |
| :--------------: | :----------: |
| Add              |      ✔️      |
| Kick             |      ✔️      |
| Promote          |      ✔️      |
| Demote           |      ✔️      |
| Leave bot        |      ✔️      |
| Everyone         |      ✔️      |
| Toogle NSFW      |      ✔️      |
| Set group icon   |      ✔️      |
| Anti-group link  |      ✔️      |
| Toogle welcome   |      ✔️      |
| Auto-sticker     |      ✔️      |
| Mute group       |      ✔️      |
| Anti-NSFW link   |      ✔️      |
| Anti-porn        |    Premium   |

|        NSFW        | Availability |
| :----------------: | :----------: |
| Lewds              |      ✔️      |
| nHentai lookup     |      ✔️      |
| Fetish             |      ✔️      |
| Latest Nekopoi     |      ✔️      |
| Pornhub downloader |      ✔️      |
| Waifu 18+          |      ✔️      |
| Yuri               |      ✔️      |
| Femdom             |      ✔️      |
| Lewd avatars       |      ✔️      |
| nHentai search     |      ✔️      |
| nHentai downloader | Premium/Free |
| Multi-lewds        |    Premium   |
| Multi-fetish       |    Premium   |

# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`SlavyanDesu`](https://github.com/SlavyanDesu/) 
