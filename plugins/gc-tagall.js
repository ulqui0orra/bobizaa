let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}*✦━━━━━━[ 𝕃𝕀𝔾ℍ𝕋 ]━━━━━━✦*
*⤹🔮⤸*
❂━━━ • ━━━╏🔮╏━━━ • ━━━❂

*⤹🔮 المنشن ⊰⚡⊱ الجماعي 🔮⤸*
\n` + users.map(v => '│◦❈↲ منور :) @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ 𝕃𝕀𝔾ℍ𝕋 ]━━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
