import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
const _fs= fs.promises

let handler = async (m, { conn }) => {
   if (!m.isGroup){
   if(/(upload)/i.test(m.text)){
  if (!m.quoted) throw 'No es un archivo'
  let media = await m.quoted.download()
  var part = m.text.match(/upload=(.*$)/)[1]
   await _fs.writeFile('../files/'+part, media)
   m.reply(`ok`)
  }
 }
}

export default handler