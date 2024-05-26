let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `احتين علي احتك 🐦🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^الحمدلله$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ادام الله حمدك `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^امين$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` امين  `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^بتعمل ايه دلوقتي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` بكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` منور ✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `حاضر`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` عارفين ف اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وانت من اهل الخير حبيبي✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }  
  
 if (/^احبك الكيورا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` انا اكتر ✨🥹💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` انظر بعيد `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^باى|باي^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `باي`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^هلا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `هلا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^كيفك|عامل ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
   
if (/^👒$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` اتاك عمك يا ونبيصي اتفو `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

if (/دز|دزامها|دزها^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `دزها انت يكلب`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

if (/معطوب|عطب^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `انت المعطوب`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

if (/مين عمك^$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `طبعا قائدي الكيورا`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

 if (/^نيزوكو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` مزة الانمي ولا عزاء للحاقدين `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

}
 return !0 } 
 export default handler