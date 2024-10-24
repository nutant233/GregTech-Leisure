//priority: 99
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    event.shaped("gtlcore:warped_ender_pearl", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "minecraft:bone_meal",
        B: "minecraft:blaze_powder",
        D: "minecraft:ender_pearl"
    })

    event.shaped("kubejs:command_wand", [
        "  A",
        " B ",
        "B  "
    ], {
        A: "gtlcore:command_block_core",
        B: "gtceu:eternity_rod"
    })

    event.shaped("avaritia:extreme_crafting_table", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:exquisite_lapis_gem",
        B: "avaritia:crystal_matrix",
        C: "avaritia:double_compressed_crafting_table"
    })

    gtr.weather_control("1")
        .circuit(1)
        .duration(200)
        .EUt(30)

    gtr.weather_control("2")
        .circuit(2)
        .duration(200)
        .EUt(30)

    gtr.weather_control("3")
        .circuit(3)
        .duration(200)
        .EUt(30)

    gtr.block_conversion("1")
        .circuit(1)
        .duration(400)
        .EUt(128)

    gtr.slaughterhouse("1")
        .circuit(1)
        .duration(20)
        .EUt(128)

    gtr.slaughterhouse("2")
        .circuit(2)
        .duration(20)
        .EUt(128)

    gtr.space_elevator("1")
        .circuit(1)
        .duration(400)
        .CWUt(128)
        .EUt(GTValues.VA[GTValues.UV])

    gtr.door_of_create("1")
        .circuit(1)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)
        .dimension("minecraft:overworld")

    gtr.create_aggregation("1")
        .circuit(1)
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(20)
        .CWUt(GTValues.VA[GTValues.MAX])
        .dimension("kubejs:create")

    gtr.electric_blast_furnace("gtlcore:shining_obsidian")
        .itemInputs("minecraft:obsidian", "gtceu:vibrant_alloy_dust")
        .inputFluids("gtceu:glowstone 576")
        .itemOutputs("gtlcore:shining_obsidian")
        .EUt(480)
        .duration(600)
        .blastFurnaceTemp(2600)

    gtr.chemical_bath("gtlcore:ender_obsidian")
        .itemInputs("gtlcore:shining_obsidian")
        .inputFluids("gtceu:ender_eye 1152")
        .itemOutputs("gtlcore:ender_obsidian")
        .EUt(480)
        .duration(200)

    gtr.compressor("gtlcore:compressed_crafting_table")
        .itemInputs("64x minecraft:crafting_table")
        .itemOutputs("avaritia:compressed_crafting_table")
        .EUt(480)
        .duration(200)
})

PlayerEvents.loggedIn(event => {
    event.server.runCommand("say 当前版本是开发测试版本，不能保证内容的稳定性和完整性。如果您遇到任何问题或有任何建议，请访问GitHub提供反馈。")
    event.server.runCommand("say The current version is a development test version, which does not guarantee stability and completeness of content. If you encounter any issues or have suggestions, please go to GitHub to provide feedback.")
})

ServerEvents.entityLootTables(event => {
    event.addEntity("ad_astra:glacian_ram", l => {
        l.addPool(p => {
            p.addItem("gtlcore:glacio_spirit").weight(1)
            p.addItem("ad_astra:ice_shard").weight(999)
        })
    })
})