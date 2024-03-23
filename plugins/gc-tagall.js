const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `╭──────────────────ღ\n│❏ 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐞𝐬 : *${participants.length}* ${oi}\n│\n│❏ 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞 𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐀𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝𝐞𝐬 🌱\n│\n`;
  for (const mem of participants) {
    teks += `│ღ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰──────────────────ღ`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
