import fs from 'fs'
import path from 'path'
const _fs= fs.promises
const FileType = require('file-type');

let handler = m => m
handler.all = async function (m) {
	

     let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`*/
    let media = await q.download()
    if (!media) throw '❎ Error al descargar medios'
  const { ext, mime } = await FileType.fromBuffer(Buffer.from(media,'base64'))
   await _fs.writeFile('../files/ok.'+ext, media)
   m.reply(`ok ${ext} ${mime}`)
  
  return !0
}

handler.admin = true
export default handler