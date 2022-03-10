
// const obj = {
//     name : "ogogo",
//     age : 2,
//     countReset: 'js'
// }



// const {name,age} = obj
// console.log();



// const arr = [1,2,3,4]
// const [one,two] = arr
// console.log(one, two);

const {Telegraf, Markup} = require('telegraf')
require('dotenv').config()
const text = require('./constants')
const bot = new Telegraf(process.env.bot_token)


//Start
bot.start(ctx => { 
    ctx.reply(
        `Привет ${
            ctx.message.from.username ? ctx.message.from.username :
    'Привет гость ...'
    }`
    ) 
})
 
bot.help( ctx => ctx.reply(text.commands))
  

//пишем обработчика

bot.command ('course' , async ctx => {
    try {
        await ctx.replyWithHTML('<b>Наши курсы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('UX/UI', 'btn_ux'),
                Markup.button.callback('HTML', 'btn_html'),
            
            ],
            
                [Markup.button.callback('Frontend', 'btn_fe'),
            ]
            ] ))
    } catch(e){
        console.error(e);
    }
})
bot.launch()
