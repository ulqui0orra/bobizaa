import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
┇ مرحبا يا , ${conn.getName(m.sender)}!
┇ 🤖 أتمنى أنك بخير ♥ البوت اونلاين الآن 
┇ يمكنك إستخدامه عبر كتابه .اوامر
╰────────────────────
*─[ 𝕌𝕝𝕢𝕦𝕚𝕠𝕣𝕣𝕒 𝔹𝕠𝕥 ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(alive|حي|حى)$/i


export default handler
