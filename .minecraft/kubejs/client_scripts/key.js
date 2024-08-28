ClientEvents.tick(event => {
  if (global.flyingspeedKey.consumeClick()) {
    event.player.sendData("global.flyingspeedKey.consumeClick")
  }
  if (global.nightvisionKey.consumeClick()) {
    event.player.sendData("global.nightvisionKey.consumeClick")
  }
  if (global.pearlKey.consumeClick()) {
    event.player.sendData("global.pearlKey.consumeClick")
  }
  if (global.vajraKey.consumeClick()) {
    event.player.sendData("global.vajraKey.consumeClick")
  }
})