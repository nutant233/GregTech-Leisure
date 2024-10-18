//priority: 100
const tiers = [["ulv", 0], ["lv", 1], ["mv", 2], ["hv", 3], ["ev", 4], ["iv", 5], ["luv", 6], ["zpm", 7], ["uv", 8], ["uhv", 9], ["uev", 10], ["uiv", 11], ["uxv", 12], ["opv", 13], ["max", 14]]
ServerEvents.tags("item", event => {
    const items = [
        "appflux:redstone_crystal",
        "ad_astra:iron_plate",
        "ad_astra:iron_rod",
        "ad_astra:steel_ingot",
        "ad_astra:steel_nugget",
        "ad_astra:steel_plate",
        "ad_astra:steel_rod",
        "ad_astra:steel_block"
    ]
    items.forEach((item) => {
        event.removeAllTagsFrom(item)
    })
    //minecraft
    const ores = [
        "minecraft:coal_ore",
        "minecraft:deepslate_coal_ore",
        "minecraft:iron_ore",
        "minecraft:deepslate_iron_ore",
        "minecraft:copper_ore",
        "minecraft:deepslate_copper_ore",
        "minecraft:gold_ore",
        "minecraft:deepslate_gold_ore",
        "minecraft:redstone_ore",
        "minecraft:deepslate_redstone_ore",
        "minecraft:emerald_ore",
        "minecraft:deepslate_emerald_ore",
        "minecraft:lapis_ore",
        "minecraft:deepslate_lapis_ore",
        "minecraft:diamond_ore",
        "minecraft:deepslate_diamond_ore",
        "minecraft:nether_gold_ore",
        "minecraft:nether_quartz_ore"]
    ores.forEach((ore) => {
        event.removeAllTagsFrom(ore)
    })

    //space_suit
    const space_suit_items = ["ad_astra:netherite_space_suit_items",
        "ad_astra:freeze_resistant_armor",
        "ad_astra:heat_resistant_armor",
        "ad_astra:space_suit_items"]
    space_suit_items.forEach(ssitem => {
        event.add(ssitem, ["gtceu:quarktech_chestplate",
            "gtceu:quarktech_leggings",
            "gtceu:quarktech_boots",
            "gtceu:advanced_quarktech_chestplate",
            "gtceu:quarktech_helmet",
            "avaritia:infinity_helmet",
            "avaritia:infinity_chestplate",
            "avaritia:infinity_pants",
            "avaritia:infinity_boots",
            "kubejs:space_fermium_helmet",
            "kubejs:space_fermium_chestplate",
            "kubejs:space_fermium_leggings",
            "kubejs:space_fermium_boots",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_helmet",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_chestplate",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_leggings",
            "kubejs:magnetohydrodynamicallyconstrainedstarmatter_boots"])
    })
})

ServerEvents.tags("fluid", event => {
    event.remove("forge:oxygen", "ad_astra:oxygen")
    event.remove("forge:hydrogen", "ad_astra:hydrogen")
    event.remove("forge:oil", "ad_astra:oil")
})