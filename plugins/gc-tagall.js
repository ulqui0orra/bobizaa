let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(${text ? `${text}\n : ''}✦━━━━━━[ 𝕌𝕝𝕢𝕦𝕚𝕠𝕣𝕣𝕒 ]━━━━━━✦
⤹🔮⤸
❂━━━ • ━━━╏🔮╏━━━ • ━━━❂

⤹🔮 المنشن ⊰⚡⊱ الجماعي 🔮⤸
\n` + users.map(v => '│◦❈↲ منور :) @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ 𝕌𝕝𝕢𝕦𝕚𝕠𝕣𝕣𝕒 ]━━━━━━✦*', null, {
        mentions: users
    })
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
handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
