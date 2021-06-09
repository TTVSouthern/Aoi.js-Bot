const Aoijs = require("aoi.js")
​
const bot = new Aoijs.Bot({
sharding: false, //if your bot is gonna become big
shardAmount: 2, //Sharding is only necessary for bots in 2,000+ Guilds
mobile: false, //change this to true or false if you want to 
token: "TOKEN", //Change this and go to discord.dev to get your token
prefix: "!" //You can change this to whatever you want
})

bot.onMessage() //makes your bot be able to use commands or say stuff
bot.loadCommands(`/commands`/) //Please create a folder called commands to use this

bot.status({
  text: "Change Me",
  type: "WATCHING", //If you change this to STREAMING add : url: "twitch.tv/yourusername"
  status: "idle" //offline + online + idle + dnd
})
