
let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「✨  𝕌𝕝𝕢𝕦𝕚𝕠𝕣𝕣𝕒  ✨」─*\n*“${pickRandom(global.صراحه)}”*\n*└────「✨  𝔹𝕆𝕋  ✨」─*`, m)
}
handler.help = ['صراحه']
handler.tags = ['Reall']
handler.command = /^فكك/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.صراحه = [
"*ايرين*",
"*ميكاسا*",
"*ارمين*",
"*ايروين",
"*ليفاي*",
"*هانجي*",
"*ساشا*",
"*هيستوريا*",
"*ساشا*"
 ] 
