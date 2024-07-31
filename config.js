//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "arbe0243@gmail.com";
global.location = "India";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "India";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u";
global.website = process.env.GURL || "https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "";
global.sudo = process.env.SUDO || "917439317360";
global.owner = process.env.OWNER_NUMBER || "917439317360";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd3dFdiQ2ZqZXplRmwrdHQreHNKUEhuRGsrSllOYUNpdnMxY0RwSnducz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEJaUkZMSm9mbCtLKzBhcjV6a1lDYWhubmh3S1JPeis3Y1lrSklJTm5pMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRjJtTklOZE9sS1k2d0RaTFZxRDRVbEs3YW1LQy9hRktuZWtvRUxCTzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWd3F5Z2dXQkgzTkwyTkZMb2pJUEoxazc1Q1NZdWVnRHYvVUZDd0pzaGo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBINGJyekpCWW1LNklsQ3BiSUVzUWJCbnFIOTk3dDRwak1FTlFLby94azQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEyRWtEUFdiZjdvZjlFUTJISW5sYktScnhKUlVJVXJkbXJGUnh4UFRvbnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFzSy9NQlB1NmNWNVMvM0wrZWxGeHRmY0J2UkRaUUpWci9WNFNCMHVtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG41VUwxelVaQ25KMGx4WXFPTjV3MnZsVXJJd1J0V2ZGS0lYeUU5eUlETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjltejRBQXJJcmxwYlNHSUR2bWxWcEcyRUd0KzJMY1dYRjUyRUg3bW9BQWwvMk95ZU5JNHk2eC9wdHNtNndrYmgxVXFXcUQ5elFuZ0xaTTc5T0FJZ2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJ1SkRNNGlpVUVIdW1hWmNQSFlVYmZMNTBFMU9VQjZhdXRIUVpsMldmWWNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwMjI1OTY4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QkQ1NUYwRUIxREM4NzczQkM2RDRFRUJGNDJDNTE3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNDIwNjM5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTQ0MDIyNTk2ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODMwNTA5RUIxMzdDOUY3M0QyMEZCREExQjNCNTMxMkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQyMDY0MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTDliVUUwSVBRRUtKem9Fc0oya0NsUSIsInBob25lSWQiOiIwZDg1N2M1OC00YWJiLTQ5MzctYTM2OS02ZmE5ZjVjOTMwYTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODdrNDRMY3VpVVZkTnZTMjcwa01FT3o4amdrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRLcWs3YjVhNnBkU2EzcVpEdGxDZ2srcnl5Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSU1g1NU1SSyIsIm1lIjp7ImlkIjoiOTk0NDAyMjU5Njg4OjczQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOFpOOFpPCdmofwnZqF4oOdIOCjquOFpPCdmqvMuPCdkIPhnJTwnZCRzLjwnZqw4KOq8J2atcy4zLfqpYrwnZq0IPCfp6fgvKEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t5K3RZVURFSkNicUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJVZ1M4NU02My9EeHdEK3g0SThzdEsxY2pYVHk4djUrbDQ1cUNiVml2VXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9hblRXbFIyY2JoUjh2dU5BM3JEUHljZHEwTitpZ0ZzWVIxS1V6QjE1dTNCL1FESnBzZWduREVUUDZDd3lnclB0OTIxZlY3clRzTXlIekIrNngzWEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEUkd3STNCdVY4dFpLNkZMcEVjcGdLa1lGVjhtSyt2L2JRUERyRlVyQXA1ZGsxWVdUM2xMV1lhdVJvdS9heldna0xVVTlQazVXQ0NiRjdkWHJ3QnVqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5NDQwMjI1OTY4ODo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVVklFdk9UT3QvdzhjQS9zZUNQTExTdFhJMTA4dkwrZnBlT2FnbTFZcjFMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDIwNjM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU90bCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Made by Adrien`",
  author: process.env.PACK_AUTHER || "𝚇𝚅⃝ ࣪ㅤ𝚫̸𝐃᜔𝐑̸𝚰࣪𝚵̸̷ꥊ𝚴 🧧༡",
  packname: process.env.PACK_NAME || "🐻",
  botname: process.env.BOT_NAME || "BEAR_BOT",
  ownername: process.env.OWNER_NAME || "Adrien",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
