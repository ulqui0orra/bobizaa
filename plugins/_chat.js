let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^الكيورا بحبك|الكيورا عاوزه اتجوزك|بحبك|بموت فيك|نتجوز|الكيورا هنتجوز امتي|الكيورا انت ليا|الكيورا بموت فيك$/i.test(m.text)) { 
     responses = [ 
       'شكرا  ',  
       'هفكر في الموضوع',  
             'و انا',  
                   'استحيت',  
                         'خلاص لا اتكسف ',  
                               'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
                                     'طيب و بعدين '  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
              'وعليكم السلام ورحمة الله وبركاته' 
]; 
  }else if (/^الكيورا حكمه|حكمه|الكيورا حكمة|حكمة$/i.test(m.text)) { 
     responses = [ 
       '*لما السيجارة انطفت الصحابة اختفت ❤️‍🩹🚬*',  
          '*كنت عصفور كلونى عملت اسد صاحبونى 🦁👑*',  
              '*يابنات كفاية اشتغالات 🥱*',  
                  '*الكبير اللي مايقدرش سنو يستاهل ان يتقل منو 😌💞*',  
                   '*احنا صغيرين بس معلمين 🔞😎*',
                     '*دايخ في عالم بايخ 😪*',
                      '*اخرة الشقاوة عيش وحلاوة 😂💞*',
                       '*الله يحميكي من الميكانيكي 🔧*',
                        '*الحلوة من اليابان صاحبها راجل غلبان.. النزاهة بتاعتنا بس الظروف منعتنا 🤍😪*',
                         '*صاحب صاحبك علي عيبه و متصاحبش الي في جيبه 🐶*',
                          '*اتنين ملهمش امان الفرامل والنسوان 🦉*',
                           '*الحب خسارة في الناس الغدارة 🐕‍🦺*',
                            '*البطة المرتاحة للسفر والسياحة 🦆✨*',
                             '*أحب في الدنيا ثلاث.. أمي  ماما  الوالدة 💖🥰*',
                              '*تحياتي لمن دمر حياتي 🥷*',
                               '*عشقت السفر من غدر البشر 🤤💔*',
                                '*رضا الوالدين أهم من أبوك وأمك 🔒*',
                                 '*الرجولة مواقف والندالة دروس 🖇🕯*',
                                  '*على قد حالي وعيون الناس مش سايباني 💔👀*',
                                   '*اتنين ملهمش امان الصاحب والزمان 👐📅*',
                                     '*يارب البنات تخش الجيش 🤲*',
                                      '*الطبيب لما يتدلع الصيدلي يولع 😂🔥*',
                                       '*نحن نختلف عن الاخرون خالص ✨😂*',
                                        '*اللهم أعطهم ضعف ما تمنوه لي ☺️🤲*',
                                          '*يارب احفظ مصر والموتوسيكل 🤲🏍*',
                                           '*جرحك نساني ملامحك 💔😢*'
    ]; 
  }else if (/^فكك$/i.test(m.text)) { 
     responses = [ 
              '*غوكو*', 
                         '*غوهان*',  
                          '*غوتين*',  
                            '*فيجيتا*',  
                                '*بولما*',  
                                '*ترانكس*',  
                                '*تينشينهان*',  
                                '*يامتشا*', 
                                '*تشاوزو*',  
                                '*بيكولو*',  
                                '*كوريرين*',  
                                '*ساتان*',  
                                '*فيديل*',  
                                '*بان*',  
                                '*موتين روشي*', 
                                '*بابلز*',  
                                '*ديندي*',  
                                '*بُرا*',  
                                '*زين-اوه*',  
                                '*الدايشنكان*',  
                                '*راديتز*',  
                                '*نابا*', 
                                '*غولدا*',  
                                '*بورتر*',  
                                '*جيس*',  
                                '*ريكوم*',  
                                '*فريزا*',  
                                '*الاندرويد*',  
                                '*سيل*', 
                                '*برولي*',  
                                '*كولير*',  
                                '*ماجين بو*',  
                                '*بيبي*',  
                                '*سوبر 17*',  
                                '*اوميغا شينرون*',  
                                '*ايس شينرون*', 
                                '*جانيمبا*',  
                                '*كابتن غينيو*',  
                                '*تيرلز*',  
                                '*زاربون*',  
                                '*دودوريا*',  
                                '*زاماسو*', 
                                '*غوكو بلاك*',  
                                '*مورو*',  
                                '*ايرين*',  
                                '*ميكاسا*',  
                                '*ارمين*',  
                                '*راينر*',  
                                '*باراديس*', 
                                '*داريوس*',  
                                '*كيث شادس*',  
                                '*جان كيرشتاين*',  
                                '*ماركو*',  
                                '*كوني سبرينغر*',  
                                '*ساشا بلاوز*',  
                                '*كريستا لينز*', 
                                '*يومير*',  
                                '*فلوك فورستر*',  
                                '*ايروين سميث*',  
                                '*ليفاي أكرمان*',  
                                '*هانجي زوي*',  
                                '*مايك زاكاريوس*',  
                                '*موبليت بيرنر*', 
                                '*إلزي لانغنر*',  
                                '*توماس *',  
                                '*لويز *',  
                                '*هولغر *',  
                                '*ويم *',  
                                '*إلدُ جين*',  
                                '*بيترا رال*',  
                                '*غونتر شولتسُ*',  
                                '*هانيس *',  
                                '*دوت بيكسيس*',  
                                '*مارلو فرويدينبرك*',  
                                '*هيتش دريس*',  
                                '*بوريس فويلنر*', 
                                '*فريتز *',  
                                '*رود رايس*',  
                                '*فريدا رايس*',  
                                '*أوريلي *',  
                                '*ديلتوف *',  
                                '*جيرالد *',  
                                '*رودريك *', 
                                '*غريشا ييغر*',  
                                '**كارلا ييغر',  
                                '*سوني*',  
                                '*بين*',  
                                '*إيتشيغو كوروساكي*',  
                                '*روكيا كوتشيكي*',  
                                '*اينوي أوريهيمي*', 
                                '*أوريو إيشيدا*',  
                                '*ياستورا سادو*',  
                                '*ريوكين إيشيدا*',  
                                '*كارين كروساكي*',  
                                '*يوزو كروساكي*',  
                                '*تاتسوكي أريساوا*',  
                                '*جينتا هاناكاري*', 
                                '*أورورو تسوموغيا*',  
                                '*يامي ريالغو*',  
                                '*كويوتي ستارك*',  
                                '*باراغان لويسنبيرن*',  
                                '*تيير هاريبيل*',  
                                '*الكيورا شيفار*',  
                                '*نويتورا غيلغا*', 
                                '*غريمجو جاغاجكو*',  
                                '*زوماري رورو*',  
                                '*زايلوبورو غرانز*',  
                                '*آرونيرو آرويرو*',  
                                '*ليلينيت جينجربك*',  
                                '*إيميلو أباتشي*',  
                                '*ميلا روزا*', 
                                '*شيان سون سون*',  
                                '*نيليل تو أوديلشوفانك*',  
                                '*إيميلو أباتشي*',  
                                '*فورانشيسوكا ميلا روزا*',  
                                '*لوبي أنتينور*',  
                                '*غانتينبين موسكيدا*',  
                                '*وندروايز مارغيلا*', 
                                '*بيشي غاتيشي*',  
                                '*دوندونتشكا برستين*',  
                                '*غراند فيشر*',  
                                '*إيشين كوروساكي*',  
                                '*أوراهارا كيسكي*',  
                                '*يورويتشي شيهين*',  
                                '*تسوكابيشي*', 
                                '*غينريوساي شيغوكوني ياماموتو*',  
                                '*تشوجيرو ساساكيبي*',  
                                '*شينسوي كيوراكو*',  
                                '*ناناو إيسي*',  
                                '*سوي فون*',  
                                '*غينشيرو أوكيكيبا*',  
                                '*ماريتشيو أومايدا*', 
                                '*روجورو أوتوريباشي*',  
                                '*غين إيتشيمارو*',  
                                '*إيزورو كيبا*',  
                                '*ريستو أوناهانا*',  
                                '*إيساني كوتيتسو*',  
                                '*شينجي هيراكو*',  
                                '*مومو هيناموري*', 
                                '*سوسكي آيزن*',  
                                '*بياكويا كوتشيكي*',  
                                '*رينجي أباري*',  
                                '*تيتسوزايمون إيبا*',  
                                'شوهي هيساغي*',  
                                '*كينسي موغوروما*',  
                                '*كانامي توسين*', 
                                '*توشيرو هيتسوغايا*',  
                                '*رانغيكو ماتسوموتو*',  
                                '*كينباتشي زاراكي*',  
                                '*ياتشيرو كوساجيشي*',  
                                '*مايوري كوروتسوتشي*',  
                                '*نيمو كوروتسوتشي*',  
                                '*جوشيرو أوكيتاكي*', 
                                '*أوبيتو أوتشيها*',  
                                '*أوتاكاتا*',  
                                '*أوروتشيمارو*',  
                                '*إيتاتشي أوتشيها*',  
                                '*إينو يامانكا*',  
                                '*بوروتو أوزوماكي*',  
                                '*تسونادي*', 
                                '*تشوجي أكيميتشي*',  
                                '*توبيراما سينجو*',  
                                '*جيرايا*',  
                                '*دانزو شيمورا*',  
                                '*ديدارا*',  
                                '*روك لي*',  
                                '*رين نوهارا*', 
                                '*زابوزا موموشي*',  
                                '*سارادا أوتشيها*',  
                                '*ساسوكي أوتشيها*',  
                                '*ساكورا هارونو*',  
                                '*ساي يامانكا*',  
                                '*شيكامارو نارا*',  
                                '*غارا*', 
                                '*كارين (ناروتو)*',  
                                '*كاكاشي هاتاكي*',  
                                '*كوريناي يوهي*',  
                                '*كوشينا أوزوماكي*',  
                                '*كيبا إينوزوكا*',  
                                '*مادارا أوتشيها*',  
                                '*مايت غاي*', 
                                '*ميناتو ناميكازي*',  
                                '*ناروتو أوزوماكي*',  
                                '*هيروزين ساروتوبي*',  
                                '*هيناتا*', 
                                '*ياماتو*',  
                                '*هاشيراما سينجو*',  
                                '*كوكيتشي موتا*', 
                                '*ماساميتشي ياجا*',  
                                '*ميجومي فوشيغورو*',  
                                '*يوجي إيتادوري*',  
                                '*توجا إنوماكي*',  
                                '*كينتو نانامي*',  
                                '*أوي تودو*',  
                                '*ماهيتو*', 
                                '*سوكونا*',  
                                '*ساتورو غوجو*'
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
