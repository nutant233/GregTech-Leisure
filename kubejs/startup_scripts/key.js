StartupEvents.init(() => {
  if (!LDLib.isClient()) return
  const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping")
  const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW")
  const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")

  global.flyingspeedKey = new $KeyMapping("key.kubejs.flyingspeed", $GLFWkey.GLFW_KEY_X, "key.keybinding.kubejs")
  global.nightvisionKey = new $KeyMapping("key.kubejs.nightvision", $GLFWkey.GLFW_KEY_Z, "key.keybinding.kubejs")
  global.pearlKey = new $KeyMapping("key.kubejs.pearl", $GLFWkey.GLFW_KEY_Y, "key.keybinding.kubejs")
  global.vajraKey = new $KeyMapping("key.kubejs.vajra", $GLFWkey.GLFW_KEY_J, "key.keybinding.kubejs")

  $KeyMappingRegistry.register(global.flyingspeedKey)
  $KeyMappingRegistry.register(global.nightvisionKey)
  $KeyMappingRegistry.register(global.pearlKey)
  $KeyMappingRegistry.register(global.vajraKey)
})