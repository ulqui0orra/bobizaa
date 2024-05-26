import { wallpaper } from "../lib/scrape.js";

let handler = async (m, { conn, command, text, usedPrefix }) => {
    let query = text
    if (!query) throw `مثال: \n\n*.خلفيه ولد*`;
    m.reply(wait);
    try {
        let wallpapers = await wallpaper(query);
        let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        let cap = "انتظر لحظة...\n";
        conn.sendMessage(m.chat, { image: { url: randomWallpaper }, caption: cap }, m);
    } catch (e) {
        console.log(e);
        m.reply(`حذث خطأ`);
    }
};
handler.help = ['wallpaper']
handler.tags = ['downloader']
handler.command = /^خلفية|خلفيه/i

export default handler