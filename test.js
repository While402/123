const mineflayer = require('mineflayer')
const mineflayerViewer = require('prismarine-viewer').mineflayer

const mineflayerPath = require.resolve('prismarine-viewer');
console.log(mineflayerPath);

const bot = mineflayer.createBot({
  host: 'localhost',
  username: 'Bot',
  version: "1.20"
})

bot.once('spawn', () => {
    bot.creative.startFlying()
    mineflayerViewer(bot, { port: 3007, firstPerson: true })
})