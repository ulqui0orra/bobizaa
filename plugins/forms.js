import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/d7ae77d1178f9de50825c.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*╭━─━━━≪『﷽』≫━━━─━╮*

*✦━─━⌠  الـفـعـالـيـات  ⌡━─━✦*

*❖↫استمارات ديث نوت*
*↫اعلان ديث نوت*
*↫لعب ديث نوت*
*↫نتائج ديث نوت*

*❖↫استمارات الفايروس*
*↫اعلان الفايروس*
*↫لعب الفايروس*
*↫نتائج الفايروس*

*❖↫استمارات البينياتا*
*↫اعلان البينياتا*
*↫لعب البينياتا*
*↫نتائج البينياتا*

*❖↫استمارات الطفيليات*
*↫اعلان الطفيليات*
*↫لعب الطفيليات*
*↫نتائج الطفيليات*

*❖↫استمارات مصاص الدماء*
*↫اعلان مصاص الدماء*
*↫لعب مصاص الدماء*
*↫نتائج مصاص الدماء*

*❖↫استمارات الجرس*
*↫اعلان الجرس*
*↫لعب الجرس*
*↫نتائج الجرس*

*❖↫استمارات القلوب*
*↫اعلان القلوب*
*↫لعب القلوب*
*↫نتائج القلوب*

*❖↫استمارات اليد الواحده*
*↫اعلان اليد الواحده*
*↫لعب اليد الواحده*
*↫نتائج اليد الواحده*

*❖↫استمارات ديمون سلاير*
*↫اعلان ديمون سلاير*
*↫لعب ديمون سلاير*
*↫نتائج ديمون سلاير*

*❖↫استمارات الاتحاد*
*↫اعلان الاتحاد*
*↫لعب الاتحاد*
*↫نتائج الاتحاد*

*❖↫استمارات اخر منشن*
*↫اعلان اخر منشن*
*↫لعب اخر منشن*
*↫نتائج اخر منشن*

*❖↫استمارات الشمعه*
*↫اعلان الشمعه*
*↫لعب الشمعه*
*↫نتائج الشمعه*

*❖↫استمارات باتل رويال*
*↫اعلان باتل رويال*
*↫لعب باتل رويال*
*↫نتائج باتل رويال*

*❖↫استمارات دراغون بول*
*↫اعلان دراغون بول*
*↫لعب دراغون بول*
*↫نتائج دراغون بول*

*❖↫استمارات السجن*
*↫اعلان السجن*
*↫لعب السجن*
*↫نتائج السجن*

*❖↫استمارات الايموجي المخفي*
*↫اعلان الايموجي المخفي*
*↫لعب الايموجي المخفي*
*↫نتائج الايموجي المخفي*

*❖↫استمارات سؤال مفاجئ*
*↫اعلان سؤال*
*↫جواب سؤال*

*❖↫استمارات طلب مفاجئ*
*↫اعلان طلب*
*↫جواب طلب*

*✦━─━─  الـطـرد و الانـــذارات و الاعــفــاء  ─━─━✦*

*❖↫استمارة طرد مؤبد*
*↫ .طرد مؤبد*

*❖↫استمارة انذار*
*↫ .انذار*

*❖↫استمارة انذارين*
*↫ .انذارين*

*❖↫استمارة اعفاء*
*↫ .اعفاء*

*❖↫استمارة ترقية*
*↫ .ترقيه*

*❖↫استمارة خروج مؤقت*
*↫ .خروج مؤقت*

*✦━─━─  الاسـتـقـبـال  ─━─━✦*

*❖↫استمارة الدخول*
*↫ .استماره*

*❖↫استمارة الترحيب*
*↫ .ترحيب*

*❖↫استمارة القوانين*
*↫ .القوانين*

*✦━─━─  تـحـويـل و تـغـيـيـر الـلـقـب و شـراء  ─━─━✦*

*❖↫استمارة تحويل*
*↫ .تحويل*

 *❖↫استمارة تغيير اللقب*
*↫ .تغيير لقب*

 *❖↫استمارة شراء
*↫ .شراء*

*✦━━━─━─༺༻─━─━━━✦*
`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇Light┇🤖┇Bot┇👑』',
body: null,
thumbnail: img,
sourceUrl: `https://telegra.ph/file/d7ae77d1178f9de50825c.jpg`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
}}
handler.command = /^(الاستمارات|استمارة|استمارات)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}