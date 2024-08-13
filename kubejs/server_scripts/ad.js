ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const id = ["ad_astra:compressor",
        "ad_astra:coal_generator",
        "ad_astra:etrionic_blast_furnace",
        "ad_astra:fuel_refinery",
        "ad_astra:solar_panel",
        "ad_astra:water_pump",
        "ad_astra:cryo_freezer",
        "ad_astra:fan",
        "ad_astra:engine_frame",
        "ad_astra:steel_engine",
        "ad_astra:desh_engine",
        "ad_astra:ostrum_engine",
        "ad_astra:calorite_engine",
        "ad_astra:calorite_tank",
        "ad_astra:ostrum_tank",
        "ad_astra:desh_tank",
        "ad_astra:steel_tank",
        "ad_astra:rocket_fin",
        "ad_astra:rocket_nose_cone",
        "ad_astra:smelting/desh_ingot_from_smelting_deepslate_desh_ore",
        "ad_astra:smelting/desh_ingot_from_smelting_moon_desh_ore",
        "ad_astra:smelting/desh_ingot_from_smelting_raw_desh",
        "ad_astra:smelting/ostrum_ingot_from_smelting_deepslate_ostrum_ore",
        "ad_astra:smelting/ostrum_ingot_from_smelting_mars_ostrum_ore",
        "ad_astra:smelting/ostrum_ingot_from_smelting_raw_ostrum",
        "ad_astra:smelting/calorite_ingot_from_smelting_deepslate_calorite_ore",
        "ad_astra:smelting/calorite_ingot_from_smelting_venus_calorite_ore",
        "ad_astra:smelting/calorite_ingot_from_smelting_raw_calorite",
        "ad_astra:smelting/ice_shard_from_smelting_deepslate_ice_shard_ore",
        "ad_astra:smelting/ice_shard_from_smelting_glacio_ice_shard_ore",
        "ad_astra:smelting/ice_shard_from_smelting_mars_ice_shard_ore",
        "ad_astra:smelting/ice_shard_from_smelting_moon_ice_shard_ore",
        "ad_astra:blasting/desh_ingot_from_blasting_deepslate_desh_ore",
        "ad_astra:blasting/desh_ingot_from_blasting_moon_desh_ore",
        "ad_astra:blasting/desh_ingot_from_blasting_raw_desh",
        "ad_astra:blasting/ostrum_ingot_from_blasting_deepslate_ostrum_ore",
        "ad_astra:blasting/ostrum_ingot_from_blasting_mars_ostrum_ore",
        "ad_astra:blasting/ostrum_ingot_from_blasting_raw_ostrum",
        "ad_astra:blasting/calorite_ingot_from_blasting_deepslate_calorite_ore",
        "ad_astra:blasting/calorite_ingot_from_blasting_venus_calorite_ore",
        "ad_astra:blasting/calorite_ingot_from_blasting_raw_calorite",
        "ad_astra:blasting/ice_shard_from_blasting_deepslate_ice_shard_ore",
        "ad_astra:blasting/ice_shard_from_blasting_glacio_ice_shard_ore",
        "ad_astra:blasting/ice_shard_from_blasting_mars_ice_shard_ore",
        "ad_astra:blasting/ice_shard_from_blasting_moon_ice_shard_ore",
        "ad_astra:steel_block",
        "ad_astra:energizer",
        "ad_astra:steel_cable",
        "ad_astra:desh_cable",
        "ad_astra:cable_duct",
        "ad_astra:steel_ingot"]
    id.forEach(i => {
        event.remove({ id: i })
    })
    event.remove({ type: "ad_astra:compressing" })
    event.remove({ type: "ad_astra:alloying" })
    event.remove({ type: "ad_astra:cryo_freezing" })
    event.remove({ type: "ad_astra:nasa_workbench" })
    event.remove({ type: "ad_astra:oxygen_loading" })
    event.remove({ type: "ad_astra:refining" })
    event.shapeless("ad_astra:energizer", "gtceu:ulv_charger_4x")

    gtr.compressor("ad_astra:ice_shard")
        .itemInputs("minecraft:blue_ice")
        .itemOutputs("ad_astra:ice_shard")
        .EUt(30)
        .duration(200)

    gtr.assembler("ad_astra:rocket_nose_cone")
        .itemInputs("gtceu:stainless_steel_frame", "minecraft:lightning_rod", "kubejs:ultimate_control_circuit", "gtceu:exquisite_glass_gem", "gtceu:computer_monitor_cover", "2x gtceu:double_aluminium_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("ad_astra:rocket_nose_cone")
        .EUt(120)
        .duration(200)

    gtr.electric_blast_furnace("ad_astra:iron_plate")
        .itemInputs("gtceu:conductive_alloy_block", "gtceu:double_wrought_iron_plate", "16x gtceu:wrought_iron_dust")
        .inputFluids("gtceu:iron 1296")
        .itemOutputs("ad_astra:iron_plate")
        .chancedOutput("gtceu:steel_ingot", 5000, 0)
        .outputFluids("gtceu:wrought_iron 864")
        .EUt(480)
        .duration(800)
        .blastFurnaceTemp(2400)

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "ad_astra:iron_plate"
            },
            {
                "item": "ad_astra:iron_plate"
            },
            {
                "item": "ad_astra:iron_plate"
            },
            {
                "item": "ad_astra:iron_plate"
            },
            {
                "item": "ad_astra:iron_plate"
            },
            {
                "item": "ad_astra:iron_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_1_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "ad_astra:steel_plate"
            },
            {
                "item": "ad_astra:steel_plate"
            },
            {
                "item": "ad_astra:steel_plate"
            },
            {
                "item": "ad_astra:steel_plate"
            },
            {
                "item": "ad_astra:steel_plate"
            },
            {
                "item": "ad_astra:steel_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_2_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "ad_astra:steel_block"
            },
            {
                "item": "ad_astra:steel_block"
            },
            {
                "item": "ad_astra:steel_block"
            },
            {
                "item": "ad_astra:steel_block"
            },
            {
                "item": "ad_astra:steel_block"
            },
            {
                "item": "ad_astra:steel_block"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_3_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "ad_astra:desh_plate"
            },
            {
                "item": "ad_astra:desh_plate"
            },
            {
                "item": "ad_astra:desh_plate"
            },
            {
                "item": "ad_astra:desh_plate"
            },
            {
                "item": "ad_astra:desh_plate"
            },
            {
                "item": "ad_astra:desh_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:desh_tank"
            },
            {
                "item": "ad_astra:desh_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:desh_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_4_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "ad_astra:ostrum_plate"
            },
            {
                "item": "ad_astra:ostrum_plate"
            },
            {
                "item": "ad_astra:ostrum_plate"
            },
            {
                "item": "ad_astra:ostrum_plate"
            },
            {
                "item": "ad_astra:ostrum_plate"
            },
            {
                "item": "ad_astra:ostrum_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:ostrum_tank"
            },
            {
                "item": "ad_astra:ostrum_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:ostrum_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra_rocketed:tier_5_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "ad_astra:calorite_plate"
            },
            {
                "item": "ad_astra:calorite_plate"
            },
            {
                "item": "ad_astra:calorite_plate"
            },
            {
                "item": "ad_astra:calorite_plate"
            },
            {
                "item": "ad_astra:calorite_plate"
            },
            {
                "item": "ad_astra:calorite_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:calorite_tank"
            },
            {
                "item": "ad_astra:calorite_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:calorite_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra_rocketed:tier_6_rocket"
        }
    })

    gtr.assembler("ad_astra:fan")
        .itemInputs("2x ad_astra:steel_rod", "4x gtceu:stainless_steel_turbine_blade", "4x gtceu:stainless_steel_screw")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("ad_astra:fan")
        .EUt(120)
        .duration(200)

    gtr.assembler("ad_astra:steel_tank")
        .itemInputs("gtceu:stainless_steel_fluid_cell", "gtceu:stainless_steel_small_fluid_pipe", "gtceu:hv_electric_pump", "16x gtceu:stainless_steel_foil")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:steel_tank")
        .EUt(120)
        .duration(200)

    gtr.assembler("ad_astra:engine_frame")
        .itemInputs("gtceu:black_steel_frame", "2x gtceu:cobalt_normal_restrictive_item_pipe", "32x gtceu:steel_foil")
        .itemOutputs("ad_astra:engine_frame")
        .EUt(120)
        .duration(400)

    gtr.assembler("ad_astra:steel_engine")
        .itemInputs("ad_astra:engine_frame", "gtceu:steel_pipe_casing", "ad_astra:fan", "ad_astra:steel_tank", "gtceu:hv_fluid_regulator", "16x #gtceu:circuits/ev", "gtceu:liquid_fuel_jetpack", "8x gtceu:stainless_steel_plate")
        .inputFluids("gtceu:steel 1296")
        .itemOutputs("ad_astra:steel_engine")
        .EUt(480)
        .duration(400)

    gtr.assembler("ad_astra:rocket_fin")
        .itemInputs("2x ad_astra:iron_plate", "gtceu:double_aluminium_bronze_plate", "gtceu:double_aluminium_plate", "gtceu:double_stainless_steel_plate")
        .inputFluids("gtceu:magnalium 1296")
        .itemOutputs("ad_astra:rocket_fin")
        .EUt(120)
        .duration(200)

    gtr.electric_blast_furnace("ad_astra:steel_plate")
        .itemInputs("gtceu:magnetic_steel_block", "ad_astra:iron_plate", "16x gtceu:damascus_steel_dust")
        .inputFluids("gtceu:titanium 1296")
        .itemOutputs("ad_astra:steel_plate")
        .chancedOutput("gtceu:titanium_ingot", 5000, 0)
        .EUt(480)
        .duration(1600)
        .blastFurnaceTemp(3200)

    gtr.electric_blast_furnace("ad_astra:desh_ingot")
        .itemInputs("gtceu:desh_dust", "gtceu:rhodium_dust")
        .inputFluids("gtceu:bismuth_bronze 144")
        .itemOutputs("ad_astra:desh_ingot")
        .EUt(1920)
        .duration(1600)
        .blastFurnaceTemp(4300)

    gtr.electric_blast_furnace("ad_astra:ostrum_ingot")
        .itemInputs("gtceu:ostrum_dust", "gtceu:titanium_carbide_dust")
        .inputFluids("gtceu:samarium_iron_arsenic_oxide 144")
        .itemOutputs("ad_astra:ostrum_ingot")
        .EUt(1920)
        .duration(2400)
        .blastFurnaceTemp(5200)

    gtr.alloy_smelter("ad_astra:calorite_ingot")
        .itemInputs("gtceu:naquadah_ingot", "gtceu:calorite_dust")
        .itemOutputs("ad_astra:calorite_ingot")
        .EUt(30720)
        .duration(1200)

    gtr.compressor("ad_astra:desh_plate")
        .itemInputs("9x ad_astra:desh_ingot")
        .itemOutputs("ad_astra:desh_plate")
        .EUt(1920)
        .duration(200)

    gtr.compressor("ad_astra:ostrum_plate")
        .itemInputs("9x ad_astra:ostrum_ingot")
        .itemOutputs("ad_astra:ostrum_plate")
        .EUt(7680)
        .duration(200)

    gtr.compressor("ad_astra:calorite_plate")
        .itemInputs("9x ad_astra:calorite_ingot")
        .itemOutputs("ad_astra:calorite_plate")
        .EUt(7680)
        .duration(200)

    gtr.assembler("ad_astra:desh_engine")
        .itemInputs("gtceu:blue_steel_frame", "ad_astra:steel_engine", "2x gtceu:ev_field_generator", "16x #gtceu:circuits/iv", "gtceu:ev_fluid_regulator", "16x ad_astra:desh_fluid_pipe", "8x ad_astra:desh_plate")
        .inputFluids("gtceu:tungsten_steel 1296")
        .itemOutputs("ad_astra:desh_engine")
        .EUt(1920)
        .duration(400)

    gtr.assembler("ad_astra:desh_tank")
        .itemInputs("gtceu:titanium_fluid_cell", "8x ad_astra:desh_fluid_pipe", "gtceu:ev_electric_pump", "8x gtceu:titanium_plate", "4x ad_astra:desh_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:desh_tank")
        .EUt(480)
        .duration(200)

    gtr.assembler("ad_astra:ostrum_tank")
        .itemInputs("gtceu:tungstensteel_fluid_cell", "8x ad_astra:ostrum_fluid_pipe", "gtceu:iv_electric_pump", "8x gtceu:double_palladium_plate", "4x ad_astra:ostrum_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:ostrum_tank")
        .EUt(7680)
        .duration(200)

    gtr.assembler("ad_astra:ostrum_engine")
        .itemInputs("gtceu:hsse_frame", "ad_astra:steel_engine", "2x gtceu:iv_field_generator", "16x #gtceu:circuits/luv", "gtceu:iv_fluid_regulator", "16x ad_astra:ostrum_fluid_pipe", "8x ad_astra:ostrum_plate")
        .inputFluids("gtceu:rhodium_plated_palladium 1296")
        .itemOutputs("ad_astra:ostrum_engine")
        .EUt(7680)
        .duration(400)

    gtr.assembler("ad_astra:calorite_tank")
        .itemInputs("gtceu:tungstensteel_fluid_cell", "8x gtceu:naquadah_normal_fluid_pipe", "gtceu:luv_electric_pump", "8x gtceu:enriched_naquadah_plate", "4x ad_astra:calorite_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:calorite_tank")
        .EUt(30720)
        .duration(200)

    gtr.assembler("ad_astra:calorite_engine")
        .itemInputs("gtceu:naquadah_frame", "ad_astra:steel_engine", "2x gtceu:luv_field_generator", "16x #gtceu:circuits/zpm", "gtceu:luv_fluid_regulator", "16x gtceu:naquadah_normal_fluid_pipe", "8x ad_astra:calorite_plate")
        .inputFluids("gtceu:naquadah_alloy 1296")
        .itemOutputs("ad_astra:calorite_engine")
        .EUt(30720)
        .duration(400)

    gtr.assembly_line("ad_astra_rocketed:tier_7_rocket")
        .itemInputs("ad_astra:rocket_nose_cone", "gtceu:zpm_field_generator", "16x #gtceu:circuits/uv", "4x gtceu:zpm_emitter", "4x gtceu:zpm_fluid_regulator", "4x ad_astra:calorite_tank", "ad_astra:calorite_engine", "8x ad_astra:ostrum_block", "32x gtceu:fall_king_block", "64x ad_astra:calorite_plate", "4x ad_astra:rocket_fin")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 4000", "gtceu:pcb_coolant 4000", "gtceu:indium_tin_barium_titanium_cuprate 1296")
        .itemOutputs("ad_astra_rocketed:tier_7_rocket")
        .EUt(122880)
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("ad_astra_rocketed:tier_6_rocket"))
            .dataStack(Item.of("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(48))
})