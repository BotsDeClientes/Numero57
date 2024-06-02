export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝗛𝗼𝗹𝗮 @${m.sender.split`@`[0]}, 𝗦𝗶 𝗗𝗲𝘀𝗲𝗲𝗮𝘀 𝗖𝗼𝗺𝗽𝗿𝗮𝗿 𝗕𝗼𝘁 𝗔 𝗕𝗼𝘁 𝗣𝗮𝗿𝗮 𝗚𝗿𝘂𝗽𝗼 𝗘𝘀𝗰𝗿𝗶𝗯𝗲𝗹𝗲 𝗔 : +57 313 8123203 𝗬 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗕𝗼𝘁 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 𝗘𝘀𝗰𝗿𝗶𝗯𝗲 𝗔 : +51 926 933 818`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
