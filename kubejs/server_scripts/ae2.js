//priority: 94
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    const tiers = [["ulv", 0], ["lv", 1], ["mv", 2], ["hv", 3], ["ev", 4], ["iv", 5], ["luv", 6], ["zpm", 7], ["uv", 8], ["uhv", 9], ["uev", 10], ["uiv", 11], ["uxv", 12], ["opv", 13], ["max", 14]]

    event.remove({ output: "ae2:certus_quartz_crystal", input: "ae2:quartz_block" })
    event.remove({ output: "ae2:blank_pattern" })
    event.replaceInput({ output: "expatternprovider:fishbig" }, "minecraft:pufferfish", "gtceu:magnetohydrodynamicallyconstrainedstarmatter_block")
    event.shapeless("infinitycells:infinity_cell", ["ae2:item_cell_housing", "kubejs:infinite_cell_component"])
    event.shapeless("infinitycells:infinity_fluid_cell", ["ae2:fluid_cell_housing", "kubejs:infinite_cell_component"])

    event.shaped("ae2:creative_energy_cell", [
        "AAA",
        "ADA",
        "AAA"
    ], {
        A: "ae2:dense_energy_cell",
        D: "gtceu:hv_field_generator"
    })

    gtr.forming_press("ae2:logic_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("#forge:plates/gold", "ae2:silicon", "#forge:plates/redstone")
        .itemOutputs("ae2:logic_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("ae2:logic_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("gtceu:gold_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:logic_processor")
        .duration(20)
        .EUt(480)

    gtr.forming_press("ae2:calculation_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("#forge:plates/certus_quartz", "ae2:silicon", "#forge:plates/redstone")
        .itemOutputs("ae2:calculation_processor")
        .duration(200)
        .EUt(30)


    gtr.forming_press("ae2:calculation_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("gtceu:certus_quartz_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:calculation_processor")
        .duration(20)
        .EUt(480)

    gtr.forming_press("ae2:engineering_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("#forge:plates/diamond", "ae2:silicon", "#forge:plates/redstone")
        .itemOutputs("ae2:engineering_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("ae2:engineering_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("gtceu:diamond_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:engineering_processor")
        .duration(20)
        .EUt(480)

    gtr.mixer("ae2:fluix_dust")
        .itemInputs("#forge:dusts/nether_quartz", "#forge:dusts/certus_quartz", "#forge:dusts/redstone")
        .itemOutputs("3x ae2:fluix_dust")
        .duration(200)
        .EUt(16)

    gtr.autoclave("ae2:fluix_crystal_1")
        .itemInputs("#forge:dusts/fluix")
        .inputFluids("water 250")
        .itemOutputs("ae2:fluix_crystal")
        .duration(1200)
        .EUt(24)

    gtr.autoclave("ae2:fluix_crystal_2")
        .itemInputs("#forge:dusts/fluix")
        .inputFluids("gtceu:distilled_water 50")
        .itemOutputs("ae2:fluix_crystal")
        .duration(600)
        .EUt(24)

    gtr.macerator("gtceu:silicon_dust")
        .itemInputs("ae2:silicon")
        .itemOutputs("gtceu:silicon_dust")
        .EUt(16)
        .duration(200)

    gtr.macerator('ae2:fluix_dust')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .EUt(2)
        .duration(240)

    gtr.assembler("ae2:fluix_covered_cable")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:rubber 4")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("ae2:fluix_covered_cable1")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:silicone_rubber 2")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("ae2:fluix_covered_cable2")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 1")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("ae2:blank_pattern_1")
        .itemInputs("ae2:quartz_glass", "#gtceu:circuits/ulv", "gtceu:glass_gem", "2x minecraft:glowstone_dust", "gtceu:small_iron_spring", "gtceu:double_iron_plate", "gtceu:nether_quartz_plate", "4x gtceu:polyvinyl_chloride_plate", "4x gtceu:wrought_iron_foil")
        .inputFluids("gtceu:glass 1296")
        .itemOutputs("ae2:blank_pattern")
        .EUt(120)
        .duration(200)

    gtr.assembler("ae2:blank_pattern_2")
        .itemInputs("ae2:quartz_glass", "#gtceu:circuits/lv", "gtceu:exquisite_glass_gem", "2x minecraft:glowstone_dust", "gtceu:small_iron_spring", "gtceu:double_iron_plate", "gtceu:nether_quartz_plate", "4x gtceu:polybenzimidazole_plate", "4x gtceu:wrought_iron_foil")
        .inputFluids("gtceu:glass 1296")
        .itemOutputs("16x ae2:blank_pattern")
        .EUt(1920)
        .duration(200)

    gtr.macerator("ae2:sky_dust")
        .itemInputs("ae2:sky_stone_block")
        .itemOutputs("ae2:sky_dust")
        .EUt(2)
        .duration(200)

    gtr.chemical_bath("ae2:flawless_budding_quartz")
        .itemInputs("ae2:flawed_budding_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("ae2:flawless_budding_quartz")
        .EUt(30)
        .duration(400)

    function getCellComponent(index) {
        return index > 4 ? `gtceu:cell_component_${4 ** (index - 5)}m` : `ae2:cell_component_${4 ** index}k`
    }

    for (let index = 0; index < 5; index++) {
        event.shapeless(`gtceu:${4 ** index}m_storage`, ["ae2:crafting_unit", getCellComponent(index + 5)])
        event.shapeless(`gtceu:item_storage_cell_${4 ** index}m`, ["ae2:item_cell_housing", getCellComponent(index + 5)])
        event.shapeless(`gtceu:fluid_storage_cell_${4 ** index}m`, ["ae2:item_cell_housing", getCellComponent(index + 5)])
        event.shaped(`gtceu:item_storage_cell_${4 ** index}m`, [
            "ABA",
            "BDB",
            "CCC"
        ], {
            A: "ae2:quartz_glass",
            B: "minecraft:redstone",
            C: "minecraft:iron_ingot",
            D: getCellComponent(index + 5)
        })
        event.shaped(`gtceu:fluid_storage_cell_${4 ** index}m`, [
            "ABA",
            "BDB",
            "CCC"
        ], {
            A: "ae2:quartz_glass",
            B: "minecraft:redstone",
            C: "minecraft:copper_ingot",
            D: getCellComponent(index + 5)
        })
    }

    for (let index = 1; index < 10; index++) {
        gtr.assembler(getCellComponent(index))
            .itemInputs(getCellComponent(index - 1), "2x #gtceu:circuits/" + tiers[index - 1][0], "ae2:logic_processor", index > 4 ? "ae2:engineering_processor" : "gtceu:redstone_plate", "ae2:calculation_processor", "gtceu:quartzite_plate")
            .inputFluids("gtceu:soldering_alloy 72")
            .itemOutputs(getCellComponent(index))
            .EUt(GTValues.VA[index - 1] / 4)
            .duration(200)
    }

    gtr.assembly_line("gtceu:256g_storage")
        .itemInputs("ae2:crafting_unit", "16x gtceu:cell_component_256m", "gtceu:data_bank", "16x gtceu:data_orb", "4x #gtceu:circuits/uhv", "4x gtceu:double_red_steel_plate")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:pcb_coolant 2000")
        .itemOutputs("gtceu:256g_storage")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("gtceu:256m_storage")).dataStack(Item.of("gtceu:data_stick")).EUt(GTValues.VA[GTValues.LuV]).duration(1200))

    gtr.assembly_line("kubejs:infinite_cell_component")
        .itemInputs("16x gtceu:256g_storage", "gtceu:data_bank", "16x gtceu:data_module", "4x #gtceu:circuits/uev", "16x gtceu:ruthenium_trinium_americium_neutronate_hex_wire", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:mutated_living_solder 20000", "gtceu:pcb_coolant 100000")
        .itemOutputs("kubejs:infinite_cell_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("gtceu:cell_component_256m")).dataStack(Item.of("gtceu:data_orb")).EUt(GTValues.VA[GTValues.UV]).duration(2400))

    for (let index = 1; index < 5; index++) {
        gtr.assembler(`mae2:${4 ** index}x_crafting_accelerator`)
            .itemInputs(index == 1 ? "ae2:crafting_accelerator" : `mae2:${4 ** (index - 1)}x_crafting_accelerator`, (4 ** index) + "x ae2:engineering_processor")
            .inputFluids("gtceu:soldering_alloy " + 72 * (2 ** index))
            .itemOutputs(`mae2:${4 ** index}x_crafting_accelerator`)
            .EUt(GTValues.VA[index - 1])
            .duration(200)
    }
})