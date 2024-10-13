ClientEvents.tick(event => {
  if (KeyBind.flyingspeedKey.consumeClick()) {
    event.player.sendData("global.flyingspeedKey.consumeClick")
  }
  if (KeyBind.nightvisionKey.consumeClick()) {
    event.player.sendData("global.nightvisionKey.consumeClick")
  }
  if (KeyBind.pearlKey.consumeClick()) {
    event.player.sendData("global.pearlKey.consumeClick")
  }
  if (KeyBind.vajraKey.consumeClick()) {
    event.player.sendData("global.vajraKey.consumeClick")
  }
})