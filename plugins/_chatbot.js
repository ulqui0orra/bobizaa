let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^بحبك|بعشقك|بموت فيك$/i.test(m.text)) { 
     responses = [ 
       'شكرا',  
       'اموت فيك يا قلبي',  
             'اعشقككككككك',  
                   'احبكككك',  
                       'لا دز '  
     ]; 
} else if (/^بوووووووووت|بوت|بوووت|$/i.test(m.text)) { 
     responses = [ 
       '*تفضل.*',  
              '*؟*',
                  '*نعم؟*', 
                    '*البوت شغال.*',
                      '*البوت اسمه الكيورا.*'
]; 
  }else if (/^الكيورا$/i.test(m.text)) { 
     responses = [ 
       '*؟*',  
          '*تفضل.*',  
               '*نعم؟*',  
    ]; 
  }else if (/^اوامر/i.test(m.text)) { 
     responses = [ 
              '*لا تنسي ال.*'   
     ]; 
   }else if (/^كيفك|كيف حالك| شو اخبارك|كيفك؟|كيف حالك؟|شو اخبارك؟$/i.test(m.text)) { 
     responses = [ 
              '*الحمدلله.*', 
                         '*الحمدلله علي كل شيء.*',  
                          '*الحمدلله بخير.*',  
                            '*الحمدلله علي كل حال.*',  
                                '*الحمدلله و انت؟*',  
                                '*الحمدلله علي كل شيء و انت؟*',  
                                 '*الحمدلله علي كل حال و انت؟*'
     ]; 
 }else if (/^كيورا$/i.test(m.text)) { 
     responses = [ 
              '*اللقب اسمه الكيورا و ليس كيورا.*'   
       ]; 
   }else if (/^هاي|هلا|هلو|هلوز|اهلا$/i.test(m.text)) { 
     responses = [ 
              '*قول السلام عليكم افضل.*'   
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
