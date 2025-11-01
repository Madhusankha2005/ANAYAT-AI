const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pRR2FjLzdXaXNOdGFOTmNwUDYvdENVVEcwaWk4cmxBOTNNbDdUeGsyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWJ5amx1MTU2U0I1VW5lYjZnK2JKSWk2UURmNUljekY2OTVPTzI1bUFXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSklsN2dvSmhJVVNwTTFoTHhidk5xYnZUN2EvK0V6bHE3ZE1MdmNNWG1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWG4rT3ZISDdNMWRWVm81OSttVURmZENzRjhKWCtGdHJGcjcyTnY0cFVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCcHQ3NG1TbFdpUEpSUHh6Q2xlVThrYmg5MFVwejVUMnRyV09SY0RXRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDaWhUL3pMUUV0SFdkQWlkeTlOcVVSWUgyNFZyZ1dwSzJQYzlQbHM4QXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU084eE15SWFFUkpZay9UU0hUcnVqNkRxZ3NNM0h2SjVCUUVEb0ZVTmgwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibENlSW5kU2pOd2YrUEJlekVmQ2lkMzF5UWNYQzRzYlZheGpvZUNkbVhWRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJzc2tHeFRUQzZyekd3akRtUU4ydkh2c1gvSkpFbEl3QTVPSVRRVmJQSk1XWjhsbit0OFBQbSszd1d2UTlQUXBlWDhFNmdIVmQ3NmgvdWhyV1h0bEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJnRlBLM0xRTTZrNFdsYksyREwraTFGL1VOOTBQMEtnWFFrdmRWTi9EaXI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzMTQyNTc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNDE3QUFEMjZGNEMzMkY0MEE4NUY4QjZEOURGNkNGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjIwMDgxMDR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzMTQyNTc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRTg4MTc3MzgyOTBGOTlBNUFFNjJENjdFMjEyRjlGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjIwMDgxMDR9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVMQUlOQU1EIiwibWUiOnsiaWQiOiI5NDc2MzE0MjU3NjoyM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzNDM2ODU1NTIxNzEyMzoyM0BsaWQiLCJuYW1lIjoi8J2QjC4g8J2Qii4g8J2QifCdkIDwnZCY8J2QgPCdkJLwnZCI8J2QjfCdkIbwnZCH8J2QhCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm1TelRNUWw3aVl5QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaFBaQmswc2dOajZOVlJmSnMwaUk3NVBTYVlBSjFoUFNYanBTNitIdUp4RT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMmMvc2R6VDhrSTNjVzFpd29XMStSWjVJM2U1cVNrR1ZHSFVqZ0dDMHArTHJnd2N2eWo1VDhSRVNWa0NZYVZIeGt4a21YU2FpN2ZINjNjV3d3aHlKQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InZnNWJQdjBwT29Ic2JlUXIyaFBobFdvVERydFVlb3VPODZTbzVnYk1DQUV4YlpaQUNlVzlvU0lvRmZQdVBzZlMwdEFjL1prVjJ4MWRwczFGTmx5a0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjMxNDI1NzY6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVQyUVpOTElEWStqVlVYeWJOSWlPK1QwbW1BQ2RZVDBsNDZVdXZoN2ljUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMDA4MTAwLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIwMiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
