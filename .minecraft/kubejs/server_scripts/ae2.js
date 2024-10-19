//priority: 94
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    event.shapeless("gtlcore:item_infinity_cell", ["ae2:item_cell_housing", "gtlcore:infinite_cell_component"])
    event.shapeless("gtlcore:fluid_infinity_cell", ["ae2:fluid_cell_housing", "gtlcore:infinite_cell_component"])
    event.shapeless("gtlcore:pattern_modifier", "expatternprovider:pattern_modifier")

    event.shaped("ae2:creative_energy_cell", [
        "AAA",
        "ADA",
        "AAA"
    ], {
        A: "ae2:dense_energy_cell",
        D: "gtceu:hv_field_generator"
    })

    event.shaped("ae2:crafting_unit", [
        "PCP",
        "KMK",
        "PLP"
    ], {
        P: "gtceu:aluminium_plate",
        C: "ae2:calculation_processor",
        K: "ae2:fluix_glass_cable",
        M: "#gtceu:circuits/mv",
        L: "ae2:logic_processor",
    })

    event.shaped("2x ae2:advanced_card", [
        "WP ",
        "ACP",
        "SP "
    ], {
        W: "#forge:fine_wires/red_alloy",
        P: "#forge:plates/stainless_steel",
        A: "ae2:engineering_processor",
        C: "#gtceu:circuits/hv",
        S: "#forge:fine_wires/silver",
    })

    event.shaped("2x ae2:basic_card", [
        "WP ",
        "ACP",
        "SP "
    ], {
        W: "#forge:fine_wires/red_alloy",
        P: "#forge:plates/aluminium",
        A: "ae2:engineering_processor",
        C: "#gtceu:circuits/mv",
        S: "#forge:fine_wires/gold",
    })

    event.shaped("ae2:annihilation_core", [
        "CPB"
    ], {
        C: "#gtceu:circuits/ulv",
        P: "ae2:logic_processor",
        B: "#forge:dusts/nether_quartz",
    })

    event.shaped("ae2:formation_core", [
        "CPB"
    ], {
        C: "#gtceu:circuits/ulv",
        P: "ae2:logic_processor",
        B: "#forge:dusts/certus_quartz",
    })

    event.shaped("ae2:wireless_receiver", [
        "CPC",
        "RSR",
        "   "
    ], {
        C: "#gtceu:circuits/ev",
        P: "ae2:fluix_pearl",
        R: "#forge:rods/titanium",
        S: "gtceu:hv_sensor",
    })

    event.shaped("ae2:import_bus", [
        "IPC"
    ], {
        I: "ae2:annihilation_core",
        P: "gtceu:lv_robot_arm",
        C: "ae2:fluix_glass_cable",
    })

    event.shaped("ae2:export_bus", ["IPC"], {
        I: "ae2:formation_core",
        P: "gtceu:lv_robot_arm",
        C: "ae2:fluix_glass_cable",
    })

    gtr.forming_press("gtlcore:logic_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("#forge:plates/gold", "ae2:silicon", "#forge:plates/redstone")
        .itemOutputs("ae2:logic_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("gtlcore:logic_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("gtceu:gold_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:logic_processor")
        .duration(20)
        .EUt(480)

    gtr.forming_press("gtlcore:calculation_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("#forge:plates/certus_quartz", "ae2:silicon", "#forge:plates/redstone")
        .itemOutputs("ae2:calculation_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("gtlcore:calculation_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("ae2:certus_quartz_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:calculation_processor")
        .duration(20)
        .EUt(480)

    gtr.forming_press("gtlcore:engineering_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("#forge:plates/diamond", "ae2:silicon", "#forge:plates/redstone")
        .itemOutputs("ae2:engineering_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("gtlcore:engineering_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("gtceu:diamond_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:engineering_processor")
        .duration(20)
        .EUt(480)

    gtr.mixer("gtlcore:fluix_dust")
        .itemInputs("#forge:dusts/nether_quartz", "#forge:dusts/certus_quartz", "#forge:dusts/redstone")
        .itemOutputs("3x ae2:fluix_dust")
        .duration(200)
        .EUt(16)

    gtr.macerator("gtlcore:silicon_dust")
        .itemInputs("ae2:silicon")
        .itemOutputs("gtceu:silicon_dust")
        .EUt(16)
        .duration(200)

    gtr.assembler("gtlcore:glass_fluix_cable")
        .itemInputs("ae2:quartz_fiber", "gtceu:fluix_plate")
        .itemOutputs("4x ae2:fluix_glass_cable")
        .duration(40)
        .EUt(30)

    gtr.assembler("gtlcore:fluix_covered_cable")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:rubber 4")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("gtlcore:fluix_covered_cable1")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:silicone_rubber 2")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("gtlcore:fluix_covered_cable2")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 1")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("gtlcore:blank_pattern")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polyethylene",
            "4x #forge:fine_wires/red_alloy",
            "#gtceu:circuits/mv")
        .itemOutputs("ae2:blank_pattern")
        .inputFluids("gtceu:glass 144")
        .duration(200)
        .EUt(120)

    gtr.assembler("gtlcore:blank_pattern_good")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polyvinyl_chloride",
            "4x #forge:fine_wires/red_alloy",
            "#gtceu:circuits/mv")
        .itemOutputs("4x ae2:blank_pattern")
        .inputFluids("gtceu:glass 288")
        .duration(200)
        .EUt(120)

    gtr.assembler("gtlcore:blank_pattern_better")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polytetrafluoroethylene",
            "4x #forge:fine_wires/red_alloy",
            "#gtceu:circuits/mv")
        .itemOutputs("16x ae2:blank_pattern")
        .inputFluids("gtceu:glass 576")
        .duration(200)
        .EUt(480)

    gtr.assembler("gtlcore:blank_pattern_best")
        .itemInputs(
            "3x #forge:plates/steel",
            "2x #forge:plates/polybenzimidazole",
            "4x #forge:fine_wires/red_alloy",
            "#gtceu:circuits/mv")
        .itemOutputs("64x ae2:blank_pattern")
        .inputFluids("gtceu:glass 1152")
        .duration(200)
        .EUt(480)

    gtr.macerator("gtlcore:sky_dust")
        .itemInputs("ae2:sky_stone_block")
        .itemOutputs("ae2:sky_dust")
        .EUt(2)
        .duration(200)

    gtr.chemical_bath("gtlcore:flawless_budding_quartz")
        .itemInputs("ae2:flawed_budding_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("ae2:flawless_budding_quartz")
        .EUt(30)
        .duration(400)

    function getCellComponent(index) {
        return index > 4 ? `gtlcore:cell_component_${4 ** (index - 5)}m` : `ae2:cell_component_${4 ** index}k`
    }

    for (let index = 0; index < 5; index++) {
        event.shapeless(`gtlcore:${4 ** index}m_storage`, ["ae2:crafting_unit", getCellComponent(index + 5)])
        event.shapeless(`gtlcore:item_storage_cell_${4 ** index}m`, ["ae2:item_cell_housing", getCellComponent(index + 5)])
        event.shapeless(`gtlcore:fluid_storage_cell_${4 ** index}m`, ["ae2:fluid_cell_housing", getCellComponent(index + 5)])
        event.shaped(`gtlcore:item_storage_cell_${4 ** index}m`, [
            "ABA",
            "BDB",
            "CCC"
        ], {
            A: "ae2:quartz_glass",
            B: "minecraft:redstone",
            C: "minecraft:iron_ingot",
            D: getCellComponent(index + 5)
        })
        event.shaped(`gtlcore:fluid_storage_cell_${4 ** index}m`, [
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

    gtr.assembly_line("gtlcore:max_storage")
        .itemInputs("ae2:crafting_unit", "16x gtlcore:cell_component_256m", "gtceu:data_bank", "16x gtceu:data_orb", "4x #gtceu:circuits/uhv", "4x gtceu:double_red_steel_plate")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:pcb_coolant 2000")
        .itemOutputs("gtlcore:max_storage")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:256m_storage")).dataStack(Registries.getItemStack("gtceu:data_stick")).EUt(GTValues.VA[GTValues.LuV]).duration(1200))

    gtr.assembly_line("gtlcore:infinite_cell_component")
        .itemInputs("16x gtlcore:max_storage", "gtceu:data_bank", "16x gtceu:data_module", "64x ae2:creative_energy_cell", "64x #gtceu:circuits/uev", "64x gtceu:ruthenium_trinium_americium_neutronate_hex_wire", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:mutated_living_solder 20000", "gtceu:tairitsu 20000", "gtceu:pcb_coolant 100000")
        .itemOutputs("gtlcore:infinite_cell_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:cell_component_256m")).dataStack(Registries.getItemStack("gtceu:data_orb")).EUt(GTValues.VA[GTValues.UV]).duration(2400))

    for (let index = 0; index < 33; index++) {
        event.shaped(Item.of("expatternprovider:infinity_cell", `{record:{"#c":"ae2:i",id:"gtceu:programmed_circuit",tag:{Configuration:${index}}}}`), [
            "BAB",
            "ADA",
            "CCC"
        ], {
            A: Item.of("gtceu:programmed_circuit", `{Configuration:${index}}`).weakNBT(),
            B: "ae2:quartz_glass",
            C: "minecraft:diamond",
            D: "ae2:cell_component_16k"
        })
    }

    gtr.forming_press("gtlcore:fishbig_fabric")
        .itemInputs("64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_foil", "64x gtceu:shirabon_foil", "64x gtlcore:two_way_foil", "64x gtceu:cosmic_foil", "64x gtceu:cosmicneutronium_foil", "64x gtceu:eternity_foil")
        .itemOutputs("gtlcore:fishbig_fabric")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_frame")
        .circuit(6)
        .itemInputs("64x gtceu:cosmic_plate", "64x gtceu:eternity_nanoswarm", "64x gtceu:long_cosmic_rod", "64x gtceu:infinity_frame", "64x gtceu:long_transcendentmetal_rod",
            "64x gtceu:long_cosmicneutronium_rod", "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame", "64x gtceu:long_magmatter_rod",)
        .inputFluids("gtceu:shirabon 18432")
        .itemOutputs("gtlcore:fishbig_frame")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_body")
        .itemInputs("64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_frame", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:create_aggregation", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_frame", "64x gtlcore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtlcore:fishbig_body")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_hade")
        .itemInputs("64x gtceu:double_cosmic_plate", "64x gtceu:double_cosmic_plate", "64x gtceu:double_cosmic_plate",
            "64x gtlcore:max_sensor", "64x gtlcore:create_computation", "64x gtlcore:max_sensor",
            "64x gtceu:double_cosmic_plate", "64x gtlcore:fishbig_frame", "64x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:transcendentmetal 18432")
        .itemOutputs("gtlcore:fishbig_hade")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_hair")
        .itemInputs("64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_frame", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:infinity_glass", "64x gtlcore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtlcore:fishbig_hair")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_rleg")
        .itemInputs("64x gtlcore:fishbig_frame", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtceu:max_buffer", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtlcore:fishbig_rleg")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_lleg")
        .itemInputs("64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_frame",
            "64x gtlcore:fishbig_fabric", "64x gtceu:max_buffer", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtlcore:fishbig_lleg")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_rhand")
        .itemInputs("64x gtlcore:fishbig_frame", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:component_assembly_line_casing_max", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtlcore:fishbig_rhand")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:fishbig_lhand")
        .itemInputs("64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_frame",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:component_assembly_line_casing_max", "64x gtlcore:fishbig_fabric",
            "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric", "64x gtlcore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtlcore:fishbig_lhand")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.lightning_processor("gtlcore:charged_certus_quartz_crystal")
        .circuit(1)
        .itemInputs("ae2:certus_quartz_crystal")
        .itemOutputs("ae2:charged_certus_quartz_crystal")
        .EUt(30)
        .duration(60)

    gtr.lightning_processor("gtlcore:fluix_crystal")
        .circuit(2)
        .itemInputs("minecraft:redstone", "minecraft:quartz", "ae2:certus_quartz_crystal")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("2x ae2:fluix_crystal")
        .EUt(30)
        .duration(80)

    gtr.lightning_processor("gtlcore:fluix_pearl")
        .itemInputs("minecraft:ender_pearl", "gtceu:flawless_fluix_gem")
        .itemOutputs("ae2:fluix_pearl")
        .EUt(30)
        .duration(160)
})