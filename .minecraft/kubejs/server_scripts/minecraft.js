//priority: 98
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    event.remove({ id: "minecraft:netherite_ingot" })
    event.remove({ id: "minecraft:ender_eye" })
    event.remove({ id: "minecraft:netherite_scrap" })
    event.remove({ id: "minecraft:netherite_scrap_from_blasting" })

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
        A: "kubejs:echobone",
        B: "gtceu:echo_shard_rod",
        D: "minecraft:sculk_sensor"
    })

    gtr.lightning_processor("gtceu:ghast_tear")
        .itemInputs("#forge:tiny_dusts/potassium", "#forge:tiny_dusts/lithium")
        .inputFluids("gtceu:salt_water 1000")
        .itemOutputs("minecraft:ghast_tear")
        .duration(400)
        .EUt(30)

    gtr.lightning_processor("minecraft:skeleton_skull")
        .circuit(1)
        .itemInputs("9x minecraft:bone")
        .itemOutputs("skeleton_skull")
        .duration(100)
        .EUt(120)

    gtr.extractor("gtceu:bones")
        .itemInputs("#minecraft:dirt")
        .chancedOutput("bone", 25, 0)
        .duration(100)
        .EUt(16)

    gtr.compressor("gtceu:spongebob")
        .itemInputs("2x #forge:foils/polycaprolactam")
        .itemOutputs("sponge")
        .duration(200)
        .EUt(2)

    gtr.lightning_processor("gtceu:nether_star_dust")
        .itemInputs("#forge:dusts/diamond", "#forge:dusts/iridium")
        .inputFluids("gtceu:rocket_fuel 1000", "gtceu:nether_air 8000")
        .itemOutputs("gtceu:nether_star_dust")
        .duration(200)
        .EUt(480)
        .addCondition(new GravityCondition(true))

    gtr.lightning_processor("minecraft:nether_star")
        .itemInputs("4x minecraft:soul_sand", "3x minecraft:wither_skeleton_skull")
        .itemOutputs("minecraft:nether_star")
        .duration(100)
        .EUt(120)
        .addCondition(new GravityCondition(true))

    gtr.lightning_processor("minecraft:reinforced_deepslate")
        .itemInputs("minecraft:deepslate", "gtceu:echo_shard_block", "4x kubejs:echobone")
        .inputFluids("gtceu:echo_shard 1440")
        .itemOutputs("minecraft:reinforced_deepslate")
        .duration(200)
        .EUt(480)

    gtr.lightning_processor("kubejs:echobone")
        .itemInputs("minecraft:bone")
        .inputFluids("gtceu:echo_shard 144")
        .itemOutputs("kubejs:echobone")
        .EUt(480)
        .duration(400)

    gtr.chemical_bath("minecraft:black_candle")
        .itemInputs("minecraft:string")
        .inputFluids("gtceu:oil 100")
        .itemOutputs("minecraft:black_candle")
        .EUt(120)
        .duration(200)

    gtr.sps_crafting("minecraft:sculk_catalyst")
        .itemInputs("minecraft:terracotta")
        .inputFluids("gtceu:mana 1000", "gtceu:echo_shard 100")
        .itemOutputs("minecraft:sculk_catalyst")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.compressor("minecraft:bedrock")
        .itemInputs("4x gtceu:bedrock_dust")
        .itemOutputs("minecraft:bedrock")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)

    gtr.lightning_processor("minecraft:glowstone_dust")
        .itemInputs("gtceu:gold_dust", "minecraft:redstone")
        .itemOutputs("2x minecraft:glowstone_dust")
        .EUt(30)
        .duration(200)

    gtr.lava_furnace("lava_furnace")
        .itemInputs("#forge:cobblestone")
        .outputFluids("minecraft:lava 1000")
        .EUt(16)
        .duration(200)

    gtr.lava_furnace("lava_furnace1")
        .itemInputs("#forge:stone")
        .outputFluids("minecraft:lava 1000")
        .EUt(16)
        .duration(200)

    gtr.lightning_processor("minecraft:prismarine")
        .itemInputs("minecraft:cobblestone")
        .inputFluids("gtceu:salt_water 10")
        .itemOutputs("minecraft:prismarine")
        .EUt(30)
        .duration(200)

    gtr.dragon_egg_copier("gtceu:dragon_egg_copier")
        .itemInputs("minecraft:dragon_egg")
        .inputFluids("gtceu:biohmediumsterilized 100")
        .itemOutputs("minecraft:dragon_egg")
        .chancedOutput("minecraft:dragon_egg", 2000, 1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.fermenter("minecraft:poisonous_potato")
        .itemInputs("minecraft:potato")
        .itemOutputs("minecraft:poisonous_potato")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    gtr.fermenter("minecraft:rotten_flesh")
        .itemInputs("gtceu:meat_dust")
        .itemOutputs("minecraft:rotten_flesh")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    gtr.electric_blast_furnace("minecraft:netherite_ingot")
        .itemInputs("minecraft:netherite_scrap", "ad_astra:calorite_ingot")
        .itemOutputs("minecraft:netherite_ingot")
        .inputFluids("gtceu:neon 100")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(6470)

    gtr.lightning_processor("minecraft:dragon_egg")
        .itemInputs("minecraft:egg", "64x kubejs:warped_ender_pearl")
        .inputFluids("gtceu:antimatter 1000", "gtceu:ender_eye 10000", "gtceu:sterilized_growth_medium 10000")
        .chancedOutput("minecraft:dragon_egg", 9000, 0)
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])

    gtr.lightning_processor("minecraft:crying_obsidian")
        .itemInputs("minecraft:obsidian")
        .inputFluids("gtceu:antimatter 10")
        .itemOutputs("minecraft:crying_obsidian")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("netherite_upgrade_smithing_template")
        .circuit(2)
        .notConsumable("minecraft:netherite_upgrade_smithing_template")
        .itemInputs("7x gtceu:diamond_dust", "minecraft:netherrack")
        .itemOutputs("minecraft:netherite_upgrade_smithing_template")
        .EUt(480)
        .duration(200)

    gtr.macerator("minecraft:wheat_seeds")
        .itemInputs("minecraft:wheat")
        .itemOutputs("64x minecraft:wheat_seeds")
        .EUt(2)
        .duration(200)

    gtr.chemical_bath("minecraft:netherrack")
        .itemInputs("minecraft:granite")
        .inputFluids("gtceu:liquid_nether_air 1000")
        .itemOutputs("minecraft:netherrack")
        .EUt(120)
        .duration(800)

    gtr.chemical_bath("minecraft:end_stone")
        .itemInputs("minecraft:andesite")
        .inputFluids("gtceu:liquid_ender_air 1000")
        .itemOutputs("minecraft:end_stone")
        .EUt(480)
        .duration(800)

    gtr.macerator("minecraft:prismarine_shard")
        .itemInputs("minecraft:prismarine")
        .itemOutputs("minecraft:prismarine_shard")
        .EUt(2)
        .duration(200)

    gtr.forge_hammer("minecraft:prismarine_crystals")
        .itemInputs("minecraft:prismarine_shard")
        .itemOutputs("minecraft:prismarine_crystals")
        .EUt(16)
        .duration(20)

    gtr.lightning_processor("minecraft:netherite_scrap")
        .itemInputs("minecraft:ancient_debris", "minecraft:prismarine_shard")
        .inputFluids("gtceu:nether_air 100")
        .itemOutputs("minecraft:netherite_scrap")
        .EUt(480)
        .duration(240)
})