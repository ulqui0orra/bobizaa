import {toAudio} from '../lib/converter.js';

const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `الرد على الفيديو/الملاحظة الصوتية التي تريد تحويلها إلى صوت/mp3 مع التسمية التوضيحية *${usedPrefix + command}*`;
  const media = await q.download?.();
  if (!media) throw 'Can\'t download media';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw 'Can\'t convert media to audio';
  conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, {mimetype: 'audio/mp4'});
};
handler.help = ['tomp3'].map((v) => v + ' <reply>');
handler.tags = ['audio'];

handler.command = /^to(ريك|ل(ريك)?)$/i;

export default handler;
