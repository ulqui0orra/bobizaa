const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^شراء/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
 
    conn.reply(m.chat, `
┌─「 الدفع 」
⌯ الكيمة : + ${count}💎 
⌯ الفلوس : -${xpperlimit * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `[❣️]~ اسفة معكش خبرة عشان تشتري ${count} ماس 💎`, m);
};
handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = ['شراء', 'شراءالكل'];

handler.disabled = false;

export default handler;