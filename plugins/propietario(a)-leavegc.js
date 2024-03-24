let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `${wm} 𝗚𝗿𝗮𝗰𝗶𝗮𝘀 , 𝗠𝗲 𝗥𝗲𝘁𝗶𝗿𝗼 𝗣𝗮𝗿𝗮 𝗩𝗼𝗹𝘃𝗲𝗿 𝗘𝘀𝗰𝗿𝗶𝗯𝗲𝗺𝗲 𝗔𝗹 +𝟱𝟭 𝟵𝟮𝟲 𝟵𝟯𝟯 𝟴𝟭𝟴`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler
