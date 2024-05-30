// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `╭┅〘 𝗖𝗿𝗶𝘀 𝗫 𝗝𝗲𝗻𝗻𝗶 🇾🇪 〙
 | 𝗘𝘀𝘁𝗮 𝗧𝗼𝘁𝗮𝗹𝗺𝗲𝗻𝘁𝗲 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝗱𝗼 𝗟𝗹𝗮𝗺𝗮𝗱𝗮𝘀
 | 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝗱𝗼 𝗘𝘀𝗰𝗿𝗶𝗯𝗶𝗿 𝗔𝗹 𝗕𝗼𝘁
 | 𝗡𝗼 𝗔𝗴𝗿𝗲𝗴𝗮𝗿 𝗔𝗹 𝗕𝗼𝘁
╰┅〘 𝗖𝗿𝗶𝘀 𝗫 𝗝𝗲𝗻𝗻𝗶 🇾🇪 〙`, fkontak, m)}

if (/^Quiero un bot|como obtengo un bot?|Quiero un bot?|quiero un bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
conn.reply(m.chat,  `𝗘𝘀𝘁á𝘀 𝗜𝗻𝘁𝗲𝗿𝗲𝘀𝗮𝗱𝗼 𝗘𝗻 𝗢𝗯𝘁𝗲𝗻𝗲𝗿 𝗨𝗻 𝗕𝗼𝘁 🦍 ?

𝗣𝗶𝗻𝗴𝘂𝗶 𝗕𝗼𝘁 𝗧𝗶𝗲𝗻𝗲 𝗩𝗮𝗿𝗶𝗮𝘀 𝗢𝗽𝗰𝗶𝗼𝗻𝗲𝘀:

• 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗘𝗹 𝗕𝗼𝘁 𝗩𝗶𝗮 𝗣á𝗴𝗶𝗻𝗮 𝟮𝟰/𝟳
• 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗘𝗹 𝗕𝗼𝘁 𝗩𝗶𝗮 𝗔𝗽𝗸
• 𝗕𝗼𝘁 𝗣𝗮𝗿𝗮 𝗧𝘂 𝗚𝗿𝘂𝗽𝗼 𝟮𝟰/𝟳

> El Bot Estará Activo 24/7 🚀

𝗣𝘂𝗲𝗱𝗲𝘀 𝗦𝗼𝗹𝗶𝗰𝗶𝘁𝗮𝗿𝗹𝗼 𝗛𝗮𝗰𝗶𝗲𝗻𝗱𝗼 𝗨𝗻 𝗣𝗮𝗴𝗼 𝗔 𝗧𝗿𝗮𝘃é𝘀 𝗗𝗲 𝗣𝗮𝘆𝗽𝗮𝗹 𝗢 𝗬𝗮𝗽𝗲 🐧

💸 𝗣𝗮𝘆𝗽𝗮𝗹 :
https://www.paypal.com/paypalme/PinguiService

💵 𝗬𝗮𝗽𝗲 :
• 𝗡𝘂𝗺𝗲𝗿𝗼 : +51 926 933 818
• 𝗡𝗼𝗺𝗯𝗿𝗲 : 𝗖𝗿𝗶𝘀𝘁𝗵𝗼𝗳𝗲𝗿 𝗥𝗼𝗷𝗮𝘀

> Una Vez Hayas Realizado El Pago Escribele A Mi Creador Adjuntando La Captura Del Pago +51 926 933 818

> *GRACIAS POR PREFERIR PINGUI DIOS SEX 🐧*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})}
 
if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._

🍃 *_Para ver el menú de comandos puedes usar:_*
#menu

🐧 𝗣𝗶𝗻𝗴𝘂𝗶 𝗗𝗶𝗼𝘀 𝗦𝗲𝘅 🐧`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

