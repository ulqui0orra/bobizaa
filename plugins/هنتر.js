import fetch from 'node-fetch'
import { pinterest } from '../lib/scrape.js'

let handler = async (m, { conn, command, text, usedPrefix }) => {

  try {
    const hasil = await pinterest('Hunter × Hunter 4K');
    let gambarUrls = hasil.slice(0, 20); 

    for (let i = gambarUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gambarUrls[i], gambarUrls[j]] = [gambarUrls[j], gambarUrls[i]];
    }

    for (let i = 0; i < 5; i++) {
      let imageUrl = gambarUrls[i];
      let imageRes = await fetch(imageUrl);
      let imageBuffer = await imageRes.buffer();

      await conn.sendFile(m.chat, imageBuffer, 'Dragon-ball-z.jpg', '');

      await new Promise(resolve => setTimeout(resolve, 500));
    }
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Error', m)
  }
}

handler.help = ['hunter']
handler.tags = ['anime']
handler.command = /^هنتر/i
export default handler
