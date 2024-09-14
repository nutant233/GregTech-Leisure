//priority: 100
const tiers = [["ulv", 0], ["lv", 1], ["mv", 2], ["hv", 3], ["ev", 4], ["iv", 5], ["luv", 6], ["zpm", 7], ["uv", 8], ["uhv", 9], ["uev", 10], ["uiv", 11], ["uxv", 12], ["opv", 13], ["max", 14]]
ServerEvents.tags("item", event => {
    const items = [
        "ae2:certus_quartz_crystal",
        "ae2:certus_quartz_dust",
        "ae2:ender_dust",
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
    event.add("gtceu:circuits/ulv", "kubejs:basic_control_circuit")
    event.add("gtceu:circuits/lv", "kubejs:advanced_control_circuit")
    event.add("gtceu:circuits/mv", "kubejs:elite_control_circuit")
    event.add("gtceu:circuits/hv", "kubejs:ultimate_control_circuit")
    event.add("gtceu:circuits/ev", "kubejs:ultima_control_circuit")
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
    //gtceu
    event.remove("minecraft:planks", "gtceu:treated_wood_planks")
    event.add("gtceu:circuits/zpm", "kubejs:bioware_processor")
    event.add("gtceu:circuits/uv", ["kubejs:optical_processor", "kubejs:bioware_assembly"])
    event.add("gtceu:circuits/uhv", ["kubejs:exotic_processor", "kubejs:optical_assembly", "kubejs:bioware_computer"])
    event.add("gtceu:circuits/uev", ["kubejs:cosmic_processor", "kubejs:exotic_assembly", "kubejs:optical_computer", "kubejs:bioware_mainframe"])
    event.add("gtceu:circuits/uiv", ["kubejs:supracausal_processor", "kubejs:cosmic_assembly", "kubejs:exotic_computer", "kubejs:optical_mainframe"])
    event.add("gtceu:circuits/uxv", ["kubejs:supracausal_assembly", "kubejs:cosmi_computer", "kubejs:exotic_mainframe", "kubejs:cosmic_computer"])
    event.add("gtceu:circuits/opv", ["kubejs:supracausal_computer", "kubejs:cosmic_mainframe"])
    event.add("gtceu:circuits/max", "kubejs:supracausal_mainframe")

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

const blocks = ["gtlcore:fission_fuel_assembly",
    "gtlcore:supercritical_turbine_casing",
    "gtlcore:cooler",
    "gtceu:power_core",
    "gtlcore:1m_storage",
    "gtlcore:4m_storage",
    "gtlcore:16m_storage",
    "gtlcore:64m_storage",
    "gtlcore:256m_storage",
    "gtlcore:max_storage",
    "gtlcore:power_module",
    "gtlcore:power_module_2",
    "gtlcore:power_module_3",
    "gtlcore:power_module_4",
    "gtlcore:power_module_5",
    "gtlcore:law_filter_casing",
    "gtlcore:hyper_core",
    "gtlcore:super_computation_component",
    "gtlcore:super_cooler_component",
    "gtlcore:spacetimecontinuumripper",
    "gtlcore:spacetimebendingcore",
    "gtlcore:stellar_containment_casing",
    "gtlcore:advanced_stellar_containment_casing",
    "gtlcore:ultimate_stellar_containment_casing",
    "gtlcore:component_assembly_line_casing_lv",
    "gtlcore:component_assembly_line_casing_mv",
    "gtlcore:component_assembly_line_casing_hv",
    "gtlcore:component_assembly_line_casing_ev",
    "gtlcore:component_assembly_line_casing_iv",
    "gtlcore:component_assembly_line_casing_luv",
    "gtlcore:component_assembly_line_casing_zpm",
    "gtlcore:component_assembly_line_casing_uv",
    "gtlcore:component_assembly_line_casing_uhv",
    "gtlcore:component_assembly_line_casing_uev",
    "gtlcore:component_assembly_line_casing_uiv",
    "gtlcore:component_assembly_line_casing_uxv",
    "gtlcore:component_assembly_line_casing_opv",
    "gtlcore:component_assembly_line_casing_max",
    "gtlcore:qft_coil"]

ServerEvents.tags("block", event => {
    blocks.forEach((block) => {
        event.add("minecraft:mineable/pickaxe", block)
        event.add("forge:mineable/wrench", block)
    })
})

ServerEvents.blockLootTables(event => {
    blocks.forEach((block) => {
        event.addBlock(block, b => {
            b.addPool(p => {
                p.addItem(block)
            })
        })
    })
})

ServerEvents.tags("fluid", event => {
    event.remove("forge:oxygen", "ad_astra:oxygen")
    event.remove("forge:hydrogen", "ad_astra:hydrogen")
    event.remove("forge:oil", "ad_astra:oil")
})