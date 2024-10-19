//priority: 98
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    event.smelting("minecraft:slime_ball", "gtceu:sticky_resin")
    event.smelting("minecraft:leather", "minecraft:rotten_flesh")

    event.shaped("minecraft:sculk_sensor", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "minecraft:echo_shard",
        B: "gtceu:echo_shard_dust",
        C: "minecraft:note_block",
        D: "minecraft:comparator"
    })

    event.shaped("minecraft:sculk_shrieker", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtlcore:echobone",
        B: "gtceu:echo_shard_rod",
        D: "minecraft:sculk_sensor"
    })

    gtr.compressor("gtlcore:netherite_block")
        .itemInputs("9x minecraft:netherite_ingot")
        .itemOutputs("minecraft:netherite_block")
        .duration(300)
        .EUt(2)

    gtr.alloy_smelter("gtlcore:netherite_ingot")
        .itemInputs("minecraft:netherite_block")
        .notConsumable("gtceu:ingot_casting_mold")
        .itemOutputs("9x minecraft:netherite_ingot")
        .duration(1188)
        .EUt(7)

    gtr.lightning_processor("gtlcore:ghast_tear")
        .itemInputs("gtceu:tiny_lithium_dust", "gtceu:tiny_potassium_dust")
        .inputFluids("gtceu:salt_water 1000")
        .itemOutputs("minecraft:ghast_tear")
        .duration(400)
        .EUt(30)

    gtr.lightning_processor("gtlcore:skeleton_skull")
        .circuit(1)
        .itemInputs("9x minecraft:bone")
        .itemOutputs("skeleton_skull")
        .duration(100)
        .EUt(120)

    gtr.extractor("gtlcore:bones")
        .itemInputs("#minecraft:dirt")
        .chancedOutput("bone", 25, 0)
        .duration(100)
        .EUt(16)

    gtr.compressor("gtlcore:spongebob")
        .itemInputs("2x #forge:foils/polycaprolactam")
        .itemOutputs("sponge")
        .duration(200)
        .EUt(2)

    gtr.lightning_processor("gtlcore:nether_star_dust")
        .itemInputs("#forge:dusts/diamond", "#forge:dusts/iridium")
        .inputFluids("gtceu:rocket_fuel 1000", "gtceu:nether_air 8000")
        .itemOutputs("gtceu:nether_star_dust")
        .duration(200)
        .EUt(480)
        .addCondition(new GravityCondition(true))

    gtr.lightning_processor("gtlcore:nether_star")
        .itemInputs("4x minecraft:soul_sand", "3x minecraft:wither_skeleton_skull")
        .itemOutputs("minecraft:nether_star")
        .duration(100)
        .EUt(120)
        .addCondition(new GravityCondition(true))

    gtr.lightning_processor("gtlcore:reinforced_deepslate")
        .itemInputs("minecraft:deepslate", "gtceu:echo_shard_block", "4x gtlcore:echobone")
        .inputFluids("gtceu:echo_shard 1440")
        .itemOutputs("minecraft:reinforced_deepslate")
        .duration(200)
        .EUt(480)

    gtr.lightning_processor("gtlcore:echobone")
        .itemInputs("minecraft:bone")
        .inputFluids("gtceu:echo_shard 144")
        .itemOutputs("gtlcore:echobone")
        .EUt(480)
        .duration(400)

    gtr.chemical_bath("gtlcore:black_candle")
        .itemInputs("minecraft:string")
        .inputFluids("gtceu:oil 100")
        .itemOutputs("minecraft:black_candle")
        .EUt(120)
        .duration(200)

    gtr.sps_crafting("gtlcore:sculk_catalyst")
        .itemInputs("minecraft:terracotta")
        .inputFluids("gtceu:mana 1000", "gtceu:echo_shard 100")
        .itemOutputs("minecraft:sculk_catalyst")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.compressor("gtlcore:bedrock")
        .itemInputs("4x gtceu:bedrock_dust")
        .itemOutputs("minecraft:bedrock")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)

    gtr.lightning_processor("gtlcore:glowstone_dust")
        .itemInputs("gtceu:gold_dust", "minecraft:redstone")
        .itemOutputs("2x minecraft:glowstone_dust")
        .EUt(30)
        .duration(200)

    gtr.lava_furnace("gtlcore:lava_furnace")
        .itemInputs("#forge:cobblestone")
        .outputFluids("minecraft:lava 1000")
        .EUt(16)
        .duration(200)

    gtr.lava_furnace("gtlcore:lava_furnace1")
        .itemInputs("#forge:stone")
        .outputFluids("minecraft:lava 1000")
        .EUt(16)
        .duration(200)

    gtr.lightning_processor("gtlcore:prismarine")
        .itemInputs("minecraft:cobblestone")
        .inputFluids("gtceu:salt_water 10")
        .itemOutputs("minecraft:prismarine")
        .EUt(30)
        .duration(200)

    gtr.dragon_egg_copier("gtlcore:dragon_egg_copier")
        .itemInputs("minecraft:dragon_egg")
        .inputFluids("gtceu:biohmediumsterilized 100")
        .itemOutputs("minecraft:dragon_egg")
        .chancedOutput("minecraft:dragon_egg", 2000, 1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.fermenter("gtlcore:poisonous_potato")
        .itemInputs("minecraft:potato")
        .itemOutputs("minecraft:poisonous_potato")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    gtr.fermenter("gtlcore:rotten_flesh")
        .itemInputs("gtceu:meat_dust")
        .itemOutputs("minecraft:rotten_flesh")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    gtr.electric_blast_furnace("gtlcore:netherite_ingot")
        .itemInputs("minecraft:netherite_scrap", "ad_astra:calorite_ingot")
        .itemOutputs("minecraft:netherite_ingot")
        .inputFluids("gtceu:neon 100")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(6470)

    gtr.lightning_processor("gtlcore:dragon_egg")
        .itemInputs("minecraft:egg", "64x gtlcore:warped_ender_pearl")
        .inputFluids("gtceu:antimatter 1000", "gtceu:ender_eye 10000", "gtceu:sterilized_growth_medium 10000")
        .chancedOutput("minecraft:dragon_egg", 9000, 0)
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])

    gtr.lightning_processor("gtlcore:crying_obsidian")
        .itemInputs("minecraft:obsidian")
        .inputFluids("gtceu:antimatter 10")
        .itemOutputs("minecraft:crying_obsidian")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:netherite_upgrade_smithing_template")
        .circuit(2)
        .notConsumable("minecraft:netherite_upgrade_smithing_template")
        .itemInputs("7x gtceu:diamond_dust", "minecraft:netherrack")
        .itemOutputs("minecraft:netherite_upgrade_smithing_template")
        .EUt(480)
        .duration(200)

    gtr.macerator("gtlcore:wheat_seeds")
        .itemInputs("minecraft:wheat")
        .itemOutputs("64x minecraft:wheat_seeds")
        .EUt(2)
        .duration(200)

    gtr.chemical_bath("gtlcore:netherrack")
        .itemInputs("minecraft:granite")
        .inputFluids("gtceu:liquid_nether_air 1000")
        .itemOutputs("minecraft:netherrack")
        .EUt(120)
        .duration(800)

    gtr.chemical_bath("gtlcore:end_stone")
        .itemInputs("minecraft:andesite")
        .inputFluids("gtceu:liquid_ender_air 1000")
        .itemOutputs("minecraft:end_stone")
        .EUt(480)
        .duration(800)

    gtr.macerator("gtlcore:prismarine_shard")
        .itemInputs("minecraft:prismarine")
        .itemOutputs("minecraft:prismarine_shard")
        .EUt(2)
        .duration(200)

    gtr.forge_hammer("gtlcore:prismarine_crystals")
        .itemInputs("minecraft:prismarine_shard")
        .itemOutputs("minecraft:prismarine_crystals")
        .EUt(16)
        .duration(20)

    gtr.lightning_processor("gtlcore:netherite_scrap")
        .itemInputs("minecraft:ancient_debris", "minecraft:prismarine_shard")
        .inputFluids("gtceu:nether_air 100")
        .itemOutputs("minecraft:netherite_scrap")
        .EUt(480)
        .duration(240)

    gtr.chemical_bath("gtlcore:sculk_vein")
        .itemInputs("minecraft:vine")
        .inputFluids("gtceu:echo_shard 10")
        .itemOutputs("minecraft:sculk_vein")
        .EUt(120)
        .duration(200)
})