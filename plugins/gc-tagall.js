import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(./language/${idioma}.json));
  const tradutor = _translate.plugins.gc_tagall;

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const userId = m.sender;
  const currentTime = Date.now();
  const cooldownTime = 5 * 60 * 60 * 1000; // 5 ساعات

  if (!global.tagallCooldowns) {
    global.tagallCooldowns = {};
  }

  if (global.tagallCooldowns[userId] && (currentTime - global.tagallCooldowns[userId] < cooldownTime)) {
    const timeRemaining = cooldownTime - (currentTime - global.tagallCooldowns[userId]);
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    m.reply(يرجى الانتظار ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية قبل استخدام هذا الأمر مرة أخرى.);
    return;
  }

  global.tagallCooldowns[userId] = currentTime;

  const pesan = args.join` `;
  const oi = ${tradutor.texto1[0]} ${pesan};
  let teks = ${tradutor.texto1[1]}  ${oi}\n\n${tradutor.texto1[2]}\n;

  for (const mem of participants) {
    const user = global.db.data.users[mem.id] || { registered: false };
    const name = user.name || 'مستخدم غير مسجل';
    const regStatus = user.registered ? '' : '❌';
    teks += ┣➥ @${mem.id.split('@')[0]} \n;
  }

  teks += *└*  *✦━━━━━━[ 𝕌𝕝𝕢𝕦𝕚𝕠𝕣𝕣𝕒 ]━━━━━━✦*;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^منشن$/i;
handler.admin = true;
handler.group = true;

export default handler;
