//priority: 96
ServerEvents.recipes((event) => {
    event.remove({ id: "gtceu:chemical_reactor/styrene_from_ethylbenzene" })
    event.remove({ id: "gtceu:large_chemical_reactor/styrene_from_ethylbenzene" })
    event.remove({ id: "gtceu:chemical_reactor/vinyl_chloride_from_ethane" })
    event.remove({ id: "gtceu:large_chemical_reactor/vinyl_chloride_from_ethane" })
    event.remove({ id: "gtceu:chemical_reactor/dimethylchlorosilane_from_chloromethane" })
    event.remove({ id: "gtceu:large_chemical_reactor/dimethylchlorosilane_from_chloromethane" })
    event.remove({ id: "gtceu:chemical_reactor/formic_acid" })
    event.remove({ id: "gtceu:large_chemical_reactor/formic_acid" })
    event.remove({ id: "gtceu:chemical_reactor/ethylene_from_ethanol" })
    event.remove({ id: "gtceu:large_chemical_reactor/ethylene_from_ethanol" })
    event.remove({ id: "gtceu:chemical_reactor/stem_cells" })
    event.remove({ id: "gtceu:large_chemical_reactor/stem_cells" })
    event.remove({ id: "gtceu:electrolyzer/bone_meal_electrolysis" })
    event.remove({ id: "gtceu:mixer/rocket_fuel_from_dinitrogen_tetroxide" })
    event.remove({ id: "gtceu:centrifuge/rare_earth_separation" })
    event.remove({ id: "gtceu:extruder/nan_certificate" })
    event.remove({ id: "gtceu:shaped/maintenance_hatch_cleaning" })
    event.remove({ id: "gtceu:forming_press/credit_cupronickel" })
    event.shapeless("gtceu:suprachronal_assembly_line_module", "gtceu:suprachronal_assembly_line")
    event.shapeless("gtceu:suprachronal_assembly_line", "gtceu:suprachronal_assembly_line_module")
    event.shapeless("gtceu:spacetime_small_fluid_pipe", ["gtceu:spacetime_tiny_fluid_pipe", "gtceu:spacetime_tiny_fluid_pipe"])
    event.shapeless("gtceu:spacetime_normal_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_quadruple_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_nonuple_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_large_fluid_pipe", ["gtceu:spacetime_normal_fluid_pipe", "gtceu:spacetime_normal_fluid_pipe"])
    event.shapeless("gtceu:spacetime_huge_fluid_pipe", ["gtceu:spacetime_large_fluid_pipe", "gtceu:spacetime_large_fluid_pipe"])
    event.shaped(Item.of("gtceu:primitive_robot_arm", 64), [
        "AAA",
        "BEB",
        "CDE"
    ], {
        A: "gtceu:potin_tiny_fluid_pipe",
        B: "gtceu:bronze_gear",
        C: "kubejs:precision_steam_mechanism",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:bronze_rod"
    })

    event.shaped(Item.of("gtceu:primitive_fluid_regulator", 64), [
        "BAE",
        "DFA",
        "ECB"
    ], {
        A: "gtceu:potin_tiny_fluid_pipe",
        B: "gtceu:bronze_rotor",
        C: "kubejs:precision_steam_mechanism",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:bronze_bolt",
        F: "gtceu:copper_normal_fluid_pipe"
    })

    event.shaped("gtmthings:creative_laser_hatch", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "minecraft:chain_command_block",
        B: "kubejs:chaotic_energy_core",
        C: "gtmthings:max_4194304a_wireless_laser_target_hatch"
    })

    event.shaped("gtceu:large_steam_input_hatch", [
        "ACA",
        "BDB",
        "ACA"
    ], {
        A: "kubejs:precision_steam_mechanism",
        B: "gtceu:stainless_steel_tiny_fluid_pipe",
        C: "gtceu:iron_rotor",
        D: "gtceu:steam_input_hatch"
    })

    event.shaped("kubejs:reactor_core", [
        "ACA",
        "CDC",
        "ACA"
    ], {
        A: "gtceu:steel_plate",
        C: "gtceu:gold_plate",
        D: "gtceu:pulsating_alloy_block"
    })

    event.shaped("minecraft:heart_of_the_sea", [
        "ACA",
        "CDC",
        "ACA"
    ], {
        A: "gtceu:quantum_star",
        C: "kubejs:glacio_spirit",
        D: "kubejs:pellet_antimatter"
    })

    event.shaped("gtceu:large_rock_crusher", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:iv_electric_piston",
        B: "#gtceu:circuits/iv",
        C: "gtceu:platinum_double_cable",
        D: "gtceu:iv_rock_crusher"
    })

    event.shaped("gtceu:incubator", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:plascrete",
        B: "gtceu:hv_field_generator",
        C: "gtceu:filter_casing",
        D: "gtceu:greenhouse"
    })

    event.shaped("gtceu:block_conversion_room", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:quantum_eye",
        B: "gtceu:lv_field_generator",
        D: "minecraft:netherite_block"
    })

    event.shaped("gtceu:lava_furnace", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:double_copper_plate",
        B: "gtceu:double_wrought_iron_plate",
        C: "gtceu:tin_hex_cable",
        D: "gtceu:steam_oven"
    })

    event.shaped("gtceu:mega_alloy_blast_smelter", [
        "AFA",
        "CDC",
        "EBE"
    ], {
        A: "gtceu:naquadah_alloy_spring",
        B: "gtceu:ruthenium_trinium_americium_neutronate_hex_wire",
        C: "gtceu:zpm_field_generator",
        D: "gtceu:alloy_blast_smelter",
        E: "gtceu:dense_darmstadtium_plate",
        F: "#gtceu:circuits/zpm"
    })

    event.shaped("gtceu:mv_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "gtceu:neutronium_wafer",
        B: "gtceu:laminated_glass",
        C: "#gtceu:circuits/uv",
        D: "gtceu:mithril_quadruple_wire",
        E: "gtceu:double_indium_gallium_phosphide_plate"
    })

    event.shaped("gtceu:hv_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "kubejs:rutherfordium_neutronium_wafer",
        B: "gtceu:laminated_glass",
        C: "#gtceu:circuits/uev",
        D: "gtceu:mithril_hex_wire",
        E: "gtceu:double_germaniumtungstennitride_plate"
    })

    event.shaped("gtceu:ev_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "kubejs:taranium_wafer",
        B: "gtceu:laminated_glass",
        C: "#gtceu:circuits/uxv",
        D: "gtceu:taranium_quadruple_wire",
        E: "gtceu:double_uruium_plate"
    })

    event.shaped("gtceu:iv_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "kubejs:pm_wafer",
        B: "gtceu:fusion_glass",
        C: "#gtceu:circuits/max",
        D: "gtceu:taranium_hex_wire",
        E: "gtceu:double_oganesson_plate"
    })

    event.shaped("gtceu:max_neutron_compressor", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:max_machine_hull",
        B: "gtceu:cosmicneutronium_single_cable",
        C: "#gtceu:circuits/max",
        D: "gtceu:max_electric_piston",
        E: "gtceu:max_electric_pump"
    })

    event.shaped("gtceu:uhv_parallel_hatch", [
        "DCE",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:uhv_machine_hull",
        B: "gtceu:europium_double_cable",
        C: "#gtceu:circuits/uev",
        D: "gtceu:uhv_sensor",
        E: "gtceu:uhv_emitter"
    })

    event.shaped("gtceu:uev_parallel_hatch", [
        "DCE",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:uev_machine_hull",
        B: "gtceu:mithril_double_cable",
        C: "#gtceu:circuits/uiv",
        D: "gtceu:uev_sensor",
        E: "gtceu:uev_emitter"
    })

    event.shaped("gtceu:uiv_parallel_hatch", [
        "DCE",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:uiv_machine_hull",
        B: "gtceu:neutronium_double_cable",
        C: "#gtceu:circuits/uxv",
        D: "gtceu:uiv_sensor",
        E: "gtceu:uiv_emitter"
    })

    event.shaped("gtceu:uxv_parallel_hatch", [
        "DCE",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:uxv_machine_hull",
        B: "gtceu:taranium_double_cable",
        C: "#gtceu:circuits/opv",
        D: "gtceu:uxv_sensor",
        E: "gtceu:uxv_emitter"
    })

    event.shaped("gtceu:opv_parallel_hatch", [
        "DCE",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:opv_machine_hull",
        B: "gtceu:crystalmatrix_double_cable",
        C: "#gtceu:circuits/max",
        D: "gtceu:opv_sensor",
        E: "gtceu:opv_emitter"
    })


    event.shaped("gtceu:sterile_cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:zpm_machine_hull",
        C: "gtceu:zpm_robot_arm",
        D: "gtceu:sterilizing_filter_casing",
        E: "gtceu:cleaning_maintenance_hatch"
    })

    event.shaped("gtceu:cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:hv_machine_hull",
        C: "gtceu:hv_emitter",
        D: "gtceu:filter_casing",
        E: "gtceu:auto_maintenance_hatch"
    })

    event.shaped("gtceu:law_cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:uev_machine_hull",
        C: "gtceu:uev_robot_arm",
        D: "gtceu:law_filter_casing",
        E: "gtceu:sterile_cleaning_maintenance_hatch"
    })

    event.shaped("gtceu:cleaning_configuration_maintenance_hatch", [
        "DCD",
        "CAC",
        "DCD"
    ], {
        A: "gtceu:auto_configuration_maintenance_hatch",
        C: "#gtceu:circuits/luv",
        D: "gtceu:cleaning_maintenance_hatch"
    })

    event.shaped("gtceu:sterile_configuration_cleaning_maintenance_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:uhv_machine_hull",
        B: "gtceu:uhv_field_generator",
        C: "gtceu:cleaning_configuration_maintenance_hatch",
        D: "gtceu:sterile_cleaning_maintenance_hatch"
    })

    event.shaped("gtceu:law_configuration_cleaning_maintenance_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:uxv_machine_hull",
        B: "gtceu:uxv_field_generator",
        C: "gtceu:sterile_configuration_cleaning_maintenance_hatch",
        D: "gtceu:law_cleaning_maintenance_hatch"
    })

    event.shaped("gtceu:dragon_egg_copier", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "minecraft:dragon_egg",
        C: "gtceu:uxv_robot_arm",
        D: "kubejs:dragon_strength_tritanium_casing",
        E: "gtceu:uxv_field_generator"
    })

    event.shaped("gtceu:blaze_blast_furnace", [
        "DCD",
        "CAC",
        "DCD"
    ], {
        A: "gtceu:electric_blast_furnace",
        C: "gtceu:iv_field_generator",
        D: "kubejs:blaze_blast_furnace_casing"
    })

    event.shaped("gtceu:large_cracker", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:cracker",
        B: "gtceu:naquadah_spring",
        C: "#gtceu:circuits/uv",
        D: "gtceu:luv_field_generator"
    })

    event.shaped("gtceu:large_greenhouse", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:greenhouse",
        B: "gtceu:ev_sensor",
        C: "#gtceu:circuits/luv",
        D: "gtceu:ev_field_generator"
    })

    event.shaped("gtceu:law_filter_casing", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:mithril_frame",
        B: "gtceu:uev_emitter",
        C: "gtceu:sterilizing_filter_casing",
        D: "gtceu:uev_muffler_hatch"
    })

    event.shaped("gtceu:cold_ice_freezer", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:vacuum_freezer",
        B: "kubejs:cold_ice_casing",
        C: "gtceu:iv_emitter"
    })

    event.shaped("gtceu:gravitation_shockburst", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "kubejs:create_ultimate_battery",
        B: "kubejs:create_casing",
        C: "kubejs:suprachronal_mainframe_complex"
    })

    event.shaped("gtceu:creative_data_access_hatch", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:advanced_data_access_hatch",
        B: "gtceu:double_chaos_plate",
        C: "minecraft:repeating_command_block"
    })

    event.shaped("kubejs:multi_functional_casing", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:solid_machine_casing",
        B: "gtceu:double_aluminium_plate",
        C: "gtceu:mv_electric_motor",
        D: "gtceu:mv_electric_piston"
    })

    event.shaped("gtceu:processing_plant", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "kubejs:multi_functional_casing",
        B: "gtceu:aluminium_foil",
        C: "gtceu:mv_conveyor_module",
        D: "gtceu:mv_robot_arm",
        E: "gtceu:mv_fluid_regulator"
    })

    event.shaped("gtceu:steam_piston_hammer", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "gtceu:lp_steam_forge_hammer",
        B: "gtceu:bronze_plate",
        C: "gtceu:wrought_iron_ring",
        D: "gtceu:iron_spring",
        E: "gtceu:double_wrought_iron_plate"
    })

    event.shaped("gtceu:steam_pressor", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "gtceu:lp_steam_compressor",
        B: "gtceu:bronze_plate",
        C: "gtceu:small_bronze_gear",
        D: "gtceu:small_iron_spring",
        E: "gtceu:wrought_iron_gear"
    })

    event.shaped("gtceu:steam_foundry", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:lp_steam_alloy_smelter",
        B: "gtceu:bronze_plate",
        C: "gtceu:potin_plate",
        D: "gtceu:long_tin_alloy_rod"
    })

    event.shaped("gtceu:assemble_plant", [
        "BCB",
        "DAF",
        "BEB"
    ], {
        A: "kubejs:multi_functional_casing",
        B: "gtceu:aluminium_foil",
        C: "gtceu:mv_conveyor_module",
        D: "gtceu:mv_sensor",
        E: "gtceu:mv_fluid_regulator",
        F: "gtceu:mv_emitter"
    })

    event.shaped("gtceu:separated_plant", [
        "BCB",
        "DAF",
        "BEB"
    ], {
        A: "kubejs:multi_functional_casing",
        B: "gtceu:aluminium_foil",
        C: "gtceu:mv_conveyor_module",
        D: "gtceu:mv_electric_motor",
        E: "gtceu:mv_fluid_regulator",
        F: "gtceu:mv_electric_pump"
    })

    event.shaped("gtceu:mixed_plant", [
        "BCB",
        "DAF",
        "BEB"
    ], {
        A: "kubejs:multi_functional_casing",
        B: "gtceu:aluminium_foil",
        C: "gtceu:mv_conveyor_module",
        D: "gtceu:mv_electric_piston",
        E: "gtceu:mv_fluid_regulator",
        F: "gtceu:mv_electric_motor"
    })

    event.shaped("gtceu:ev_rocket_engine", [
        "BCB",
        "DAD",
        "WEW"
    ], {
        A: "gtceu:ev_machine_hull",
        B: "gtceu:lead_rotor",
        C: "#gtceu:circuits/ev",
        D: "gtceu:ev_electric_motor",
        E: "gtceu:ev_electric_pump",
        W: "gtceu:steel_double_cable"
    })

    event.shaped("gtceu:iv_rocket_engine", [
        "BCB",
        "DAD",
        "WEW"
    ], {
        A: "gtceu:iv_machine_hull",
        B: "gtceu:chromium_rotor",
        C: "#gtceu:circuits/iv",
        D: "gtceu:iv_electric_motor",
        E: "gtceu:iv_electric_pump",
        W: "gtceu:tungsten_steel_double_cable"
    })

    event.shaped("gtceu:luv_rocket_engine", [
        "BCB",
        "DAD",
        "WEW"
    ], {
        A: "gtceu:luv_machine_hull",
        B: "gtceu:rhodium_plated_palladium_rotor",
        C: "#gtceu:circuits/luv",
        D: "gtceu:luv_electric_motor",
        E: "gtceu:luv_electric_pump",
        W: "gtceu:osmium_double_cable"
    })

    event.shaped("gtceu:rocket_large_turbine", [
        "BCB",
        "DAD",
        "WPW"
    ], {
        A: "gtceu:ev_rocket_engine",
        W: "gtceu:black_steel_double_cable",
        C: "#gtceu:circuits/iv",
        D: "gtceu:ev_electric_motor",
        B: "gtceu:ev_electric_piston",
        P: "gtceu:dense_obsidian_plate"
    })

    event.shaped("gtceu:iv_naquadah_reactor", [
        "BCB",
        "DAD",
        "WCW"
    ], {
        A: "gtceu:iv_machine_hull",
        B: "gtceu:naquadah_rod",
        C: "#gtceu:circuits/iv",
        D: "gtceu:iv_field_generator",
        W: "gtceu:tungsten_quadruple_cable"
    })

    event.shaped("gtceu:luv_naquadah_reactor", [
        "BCB",
        "DAD",
        "WCW"
    ], {
        A: "gtceu:luv_machine_hull",
        B: "gtceu:enriched_naquadah_rod",
        C: "#gtceu:circuits/luv",
        D: "gtceu:luv_field_generator",
        W: "gtceu:niobium_nitride_quadruple_cable"
    })

    event.shaped("gtceu:zpm_naquadah_reactor", [
        "BCB",
        "DAD",
        "WCW"
    ], {
        A: "gtceu:zpm_machine_hull",
        B: "gtceu:naquadria_rod",
        C: "#gtceu:circuits/zpm",
        D: "gtceu:zpm_field_generator",
        W: "gtceu:naquadah_quadruple_cable"
    })

    event.shaped("gtceu:large_steam_macerator", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:steam_grinder",
        B: "gtceu:bronze_block",
        C: "gtceu:diamond_grinding_head",
        D: "kubejs:precision_steam_mechanism"
    })

    event.shaped("gtceu:large_steam_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:bronze_gearbox",
        B: "gtceu:bronze_block",
        C: "kubejs:precision_steam_mechanism",
        D: "gtceu:small_iron_gear"
    })

    event.shaped("gtceu:large_steam_bath", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:steam_bath",
        B: "gtceu:bronze_block",
        C: "kubejs:precision_steam_mechanism",
        D: "gtceu:stone_gear",
        E: "gtceu:steel_foil"
    })

    event.shaped("gtceu:large_steam_circuit_assembler", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "ae2:molecular_assembler",
        B: "gtceu:bronze_plate",
        C: "minecraft:comparator",
        D: "#gtceu:circuits/ulv"
    })

    event.shaped("gtceu:large_steam_mixer", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:steam_mixer",
        B: "gtceu:bronze_plate",
        C: "kubejs:precision_steam_mechanism",
        D: "gtceu:copper_huge_fluid_pipe"
    })

    event.shaped("gtceu:large_steam_thermal_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:bronze_pipe_casing",
        B: "gtceu:bronze_plate",
        C: "kubejs:precision_steam_mechanism",
        D: "gtceu:long_copper_rod"
    })

    event.shaped("gtceu:large_steam_ore_washer", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:steam_ore_washer",
        B: "gtceu:bronze_plate",
        C: "gtceu:double_bronze_plate",
        D: "kubejs:precision_steam_mechanism"
    })

    event.shaped("gtceu:steam_mixer", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:bronze_normal_fluid_pipe",
        B: "gtceu:bronze_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:bronze_gear"
    })

    event.shaped("gtceu:steam_bath", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:bronze_rod",
        B: "gtceu:bronze_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:bronze_gear"
    })

    event.shaped("gtceu:steam_ore_washer", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:bronze_rod",
        B: "gtceu:steel_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:potin_gear"
    })

    event.shaped("gtceu:weather_control", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "minecraft:amethyst_block",
        B: "minecraft:lightning_rod",
        C: "gtceu:double_steel_plate",
        D: "minecraft:daylight_detector"
    })

    event.shaped("gtceu:large_pyrolyse_oven", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:pyrolyse_oven",
        B: "gtceu:double_stainless_steel_plate",
        C: "gtceu:iv_field_generator",
        D: "gtceu:vanadium_steel_huge_fluid_pipe"
    })

    event.shaped("kubejs:precision_steam_mechanism", [
        "ABA",
        "CDC",
        "EBE"
    ], {
        A: "gtceu:bronze_rod",
        B: "gtceu:small_bronze_gear",
        C: "gtceu:bronze_plate",
        D: "gtceu:small_copper_spring",
        E: "gtceu:bronze_tiny_fluid_pipe"
    })

    event.shaped("kubejs:steam_assembly_block", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:bronze_normal_fluid_pipe",
        B: "kubejs:precision_steam_mechanism",
        C: "gtceu:bronze_frame"
    })

    event.shaped("gtceu:ev_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotron_crystal",
        B: "gtceu:ev_transformer_16a",
        C: "gtceu:ev_machine_hull"
    })

    event.shaped("gtceu:iv_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotronic_energy_orb",
        B: "gtceu:iv_transformer_16a",
        C: "gtceu:iv_machine_hull"
    })

    event.shaped("gtceu:luv_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotronic_energy_orb_cluster",
        B: "gtceu:luv_transformer_16a",
        C: "gtceu:luv_machine_hull"
    })

    event.shaped("gtceu:lv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:lv_electric_piston",
        B: "gtceu:lv_electric_motor",
        C: "gtceu:potin_gear",
        D: "#gtceu:circuits/lv",
        E: "gtceu:lv_machine_hull",
        F: "gtceu:cobalt_double_cable"
    })

    event.shaped("gtceu:mv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:mv_electric_piston",
        B: "gtceu:mv_electric_motor",
        C: "gtceu:eglin_steel_gear",
        D: "#gtceu:circuits/mv",
        E: "gtceu:mv_machine_hull",
        F: "gtceu:annealed_copper_double_cable"
    })

    event.shaped("gtceu:hv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:hv_electric_piston",
        B: "gtceu:hv_electric_motor",
        C: "gtceu:chromium_gear",
        D: "#gtceu:circuits/hv",
        E: "gtceu:hv_machine_hull",
        F: "gtceu:electrum_double_cable"
    })

    event.shaped("gtceu:large_semi_fluid_generator", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:ev_electric_piston",
        B: "gtceu:ev_electric_motor",
        C: "gtceu:inconel_792_gear",
        D: "#gtceu:circuits/ev",
        E: "gtceu:ev_machine_hull",
        F: "gtceu:nichrome_double_cable"
    })

    event.smithing("kubejs:create_hpca_component", "kubejs:command_block_core", "gtceu:super_computation_component", "kubejs:suprachronal_mainframe_complex")
    event.smithing("gtceu:create_computation", "kubejs:command_block_core", "gtceu:high_performance_computation_array", "kubejs:suprachronal_mainframe_complex")
    event.smithing("kubejs:space_fermium_helmet", "ad_astra:netherite_space_helmet", "kubejs:fermium_helmet", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_chestplate", "ad_astra:netherite_space_suit", "kubejs:fermium_chestplate", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_leggings", "ad_astra:netherite_space_pants", "kubejs:fermium_leggings", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_boots", "ad_astra:netherite_space_boots", "kubejs:fermium_boots", "ad_astra:oxygen_distributor")

    const gtr = event.recipes.gtceu

    gtr.alloy_smelter("gtceu:pulsating_alloy_ingot")
        .itemInputs("minecraft:iron_ingot", "minecraft:gunpowder")
        .itemOutputs("gtceu:pulsating_alloy_ingot")
        .EUt(16)
        .duration(80)

    gtr.alloy_smelter("gtceu:conductive_alloy_ingot")
        .itemInputs("gtceu:pulsating_alloy_ingot", "minecraft:redstone")
        .itemOutputs("gtceu:conductive_alloy_ingot")
        .EUt(16)
        .duration(160)

    gtr.mixer("kubejs:vibrant_alloy_dust")
        .itemInputs("#forge:dusts/energetic_alloy", "#forge:dusts/ender_pearl")
        .itemOutputs("2x gtceu:vibrant_alloy_dust")
        .duration(260)
        .EUt(30)

    gtr.mixer("kubejs:energetic_alloy_dust")
        .itemInputs("2x #forge:dusts/gold", "#forge:dusts/redstone", "#forge:dusts/glowstone")
        .itemOutputs("4x gtceu:energetic_alloy_dust")
        .duration(140)
        .EUt(30)

    gtr.circuit_assembler("kubejs:basic_control_circuit")
        .notConsumable("gtceu:vacuum_tube")
        .itemInputs("gtceu:steel_plate", "minecraft:redstone")
        .itemOutputs("2x kubejs:basic_control_circuit")
        .inputFluids("gtceu:glue 20")
        .duration(40)
        .EUt(7)

    gtr.circuit_assembler("kubejs:advanced_control_circuit")
        .notConsumable("gtceu:basic_electronic_circuit")
        .itemInputs("kubejs:basic_control_circuit", "gtceu:iron_plate", "gtceu:red_alloy_dust")
        .itemOutputs("2x kubejs:advanced_control_circuit")
        .inputFluids("gtceu:glue 20")
        .duration(80)
        .EUt(16)

    gtr.circuit_assembler("kubejs:elite_control_circuit")
        .notConsumable("gtceu:good_electronic_circuit")
        .itemInputs("minecraft:paper", "2x kubejs:advanced_control_circuit", "gtceu:wrought_iron_plate", "gtceu:small_diamond_dust")
        .itemOutputs("2x kubejs:elite_control_circuit")
        .inputFluids("gtceu:glue 20")
        .duration(160)
        .EUt(30)

    gtr.circuit_assembler("kubejs:ultimate_control_circuit")
        .notConsumable("gtceu:advanced_integrated_circuit")
        .itemInputs("gtceu:resin_printed_circuit_board", "kubejs:elite_control_circuit", "gtceu:steel_plate", "gtceu:small_obsidian_dust", "2x gtceu:red_alloy_screw")
        .itemOutputs("kubejs:ultimate_control_circuit")
        .inputFluids("gtceu:glue 20")
        .duration(80)
        .EUt(120)

    gtr.circuit_assembler("kubejs:ultima_control_circuit")
        .itemInputs("gtceu:phenolic_printed_circuit_board", "4x kubejs:ultimate_control_circuit", "8x gtceu:red_alloy_foil")
        .itemOutputs("4x kubejs:ultima_control_circuit")
        .EUt(480)
        .duration(200)

    const machine_materialas = [
        ["uhv", "europium", "1966080", "uv", "128", "kubejs:nm_chip"],
        ["uev", "mithril", "7864320", "uhv", "256", "kubejs:nm_chip"],
        ["uiv", "neutronium", "31457280", "uev", "512", "kubejs:pm_chip"],
        ["uxv", "taranium", "125829120", "uiv", "1024", "kubejs:pm_chip"],
        ["opv", "crystalmatrix", "503316480", "uxv", "2048", "kubejs:fm_chip"],
        ["max", "cosmicneutronium", "503316480", "opv", "4096", "kubejs:fm_chip"]
    ]
    machine_materialas.forEach((machine_material) => {
        gtr.assembly_line("gtceu:" + machine_material[0] + "_energy_input_hatch")
            .itemInputs("gtceu:" + machine_material[0] + "_machine_hull",
                "4x gtceu:" + machine_material[1] + "_single_cable",
                "2x " + machine_material[5],
                "#gtceu:circuits/" + machine_material[0],
                "2x kubejs:" + machine_material[0] + "_voltage_coil")
            .inputFluids("gtceu:sodium_potassium 10000", "gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
            .itemOutputs("gtceu:" + machine_material[0] + "_energy_input_hatch")
            .EUt(machine_material[2])
            .duration(800)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + machine_material[3] + "_energy_input_hatch"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(machine_material[2])
                .CWUt(machine_material[4]))

        gtr.assembly_line("gtceu:" + machine_material[0] + "_energy_output_hatch")
            .itemInputs("gtceu:" + machine_material[0] + "_machine_hull",
                "4x #forge:springs/" + machine_material[1],
                "2x " + machine_material[5],
                "#gtceu:circuits/" + machine_material[0],
                "2x kubejs:" + machine_material[0] + "_voltage_coil")
            .inputFluids("gtceu:sodium_potassium 10000", "gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
            .itemOutputs("gtceu:" + machine_material[0] + "_energy_output_hatch")
            .EUt(machine_material[2])
            .duration(800)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + machine_material[3] + "_energy_output_hatch"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(machine_material[2])
                .CWUt(machine_material[4]))
    })

    gtr.assembly_line("gtceu:magic_manufacturer")
        .itemInputs("8x gtceu:adamantium_plate",
            "16x gtceu:kanthal_rod",
            "16x gtceu:ultimet_screw",
            "16x minecraft:end_crystal",
            "16x kubejs:ballast",
            "gtceu:uev_electric_pump",
            "2x gtceu:uev_field_generator",
            "minecraft:dragon_egg",
            "4x #gtceu:circuits/uiv",
            "gtceu:really_max_battery",
            "8x gtceu:dense_obsidian_plate",
            "16x gtceu:double_stellite_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
        .itemOutputs("gtceu:magic_manufacturer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("kubejs:magic_core"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(128))

    gtr.assembly_line("kubejs:draconic_energy_core")
        .itemInputs("kubejs:wyvern_energy_core",
            "64x gtceu:uv_lapotronic_battery",
            "16x kubejs:awakened_core",
            "16x kubejs:dragon_stabilizer_core",
            "8x #gtceu:circuits/opv",
            "gtceu:uv_solar_panel",
            "64x kubejs:smd_capacitor_cosmic",
            "64x kubejs:smd_diode_cosmic",
            "64x kubejs:smd_resistor_cosmic",
            "64x kubejs:smd_transistor_cosmic",
            "64x kubejs:smd_inductor_cosmic",
            "64x gtceu:draconiumawakened_block")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:draconiumawakened 28800", "gtceu:cosmicneutronium 14400", "gtceu:crystalmatrix 14400")
        .itemOutputs("kubejs:draconic_energy_core")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:wyvern_energy_core"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:super_computation")
        .itemInputs("16x gtceu:data_bank",
            "64x #gtceu:circuits/uev",
            "64x gtceu:uv_field_generator",
            "64x gtceu:uv_field_generator",
            "16x gtceu:data_module",
            "8x gtceu:gold_nanoswarm",
            "4x gtceu:hpca_bridge_component",
            "16x gtceu:computer_monitor_cover",
            "64x kubejs:optical_processing_core",
            "64x kubejs:high_precision_crystal_soc",
            "64x gtceu:enderite_quadruple_wire",
            "64x gtceu:normal_optical_pipe")
        .inputFluids("gtceu:mutated_living_solder 2880", "gtceu:vanadium_gallium 2880", "gtceu:pcb_coolant 16000", "kubejs:gelid_cryotheum 16000")
        .itemOutputs("gtceu:super_computation")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:high_performance_computation_array"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:super_computation_component")
        .itemInputs("gtceu:hpca_advanced_computation_component",
            "gtceu:hpca_heat_sink_component",
            "4x #gtceu:circuits/uhv",
            "#gtceu:circuits/uev",
            "2x gtceu:zpm_field_generator",
            "gtceu:data_orb",
            "kubejs:high_precision_crystal_soc",
            "4x gtceu:normal_optical_pipe")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:vanadium_gallium 576", "gtceu:pcb_coolant 1000", "kubejs:gelid_cryotheum 1000")
        .itemOutputs("gtceu:super_computation_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:advanced_computer_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtceu:large_chemical_plant")
        .itemInputs("16x gtceu:large_chemical_reactor",
            "4x gtceu:neutronium_spring",
            "4x gtceu:uv_field_generator",
            "4x #gtceu:circuits/uev",
            "4x gtceu:polytetrafluoroethylene_nonuple_fluid_pipe",
            "8x gtceu:uhv_electric_motor",
            "16x gtceu:polytetrafluoroethylene_rod",
            "64x gtceu:polytetrafluoroethylene_foil",
            "16x gtceu:double_watertight_steel_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:polytetrafluoroethylene 2880")
        .itemOutputs("gtceu:large_chemical_plant")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:chemical_plant"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))

    gtr.assembly_line("gtceu:super_blast_smelter")
        .itemInputs("64x gtceu:tungsten_carbide_frame",
            "64x gtceu:mega_blast_furnace",
            "64x gtceu:mega_alloy_blast_smelter",
            "64x gtceu:uv_field_generator",
            "64x gtceu:iv_fluid_regulator",
            "64x #gtceu:circuits/uev",
            "64x gtceu:copper_nanoswarm",
            "64x gtceu:ruthenium_trinium_americium_neutronate_hex_wire",
            "14x gtceu:dense_tungsten_steel_plate",
            "14x gtceu:dense_rhodium_plated_palladium_plate",
            "14x gtceu:dense_naquadah_alloy_plate",
            "14x gtceu:dense_darmstadtium_plate",
            "64x gtceu:double_gallium_plate",
            "64x gtceu:double_chromium_plate",
            "64x gtceu:double_cobalt_plate",
            "64x gtceu:double_ruthenium_trinium_americium_neutronate_plate")
        .inputFluids("gtceu:cobalt 5760", "gtceu:niobium 5760", "gtceu:astatine 5760", "gtceu:actinium 5760")
        .itemOutputs("gtceu:super_blast_smelter")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:multi_smelter"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtceu:super_cooler_component")
        .itemInputs("gtceu:hpca_active_cooler_component",
            "gtceu:hpca_heat_sink_component",
            "4x gtceu:tungsten_large_fluid_pipe",
            "16x gtceu:naquadah_screw",
            "gtceu:zpm_fluid_regulator",
            "32x gtceu:fine_rhodium_wire")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:vanadium_gallium 576", "gtceu:pcb_coolant 1000", "kubejs:gelid_cryotheum 1000")
        .itemOutputs("gtceu:super_cooler_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:hpca_active_cooler_component"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtceu:sps_crafting")
        .itemInputs("8x gtceu:double_americium_plate",
            "32x gtceu:uev_robot_arm",
            "8x gtceu:uev_fluid_regulator",
            "4x gtceu:long_rhodium_rod",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:naquadah_nanoswarm",
            "kubejs:pellet_antimatter",
            "kubejs:rydberg_spinorial_assembly",
            "8x gtceu:degenerate_rhenium_plate",
            "16x gtceu:double_grisium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:mana 10000")
        .itemOutputs("gtceu:sps_crafting")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("kubejs:pellet_antimatter"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(256))

    gtr.assembly_line("gtceu:advanced_sps_crafting")
        .itemInputs("4x gtceu:uiv_emitter",
            "4x gtceu:uiv_sensor",
            "4x kubejs:rydberg_spinorial_assembly",
            "16x kubejs:pellet_antimatter",
            "16x minecraft:reinforced_deepslate",
            "64x minecraft:crying_obsidian",
            "64x minecraft:crying_obsidian",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uiv_field_generator",
            "gtceu:really_max_battery",
            "16x gtceu:neutronium_nanoswarm",
            "16x gtceu:double_gold_plate")
        .inputFluids("gtceu:super_mutated_living_solder 864", "gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:echoite 2880")
        .itemOutputs("gtceu:advanced_sps_crafting")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:sps_crafting"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(256))

    gtr.assembly_line("gtceu:mass_fabricator")
        .itemInputs("8x gtceu:double_black_titanium_plate",
            "4x gtceu:long_hsse_rod",
            "16x gtceu:adamantium_screw",
            "4x gtceu:uiv_field_generator",
            "gtceu:uiv_electric_pump",
            "4x gtceu:long_rhodium_rod",
            "4x #gtceu:circuits/uxv",
            "8x gtceu:enderium_nanoswarm",
            "8x gtceu:double_blue_alloy_plate",
            "32x gtceu:double_grisium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
        .itemOutputs("gtceu:mass_fabricator")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:matter_fabricator"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtceu:matter_fabricator")
        .itemInputs("8x gtceu:double_tritanium_plate",
            "16x gtceu:long_bismuth_bronze_rod",
            "32x gtceu:sterling_silver_screw",
            "4x gtceu:ruthenium_trinium_americium_neutronate_octal_wire",
            "2x gtceu:uhv_field_generator",
            "4x #gtceu:circuits/uev",
            "16x gtceu:fluxed_electrum_plate",
            "16x gtceu:technetium_plate",
            "8x gtceu:double_abyssalalloy_plate",
            "16x gtceu:double_rose_gold_plate")
        .inputFluids("gtceu:soldering_alloy 1296", "gtceu:gold 1296", "gtceu:silicon_carbide 1296", "gtceu:aluminium_bronze 1296")
        .itemOutputs("gtceu:matter_fabricator")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_recycler"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtceu:assembler_module")
        .itemInputs("4x kubejs:advanced_assembly_line_unit",
            "4x gtceu:uv_emitter",
            "4x gtceu:uv_sensor",
            "4x gtceu:uv_robot_arm",
            "4x gtceu:uv_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
            "8x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:soldering_alloy 2880")
        .itemOutputs("gtceu:assembler_module")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:advanced_assembly_line"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtceu:resource_collection")
        .itemInputs("gtceu:large_void_miner",
            "gtceu:void_fluid_drilling_rig",
            "4x gtceu:uv_robot_arm",
            "16x gtceu:stellite_gear",
            "4x gtceu:uv_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
            "8x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:soldering_alloy 2880")
        .itemOutputs("gtceu:resource_collection")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:luv_large_miner"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtceu:power_module")
        .itemInputs("gtceu:hssg_frame", "2x gtceu:iv_field_generator", "4x gtceu:luv_conveyor_module", "gtceu:uv_electric_motor", "4x gtceu:battery_alloy_rod", "2x gtceu:small_darmstadtium_gear", "4x gtceu:advanced_power_thruster", "6x gtceu:double_blue_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:curium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtceu:power_module")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:gravitation_engine_unit"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(64))

    gtr.assembly_line("gtceu:stellar_forge")
        .itemInputs("4x kubejs:stellar_containment_casing",
            "64x gtceu:naquadah_alloy_bolt",
            "32x gtceu:trinium_plate",
            "64x gtceu:darmstadtium_screw",
            "64x gtceu:highurabilityompoundteel_rod",
            "32x gtceu:titanium_tungsten_carbide_gear",
            "32x kubejs:nm_chip",
            "8x #gtceu:circuits/uev",
            "8x gtceu:uhv_sensor",
            "8x gtceu:uhv_emitter",
            "4x gtceu:uhv_field_generator",
            "gtceu:max_battery")
        .inputFluids("gtceu:soldering_alloy 20736", "gtceu:neutronium 2880", "gtceu:protactinium 2880", "gtceu:fermium 2880")
        .itemOutputs("gtceu:stellar_forge")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:uv_fusion_reactor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtceu:plasma_condenser")
        .itemInputs("64x gtceu:inconel_792_screw",
            "16x gtceu:rhodium_plated_palladium_plate",
            "16x gtceu:small_neutronium_gear",
            "8x gtceu:tungsten_carbide_gear",
            "4x gtceu:uhv_electric_motor",
            "4x gtceu:uhv_electric_pump",
            "2x #gtceu:circuits/uev",
            "4x kubejs:magnetic_trap",
            "2x gtceu:copper_nanoswarm",
            "4x gtceu:uhv_sensor",
            "8x gtceu:double_tungsten_plate",
            "16x gtceu:double_zirconium_carbide_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:zirconium_carbide 5760", "gtceu:tungsten_carbide 5760", "gtceu:tantalum_carbide 5760")
        .itemOutputs("gtceu:plasma_condenser")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .stationResearch(b => b.researchStack(Item.of("gtceu:mega_vacuum_freezer"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))

    gtr.assembly_line("gtceu:void_fluid_drilling_rig")
        .itemInputs("gtceu:mv_fluid_drilling_rig",
            "gtceu:hv_fluid_drilling_rig",
            "gtceu:ev_fluid_drilling_rig",
            "4x gtceu:mv_field_generator",
            "4x gtceu:hv_field_generator",
            "4x gtceu:ev_field_generator",
            "4x #gtceu:circuits/luv",
            "16x gtceu:hsse_screw",
            "4x gtceu:long_hssg_rod",
            "8x gtceu:hsse_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtceu:void_fluid_drilling_rig")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:ev_fluid_drilling_rig"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(64))

    gtr.assembly_line("gtceu:large_void_miner")
        .itemInputs("4x gtceu:ev_large_miner",
            "4x gtceu:iv_large_miner",
            "4x gtceu:luv_large_miner",
            "64x gtceu:uranium_triplatinum_single_wire",
            "64x gtceu:samarium_iron_arsenic_oxide_single_wire",
            "64x gtceu:indium_tin_barium_titanium_cuprate_single_wire",
            "8x gtceu:ev_field_generator",
            "8x gtceu:iv_field_generator",
            "8x gtceu:luv_field_generator",
            "8x gtceu:ev_sensor",
            "8x gtceu:iv_sensor",
            "8x gtceu:luv_sensor",
            "16x #gtceu:circuits/uv",
            "16x gtceu:double_osmium_plate",
            "16x gtceu:double_black_steel_plate",
            "16x gtceu:double_niobium_nitride_plate")
        .itemOutputs("gtceu:large_void_miner")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:fall_king 5760", "gtceu:energetic_alloy 5760", "gtceu:tanmolyium 5760")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:void_miner"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(64))

    gtr.assembly_line("gtceu:annihilate_generator")
        .itemInputs("kubejs:graviton_field_constraint_casing",
            "4x gtceu:uxv_emitter",
            "4x gtceu:uxv_sensor",
            "4x #gtceu:circuits/opv",
            "16x gtceu:uxv_field_generator",
            "4x kubejs:rydberg_spinorial_assembly",
            "16x kubejs:uxv_voltage_coil",
            "gtceu:insanely_max_battery",
            "8x gtceu:double_draconium_plate",
            "8x gtceu:double_legendarium_plate")
        .itemOutputs("gtceu:annihilate_generator")
        .inputFluids("gtceu:super_mutated_living_solder 4000", "gtceu:neutronium_doped_nanotubes 4000", "gtceu:europium 8192")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:annihilation_constrainer"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(4096))

    gtr.assembly_line("kubejs:suprachronal_mainframe_complex")
        .itemInputs("2x gtceu:eternity_frame",
            "kubejs:chaotic_core",
            "gtceu:micro_processor_mainframe",
            "gtceu:nano_processor_mainframe",
            "gtceu:quantum_processor_mainframe",
            "gtceu:crystal_processor_mainframe",
            "gtceu:wetware_processor_mainframe",
            "kubejs:bioware_mainframe",
            "kubejs:optical_mainframe",
            "kubejs:exotic_mainframe",
            "kubejs:cosmic_mainframe",
            "kubejs:supracausal_mainframe",
            "kubejs:eternity_catalyst",
            "16x kubejs:nuclear_star",
            "16x gtceu:eternity_foil",
            "4x gtceu:eternity_plate")
        .itemOutputs("kubejs:suprachronal_mainframe_complex")
        .inputFluids("gtceu:infinity 1000", "gtceu:spacetime 1000", "gtceu:eternity 1000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 1000")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(8000)
        .stationResearch(b => b.researchStack(Item.of("kubejs:suprachronal_max"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.suprachronal_assembly_line("kubejs:create_ultimate_battery")
        .itemInputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame",
            "4x kubejs:suprachronal_mainframe_complex",
            "16x gtceu:mega_max_battery",
            "16x gtceu:max_field_generator",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "16x gtceu:infinity_hex_wire",
            "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_foil",
            "32x gtceu:magnetohydrodynamicallyconstrainedstarmatter_plate",
            "32x gtceu:double_cosmic_plate")
        .itemOutputs("kubejs:create_ultimate_battery")
        .inputFluids("gtceu:infinity 1000", "gtceu:spacetime 1000", "gtceu:eternity 1000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 1000")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(8000)
        .stationResearch(b => b.researchStack(Item.of("gtceu:mega_max_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtceu:chemical_plant")
        .itemInputs("32x gtceu:polybenzimidazole_foil",
            "32x gtceu:watertight_steel_plate",
            "32x gtceu:long_cupronickel_rod",
            "8x gtceu:polytetrafluoroethylene_large_fluid_pipe",
            "4x gtceu:ptfe_pipe_casing",
            "4x gtceu:inert_machine_casing",
            "4x #gtceu:circuits/luv",
            "4x gtceu:luv_electric_motor",
            "4x gtceu:double_watertight_steel_plate")
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:polytetrafluoroethylene 2304")
        .itemOutputs("gtceu:chemical_plant")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("gtceu:large_chemical_reactor"))
        .dataStack(Item.of("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400))

    gtr.assembly_line("kubejs:iridium_casing")
        .itemInputs("2x gtceu:iridium_frame",
            "gtceu:titanium_turbine_casing",
            "gtceu:stainless_steel_turbine_casing",
            "4x gtceu:osmiridium_foil",
            "4x gtceu:iridium_foil",
            "gtceu:tanmolyium_plate",
            "gtceu:double_iridium_plate",
            "gtceu:double_osmiridium_plate")
        .inputFluids("gtceu:soldering_alloy 1440", "gtceu:iridium 576")
        .itemOutputs("2x kubejs:iridium_casing")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("gtceu:large_scale_assembler_casing"))
        .dataStack(Item.of("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200))

    gtr.assembly_line("gtceu:hyper_reactor")
        .itemInputs("64x gtceu:uhpic_chip",
            "64x kubejs:nm_chip",
            "4x #gtceu:circuits/uev",
            "2x gtceu:uev_electric_pump",
            "2x gtceu:uev_field_generator",
            "4x gtceu:double_orichalcum_plate",
            "4x gtceu:double_enderite_plate",
            "8x gtceu:naquadria_gear",
            "16x gtceu:naquadah_nanoswarm",
            "32x gtceu:naquadria_screw",
            "gtceu:max_battery")
        .inputFluids("gtceu:soldering_alloy 1296", "gtceu:mutated_living_solder 864")
        .itemOutputs("gtceu:hyper_reactor")
        .EUt(2000000)
        .duration(500)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_naquadah_reactor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(128))

    gtr.assembly_line("gtceu:advanced_hyper_reactor")
        .itemInputs("64x kubejs:nm_chip",
            "64x kubejs:pm_chip",
            "4x #gtceu:circuits/uxv",
            "2x gtceu:uiv_electric_pump",
            "2x gtceu:uiv_field_generator",
            "8x gtceu:double_seaborgium_plate",
            "8x gtceu:double_taranium_plate",
            "16x gtceu:naquadria_gear",
            "64x gtceu:naquadria_screw",
            "64x gtceu:infuscolium_nanoswarm",
            "gtceu:transcendent_max_battery")
        .inputFluids("gtceu:soldering_alloy 1296", "gtceu:super_mutated_living_solder 864")
        .itemOutputs("gtceu:advanced_hyper_reactor")
        .EUt(32000000)
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:hyper_reactor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:really_max_battery")
        .itemInputs("16x gtceu:double_neutronium_plate",
            "16x #gtceu:circuits/uev",
            "gtceu:max_battery",
            "8x kubejs:bioware_processing_core",
            "64x kubejs:nm_wafer",
            "64x kubejs:nm_wafer",
            "64x kubejs:smd_diode_bioware",
            "64x kubejs:smd_capacitor_bioware",
            "64x kubejs:smd_resistor_bioware",
            "64x kubejs:smd_transistor_bioware",
            "64x kubejs:smd_inductor_bioware",
            "64x gtceu:enderite_double_wire",
            "64x gtceu:quantanium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:polyetheretherketone 5760", "gtceu:neutronium 1296", "gtceu:duranium 2592")
        .itemOutputs("gtceu:really_max_battery")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:max_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(288))

    gtr.assembly_line("gtceu:transcendent_max_battery")
        .itemInputs("16x gtceu:double_quantanium_plate",
            "16x #gtceu:circuits/uiv",
            "gtceu:really_max_battery",
            "8x kubejs:optical_processing_core",
            "64x kubejs:nm_wafer",
            "64x kubejs:nm_wafer",
            "64x kubejs:smd_diode_optical",
            "64x kubejs:smd_capacitor_optical",
            "64x kubejs:smd_resistor_optical",
            "64x kubejs:smd_transistor_optical",
            "64x kubejs:smd_inductor_optical",
            "64x gtceu:echoite_double_wire",
            "64x gtceu:adamantium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:zylon 5760", "gtceu:adamantine 2592", "gtceu:adamantium 2592")
        .itemOutputs("gtceu:transcendent_max_battery")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:really_max_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(576))

    gtr.assembly_line("gtceu:extremely_max_battery")
        .itemInputs("16x gtceu:double_adamantium_plate",
            "16x #gtceu:circuits/uxv",
            "gtceu:transcendent_max_battery",
            "8x kubejs:exotic_processing_core",
            "64x kubejs:pm_wafer",
            "64x kubejs:pm_wafer",
            "64x kubejs:smd_diode_exotic",
            "64x kubejs:smd_capacitor_exotic",
            "64x kubejs:smd_resistor_exotic",
            "64x kubejs:smd_transistor_exotic",
            "64x kubejs:smd_inductor_exotic",
            "64x gtceu:legendarium_double_wire",
            "64x gtceu:vibranium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:kevlar 5760", "gtceu:vibranium 2592", "gtceu:heavy_quark_degenerate_matter 2592")
        .itemOutputs("gtceu:extremely_max_battery")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:transcendent_max_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1152))

    gtr.assembly_line("gtceu:insanely_max_battery")
        .itemInputs("16x gtceu:double_vibranium_plate",
            "16x #gtceu:circuits/opv",
            "gtceu:extremely_max_battery",
            "8x kubejs:cosmic_processing_core",
            "64x kubejs:pm_wafer",
            "64x kubejs:pm_wafer",
            "64x kubejs:smd_diode_cosmic",
            "64x kubejs:smd_capacitor_cosmic",
            "64x kubejs:smd_resistor_cosmic",
            "64x kubejs:smd_transistor_cosmic",
            "64x kubejs:smd_inductor_cosmic",
            "64x gtceu:draconiumawakened_double_wire",
            "64x gtceu:draconium_bolt")
        .inputFluids("gtceu:super_mutated_living_solder 17280", "gtceu:fullerene_polymer_matrix_pulp 5760", "gtceu:legendarium 2592", "gtceu:draconiumawakened 2592")
        .itemOutputs("gtceu:insanely_max_battery")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(3600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:extremely_max_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2304))

    gtr.assembly_line("gtceu:mega_max_battery")
        .itemInputs("16x gtceu:double_draconium_plate",
            "16x #gtceu:circuits/max",
            "gtceu:insanely_max_battery",
            "8x kubejs:supracausal_processing_core",
            "64x kubejs:fm_wafer",
            "64x kubejs:fm_wafer",
            "64x kubejs:smd_diode_supracausal",
            "64x kubejs:smd_capacitor_supracausal",
            "64x kubejs:smd_resistor_supracausal",
            "64x kubejs:smd_transistor_supracausal",
            "64x kubejs:smd_inductor_supracausal",
            "64x gtceu:infinity_quadruple_wire",
            "64x gtceu:transcendentmetal_bolt")
        .inputFluids("gtceu:super_mutated_living_solder 24560", "gtceu:radox 5760", "gtceu:infinity 2592", "gtceu:spacetime 2592")
        .itemOutputs("gtceu:mega_max_battery")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Item.of("gtceu:insanely_max_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(4608))

    gtr.assembly_line("gtceu:advanced_assembly_line")
        .itemInputs("4x gtceu:assembly_line_casing",
            "2x gtceu:uv_robot_arm",
            "2x gtceu:uv_emitter",
            "2x gtceu:uv_sensor",
            "4x #gtceu:circuits/uhv",
            "8x gtceu:stellite_gear",
            "8x gtceu:double_hssg_plate",
            "8x gtceu:double_tanmolyium_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:rose_gold 5760", "gtceu:osmiridium 5760", "gtceu:vanadium_gallium 5760")
        .itemOutputs("gtceu:advanced_assembly_line")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:assembly_line"))
            .dataStack(Item.of("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(32))

    gtr.assembly_line("gtceu:space_probe_surface_reception")
        .itemInputs("12x gtceu:double_adamantine_plate",
            "12x gtceu:neutronium_gear",
            "16x gtceu:double_titansteel_plate",
            "6x gtceu:fullerene_polymer_matrix_pulp_foil",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uxv_emitter",
            "4x gtceu:uxv_sensor",
            "16x gtceu:astraltitanium_rod",
            "8x kubejs:lepton_trap_crystal",
            "4x kubejs:scintillator",
            "2x gtceu:fusion_coil",
            "16x gtceu:double_arceusalloy2b_plate")
        .inputFluids("gtceu:mutated_living_solder 864", "gtceu:soldering_alloy 1296", "gtceu:cinobite 864")
        .itemOutputs("gtceu:space_probe_surface_reception")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:resource_collection"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtceu:sphere_of_harmony")
        .itemInputs("16x kubejs:dimension_injection_casing",
            "16x kubejs:spacetime_compression_field_generator",
            "16x kubejs:dimensional_stability_casing",
            "64x gtceu:uv_world_accelerator",
            "64x gtceu:resource_collection",
            "64x gtceu:high_performance_computation_array",
            "32x kubejs:ctc_computational_unit",
            "32x kubejs:stabilized_wormhole_generator",
            "16x #gtceu:circuits/max",
            "16x gtceu:cosmicneutronium_nanoswarm",
            "64x gtceu:opv_emitter",
            "64x gtceu:opv_sensor",
            "64x gtceu:opv_robot_arm",
            "64x kubejs:time_dilation_containment_unit",
            "4x gtceu:insanely_max_battery",
            "32x gtceu:double_chaos_plate")
        .inputFluids("gtceu:super_mutated_living_solder 480000", "gtceu:liquid_degenerate_rhenium 100000", "gtceu:neutronium 57600", "gtceu:infinity 16000")
        .itemOutputs("gtceu:sphere_of_harmony")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:recursively_folded_negative_space"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtceu:dimensionally_transcendent_plasma_forge")
        .itemInputs("16x gtceu:black_titanium_frame",
            "8x kubejs:dimensional_bridge_casing",
            "16x gtceu:super_blast_smelter",
            "4x gtceu:uiv_energy_input_hatch",
            "8x gtceu:echoite_hex_wire",
            "32x #gtceu:circuits/uiv",
            "16x gtceu:zpm_quantum_chest",
            "16x gtceu:zpm_quantum_tank",
            "16x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_pump",
            "gtceu:extremely_max_battery",
            "16x gtceu:uruium_nanoswarm",
            "64x gtceu:astraltitanium_plate",
            "64x gtceu:arceusalloy2b_plate",
            "32x gtceu:double_hassium_plate",
            "32x gtceu:double_hastelloyx_78_plate")
        .inputFluids("gtceu:mutated_living_solder 12960", "gtceu:transition 5760", "gtceu:hastelloyx_78 5760", "gtceu:hastelloyk_243 5760")
        .itemOutputs("gtceu:dimensionally_transcendent_plasma_forge")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Item.of("gtceu:stellar_forge"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(4096))

    gtr.assembly_line("gtceu:dimensionally_transcendent_mixer")
        .itemInputs("16x gtceu:black_titanium_frame",
            "64x gtceu:luv_mixer",
            "48x gtceu:zpm_mixer",
            "32x gtceu:uv_mixer",
            "16x gtceu:uhv_mixer",
            "8x gtceu:uev_mixer",
            "4x gtceu:uiv_mixer",
            "16x gtceu:luv_quantum_chest",
            "16x gtceu:luv_quantum_tank",
            "4x gtceu:uiv_field_generator",
            "4x gtceu:uiv_electric_motor",
            "4x gtceu:long_taranium_rod",
            "16x gtceu:astraltitanium_gear",
            "gtceu:transcendent_max_battery",
            "4x gtceu:vibranium_nanoswarm",
            "16x gtceu:double_hastelloyx_78_plate")
        .inputFluids("gtceu:mutated_living_solder 12960", "gtceu:niobium_titanium 5760", "gtceu:grisium 5760", "gtceu:black_titanium 5760")
        .itemOutputs("gtceu:dimensionally_transcendent_mixer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_mixer"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtceu:precision_assembler")
        .itemInputs("4x gtceu:zpm_robot_arm",
            "4x gtceu:zpm_electric_piston",
            "4x gtceu:zpm_conveyor_module",
            "4x #gtceu:circuits/uv",
            "8x gtceu:platinum_screw",
            "8x gtceu:osmium_screw",
            "8x gtceu:niobium_titanium_screw",
            "8x gtceu:ruridit_screw",
            "8x gtceu:mar_m_200_steel_rod",
            "4x gtceu:trinium_gear",
            "8x gtceu:double_inconel_792_plate",
            "8x gtceu:double_hastelloy_n_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:tantalum 5760", "gtceu:manganese_phosphide 5760", "gtceu:magnesium_diboride 5760")
        .itemOutputs("gtceu:precision_assembler")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_assembler"))
            .dataStack(Item.of("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(48))

    gtr.assembly_line("gtceu:decay_hastener")
        .itemInputs("8x gtceu:neutron_reflector", "4x gtceu:luv_field_generator", "4x #gtceu:circuits/zpm", "16x gtceu:fine_naquadria_wire", "8x gtceu:long_darmstadtium_rod", "4x gtceu:double_incoloy_ma_956_plate", "16x gtceu:double_thorium_plate")
        .itemOutputs("gtceu:decay_hastener")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:zpm_world_accelerator"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(32))

    gtr.assembly_line("gtceu:compressed_stone_dust")
        .itemInputs("64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust")
        .itemOutputs("gtceu:compressed_stone_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)
        .stationResearch(b => b.researchStack(Item.of("minecraft:reinforced_deepslate"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(128))

    gtr.assembly_line("kubejs:time_dilation_containment_unit")
        .itemInputs("4x gtceu:naquadah_alloy_rod", "4x gtceu:degenerate_rhenium_plate", "2x gtceu:gravi_star", "2x gtceu:ruthenium_trinium_americium_neutronate_single_wire", "gtceu:uhv_emitter")
        .inputFluids("gtceu:fluxed_electrum 288", "gtceu:mutated_living_solder 288", "gtceu:neutronium 288", "gtceu:tritanium 576")
        .itemOutputs("kubejs:time_dilation_containment_unit")
        .EUt(8000000)
        .duration(100)
        .stationResearch(b => b.researchStack(Item.of("kubejs:empty_laser_cooling_container"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))

    gtr.assembly_line("kubejs:extremely_durable_plasma_cell")
        .itemInputs("48x gtceu:neutronium_plate", "4x gtceu:heavy_quark_degenerate_matter_large_fluid_pipe", "2x gtceu:uxv_electric_pump", "2x gtceu:uxv_field_generator", "gtceu:infuscolium_nanoswarm", "2x gtceu:quantumchromodynamically_confined_matter_frame", "4x kubejs:force_field_glass", "8x gtceu:fusion_coil", "2x #gtceu:circuits/uiv", "4x gtceu:double_adamantine_plate", "4x gtceu:double_celestialtungsten_plate")
        .inputFluids("gtceu:super_mutated_living_solder 2304", "gtceu:dalisenite 2304", "gtceu:echoite 2592", "gtceu:taranium 1584")
        .itemOutputs("kubejs:extremely_durable_plasma_cell")
        .EUt(15000000)
        .duration(150)
        .stationResearch(b => b.researchStack(Item.of("kubejs:plasma_containment_cell"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(128))

    gtr.assembly_line("kubejs:dimension_injection_casing")
        .itemInputs("6x gtceu:osmiridium_plate", "4x gtceu:lead_plate", "12x gtceu:adamantium_bolt", "2x #gtceu:circuits/iv", "2x gtceu:enderite_single_wire", "gtceu:ev_super_tank", "gtceu:ev_super_chest")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200", "gtceu:vibrant_alloy 288", "gtceu:astral_silver 288", "gtceu:enriched_naquadah 288")
        .itemOutputs("2x kubejs:dimension_injection_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:spacetime_assembly_line_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(512))

    gtr.assembly_line("kubejs:spacetime_compression_field_generator")
        .itemInputs("kubejs:dimensionally_transcendent_casing", "kubejs:containment_field_generator", "4x kubejs:dyson_deployment_casing", "gtceu:opv_field_generator", "kubejs:microwormhole_generator", "4x gtceu:orichalcum_nanoswarm", "2x gtceu:infinity_rod", "gtceu:double_starmetal_plate", "gtceu:double_quantumchromodynamically_confined_matter_plate", "4x gtceu:double_titan_precision_steel_plate")
        .inputFluids("gtceu:super_mutated_living_solder 576", "gtceu:cosmicneutronium 288", "gtceu:crystalmatrix 576", "gtceu:heavy_quark_degenerate_matter 576")
        .itemOutputs("kubejs:spacetime_compression_field_generator")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:time_dilation_containment_unit"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1024))

    gtr.assembly_line("kubejs:dimensional_bridge_casing")
        .itemInputs("kubejs:dimensionally_transcendent_casing", "gtceu:uv_quantum_chest", "gtceu:uv_quantum_tank", "2x gtceu:enderite_single_wire", "2x #gtceu:circuits/uv", "gtceu:uhv_field_generator")
        .itemOutputs("kubejs:dimensional_bridge_casing")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:liquid_degenerate_rhenium 200", "gtceu:duranium 288", "gtceu:enriched_naquadah 288")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:dimension_injection_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("kubejs:manifold_oscillatory_power_cell")
        .itemInputs("32x gtceu:titansteel_single_wire", "32x gtceu:magnetic_neodymium_rod", "16x gtceu:vibranium_plate", "8x gtceu:fine_legendarium_wire", "4x kubejs:amorphous_matter", "16x gtceu:double_red_alloy_plate", "2x gtceu:degenerate_rhenium_plate", "4x gtceu:double_quantum_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144", "gtceu:taranium 72", "gtceu:naquadria 144", "gtceu:tritanium 288")
        .itemOutputs("kubejs:manifold_oscillatory_power_cell")
        .EUt(33550000)
        .duration(1800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:luv_vanadium_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(128))

    gtr.assembly_line("kubejs:hyperdimensional_drone")
        .itemInputs("2x gtceu:max_robot_arm", "2x gtceu:max_conveyor_module", "2x gtceu:max_emitter", "2x gtceu:max_sensor", "gtceu:max_field_generator", "kubejs:chaotic_core", "kubejs:draconic_energy_core", "kubejs:spacetime_catalyst", "kubejs:ctc_guidance_unit", "gtceu:black_dwarf_mtter_nanoswarm", "64x kubejs:dyson_swarm_module", "64x kubejs:dyson_swarm_module", "64x kubejs:dyson_swarm_module", "64x kubejs:dyson_swarm_module", "16x gtceu:double_transcendentmetal_plate", "16x gtceu:double_hypogen_plate")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:transcendentmetal 20000", "gtceu:rhugnor 20000", "gtceu:spacetime 10000")
        .itemOutputs("kubejs:hyperdimensional_drone")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:space_drone_mk6"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("kubejs:leptonic_charge")
        .itemInputs("gtceu:enriched_naquadah_frame", "gtceu:naquadriatictaranium_rod", "gtceu:double_uranium_235_plate", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:degenerate_rhenium_dust", "gtceu:protactinium_dust", "gtceu:mendelevium_dust", "2x gtceu:mithril_foil", "6x gtceu:orichalcum_bolt", "gtceu:enderium_plate", "gtceu:vibranium_plate")
        .inputFluids("gtceu:mutated_living_solder 1000", "gtceu:glyceryl_trinitrate 1000", "gtceu:stellar_energy_rocket_fuel 1000", "gtceu:free_electron_gas 1000")
        .itemOutputs("kubejs:leptonic_charge")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:naquadria_charge"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))

    gtr.assembly_line("kubejs:quantum_chromodynamic_charge")
        .itemInputs("2x gtceu:double_infuscolium_plate", "2x gtceu:heavy_quark_degenerate_matter_plate", "kubejs:time_dilation_containment_unit", "kubejs:leptonic_charge", "gtceu:double_superheavy_l_alloy_plate", "gtceu:double_superheavy_h_alloy_plate")
        .inputFluids("gtceu:draconium 72", "gtceu:gluons 1296", "gtceu:legendarium 144", "gtceu:starmetal 144")
        .itemOutputs("kubejs:quantum_chromodynamic_charge")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:leptonic_charge"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(128))

    gtr.assembly_line("gtceu:circuit_assembly_line")
        .itemInputs("4x kubejs:machine_casing_circuit_assembly_line",
            "4x #gtceu:circuits/uv",
            "8x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_robot_arm",
            "8x gtceu:zpm_conveyor_module",
            "8x gtceu:zpm_sensor",
            "8x gtceu:zpm_emitter",
            "4x gtceu:long_mithril_rod",
            "4x gtceu:double_niobium_titanium_plate",
            "4x gtceu:double_vanadium_gallium_plate",
            "4x gtceu:double_mithril_plate",
            "4x gtceu:double_fluxed_electrum_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:rose_gold 2880", "gtceu:osmium 2880", "gtceu:stellite 2880")
        .itemOutputs("gtceu:circuit_assembly_line")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_circuit_assembler"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("kubejs:bioware_processing_core")
        .itemInputs("kubejs:bioware_printed_circuit_board",
            "8x kubejs:smd_capacitor_bioware",
            "8x kubejs:smd_diode_bioware",
            "8x kubejs:smd_resistor_bioware",
            "8x kubejs:smd_transistor_bioware",
            "8x kubejs:smd_inductor_bioware",
            "2x gtceu:polyetheretherketone_foil",
            "8x kubejs:biological_cells",
            "8x kubejs:bioware_chip",
            "16x gtceu:fine_naquadah_wire",
            "4x gtceu:niobium_titanium_plate")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:polyethylene 1296", "gtceu:polyvinyl_chloride 864", "gtceu:soldering_alloy 1296")
        .itemOutputs("8x kubejs:bioware_processing_core")
        .EUt(368640)
        .duration(320)
        .stationResearch(b => b.researchStack(Item.of("kubejs:bioware_chip"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("kubejs:optical_processing_core")
        .itemInputs("kubejs:optical_printed_circuit_board",
            "8x kubejs:smd_capacitor_optical",
            "8x kubejs:smd_diode_optical",
            "8x kubejs:smd_resistor_optical",
            "8x kubejs:smd_transistor_optical",
            "8x kubejs:smd_inductor_optical",
            "2x gtceu:polyetheretherketone_foil",
            "2x kubejs:non_linear_optical_lens",
            "16x gtceu:normal_optical_pipe",
            "8x kubejs:optical_soc",
            "4x kubejs:solar_light_splitter",
            "kubejs:low_frequency_laser",
            "kubejs:medium_frequency_laser",
            "kubejs:high_frequency_laser",
            "kubejs:bose_einstein_cooling_container",
            "4x gtceu:graphene_plate")
        .inputFluids("gtceu:polytetrafluoroethylene 864", "gtceu:naquadah_alloy 432", "gtceu:soldering_alloy 1296", "gtceu:fullerene_doped_nanotubes 144")
        .itemOutputs("8x kubejs:optical_processing_core")
        .EUt(1474560)
        .duration(320)
        .stationResearch(b => b.researchStack(Item.of("kubejs:optical_soc"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("kubejs:exotic_processing_core")
        .itemInputs("kubejs:exotic_printed_circuit_board",
            "16x kubejs:smd_capacitor_exotic",
            "16x kubejs:smd_diode_exotic",
            "16x kubejs:smd_resistor_exotic",
            "16x kubejs:smd_transistor_exotic",
            "16x kubejs:smd_inductor_exotic",
            "8x gtceu:trinium_titanium_foil",
            "4x kubejs:high_precision_crystal_soc",
            "kubejs:rydberg_spinorial_assembly",
            "kubejs:x_ray_laser",
            "4x kubejs:non_linear_optical_lens",
            "8x gtceu:kevlar_foil",
            "4x gtceu:degenerate_rhenium_plate")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:quantum_dots 80")
        .itemOutputs("8x kubejs:exotic_processing_core")
        .EUt(4000000)
        .duration(160)
        .stationResearch(b => b.researchStack(Item.of("kubejs:exotic_chip"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("kubejs:cosmic_processing_core")
        .itemInputs("kubejs:cosmic_printed_circuit_board",
            "24x kubejs:smd_capacitor_cosmic",
            "24x kubejs:smd_diode_cosmic",
            "24x kubejs:smd_resistor_cosmic",
            "24x kubejs:smd_transistor_cosmic",
            "24x kubejs:smd_inductor_cosmic",
            "kubejs:cosmic_processing_unit_core",
            "kubejs:ultrashort_pulse_laser",
            "16x gtceu:fine_cinobite_wire",
            "32x gtceu:fine_borosilicate_glass_wire",
            "4x kubejs:bose_einstein_cooling_container",
            "2x gtceu:fullerene_polymer_matrix_pulp_foil",
            "4x gtceu:black_titanium_plate")
        .inputFluids("gtceu:zylon 864", "gtceu:adamantium 432", "gtceu:mutated_living_solder 1296", "gtceu:echoite 432")
        .itemOutputs("8x kubejs:cosmic_processing_core")
        .EUt(11796480)
        .duration(320)
        .stationResearch(b => b.researchStack(Item.of("kubejs:cosmic_processing_unit_core"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("kubejs:supracausal_processing_core")
        .itemInputs("kubejs:supracausal_printed_circuit_board",
            "64x kubejs:smd_capacitor_supracausal",
            "64x kubejs:smd_diode_supracausal",
            "64x kubejs:smd_resistor_supracausal",
            "64x kubejs:smd_transistor_supracausal",
            "64x kubejs:smd_inductor_supracausal",
            "3x kubejs:quantumchromodynamic_protective_plating",
            "2x gtceu:legendarium_single_wire",
            "kubejs:nuclear_clock",
            "kubejs:topological_manipulator_unit",
            "kubejs:relativistic_spinorial_memory_system",
            "kubejs:graviton_transducer",
            "4x gtceu:neutronium_plate")
        .inputFluids("gtceu:polyimide 1296", "gtceu:zylon 1296", "gtceu:fullerene_polymer_matrix_pulp 1296", "gtceu:radox 1296")
        .itemOutputs("8x kubejs:supracausal_processing_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:relativistic_spinorial_memory_system"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:qft_coil")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_frame",
            "kubejs:uruium_coil_block",
            "gtceu:uev_field_generator",
            "kubejs:quantumchromodynamic_protective_plating",
            "gtceu:uv_fluid_regulator",
            "gtceu:uhv_fluid_regulator",
            "gtceu:uev_fluid_regulator",
            "gtceu:uiv_fluid_regulator",
            "gtceu:naquadah_huge_fluid_pipe",
            "gtceu:neutronium_huge_fluid_pipe",
            "gtceu:enderium_huge_fluid_pipe",
            "gtceu:heavy_quark_degenerate_matter_huge_fluid_pipe",
            "2x gtceu:ender_pearl_plate",
            "2x gtceu:nether_star_plate",
            "4x gtceu:legendarium_plate",
            "4x gtceu:crystalmatrix_plate")
        .inputFluids("gtceu:vanadium_gallium 1296", "gtceu:gallium_arsenide 1296", "gtceu:quantum 1296", "gtceu:hikarium 1296")
        .itemOutputs("gtceu:qft_coil")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:fusion_coil"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtceu:spacetimecontinuumripper")
        .itemInputs("kubejs:manipulator",
            "4x gtceu:uiv_emitter",
            "gtceu:uiv_field_generator",
            "gtceu:uxv_emitter",
            "4x gtceu:echoite_octal_wire",
            "8x gtceu:neutron_reflector",
            "4x gtceu:double_dubnium_plate",
            "4x gtceu:double_superheavy_l_alloy_plate")
        .inputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000", "gtceu:thulium 2880", "gtceu:neptunium 2880", "gtceu:fermium 2880")
        .itemOutputs("gtceu:spacetimecontinuumripper")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:manipulator"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtceu:spacetimebendingcore")
        .itemInputs("kubejs:manipulator",
            "4x gtceu:uiv_field_generator",
            "4x gtceu:uxv_robot_arm",
            "gtceu:uxv_fluid_regulator",
            "4x gtceu:echoite_octal_wire",
            "8x gtceu:neutron_reflector",
            "4x gtceu:double_hassium_plate",
            "4x gtceu:double_superheavy_h_alloy_plate")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:thulium 2880", "gtceu:nobelium 2880", "gtceu:lawrencium 2880")
        .itemOutputs("gtceu:spacetimebendingcore")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:spacetimecontinuumripper"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:a_mass_fabricator")
        .itemInputs("16x gtceu:active_transformer",
            "4x gtceu:mass_fabricator",
            "4x kubejs:cosmic_processing_core",
            "16x kubejs:magnetic_trap",
            "32x kubejs:scintillator_crystal",
            "16x kubejs:electron_source",
            "8x kubejs:unstable_star",
            "4x gtceu:vibranium_nanoswarm",
            "16x kubejs:charged_lepton_trap_crystal",
            "4x #gtceu:circuits/opv",
            "gtceu:extremely_max_battery",
            "16x gtceu:superheavy_h_alloy_plate",
            "32x gtceu:double_vibranium_plate",
            "32x gtceu:double_arceusalloy2b_plate")
        .inputFluids("gtceu:uruium 5760", "gtceu:zeron_100 2880", "gtceu:maraging_steel_300 2880", "gtceu:hastelloy_c_276 2880")
        .itemOutputs("gtceu:a_mass_fabricator")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:mass_fabricator"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:mage_assembler")
        .itemInputs("16x gtceu:large_assembler",
            "16x gtceu:large_circuit_assembler",
            "16x kubejs:precision_circuit_assembly_robot_mk1",
            "32x gtceu:uv_fluid_regulator",
            "64x gtceu:uv_robot_arm",
            "32x #gtceu:circuits/uhv",
            "64x gtceu:tungsten_carbide_screw",
            "64x gtceu:yttrium_barium_cuprate_screw",
            "64x gtceu:rhodium_plated_palladium_screw",
            "64x gtceu:naquadah_alloy_screw",
            "32x gtceu:long_rtm_alloy_rod",
            "32x gtceu:long_tungsten_carbide_rod",
            "32x gtceu:long_hsla_steel_rod",
            "32x gtceu:long_ultimet_rod",
            "16x gtceu:lafium_plate",
            "8x gtceu:double_iridium_plate")
        .inputFluids("gtceu:mutated_living_solder 5760", "gtceu:kanthal 5760", "gtceu:nobelium 2880", "gtceu:lawrencium 2880")
        .itemOutputs("gtceu:mage_assembler")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:precision_assembler"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtceu:cooling_tower")
        .itemInputs("64x gtceu:hsse_frame",
            "16x gtceu:plasma_condenser",
            "16x gtceu:mega_vacuum_freezer",
            "64x kubejs:empty_laser_cooling_container",
            "64x kubejs:high_frequency_laser",
            "64x kubejs:medium_frequency_laser",
            "64x kubejs:low_frequency_laser",
            "64x gtceu:uhv_fluid_regulator",
            "16x gtceu:uev_emitter",
            "16x #gtceu:circuits/uiv",
            "64x gtceu:double_invar_plate",
            "64x gtceu:double_germanium_plate",
            "64x gtceu:double_gallium_arsenide_plate",
            "64x gtceu:double_tin_alloy_plate",
            "64x gtceu:double_nickel_zinc_ferrite_plate",
            "64x gtceu:double_ruridit_plate")
        .inputFluids("gtceu:hafnium 5760", "gtceu:indium 5760", "gtceu:nobelium 5760", "gtceu:lawrencium 5760")
        .itemOutputs("gtceu:cooling_tower")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:vacuum_freezer"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtceu:bedrock_drilling_rig")
        .itemInputs("16x gtceu:uev_rock_crusher",
            "16x gtceu:uev_cutter",
            "16x gtceu:uev_macerator",
            "4x kubejs:machine_casing_grinding_head",
            "4x kubejs:bedrock_drill",
            "8x gtceu:uev_sensor",
            "16x gtceu:uev_robot_arm",
            "16x gtceu:uev_conveyor_module",
            "64x gtceu:uhv_fluid_regulator",
            "16x gtceu:uev_emitter",
            "8x #gtceu:circuits/uiv",
            "4x gtceu:orichalcum_nanoswarm",
            "16x gtceu:double_red_steel_plate",
            "16x gtceu:double_hastelloy_x_plate",
            "16x gtceu:double_maraging_steel_300_plate",
            "16x gtceu:double_hastelloy_c_276_plate")
        .inputFluids("gtceu:nickel 5760", "gtceu:tantalum 5760", "gtceu:palladium 5760", "gtceu:samarium 5760")
        .itemOutputs("gtceu:bedrock_drilling_rig")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("kubejs:bedrock_drill"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:superconducting_electromagnetism")
        .itemInputs("4x gtceu:large_electrolyzer",
            "4x gtceu:large_electromagnet",
            "16x gtceu:uv_emitter",
            "8x #gtceu:circuits/uev",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "8x gtceu:double_tantalum_plate",
            "8x gtceu:double_silver_plate",
            "8x gtceu:double_silicon_plate",
            "8x gtceu:double_ruthenium_plate")
        .inputFluids("gtceu:mutated_living_solder 2880", "gtceu:soldering_alloy 5760", "gtceu:enriched_naquadah_trinium_europium_duranide 5760")
        .itemOutputs("gtceu:superconducting_electromagnetism")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:superconducting_coil"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:create_aggregation")
        .itemInputs("32x gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame",
            "16x kubejs:chain_command_block_core",
            "16x gtceu:spacetimecontinuumripper",
            "8x kubejs:create_aggregatione_core",
            "32x gtceu:max_robot_arm",
            "32x gtceu:max_emitter",
            "16x gtceu:max_field_generator",
            "64x gtceu:infinity_octal_wire",
            "2x gtceu:mega_max_battery",
            "64x gtceu:cosmic_plate",
            "64x gtceu:double_shirabon_plate",
            "64x gtceu:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .inputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 10000", "gtceu:primordialmatter 16000", "gtceu:temporalfluid 32000", "gtceu:spatialfluid 32000")
        .itemOutputs("gtceu:create_aggregation")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(12000)
        .stationResearch(b => b.researchStack(Item.of("kubejs:create_aggregatione_core"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(16384))

    gtr.assembly_line("kubejs:create_aggregatione_core")
        .itemInputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame",
            "16x kubejs:dimension_creation_casing",
            "16x kubejs:two_way_foil",
            "16x gtceu:cosmic_foil",
            "64x kubejs:black_body_naquadria_supersolid",
            "16x gtceu:max_field_generator",
            "32x gtceu:magmatter_rod",
            "8x kubejs:eigenfolded_kerr_manifold",
            "16x gtceu:max_robot_arm",
            "gtceu:insanely_max_battery",
            "16x gtceu:magnetohydrodynamicallyconstrainedstarmatter_foil",
            "64x gtceu:eternity_foil")
        .inputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 10000", "gtceu:chaos 10000", "gtceu:temporalfluid 10000", "gtceu:magmatter 10000")
        .itemOutputs("kubejs:create_aggregatione_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120000)
        .stationResearch(b => b.researchStack(Item.of("kubejs:dragon_stabilizer_core"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(16384))

    const parts_materialas = [
        ["uhv", "1", "europium", "abyssalalloy", "uv", "zpm", "400000", "neutronium", "ruthenium_trinium_americium_neutronate", "orichalcum", "2x gtceu:gravi_star", "1", "fluxed_electrum", "gtceu:highurabilityompoundteel 576"],
        ["uev", "2", "mithril", "titansteel", "uhv", "uv", "1600000", "quantanium", "enderite", "hastelloyx_78", "4x gtceu:gravi_star", "2", "dalisenite", "gtceu:bohrium 576"]
    ]
    parts_materialas.forEach((parts_material) => {
        gtr.assembly_line("gtceu:" + parts_material[0] + "_electric_motor")
            .itemInputs("kubejs:magnetic_long_netherite_rod",
                "4x gtceu:long_" + parts_material[9] + "_rod",
                "4x gtceu:" + parts_material[9] + "_ring",
                "8x gtceu:" + parts_material[9] + "_round",
                "64x #forge:fine_wires/" + parts_material[3],
                "64x #forge:fine_wires/" + parts_material[3],
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 500 * parts_material[1], "gtceu:soldering_alloy " + 1000 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_electric_motor")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_electric_motor"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_electric_pump")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_motor",
                "gtceu:neutronium_small_fluid_pipe",
                "2x gtceu:" + parts_material[9] + "_plate",
                "8x gtceu:" + parts_material[9] + "_screw",
                parts_material[1] * 4 + "x gtceu:styrene_butadiene_rubber_ring",
                "gtceu:" + parts_material[9] + "_rotor",
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 576 * parts_material[1], "gtceu:soldering_alloy " + 1152 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_electric_pump")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_electric_pump"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_conveyor_module")
            .itemInputs("2x gtceu:" + parts_material[0] + "_electric_motor",
                "2x gtceu:" + parts_material[9] + "_plate",
                "4x gtceu:" + parts_material[9] + "_ring",
                "16x gtceu:" + parts_material[9] + "_round",
                "4x gtceu:" + parts_material[9] + "_screw",
                "2x gtceu:" + parts_material[12] + "_plate",
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 576 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], "gtceu:styrene_butadiene_rubber " + (3456 + 1152 * parts_material[1]), parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_conveyor_module")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_conveyor_module"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_electric_piston")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_motor",
                "4x gtceu:" + parts_material[9] + "_plate",
                "4x gtceu:" + parts_material[9] + "_ring",
                "16x gtceu:" + parts_material[9] + "_round",
                "4x gtceu:" + parts_material[9] + "_rod",
                "gtceu:" + parts_material[9] + "_gear",
                "2x gtceu:small_" + parts_material[9] + "_gear",
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 576 * parts_material[1], "gtceu:soldering_alloy " + 1152 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_electric_piston")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_electric_piston"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_robot_arm")
            .itemInputs("4x gtceu:long_" + parts_material[9] + "_rod",
                "gtceu:" + parts_material[9] + "_gear",
                "3x gtceu:small_" + parts_material[9] + "_gear",
                "2x gtceu:" + parts_material[0] + "_electric_motor",
                "gtceu:" + parts_material[0] + "_electric_piston",
                "#gtceu:circuits/" + parts_material[0],
                "2x #gtceu:circuits/" + parts_material[4],
                "4x #gtceu:circuits/" + parts_material[5],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 576 * parts_material[1], "gtceu:soldering_alloy " + 1152 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_robot_arm")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_robot_arm"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_emitter")
            .itemInputs("gtceu:" + parts_material[7] + "_frame",
                "gtceu:" + parts_material[0] + "_electric_motor",
                "4x gtceu:long_" + parts_material[9] + "_rod",
                parts_material[10],
                "2x #gtceu:circuits/" + parts_material[0],
                "64x #forge:foils/" + parts_material[3],
                "64x #forge:foils/" + parts_material[12],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 1152 * parts_material[1], "gtceu:soldering_alloy " + 2304 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_emitter")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_emitter"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_sensor")
            .itemInputs("gtceu:" + parts_material[7] + "_frame",
                "gtceu:" + parts_material[0] + "_electric_motor",
                "4x gtceu:" + parts_material[9] + "_plate",
                parts_material[10],
                "2x #gtceu:circuits/" + parts_material[0],
                "64x #forge:foils/" + parts_material[3],
                "64x #forge:foils/" + parts_material[12],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 1152 * parts_material[1], "gtceu:soldering_alloy " + 2304 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_sensor")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_sensor"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_field_generator")
            .itemInputs("gtceu:" + parts_material[7] + "_frame",
                "6x gtceu:" + parts_material[7] + "_plate",
                parts_material[10],
                "2x gtceu:" + parts_material[0] + "_emitter",
                "2x #gtceu:circuits/" + parts_material[0],
                "64x #forge:fine_wires/" + parts_material[8],
                "64x #forge:fine_wires/" + parts_material[8],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:mutated_living_solder " + 1152 * parts_material[1], "gtceu:soldering_alloy " + 2304 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_field_generator")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_field_generator"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembler("gtceu:" + parts_material[0] + "_fluid_regulator")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_pump", "2x #gtceu:circuits/" + parts_material[0])
            .itemOutputs("gtceu:" + parts_material[0] + "_fluid_regulator")
            .EUt(parts_material[6])
            .circuit(1)
            .duration(100)
    })

    const parts_materials = [
        ["uiv", "4", "neutronium", "adamantine", "uev", "uhv", "6400000", "adamantium", "echoite", "infuscolium", "kubejs:unstable_star", "3", "arceusalloy2b", "gtceu:taranium 576"],
        ["uxv", "8", "taranium", "naquadriatictaranium", "uiv", "uev", "25600000", "vibranium", "legendarium", "hastelloyk_243", "2x kubejs:unstable_star", "4", "titan_precision_steel", "gtceu:astraltitanium 576"],
        ["opv", "16", "crystalmatrix", "starmetal", "uxv", "uev", "102400000", "draconium", "draconiumawakened", "vibramantium", "4x kubejs:unstable_star", "5", "hikarium", "gtceu:celestialtungsten 576"]
    ]
    parts_materials.forEach((parts_material) => {
        gtr.assembly_line("gtceu:" + parts_material[0] + "_electric_motor")
            .itemInputs("gtceu:long_attuned_tengam_rod",
                "4x gtceu:long_" + parts_material[9] + "_rod",
                "4x gtceu:" + parts_material[9] + "_ring",
                "8x gtceu:" + parts_material[9] + "_round",
                "64x #forge:fine_wires/" + parts_material[3],
                "64x #forge:fine_wires/" + parts_material[3],
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 500 * parts_material[1], "gtceu:soldering_alloy " + 1000 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_electric_motor")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_electric_motor"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_electric_pump")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_motor",
                "gtceu:neutronium_small_fluid_pipe",
                "2x gtceu:" + parts_material[9] + "_plate",
                "8x gtceu:" + parts_material[9] + "_screw",
                parts_material[1] * 4 + "x gtceu:styrene_butadiene_rubber_ring",
                "gtceu:" + parts_material[9] + "_rotor",
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 576 * parts_material[1], "gtceu:soldering_alloy " + 1152 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_electric_pump")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_electric_pump"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_conveyor_module")
            .itemInputs("2x gtceu:" + parts_material[0] + "_electric_motor",
                "2x gtceu:" + parts_material[9] + "_plate",
                "4x gtceu:" + parts_material[9] + "_ring",
                "16x gtceu:" + parts_material[9] + "_round",
                "4x gtceu:" + parts_material[9] + "_screw",
                "2x gtceu:" + parts_material[12] + "_plate",
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 576 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], "gtceu:styrene_butadiene_rubber " + (3456 + 1152 * parts_material[1]), parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_conveyor_module")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_conveyor_module"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_electric_piston")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_motor",
                "4x gtceu:" + parts_material[9] + "_plate",
                "4x gtceu:" + parts_material[9] + "_ring",
                "16x gtceu:" + parts_material[9] + "_round",
                "4x gtceu:" + parts_material[9] + "_rod",
                "gtceu:" + parts_material[9] + "_gear",
                "2x gtceu:small_" + parts_material[9] + "_gear",
                "2x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 576 * parts_material[1], "gtceu:soldering_alloy " + 1152 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_electric_piston")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_electric_piston"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_robot_arm")
            .itemInputs("4x gtceu:long_" + parts_material[9] + "_rod",
                "gtceu:" + parts_material[9] + "_gear",
                "3x gtceu:small_" + parts_material[9] + "_gear",
                "2x gtceu:" + parts_material[0] + "_electric_motor",
                "gtceu:" + parts_material[0] + "_electric_piston",
                "#gtceu:circuits/" + parts_material[0],
                "2x #gtceu:circuits/" + parts_material[4],
                "4x #gtceu:circuits/" + parts_material[5],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 576 * parts_material[1], "gtceu:soldering_alloy " + 1152 * parts_material[1], "gtceu:lubricant " + 2000 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_robot_arm")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_robot_arm"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_emitter")
            .itemInputs("gtceu:" + parts_material[7] + "_frame",
                "gtceu:" + parts_material[0] + "_electric_motor",
                "4x gtceu:long_" + parts_material[9] + "_rod",
                parts_material[10],
                "2x #gtceu:circuits/" + parts_material[0],
                "64x #forge:foils/" + parts_material[3],
                "64x #forge:foils/" + parts_material[12],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 1152 * parts_material[1], "gtceu:soldering_alloy " + 2304 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_emitter")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_emitter"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_sensor")
            .itemInputs("gtceu:" + parts_material[7] + "_frame",
                "gtceu:" + parts_material[0] + "_electric_motor",
                "4x gtceu:" + parts_material[9] + "_plate",
                parts_material[10],
                "2x #gtceu:circuits/" + parts_material[0],
                "64x #forge:foils/" + parts_material[3],
                "64x #forge:foils/" + parts_material[12],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 1152 * parts_material[1], "gtceu:soldering_alloy " + 2304 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_sensor")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_sensor"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtceu:" + parts_material[0] + "_field_generator")
            .itemInputs("gtceu:" + parts_material[7] + "_frame",
                "6x gtceu:" + parts_material[7] + "_plate",
                parts_material[10],
                "2x gtceu:" + parts_material[0] + "_emitter",
                "2x #gtceu:circuits/" + parts_material[0],
                "64x #forge:fine_wires/" + parts_material[8],
                "64x #forge:fine_wires/" + parts_material[8],
                "4x gtceu:" + parts_material[2] + "_single_cable")
            .inputFluids("gtceu:super_mutated_living_solder " + 1152 * parts_material[1], "gtceu:soldering_alloy " + 2304 * parts_material[1], parts_material[13])
            .itemOutputs("gtceu:" + parts_material[0] + "_field_generator")
            .EUt(parts_material[6])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of("gtceu:" + parts_material[4] + "_field_generator"))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembler("gtceu:" + parts_material[0] + "_fluid_regulator")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_pump", "2x #gtceu:circuits/" + parts_material[0])
            .itemOutputs("gtceu:" + parts_material[0] + "_fluid_regulator")
            .EUt(parts_material[6])
            .circuit(1)
            .duration(100)
    })

    gtr.assembly_line("kubejs:dimensional_stability_casing")
        .itemInputs("kubejs:containment_field_generator",
            "4x kubejs:dyson_control_casing",
            "4x kubejs:dyson_control_toroid",
            "gtceu:uxv_field_generator",
            "4x gtceu:uiv_field_generator",
            "2x gtceu:opv_electric_pump",
            "2x gtceu:rtm_alloy_spring",
            "#gtceu:circuits/uev",
            "2x gtceu:crystalmatrix_rod",
            "gtceu:double_crystalmatrix_plate")
        .inputFluids("gtceu:super_mutated_living_solder 288", "gtceu:liquid_degenerate_rhenium 200", "gtceu:molten_pikyonium 288", "gtceu:molten_periodicium 288")
        .itemOutputs("kubejs:dimensional_stability_casing")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:dimensional_bridge_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:pcb_factory")
        .itemInputs("4x gtceu:neutronium_frame",
            "4x gtceu:uv_circuit_assembler",
            "4x gtceu:chemical_plant",
            "4x #gtceu:circuits/uev",
            "4x gtceu:uhv_robot_arm",
            "4x gtceu:uhv_electric_pump",
            "2x gtceu:uhv_sensor",
            "2x gtceu:uhv_emitter",
            "gtceu:uhv_field_generator",
            "2x gtceu:iridium_nanoswarm",
            "2x gtceu:silver_nanoswarm",
            "16x gtceu:double_grisium_plate")
        .inputFluids("gtceu:soldering_alloy 2592", "gtceu:bismuth_bronze 2582", "gtceu:enriched_naquadah 1296")
        .itemOutputs("gtceu:pcb_factory")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("kubejs:bioware_circuit_board"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtceu:large_naquadah_reactor")
        .itemInputs("64x gtceu:hpic_chip",
            "64x gtceu:uhpic_chip",
            "32x gtceu:uranium_rhodium_dinaquadide_single_wire",
            "24x gtceu:enriched_naquadah_foil",
            "16x gtceu:duranium_gear",
            "8x gtceu:double_duranium_plate",
            "8x gtceu:double_naquadria_plate",
            "2x gtceu:uv_electric_piston",
            "gtceu:uv_field_generator",
            "gtceu:uv_electric_pump",
            "4x #gtceu:circuits/uhv")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:trinium 2304")
        .itemOutputs("gtceu:large_naquadah_reactor")
        .EUt(90000)
        .duration(1000)
        .stationResearch(b => b.researchStack(Item.of("gtceu:zpm_naquadah_reactor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtceu:aggregation_device")
        .itemInputs("4x kubejs:draconium_block_charged", "64x kubejs:pm_chip", "64x kubejs:pm_chip", "8x kubejs:reinforced_echo_shard", "4x gtceu:enderite_hex_wire", "4x gtceu:uev_field_generator", "gtceu:really_max_battery", "64x gtceu:quantanium_screw", "8x gtceu:double_dalisenite_plate", "8x gtceu:double_seaborgium_plate")
        .itemOutputs("gtceu:aggregation_device")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:neutronium 576", "gtceu:mana 1000", "gtceu:enriched_dragon_breath 100")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Item.of("kubejs:aggregatione_core"))
            .EUt(GTValues.VA[GTValues.UEV])
            .dataStack(Item.of("gtceu:data_module"))
            .CWUt(128))

    gtr.assembly_line("gtceu:super_particle_collider")
        .itemInputs("16x gtceu:zpm_field_generator", "16x gtceu:zpm_electric_pump", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "16x gtceu:uranium_rhodium_dinaquadide_hex_wire", "32x #gtceu:circuits/uv", "16x gtceu:neutron_reflector", "8x gtceu:double_lafium_plate")
        .itemOutputs("gtceu:super_particle_collider")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:protactinium 1152", "gtceu:uranium 1152", "gtceu:neptunium 1152")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:accelerated_pipeline"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .dataStack(Item.of("gtceu:data_module"))
            .CWUt(32))

    gtr.assembly_line("gtceu:space_elevator")
        .itemInputs("16x gtceu:gravitation_engine_unit", "8x gtceu:uv_field_generator", "8x #gtceu:circuits/uhv", "16x #gtceu:circuits/uv", "32x #gtceu:circuits/zpm", "64x #gtceu:circuits/luv", "4x kubejs:module_connector", "32x gtceu:indium_tin_barium_titanium_cuprate_hex_wire", "16x gtceu:uranium_rhodium_dinaquadide_hex_wire", "8x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire", "48x gtceu:americium_huge_restrictive_item_pipe", "48x gtceu:duranium_huge_fluid_pipe", "64x gtceu:carbon_nanoswarm", "64x gtceu:carbon_nanoswarm", "32x gtceu:double_pikyonium_plate", "16x gtceu:double_orichalcum_plate")
        .itemOutputs("gtceu:space_elevator")
        .inputFluids("gtceu:soldering_alloy 4096", "gtceu:mendelevium 4096", "gtceu:nobelium 4096", "gtceu:lawrencium 4096")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:power_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .dataStack(Item.of("gtceu:data_module"))
            .CWUt(64))

    gtr.assembly_line("gtceu:engraving_laser_plant")
        .itemInputs("8x gtceu:uv_laser_engraver", "8x gtceu:uhv_emitter", "8x gtceu:uhv_electric_piston", "8x gtceu:uhv_sensor", "8x gtceu:uhv_robot_arm", "8x gtceu:uhv_electric_pump", "32x gtceu:stellite_rod", "8x #gtceu:circuits/uev", "32x gtceu:fluxed_electrum_plate", "32x gtceu:grisium_plate", "16x gtceu:double_titanium_carbide_plate", "16x gtceu:double_titanium_tungsten_carbide_plate")
        .itemOutputs("gtceu:engraving_laser_plant")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_engraving_laser"))
            .EUt(GTValues.VA[GTValues.UV])
            .dataStack(Item.of("gtceu:data_module"))
            .CWUt(64))

    gtr.assembly_line("gtceu:qft")
        .itemInputs("8x gtceu:vibranium_frame", "4x gtceu:spacetimecontinuumripper", "4x gtceu:spacetimebendingcore", "8x kubejs:precision_circuit_assembly_robot_mk4", "8x gtceu:uxv_sensor", "8x gtceu:uxv_robot_arm", "8x gtceu:uxv_electric_pump", "8x gtceu:uxv_field_generator", "8x #gtceu:circuits/opv", "gtceu:extremely_max_battery", "64x gtceu:double_lafium_plate", "64x gtceu:double_titan_precision_steel_plate")
        .itemOutputs("gtceu:qft")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:periodicium 2880")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:spacetimebendingcore"))
            .EUt(GTValues.VA[GTValues.UXV])
            .dataStack(Item.of("gtceu:data_module"))
            .CWUt(2048))

    const wireless_tiers = [
        [0, "uhv", "neutronium", "europium", "kubejs:nm_chip", "8x kubejs:smd_inductor_bioware"],
        [1, "uev", "quantanium", "mithril", "kubejs:nm_chip", "8x kubejs:smd_inductor_optical"],
        [2, "uiv", "adamantium", "neutronium", "kubejs:pm_chip", "8x kubejs:smd_inductor_exotic"],
        [3, "uxv", "vibranium", "taranium", "kubejs:pm_chip", "8x kubejs:smd_inductor_cosmic"],
        [4, "opv", "draconium", "crystalmatrix", "kubejs:fm_chip", "8x kubejs:smd_inductor_supracausal"],
        [5, "max", "chaos", "cosmicneutronium", "kubejs:fm_chip", "8x gtceu:shirabon_foil"]
    ]
    wireless_tiers.forEach((tier) => {
        let soldering = tier[0] < 3 ? "gtceu:mutated_living_solder 144" : "gtceu:super_mutated_living_solder 144"
        gtr.assembler(`gtmthings:${tier[1]}_wireless_energy_receive_cover`)
            .itemInputs(`gtceu:${tier[1]}_sensor`,
                `gtceu:${tier[1]}_emitter`,
                "4x gtceu:ender_pearl_plate",
                "2x #gtceu:circuits/" + tier[1],
                `kubejs:${tier[1]}_voltage_coil`,
                tier[4],
                `2x gtceu:${tier[3]}_single_cable`,
                "2x gtceu:red_alloy_single_cable",
                `4x gtceu:${tier[2]}_plate`)
            .inputFluids(soldering)
            .itemOutputs(`gtmthings:${tier[1]}_wireless_energy_receive_cover`)
            .EUt(GTValues.VA[tier[0] + 9])
            .duration(200)
        gtr.assembler(`gtmthings:${tier[1]}_4a_wireless_energy_receive_cover`)
            .itemInputs(`2x gtmthings:${tier[1]}_wireless_energy_receive_cover`,
                tier[5],
                `4x gtceu:niobium_titanium_quadruple_cable`,
                `2x kubejs:${tier[1]}_voltage_coil`,
                "2x gtceu:double_battery_alloy_plate")
            .inputFluids(soldering)
            .itemOutputs(`gtmthings:${tier[1]}_4a_wireless_energy_receive_cover`)
            .EUt(GTValues.VA[tier[0] + 9])
            .duration(200)
    })
    for (let index = 5; index < 15; index++) {
        let tierName = GTValues.VN[index].toLowerCase()
        gtr.assembler(`gtmthings:${tierName}_16384a_wireless_laser_target_hatch`)
            .itemInputs(`gtceu:${tierName}_16384a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "4x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_16384a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_16384a_wireless_laser_source_hatch`)
            .itemInputs(`gtceu:${tierName}_16384a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "4x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_16384a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_65536a_wireless_laser_target_hatch`)
            .itemInputs(`gtceu:${tierName}_65536a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "8x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_65536a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_65536a_wireless_laser_source_hatch`)
            .itemInputs(`gtceu:${tierName}_65536a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "8x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_65536a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_262144a_wireless_laser_target_hatch`)
            .itemInputs(`gtceu:${tierName}_262144a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "16x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_262144a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_262144a_wireless_laser_source_hatch`)
            .itemInputs(`gtceu:${tierName}_262144a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "16x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_262144a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)


        gtr.assembler(`gtmthings:${tierName}_1048576a_wireless_laser_target_hatch`)
            .itemInputs(`gtceu:${tierName}_1048576a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "4x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "4x kubejs:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_1048576a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_1048576a_wireless_laser_source_hatch`)
            .itemInputs(`gtceu:${tierName}_1048576a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "4x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "4x kubejs:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_1048576a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_4194304a_wireless_laser_target_hatch`)
            .itemInputs(`gtceu:${tierName}_4194304a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "8x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "8x kubejs:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_4194304a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtmthings:${tierName}_4194304a_wireless_laser_source_hatch`)
            .itemInputs(`gtceu:${tierName}_4194304a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "8x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "8x kubejs:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtmthings:${tierName}_4194304a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)
    }
    const machine_materials = [
        ["uhv", "neutronium", "europium", "abyssalalloy", "uev", "1966080", "uv", "128", "kubejs:smd_diode_bioware"],
        ["uev", "quantanium", "mithril", "titansteel", "uiv", "7864320", "uhv", "256", "kubejs:smd_diode_optical"],
        ["uiv", "adamantium", "neutronium", "adamantine", "uxv", "31457280", "uev", "512", "kubejs:smd_diode_exotic"],
        ["uxv", "vibranium", "taranium", "naquadriatictaranium", "opv", "125829120", "uiv", "1024", "kubejs:smd_diode_cosmic"],
        ["opv", "draconium", "crystalmatrix", "starmetal", "max", "503316480", "uxv", "2048", "kubejs:smd_diode_supracausal"]
    ]
    machine_materials.forEach((machine_material) => {
        event.shaped("gtceu:" + machine_material[0] + "_circuit_assembler", [
            "ECF",
            "DAD",
            "BCB"
        ], {
            A: "gtceu:" + machine_material[0] + "_machine_hull",
            B: "gtceu:" + machine_material[2] + "_single_cable",
            C: "#gtceu:circuits/" + machine_material[4],
            D: "gtceu:" + machine_material[0] + "_conveyor_module",
            E: "gtceu:" + machine_material[0] + "_robot_arm",
            F: "gtceu:" + machine_material[0] + "_emitter"
        })

        event.shaped("gtceu:" + machine_material[0] + "_scanner", [
            "CEC",
            "BAB",
            "CDC"
        ], {
            A: "gtceu:" + machine_material[0] + "_machine_hull",
            B: "gtceu:" + machine_material[2] + "_single_cable",
            D: "gtceu:" + machine_material[0] + "_sensor",
            C: "#gtceu:circuits/" + machine_material[0],
            E: "gtceu:" + machine_material[0] + "_emitter"
        })
    })

    gtr.assembler("gtceu:large_recycler")
        .itemInputs("4x gtceu:double_vanadium_steel_plate",
            "4x gtceu:black_bronze_gear",
            "8x gtceu:eglin_steel_rod",
            "4x gtceu:hv_electric_motor",
            "4x gtceu:hv_emitter",
            "4x #gtceu:circuits/ev",
            "4x gtceu:double_eglin_steel_plate",
            "8x gtceu:double_brass_plate",
            "8x gtceu:double_tin_plate")
        .inputFluids("gtceu:soldering_alloy 864")
        .itemOutputs("gtceu:large_recycler")
        .EUt(1920)
        .duration(400)

    gtr.large_recycler("kubejs:scrap_1")
        .itemInputs("#forge:ingots")
        .itemOutputs("kubejs:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("kubejs:scrap_2")
        .itemInputs("#forge:dusts")
        .itemOutputs("kubejs:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("kubejs:scrap_3")
        .itemInputs("4x #forge:small_dusts")
        .itemOutputs("kubejs:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("kubejs:scrap_4")
        .itemInputs("9x #forge:tiny_dusts")
        .itemOutputs("kubejs:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("kubejs:scrap_5")
        .itemInputs("#forge:storage_blocks")
        .itemOutputs("9x kubejs:scrap")
        .EUt(1920)
        .duration(400)

    gtr.large_recycler("kubejs:scrap_6")
        .itemInputs("9x #forge:nuggets")
        .itemOutputs("kubejs:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("kubejs:scrap_7")
        .itemInputs("#forge:gems")
        .itemOutputs("kubejs:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("kubejs:scrap_8")
        .itemInputs("#minecraft:logs")
        .itemOutputs("kubejs:scrap")
        .EUt(120)
        .duration(200)

    gtr.mixer("gtceu:fertilizer_")
        .itemInputs("gtceu:fertilizer", "2x kubejs:scrap")
        .itemOutputs("2x gtceu:fertilizer")
        .EUt(480)
        .duration(40)

    gtr.packer("kubejs:scrap_box")
        .itemInputs("9x kubejs:scrap")
        .itemOutputs("kubejs:scrap_box")
        .EUt(12)
        .duration(200)

    gtr.assembler("kubejs:space_elevator_mechanical_casing")
        .itemInputs("gtceu:hssg_frame", "6x gtceu:inconel_792_plate", "6x gtceu:double_pikyonium_plate")
        .itemOutputs("2x kubejs:space_elevator_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.chemical_bath("kubejs:high_strength_concrete")
        .itemInputs("#forge:concrete")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("kubejs:high_strength_concrete")
        .EUt(480)
        .duration(200)

    gtr.assembler("kubejs:space_elevator_support")
        .itemInputs("gtceu:naquadah_frame", "4x gtceu:red_steel_rod", "6x gtceu:black_steel_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x kubejs:space_elevator_support")
        .EUt(480)
        .duration(400)

    gtr.assembler("kubejs:space_elevator_internal_support")
        .itemInputs("gtceu:naquadah_frame", "2x gtceu:niobium_titanium_single_wire", "16x gtceu:fine_annealed_copper_wire", "#gtceu:circuits/luv", "6x gtceu:double_iridium_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x kubejs:space_elevator_internal_support")
        .EUt(480)
        .duration(400)

    gtr.mass_fabricator("gtceu:uu_matter")
        .itemInputs("ae2:matter_ball")
        .inputFluids("gtceu:uu_amplifier 10")
        .outputFluids("gtceu:uu_matter 10")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)

    const world_data_scanner = [
        ["lv", "gtceu:tin_single_cable"],
        ["mv", "gtceu:copper_single_cable"],
        ["hv", "gtceu:gold_single_cable"],
        ["ev", "gtceu:aluminium_single_cable"],
        ["iv", "gtceu:platinum_single_cable"],
        ["luv", "gtceu:niobium_titanium_single_cable"],
        ["zpm", "gtceu:vanadium_gallium_single_cable"],
        ["uv", "gtceu:yttrium_barium_cuprate_single_cable"],
        ["uhv", "gtceu:europium_single_cable"],
        ["uev", "gtceu:mithril_single_cable"],
        ["uiv", "gtceu:neutronium_single_cable"],
        ["uxv", "gtceu:taranium_single_cable"],
        ["opv", "gtceu:crystalmatrix_single_cable"]]
    world_data_scanner.forEach((scanner) => {
        event.shaped("gtceu:" + scanner[0] + "_world_data_scanner", [
            "CDC",
            "BAB",
            "CDC"
        ], {
            A: "gtceu:" + scanner[0] + "_machine_hull",
            B: scanner[1],
            C: "gtceu:" + scanner[0] + "_sensor",
            D: "#gtceu:circuits/" + scanner[0]
        })
    })

    event.shaped("2x kubejs:neutronium_pipe_casing", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:neutronium_frame",
        B: "gtceu:neutronium_normal_fluid_pipe",
        C: "gtceu:neutronium_plate"
    })

    event.shaped("2x kubejs:neutronium_gearbox", [
        "CEC",
        "BAB",
        "CFC"
    ], {
        A: "gtceu:neutronium_frame",
        B: "gtceu:neutronium_gear",
        C: "gtceu:neutronium_plate",
        E: "#forge:tools/hammers",
        F: "#forge:tools/wrench"
    })

    event.shaped("kubejs:advanced_assembly_line_unit", [
        "CEC",
        "BAB",
        "CEC"
    ], {
        A: "gtceu:assembly_line_unit",
        B: "#gtceu:circuits/uv",
        C: "gtceu:hssg_plate",
        E: "gtceu:rhodium_gear"
    })

    gtr.assembler("gtceu:void_miner")
        .itemInputs("gtceu:lv_miner",
            "gtceu:mv_miner",
            "gtceu:hv_miner",
            "4x gtceu:lv_field_generator",
            "4x gtceu:mv_field_generator",
            "4x gtceu:hv_field_generator",
            "4x #gtceu:circuits/ev",
            "gtceu:long_titanium_rod",
            "4x gtceu:titanium_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtceu:void_miner")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(800)

    event.shaped("minecraft:netherite_upgrade_smithing_template", [
        "ABA",
        "ACA",
        "AAA"
    ], {
        A: "minecraft:diamond",
        B: "minecraft:netherite_block",
        C: "minecraft:netherrack"
    })

    gtr.forming_press("kubejs:netherite_rod")
        .itemInputs("minecraft:netherite_upgrade_smithing_template", "2x gtceu:neodymium_rod", "minecraft:netherite_ingot")
        .itemOutputs("2x kubejs:netherite_rod")
        .EUt(480)
        .duration(400)

    gtr.forge_hammer("kubejs:long_netherite_rod")
        .itemInputs("2x kubejs:netherite_rod")
        .itemOutputs("kubejs:long_netherite_rod")
        .EUt(30)
        .duration(200)

    gtr.forge_hammer("kubejs:magnetic_long_netherite_rod")
        .itemInputs("2x kubejs:magnetic_netherite_rod")
        .itemOutputs("kubejs:magnetic_long_netherite_rod")
        .EUt(30)
        .duration(200)

    gtr.polarizer("kubejs:magnetic_netherite_rod")
        .itemInputs("kubejs:netherite_rod")
        .itemOutputs("kubejs:magnetic_netherite_rod")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.polarizer("kubejs:magnetic_long_netherite_rod")
        .itemInputs("kubejs:long_netherite_rod")
        .itemOutputs("kubejs:magnetic_long_netherite_rod")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)

    //coil
    const coils = [
        ["uhv", "1966080", "abyssalalloy", "europium", "tritanium"],
        ["uev", "7864320", "titansteel", "mithril", "abyssalalloy"]
    ]
    coils.forEach((coil) => {
        gtr.assembler("kubejs:" + coil[0] + "_voltage_coil")
            .itemInputs("kubejs:magnetic_netherite_rod", "16x #forge:fine_wires/" + coil[2])
            .itemOutputs("kubejs:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("kubejs:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("kubejs:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    const coilas = [
        ["uiv", "31457280", "adamantine", "neutronium", "titansteel"],
        ["uxv", "125829120", "naquadriatictaranium", "taranium", "adamantine"],
        ["opv", "503316480", "starmetal", "crystalmatrix", "naquadriatictaranium"]
    ]
    coilas.forEach((coil) => {
        gtr.assembler("kubejs:" + coil[0] + "_voltage_coil")
            .itemInputs("gtceu:attuned_tengam_rod", "16x #forge:fine_wires/" + coil[2])
            .itemOutputs("kubejs:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("kubejs:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("kubejs:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    gtr.assembler("kubejs:max_voltage_coil")
        .itemInputs("gtceu:attuned_tengam_rod", "16x #forge:fine_wires/cosmicneutronium")
        .itemOutputs("kubejs:max_voltage_coil")
        .EUt(2013265920)
        .duration(200)
        .circuit(1)

    gtr.assembly_line("kubejs:infinity_coil_block")
        .itemInputs("gtceu:qft_coil", "8x gtceu:infinity_double_wire", "16x gtceu:draconium_screw", "64x gtceu:kevlar_foil", "32x gtceu:radox_foil")
        .inputFluids("gtceu:starmetal 576", "gtceu:crystalmatrix 576")
        .itemOutputs("kubejs:infinity_coil_block")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:starmetal_coil_block"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(2048))

    gtr.assembly_line("kubejs:hypogen_coil_block")
        .itemInputs("gtceu:qft_coil", "8x gtceu:hypogen_double_wire", "16x gtceu:transcendentmetal_screw", "64x gtceu:radox_foil", "32x gtceu:chaos_foil")
        .inputFluids("gtceu:infinity 576", "gtceu:cosmicneutronium 576")
        .itemOutputs("kubejs:hypogen_coil_block")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:infinity_coil_block"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.assembly_line("kubejs:eternity_coil_block")
        .itemInputs("gtceu:qft_coil", "8x gtceu:spacetime_double_wire", "4x gtceu:eternity_rod", "avaritia:eternal_singularity", "64x kubejs:cosmic_fabric", "64x gtceu:radox_foil", "64x gtceu:radox_foil", "64x gtceu:chaos_foil")
        .inputFluids("gtceu:hypogen 576", "gtceu:spacetime 576")
        .itemOutputs("kubejs:eternity_coil_block")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:hypogen_coil_block"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembler("kubejs:ingot_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ingot_casting_mold")
        .itemOutputs("kubejs:ingot_field_shape")
        .EUt(30720)
        .duration(200)

    gtr.assembler("kubejs:ball_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ball_casting_mold")
        .itemOutputs("kubejs:ball_field_shape")
        .EUt(30720)
        .duration(200)

    gtr.forming_press("kubejs:scintillator_crystal")
        .itemInputs("2x gtceu:mithril_plate", "gtceu:thallium_thulium_doped_caesium_iodide_dust", "gtceu:polycyclic_aromatic_mixture_dust", "2x gtceu:tungsten_dust", "2x gtceu:bismuth_dust", "2x gtceu:germanium_dust")
        .itemOutputs("kubejs:scintillator_crystal")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(280)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.chemical_reactor("gtceu:caesium_iodide_dust")
        .itemInputs("gtceu:caesium_dust", "gtceu:iodine_dust")
        .itemOutputs("2x gtceu:caesium_iodide_dust")
        .EUt(30)
        .duration(100)

    gtr.electric_blast_furnace("gtceu:thallium_thulium_doped_caesium_iodide_dust")
        .itemInputs("gtceu:caesium_iodide_dust", "gtceu:small_thulium_dust", "gtceu:small_thallium_dust")
        .itemOutputs("gtceu:thallium_thulium_doped_caesium_iodide_dust")
        .EUt(120)
        .duration(260)
        .blastFurnaceTemp(2853)

    gtr.assembler_module("kubejs:scintillator")
        .itemInputs("12x gtceu:highurabilityompoundteel_screw", "12x gtceu:fine_cinobite_wire", "6x gtceu:zylon_foil", "4x gtceu:cinobite_plate", "4x gtceu:echoite_plate", "kubejs:scintillator_crystal", "kubejs:separation_electromagnet", "gtceu:double_astraltitanium_plate")
        .itemOutputs("kubejs:scintillator")
        .inputFluids("gtceu:trinium_titanium 432", "gtceu:soldering_alloy 288", "gtceu:mutated_living_solder 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .CWUt(64)

    gtr.assembler("gtceu:rare_earth_centrifugal")
        .itemInputs("8x gtceu:europium_plate", "16x gtceu:uhv_electric_motor", "16x gtceu:hsss_gear", "8x gtceu:long_mithril_rod", "16x gtceu:hsse_plate", "64x gtceu:fine_naquadria_wire", "4x #gtceu:circuits/uhv", "32x gtceu:stellite_plate")
        .itemOutputs("gtceu:rare_earth_centrifugal")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    gtr.magic_manufacturer("gtceu:mana_0")
        .notConsumable("gtceu:uev_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 100")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.magic_manufacturer("gtceu:mana_1")
        .notConsumable("gtceu:uiv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)

    gtr.magic_manufacturer("gtceu:mana_2")
        .notConsumable("gtceu:uxv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)

    gtr.magic_manufacturer("gtceu:mana_3")
        .notConsumable("gtceu:opv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 100000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)

    gtr.magic_manufacturer("gtceu:mana_4")
        .notConsumable("4x gtceu:uev_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 400")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(40)

    gtr.magic_manufacturer("gtceu:mana_5")
        .notConsumable("4x gtceu:uiv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 4000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(40)

    gtr.magic_manufacturer("gtceu:mana_6")
        .notConsumable("4x gtceu:uxv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 40000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(40)

    gtr.magic_manufacturer("gtceu:mana_7")
        .notConsumable("4x gtceu:opv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 400000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(40)

    gtr.magic_manufacturer("gtceu:mana_8")
        .notConsumable("16x gtceu:uev_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 1600")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(80)

    gtr.magic_manufacturer("gtceu:mana_9")
        .notConsumable("16x gtceu:uiv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 16000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)

    gtr.magic_manufacturer("gtceu:mana_10")
        .notConsumable("16x gtceu:uxv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 160000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(80)

    gtr.magic_manufacturer("gtceu:mana_11")
        .notConsumable("16x gtceu:opv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 1600000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(80)

    gtr.magic_manufacturer("gtceu:mana_12")
        .notConsumable("64x gtceu:uev_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 6400")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(160)

    gtr.magic_manufacturer("gtceu:mana_13")
        .notConsumable("64x gtceu:uiv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 64000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(160)

    gtr.magic_manufacturer("gtceu:mana_14")
        .notConsumable("64x gtceu:uxv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 640000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(160)

    gtr.magic_manufacturer("gtceu:mana_15")
        .notConsumable("64x gtceu:opv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 6400000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(160)

    gtr.decay_hastener("kubejs:rutherfordium_dust")
        .inputFluids("gtceu:seaborgium 144")
        .itemOutputs("gtceu:rutherfordium_dust")
        .EUt(480)
        .duration(4000)

    gtr.decay_hastener("kubejs:rutherfordium_dust1")
        .inputFluids("gtceu:actinium 144")
        .itemOutputs("gtceu:rutherfordium_dust")
        .EUt(480)
        .duration(8000)

    gtr.decay_hastener("kubejs:actinium_dust")
        .inputFluids("gtceu:radium 144")
        .itemOutputs("gtceu:actinium_dust")
        .EUt(480)
        .duration(2000)

    gtr.assembler("kubejs:plasma_containment_cell")
        .itemInputs("4x gtceu:osmiridium_plate", "gtceu:uv_field_generator", "gtceu:long_naquadah_alloy_rod", "2x gtceu:fusion_glass", "8x gtceu:fluxed_electrum_foil")
        .itemOutputs("kubejs:plasma_containment_cell")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:magic_core")
        .itemInputs("8x gtceu:double_stellite_100_plate", "kubejs:bose_einstein_cooling_container", "minecraft:conduit", "8x gtceu:double_enderium_plate")
        .itemOutputs("kubejs:magic_core")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.assembler("kubejs:separation_electromagnet")
        .itemInputs("64x gtceu:fine_yttrium_barium_cuprate_wire", "64x gtceu:fine_niobium_titanium_wire", "16x gtceu:polybenzimidazole_foil", "8x gtceu:niobium_nitride_plate", "gtceu:long_vanadium_gallium_rod")
        .itemOutputs("kubejs:separation_electromagnet")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    gtr.canner("kubejs:rhenium_plasma_containment_cell")
        .notConsumable("gtceu:naquadah_nanoswarm")
        .itemInputs("kubejs:plasma_containment_cell")
        .itemOutputs("kubejs:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:degenerate_rhenium_plasma 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.sps_crafting("gtceu:echoite_plasma")
        .itemInputs("16x gtceu:exquisite_echo_gem", "kubejs:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:mana 16000", "gtceu:enderium 1152", "gtceu:infuscolium 1152")
        .outputFluids("gtceu:echoite_plasma 2304")
        .itemOutputs("kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.sps_crafting("gtceu:bedrock_dust")
        .itemInputs("64x gtceu:compressed_stone_dust", "64x gtceu:compressed_stone_dust")
        .inputFluids("gtceu:mana 100000", "gtceu:thulium 9216", "gtceu:copernicium 9216")
        .itemOutputs("gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.bedrock_drilling_rig("gtceu:bedrock_dust_1")
        .chancedInput("kubejs:bedrock_drill", 10, 0)
        .itemOutputs("gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(1)
        .duration(200)

    gtr.bedrock_drilling_rig("gtceu:bedrock_dust_2")
        .chancedInput("4x kubejs:bedrock_drill", 10, 0)
        .itemOutputs("4x gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(2)
        .duration(400)

    gtr.bedrock_drilling_rig("gtceu:bedrock_dust_3")
        .chancedInput("16x kubejs:bedrock_drill", 10, 0)
        .itemOutputs("16x gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(3)
        .duration(800)

    gtr.bedrock_drilling_rig("gtceu:bedrock_dust_4")
        .chancedInput("64x kubejs:bedrock_drill", 10, 0)
        .itemOutputs("64x gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(4)
        .duration(1600)

    gtr.vacuum_freezer("gtceu:liquid_hydrogen")
        .inputFluids("gtceu:hydrogen 1000")
        .outputFluids("gtceu:liquid_hydrogen 1000")
        .EUt(7680)
        .duration(240)

    gtr.matter_fabricator("gtceu:uu_amplifier")
        .itemInputs("kubejs:scrap")
        .circuit(1)
        .outputFluids("gtceu:uu_amplifier 1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.matter_fabricator("gtceu:uu_amplifier_a")
        .itemInputs("kubejs:scrap_box")
        .circuit(1)
        .outputFluids("gtceu:uu_amplifier 9")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.matter_fabricator("gtceu:uu_amplifier_1")
        .itemInputs("kubejs:scrap")
        .circuit(2)
        .itemOutputs("64x ae2:matter_ball")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1)

    gtr.matter_fabricator("gtceu:uu_amplifier_2")
        .itemInputs("kubejs:scrap_box")
        .circuit(2)
        .itemOutputs("576x ae2:matter_ball")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1)

    gtr.centrifuge("gtceu:free_electron_gas")
        .notConsumable("kubejs:separation_electromagnet")
        .inputFluids("gtceu:uu_matter 1000")
        .outputFluids("gtceu:free_electron_gas 1000", "gtceu:free_alpha_gas 500")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtceu:quark_gluon")
        .notConsumable("kubejs:separation_electromagnet")
        .inputFluids("gtceu:quark_gluon_plasma 1000")
        .outputFluids("gtceu:heavy_quarks 200", "gtceu:light_quarks 600", "gtceu:gluons 200")
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.fluid_solidifier("gtceu:degenerate_rhenium_plate")
        .notConsumable("gtceu:plate_casting_mold")
        .inputFluids("gtceu:liquid_degenerate_rhenium 144")
        .itemOutputs("gtceu:degenerate_rhenium_plate")
        .EUt(7)
        .duration(400)

    gtr.macerator("gtceu:degenerate_rhenium_dust")
        .itemInputs("gtceu:degenerate_rhenium_plate")
        .itemOutputs("gtceu:degenerate_rhenium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.polarizer("kubejs:triplet_neutronium_sphere")
        .itemInputs("kubejs:neutronium_sphere")
        .itemOutputs("kubejs:triplet_neutronium_sphere")
        .EUt(5000000)
        .duration(200)

    gtr.canner("kubejs:charged_triplet_neutronium_sphere")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .itemInputs("kubejs:triplet_neutronium_sphere")
        .inputFluids("gtceu:free_alpha_gas 1000")
        .itemOutputs("kubejs:charged_triplet_neutronium_sphere")
        .EUt(500000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtceu:hyper_core")
        .itemInputs("16x gtceu:highurabilityompoundteel_screw", "4x gtceu:naquadria_frame", "4x gtceu:naquadria_plate", "2x gtceu:uev_field_generator", "gtceu:naquadah_nanoswarm", "gtceu:uev_sensor", "gtceu:uev_emitter", "#gtceu:circuits/uev")
        .inputFluids("gtceu:mutated_living_solder 288")
        .itemOutputs("gtceu:hyper_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:annihilate_core")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_frame", "kubejs:graviton_transducer", "kubejs:topological_manipulator_unit", "gtceu:uxv_field_generator", "2x #gtceu:circuits/uxv", "4x gtceu:double_cinobite_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296")
        .itemOutputs("kubejs:annihilate_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("kubejs:draconiumawakened_plasma_containment_cell")
        .notConsumable("gtceu:draconium_nanoswarm")
        .inputFluids("gtceu:draconiumawakened_plasma 1000")
        .itemInputs("kubejs:plasma_containment_cell")
        .itemOutputs("kubejs:draconiumawakened_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("kubejs:dense_neutron_plasma_cell")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .inputFluids("gtceu:dense_neutron_plasma 1000")
        .itemInputs("kubejs:extremely_durable_plasma_cell")
        .itemOutputs("kubejs:dense_neutron_plasma_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("kubejs:chaos_containment_unit")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:chaos_plasma 1000")
        .itemInputs("kubejs:time_dilation_containment_unit")
        .itemOutputs("kubejs:chaos_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:neutronium_gearbox")
        .itemInputs("4x gtceu:neutronium_plate", "2x gtceu:neutronium_gear", "gtceu:neutronium_frame")
        .itemOutputs("2x kubejs:neutronium_gearbox")
        .EUt(16)
        .duration(50)
        .circuit(4)

    gtr.precision_assembler("kubejs:annihilation_constrainer")
        .itemInputs("kubejs:hypercube", "8x kubejs:contained_reissner_nordstrom_singularity", "4x #gtceu:circuits/uxv", "16x gtceu:cosmicneutronium_foil")
        .inputFluids("gtceu:molten_cinobite 1152", "gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("kubejs:annihilation_constrainer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:neutronium_antimatter_fuel_rod")
        .itemInputs("64x kubejs:pellet_antimatter", "kubejs:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:zylon 100", "gtceu:neutronium 100")
        .itemOutputs("kubejs:neutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("kubejs:draconium_antimatter_fuel_rod")
        .itemInputs("64x kubejs:pellet_antimatter", "64x kubejs:pellet_antimatter", "kubejs:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:fullerene_polymer_matrix_pulp 100", "gtceu:draconium 100")
        .itemOutputs("kubejs:draconium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("kubejs:cosmicneutronium_antimatter_fuel_rod")
        .itemInputs("64x kubejs:pellet_antimatter", "64x kubejs:pellet_antimatter", "64x kubejs:pellet_antimatter", "kubejs:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:radox 100", "gtceu:cosmicneutronium 100")
        .itemOutputs("kubejs:cosmicneutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2000)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("kubejs:infinity_antimatter_fuel_rod")
        .itemInputs("64x kubejs:pellet_antimatter", "64x kubejs:pellet_antimatter", "64x kubejs:pellet_antimatter", "kubejs:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:heavy_quark_degenerate_matter_plasma 1000", "gtceu:liquid_cosmic_mesh 100", "gtceu:infinity 100")
        .itemOutputs("kubejs:infinity_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2000)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("kubejs:reinforced_echo_shard")
        .itemInputs("4x gtceu:echo_plate", "4x kubejs:echobone", "2x minecraft:netherite_scrap", "gtceu:double_echoite_plate")
        .inputFluids("gtceu:liquid_hydrogen 8000", "gtceu:echoite_plasma 1000")
        .itemOutputs("kubejs:reinforced_echo_shard")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.assembler("kubejs:graviton_field_constraint_casing")
        .itemInputs("gtceu:draconium_frame", "kubejs:annihilation_constrainer", "gtceu:neutronium_nanoswarm", "gtceu:celestialtungsten_gear", "4x gtceu:double_adamantium_plate")
        .inputFluids("gtceu:neutronium 288")
        .itemOutputs("2x kubejs:graviton_field_constraint_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.assembler("kubejs:laser_cooling_casing")
        .itemInputs("gtceu:hsse_frame", "kubejs:laser_cooling_unit", "2x kubejs:uhv_voltage_coil", "6x gtceu:zirconium_carbide_plate", "2x gtceu:double_fluxed_electrum_plate", "4x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("kubejs:laser_cooling_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.dimensionally_transcendent_plasma_forge("kubejs:hypercube")
        .itemInputs("12x gtceu:cosmicneutronium_rod", "24x gtceu:celestialtungsten_rod")
        .inputFluids("gtceu:exciteddtec 1000")
        .itemOutputs("kubejs:hypercube")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2400)
        .blastFurnaceTemp(30000)

    gtr.mixer("gtceu:dimensionallytranscendentcrudecatalyst")
        .itemInputs("kubejs:resonating_gem")
        .inputFluids("gtceu:nitrogen_plasma 1000", "gtceu:helium_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("gtceu:exciteddtec")
        .itemInputs("kubejs:quantum_chromodynamic_charge")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 10000")
        .outputFluids("gtceu:exciteddtec 10000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)


    gtr.annihilate_generator("kubejs:neutronium_antimatter_fuel_rod")
        .itemInputs("kubejs:neutronium_antimatter_fuel_rod")
        .chancedOutput("kubejs:annihilation_constrainer", 9000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 256)

    gtr.annihilate_generator("kubejs:draconium_antimatter_fuel_rod")
        .itemInputs("kubejs:draconium_antimatter_fuel_rod")
        .chancedOutput("kubejs:annihilation_constrainer", 8000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 4096)

    gtr.annihilate_generator("kubejs:cosmicneutronium_antimatter_fuel_rod")
        .itemInputs("kubejs:cosmicneutronium_antimatter_fuel_rod")
        .chancedOutput("kubejs:annihilation_constrainer", 7000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 65536)

    gtr.annihilate_generator("kubejs:infinity_antimatter_fuel_rod")
        .itemInputs("kubejs:infinity_antimatter_fuel_rod")
        .chancedOutput("kubejs:annihilation_constrainer", 6000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 1048576)

    gtr.assembler("gtceu:fishing_ground")
        .itemInputs("gtceu:lv_fisher",
            "gtceu:mv_fisher",
            "gtceu:hv_fisher",
            "gtceu:lv_sensor",
            "gtceu:mv_sensor",
            "gtceu:hv_sensor",
            "2x #gtceu:circuits/ev",
            "4x gtceu:eglin_steel_plate",
            "4x gtceu:double_aluminium_bronze_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtceu:fishing_ground")
        .EUt(480)
        .duration(400)

    gtr.assembler("kubejs:extreme_strength_tritanium_casing")
        .itemInputs("gtceu:tritanium_frame", "6x gtceu:tritanium_plate")
        .itemOutputs("2x kubejs:extreme_strength_tritanium_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("kubejs:aluminium_bronze_casing")
        .itemInputs("gtceu:aluminium_bronze_frame", "6x gtceu:aluminium_bronze_plate")
        .itemOutputs("2x kubejs:aluminium_bronze_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("kubejs:hyper_mechanical_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadria_plate")
        .itemOutputs("2x kubejs:hyper_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("kubejs:enhance_hyper_mechanical_casing")
        .itemInputs("gtceu:naquadria_frame", "2x gtceu:double_naquadah_alloy_plate", "2x gtceu:double_naquadah_plate", "2x gtceu:double_enriched_naquadah_plate")
        .itemOutputs("2x kubejs:enhance_hyper_mechanical_casing")
        .inputFluids("gtceu:naquadria 576")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("kubejs:dimensionally_transcendent_casing")
        .itemInputs("gtceu:mithril_frame", "2x kubejs:dimension_injection_casing", "2x kubejs:molecular_casing", "gtceu:iv_quantum_chest", "gtceu:iv_quantum_tank", "12x gtceu:adamantium_bolt", "gtceu:enderite_single_wire", "6x gtceu:palladium_plate", "6x gtceu:osmiridium_plate")
        .itemOutputs("2x kubejs:dimensionally_transcendent_casing")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.assembler("kubejs:uruium_coil_block")
        .itemInputs("64x gtceu:uruium_double_wire", "64x gtceu:uruium_double_wire", "16x gtceu:neutronium_ring", "32x gtceu:vibramantium_bolt", "64x gtceu:black_steel_foil", "64x gtceu:cupronickel_foil", "64x gtceu:ruthenium_trinium_americium_neutronate_foil", "64x gtceu:hssg_foil", "64x gtceu:styrene_butadiene_rubber_foil")
        .itemOutputs("kubejs:uruium_coil_block")
        .inputFluids("gtceu:molybdenum 576")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_1")
        .inputFluids("gtceu:rocket_fuel 10")
        .duration(5)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_2")
        .inputFluids("gtceu:rocket_fuel_rp_1 10")
        .duration(10)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_3")
        .inputFluids("gtceu:dense_hydrazine_fuel_mixture 10")
        .duration(30)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_4")
        .inputFluids("gtceu:rocket_fuel_cn3h7o3 10")
        .duration(60)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_5")
        .inputFluids("gtceu:rocket_fuel_h8n4c2o4 10")
        .duration(120)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_6")
        .inputFluids("gtceu:explosivehydrazine 10")
        .duration(160)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_7")
        .inputFluids("ad_astra:cryo_fuel 10")
        .duration(240)
        .EUt(-2048)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_8")
        .inputFluids("gtceu:stellar_energy_rocket_fuel 10")
        .duration(480)
        .EUt(-2048)

    gtr.naquadah_reactor("gtceu:naquadah")
        .inputFluids("gtceu:naquadah 1")
        .duration(20)
        .EUt(-32768)

    gtr.naquadah_reactor("gtceu:enriched_naquadah")
        .inputFluids("gtceu:enriched_naquadah 1")
        .duration(30)
        .EUt(-32768)

    gtr.naquadah_reactor("gtceu:naquadah_fuel")
        .inputFluids("gtceu:naquadah_fuel 1")
        .duration(875)
        .EUt(-32768)

    gtr.naquadah_reactor("gtceu:enriched_naquadah_fuel")
        .inputFluids("gtceu:enriched_naquadah_fuel 1")
        .duration(1250)
        .EUt(-32768)

    gtr.large_naquadah_reactor("gtceu:naquadah_fuel")
        .inputFluids("gtceu:naquadah_fuel 1", "gtceu:hydrogen 10")
        .duration(875)
        .EUt(-131072)

    gtr.large_naquadah_reactor("gtceu:enriched_naquadah_fuel")
        .inputFluids("gtceu:enriched_naquadah_fuel 1", "gtceu:hydrogen 10")
        .duration(1250)
        .EUt(-131072)

    gtr.large_naquadah_reactor("gtceu:naquadah_fuel1")
        .inputFluids("gtceu:naquadah_fuel 10", "gtceu:oxygen_plasma 10")
        .duration(16 * 875)
        .EUt(-131072)

    gtr.large_naquadah_reactor("gtceu:enriched_naquadah_fuel1")
        .inputFluids("gtceu:enriched_naquadah_fuel 10", "gtceu:nitrogen_plasma 10")
        .duration(16 * 1250)
        .EUt(-131072)

    gtr.hyper_reactor("gtceu:hyper_fuel_1")
        .inputFluids("gtceu:hyper_fuel_1 1", "gtceu:argon_plasma 1")
        .duration(200)
        .EUt(-GTValues.V[GTValues.UEV])

    gtr.hyper_reactor("gtceu:hyper_fuel_2")
        .inputFluids("gtceu:hyper_fuel_2 1", "gtceu:iron_plasma 1")
        .duration(200)
        .EUt(-GTValues.V[GTValues.UIV])

    gtr.hyper_reactor("gtceu:hyper_fuel_3")
        .inputFluids("gtceu:hyper_fuel_3 1", "gtceu:nickel_plasma 1")
        .duration(200)
        .EUt(-GTValues.V[GTValues.UXV])

    gtr.hyper_reactor("gtceu:hyper_fuel_4")
        .inputFluids("gtceu:hyper_fuel_4 1", "gtceu:degenerate_rhenium_plasma 1")
        .duration(200)
        .EUt(-GTValues.V[GTValues.OpV])

    gtr.advanced_hyper_reactor("gtceu:concentration_mixing_hyper_fuel_1")
        .inputFluids("gtceu:concentration_mixing_hyper_fuel_1 1")
        .duration(200)
        .EUt(-4 * GTValues.V[GTValues.MAX])

    gtr.advanced_hyper_reactor("gtceu:concentration_mixing_hyper_fuel_2")
        .inputFluids("gtceu:concentration_mixing_hyper_fuel_2 1")
        .duration(200)
        .EUt(-16 * GTValues.V[GTValues.MAX])

    gtr.mixer("gtceu:concentration_mixing_hyper_fuel_1")
        .itemInputs("gtceu:hassium_dust", "gtceu:oganesson_dust")
        .inputFluids("gtceu:hyper_fuel_4 1000", "gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_1 1000")
        .EUt(GTValues.V[GTValues.UXV])
        .duration(800)

    gtr.mixer("gtceu:concentration_mixing_hyper_fuel_2")
        .itemInputs("gtceu:starmetal_dust", "gtceu:draconium_dust")
        .inputFluids("gtceu:concentration_mixing_hyper_fuel_1 1000", "gtceu:dimensionallytranscendentprosaiccatalyst 1000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_2 1000")
        .EUt(GTValues.V[GTValues.OpV])
        .duration(800)

    gtr.compressor("gtceu:rubber_plate")
        .itemInputs("2x gtceu:sticky_resin")
        .itemOutputs("gtceu:rubber_plate")
        .EUt(2)
        .duration(100)

    gtr.fusion_reactor("gtceu:mithril_plasma")
        .duration(200)
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .inputFluids("gtceu:berkelium 144", "gtceu:potassium 1152")
        .outputFluids("gtceu:mithril_plasma 144")

    gtr.fusion_reactor("gtceu:orichalcum_plasma")
        .duration(200)
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .inputFluids("gtceu:einsteinium 144", "gtceu:sodium 1152")
        .outputFluids("gtceu:orichalcum_plasma 144")

    //peek
    gtr.electric_blast_furnace("gtceu:calcium_carbide_dust")
        .itemInputs("2x gtceu:carbon_dust", "2x gtceu:quicklime_dust")
        .itemOutputs("gtceu:calcium_carbide_dust")
        .outputFluids("gtceu:oxygen 1000")
        .EUt(120)
        .duration(100)
        .blastFurnaceTemp(800)

    gtr.chemical_reactor("gtceu:acetylene")
        .itemInputs("3x gtceu:calcium_carbide_dust")
        .inputFluids("minecraft:water 2000")
        .outputFluids("gtceu:acetylene 1000")
        .itemOutputs("5x gtceu:calcium_hydroxide_dust")
        .EUt(7)
        .duration(60)

    gtr.mixer("gtceu:sodium_nitrate_solution")
        .itemInputs("5x gtceu:sodium_nitrate_dust")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:sodium_nitrate_solution 1000")
        .EUt(120)
        .duration(80)

    gtr.mixer("gtceu:znfealcl_catalyst_dust")
        .itemInputs("gtceu:zinc_dust", "gtceu:iron_dust", "gtceu:aluminium_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("4x gtceu:znfealcl_catalyst_dust")
        .EUt(15360)
        .duration(250)

    gtr.large_chemical_reactor("gtceu:co_ac_ab_catalyst_dust")
        .itemInputs("2x gtceu:charcoal_dust", "gtceu:cobalt_dust", "gtceu:polybenzimidazole_plate")
        .inputFluids("gtceu:steam 1000", "gtceu:acetylene 1000")
        .outputFluids("gtceu:hydrogen 4000", "gtceu:carbon_monoxide 1000")
        .itemOutputs("1x gtceu:co_ac_ab_catalyst_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:sodium_nitrite_dust")
        .notConsumable("gtceu:co_ac_ab_catalyst_dust")
        .inputFluids("gtceu:sodium_nitrate_solution 1000")
        .outputFluids("gtceu:oxygen 1000", "minecraft:water 1000")
        .itemOutputs("4x gtceu:sodium_nitrite_dust")
        .EUt(30)
        .duration(300)

    gtr.chemical_reactor("gtceu:boric_acide")
        .itemInputs("23x gtceu:borax_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .outputFluids("gtceu:boric_acide 4000", "minecraft:water 5000")
        .itemOutputs("4x gtceu:salt_dust")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtceu:fluoroboric_acide")
        .inputFluids("gtceu:boric_acide 1000", "gtceu:hydrofluoric_acid 4000")
        .outputFluids("gtceu:fluoroboric_acide 1000", "minecraft:water 13000")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtceu:benzenediazonium_tetrafluoroborate")
        .itemInputs("4x gtceu:sodium_nitrite_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:fluoroboric_acide 2000")
        .outputFluids("gtceu:benzenediazonium_tetrafluoroborate 1000", "minecraft:water 2000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(30720)
        .duration(130)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distillery("gtceu:fluoro_benzene")
        .inputFluids("gtceu:benzenediazonium_tetrafluoroborate 1000")
        .outputFluids("gtceu:fluoro_benzene 1000")
        .EUt(122880)
        .duration(100)

    gtr.chemical_reactor("gtceu:fluorotoluene")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:fluoroantimonic_acid 1000", "gtceu:methane 1000", "gtceu:fluoro_benzene 1000")
        .outputFluids("gtceu:fluorotoluene 1000", "minecraft:water 4000")
        .itemOutputs("4x gtceu:antimony_trifluoride_dust")
        .EUt(480)
        .duration(150)

    gtr.chemical_reactor("gtceu:hydroquinone")
        .inputFluids("gtceu:benzene 2000", "gtceu:oxygen 5000", "gtceu:propene 1000")
        .outputFluids("gtceu:hydroquinone 1000", "gtceu:resorcinol 1000", "gtceu:acetone 1000")
        .EUt(1920)
        .duration(200)
        .circuit(2)

    gtr.large_chemical_reactor("gtceu:difluorobenzophenone_dust")
        .notConsumable("gtceu:znfealcl_catalyst_dust")
        .inputFluids("gtceu:fluorotoluene 1000", "gtceu:chlorine 6000", "minecraft:water 1000", "gtceu:fluoro_benzene 1000")
        .outputFluids("gtceu:hydrochloric_acid 6000")
        .itemOutputs("24x gtceu:difluorobenzophenone_dust")
        .EUt(1920)
        .duration(100)

    gtr.large_chemical_reactor("gtceu:polyetheretherketone")
        .itemInputs("24x gtceu:difluorobenzophenone_dust", "6x gtceu:soda_ash_dust")
        .inputFluids("gtceu:hydroquinone 1000")
        .outputFluids("gtceu:polyetheretherketone 2592", "minecraft:water 1000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("4x gtceu:sodium_fluoride_dust")
        .EUt(122880)
        .duration(250)
        .cleanroom(CleanroomType.CLEANROOM)

    //nuclear_waste
    gtr.centrifuge("nuclear_waste")
        .itemInputs("kubejs:nuclear_waste")
        .itemOutputs("gtceu:tiny_plutonium_dust",
            "gtceu:tiny_polonium_dust",
            "gtceu:tiny_uranium_dust",
            "gtceu:tiny_thorium_dust",
            "gtceu:tiny_protactinium_dust",
            "gtceu:tiny_neptunium_dust")
        .EUt(2048)
        .duration(200)

    //echo
    const echos = [
        "minecraft:echo_shard",
        "minecraft:sculk_catalyst",
        "minecraft:sculk_shrieker",
        "minecraft:sculk_sensor"
    ]
    echos.forEach((echo) => {
        gtr.macerator("echodust" + echo)
            .itemInputs(echo)
            .itemOutputs("gtceu:echo_dust")
            .EUt(7)
            .duration(100)
    })
    //iodine
    gtr.mixer("gtceu:kelp_slurry")
        .itemInputs("8x minecraft:dried_kelp")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:kelp_slurry 1000")
        .EUt(30)
        .duration(600)

    gtr.distillery("gtceu:enriched_potassium_iodide_slurry")
        .inputFluids("gtceu:kelp_slurry 1000")
        .outputFluids("gtceu:enriched_potassium_iodide_slurry 100")
        .EUt(30)
        .duration(200)

    gtr.chemical_reactor("gtceu:iodine_containing_slurry")
        .inputFluids("gtceu:chlorine 1000", "gtceu:enriched_potassium_iodide_slurry 1000")
        .outputFluids("gtceu:iodine_containing_slurry 1000")
        .EUt(120)
        .duration(100)

    gtr.centrifuge("gtceu:iodine_dust")
        .inputFluids("gtceu:iodine_containing_slurry 1000")
        .itemOutputs("gtceu:iodine_dust", "2x gtceu:rock_salt_dust")
        .EUt(120)
        .duration(200)

    //germanium
    gtr.extractor("gtceu:tannic")
        .itemInputs("minecraft:nether_wart_block")
        .outputFluids("gtceu:tannic 50")
        .EUt(30)
        .duration(200)

    gtr.chemical_bath("gtceu:ash_leaching_solution")
        .itemInputs("12x #forge:dusts/ash")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:ash_leaching_solution 1000")
        .EUt(120)
        .duration(400)

    gtr.mixer("gtceu:germanium_containing_precipitate_dust")
        .inputFluids("gtceu:ash_leaching_solution 1000", "gtceu:tannic 1000")
        .itemOutputs("gtceu:germanium_containing_precipitate_dust")
        .EUt(120)
        .duration(200)

    gtr.arc_furnace("gtceu:germanium_ash_dust")
        .itemInputs("2x gtceu:germanium_containing_precipitate_dust")
        .itemOutputs("gtceu:germanium_ash_dust")
        .EUt(30)
        .duration(120)

    gtr.chemical_reactor("gtceu:germanium_tetrachloride_solution")
        .itemInputs("2x gtceu:germanium_ash_dust")
        .inputFluids("gtceu:hydrochloric_acid 4000")
        .outputFluids("gtceu:germanium_tetrachloride_solution 1000")
        .EUt(120)
        .duration(200)

    gtr.chemical_reactor("gtceu:germanium_dioxide_solution_dust")
        .inputFluids("gtceu:germanium_tetrachloride_solution 1000", "minecraft:water 2000")
        .itemOutputs("gtceu:germanium_dioxide_solution_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 4000")
        .EUt(30)
        .duration(800)

    gtr.electric_blast_furnace("gtceu:germanium_dust")
        .itemInputs("gtceu:germanium_dioxide_solution_dust")
        .inputFluids("gtceu:hydrogen 4000")
        .itemOutputs("gtceu:germanium_dust")
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(680)

    //rhenium
    gtr.chemical_reactor("gtceu:rhenium_dust")
        .inputFluids("gtceu:ammonium_perrhenate 1000", "gtceu:hydrogen 7000")
        .itemOutputs("gtceu:rhenium_dust")
        .outputFluids("gtceu:ammonia 1000", "minecraft:water 4000")
        .EUt(1920)
        .duration(80)

    gtr.chemical_reactor("gtceu:ammonium_perrhenate")
        .inputFluids("gtceu:rhenium_sulfuric_solution 1000", "gtceu:ammonia 1000")
        .outputFluids("gtceu:ammonium_perrhenate 1000", "gtceu:hydrogen_sulfide 1000")
        .EUt(480)
        .duration(150)

    gtr.mixer("gtceu:rhenium_sulfuric_solution")
        .inputFluids("gtceu:molybdenum_flue 3000", "minecraft:water 250")
        .outputFluids("gtceu:rhenium_sulfuric_solution 3000")
        .EUt(491520)
        .duration(30)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtceu:molybdenum_flue")
        .itemInputs("4x gtceu:molybdenum_concentrate_dust")
        .inputFluids("gtceu:oxygen 7250")
        .itemOutputs("4x gtceu:molybdenum_trioxide_dust")
        .outputFluids("gtceu:molybdenum_flue 3000")
        .EUt(120)
        .duration(340)
        .blastFurnaceTemp(2400)

    gtr.chemical_reactor("gtceu:molybdenum_concentrate_dust")
        .itemInputs("3x gtceu:gold_depleted_molybdenite_dust")
        .inputFluids("gtceu:iron_iii_chloride 250")
        .itemOutputs("4x gtceu:molybdenum_concentrate_dust")
        .EUt(1920)
        .duration(10)

    gtr.chemical_reactor("gtceu:gold_depleted_molybdenite_dust")
        .itemInputs("3x gtceu:molybdenite_dust")
        .inputFluids("gtceu:sodium_cyanide 1000")
        .itemOutputs("3x gtceu:gold_depleted_molybdenite_dust")
        .outputFluids("gtceu:gold_cyanide 1000")
        .EUt(7680)
        .duration(100)

    gtr.chemical_reactor("gtceu:sodium_cyanide")
        .itemInputs("2x gtceu:sodium_dust")
        .inputFluids("gtceu:hydrogen_cyanide 2000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:sodium_cyanide 2000", "minecraft:water 1000")
        .EUt(1920)
        .duration(12)

    gtr.chemical_reactor("gtceu:gold_cyanide")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("gtceu:gold_cyanide 1000")
        .itemOutputs("gtceu:gold_dust")
        .outputFluids("gtceu:sodium_cyanide 1000")
        .EUt(1920)
        .duration(140)

    //carbon nanotubes
    gtr.chemical_reactor("gtceu:carbon_nanotubes_ingot")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 800", "gtceu:cycloparaphenylene 200")
        .itemOutputs("gtceu:carbon_nanotubes_ingot")
        .circuit(1)
        .EUt(320000)
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:cycloparaphenylene")
        .itemInputs("23x gtceu:dichlorocyclooctadieneplatinium_dust", "8x gtceu:carbon_dust", "4x gtceu:diiodobiphenyl_dust")
        .inputFluids("gtceu:trimethyltin_chloride 4000", "gtceu:silver_tetrafluoroborate 4000")
        .itemOutputs("3x gtceu:platinum_raw_dust", "4x gtceu:silver_dust")
        .outputFluids("gtceu:cycloparaphenylene 10000", "gtceu:boron_fluoride 4000", "gtceu:1_octene 3000", "gtceu:hydrofluoric_acid 4000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:dichlorocyclooctadieneplatinium_dust")
        .itemInputs("gtceu:platinum_dust", "2x gtceu:potassium_dust")
        .inputFluids("gtceu:nitric_acid 4000", "gtceu:hydrochloric_acid 4000", "gtceu:cyclooctadiene 1000")
        .itemOutputs("23x gtceu:dichlorocyclooctadieneplatinium_dust", "4x gtceu:rock_salt_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:cyclooctadiene")
        .notConsumable("gtceu:nickel_dust")
        .inputFluids("gtceu:butadiene 2000")
        .outputFluids("gtceu:cyclooctadiene 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    gtr.large_chemical_reactor("gtceu:diiodobiphenyl_dust")
        .notConsumable("gtceu:blacklight")
        .itemInputs("2x gtceu:iodine_dust", "22x gtceu:biphenyl_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .itemOutputs("22x gtceu:diiodobiphenyl_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.chemical_reactor("gtceu:formaldehyde")
        .notConsumable("gtceu:silver_dust")
        .inputFluids("gtceu:methanol 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:formaldehyde 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    gtr.chemical_reactor("gtceu:acetaldehyde")
        .notConsumable("gtceu:osmium_tetroxide_dust")
        .inputFluids("gtceu:acetone 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:formaldehyde 1000", "gtceu:acetaldehyde 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(320)

    gtr.large_chemical_reactor("gtceu:trimethyltin_chloride")
        .notConsumable("gtceu:magnesium_dust")
        .itemInputs("gtceu:tin_dust")
        .inputFluids("gtceu:methane 3000", "gtceu:oxygen 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:trimethyltin_chloride 1000", "gtceu:diluted_hydrochloric_acid 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:silver_tetrafluoroborate")
        .itemInputs("6x gtceu:silver_dust")
        .inputFluids("gtceu:boron_fluoride 2000", "gtceu:oxygen 3000")
        .outputFluids("gtceu:silver_tetrafluoroborate 6000")
        .itemOutputs("5x gtceu:boron_trioxide_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.chemical_reactor("gtceu:boron_fluoride")
        .itemInputs("5x gtceu:boron_trioxide_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .outputFluids("gtceu:boron_fluoride 2000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    gtr.chemical_reactor("gtceu:boron_trioxide_dust")
        .inputFluids("gtceu:boric_acide 2000")
        .itemOutputs("5x gtceu:boron_trioxide_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(400)
        .circuit(1)

    gtr.chemical_reactor("gtceu:pyridine")
        .inputFluids("gtceu:formaldehyde 2000", "gtceu:acetaldehyde 1000", "gtceu:ammonia 1000")
        .outputFluids("gtceu:pyridine 1000", "gtceu:hydrogen 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    //hexanitrohexaaxaisowurtzitane
    gtr.chemical_reactor("gtceu:potassium_bisulfite_dust")
        .itemInputs("6x gtceu:potassium_carbonate_dust")
        .inputFluids("gtceu:sulfur_dioxide 2000", "minecraft:water 1000")
        .itemOutputs("12x gtceu:potassium_bisulfite_dust")
        .outputFluids("gtceu:carbon_dioxide 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(160)

    gtr.chemical_reactor("gtceu:potassium_hydroxylaminedisulfonate_dust")
        .itemInputs("12x gtceu:potassium_bisulfite_dust")
        .inputFluids("gtceu:nitrous_acid 1000")
        .itemOutputs("13x gtceu:potassium_hydroxylaminedisulfonate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.chemical_reactor("gtceu:hydroxylammonium_sulfate_dust")
        .itemInputs("26x gtceu:potassium_hydroxylaminedisulfonate_dust")
        .inputFluids("minecraft:water 4000")
        .itemOutputs("17x gtceu:hydroxylammonium_sulfate_dust", "14x gtceu:potassium_sulfate_dust")
        .outputFluids("gtceu:sulfuric_acid 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.chemical_reactor("gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .inputFluids("gtceu:ethylenediamine 1000")
        .itemInputs("36x gtceu:crude_hexanitrohexaaxaisowurtzitane_dust", "3x gtceu:silica_gel_dust")
        .itemOutputs("36x gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:ethylenediamine")
        .notConsumable("gtceu:palladium_dust")
        .inputFluids("gtceu:ammonia 1000", "gtceu:ethanolamine 1000")
        .outputFluids("gtceu:ethylenediamine 1000", "minecraft:water 1000")
        .EUt(120)
        .duration(180)

    gtr.chemical_reactor("gtceu:ethanolamine")
        .inputFluids("gtceu:ammonia 1000", "gtceu:ethylene_oxide 1000")
        .outputFluids("gtceu:ethanolamine 1000")
        .EUt(7680)
        .duration(60)

    gtr.chemical_reactor("gtceu:ethylene_oxide")
        .inputFluids("gtceu:oxygen 1000", "gtceu:ethylene 1000")
        .outputFluids("gtceu:ethylene_oxide 1000")
        .EUt(480)
        .circuit(4)
        .duration(80)

    gtr.mixer("gtceu:silica_gel_dust")
        .itemInputs("3x gtceu:silicon_dioxide_dust", "3x gtceu:sodium_hydroxide_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:silica_gel_dust")
        .EUt(120)
        .duration(80)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:crude_hexanitrohexaaxaisowurtzitane_dust")
        .inputFluids("minecraft:water 4000")
        .itemInputs("46x gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust", "48x gtceu:nitronium_tetrafluoroborate_dust")
        .itemOutputs("36x gtceu:crude_hexanitrohexaaxaisowurtzitane_dust", "14x gtceu:nitrosonium_tetrafluoroborate_dust")
        .outputFluids("gtceu:fluoroboric_acide 4000", "gtceu:acetic_acid 4000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:nitronium_tetrafluoroborate_dust")
        .inputFluids("gtceu:boron_fluoride 1000", "gtceu:hydrofluoric_acid 1000", "gtceu:nitric_acid 1000")
        .itemOutputs("8x gtceu:nitronium_tetrafluoroborate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(1920)
        .duration(40)

    gtr.chemical_reactor("gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust")
        .inputFluids("minecraft:water 14000")
        .itemInputs("70x gtceu:dibenzyltetraacetylhexaazaisowurtzitane_dust", "42x gtceu:nitrosonium_tetrafluoroborate_dust")
        .itemOutputs("46x gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust")
        .outputFluids("gtceu:hydrofluoric_acid 24000", "gtceu:boric_acide 6000", "gtceu:nitric_oxide 4000", "gtceu:benzaldehyde 2000")
        .EUt(7680)
        .duration(140)

    gtr.chemical_reactor("gtceu:nitrosonium_tetrafluoroborate_dust")
        .inputFluids("gtceu:boron_fluoride 2000", "gtceu:hydrofluoric_acid 2000", "gtceu:dinitrogen_tetroxide 2000")
        .itemOutputs("7x gtceu:nitrosonium_tetrafluoroborate_dust")
        .outputFluids("gtceu:nitric_acid 1000")
        .EUt(120)
        .duration(120)

    gtr.large_chemical_reactor("gtceu:dibenzyltetraacetylhexaazaisowurtzitane_dust")
        .notConsumableFluid("gtceu:hydrobromic_acid 10000")
        .itemInputs("72x gtceu:succinimidyl_acetate_dust", "102x gtceu:hexabenzylhexaazaisowurtzitane_dust")
        .inputFluids("gtceu:hydrogen 8000")
        .itemOutputs("70x gtceu:dibenzyltetraacetylhexaazaisowurtzitane_dust")
        .outputFluids("gtceu:toluene 6000")
        .EUt(122880)
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:hydrobromic_acid")
        .inputFluids("gtceu:bromine 1000", "gtceu:hydrogen 1000")
        .outputFluids("gtceu:hydrobromic_acid 1000")
        .EUt(480)
        .duration(300)

    gtr.chemical_reactor("gtceu:succinimidyl_acetate_dust")
        .inputFluids("gtceu:acetic_anhydride 1000")
        .itemInputs("13x gtceu:n_hydroxysuccinimide_dust")
        .itemOutputs("18x gtceu:succinimidyl_acetate_dust")
        .outputFluids("gtceu:acetic_acid 1000")
        .EUt(7680)
        .duration(80)

    gtr.chemical_reactor("gtceu:n_hydroxysuccinimide_dust")
        .inputFluids("gtceu:methanol 40000", "gtceu:toluene 6000", "gtceu:hydroxylamine_hydrochloride 6000")
        .itemInputs("6x gtceu:sodium_dust", "66x gtceu:succinic_anhydride_dust")
        .outputFluids("minecraft:water 6000", "gtceu:hydrogen 6000")
        .itemOutputs("13x gtceu:n_hydroxysuccinimide_dust", "12x gtceu:salt_dust")
        .EUt(1920)
        .duration(220)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:succinic_anhydride_dust")
        .inputFluids("gtceu:acetic_anhydride 1000")
        .itemInputs("14x gtceu:succinic_acid_dust")
        .itemOutputs("11x gtceu:succinic_anhydride_dust")
        .outputFluids("gtceu:acetic_acid 2000")
        .EUt(7680)
        .duration(20)

    gtr.chemical_reactor("gtceu:succinic_acid_dust")
        .notConsumable("gtceu:rhodium_plated_palladium_dust")
        .inputFluids("minecraft:water 1000", "gtceu:hydrogen 1000", "gtceu:maleic_anhydride 2000")
        .itemOutputs("14x gtceu:succinic_acid_dust")
        .EUt(1920)
        .duration(200)

    gtr.chemical_reactor("gtceu:maleic_anhydride")
        .notConsumable("gtceu:bismuth_dust")
        .inputFluids("gtceu:oxygen 7000", "gtceu:butane 1000")
        .outputFluids("minecraft:water 4000", "gtceu:maleic_anhydride 1000")
        .EUt(480)
        .duration(280)

    gtr.large_chemical_reactor("gtceu:hydroxylamine_hydrochloride")
        .itemInputs("17x gtceu:hydroxylammonium_sulfate_dust", "3x gtceu:barium_chloride_dust")
        .outputFluids("gtceu:hydroxylamine_hydrochloride 2000", "minecraft:water 1000")
        .itemOutputs("6x gtceu:barite_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)

    gtr.chemical_reactor("gtceu:nitrous_acid")
        .itemInputs("4x gtceu:sodium_nitrite_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("7x gtceu:sodium_bisulfate_dust")
        .outputFluids("gtceu:nitrous_acid 1000")
        .EUt(30)
        .duration(80)

    gtr.chemical_reactor("gtceu:barium_chloride_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemInputs("6x gtceu:barium_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .itemOutputs("3x gtceu:barium_chloride_dust")
        .EUt(120)
        .duration(60)

    gtr.chemical_reactor("gtceu:hexabenzylhexaazaisowurtzitane_dust")
        .inputFluids("gtceu:benzylamine 6000", "gtceu:glyoxal 3000")
        .itemInputs("6x gtceu:acetonitrile_dust")
        .itemOutputs("102x gtceu:hexabenzylhexaazaisowurtzitane_dust")
        .EUt(7680)
        .duration(100)

    gtr.large_chemical_reactor("gtceu:acetonitrile_dust")
        .inputFluids("gtceu:ammonia 1000", "gtceu:carbon_monoxide 2000", "gtceu:hydrogen 4000")
        .outputFluids("minecraft:water 2000")
        .itemOutputs("6x gtceu:acetonitrile_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:glyoxal")
        .inputFluids("gtceu:acetaldehyde 2000", "gtceu:nitric_acid 2000")
        .outputFluids("minecraft:water 3000", "gtceu:glyoxal 2000", "gtceu:nitrogen_dioxide 1000")
        .EUt(60)
        .duration(120)

    gtr.large_chemical_reactor("gtceu:benzylamine")
        .itemInputs("22x gtceu:hexamethylenetetramine_dust")
        .inputFluids("minecraft:water 6000", "gtceu:hydrochloric_acid 2000", "gtceu:benzyl_chloride 1000")
        .outputFluids("gtceu:benzylamine 1000", "gtceu:formaldehyde 6000")
        .itemOutputs("18x gtceu:ammonium_chloride_dust")
        .EUt(7680)
        .duration(200)

    gtr.chemical_reactor("gtceu:benzyl_chloride")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:toluene 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:benzyl_chloride 1000", "gtceu:hydrochloric_acid 1000")
        .EUt(480)
        .duration(200)

    gtr.chemical_reactor("gtceu:hexamethylenetetramine_dust")
        .circuit(1)
        .inputFluids("gtceu:formaldehyde 4000", "gtceu:ammonia 6000")
        .itemOutputs("22x gtceu:hexamethylenetetramine_dust")
        .outputFluids("minecraft:water 6000")
        .EUt(30)
        .duration(160)

    //rare_earth
    gtr.mixer("gtceu:rare_earth_hydroxides")
        .itemInputs("gtceu:rare_earth_dust", "3x gtceu:sodium_hydroxide_dust")
        .inputFluids("minecraft:water 900", "gtceu:phosphoric_acid 100")
        .outputFluids("gtceu:rare_earth_hydroxides 1000")
        .EUt(480)
        .duration(50)

    gtr.chemical_reactor("gtceu:rare_earth_chlorides")
        .inputFluids("gtceu:rare_earth_hydroxides 1000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:rare_earth_chlorides 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .EUt(30)
        .duration(120)

    gtr.mixer("gtceu:rare_earth_oxide_dust")
        .inputFluids("gtceu:rare_earth_chlorides 1000", "gtceu:distilled_water 1000")
        .itemOutputs("gtceu:rare_earth_oxide_dust")
        .EUt(480)
        .duration(800)

    gtr.electric_blast_furnace("gtceu:rare_earth_metal_dust")
        .itemInputs("gtceu:rare_earth_oxide_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("gtceu:rare_earth_metal_dust")
        .EUt(7680)
        .duration(400)
        .blastFurnaceTemp(1760)

    gtr.rare_earth_centrifugal("rare_earth_centrifugal")
        .itemInputs("gtceu:rare_earth_metal_dust")
        .itemOutputs("gtceu:small_lanthanum_dust",
            "gtceu:small_cerium_dust",
            "gtceu:small_neodymium_dust",
            "gtceu:small_promethium_dust",
            "gtceu:small_samarium_dust",
            "gtceu:small_europium_dust",
            "gtceu:small_praseodymium_dust",
            "gtceu:small_gadolinium_dust",
            "gtceu:small_terbium_dust",
            "gtceu:small_dysprosium_dust",
            "gtceu:small_holmium_dust",
            "gtceu:small_erbium_dust",
            "gtceu:small_thulium_dust",
            "gtceu:small_ytterbium_dust",
            "gtceu:small_scandium_dust",
            "gtceu:small_lutetium_dust",
            "gtceu:small_yttrium_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    //adamantine
    gtr.large_chemical_reactor("gtceu:adamantine_dust")
        .itemInputs("2x gtceu:adamantine_compounds_dust", "17x gtceu:mirabilite_dust")
        .inputFluids("gtceu:nitration_mixture 1000", "gtceu:aqua_regia 2000", "gtceu:mana 100")
        .itemOutputs("gtceu:adamantine_dust", "5x gtceu:sodium_nitrate_dust", "7x gtceu:sodium_bisulfate_dust")
        .outputFluids("gtceu:rare_earth_chlorides 1000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.rare_earth_centrifugal("gtceu:raw_adamantine")
        .itemInputs("gtceu:naquadah_contain_rare_earth_dust")
        .chancedOutput("gtceu:raw_adamantine_compounds", 5000, 1000)
        .itemOutputs("6x gtceu:enriched_naquadah_sulfate_dust", "6x gtceu:naquadria_sulfate_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.large_chemical_reactor("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .inputFluids("gtceu:rare_earth_chlorides 6000", "gtceu:acidic_enriched_naquadah_solution 3000", "gtceu:acidic_naquadria_solution 3000", "gtceu:hydrofluoric_acid 2000")
        .outputFluids("gtceu:hydrochloric_acid 6000")
        .itemInputs("gtceu:alunite_dust")
        .itemOutputs("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.electric_blast_furnace("gtceu:naquadah_contain_rare_earth_dust")
        .itemInputs("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .inputFluids("gtceu:hydrogen 2000")
        .outputFluids("gtceu:hydrofluoric_acid 2000")
        .itemOutputs("gtceu:naquadah_contain_rare_earth_dust")
        .EUt(30720)
        .duration(800)
        .blastFurnaceTemp(6800)

    //vibranium
    gtr.electric_blast_furnace("gtceu:bedrock_smoke")
        .itemInputs("gtceu:bedrock_dust")
        .inputFluids("gtceu:xenon 100")
        .outputFluids("gtceu:bedrock_smoke 1000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .blastFurnaceTemp(16200)

    gtr.mixer("gtceu:bedrock_soot_solution")
        .inputFluids("gtceu:bedrock_smoke 1000", "gtceu:distilled_water 1000")
        .itemInputs("gtceu:naquadah_dust")
        .outputFluids("gtceu:bedrock_soot_solution 1000")
        .EUt(7680)
        .duration(400)

    gtr.centrifuge("gtceu:clean_bedrock_solution")
        .inputFluids("gtceu:bedrock_soot_solution 2000")
        .itemOutputs("gtceu:small_naquadah_dust", "gtceu:tiny_enriched_naquadah_dust", "gtceu:tiny_naquadria_dust")
        .outputFluids("gtceu:clean_bedrock_solution 1000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.fluid_heater("gtceu:bedrock_gas")
        .inputFluids("gtceu:clean_bedrock_solution 1000")
        .outputFluids("gtceu:bedrock_gas 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.large_chemical_reactor("gtceu:vibranium_unstable")
        .inputFluids("gtceu:bedrock_gas 1000", "gtceu:hydrochloric_acid 4000")
        .itemInputs("2x gtceu:adamantine_dust")
        .outputFluids("gtceu:vibranium_unstable 500", "gtceu:rare_earth_chlorides 1000")
        .itemOutputs("4x gtceu:iridium_chloride_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.stellar_forge("gtceu:vibranium_plasma")
        .itemInputs("kubejs:naquadria_charge")
        .inputFluids("gtceu:vibranium_unstable 1000", "gtceu:adamantium 1152")
        .outputFluids("gtceu:vibranium_plasma 1152")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    //zylon
    gtr.electric_blast_furnace("gtceu:zylon_dust")
        .itemInputs("gtceu:pre_zylon_dust")
        .outputFluids("gtceu:propane 2000")
        .itemOutputs("gtceu:zylon_dust")
        .EUt(120)
        .duration(16000)
        .blastFurnaceTemp(10000)

    gtr.chemical_reactor("gtceu:pre_zylon_dust")
        .itemInputs("16x gtceu:terephthalaldehyde_dust")
        .inputFluids("gtceu:dinitrodipropanyloxybenzene 1000")
        .itemOutputs("gtceu:pre_zylon_dust")
        .outputFluids("gtceu:oxygen 6000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:terephthalaldehyde_dust")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:dibromomethylbenzene 1000")
        .itemOutputs("16x gtceu:terephthalaldehyde_dust")
        .outputFluids("gtceu:bromine 2000", "gtceu:hydrogen_sulfide 1000", "minecraft:water 1000", "gtceu:oxygen 1000")
        .EUt(7680)
        .duration(50)

    gtr.large_chemical_reactor("gtceu:dinitrodipropanyloxybenzene")
        .itemInputs("3x gtceu:sodium_oxide_dust")
        .inputFluids("gtceu:acetic_anhydride 1000", "gtceu:isochloropropane 1000", "gtceu:resorcinol 1000", "gtceu:propene 1000", "gtceu:nitric_acid 2000")
        .outputFluids("gtceu:dinitrodipropanyloxybenzene 1000", "minecraft:water 2000", "gtceu:acetic_acid 2000")
        .EUt(7680)
        .duration(50)

    gtr.chemical_reactor("gtceu:sodium_oxide_dust")
        .itemInputs("2x gtceu:sodium_dust")
        .inputFluids("gtceu:oxygen 1000")
        .circuit(1)
        .itemOutputs("3x gtceu:sodium_oxide_dust")
        .EUt(7)
        .duration(60)

    gtr.chemical_reactor("gtceu:dibromomethylbenzene")
        .inputFluids("gtceu:bromine 2000", "gtceu:toluene 1000")
        .outputFluids("gtceu:dibromomethylbenzene 1000", "gtceu:hydrogen 2000")
        .EUt(30)
        .duration(600)

    //taranium
    gtr.chemical_bath("gtceu:metal_residue_dust")
        .inputFluids("gtceu:bedrock_gas 100")
        .itemInputs("gtceu:deepslate_dust")
        .itemOutputs("gtceu:metal_residue_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.centrifuge("gtceu:inert_residues_dust")
        .notConsumable("kubejs:separation_electromagnet")
        .itemInputs("10x gtceu:metal_residue_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .itemOutputs("gtceu:inert_residues_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.ore_washer("gtceu:clean_inert_residues_dust")
        .itemInputs("gtceu:inert_residues_dust")
        .inputFluids("gtceu:aqua_regia 1000")
        .itemOutputs("gtceu:clean_inert_residues_dust")
        .EUt(480)
        .duration(400)

    gtr.large_chemical_reactor("gtceu:dusty_liquid_helium_3")
        .inputFluids("gtceu:helium_3 1000", "gtceu:liquid_oxygen 2000", "gtceu:liquid_hydrogen 2000")
        .itemInputs("gtceu:clean_inert_residues_dust")
        .outputFluids("gtceu:dusty_liquid_helium_3 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(160)

    gtr.centrifuge("gtceu:taranium_enriched_liquid_helium_3")
        .notConsumable("kubejs:separation_electromagnet")
        .inputFluids("gtceu:dusty_liquid_helium_3 1000")
        .outputFluids("gtceu:taranium_enriched_liquid_helium_3 500")
        .EUt(3000)
        .duration(400)

    gtr.stellar_forge("gtceu:taranium_rich_liquid_helium_4_plasma")
        .inputFluids("gtceu:taranium_enriched_liquid_helium_3 10000", "gtceu:hydrogen 10000")
        .itemInputs("kubejs:naquadria_charge")
        .outputFluids("gtceu:taranium_rich_liquid_helium_4_plasma 10000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.fermenter("gtceu:taranium_dust")
        .inputFluids("gtceu:taranium_rich_liquid_helium_4 1000")
        .itemInputs("gtceu:activated_carbon_dust")
        .itemOutputs("gtceu:taranium_dust")
        .EUt(2)
        .duration(200000)

    //radox
    gtr.incubator("kubejs:variation_wood")
        .itemInputs("64x kubejs:barnarda_log", "16x minecraft:crimson_stem", "64x #forge:dusts/wood", "gtceu:lapotron_dust")
        .inputFluids("gtceu:unknowwater 10000", "gtceu:biomass 1000")
        .itemOutputs("64x kubejs:variation_wood")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)

    gtr.incubator("kubejs:variation_wood1")
        .itemInputs("64x kubejs:barnarda_log", "16x minecraft:warped_stem", "64x #forge:dusts/wood", "gtceu:lapotron_dust")
        .inputFluids("gtceu:unknowwater 10000", "gtceu:biomass 1000")
        .itemOutputs("64x kubejs:variation_wood")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)

    gtr.qft("gtceu:radox")
        .inputFluids("gtceu:radox_gas 21600", "gtceu:oxygen_plasma 75000", "gtceu:titanium_50_tetrachloride 1000")
        .itemInputs("16x gtceu:molybdenum_trioxide_dust",
            "16x gtceu:chromium_trioxide_dust",
            "14x gtceu:phosphorus_pentoxide_dust",
            "12x gtceu:cubic_zirconia_dust",
            "12x gtceu:germanium_dioxide_solution_dust",
            "12x gtceu:silicon_dioxide_dust",
            "10x gtceu:arsenic_trioxide_dust",
            "10x gtceu:antimony_trioxide_dust",
            "10x gtceu:boron_trioxide_dust",
            "8x gtceu:zincite_dust",
            "8x gtceu:magnesia_dust",
            "8x gtceu:cobalt_oxide_dust",
            "8x gtceu:massicot_dust",
            "8x gtceu:cupric_oxide_dust",
            "6x gtceu:potash_dust",
            "6x gtceu:silver_oxide_dust",
            "6x gtceu:sodium_oxide_dust",
            "4x gtceu:rare_earth_oxide_dust")
        .outputFluids("gtceu:radox 10800")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(8000)

    gtr.distillation_tower("gtceu:radox_gas")
        .inputFluids("gtceu:crackedradox 1000")
        .outputFluids("gtceu:radox_gas 100", "gtceu:lightradox 200")
        .EUt(GTValues.VA[GTValues.UV])
        .itemOutputs("gtceu:ash_dust")
        .duration(600)

    gtr.distillation_tower("gtceu:dilutedxenoxene")
        .inputFluids("gtceu:dilutedxenoxene 1000")
        .outputFluids("gtceu:xenoxene 250", "gtceu:lightradox 300")
        .itemOutputs("gtceu:ash_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.cracker("gtceu:crackedradox")
        .inputFluids("gtceu:superlightradox 100", "gtceu:silver 10")
        .outputFluids("gtceu:crackedradox 100")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    gtr.cracker("gtceu:superlightradox")
        .inputFluids("gtceu:lightradox 100", "gtceu:silver 10")
        .outputFluids("gtceu:superlightradox 50")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    gtr.cracker("gtceu:lightradox")
        .inputFluids("gtceu:heavyradox 100", "gtceu:silver 10")
        .outputFluids("gtceu:lightradox 20")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.distillation_tower("gtceu:rawradox")
        .inputFluids("gtceu:rawradox 5000")
        .outputFluids("gtceu:oil_heavy 600", "gtceu:oil 300", "gtceu:creosote 1000", "minecraft:water 1400", "gtceu:bacteria 50", "gtceu:fermented_biomass 50", "gtceu:superheavyradox 100", "gtceu:heavyradox 100", "gtceu:dilutedxenoxene 100", "gtceu:lightradox 100", "gtceu:superlightradox 100")
        .itemOutputs("5x gtceu:ash_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)

    gtr.mixer("gtceu:xenoxene_mixture")
        .itemInputs("gtceu:tiny_radox_dust", "gtceu:antimony_dust", "gtceu:osmium_dust", "gtceu:ender_eye_dust")
        .inputFluids("gtceu:xenoxene 1000", "gtceu:xenon 9000")
        .outputFluids("gtceu:xenoxene_mixture 10000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.fluid_solidifier("gtceu:xenoxene_crystal_dust")
        .inputFluids("gtceu:xenoxene_mixture 1000")
        .itemInputs("3x gtceu:perlite_dust")
        .itemOutputs("3x gtceu:xenoxene_crystal_dust")
        .EUt(1920)
        .duration(200)

    gtr.electrolyzer("gtceu:purified_xenoxene")
        .itemInputs("4x gtceu:xenoxene_crystal_dust")
        .inputFluids("gtceu:oil 1000")
        .outputFluids("gtceu:purified_xenoxene 1000", "minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(900)

    gtr.mixer("gtceu:enriched_xenoxene")
        .itemInputs("gtceu:taranium_dust")
        .inputFluids("gtceu:purified_xenoxene 10000", "gtceu:radox_gas 100")
        .outputFluids("gtceu:enriched_xenoxene 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)

    gtr.mixer("gtceu:perlite_dust")
        .itemInputs("2x gtceu:obsidian_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:perlite_dust")
        .EUt(480)
        .duration(300)

    gtr.pyrolyse_oven("gtceu:rawradox")
        .inputFluids("gtceu:xenoxene 1000")
        .itemInputs("16x kubejs:variation_wood")
        .outputFluids("gtceu:rawradox 1000")
        .itemOutputs("gtceu:ash_dust")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(900)

    gtr.pyrolyse_oven("gtceu:rawradox1")
        .inputFluids("gtceu:enriched_xenoxene 1000")
        .itemInputs("16x kubejs:variation_wood")
        .outputFluids("gtceu:rawradox 10000")
        .itemOutputs("gtceu:ash_dust")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)

    gtr.incubator("gtceu:xenoxene")
        .itemInputs("16x gtceu:antimony_trioxide_dust", "16x gtceu:osmium_dust")
        .inputFluids("gtceu:oil 20000")
        .outputFluids("gtceu:xenoxene 20000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)

    gtr.centrifuge("gtceu:superheavyradox")
        .inputFluids("gtceu:superheavyradox 1000")
        .outputFluids("gtceu:heavyradox 2000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    //draconium
    gtr.electric_blast_furnace("gtceu:hot_draconium_ingot_1")
        .itemInputs("gtceu:draconium_dust")
        .inputFluids("gtceu:cetane_boosted_diesel 2000")
        .itemOutputs("gtceu:hot_draconium_ingot")
        .EUt(GTValues.VA[GTValues.UXV])
        .blastFurnaceTemp(21600)
        .duration(800)

    gtr.electric_blast_furnace("gtceu:hot_draconium_ingot_2")
        .itemInputs("gtceu:draconium_dust")
        .inputFluids("gtceu:gasoline 1000")
        .itemOutputs("gtceu:hot_draconium_ingot")
        .EUt(GTValues.VA[GTValues.UXV])
        .blastFurnaceTemp(21600)
        .duration(400)

    gtr.electric_blast_furnace("gtceu:hot_draconium_ingot_3")
        .itemInputs("gtceu:draconium_dust")
        .inputFluids("gtceu:high_octane_gasoline 500")
        .itemOutputs("gtceu:hot_draconium_ingot")
        .EUt(GTValues.VA[GTValues.UXV])
        .blastFurnaceTemp(21600)
        .duration(200)

    gtr.vacuum_freezer("gtceu:draconium_ingot")
        .itemInputs("gtceu:hot_draconium_ingot")
        .inputFluids("gtceu:liquid_helium 1000")
        .itemOutputs("gtceu:draconium_ingot")
        .outputFluids("gtceu:helium 500")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UXV])

    gtr.sps_crafting("minecraft:dragon_breath")
        .itemInputs("minecraft:glass_bottle", "minecraft:dragon_egg")
        .inputFluids("gtceu:mana 1000", "gtceu:dragon_blood 10")
        .itemOutputs("minecraft:dragon_breath")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)

    gtr.canner("kubejs:infused_breath")
        .inputFluids("gtceu:xpjuice 1000")
        .itemInputs("minecraft:dragon_breath")
        .itemOutputs("kubejs:infused_breath")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.extractor("gtceu:dragon_breath")
        .itemInputs("kubejs:infused_breath")
        .outputFluids("gtceu:dragon_breath 1000")
        .itemOutputs("minecraft:glass_bottle")
        .EUt(30)
        .duration(200)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.distillery("gtceu:enriched_dragon_breath")
        .inputFluids("gtceu:dragon_breath 10")
        .outputFluids("gtceu:enriched_dragon_breath 5")
        .EUt(120)
        .duration(100)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.sps_crafting("kubejs:dragon_stem_cells")
        .itemInputs("gtceu:stem_cells")
        .inputFluids("gtceu:mana 1000", "gtceu:mutagen 100", "gtceu:enriched_dragon_breath 100")
        .itemOutputs("kubejs:dragon_stem_cells")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.incubator("kubejs:dragon_cells")
        .itemInputs("64x kubejs:dragon_stem_cells", "16x gtceu:naquadria_dust")
        .inputFluids("gtceu:biohmediumsterilized 10000", "gtceu:mutagen 10000")
        .itemOutputs("64x kubejs:dragon_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)

    gtr.brewery("gtceu:dragon_blood")
        .itemInputs("kubejs:dragon_cells")
        .inputFluids("gtceu:sterilized_growth_medium 1000")
        .outputFluids("gtceu:dragon_blood 1000")
        .EUt(480)
        .duration(6000)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.centrifuge("gtceu:dragon_element")
        .inputFluids("gtceu:turbid_dragon_blood 1000")
        .outputFluids("gtceu:dragon_element 500")
        .itemOutputs("gtceu:collagen_dust")
        .EUt(7680)
        .duration(200)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.mixer("gtceu:turbid_dragon_blood")
        .inputFluids("gtceu:dragon_blood 1000", "gtceu:gelatin_mixture 1000")
        .itemInputs("gtceu:silica_gel_dust")
        .outputFluids("gtceu:turbid_dragon_blood 1000")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.autoclave("gtceu:draconium_dust")
        .notConsumable("64x gtceu:enderium_nanoswarm")
        .itemInputs("kubejs:draconium_dust")
        .inputFluids("gtceu:dragon_element 1000")
        .itemOutputs("gtceu:draconium_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    //fullerene
    gtr.large_chemical_reactor("gtceu:methylbenzophenanthrene_dust")
        .notConsumable("gtceu:iodine_dust")
        .inputFluids("gtceu:naphthalene 1000", "gtceu:formaldehyde 1000", "gtceu:oxygen 1000", "gtceu:ethylbenzene 1000")
        .itemOutputs("33x gtceu:methylbenzophenanthrene_dust")
        .EUt(1920)
        .duration(600)

    gtr.large_chemical_reactor("gtceu:unfolded_fullerene_dust")
        .notConsumable("gtceu:titanium_dust")
        .notConsumable("gtceu:aluminium_dust")
        .notConsumableFluid("gtceu:chlorine 1000")
        .itemInputs("102x gtceu:benzophenanthrenylacetonitrile_dust")
        .itemOutputs("gtceu:unfolded_fullerene_dust")
        .EUt(7680)
        .duration(250)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:benzophenanthrenylacetonitrile_dust")
        .itemInputs("33x gtceu:methylbenzophenanthrene_dust", "12x gtceu:bromo_succinimide_dust", "3x gtceu:potassium_cyanide_dust")
        .itemOutputs("34x gtceu:benzophenanthrenylacetonitrile_dust", "12x gtceu:succinimide_dust", "2x gtceu:potassium_bromide_dust")
        .EUt(1920)
        .duration(100)

    gtr.chemical_reactor("gtceu:bromo_succinimide_dust")
        .itemInputs("12x gtceu:succinimide_dust")
        .inputFluids("gtceu:bromine 2000")
        .outputFluids("gtceu:hydrobromic_acid 1000")
        .itemOutputs("12x gtceu:bromo_succinimide_dust")

    gtr.chemical_reactor("gtceu:succinimide_dust")
        .inputFluids("gtceu:ammonia 1000")
        .itemInputs("14x gtceu:succinic_acid_dust")
        .outputFluids("minecraft:water 1000")
        .itemOutputs("12x gtceu:succinimide_dust")

    gtr.electric_blast_furnace("gtceu:fullerene_dust")
        .itemInputs("gtceu:unfolded_fullerene_dust")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("gtceu:fullerene_dust")
        .outputFluids("gtceu:ammonia 10000")
        .EUt(2000000)
        .duration(400)
        .blastFurnaceTemp(5000)

    gtr.large_chemical_reactor("gtceu:phenylpentanoic_acid")
        .inputFluids("gtceu:styrene 1000", "gtceu:propene 1000", "gtceu:oxygen 2000")
        .outputFluids("gtceu:phenylpentanoic_acid 1000")
        .EUt(8000000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    //oganesson
    gtr.chemical_reactor("gtceu:titanium_tetrachloride_1")
        .inputFluids("gtceu:hydrochloric_acid 4000")
        .itemInputs("gtceu:titanium_dust")
        .outputFluids("gtceu:hydrogen 4000", "gtceu:titanium_tetrachloride 1000")
        .EUt(480)
        .duration(400)

    gtr.chemical_reactor("gtceu:titanium_tetrafluoride")
        .inputFluids("gtceu:titanium_tetrachloride 1000", "gtceu:fluorine 4000")
        .outputFluids("gtceu:chlorine 4000", "gtceu:titanium_tetrafluoride 1000")
        .EUt(1920)
        .duration(800)

    gtr.centrifuge("gtceu:titanium_50_tetrafluoride")
        .inputFluids("gtceu:titanium_tetrafluoride 1000")
        .outputFluids("gtceu:titanium_50_tetrafluoride 10", "gtceu:titanium_tetrafluoride 990")
        .EUt(480)
        .duration(200)

    gtr.chemical_reactor("gtceu:titanium_50_tetrachloride")
        .inputFluids("gtceu:titanium_50_tetrafluoride 1000", "gtceu:hydrochloric_acid 4000")
        .outputFluids("gtceu:hydrofluoric_acid 4000", "gtceu:titanium_50_tetrachloride 1000")
        .EUt(480)
        .duration(400)

    gtr.electric_blast_furnace("gtceu:hot_titanium_50_ingot_1")
        .itemInputs("2x gtceu:magnesium_dust")
        .inputFluids("gtceu:titanium_50_tetrachloride 1000")
        .itemOutputs("gtceu:hot_titanium_50_ingot", "6x gtceu:magnesium_chloride_dust")
        .EUt(480)
        .duration(800)
        .blastFurnaceTemp(2142)

    gtr.mixer("gtceu:oganesson_breeding_base")
        .inputFluids("gtceu:titanium_50 1440", "gtceu:californium 576")
        .outputFluids("gtceu:oganesson_breeding_base 2016")
        .EUt(7680)
        .duration(480)

    gtr.stellar_forge("gtceu:hot_oganesson")
        .inputFluids("gtceu:oganesson_breeding_base 2016", "gtceu:dysprosium 2304")
        .itemInputs("kubejs:leptonic_charge")
        .outputFluids("gtceu:hot_oganesson 16000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    //hassium
    gtr.mixer("gtceu:scandium_titanium_50_mixture")
        .inputFluids("gtceu:titanium_50 144", "gtceu:scandium 144")
        .outputFluids("gtceu:scandium_titanium_50_mixture 288")
        .EUt(7680)
        .duration(120)

    gtr.stellar_forge("gtceu:hassium")
        .inputFluids("gtceu:scandium_titanium_50_mixture 2304", "gtceu:radon 20000")
        .itemInputs("kubejs:leptonic_charge")
        .outputFluids("gtceu:metastable_hassium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    //kevlar
    gtr.chemical_bath("gtceu:kevlar_plate")
        .itemInputs("kubejs:woven_kevlar")
        .inputFluids("gtceu:polyurethaneresin 1000")
        .itemOutputs("gtceu:kevlar_plate")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:woven_kevlar")
        .itemInputs("8x kubejs:kevlar_fiber")
        .itemOutputs("kubejs:woven_kevlar")
        .circuit(8)
        .EUt(120)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.fluid_solidifier("kubejs:kevlar_fiber")
        .notConsumable("gtceu:nugget_casting_mold")
        .inputFluids("gtceu:liquidcrystalkevlar 72")
        .itemOutputs("kubejs:kevlar_fiber")
        .EUt(30)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:polyurethaneresin")
        .itemInputs("gtceu:pentaerythritol_dust", "5x gtceu:diphenylmethane_diisocyanate_dust")
        .inputFluids("gtceu:ethyleneglycol 4000", "gtceu:siliconoil 1000")
        .outputFluids("gtceu:polyurethaneresin 1000")
        .EUt(7680)
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distillation_tower("gtceu:diphenylmethane_diisocyanate_dust")
        .inputFluids("gtceu:diphenylmethanediisocyanatemixture 1000")
        .itemOutputs("29x gtceu:diphenylmethane_diisocyanate_dust")
        .outputFluids("gtceu:hydrochloric_acid 5000")
        .EUt(1920)
        .duration(700)

    gtr.large_chemical_reactor("gtceu:diphenylmethanediisocyanatemixture")
        .inputFluids("gtceu:diaminodiphenylmethanmixture 1000", "gtceu:phosgene 2000")
        .outputFluids("gtceu:diphenylmethanediisocyanatemixture 1000")
        .EUt(7680)
        .duration(600)

    gtr.chemical_reactor("gtceu:phosgene")
        .inputFluids("gtceu:carbon_monoxide 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:phosgene 1000")
        .EUt(1920)
        .duration(400)

    gtr.large_chemical_reactor("gtceu:diaminodiphenylmethanmixture")
        .inputFluids("gtceu:formaldehyde 1000", "gtceu:aniline 2000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:diaminodiphenylmethanmixture 1000")
        .EUt(122880)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:siliconoil")
        .inputFluids("gtceu:ethylene_oxide 1000", "gtceu:dimethyldichlorosilane 4000", "gtceu:distilled_water 5000")
        .outputFluids("gtceu:siliconoil 5000")
        .EUt(480)
        .duration(1000)

    gtr.chemical_reactor("gtceu:ethyleneglycol")
        .circuit(1)
        .inputFluids("gtceu:ethylene_oxide 1000", "minecraft:water 1000")
        .outputFluids("gtceu:ethyleneglycol 1000")
        .EUt(480)
        .duration(300)

    gtr.large_chemical_reactor("gtceu:pentaerythritol_dust")
        .notConsumable("gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:formaldehyde 4000", "gtceu:acetaldehyde 1000")
        .itemOutputs("21x gtceu:pentaerythritol_dust")
        .outputFluids("gtceu:carbon_monoxide 1000")
        .EUt(1920)
        .duration(1200)

    //fullerene polymer matrix pulp
    gtr.large_chemical_reactor("gtceu:sarcosine_dust")
        .inputFluids("gtceu:acetic_acid 1000", "gtceu:chlorine 2000", "gtceu:methanol 1000", "gtceu:ammonia 1000")
        .outputFluids("gtceu:diluted_hydrochloric_acid 3000")
        .itemOutputs("13x gtceu:sarcosine_dust")
        .EUt(7680)
        .duration(200)

    gtr.chemical_reactor("gtceu:ferrocene")
        .inputFluids("gtceu:iron_ii_chloride 1000", "gtceu:cyclopentadiene 2000")
        .outputFluids("gtceu:diluted_hydrochloric_acid 2000", "gtceu:ferrocene 1000")
        .EUt(30720)
        .duration(200)

    gtr.large_chemical_reactor("gtceu:palladium_fullerene_matrix_dust")
        .itemInputs("13x gtceu:sarcosine_dust", "gtceu:fullerene_dust", "gtceu:palladium_dust")
        .inputFluids("gtceu:ferrocene 1000")
        .itemOutputs("gtceu:palladium_fullerene_matrix_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtceu:fullerene_polymer_matrix_pulp_dust")
        .itemInputs("gtceu:palladium_fullerene_matrix_dust")
        .inputFluids("gtceu:pcbs 1000")
        .itemOutputs("2x gtceu:fullerene_polymer_matrix_pulp_dust")
        .EUt(8000000)
        .duration(40)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:pcbs")
        .itemInputs("8x gtceu:fullerene_dust")
        .notConsumable("gtceu:dmap_dust")
        .inputFluids("gtceu:phenylpentanoic_acid 8000", "gtceu:dichloromethane 8000", "gtceu:styrene 7000", "gtceu:chlorobenzene 8000", "gtceu:dimethyl_sulfide 8000")
        .outputFluids("gtceu:toluene 8000", "gtceu:hydrogen_sulfide 8000", "gtceu:hydrochloric_acid 24000", "gtceu:pcbs 8000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:dmap_dust")
        .inputFluids("gtceu:pyridine 1000", "gtceu:dimethylamine 1000")
        .itemOutputs("gtceu:dmap_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .EUt(7680)
        .duration(200)

    gtr.chemical_reactor("gtceu:dichloromethane")
        .inputFluids("gtceu:chloromethane 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:dichloromethane 1000", "gtceu:hydrochloric_acid 1000")
        .EUt(30)
        .duration(80)

    gtr.chemical_reactor("gtceu:dimethyl_sulfide")
        .inputFluids("gtceu:methanol 2000", "gtceu:hydrogen_sulfide 1000")
        .outputFluids("gtceu:dimethyl_sulfide 1000", "minecraft:water 2000")
        .EUt(1920)
        .duration(100)

    //starmetal
    gtr.sps_crafting("gtceu:liquid_starlight")
        .inputFluids("gtceu:mana 10000", "gtceu:starlight 10000")
        .itemInputs("64x minecraft:blue_ice", "64x minecraft:blue_ice")
        .outputFluids("gtceu:liquid_starlight 10000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(9600)

    gtr.chemical_bath("kubejs:resonating_gem")
        .itemInputs("gtceu:exquisite_sapphire_gem")
        .inputFluids("gtceu:liquid_starlight 1000")
        .itemOutputs("kubejs:resonating_gem")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    //chaos
    gtr.large_chemical_reactor("gtceu:neutronium_doped_nanotubes")
        .itemInputs("gtceu:neutronium_dust")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 800", "gtceu:cycloparaphenylene 200")
        .outputFluids("gtceu:neutronium_doped_nanotubes 1000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:highly_dense_polymer_plate")
        .itemInputs("gtceu:carbon_nanotubes_plate", "gtceu:double_cosmicneutronium_plate", "gtceu:fullerene_polymer_matrix_pulp_plate")
        .inputFluids("gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("kubejs:highly_dense_polymer_plate")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.stellar_forge("gtceu:cosmic_mesh_plasma")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "kubejs:highly_dense_polymer_plate")
        .outputFluids("gtceu:cosmic_mesh_plasma 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:chaos_plasma")
        .itemInputs("kubejs:chaos_shard")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:cosmic_mesh_plasma 1000")
        .outputFluids("gtceu:chaos_plasma 1000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(32000)

    gtr.canner("kubejs:cosmic_mesh_containment_unit")
        .notConsumable("gtceu:uruium_nanoswarm")
        .itemInputs("kubejs:time_dilation_containment_unit")
        .inputFluids("gtceu:cosmic_mesh_plasma 1000")
        .itemOutputs("kubejs:cosmic_mesh_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)

    gtr.plasma_condenser("gtceu:cosmic_mesh")
        .itemInputs("kubejs:cosmic_mesh_containment_unit")
        .inputFluids("gtceu:liquid_helium 100000")
        .itemOutputs("kubejs:time_dilation_containment_unit")
        .outputFluids("gtceu:liquid_cosmic_mesh 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.sps_crafting("kubejs:cosmic_fabric")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:mana 1000", "gtceu:enriched_xenoxene 1000", "gtceu:liquid_cosmic_mesh 100")
        .itemInputs("gtceu:rubber_foil", "kubejs:amorphous_matter")
        .itemOutputs("kubejs:cosmic_fabric")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    //hyper fuel
    gtr.chemical_reactor("gtceu:ammonium_nitrate_solution")
        .inputFluids("gtceu:ammonia 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:ammonium_nitrate_solution 1000")
        .EUt(120)
        .duration(60)

    gtr.mixer("gtceu:naquadah_solution")
        .itemInputs("2x gtceu:naquadah_dust")
        .inputFluids("gtceu:ammonium_nitrate_solution 1000")
        .outputFluids("gtceu:naquadah_solution 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)

    gtr.cracker("gtceu:fluorine_cracked_aquadah")
        .inputFluids("gtceu:naquadah_solution 1000", "gtceu:fluorine 1000")
        .outputFluids("gtceu:fluorine_cracked_aquadah 1000")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120)

    gtr.cracker("gtceu:radon_cracked_enriched_aquadah")
        .inputFluids("gtceu:enriched_naquadah_solution 1000", "gtceu:radon 1000")
        .outputFluids("gtceu:radon_cracked_enriched_aquadah 1000")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(160)

    gtr.distillation_tower("gtceu:naquadah_fuel")
        .inputFluids("gtceu:fluorine_cracked_aquadah 1000")
        .outputFluids("gtceu:naquadah_fuel 800", "gtceu:nitric_acid 200", "gtceu:enriched_naquadah_waste 100", "gtceu:ammonia 200", "gtceu:fluorine 200")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    gtr.distillation_tower("gtceu:enriched_naquadah_fuel")
        .inputFluids("gtceu:radon_cracked_enriched_aquadah 1000")
        .outputFluids("gtceu:enriched_naquadah_fuel 800", "gtceu:naquadria_waste 100", "gtceu:radon 200", "gtceu:fluorine 200")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.large_chemical_reactor("gtceu:hyper_fuel_1")
        .inputFluids("gtceu:naquadria_solution 1000", "gtceu:naquadah_fuel 1000", "gtceu:enriched_naquadah_fuel 1000", "gtceu:thorium 2304")
        .outputFluids("gtceu:hyper_fuel_1 3000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.mixer("gtceu:hyper_fuel_2")
        .inputFluids("gtceu:hyper_fuel_1 1000", "gtceu:uranium_235 1152")
        .itemInputs("gtceu:dubnium_dust", "gtceu:fermium_dust")
        .outputFluids("gtceu:hyper_fuel_2 2000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.mixer("gtceu:hyper_fuel_3")
        .inputFluids("gtceu:hyper_fuel_2 1000", "gtceu:plutonium_241 1152")
        .itemInputs("gtceu:adamantine_dust", "gtceu:mendelevium_dust")
        .outputFluids("gtceu:hyper_fuel_3 2000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.mixer("gtceu:hyper_fuel_4")
        .inputFluids("gtceu:hyper_fuel_3 1000", "gtceu:californium 1152")
        .itemInputs("gtceu:neutronium_dust", "gtceu:taranium_dust")
        .outputFluids("gtceu:hyper_fuel_4 2000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.dimensionally_transcendent_plasma_forge("avaritia:infinity_catalyst")
        .itemInputs("64x kubejs:contained_exotic_matter", "64x kubejs:essentia_matter")
        .inputFluids("gtceu:infinity 1000", "gtceu:high_energy_quark_gluon_plasma 100000")
        .itemOutputs("avaritia:infinity_catalyst", "64x kubejs:time_dilation_containment_unit")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4800)
        .blastFurnaceTemp(32000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:transcendentmetal")
        .notConsumable("kubejs:spacetime_catalyst")
        .itemInputs("kubejs:hypercube")
        .inputFluids("gtceu:spacetime 100", "gtceu:tennessine 144")
        .outputFluids("gtceu:transcendentmetal 144", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(3200)
        .blastFurnaceTemp(36000)

    gtr.autoclave("kubejs:spacetime_catalyst")
        .itemInputs("avaritia:infinity_catalyst")
        .inputFluids("gtceu:spacetime 1000")
        .itemOutputs("kubejs:spacetime_catalyst")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.chemical_bath("kubejs:eternity_catalyst")
        .itemInputs("kubejs:spacetime_catalyst")
        .inputFluids("gtceu:eternity 1000")
        .itemOutputs("kubejs:eternity_catalyst")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.chemical_reactor("gtceu:aniline")
        .notConsumable("#forge:dusts/zinc")
        .inputFluids("gtceu:nitrobenzene 1000", "gtceu:hydrogen 3000")
        .outputFluids("gtceu:aniline 1000", "minecraft:water 2000")
        .EUt(1920)
        .duration(160)

    gtr.chemical_reactor("gtceu:durene_dust")
        .inputFluids("gtceu:chloromethane 2000", "gtceu:dimethylbenzene 1000")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("24x gtceu:durene_dust")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtceu:pyromellitic_dianhydride_dust")
        .itemInputs("24x gtceu:durene_dust")
        .inputFluids("gtceu:oxygen 12000")
        .outputFluids("minecraft:water 6000")
        .itemOutputs("18x gtceu:pyromellitic_dianhydride_dust")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtceu:oxydianiline")
        .inputFluids("gtceu:aniline 2000", "gtceu:phenol 1000")
        .notConsumable("#forge:dusts/tin")
        .outputFluids("gtceu:oxydianiline 1000", "gtceu:methane 2000")
        .EUt(120)
        .duration(150)

    gtr.large_chemical_reactor("gtceu:polyimide")
        .itemInputs("18x gtceu:pyromellitic_dianhydride_dust")
        .inputFluids("gtceu:oxydianiline 1000")
        .outputFluids("gtceu:polyimide 1008")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    //optical
    gtr.forming_press("kubejs:optical_soc_containment_housing")
        .itemInputs("gtceu:multilayer_fiber_reinforced_printed_circuit_board", "gtceu:iridium_foil", "gtceu:yttrium_barium_cuprate_foil", "gtceu:nickel_zinc_ferrite_foil", "gtceu:uranium_rhodium_dinaquadide_foil", "4x gtceu:darmstadtium_bolt")
        .itemOutputs("kubejs:optical_soc_containment_housing")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:optical_soc")
        .itemInputs("kubejs:optical_soc_containment_housing", "kubejs:optical_slice", "8x gtceu:gold_bolt", "8x gtceu:fine_zinc_wire")
        .inputFluids("gtceu:lumiium 144", "gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:helium 100")
        .itemOutputs("kubejs:optical_soc")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("kubejs:bose_einstein_cooling_container")
        .notConsumable("gtceu:iridium_nanoswarm")
        .inputFluids("gtceu:rubidium 288")
        .itemInputs("kubejs:empty_laser_cooling_container")
        .itemOutputs("kubejs:bose_einstein_cooling_container")
        .EUt(90000)
        .duration(280)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtceu:cubic_zirconia_dust")
        .itemInputs("gtceu:zirconium_dust")
        .itemOutputs("3x gtceu:cubic_zirconia_dust")
        .inputFluids("gtceu:oxygen 2000")
        .EUt(480)
        .duration(360)
        .blastFurnaceTemp(2600)

    gtr.assembler("kubejs:low_frequency_laser")
        .itemInputs("gtceu:red_garnet_rod", "kubejs:red_halide_lamp", "kubejs:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "kubejs:smd_diode_optical")
        .itemOutputs("kubejs:low_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:medium_frequency_laser")
        .itemInputs("gtceu:lazurite_rod", "kubejs:green_halide_lamp", "kubejs:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "kubejs:smd_diode_optical")
        .itemOutputs("kubejs:medium_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:high_frequency_laser")
        .itemInputs("gtceu:amethyst_rod", "kubejs:blue_halide_lamp", "kubejs:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "kubejs:smd_diode_optical")
        .itemOutputs("kubejs:high_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:ballast")
        .itemInputs("2x gtceu:fine_annealed_copper_wire", "gtceu:resistor", "gtceu:inductor", "gtceu:double_annealed_copper_plate")
        .itemOutputs("kubejs:ballast")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1920)
        .duration(290)

    gtr.assembler("kubejs:laser_diode")
        .itemInputs("2x gtceu:fine_gold_wire", "kubejs:smd_diode_bioware", "gtceu:purple_glass_lens", "gtceu:double_nichrome_plate")
        .itemOutputs("kubejs:laser_diode")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(980000)
        .duration(260)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:laser_cooling_unit")
        .itemInputs("4x gtceu:fine_gold_wire", "gtceu:frostproof_machine_casing", "kubejs:laser_diode", "#gtceu:circuits/hv")
        .itemOutputs("kubejs:laser_cooling_unit")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(1200000)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:empty_laser_cooling_container")
        .itemInputs("8x gtceu:steel_plate", "kubejs:laser_cooling_unit", "kubejs:magnetic_trap", "2x gtceu:double_magnalium_plate")
        .itemOutputs("kubejs:empty_laser_cooling_container")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1150000)
        .duration(380)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:magnetic_trap")
        .itemInputs("2x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire", "gtceu:frostproof_machine_casing", "gtceu:double_kanthal_plate")
        .itemOutputs("kubejs:magnetic_trap")
        .inputFluids("gtceu:soldering_alloy 432")
        .EUt(1000000)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:red_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:potassium_bromide_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "kubejs:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("kubejs:red_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("kubejs:green_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:iridium_chloride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "kubejs:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("kubejs:green_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("kubejs:blue_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:titanium_trifluoride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "kubejs:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("kubejs:blue_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.electric_blast_furnace("gtceu:strontium_europium_aluminate_dust")
        .itemInputs("2x gtceu:aluminium_dust", "gtceu:europium_dust", "gtceu:strontium_dust")
        .inputFluids("gtceu:oxygen 4000")
        .itemOutputs("8x gtceu:strontium_europium_aluminate_dust")
        .EUt(120)
        .duration(340)
        .blastFurnaceTemp(1200)

    gtr.chemical_reactor("kubejs:highly_reflective_mirror")
        .itemInputs("gtceu:germanium_plate")
        .inputFluids("gtceu:hydrogen_sulfide 1000", "gtceu:zinc 144")
        .itemOutputs("kubejs:highly_reflective_mirror")
        .EUt(710000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:lithium_niobate_nanoparticles_dust")
        .notConsumable("gtceu:hafnium_dust")
        .itemInputs("2x gtceu:lithium_dust", "gtceu:niobium_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("6x gtceu:lithium_niobate_nanoparticles_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("kubejs:periodically_poled_lithium_niobate_boule")
        .notConsumable("kubejs:electron_source")
        .itemInputs("2x gtceu:lithium_niobate_nanoparticles_dust")
        .inputFluids("gtceu:xenon 1000")
        .itemOutputs("kubejs:periodically_poled_lithium_niobate_boule")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:electron_source")
        .itemInputs("gtceu:radium_dust", "6x gtceu:polyetheretherketone_plate", "4x gtceu:polybenzimidazole_plate", "4x gtceu:steel_plate")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("kubejs:electron_source")
        .EUt(750000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:rotating_transparent_surface")
        .itemInputs("4x gtceu:graphene_plate", "gtceu:uhv_electric_motor")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("kubejs:rotating_transparent_surface")
        .EUt(1250000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.lathe("kubejs:non_linear_optical_lens")
        .itemInputs("kubejs:periodically_poled_lithium_niobate_boule")
        .itemOutputs("kubejs:non_linear_optical_lens")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(360)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:sodium_seaborgate_dust")
        .itemInputs("gtceu:seaborgium_dust", "6x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:fluorine 6000", "minecraft:water 1000")
        .outputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("7x gtceu:sodium_seaborgate_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:optical_slice")
        .itemInputs("kubejs:optical_wafer")
        .itemOutputs("16x kubejs:optical_slice")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(560)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("kubejs:optical_wafer")
        .itemInputs("2x gtceu:francium_caesium_cadmium_bromide_dust", "kubejs:photon_carrying_wafer", "gtceu:glowstone_nanoswarm")
        .inputFluids("gtceu:seaborgium_doped_nanotubes 144", "gtceu:carbon_nanotubes 144")
        .itemOutputs("kubejs:optical_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("kubejs:photon_carrying_wafer")
        .itemInputs("kubejs:raw_photon_carrying_wafer")
        .inputFluids("gtceu:blaze 288")
        .itemOutputs("kubejs:photon_carrying_wafer")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtceu:francium_caesium_cadmium_bromide_dust")
        .itemInputs("2x gtceu:cadmium_dust", "gtceu:francium_dust", "gtceu:caesium_dust")
        .inputFluids("gtceu:bromine 6000")
        .itemOutputs("10x gtceu:francium_caesium_cadmium_bromide_dust")
        .EUt(120)
        .duration(250)
        .blastFurnaceTemp(2200)

    gtr.large_chemical_reactor("gtceu:seaborgium_doped_nanotubes")
        .itemInputs("gtceu:seaborgium_dust")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 800", "gtceu:cycloparaphenylene 200")
        .outputFluids("gtceu:seaborgium_doped_nanotubes 144")
        .EUt(320000)
        .duration(390)
        .cleanroom(CleanroomType.CLEANROOM)

    //exotic
    gtr.laser_engraver("kubejs:exotic_wafer")
        .notConsumable("gtceu:magenta_glass_lens")
        .itemInputs("gtceu:highly_advanced_soc_wafer")
        .itemOutputs("kubejs:exotic_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:exotic_chip")
        .itemInputs("kubejs:exotic_wafer")
        .itemOutputs("4x kubejs:exotic_chip")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:x_ray_laser")
        .itemInputs("kubejs:x_ray_waveguide", "kubejs:microfocus_x_ray_tube", "gtceu:exquisite_jasper_gem", "kubejs:x_ray_mirror_plate")
        .itemOutputs("kubejs:x_ray_laser")
        .inputFluids("gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:iridium 144", "gtceu:californium_cyclopentadienide 10")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:microfocus_x_ray_tube")
        .itemInputs("4x gtceu:fine_enderium_wire", "gtceu:echoite_rod", "gtceu:glass_tube", "gtceu:double_palladium_plate")
        .itemOutputs("kubejs:microfocus_x_ray_tube")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("kubejs:x_ray_mirror_plate")
        .itemInputs("gtceu:graphene_plate")
        .inputFluids("gtceu:iridium_trichloride_solution 100")
        .itemOutputs("kubejs:x_ray_mirror_plate")
        .EUt(2000000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtceu:iridium_trichloride_solution")
        .itemInputs("4x gtceu:iridium_chloride_dust")
        .inputFluids("gtceu:hypochlorous_acid 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:iridium_trichloride_solution 1000")
        .EUt(1920)
        .duration(360)

    gtr.chemical_bath("kubejs:x_ray_waveguide")
        .itemInputs("kubejs:fullerene_polymer_matrix_fine_tubing")
        .inputFluids("gtceu:iridium_trichloride_solution 100")
        .itemOutputs("kubejs:x_ray_waveguide")
        .EUt(8000000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:rydberg_spinorial_assembly")
        .itemInputs("kubejs:cryogenic_interface",
            "kubejs:rotating_transparent_surface",
            "kubejs:exotic_chip",
            "kubejs:x_ray_waveguide")
        .notConsumableFluid("gtceu:xenon 10")
        .inputFluids("gtceu:quantum_dots 10", "gtceu:zylon 144", "gtceu:liquid_hydrogen 10")
        .itemOutputs("kubejs:rydberg_spinorial_assembly")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(560)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:cryogenic_interface")
        .itemInputs("gtceu:double_graphene_plate", "8x gtceu:graphene_foil", "gtceu:fine_trinium_titanium_wire", "2x gtceu:zirconium_carbide_plate")
        .inputFluids("gtceu:zylon 72")
        .itemOutputs("kubejs:cryogenic_interface")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:quantum_dots")
        .itemInputs("gtceu:selenium_dust", "gtceu:cadmium_dust")
        .inputFluids("gtceu:stearic_acid 1000", "gtceu:tricotylphosphine 1000")
        .outputFluids("gtceu:quantum_dots 1000")
        .EUt(5000000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:stearic_acid")
        .inputFluids("gtceu:soap 1000")
        .itemInputs("gtceu:salt_dust")
        .outputFluids("gtceu:stearic_acid 800", "gtceu:glycerol 200")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtceu:soap_1")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:steam 2000", "gtceu:fish_oil 100")
        .outputFluids("gtceu:soap 1000")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtceu:soap_2")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:steam 2000", "gtceu:seed_oil 100")
        .outputFluids("gtceu:soap 1000")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtceu:tricotylphosphine")
        .inputFluids("gtceu:octane 3000")
        .itemInputs("gtceu:phosphorus_dust")
        .outputFluids("gtceu:tricotylphosphine 1000")
        .EUt(2000)
        .duration(160)

    //cosmic
    gtr.sps_crafting("kubejs:photocoated_hassium_boule")
        .itemInputs("gtceu:silicon_boule", "2x gtceu:hassium_ingot", "kubejs:hassium_seed_crystal")
        .inputFluids("gtceu:mana 10000", "gtceu:woods_glass 2304", "gtceu:photopolymer 2000")
        .itemOutputs("kubejs:photocoated_hassium_boule")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    gtr.cutter("kubejs:photocoated_hassium_wafer")
        .itemInputs("kubejs:photocoated_hassium_boule")
        .itemOutputs("4x kubejs:photocoated_hassium_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(280)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:lithography_mask")
        .itemInputs("64x gtceu:fine_borosilicate_glass_wire", "16x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:polyethylene 288", "gtceu:polytetrafluoroethylene 288", "gtceu:polycaprolactam 288", "gtceu:polyvinyl_butyral 288")
        .itemOutputs("kubejs:lithography_mask")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("kubejs:grating_lithography_mask")
        .itemInputs("kubejs:lithography_mask", "gtceu:glass_lens")
        .itemOutputs("kubejs:grating_lithography_mask")
        .EUt(1920)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("kubejs:diffractor_grating_mirror")
        .itemInputs("kubejs:photocoated_hassium_wafer")
        .notConsumable("kubejs:grating_lithography_mask")
        .itemOutputs("kubejs:diffractor_grating_mirror")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:cosmic_computing_mixture")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .inputFluids("gtceu:gluons 1000", "gtceu:heavy_quarks 1000", "gtceu:heavy_lepton_mixture 1000")
        .outputFluids("gtceu:cosmic_computing_mixture 3000")
        .EUt(24000000)
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:cosmic_processing_unit_core")
        .itemInputs("6x gtceu:fine_heavy_quark_degenerate_matter_wire", "4x kubejs:cosmic_soc", "3x gtceu:degenerate_rhenium_plate", "kubejs:empty_laser_cooling_container")
        .inputFluids("gtceu:cosmic_computing_mixture 1000", "gtceu:cosmic_superconductor 1000", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:quantum_dots 100")
        .itemOutputs("kubejs:cosmic_processing_unit_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3500)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.assembler("kubejs:ultrashort_pulse_laser")
        .itemInputs("4x kubejs:diffractor_grating_mirror", "8x gtceu:fine_borosilicate_glass_wire", "kubejs:high_frequency_laser", "2x kubejs:insulation_wire_assembly", "gtceu:yellow_garnet_rod", "gtceu:lapis_rod", "gtceu:exquisite_olivine_gem", "gtceu:ev_emitter", "gtceu:double_platinum_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("kubejs:ultrashort_pulse_laser")
        .EUt(45000000)
        .duration(270)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:insulation_wire_assembly")
        .itemInputs("gtceu:reinforced_epoxy_resin_rod", "kubejs:aerographene", "gtceu:silicone_rubber_foil", "kubejs:memory_foam_block", "gtceu:fullerene_polymer_matrix_pulp_foil")
        .inputFluids("gtceu:polyimide 144")
        .itemOutputs("kubejs:insulation_wire_assembly")
        .EUt(480)
        .duration(200)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.mixer("gtceu:heavy_quark_enriched_mixture")
        .inputFluids("gtceu:heavy_quarks 750", "gtceu:light_quarks 250")
        .outputFluids("gtceu:heavy_quark_enriched_mixture 1000")
        .EUt(32500000)
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:graviton_transducer")
        .itemInputs("2x kubejs:quantumchromodynamic_protective_plating", "kubejs:contained_reissner_nordstrom_singularity", "kubejs:microwormhole_generator", "kubejs:dark_matter", "gtceu:uiv_sensor")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("kubejs:graviton_transducer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:topological_manipulator_unit")
        .itemInputs("2x kubejs:quantumchromodynamic_protective_plating", "kubejs:contained_kerr_newmann_singularity", "kubejs:microwormhole_generator", "gtceu:uhv_field_generator")
        .inputFluids("gtceu:antineutron 10", "gtceu:neutronium 144", "gtceu:arceusalloy2b 144", "gtceu:nitrogen 10000")
        .itemOutputs("kubejs:topological_manipulator_unit")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler_module("kubejs:relativistic_spinorial_memory_system")
        .itemInputs("2x gtceu:neutron_reflector", "kubejs:rydberg_spinorial_assembly", "4x kubejs:charged_lepton_trap_crystal", "2x gtceu:legendarium_single_wire", "gtceu:uhv_field_generator", "gtceu:uiv_sensor", "gtceu:fusion_coil")
        .inputFluids("gtceu:uu_matter 10000", "gtceu:noble_gas 2000", "gtceu:cosmic_computing_mixture 1000", "gtceu:neutronium 1296")
        .itemOutputs("kubejs:relativistic_spinorial_memory_system")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .CWUt(128)

    gtr.assembler_module("kubejs:microwormhole_generator")
        .itemInputs("2x gtceu:zpm_emitter", "2x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire", "2x gtceu:neutronium_plate", "gtceu:zpm_field_generator", "kubejs:contained_kerr_singularity", "kubejs:void_matter", "gtceu:enderium_nanoswarm", "2x gtceu:celestialtungsten_plate")
        .inputFluids("gtceu:tritanium 576")
        .itemOutputs("kubejs:microwormhole_generator")
        .EUt(100000)
        .duration(200)
        .CWUt(128)

    gtr.assembler_module("kubejs:nuclear_clock")
        .itemInputs("2x gtceu:uiv_sensor", "2x kubejs:ultrashort_pulse_laser", "2x gtceu:neutronium_plate", "kubejs:scintillator", "kubejs:bose_einstein_cooling_container", "gtceu:iron_nanoswarm", "gtceu:uv_naquadria_battery", "2x gtceu:double_rhodium_plate")
        .inputFluids("gtceu:thorium 144", "gtceu:black_titanium 1296")
        .itemOutputs("kubejs:nuclear_clock")
        .EUt(33550000)
        .duration(1600)
        .CWUt(128)

    gtr.autoclave("kubejs:contained_kerr_singularity")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .itemInputs("kubejs:contained_kerr_newmann_singularity")
        .inputFluids("gtceu:free_electron_gas 1000")
        .itemOutputs("kubejs:contained_kerr_singularity")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler_module("kubejs:macrowormhole_generator")
        .itemInputs("4x gtceu:uv_emitter", "4x gtceu:uv_sensor", "2x gtceu:uv_field_generator", "kubejs:contained_high_density_protonic_matter", "kubejs:microwormhole_generator", "kubejs:contained_kerr_singularity", "gtceu:zpm_naquadria_battery", "kubejs:kinetic_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("kubejs:macrowormhole_generator")
        .EUt(1000000)
        .duration(400)
        .CWUt(256)

    gtr.assembler_module("kubejs:stabilized_wormhole_generator")
        .itemInputs("4x gtceu:uev_emitter", "4x gtceu:uev_sensor", "2x gtceu:uev_field_generator", "kubejs:contained_exotic_matter", "kubejs:macrowormhole_generator", "kubejs:contained_kerr_singularity", "gtceu:energy_cluster", "kubejs:omni_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("kubejs:stabilized_wormhole_generator")
        .EUt(10000000)
        .duration(800)
        .CWUt(256)

    gtr.stellar_forge("gtceu:moscovium")
        .itemInputs("kubejs:antimatter_charge")
        .inputFluids("gtceu:calcium 2304", "gtceu:curium 2304")
        .outputFluids("gtceu:moscovium 2304")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.stellar_forge("gtceu:livermorium")
        .itemInputs("kubejs:antimatter_charge")
        .inputFluids("gtceu:thorium 2304", "gtceu:iron 2304")
        .outputFluids("gtceu:livermorium 2304")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.stellar_forge("gtceu:tennessine")
        .itemInputs("kubejs:naquadria_charge")
        .inputFluids("gtceu:lead 4608", "gtceu:bromine 4608")
        .outputFluids("gtceu:tennessine 4608")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.precision_assembler("kubejs:ctc_guidance_unit")
        .itemInputs("64x kubejs:cosmic_ram_chip", "kubejs:supracausal_processing_core", "gtceu:data_module", "kubejs:nuclear_clock")
        .inputFluids("gtceu:arceusalloy2b 1296", "gtceu:super_mutated_living_solder 1296", "gtceu:trinium_titanium 1296", "gtceu:vibranium 1296")
        .itemOutputs("kubejs:ctc_guidance_unit")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler_module("kubejs:ctc_computational_unit_container")
        .itemInputs("36x gtceu:enriched_naquadah_plate", "36x gtceu:fullerene_polymer_matrix_pulp_plate", "6x gtceu:heavy_quark_degenerate_matter_plate", "3x gtceu:uhv_field_generator", "2x gtceu:taranium_plate", "kubejs:ctc_guidance_unit", "kubejs:manifold_oscillatory_power_cell", "4x gtceu:double_uranium_plate", "gtceu:dense_darmstadtium_plate", "gtceu:neutronium_frame", "kubejs:time_dilation_containment_unit", "kubejs:stabilized_wormhole_generator", "2x kubejs:dark_matter", "gtceu:starmetal_nanoswarm", "8x gtceu:double_black_dwarf_mtter_plate", "8x gtceu:double_trinium_plate")
        .inputFluids("gtceu:superheavy_l_alloy 1296", "gtceu:superheavy_h_alloy 1296", "gtceu:trinium_titanium 1296", "gtceu:adamantine 1296")
        .itemOutputs("kubejs:ctc_computational_unit_container")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .CWUt(512)

    gtr.world_data_scanner("kubejs:overworld_data")
        .itemInputs("gtceu:data_stick", "64x gtceu:stone_dust")
        .inputFluids("gtceu:pcb_coolant 100", "gtceu:air 64000")
        .itemOutputs("kubejs:overworld_data")
        .EUt(32)
        .duration(4000)
        .dimension("overworld")

    gtr.world_data_scanner("kubejs:nether_data")
        .itemInputs("2x gtceu:data_stick", "64x gtceu:netherrack_dust")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:nether_air 64000")
        .itemOutputs("2x kubejs:nether_data")
        .EUt(128)
        .duration(4000)
        .dimension("ad_astra:venus")

    gtr.world_data_scanner("kubejs:end_data")
        .itemInputs("4x gtceu:data_stick", "64x gtceu:endstone_dust")
        .inputFluids("gtceu:pcb_coolant 400", "gtceu:ender_air 64000")
        .itemOutputs("4x kubejs:end_data")
        .EUt(512)
        .duration(4000)
        .dimension("kubejs:pluto")

    const overworld_fluids = [
        ["gtceu:oil_medium 20000", "1"],
        ["gtceu:oil 20000", "2"],
        ["gtceu:oil_heavy 15000", "3"],
        ["gtceu:oil_light 25000", "4"],
        ["gtceu:natural_gas 15000", "5"],
        ["gtceu:salt_water 40000", "6"]
    ]

    overworld_fluids.forEach((overworld_fluid) => {
        gtr.void_fluid_drilling_rig("overworld_fluid_" + overworld_fluid[1])
            .notConsumable("kubejs:overworld_data")
            .outputFluids(overworld_fluid[0])
            .circuit(overworld_fluid[1])
            .EUt(GTValues.VA[GTValues.LuV])
            .duration(20)
    })

    const nether_fluids = [
        ["minecraft:lava 65000", "1"],
        ["gtceu:natural_gas 35000", "2"]
    ]

    nether_fluids.forEach((nether_fluid) => {
        gtr.void_fluid_drilling_rig("nether_fluid_" + nether_fluid[1])
            .notConsumable("2x kubejs:nether_data")
            .outputFluids(nether_fluid[0])
            .circuit(nether_fluid[1])
            .EUt(GTValues.VA[GTValues.LuV])
            .duration(20)
    })

    const overworld_raw_ores =
        [[["3x gtceu:raw_bentonite",
            "2x gtceu:raw_magnetite",
            "2x gtceu:raw_olivine",
            "1x gtceu:raw_glauconite_sand"], "1"],

        [["9x gtceu:raw_almandine",
            "6x gtceu:raw_pyrope",
            "3x gtceu:raw_sapphire",
            "3x gtceu:raw_green_sapphire"], "2"],

        [["3x gtceu:raw_goethite",
            "12x gtceu:raw_yellow_limonite",
            "12x gtceu:raw_hematite",
            "6x gtceu:raw_malachite"], "3"],

        [["6x gtceu:raw_soapstone",
            "4x gtceu:raw_talc",
            "4x gtceu:raw_glauconite_sand",
            "2x gtceu:raw_pentlandite"], "4"],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_spessartine",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], "5"],

        [["13x gtceu:raw_chalcopyrite",
            "1x gtceu:raw_zeolite",
            "1x gtceu:raw_cassiterite",
            "3x gtceu:raw_realgar"], "6"],

        [["12x gtceu:raw_coal"], "7"],

        [["2x gtceu:raw_chalcopyrite",
            "8x minecraft:raw_iron",
            "8x gtceu:raw_pyrite",
            "8x minecraft:raw_copper"], "8"],

        [["12x gtceu:raw_magnetite",
            "8x gtceu:raw_vanadium_magnetite",
            "4x minecraft:raw_gold"], "9"],

        [["6x gtceu:raw_lazurite",
            "4x gtceu:raw_sodalite",
            "4x gtceu:raw_lapis",
            "2x gtceu:raw_calcite"], "10"],

        [["6x gtceu:raw_galena",
            "4x gtceu:raw_silver",
            "2x gtceu:raw_lead"], "11"],

        [["3x gtceu:raw_kyanite",
            "2x gtceu:raw_mica",
            "1x gtceu:raw_pollucite"], "12"],

        [["16x gtceu:raw_tin",
            "8x gtceu:raw_cassiterite"], "13"],

        [["6x gtceu:raw_red_garnet",
            "4x gtceu:raw_yellow_garnet",
            "4x gtceu:raw_amethyst",
            "2x gtceu:raw_opal"], "14"],

        [["12x gtceu:raw_basaltic_mineral_sand",
            "8x gtceu:raw_granitic_mineral_sand",
            "8x gtceu:raw_fullers_earth",
            "4x gtceu:raw_gypsum"], "15"],

        [["8x gtceu:raw_rock_salt",
            "1x gtceu:raw_salt",
            "3x gtceu:raw_lepidolite",
            "3x gtceu:raw_spodumene"], "16"],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar"], "17"],

        [["6x gtceu:raw_apatite",
            "4x gtceu:raw_tricalcium_phosphate"], "18"],

        [["12x gtceu:raw_cassiterite_sand",
            "8x gtceu:raw_garnet_sand",
            "8x gtceu:raw_asbestos",
            "4x gtceu:raw_diatomite"], "19"],

        [["12x gtceu:raw_oilsands"], "20"],

        [["6x gtceu:raw_graphite",
            "4x gtceu:raw_diamond",
            "2x gtceu:raw_coal"], "21"],

        [["6x gtceu:raw_garnierite",
            "4x gtceu:raw_nickel",
            "4x gtceu:raw_cobaltite",
            "2x gtceu:raw_pentlandite"], "22"]]

    overworld_raw_ores.forEach((overworld_ore) => {
        let recipe = gtr.void_miner("overworld_void_ore_" + overworld_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000", "gtceu:sapphire_slurry 20")
            .notConsumable("kubejs:overworld_data")
            .circuit(overworld_ore[1])
            .EUt(GTValues.VA[GTValues.EV])
            .duration(20)
        let output = overworld_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })
    const nether_raw_ores =
        [[["14x gtceu:raw_tetrahedrite",
            "7x minecraft:raw_copper",
            "4x gtceu:raw_stibnite"], "1"],

        [["5x gtceu:raw_bastnasite",
            "2x gtceu:raw_molybdenum",
            "2x gtceu:raw_neodymium",
            "2x gtceu:raw_monazite"], "2"],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar"], "3"],

        [["6x gtceu:raw_saltpeter",
            "4x gtceu:raw_diatomite",
            "4x gtceu:raw_electrotine",
            "2x gtceu:raw_alunite"], "4"],

        [["5x gtceu:raw_beryllium",
            "6x gtceu:raw_emerald"], "5"],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], "6"],

        [["8x gtceu:raw_wulfenite",
            "5x gtceu:raw_molybdenite",
            "3x gtceu:raw_molybdenum",
            "3x gtceu:raw_powellite"], "7"],

        [["5x gtceu:raw_goethite",
            "3x gtceu:raw_yellow_limonite",
            "3x gtceu:raw_hematite",
            "2x minecraft:raw_gold"], "8"],

        [["6x gtceu:raw_quartzite",
            "4x gtceu:raw_certus_quartz",
            "2x gtceu:raw_barite"], "9"],

        [["11x gtceu:raw_blue_topaz",
            "7x gtceu:raw_topaz",
            "7x gtceu:raw_chalcocite",
            "4x gtceu:raw_bornite"], "10"],

        [["12x gtceu:raw_nether_quartz",
            "4x gtceu:raw_quartzite"], "11"],

        [["15x gtceu:raw_sulfur",
            "10x gtceu:raw_pyrite",
            "5x gtceu:raw_sphalerite"], "12"]]

    nether_raw_ores.forEach((nether_ore) => {
        let recipe = gtr.void_miner("nether_void_ore_" + nether_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000", "gtceu:green_sapphire_slurry 20")
            .notConsumable("2x kubejs:nether_data")
            .circuit(nether_ore[1])
            .EUt(2 * GTValues.VA[GTValues.EV])
            .duration(20)
        let output = nether_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })

    const end_raw_ores =
        [[["9x gtceu:raw_magnetite",
            "6x gtceu:raw_vanadium_magnetite",
            "6x gtceu:raw_chromite",
            "3x minecraft:raw_gold"], "1"],

        [["8x gtceu:raw_bauxite",
            "4x gtceu:raw_ilmenite",
            "4x gtceu:raw_aluminium"], "2"],

        [["3x gtceu:raw_bornite",
            "2x gtceu:raw_cooperite",
            "2x gtceu:raw_platinum",
            "1x gtceu:raw_palladium"], "3"],

        [["6x gtceu:raw_scheelite",
            "4x gtceu:raw_tungstate",
            "2x gtceu:raw_lithium"], "4"],

        [["9x gtceu:raw_pitchblende",
            "6x gtceu:raw_uraninite"], "5"],

        [["9x gtceu:raw_naquadah",
            "3x gtceu:raw_plutonium"], "6"]]

    end_raw_ores.forEach((end_ore) => {
        let recipe = gtr.void_miner("end_void_ore_" + end_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000", "gtceu:ruby_slurry 20")
            .notConsumable("4x kubejs:end_data")
            .circuit(end_ore[1])
            .EUt(GTValues.VA[GTValues.IV])
            .duration(20)
        let output = end_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })

    const overworld_vs =
        [[["6x #forge:ores/bentonite",
            "4x #forge:ores/magnetite",
            "4x #forge:ores/olivine",
            "2x #forge:ores/glauconite_sand"], "kubejs:olivine_vein_essence"],

        [["18x #forge:ores/almandine",
            "12x #forge:ores/pyrope",
            "6x #forge:ores/sapphire",
            "6x #forge:ores/green_sapphire"], "kubejs:sapphire_vein_essence"],

        [["6x #forge:ores/goethite",
            "24x #forge:ores/yellow_limonite",
            "24x #forge:ores/hematite",
            "12x #forge:ores/malachite"], "kubejs:iron_vein_essence"],

        [["12x #forge:ores/soapstone",
            "8x #forge:ores/talc",
            "8x #forge:ores/glauconite_sand",
            "4x #forge:ores/pentlandite"], "kubejs:lubricant_vein_essence"],

        [["6x #forge:ores/grossular",
            "4x #forge:ores/spessartine",
            "4x #forge:ores/pyrolusite",
            "2x #forge:ores/tantalite"], "kubejs:manganese_vein_ow_essence"],

        [["25x #forge:ores/chalcopyrite",
            "1x #forge:ores/zeolite",
            "1x #forge:ores/cassiterite",
            "5x #forge:ores/realgar"], "kubejs:copper_tin_vein_essence"],

        [["24x #forge:ores/coal"], "kubejs:coal_vein_essence"],

        [["4x #forge:ores/chalcopyrite",
            "16x #forge:ores/iron",
            "16x #forge:ores/pyrite",
            "16x #forge:ores/copper"], "kubejs:copper_vein_essence"],

        [["24x #forge:ores/magnetite",
            "16x #forge:ores/vanadium_magnetite",
            "8x #forge:ores/gold"], "kubejs:magnetite_vein_ow_essence"],

        [["12x #forge:ores/lazurite",
            "8x #forge:ores/sodalite",
            "8x #forge:ores/lapis",
            "4x #forge:ores/calcite"], "kubejs:lapis_vein_essence"],

        [["12x #forge:ores/galena",
            "8x #forge:ores/silver",
            "4x #forge:ores/lead"], "kubejs:galena_vein_essence"],

        [["6x #forge:ores/kyanite",
            "4x #forge:ores/mica",
            "4x #forge:ores/bauxite",
            "2x #forge:ores/pollucite"], "kubejs:mica_vein_essence"],

        [["32x #forge:ores/tin",
            "16x #forge:ores/cassiterite"], "kubejs:cassiterite_vein_essence"],

        [["12x #forge:ores/red_garnet",
            "8x #forge:ores/yellow_garnet",
            "8x #forge:ores/amethyst",
            "4x #forge:ores/opal"], "kubejs:garnet_vein_essence"],

        [["24x #forge:ores/basaltic_mineral_sand",
            "16x #forge:ores/granitic_mineral_sand",
            "16x #forge:ores/fullers_earth",
            "8x #forge:ores/gypsum"], "kubejs:mineral_sand_vein_essence"],

        [["15x #forge:ores/rock_salt",
            "1x #forge:ores/salt",
            "5x #forge:ores/lepidolite",
            "5x #forge:ores/spodumene"], "kubejs:salts_vein_essence"],

        [["18x #forge:ores/redstone",
            "12x #forge:ores/ruby",
            "6x #forge:ores/cinnabar"], "kubejs:redstone_vein_ow_essence"],

        [["12x #forge:ores/apatite",
            "8x #forge:ores/tricalcium_phosphate",
            "4x #forge:ores/pyrochlore"], "kubejs:apatite_vein_essence"],

        [["24x #forge:ores/cassiterite_sand",
            "16x #forge:ores/garnet_sand",
            "16x #forge:ores/asbestos",
            "8x #forge:ores/diatomite"], "kubejs:garnet_tin_vein_essence"],

        [["24x #forge:ores/oilsands"], "kubejs:oilsands_vein_essence"],

        [["12x #forge:ores/graphite",
            "8x #forge:ores/diamond"], "kubejs:diamond_vein_essence"],

        [["12x #forge:ores/garnierite",
            "8x #forge:ores/nickel",
            "8x #forge:ores/cobaltite",
            "4x #forge:ores/pentlandite"], "kubejs:nickel_vein_essence"]]

    overworld_vs.forEach((overworld_v) => {
        gtr.incubator("overworld_e_" + overworld_v[1])
            .notConsumable("16x kubejs:overworld_data")
            .itemInputs("kubejs:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(overworld_v[0])
            .itemOutputs("64x " + overworld_v[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)
    })

    const nether_vs =
        [[["28x #forge:ores/tetrahedrite",
            "14x #forge:ores/copper",
            "7x #forge:ores/stibnite"], "kubejs:tetrahedrite_vein_essence"],

        [["9x #forge:ores/bastnasite",
            "3x #forge:ores/molybdenum",
            "3x #forge:ores/neodymium"], "kubejs:monazite_vein_essence"],

        [["18x #forge:ores/redstone",
            "12x #forge:ores/ruby",
            "6x #forge:ores/cinnabar"], "kubejs:redstone_vein_essence"],

        [["12x #forge:ores/saltpeter",
            "8x #forge:ores/diatomite",
            "8x #forge:ores/electrotine",
            "4x #forge:ores/alunite"], "kubejs:saltpeter_vein_essence"],

        [["9x #forge:ores/beryllium",
            "12x #forge:ores/emerald"], "kubejs:beryllium_vein_essence"],

        [["6x #forge:ores/grossular",
            "4x #forge:ores/pyrolusite",
            "2x #forge:ores/tantalite"], "kubejs:manganese_vein_essence"],

        [["15x #forge:ores/wulfenite",
            "1x #forge:ores/molybdenite",
            "5x #forge:ores/molybdenum",
            "5x #forge:ores/powellite"], "kubejs:molybdenum_vein_essence"],

        [["9x #forge:ores/goethite",
            "6x #forge:ores/yellow_limonite",
            "6x #forge:ores/hematite",
            "3x #forge:ores/gold"], "kubejs:banded_iron_vein_essence"],

        [["12x #forge:ores/quartzite",
            "8x #forge:ores/certus_quartz",
            "4x #forge:ores/barite"], "kubejs:certus_quartz_essence"],

        [["21x #forge:ores/blue_topaz",
            "14x #forge:ores/topaz",
            "14x #forge:ores/chalcocite",
            "7x #forge:ores/bornite"], "kubejs:topaz_vein_essence"],

        [["24x #forge:ores/nether_quartz",
            "8x #forge:ores/quartzite",
            "5x minecraft:ancient_debris"], "kubejs:nether_quartz_vein_essence"],

        [["3x #forge:ores/sulfur",
            "2x #forge:ores/pyrite",
            "1x #forge:ores/sphalerite"], "kubejs:sulfur_vein_essence"]]

    nether_vs.forEach((nether_v) => {
        gtr.incubator("nether_e_" + nether_v[1])
            .notConsumable("32x kubejs:nether_data")
            .itemInputs("kubejs:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(nether_v[0])
            .itemOutputs("64x " + nether_v[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)

    })

    const end_vs =
        [[["18x #forge:ores/magnetite",
            "12x #forge:ores/vanadium_magnetite",
            "12x #forge:ores/chromite",
            "6x #forge:ores/gold"], "kubejs:magnetite_vein_end_essence"],

        [["16x #forge:ores/bauxite",
            "8x #forge:ores/ilmenite",
            "8x #forge:ores/aluminium"], "kubejs:bauxite_vein_end_essence"],

        [["6x #forge:ores/bornite",
            "4x #forge:ores/cooperite",
            "4x #forge:ores/platinum",
            "2x #forge:ores/palladium"], "kubejs:sheldonite_vein_essence"],

        [["12x #forge:ores/scheelite",
            "8x #forge:ores/tungstate",
            "4x #forge:ores/lithium"], "kubejs:scheelite_vein_essence"],

        [["18x #forge:ores/pitchblende",
            "12x #forge:ores/uraninite"], "kubejs:pitchblende_vein_end_essence"],

        [["18x #forge:ores/naquadah",
            "6x #forge:ores/plutonium",
            "20x #forge:ores/trinium"], "kubejs:naquadah_vein_essence"]]

    end_vs.forEach((end_v) => {
        gtr.incubator("end_e_" + end_v[1])
            .notConsumable("64x kubejs:end_data")
            .itemInputs("kubejs:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(end_v[0])
            .itemOutputs("64x " + end_v[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)

    })

    gtr.macerator("kubejs:essence")
        .itemInputs("kubejs:essence_block")
        .itemOutputs("kubejs:essence")
        .chancedOutput("kubejs:essence", 5000, 400)
        .chancedOutput("kubejs:essence", 5000, 200)
        .chancedOutput("kubejs:essence", 5000, 100)
        .EUt(30)
        .duration(200)

    gtr.mixer("kubejs:essence_seed")
        .itemInputs("16x #forge:seeds", "kubejs:essence")
        .inputFluids("gtceu:distilled_water 1000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("16x kubejs:essence_seed")
        .EUt(120)
        .duration(400)

    gtr.incubator("kubejs:space_essence")
        .itemInputs("#kubjes:vein_essence", "ae2:sky_dust", "gtceu:tiny_nether_star_dust")
        .inputFluids("gtceu:biomass 100", "gtceu:sterilized_growth_medium 100")
        .itemOutputs("kubejs:space_essence")
        .EUt(480)
        .duration(1200)

    gtr.incubator("minecraft:cow_spawn_egg")
        .itemInputs("4x minecraft:beef", "4x minecraft:bone", "4x minecraft:leather")
        .inputFluids("gtceu:milk 1000")
        .itemOutputs("minecraft:cow_spawn_egg")
        .EUt(480)
        .duration(1200)

    gtr.extractor("gtceu:milk")
        .itemInputs("minecraft:milk_bucket")
        .itemOutputs("minecraft:bucket")
        .outputFluids("gtceu:milk 1000")
        .EUt(16)
        .duration(60)

    gtr.extractor("gtceu:milk1")
        .notConsumable("minecraft:cow_spawn_egg")
        .outputFluids("gtceu:milk 100")
        .EUt(30)
        .duration(20)

    const overworld_ores =
        [[["60x gtceu:bentonite_ore",
            "40x gtceu:magnetite_ore",
            "40x gtceu:olivine_ore",
            "20x gtceu:glauconite_sand_ore"], "kubejs:olivine_vein_essence"],

        [["180x gtceu:almandine_ore",
            "120x gtceu:pyrope_ore",
            "60x gtceu:sapphire_ore",
            "60x gtceu:green_sapphire_ore"], "kubejs:sapphire_vein_essence"],

        [["60x gtceu:goethite_ore",
            "240x gtceu:yellow_limonite_ore",
            "240x gtceu:hematite_ore",
            "120x gtceu:malachite_ore"], "kubejs:iron_vein_essence"],

        [["120x gtceu:soapstone_ore",
            "80x gtceu:talc_ore",
            "80x gtceu:glauconite_sand_ore",
            "40x gtceu:pentlandite_ore"], "kubejs:lubricant_vein_essence"],

        [["60x gtceu:grossular_ore",
            "40x gtceu:spessartine_ore",
            "40x gtceu:pyrolusite_ore",
            "20x gtceu:tantalite_ore"], "kubejs:manganese_vein_ow_essence"],

        [["250x gtceu:chalcopyrite_ore",
            "10x gtceu:zeolite_ore",
            "10x gtceu:cassiterite_ore",
            "50x gtceu:realgar_ore"], "kubejs:copper_tin_vein_essence"],

        [["240x gtceu:coal_ore"], "kubejs:coal_vein_essence"],

        [["40x gtceu:chalcopyrite_ore",
            "160x gtceu:iron_ore",
            "160x gtceu:pyrite_ore",
            "160x gtceu:copper_ore"], "kubejs:copper_vein_essence"],

        [["240x gtceu:magnetite_ore",
            "160x gtceu:vanadium_magnetite_ore",
            "80x gtceu:gold_ore"], "kubejs:magnetite_vein_ow_essence"],

        [["120x gtceu:lazurite_ore",
            "80x gtceu:sodalite_ore",
            "80x gtceu:lapis_ore",
            "40x gtceu:calcite_ore"], "kubejs:lapis_vein_essence"],

        [["120x gtceu:galena_ore",
            "80x gtceu:silver_ore",
            "40x gtceu:lead_ore"], "kubejs:galena_vein_essence"],

        [["60x gtceu:kyanite_ore",
            "40x gtceu:mica_ore",
            "40x gtceu:bauxite_ore",
            "20x gtceu:pollucite_ore"], "kubejs:mica_vein_essence"],

        [["320x gtceu:tin_ore",
            "160x gtceu:cassiterite_ore"], "kubejs:cassiterite_vein_essence"],

        [["120x gtceu:red_garnet_ore",
            "80x gtceu:yellow_garnet_ore",
            "80x gtceu:amethyst_ore",
            "40x gtceu:opal_ore"], "kubejs:garnet_vein_essence"],

        [["240x gtceu:basaltic_mineral_sand_ore",
            "160x gtceu:granitic_mineral_sand_ore",
            "160x gtceu:fullers_earth_ore",
            "80x gtceu:gypsum_ore"], "kubejs:mineral_sand_vein_essence"],

        [["150x gtceu:rock_salt_ore",
            "10x gtceu:salt_ore",
            "50x gtceu:lepidolite_ore",
            "50x gtceu:spodumene_ore"], "kubejs:salts_vein_essence"],

        [["180x gtceu:redstone_ore",
            "120x gtceu:ruby_ore",
            "60x gtceu:cinnabar_ore"], "kubejs:redstone_vein_ow_essence"],

        [["120x gtceu:apatite_ore",
            "80x gtceu:tricalcium_phosphate_ore",
            "40x gtceu:pyrochlore_ore"], "kubejs:apatite_vein_essence"],

        [["240x gtceu:cassiterite_sand_ore",
            "160x gtceu:garnet_sand_ore",
            "160x gtceu:asbestos_ore",
            "80x gtceu:diatomite_ore"], "kubejs:garnet_tin_vein_essence"],

        [["240x gtceu:oilsands_ore"], "kubejs:oilsands_vein_essence"],

        [["120x gtceu:graphite_ore",
            "80x gtceu:diamond_ore",
            "40x gtceu:coal_ore"], "kubejs:diamond_vein_essence"],

        [["120x gtceu:garnierite_ore",
            "80x gtceu:nickel_ore",
            "80x gtceu:cobaltite_ore",
            "40x gtceu:pentlandite_ore"], "kubejs:nickel_vein_essence"]]

    overworld_ores.forEach((overworld_ore) => {
        gtr.large_void_miner("overworld_void_ore_" + overworld_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000000")
            .itemInputs(overworld_ore[1])
            .itemOutputs(overworld_ore[0])
            .EUt(GTValues.VA[GTValues.LuV])
            .duration(200)
    })

    const nether_ores =
        [[["280x gtceu:netherrack_tetrahedrite_ore",
            "140x gtceu:netherrack_copper_ore",
            "70x gtceu:netherrack_stibnite_ore"], "kubejs:tetrahedrite_vein_essence"],

        [["90x gtceu:netherrack_bastnasite_ore",
            "30x gtceu:netherrack_molybdenum_ore",
            "30x gtceu:netherrack_neodymium_ore",
            "30x gtceu:netherrack_monazite_ore"], "kubejs:monazite_vein_essence"],

        [["180x gtceu:netherrack_redstone_ore",
            "120x gtceu:netherrack_ruby_ore",
            "60x gtceu:netherrack_cinnabar_ore",
            "20x gtceu:netherrack_rubidium_ore"], "kubejs:redstone_vein_essence"],

        [["120x gtceu:netherrack_saltpeter_ore",
            "80x gtceu:netherrack_diatomite_ore",
            "80x gtceu:netherrack_electrotine_ore",
            "40x gtceu:netherrack_alunite_ore"], "kubejs:saltpeter_vein_essence"],

        [["90x gtceu:netherrack_beryllium_ore",
            "120x gtceu:netherrack_emerald_ore",
            "20x gtceu:netherrack_celestine_ore"], "kubejs:beryllium_vein_essence"],

        [["60x gtceu:netherrack_grossular_ore",
            "40x gtceu:netherrack_pyrolusite_ore",
            "20x gtceu:netherrack_tantalite_ore",
            "20x gtceu:netherrack_zircon_ore"], "kubejs:manganese_vein_essence"],

        [["150x gtceu:netherrack_wulfenite_ore",
            "100x gtceu:netherrack_molybdenite_ore",
            "50x gtceu:netherrack_molybdenum_ore",
            "50x gtceu:netherrack_powellite_ore"], "kubejs:molybdenum_vein_essence"],

        [["90x gtceu:netherrack_goethite_ore",
            "60x gtceu:netherrack_yellow_limonite_ore",
            "60x gtceu:netherrack_hematite_ore",
            "30x gtceu:netherrack_gold_ore"], "kubejs:banded_iron_vein_essence"],

        [["120x gtceu:netherrack_quartzite_ore",
            "80x gtceu:netherrack_certus_quartz_ore",
            "40x gtceu:netherrack_barite_ore"], "kubejs:certus_quartz_essence"],

        [["210x gtceu:netherrack_blue_topaz_ore",
            "140x gtceu:netherrack_topaz_ore",
            "140x gtceu:netherrack_chalcocite_ore",
            "70x gtceu:netherrack_bornite_ore"], "kubejs:topaz_vein_essence"],

        [["240x gtceu:netherrack_nether_quartz_ore",
            "80x gtceu:netherrack_quartzite_ore",
            "50x minecraft:ancient_debris"], "kubejs:nether_quartz_vein_essence"],

        [["300x gtceu:netherrack_sulfur_ore",
            "200x gtceu:netherrack_pyrite_ore",
            "100x gtceu:netherrack_sphalerite_ore",
            "20x gtceu:netherrack_indium_ore"], "kubejs:sulfur_vein_essence"]]

    nether_ores.forEach((nether_ore) => {
        gtr.large_void_miner("nether_void_ore_" + nether_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000000")
            .itemInputs(nether_ore[1])
            .itemOutputs(nether_ore[0])
            .EUt(GTValues.VA[GTValues.LuV] * 2)
            .duration(200)
    })

    const end_ores =
        [[["180x gtceu:endstone_magnetite_ore",
            "120x gtceu:endstone_vanadium_magnetite_ore",
            "120x gtceu:endstone_chromite_ore",
            "60x gtceu:endstone_gold_ore"], "kubejs:magnetite_vein_end_essence"],

        [["160x gtceu:endstone_bauxite_ore",
            "80x gtceu:endstone_ilmenite_ore",
            "80x gtceu:endstone_aluminium_ore",
            "30x gtceu:endstone_titanium_ore"], "kubejs:bauxite_vein_end_essence"],

        [["60x gtceu:endstone_bornite_ore",
            "40x gtceu:endstone_cooperite_ore",
            "40x gtceu:endstone_platinum_ore",
            "20x gtceu:endstone_palladium_ore"], "kubejs:sheldonite_vein_essence"],

        [["120x gtceu:endstone_scheelite_ore",
            "80x gtceu:endstone_tungstate_ore",
            "40x gtceu:endstone_lithium_ore",
            "20x gtceu:endstone_tellurium_ore"], "kubejs:scheelite_vein_essence"],

        [["180x gtceu:endstone_pitchblende_ore",
            "120x gtceu:endstone_uraninite_ore",
            "30x gtceu:endstone_tungsten_ore"], "kubejs:pitchblende_vein_end_essence"],

        [["180x gtceu:endstone_naquadah_ore",
            "60x gtceu:endstone_plutonium_ore",
            "20x gtceu:endstone_trinium_ore"], "kubejs:naquadah_vein_essence"]]

    const all_ores = overworld_ores.concat(nether_ores, end_ores)

    let recipe = gtr.random_ore("random_ore")
        .inputFluids("gtceu:drilling_fluid 10000000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)
    all_ores.forEach(ore => {
        ore[0].forEach(item => {
            recipe.chancedOutput(item, 200, 20)
        })
    })

    end_ores.forEach((end_ore) => {
        gtr.large_void_miner("end_void_ore_" + end_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000000")
            .itemInputs(end_ore[1])
            .itemOutputs(end_ore[0])
            .EUt(GTValues.VA[GTValues.ZPM])
            .duration(200)
    })

    const space_ores1 =
        [[["280x gtceu:tetrahedrite_ore",
            "140x gtceu:copper_ore",
            "60x gtceu:bentonite_ore",
            "40x gtceu:magnetite_ore",
            "40x gtceu:olivine_ore",
            "20x gtceu:glauconite_sand_ore"], "1"],

        [["180x gtceu:almandine_ore",
            "120x gtceu:pyrope_ore",
            "60x gtceu:sapphire_ore",
            "60x gtceu:green_sapphire_ore",
            "70x gtceu:stibnite_ore",
            "120x gtceu:uraninite_ore"], "2"],

        [["90x gtceu:bastnasite_ore",
            "30x gtceu:molybdenum_ore",
            "60x gtceu:goethite_ore",
            "240x gtceu:yellow_limonite_ore",
            "240x gtceu:hematite_ore",
            "120x gtceu:malachite_ore"], "3"],

        [["120x gtceu:soapstone_ore",
            "80x gtceu:talc_ore",
            "80x gtceu:glauconite_sand_ore",
            "40x gtceu:pentlandite_ore",
            "30x gtceu:neodymium_ore",
            "60x gtceu:monazite_ore"], "4"],

        [["180x gtceu:redstone_ore",
            "120x gtceu:ruby_ore",
            "60x gtceu:grossular_ore",
            "40x gtceu:spessartine_ore",
            "40x gtceu:pyrolusite_ore",
            "20x gtceu:tantalite_ore"], "5"],

        [["250x gtceu:chalcopyrite_ore",
            "10x gtceu:zeolite_ore",
            "10x gtceu:cassiterite_ore",
            "50x gtceu:realgar_ore",
            "60x gtceu:cinnabar_ore",
            "80x ae2:sky_stone_block"], "6"],

        [["120x gtceu:saltpeter_ore",
            "80x gtceu:diatomite_ore",
            "80x gtceu:electrotine_ore",
            "40x gtceu:alunite_ore",
            "240x gtceu:coal_ore",
            "40x gtceu:rubidium_ore"], "7"],

        [["90x gtceu:beryllium_ore",
            "120x gtceu:emerald_ore",
            "40x gtceu:chalcopyrite_ore",
            "160x gtceu:iron_ore",
            "160x gtceu:pyrite_ore",
            "160x gtceu:copper_ore"], "8"],

        [["60x gtceu:grossular_ore",
            "40x gtceu:pyrolusite_ore",
            "20x gtceu:tantalite_ore",
            "240x gtceu:magnetite_ore",
            "160x gtceu:vanadium_magnetite_ore",
            "80x gtceu:gold_ore"], "9"],

        [["120x gtceu:lazurite_ore",
            "80x gtceu:sodalite_ore",
            "80x gtceu:lapis_ore",
            "40x gtceu:calcite_ore",
            "150x gtceu:wulfenite_ore",
            "30x gtceu:calorite_ore"], "10"],

        [["120x gtceu:galena_ore",
            "80x gtceu:silver_ore",
            "40x gtceu:lead_ore",
            "100x gtceu:molybdenite_ore",
            "50x gtceu:molybdenum_ore",
            "50x gtceu:powellite_ore"], "11"],

        [["90x gtceu:goethite_ore",
            "60x gtceu:yellow_limonite_ore",
            "60x gtceu:kyanite_ore",
            "40x gtceu:mica_ore",
            "40x gtceu:bauxite_ore",
            "20x gtceu:pollucite_ore"], "12"],

        [["120x gtceu:quartzite_ore",
            "80x gtceu:certus_quartz_ore",
            "140x gtceu:zircon_ore",
            "160x gtceu:cassiterite_ore",
            "60x gtceu:hematite_ore",
            "30x gtceu:gold_ore"], "13"],

        [["40x gtceu:barite_ore",
            "120x gtceu:red_garnet_ore",
            "80x gtceu:yellow_garnet_ore",
            "80x gtceu:amethyst_ore",
            "40x gtceu:opal_ore",
            "20x gtceu:alien_algae_ore"], "14"],

        [["210x gtceu:blue_topaz_ore",
            "140x gtceu:topaz_ore",
            "240x gtceu:basaltic_mineral_sand_ore",
            "160x gtceu:granitic_mineral_sand_ore",
            "160x gtceu:fullers_earth_ore",
            "80x gtceu:gypsum_ore"], "15"],

        [["150x gtceu:rock_salt_ore",
            "10x gtceu:salt_ore",
            "50x gtceu:lepidolite_ore",
            "50x gtceu:spodumene_ore",
            "140x gtceu:chalcocite_ore",
            "70x gtceu:bornite_ore"], "16"],

        [["180x gtceu:redstone_ore",
            "120x gtceu:ruby_ore",
            "60x gtceu:cinnabar_ore",
            "240x gtceu:nether_quartz_ore",
            "80x gtceu:quartzite_ore",
            "50x minecraft:ancient_debris"], "17"],

        [["120x gtceu:apatite_ore",
            "80x gtceu:tricalcium_phosphate_ore",
            "40x gtceu:pyrochlore_ore",
            "300x gtceu:sulfur_ore",
            "200x gtceu:pyrite_ore",
            "100x gtceu:sphalerite_ore"], "18"],

        [["180x gtceu:magnetite_ore",
            "120x gtceu:vanadium_magnetite_ore",
            "240x gtceu:cassiterite_sand_ore",
            "160x gtceu:garnet_sand_ore",
            "160x gtceu:asbestos_ore",
            "80x gtceu:diatomite_ore"], "19"],

        [["240x gtceu:oilsands_ore",
            "60x gtceu:gold_ore",
            "80x gtceu:infused_gold_ore",
            "160x gtceu:bauxite_ore",
            "80x gtceu:ilmenite_ore",
            "80x gtceu:aluminium_ore"], "20"],

        [["60x gtceu:bornite_ore",
            "40x gtceu:cooperite_ore",
            "120x gtceu:graphite_ore",
            "80x gtceu:diamond_ore",
            "40x gtceu:coal_ore",
            "40x gtceu:titanium_ore"], "21"],

        [["120x gtceu:garnierite_ore",
            "80x gtceu:nickel_ore",
            "80x gtceu:cobaltite_ore",
            "40x gtceu:pentlandite_ore",
            "40x gtceu:platinum_ore",
            "20x gtceu:palladium_ore"], "22"],

        [["120x gtceu:scheelite_ore",
            "80x gtceu:tungstate_ore",
            "40x gtceu:lithium_ore",
            "20x gtceu:tellurium_ore",
            "30x gtceu:tungsten_ore",
            "180x gtceu:pitchblende_ore"], "23"],

        [["180x gtceu:naquadah_ore",
            "120x gtceu:chromite_ore",
            "60x gtceu:plutonium_ore",
            "30x gtceu:enriched_naquadah_ore",
            "30x gtceu:trinium_ore",
            "30x gtceu:indium_ore"], "24"]
        ]

    const space_drones = [1, 2, 3, 4, 5, 6]

    space_drones.forEach((space_drone) => {
        space_ores1.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 20000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 16000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 12000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_5_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 8000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 4000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 2000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_ores2 =
        [[["20x gtceu:jasper_ore",
            "140x gtceu:red_garnet_ore",
            "60x gtceu:topaz_ore",
            "40x gtceu:emerald_ore",
            "40x gtceu:amethyst_ore",
            "20x gtceu:celestine_ore"], "25"]
        ]

    space_drones.slice(1).forEach((space_drone) => {
        space_ores2.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 20000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 16000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 12000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_5_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 8000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 4000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 2000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_ores3 =
        [[["140x gtceu:iron_ore",
            "140x gtceu:tin_ore",
            "60x gtceu:nickel_ore",
            "60x gtceu:uruium_ore",
            "40x gtceu:force_ore",
            "20x gtceu:cobalt_ore"], "26"],
        [["120x gtceu:bloodstone_ore",
            "80x gtceu:redstone_ore",
            "120x gtceu:red_garnet_ore",
            "40x gtceu:gravel_ruby_ore",
            "40x gtceu:almandine_ore",
            "40x gtceu:pyrope_ore"], "27"]
        ]

    space_drones.slice(2).forEach((space_drone) => {
        space_ores3.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 20000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 16000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 12000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_5_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 8000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 4000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 2000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_ores4 =
        [[["80x gtceu:naquadah_ore",
            "40x gtceu:adamantine_compounds_ore",
            "60x gtceu:rare_earth_metal_ore",
            "40x gtceu:monazite_ore",
            "40x gtceu:bastnasite_ore",
            "20x gtceu:enriched_naquadah_ore"], "28"],
        [["40x gtceu:earth_crystal_ore",
            "40x gtceu:ignis_crystal_ore",
            "80x gtceu:uraninite_ore",
            "40x gtceu:orichalcum_ore",
            "60x gtceu:mithril_ore",
            "80x gtceu:salt_ore"], "29"]
        ]

    space_drones.slice(3).forEach((space_drone) => {
        space_ores4.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 20000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 16000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 12000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_5_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 8000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 4000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 2000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_ores5 =
        [[["80x gtceu:enderium_ore",
            "120x gtceu:sodalite_ore",
            "60x gtceu:celestine_ore",
            "80x gtceu:lapis_ore",
            "60x gtceu:bauxite_ore",
            "40x gtceu:pitchblende_ore"], "30"],
        [["40x gtceu:silver_ore",
            "60x gtceu:andesite_platinum_ore",
            "60x gtceu:tartarite_ore",
            "80x gtceu:vibranium_ore",
            "120x gtceu:aluminium_ore",
            "120x gtceu:iron_ore"], "31"]
        ]

    space_drones.slice(4).forEach((space_drone) => {
        space_ores5.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 20000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 16000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 12000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_5_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 8000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 4000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 2000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_ores6 =
        [[["12x gtceu:lazurite_ore",
            "80x gtceu:sapphire_ore",
            "60x gtceu:starmetal_ore",
            "80x gtceu:green_sapphire_ore",
            "120x gtceu:yellow_garnet_ore",
            "80x gtceu:pollucite_ore"], "32"]
        ]

    space_drones.slice(5).forEach((space_drone) => {
        space_ores6.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 20000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 16000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 12000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_5_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 8000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 4000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 2000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_fluids = [
        ["gtceu:hydrogen 1000000", 1],
        ["gtceu:helium 1000000", 2],
        ["gtceu:nitrogen 1000000", 3],
        ["gtceu:methane 1000000", 4],
        ["gtceu:sulfur_dioxide 1000000", 5],
        ["gtceu:carbon_dioxide 1000000", 6],
        ["gtceu:nitrogen_dioxide 1000000", 7],
        ["gtceu:ammonia 1000000", 8],
        ["gtceu:chlorine 1000000", 9],
        ["gtceu:fluorine 1000000", 10],
        ["gtceu:carbon_monoxide 1000000", 11],
        ["gtceu:oxygen 1000000", 12]]

    space_drones.forEach((space_drone) => {
        space_fluids.forEach((space_fluid) => {
            gtr.drilling_module(space_drone + "1_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "2_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 8000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "3_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 7000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "4_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 6000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "5_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 5000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "6_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 4000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "7_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("ad_astra:cryo_fuel 2000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "8_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 1000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })
    const space_fluid1s = [
        ["gtceu:unknowwater 10000", 13],
        ["gtceu:neon 100000", 14],
        ["gtceu:argon 100000", 15],
        ["gtceu:krypton 100000", 16],
        ["gtceu:xenon 100000", 17],
        ["gtceu:radon 100000", 18],
        ["gtceu:helium_3 100000", 19]]
    space_drones.slice(1).forEach((space_drone) => {
        space_fluid1s.forEach((space_fluid) => {
            gtr.drilling_module(space_drone + "1_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "2_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 8000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "3_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 7000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "4_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 6000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "5_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 5000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "6_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 4000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "7_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("ad_astra:cryo_fuel 2000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "8_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 1000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_fluid2s = [
        ["gtceu:deuterium 100000", 20],
        ["gtceu:tritium 100000", 21],
        ["gtceu:heavy_fuel 100000", 22],
        ["gtceu:light_fuel 100000", 23],
        ["gtceu:naphtha 100000", 24],
        ["gtceu:refinery_gas 100000", 25],
        ["gtceu:coal_gas 100000", 26],
        ["gtceu:bromine 100000", 27],
        ["gtceu:barnarda_air 100000", 28]]
    space_drones.slice(2).forEach((space_drone) => {
        space_fluid2s.forEach((space_fluid) => {
            gtr.drilling_module(space_drone + "1_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "2_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 8000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "3_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 7000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "4_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 6000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "5_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 5000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "6_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 4000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "7_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("ad_astra:cryo_fuel 2000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "8_space_fluid_" + space_fluid[1])
                .notConsumable("16x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 1000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))
        })
    })

    const space_fluid5s = [
        ["gtceu:white_dwarf_mtter 100000", 29],
        ["gtceu:black_dwarf_mtter 100000", 30]]
    space_drones.slice(5).forEach((space_drone) => {
        space_fluid5s.forEach((space_fluid) => {
            gtr.drilling_module(space_drone + "1_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel 100000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "2_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 80000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "3_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 70000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "4_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 60000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "5_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 50000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "6_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 40000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "7_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("ad_astra:cryo_fuel 20000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "8_space_fluid_" + space_fluid[1])
                .notConsumable("64x kubejs:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))
        })
    })

    event.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
        G: "gtceu:tempered_glass",
        C: "#gtceu:circuits/mv",
        H: "gtceu:mv_machine_hull",
        P: "gtceu:mv_electric_piston",
        U: "gtceu:mv_electric_pump",
    })

    const trees = [
        ["minecraft:oak_sapling", "minecraft:oak_log"],
        ["minecraft:spruce_sapling", "minecraft:spruce_log"],
        ["minecraft:birch_sapling", "minecraft:birch_log"],
        ["minecraft:jungle_sapling", "minecraft:jungle_log"],
        ["minecraft:acacia_sapling", "minecraft:acacia_log"],
        ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log"],
        ["minecraft:mangrove_propagule", "minecraft:mangrove_log"],
        ["minecraft:cherry_sapling", "minecraft:cherry_log"],
    ]
    const plants = [
        ["minecraft:pumpkin_seeds", "minecraft:pumpkin", 6],
        ["minecraft:beetroot_seeds", "minecraft:beetroot", 16],
        ["minecraft:sweet_berries", "minecraft:sweet_berries", 16],
        ["minecraft:glow_berries", "minecraft:glow_berries", 8],
        ["minecraft:wheat_seeds", "minecraft:wheat", 16],
        ["minecraft:melon_seeds", "minecraft:melon", 6],
        ["minecraft:carrot", "minecraft:carrot", 12],
        ["minecraft:sugar_cane", "minecraft:sugar_cane", 12],
        ["minecraft:kelp", "minecraft:kelp", 12],
        ["minecraft:cactus", "minecraft:cactus", 12],
        ["minecraft:potato", "minecraft:potato", 12],
        ["minecraft:cocoa_beans", "minecraft:cocoa_beans", 12],
        ["minecraft:brown_mushroom", "minecraft:brown_mushroom", 12],
        ["minecraft:red_mushroom", "minecraft:red_mushroom", 12],
        ["minecraft:nether_wart", "minecraft:nether_wart", 12],
        ["minecraft:bamboo", "minecraft:bamboo", 16],
        ["minecraft:vine", "minecraft:vine", 16],
        ["minecraft:sea_pickle", "minecraft:sea_pickle", 16],
    ]

    trees.forEach((woodType) => {
        gtr.greenhouse(woodType[0])
            .notConsumable(woodType[0])
            .inputFluids("water 1000")
            .itemOutputs(`64x ${woodType[1]}`, `6x ${woodType[0]}`)
            .duration(600)
            .EUt(30)
            .circuit(1)

        gtr.greenhouse(`${woodType[0]}_fertiliser`)
            .notConsumable(woodType[0])
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(
                `64x ${woodType[1]}`,
                `64x ${woodType[1]}`,
                `12x ${woodType[0]}`
            )
            .duration(200)
            .EUt(60)
            .circuit(2)
    })

    plants.forEach((seedType) => {
        gtr.greenhouse(seedType[0])
            .notConsumable(seedType[0])
            .inputFluids("water 1000")
            .itemOutputs(`${seedType[2]}x ${seedType[1]}`)
            .duration(600)
            .EUt(30)
            .circuit(1)
        gtr.greenhouse(seedType[0] + "_fertilizer")
            .notConsumable(seedType[0])
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`${2 * seedType[2]}x ${seedType[1]}`)
            .duration(200)
            .EUt(60)
            .circuit(2)
    })
    gtr.greenhouse("rubber_wood")
        .notConsumable("gtceu:rubber_sapling")
        .inputFluids("water 1000")
        .itemOutputs(
            "16x gtceu:rubber_log",
            "3x gtceu:rubber_sapling",
            "4x gtceu:sticky_resin"
        )
        .duration(600)
        .EUt(30)
        .circuit(1)

    gtr.greenhouse("rubber_wood_fertiliser")
        .notConsumable("gtceu:rubber_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            "32x gtceu:rubber_log",
            "6x gtceu:rubber_sapling",
            "8x gtceu:sticky_resin"
        )
        .duration(200)
        .EUt(60)
        .circuit(2)

    gtr.greenhouse("barnarda_log")
        .notConsumable("64x kubejs:barnarda_leaves")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("gtceu:unknowwater 1000")
        .itemOutputs("16x kubejs:barnarda_log")
        .duration(600)
        .EUt(30)
        .circuit(1)

    gtr.greenhouse("barnarda_log_fertiliser")
        .notConsumable("64x kubejs:barnarda_leaves")
        .itemInputs("16x gtceu:fertilizer")
        .inputFluids("gtceu:unknowwater 1000")
        .itemOutputs("32x kubejs:barnarda_log")
        .duration(200)
        .EUt(60)
        .circuit(2)

    gtr.chemical_bath("minecraft:sculk_vein")
        .itemInputs("minecraft:vine")
        .inputFluids("gtceu:echo 10")
        .itemOutputs("minecraft:sculk_vein")
        .EUt(120)
        .duration(200)

    gtr.incubator("minecraft:chorus_fruit")
        .notConsumable("64x minecraft:chorus_flower")
        .itemOutputs("64x minecraft:chorus_fruit")
        .inputFluids("gtceu:unknowwater 1000", "gtceu:ender_pearl 100")
        .EUt(120)
        .duration(1200)

    gtr.incubator("gtceu:echo")
        .notConsumable("64x minecraft:sculk_shrieker")
        .notConsumable("64x minecraft:sculk_sensor")
        .itemInputs("64x minecraft:dirt", "64x minecraft:sculk_vein")
        .itemOutputs("64x minecraft:sculk")
        .inputFluids("gtceu:unknowwater 1000", "gtceu:xpjuice 1000")
        .outputFluids("gtceu:echo 10000")
        .EUt(1920)
        .duration(2400)

    gtr.canner("minecraft:sculk")
        .itemInputs("minecraft:dirt", "minecraft:sculk_vein")
        .inputFluids("gtceu:xpjuice 10")
        .itemOutputs("minecraft:sculk")
        .EUt(480)
        .duration(600)

    gtr.dimensionally_transcendent_plasma_forge("kubejs:cosmic_neutron_plasma_cell")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("5x kubejs:extremely_durable_plasma_cell")
        .inputFluids("gtceu:uu_matter 1000000", "gtceu:dense_neutron_plasma 1000")
        .itemOutputs("5x kubejs:cosmic_neutron_plasma_cell")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .blastFurnaceTemp(28000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:crystalmatrix_plasma")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("16x kubejs:corporeal_matter")
        .inputFluids("gtceu:uu_matter 1000000", "gtceu:free_proton_gas 20000")
        .outputFluids("gtceu:crystalmatrix_plasma 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .blastFurnaceTemp(28000)

    gtr.dimensionally_transcendent_plasma_forge("kubejs:infinity")
        .notConsumable("kubejs:spacetime_catalyst")
        .inputFluids("gtceu:crystalmatrix_plasma 10000", "gtceu:cosmicneutronium 5000")
        .outputFluids("gtceu:infinity 1000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(32000)

    gtr.stellar_forge("gtceu:eternity_dust")
        .itemInputs("4x kubejs:quantum_chromodynamic_charge", "avaritia:eternal_singularity")
        .inputFluids("gtceu:primordialmatter 1000", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:eternity_dust")
        .outputFluids("gtceu:temporalfluid 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.stellar_forge("gtceu:temporalfluid")
        .itemInputs("4x kubejs:quantum_chromodynamic_charge", "kubejs:hypercube")
        .inputFluids("gtceu:spacetime 1000", "gtceu:dimensionallytranscendentresidue 100")
        .outputFluids("gtceu:temporalfluid 500", "gtceu:spatialfluid 500")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:dimensionallytranscendentresidue")
        .inputFluids("gtceu:dimensionallytranscendentcrudecatalyst 100", "gtceu:raw_star_matter_plasma 100")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)
        .blastFurnaceTemp(36000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:spacetime_ingot")
        .notConsumable("64x kubejs:ingot_field_shape")
        .notConsumable("64x gtceu:spacetimebendingcore")
        .inputFluids("gtceu:spacetime 1000", "gtceu:raw_star_matter_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .itemOutputs("8x gtceu:spacetime_ingot")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(6400)
        .blastFurnaceTemp(62000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:spacetime")
        .notConsumable("kubejs:spacetime_catalyst")
        .inputFluids("gtceu:infinity 100", "gtceu:hypogen 100")
        .outputFluids("gtceu:spacetime 200", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(36000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:magnetohydrodynamicallyconstrainedstarmatter")
        .notConsumable("kubejs:eternity_catalyst")
        .itemInputs("gtceu:eternity_nanoswarm")
        .inputFluids("gtceu:raw_star_matter_plasma 400000", "gtceu:exciteddtsc 100000")
        .outputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 400000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(1024 * GTValues.VA[GTValues.MAX])
        .duration(25600)
        .blastFurnaceTemp(81000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:dense_neutron_plasma")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("kubejs:neutron_plasma_containment_cell")
        .inputFluids("gtceu:heavy_quark_degenerate_matter_plasma 10000", "gtceu:periodicium 1000")
        .outputFluids("gtceu:dense_neutron_plasma 10000", "gtceu:dimensionallytranscendentresidue 100")
        .itemOutputs("kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .blastFurnaceTemp(26000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:eternity")
        .notConsumable("kubejs:eternity_catalyst")
        .itemInputs("avaritia:eternal_singularity")
        .inputFluids("gtceu:primordialmatter 1000", "gtceu:raw_star_matter_plasma 9000")
        .outputFluids("gtceu:eternity 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(4800)
        .blastFurnaceTemp(56000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:rhugnor")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("64x gtceu:energy_crystal")
        .inputFluids("gtceu:infinity 10000", "gtceu:quantum 10000")
        .outputFluids("gtceu:rhugnor 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(3600)
        .blastFurnaceTemp(36000)

    gtr.dimensionally_transcendent_plasma_forge("gtceu:hypogen")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_block")
        .inputFluids("gtceu:rhugnor 10000", "gtceu:dragon_blood 10000")
        .outputFluids("gtceu:hypogen 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .blastFurnaceTemp(26000)

    gtr.macerator("gtceu:spacetime_dust")
        .itemInputs("gtceu:spacetime_ingot")
        .itemOutputs("gtceu:spacetime_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.compressor("gtceu:spacetime_block")
        .itemInputs("9x gtceu:spacetime_ingot")
        .itemOutputs("gtceu:spacetime_block")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(3000)

    gtr.qft("gtceu:spacetime_single_wire")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:transcendentmetal_nanoswarm")
        .itemInputs("gtceu:infinity_single_wire")
        .inputFluids("gtceu:spacetime 100", "gtceu:rhugnor 100")
        .itemOutputs("gtceu:spacetime_single_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtceu:spacetime_double_wire")
        .notConsumable("4x gtceu:spacetime_nanoswarm")
        .notConsumable("4x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_single_wire")
        .inputFluids("gtceu:rhugnor 200")
        .itemOutputs("gtceu:spacetime_double_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.qft("gtceu:spacetime_quadruple_wire")
        .notConsumable("8x gtceu:spacetime_nanoswarm")
        .notConsumable("8x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_double_wire")
        .inputFluids("gtceu:rhugnor 400")
        .itemOutputs("gtceu:spacetime_quadruple_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.qft("gtceu:spacetime_octal_wire")
        .notConsumable("16x gtceu:spacetime_nanoswarm")
        .notConsumable("16x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_quadruple_wire")
        .inputFluids("gtceu:rhugnor 800")
        .itemOutputs("gtceu:spacetime_octal_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(3200)

    gtr.qft("gtceu:spacetime_hex_wire")
        .notConsumable("32x gtceu:spacetime_nanoswarm")
        .notConsumable("32x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_octal_wire")
        .inputFluids("gtceu:rhugnor 1600")
        .itemOutputs("gtceu:spacetime_hex_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(6400)

    const mcsms = [["ingot", 144], ["dust", 144], ["nugget", 16], ["rod", 72], ["plate", 144], ["foil", 36], ["block", 1296], ["frame", 288]]
    mcsms.forEach((mcsm) => {
        gtr.sps_crafting("gtceu:magnetohydrodynamicallyconstrainedstarmatter" + mcsm[0])
            .itemInputs("gtceu:eternity_" + mcsm[0], "kubejs:solar_light_splitter")
            .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter " + mcsm[1], "gtceu:dimensionallytranscendentresidue 1000")
            .itemOutputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_" + mcsm[0])
            .EUt(4 * GTValues.VA[GTValues.MAX])
            .duration(200)
    })

    gtr.sps_crafting("gtceu:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .itemInputs("gtceu:double_eternity_plate", "kubejs:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 288", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtceu:tiny_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemInputs("gtceu:tiny_eternity_dust", "kubejs:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 16", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:tiny_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtceu:small_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemInputs("gtceu:small_eternity_dust", "kubejs:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 36", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:small_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.assembler("kubejs:solar_light_splitter")
        .itemInputs("gtceu:laminated_glass", "gtceu:ruby_lens", "gtceu:emerald_lens", "gtceu:sapphire_lens")
        .inputFluids("gtceu:glowstone 576")
        .itemOutputs("kubejs:solar_light_splitter")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtceu:atomic_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "2x gtceu:abyssalalloy_plate", "4x gtceu:enriched_naquadah_plate")
        .itemOutputs("2x gtceu:atomic_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("kubejs:stellar_containment_casing")
        .itemInputs("gtceu:trinium_frame", "16x gtceu:trinium_screw", "gtceu:uv_field_generator", "gtceu:yttrium_barium_cuprate_quadruple_wire", "4x gtceu:naquadah_alloy_rod", "4x gtceu:double_highurabilityompoundteel_plate")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("kubejs:stellar_containment_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(140)

    gtr.assembler("kubejs:antimatter_charge")
        .notConsumable("gtceu:osmium_nanoswarm")
        .itemInputs("16x gtceu:highurabilityompoundteel_plate", "64x ae2:matter_ball", "64x minecraft:tnt", "64x gtceu:highurabilityompoundteel_bolt", "16x gtceu:uranium_rhodium_dinaquadide_plate")
        .itemOutputs("64x kubejs:antimatter_charge")
        .inputFluids("gtceu:antimatter 64")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.assembler("kubejs:naquadria_charge")
        .itemInputs("gtceu:black_steel_frame", "4x gtceu:titanium_bolt", "gtceu:hmxexplosive_dust", "gtceu:naquadria_dust", "gtceu:uranium_plate", "gtceu:osmium_bolt", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:thorium_plate")
        .inputFluids("gtceu:glyceryl_trinitrate 1000")
        .itemOutputs("kubejs:naquadria_charge")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.mixer("gtceu:eglin_steel_dust")
        .itemInputs("4x gtceu:iron_dust", "1x gtceu:kanthal_dust", "5x gtceu:invar_dust", "1x gtceu:sulfur_dust", "1x gtceu:silicon_dust", "1x gtceu:carbon_dust")
        .itemOutputs("13x gtceu:eglin_steel_dust")
        .EUt(120)
        .duration(600)

    gtr.assembler("kubejs:antifreeze_heatproof_machine_casing")
        .itemInputs("gtceu:inconel_792_frame", "2x gtceu:double_hsse_plate", "4x gtceu:double_rhodium_plated_palladium_plate")
        .itemOutputs("2x kubejs:antifreeze_heatproof_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("kubejs:pikyonium_machine_casing")
        .itemInputs("gtceu:hastelloy_x_frame", "6x gtceu:pikyonium_plate")
        .itemOutputs("2x kubejs:pikyonium_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("kubejs:oxidation_resistant_hastelloy_n_mechanical_casing")
        .itemInputs("gtceu:hastelloy_n_frame", "6x gtceu:hastelloy_n_plate")
        .itemOutputs("2x kubejs:oxidation_resistant_hastelloy_n_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.decay_hastener("gtceu:meitnerium_dust")
        .inputFluids("gtceu:hassium 144")
        .itemOutputs("gtceu:meitnerium_dust")
        .EUt(480)
        .duration(8000)

    const particle_collider = [["gtceu:plutonium", "gtceu:curium"],
    ["gtceu:thorium", "gtceu:uranium"],
    ["gtceu:uranium", "gtceu:plutonium"],
    ["gtceu:protactinium", "gtceu:neptunium"],
    ["gtceu:americium", "gtceu:berkelium"],
    ["gtceu:curium", "gtceu:einsteinium"],
    ["gtceu:berkelium", "gtceu:californium"],
    ["gtceu:einsteinium", "gtceu:mendelevium"],
    ["gtceu:fermium", "gtceu:nobelium"],
    ["gtceu:mendelevium", "gtceu:lawrencium"],
    ["gtceu:californium", "gtceu:fermium"],
    ["gtceu:bismuth", "gtceu:astatine"],
    ["gtceu:meitnerium", "gtceu:roentgenium"],
    ["gtceu:darmstadtium", "gtceu:copernicium"],
    ["gtceu:roentgenium", "gtceu:nihonium"],
    ["gtceu:dubnium", "gtceu:bohrium"]]

    particle_collider.forEach((particle) => {
        gtr.super_particle_collider(particle[1] + "a")
            .inputFluids(particle[0] + " 4096", "gtceu:helium_plasma 4096")
            .outputFluids(particle[1] + " 4000")
            .EUt(GTValues.VA[GTValues.UV])
            .duration(200)
    })

    const fusion_reactors = [
        ["gtceu:magnesium 2048", "gtceu:carbon 2048", "gtceu:argon_plasma", 16000],
        ["gtceu:carbon 4096", "gtceu:helium_3 32000", "gtceu:oxygen_plasma", 32000],
        ["gtceu:deuterium 32000", "gtceu:tritium 32000", "gtceu:helium_plasma", 32000],
        ["gtceu:xenon 32000", "gtceu:zinc 4096", "gtceu:plutonium", 4096],
        ["gtceu:gold 2048", "gtceu:mercury 2048", "gtceu:radon", 16000],
        ["gtceu:lutetium 4096", "gtceu:chromium 4096", "gtceu:americium", 4096],
        ["gtceu:hydrogen 32000", "gtceu:vanadium 4096", "gtceu:chromium", 4096],
        ["gtceu:copper 4096", "gtceu:silver 4096", "gtceu:osmium", 4096],
        ["gtceu:aluminium 4096", "gtceu:gold 4096", "gtceu:uranium", 4096],
        ["gtceu:silver 9216", "gtceu:lithium 9216", "gtceu:indium", 9216],
        ["gtceu:mercury 32000", "gtceu:magnesium 4096", "gtceu:uranium_235", 4096],
        ["gtceu:silicon 4096", "gtceu:lanthanum 4096", "gtceu:lutetium", 4096],
        ["gtceu:cerium 32000", "gtceu:krypton 4096", "gtceu:plutonium_241", 4096],
        ["gtceu:beryllium 2048", "gtceu:deuterium 48000", "gtceu:nitrogen_plasma", 16000],
        ["gtceu:neodymium 4096", "gtceu:hydrogen 96000", "gtceu:europium", 4096],
        ["gtceu:arsenic 8192", "gtceu:ruthenium 4096", "gtceu:darmstadtium", 4096],
        ["gtceu:fluorine 4096", "gtceu:potassium 32000", "gtceu:nickel_plasma", 4096],
        ["gtceu:silicon 4096", "gtceu:magnesium 4096", "gtceu:iron_plasma", 4096],
        ["gtceu:radon 16000", "gtceu:gallium 2048", "gtceu:duranium", 2048],
        ["gtceu:duranium 4096", "gtceu:titanium 4096", "gtceu:tritanium", 2048],
        ["gtceu:europium 4096", "gtceu:neon 4096", "gtceu:dubnium", 4096],
        ["gtceu:calcium 4608", "gtceu:plutonium 4608", "gtceu:seaborgium", 4608],
        ["gtceu:einsteinium 4608", "gtceu:sodium 36864", "gtceu:orichalcum_plasma", 4608],
        ["gtceu:enriched_naquadah 8192", "gtceu:radon 64000", "gtceu:naquadria", 2048],
        ["gtceu:berkelium 4608", "gtceu:potassium 36864", "gtceu:mithril_plasma", 4608],
        ["gtceu:americium 8192", "gtceu:naquadria 8192", "gtceu:neutronium", 2048]]
    fusion_reactors.slice(0, 20).forEach((fusion_reactor) => {
        gtr.super_particle_collider(fusion_reactor[2])
            .inputFluids(fusion_reactor[0], fusion_reactor[1])
            .outputFluids(fusion_reactor[2] + " " + (fusion_reactor[3] * 125 / 128))
            .EUt(GTValues.VA[GTValues.UV])
            .duration(200)
    })

    fusion_reactors.forEach((fusion_reactor) => {
        gtr.stellar_forge(fusion_reactor[2])
            .inputFluids(fusion_reactor[0], fusion_reactor[1])
            .itemInputs("kubejs:antimatter_charge")
            .outputFluids(fusion_reactor[2] + " " + fusion_reactor[3])
            .EUt(GTValues.VA[GTValues.UEV])
            .duration(200)
    })
    gtr.stellar_forge("kubejs:neutron_plasma_containment_cell")
        .inputFluids("gtceu:neutronium 1000", "gtceu:heavy_lepton_mixture 1000")
        .itemInputs("kubejs:naquadria_charge", "kubejs:plasma_containment_cell")
        .itemOutputs("kubejs:neutron_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:free_proton_gas")
        .itemInputs("kubejs:naquadria_charge", "kubejs:contained_high_density_protonic_matter")
        .outputFluids("gtceu:free_proton_gas 10000")
        .itemOutputs("kubejs:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:enderium_plasma")
        .inputFluids("gtceu:ender_eye 2304", "gtceu:lead 2304", "gtceu:bismuth 2304", "gtceu:platinum 1152", "gtceu:liquid_ender_air 100000")
        .itemInputs("kubejs:naquadria_charge", "kubejs:warped_ender_pearl")
        .outputFluids("gtceu:enderium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:adamantium_plasma")
        .inputFluids("gtceu:orichalcum 576", "gtceu:tin 1024", "gtceu:antimony 864", "gtceu:iron 1152", "gtceu:mercury 1000")
        .itemInputs("kubejs:naquadria_charge", "24x gtceu:bloodstone_dust")
        .outputFluids("gtceu:adamantium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:degenerate_rhenium_plasma")
        .itemInputs("kubejs:naquadria_charge", "5x gtceu:double_rhenium_plate")
        .outputFluids("gtceu:degenerate_rhenium_plasma 10000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:infuscolium_plasma")
        .inputFluids("gtceu:adamantine 2304", "gtceu:mana 10000")
        .itemInputs("kubejs:naquadria_charge", "16x minecraft:end_crystal", "16x minecraft:popped_chorus_fruit")
        .outputFluids("gtceu:infuscolium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:legendarium_plasma")
        .inputFluids("gtceu:naquadriatictaranium 576", "gtceu:trinium 288", "gtceu:duranium 288", "gtceu:tritanium 288", "gtceu:orichalcum 288", "gtceu:mithril 288", "gtceu:adamantium 288", "gtceu:adamantine 288", "gtceu:vibranium 288")
        .itemInputs("kubejs:leptonic_charge", "kubejs:neutron_plasma_containment_cell")
        .outputFluids("gtceu:legendarium_plasma 2304")
        .itemOutputs("kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("gtceu:quark_gluon_plasma")
        .itemInputs("kubejs:leptonic_charge", "10x gtceu:degenerate_rhenium_dust")
        .outputFluids("gtceu:quark_gluon_plasma 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("gtceu:heavy_quark_degenerate_matter_plasma")
        .inputFluids("gtceu:heavy_quark_enriched_mixture 1152", "gtceu:flerovium 144", "gtceu:oganesson 144", "gtceu:hassium 144", "gtceu:deuterium 1000")
        .itemInputs("kubejs:leptonic_charge")
        .outputFluids("gtceu:heavy_quark_degenerate_matter_plasma 1152")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("kubejs:contained_high_density_protonic_matter")
        .itemInputs("kubejs:leptonic_charge", "kubejs:time_dilation_containment_unit", "kubejs:charged_triplet_neutronium_sphere")
        .itemOutputs("kubejs:contained_high_density_protonic_matter")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("gtceu:crystalmatrix_plasma")
        .itemInputs("kubejs:leptonic_charge", "16x kubejs:corporeal_matter")
        .inputFluids("gtceu:free_proton_gas 20000")
        .outputFluids("gtceu:crystalmatrix_plasma 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("gtceu:starmetal_plasma")
        .itemInputs("kubejs:leptonic_charge", "10x kubejs:resonating_gem")
        .inputFluids("gtceu:free_proton_gas 1000", "gtceu:free_electron_gas 1000")
        .outputFluids("gtceu:starmetal_plasma 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("gtceu:high_energy_quark_gluon_plasma")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "10x gtceu:double_heavy_quark_degenerate_matter_plate")
        .outputFluids("gtceu:high_energy_quark_gluon_plasma 2000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("gtceu:quantumchromodynamically_confined_matter_plasma")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "20x kubejs:quantumchromodynamic_protective_plating")
        .outputFluids("gtceu:quantumchromodynamically_confined_matter_plasma 2000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("gtceu:draconiumawakened_plasma")
        .inputFluids("gtceu:draconium 2000", "gtceu:quantumchromodynamically_confined_matter 2000")
        .itemInputs("kubejs:quantum_chromodynamic_charge")
        .outputFluids("gtceu:draconiumawakened_plasma 2000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("gtceu:dense_neutron_plasma")
        .inputFluids("gtceu:periodicium 2736", "gtceu:gluons 6000", "gtceu:heavy_lepton_mixture 6000")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "5x gtceu:neutronium_block", "5x gtceu:heavy_quark_degenerate_matter_block")
        .outputFluids("gtceu:dense_neutron_plasma 6000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("kubejs:extremely_durable_plasma_cell")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "2x kubejs:dense_neutron_plasma_cell")
        .itemOutputs("kubejs:cosmic_neutron_plasma_cell", "kubejs:extremely_durable_plasma_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("gtceu:infinity_ingot")
        .inputFluids("gtceu:crystalmatrix 2000", "gtceu:cosmicneutronium 1000")
        .itemInputs("kubejs:quantum_chromodynamic_charge")
        .itemOutputs("gtceu:hot_infinity_ingot")
        .outputFluids("gtceu:infinity 10")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("kubejs:contained_reissner_nordstrom_singularity")
        .itemInputs("kubejs:naquadria_charge", "64x kubejs:time_dilation_containment_unit", "64x kubejs:charged_triplet_neutronium_sphere")
        .itemOutputs("64x kubejs:contained_reissner_nordstrom_singularity")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("kubejs:contained_kerr_newmann_singularity")
        .itemInputs("kubejs:leptonic_charge", "64x kubejs:contained_reissner_nordstrom_singularity")
        .itemOutputs("kubejs:contained_kerr_newmann_singularity", "63x kubejs:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("kubejs:contained_exotic_matter")
        .itemInputs("kubejs:leptonic_charge", "kubejs:contained_high_density_protonic_matter", "9x gtceu:tiny_degenerate_rhenium_dust")
        .itemOutputs("kubejs:contained_exotic_matter")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)

    gtr.stellar_forge("kubejs:recursively_folded_negative_space")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "2x kubejs:macrowormhole_generator", "2x kubejs:temporal_matter")
        .itemOutputs("kubejs:recursively_folded_negative_space")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("kubejs:eigenfolded_kerr_manifold")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "kubejs:stabilized_wormhole_generator", "kubejs:recursively_folded_negative_space")
        .itemOutputs("kubejs:eigenfolded_kerr_manifold")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("kubejs:ctc_computational_unit")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "kubejs:eigenfolded_kerr_manifold", "kubejs:ctc_computational_unit_container")
        .itemOutputs("kubejs:ctc_computational_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    const fluids = ["argon", "helium", "nickel", "iron", "nitrogen", "oxygen", "mithril", "orichalcum", "enderium", "adamantium", "infuscolium", "echoite", "vibranium", "taranium_rich_liquid_helium_4", "legendarium", "heavy_quark_degenerate_matter", "starmetal", "quantumchromodynamically_confined_matter", "astraltitanium", "celestialtungsten"]
    fluids.forEach((fluid) => {
        gtr.plasma_condenser("gtceu:" + fluid + "_condenser")
            .inputFluids("gtceu:" + fluid + "_plasma 1000", "gtceu:liquid_helium 100000")
            .outputFluids("gtceu:" + fluid + " 1000", "gtceu:helium 100000")
            .circuit(1)
            .EUt(GTValues.VA[GTValues.UHV])
            .duration(600)
    })

    gtr.plasma_condenser("minecraft:iron_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:iron_plasma 144", "gtceu:liquid_helium 14400")
        .outputFluids("gtceu:helium 14400")
        .itemOutputs("minecraft:iron_ingot")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(50)

    gtr.plasma_condenser("gtceu:nickel_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:nickel_plasma 144", "gtceu:liquid_helium 14400")
        .outputFluids("gtceu:helium 14400")
        .itemOutputs("gtceu:nickel_ingot")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(50)

    const ingots = ["mithril", "orichalcum", "enderium", "adamantium", "infuscolium", "echoite", "vibranium", "legendarium", "heavy_quark_degenerate_matter", "starmetal", "quantumchromodynamically_confined_matter"]
    ingots.forEach((ingot) => {
        gtr.plasma_condenser("gtceu:" + ingot + "_ingot_condenser")
            .notConsumable("kubejs:ingot_field_shape")
            .inputFluids("gtceu:" + ingot + "_plasma 144", "gtceu:liquid_helium 14400")
            .outputFluids("gtceu:helium 14400")
            .itemOutputs("gtceu:hot_" + ingot + "_ingot")
            .EUt(GTValues.VA[GTValues.UHV])
            .duration(60)
    })

    gtr.plasma_condenser("gtceu:degenerate_rhenium")
        .itemInputs("kubejs:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:liquid_degenerate_rhenium 1000")
        .itemOutputs("kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)

    gtr.plasma_condenser("gtceu:draconiumawakened")
        .itemInputs("kubejs:draconiumawakened_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:draconiumawakened 1000")
        .itemOutputs("kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)

    gtr.plasma_condenser("kubejs:neutronium_sphere")
        .notConsumable("kubejs:ball_field_shape")
        .inputFluids("gtceu:liquid_helium 32000")
        .outputFluids("gtceu:helium 32000")
        .itemInputs("kubejs:neutron_plasma_containment_cell")
        .itemOutputs("4x kubejs:neutronium_sphere", "kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)

    gtr.plasma_condenser("kubejs:quantumchromodynamic_protective_plating")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:liquid_helium 10000", "gtceu:high_energy_quark_gluon_plasma 100")
        .outputFluids("gtceu:helium 10000")
        .itemOutputs("kubejs:quantumchromodynamic_protective_plating")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(300)

    gtr.plasma_condenser("gtceu:cosmicneutronium")
        .itemInputs("kubejs:cosmic_neutron_plasma_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:cosmicneutronium 1000")
        .itemOutputs("kubejs:extremely_durable_plasma_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)

    gtr.plasma_condenser("gtceu:crystalmatrix")
        .itemInputs("kubejs:crystalmatrix_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:crystalmatrix 1000")
        .itemOutputs("kubejs:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1000)

    gtr.plasma_condenser("gtceu:chaos")
        .itemInputs("kubejs:chaos_containment_unit")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:chaos 1000")
        .itemOutputs("kubejs:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    gtr.plasma_condenser("gtceu:hassium")
        .inputFluids("gtceu:metastable_hassium_plasma 1000", "gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:liquid_metastable_hassium 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)

    gtr.canner("kubejs:crystalmatrix_plasma_containment_cell")
        .notConsumable("gtceu:enderium_nanoswarm")
        .inputFluids("gtceu:crystalmatrix_plasma 1000")
        .itemInputs("kubejs:plasma_containment_cell")
        .itemOutputs("kubejs:crystalmatrix_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.extractor("gtceu:xpjuice")
        .itemInputs("minecraft:sculk")
        .outputFluids("gtceu:xpjuice 100")
        .EUt(120)
        .duration(20)

    const robots = [["uv", "1", "uhv", "1966080"], ["uhv", "2", "uev", "7864320"], ["uev", "3", "uiv", "31457280"], ["uiv", "4", "uxv", "125829120"], ["uxv", "5", "opv", "503316480"]]

    robots.forEach((robot) => {
        gtr.assembler("kubejs:precision_circuit_assembly_robot_mk" + robot[1])
            .itemInputs("2x gtceu:" + robot[0] + "_robot_arm", "gtceu:" + robot[0] + "_sensor", "4x #gtceu:circuits/" + robot[2], "gtceu:silver_nanoswarm", "2x gtceu:pikyonium_plate")
            .inputFluids("gtceu:soldering_alloy 1440")
            .itemOutputs("kubejs:precision_circuit_assembly_robot_mk" + robot[1])
            .EUt(robot[3])
            .duration(400)
    })

    event.shaped("kubejs:machine_casing_circuit_assembly_line", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:pikyonium_plate",
        B: "gtceu:hssg_gear",
        C: "gtceu:luv_robot_arm",
        D: "gtceu:ruridit_frame"
    })

    event.shaped("kubejs:aggregatione_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:attuned_tengam_ingot",
        B: "kubejs:infused_obsidian",
        D: "kubejs:magic_core"
    })

    event.shaped("kubejs:stabilizer_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:double_infuscolium_plate",
        B: "gtceu:long_neutronium_rod",
        D: "kubejs:time_dilation_containment_unit"
    })

    event.shaped("kubejs:dragon_stabilizer_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:double_draconium_plate",
        B: "gtceu:long_cosmicneutronium_rod",
        D: "kubejs:stabilizer_core"
    })

    gtr.macerator("kubejs:draconium_dust")
        .itemInputs("kubejs:draconium_block_charged")
        .itemOutputs("9x kubejs:draconium_dust", "gtceu:obsidian_dust", "gtceu:ender_eye_dust", "minecraft:redstone")
        .EUt(1920)
        .duration(400)

    gtr.alloy_smelter("kubejs:infused_obsidian")
        .itemInputs("kubejs:ender_obsidian", "kubejs:draconium_dust")
        .itemOutputs("kubejs:infused_obsidian")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.sps_crafting("kubejs:draconium_dust")
        .itemInputs("gtceu:netherrack_dust", "gtceu:endstone_dust")
        .inputFluids("gtceu:mana 1000", "gtceu:dragon_breath 10")
        .itemOutputs("kubejs:draconium_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.electromagnetic_separator("gtceu:purified_tengam_dust")
        .itemInputs("gtceu:clean_raw_tengam_dust")
        .itemOutputs("gtceu:purified_tengam_dust")
        .chancedOutput("gtceu:magnetic_neodymium_dust", 1000, 0)
        .chancedOutput("gtceu:magnetic_samarium_dust", 500, 0)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.electromagnetic_separator("gtceu:raw_tengam_dust")
        .itemInputs("gtceu:pure_jasper_dust")
        .itemOutputs("gtceu:jasper_dust")
        .chancedOutput("gtceu:raw_tengam_dust", 1000, 0)
        .chancedOutput("gtceu:raw_tengam_dust", 500, 0)
        .EUt(24)
        .duration(200)

    gtr.polarizer("gtceu:attuned_tengam_dust")
        .itemInputs("gtceu:purified_tengam_dust")
        .itemOutputs("gtceu:attuned_tengam_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.polarizer("gtceu:small_attuned_tengam_dust")
        .itemInputs("gtceu:small_purified_tengam_dust")
        .itemOutputs("gtceu:small_attuned_tengam_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.sps_crafting("gtceu:attuned_tengam_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .itemInputs("gtceu:attuned_tengam_dust")
        .inputFluids("gtceu:mana 1000")
        .itemOutputs("gtceu:attuned_tengam_ingot")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.ore_washer("gtceu:clean_raw_tengam_dust")
        .itemInputs("gtceu:raw_tengam_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("gtceu:clean_raw_tengam_dust")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtceu:attuned_tengam_ingot")
        .itemInputs("gtceu:attuned_tengam_dust", "gtceu:magnetic_samarium_dust")
        .inputFluids("gtceu:infuscolium_plasma 144", "gtceu:nitrogen_plasma 1000")
        .itemOutputs("gtceu:attuned_tengam_ingot")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)

    //bioware
    gtr.circuit_assembler("kubejs:bioware_circuit_board")
        .itemInputs("32x gtceu:wetware_circuit_board", "8x gtceu:petri_dish", "gtceu:uv_electric_pump", "2x gtceu:luv_sensor", "#gtceu:circuits/luv", "32x gtceu:vanadium_gallium_foil")
        .itemOutputs("32x kubejs:bioware_circuit_board")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.chemical_reactor("kubejs:bioware_printed_circuit_board")
        .itemInputs("kubejs:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:iron_iii_chloride 10000")
        .itemOutputs("kubejs:bioware_printed_circuit_board")
        .EUt(1920)
        .duration(2100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.chemical_reactor("kubejs:bioware_printed_circuit_board1")
        .itemInputs("kubejs:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:sodium_persulfate 20000")
        .itemOutputs("kubejs:bioware_printed_circuit_board")
        .EUt(1920)
        .duration(2100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.fluid_heater("gtceu:biohmediumsterilized")
        .inputFluids("gtceu:biomediumraw 100")
        .outputFluids("gtceu:biohmediumsterilized 100")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.incubator("gtceu:biomediumraw")
        .itemInputs("64x gtceu:stem_cells", "16x kubejs:tcetieseaweedextract", "gtceu:tritanium_dust")
        .inputFluids("gtceu:raw_growth_medium 1000")
        .outputFluids("gtceu:biomediumraw 1000")
        .EUt(1920)
        .duration(1200)

    gtr.incubator("gtceu:biomediumraw1")
        .itemInputs("64x kubejs:biological_cells", "16x kubejs:tcetieseaweedextract", "gtceu:tritanium_dust")
        .inputFluids("gtceu:raw_growth_medium 10000")
        .outputFluids("gtceu:biomediumraw 10000")
        .EUt(1920)
        .duration(1200)

    gtr.extractor("kubejs:tcetieseaweedextract")
        .itemInputs("64x kubejs:tcetiedandelions")
        .itemOutputs("kubejs:tcetieseaweedextract")
        .EUt(16)
        .duration(200)

    gtr.centrifuge("kubejs:tcetiedandelions")
        .inputFluids("gtceu:seaweedbroth 1000")
        .itemOutputs("64x kubejs:tcetiedandelions")
        .EUt(120)
        .duration(200)

    gtr.incubator("gtceu:seaweedbroth")
        .itemInputs("64x minecraft:kelp", "20x gtceu:alien_algae_dust", "8x gtceu:energium_dust", "gtceu:mithril_dust")
        .inputFluids("gtceu:unknownnutrientagar 50000", "gtceu:methane 50000")
        .outputFluids("gtceu:seaweedbroth 50000")
        .EUt(7680)
        .duration(4800)

    gtr.large_chemical_reactor("gtceu:unknownnutrientagar")
        .inputFluids("gtceu:unknowwater 4000", "gtceu:phthalic_acid 4000")
        .itemInputs("16x gtceu:salt_dust", "16x gtceu:meat_dust", "16x gtceu:agar_dust")
        .outputFluids("gtceu:unknownnutrientagar 8000")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.incubator("kubejs:biological_cells")
        .itemInputs("64x gtceu:stem_cells", "gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:mutagen 1000")
        .itemOutputs("64x kubejs:biological_cells")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)

    gtr.precision_assembler("kubejs:bioware_boule")
        .itemInputs("gtceu:neutronium_wafer", "16x kubejs:biological_cells", "gtceu:small_actinium_dust", "gtceu:small_strontium_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:lubricant 1000", "gtceu:nitrogen 10000")
        .itemOutputs("kubejs:bioware_boule")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.cutter("kubejs:bioware_chip")
        .itemInputs("kubejs:bioware_boule")
        .itemOutputs("16x kubejs:bioware_chip", "8x kubejs:biological_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("kubejs:smd_transistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "2x gtceu:germaniumtungstennitride_plate", "2x gtceu:silicon_carbide_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x kubejs:smd_transistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("kubejs:smd_capacitor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "8x gtceu:silicon_foil", "4x gtceu:naquadah_foil")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x kubejs:smd_capacitor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("kubejs:smd_resistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadria_plate", "gtceu:tritanium_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x kubejs:smd_resistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("kubejs:smd_diode_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:lutetium_dust", "gtceu:tritanium_dust")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x kubejs:smd_diode_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("kubejs:smd_inductor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadah_alloy_ring")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x kubejs:smd_inductor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.circuit_assembler("kubejs:bioware_processor")
        .itemInputs("kubejs:bioware_processing_core",
            "4x gtceu:qbit_cpu_chip",
            "gtceu:highly_advanced_soc",
            "8x kubejs:smd_capacitor_bioware",
            "8x kubejs:smd_transistor_bioware",
            "8x gtceu:fine_naquadah_wire")
        .itemOutputs("4x kubejs:bioware_processor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    const circuit_robots = [1, 2, 3, 4, 5]
    circuit_robots.forEach((circuit_robot) => {
        gtr.circuit_assembly_line("kubejs:bioware_assembly" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:bioware_printed_circuit_board",
                "2x kubejs:bioware_processor",
                "16x kubejs:smd_capacitor_bioware",
                "16x kubejs:smd_diode_bioware",
                "16x kubejs:smd_resistor_bioware",
                "16x kubejs:smd_transistor_bioware",
                "16x kubejs:smd_inductor_bioware",
                "16x gtceu:fine_naquadah_wire",
                "48x gtceu:ram_chip",
                "16x gtceu:polybenzimidazole_foil",
                "2x gtceu:duranium_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:americium 576", "gtceu:polyethylene 2592", "gtceu:enriched_naquadah 1296")
            .itemOutputs("2x kubejs:bioware_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 4 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:bioware_computer" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:bioware_printed_circuit_board",
                "2x kubejs:bioware_assembly",
                "32x kubejs:smd_capacitor_bioware",
                "32x kubejs:smd_diode_bioware",
                "32x kubejs:smd_resistor_bioware",
                "32x kubejs:smd_transistor_bioware",
                "32x kubejs:smd_inductor_bioware",
                "32x gtceu:fine_naquadah_wire",
                "64x gtceu:ram_chip",
                "32x gtceu:nor_memory_chip",
                "2x gtceu:uhpic_chip",
                "32x gtceu:polybenzimidazole_foil",
                "2x gtceu:neutronium_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:darmstadtium 576", "gtceu:polybenzimidazole 1296", "gtceu:enriched_naquadah 1296")
            .itemOutputs("kubejs:bioware_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 4 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:bioware_mainframe" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:neutronium_frame",
                "2x kubejs:bioware_computer",
                "64x kubejs:smd_capacitor_bioware",
                "64x kubejs:smd_diode_bioware",
                "64x kubejs:smd_resistor_bioware",
                "64x kubejs:smd_transistor_bioware",
                "64x kubejs:smd_inductor_bioware",
                "64x gtceu:ram_chip",
                "4x gtceu:uhpic_chip",
                "16x gtceu:ruthenium_trinium_americium_neutronate_double_wire",
                "64x gtceu:polybenzimidazole_foil",
                "gtceu:gravi_star",
                "2x gtceu:mithril_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:darmstadtium 1296", "gtceu:polybenzimidazole 2592", "gtceu:naquadria 1296")
            .itemOutputs("kubejs:bioware_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 4 / (4 ** circuit_robot))
    })

    //optical
    gtr.mass_fabricator("gtceu:quasifissioning_plasma")
        .inputFluids("gtceu:uranium 144")
        .itemInputs("gtceu:uranium_ingot")
        .outputFluids("gtceu:quasifissioning_plasma 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.decay_hastener("gtceu:flyb_plasma")
        .inputFluids("gtceu:quasifissioning_plasma 1000")
        .outputFluids("gtceu:flyb_plasma 1000")
        .EUt(122880)
        .duration(160)

    gtr.decay_hastener("gtceu:hafnium")
        .inputFluids("gtceu:ytterbium_178 144")
        .outputFluids("gtceu:hafnium 144")
        .EUt(30720)
        .duration(120)

    gtr.decay_hastener("gtceu:polonium_dust")
        .inputFluids("gtceu:bismuth 144")
        .itemOutputs("gtceu:polonium_dust")
        .EUt(480)
        .duration(8000)

    gtr.decay_hastener("gtceu:copper76_dust")
        .inputFluids("gtceu:copper 144")
        .itemOutputs("gtceu:copper76_dust")
        .EUt(1920)
        .duration(4000)

    gtr.centrifuge("gtceu:flerovium")
        .inputFluids("gtceu:flyb_plasma 1000")
        .outputFluids("gtceu:flerovium 288", "gtceu:ytterbium_178 288")
        .EUt(1920)
        .duration(290)

    gtr.assembler("kubejs:smd_transistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:nether_star_plate", "2x gtceu:molybdenum_disilicide_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x kubejs:smd_transistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_capacitor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:tritanium_foil")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x kubejs:smd_capacitor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_resistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "3x gtceu:sodium_seaborgate_dust", "2x gtceu:ender_eye_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x kubejs:smd_resistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_diode_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:vanadium_gallium_plate", "2x gtceu:beryllium_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x kubejs:smd_diode_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_inductor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "gtceu:quantanium_ring")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x kubejs:smd_inductor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)


    gtr.circuit_assembler("kubejs:optical_processor")
        .itemInputs("kubejs:optical_processing_core",
            "4x kubejs:optical_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x kubejs:smd_capacitor_optical",
            "8x kubejs:smd_transistor_optical",
            "8x gtceu:fine_dubnium_wire")
        .itemOutputs("4x kubejs:optical_processor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    circuit_robots.slice(1).forEach((circuit_robot) => {
        gtr.circuit_assembly_line("kubejs:optical_assembly" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:optical_printed_circuit_board",
                "2x kubejs:optical_processor",
                "16x kubejs:smd_capacitor_optical",
                "16x kubejs:smd_diode_optical",
                "16x kubejs:smd_resistor_optical",
                "16x kubejs:smd_transistor_optical",
                "16x kubejs:smd_inductor_optical",
                "16x gtceu:fine_dubnium_wire",
                "24x kubejs:optical_ram_chip",
                "8x gtceu:polyetheretherketone_foil",
                "2x gtceu:highurabilityompoundteel_plate")
            .inputFluids("gtceu:duranium 576", "gtceu:polyvinyl_chloride 1296", "gtceu:enriched_naquadah 1296")
            .itemOutputs("2x kubejs:optical_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 16 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:optical_computer" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:optical_printed_circuit_board",
                "2x kubejs:optical_assembly",
                "32x kubejs:smd_capacitor_optical",
                "32x kubejs:smd_diode_optical",
                "32x kubejs:smd_resistor_optical",
                "32x kubejs:smd_transistor_optical",
                "32x kubejs:smd_inductor_optical",
                "32x gtceu:fine_dubnium_wire",
                "32x kubejs:optical_ram_chip",
                "64x gtceu:nor_memory_chip",
                "64x gtceu:nand_memory_chip",
                "2x kubejs:nm_chip",
                "16x gtceu:polyetheretherketone_foil",
                "gtceu:gravi_star",
                "2x gtceu:seaborgium_plate")
            .inputFluids("gtceu:tritanium 576", "gtceu:polyetheretherketone 576", "gtceu:naquadria 1296")
            .itemOutputs("kubejs:optical_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 16 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:optical_mainframe" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:quantanium_frame",
                "2x kubejs:optical_computer",
                "64x kubejs:smd_capacitor_optical",
                "64x kubejs:smd_diode_optical",
                "64x kubejs:smd_resistor_optical",
                "64x kubejs:smd_transistor_optical",
                "64x kubejs:smd_inductor_optical",
                "64x kubejs:optical_ram_chip",
                "4x kubejs:nm_chip",
                "16x gtceu:enderite_double_wire",
                "32x gtceu:polyetheretherketone_foil",
                "2x gtceu:gravi_star",
                "2x gtceu:titansteel_plate")
            .inputFluids("gtceu:tritanium 1296", "gtceu:polyetheretherketone 1296", "gtceu:neutronium 576")
            .itemOutputs("kubejs:optical_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 16 / (4 ** circuit_robot))
    })

    //exotic
    gtr.assembler("kubejs:smd_transistor_exotic")
        .itemInputs("gtceu:degenerate_rhenium_plate", "gtceu:dubnium_plate", "2x gtceu:duranium_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x kubejs:smd_transistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_capacitor_exotic")
        .itemInputs("gtceu:glowstone_plate", "gtceu:quantum_plate", "2x gtceu:cinobite_foil", "2x gtceu:carbon_nanotubes_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x kubejs:smd_capacitor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_resistor_exotic")
        .itemInputs("4x gtceu:fine_cinobite_wire", "gtceu:quantum_dust", "2x gtceu:indium_tin_barium_titanium_cuprate_foil", "2x gtceu:enderite_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x kubejs:smd_resistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_diode_exotic")
        .itemInputs("gtceu:enderite_plate", "gtceu:trinium_titanium_plate", "2x gtceu:dubnium_foil", "2x gtceu:quantum_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x kubejs:smd_diode_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_inductor_exotic")
        .itemInputs("8x gtceu:fine_cinobite_wire", "gtceu:adamantium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x kubejs:smd_inductor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("kubejs:exotic_processor")
        .itemInputs("kubejs:exotic_processing_core",
            "4x kubejs:exotic_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x kubejs:smd_capacitor_exotic",
            "8x kubejs:smd_transistor_exotic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x kubejs:exotic_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    circuit_robots.slice(2).forEach((circuit_robot) => {
        gtr.circuit_assembly_line("kubejs:exotic_assembly" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:exotic_printed_circuit_board",
                "2x kubejs:exotic_processor",
                "16x kubejs:smd_capacitor_exotic",
                "16x kubejs:smd_diode_exotic",
                "16x kubejs:smd_resistor_exotic",
                "16x kubejs:smd_transistor_exotic",
                "16x kubejs:smd_inductor_exotic",
                "kubejs:draconic_core",
                "16x gtceu:fine_cinobite_wire",
                "24x kubejs:exotic_ram_chip",
                "16x gtceu:polyetheretherketone_foil",
                "2x gtceu:infuscolium_plate")
            .inputFluids("gtceu:tritanium 576", "gtceu:zylon 288", "gtceu:quantanium 288", "gtceu:naquadria 1296")
            .itemOutputs("2x kubejs:exotic_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 64 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:exotic_computer" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:exotic_printed_circuit_board",
                "2x kubejs:exotic_assembly",
                "32x kubejs:smd_capacitor_exotic",
                "32x kubejs:smd_diode_exotic",
                "32x kubejs:smd_resistor_exotic",
                "32x kubejs:smd_transistor_exotic",
                "32x kubejs:smd_inductor_exotic",
                "32x gtceu:fine_cinobite_wire",
                "32x kubejs:exotic_ram_chip",
                "64x gtceu:nor_memory_chip",
                "64x gtceu:nor_memory_chip",
                "2x kubejs:pm_chip",
                "32x gtceu:polyetheretherketone_foil",
                "kubejs:unstable_star",
                "2x gtceu:adamantine_plate")
            .inputFluids("gtceu:enderium 576", "gtceu:zylon 576", "gtceu:quantanium 576", "gtceu:orichalcum 1296")
            .itemOutputs("kubejs:exotic_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 64 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:exotic_mainframe" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:adamantium_frame",
                "2x kubejs:exotic_computer",
                "64x kubejs:smd_capacitor_exotic",
                "64x kubejs:smd_diode_exotic",
                "64x kubejs:smd_resistor_exotic",
                "64x kubejs:smd_transistor_exotic",
                "64x kubejs:smd_inductor_exotic",
                "64x kubejs:exotic_ram_chip",
                "16x gtceu:data_stick",
                "4x kubejs:pm_chip",
                "16x gtceu:echoite_double_wire",
                "64x gtceu:polyetheretherketone_foil",
                "2x kubejs:unstable_star",
                "2x gtceu:black_titanium_plate",
                "4x gtceu:double_technetium_plate")
            .inputFluids("gtceu:enderium 1296", "gtceu:zylon 1296", "gtceu:quantanium 1296", "gtceu:seaborgium 1296")
            .itemOutputs("kubejs:exotic_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 64 / (4 ** circuit_robot))
    })

    //cosmic
    gtr.assembler("kubejs:smd_transistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:degenerate_rhenium_plate", "gtceu:hassium_plate", "2x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x kubejs:smd_transistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_capacitor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:graphene_plate", "4x gtceu:taranium_foil", "2x gtceu:polycaprolactam_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x kubejs:smd_capacitor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_resistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:black_titanium_plate", "2x gtceu:superheavy_l_alloy_plate", "2x gtceu:naquadah_alloy_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x kubejs:smd_resistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_diode_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:abyssalalloy_plate", "2x gtceu:superheavy_h_alloy_plate", "2x gtceu:niobium_nitride_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x kubejs:smd_diode_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_inductor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "gtceu:vibranium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x kubejs:smd_inductor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("kubejs:cosmic_processor")
        .itemInputs("kubejs:cosmic_processing_core",
            "4x kubejs:cosmic_ram_chip",
            "gtceu:highly_advanced_soc",
            "16x kubejs:smd_capacitor_cosmic",
            "16x kubejs:smd_transistor_cosmic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x kubejs:cosmic_processor")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    circuit_robots.slice(3).forEach((circuit_robot) => {
        gtr.circuit_assembly_line("kubejs:cosmic_assembly" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:cosmic_printed_circuit_board",
                "2x kubejs:cosmic_processor",
                "32x kubejs:smd_capacitor_cosmic",
                "32x kubejs:smd_diode_cosmic",
                "32x kubejs:smd_resistor_cosmic",
                "32x kubejs:smd_transistor_cosmic",
                "32x kubejs:smd_inductor_cosmic",
                "kubejs:wyvern_core",
                "4x gtceu:enderite_single_wire",
                "24x kubejs:cosmic_ram_chip",
                "16x gtceu:zylon_foil",
                "2x gtceu:cinobite_plate")
            .inputFluids("gtceu:mithril 576", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:enriched_naquadah 576", "gtceu:adamantine 288")
            .itemOutputs("2x kubejs:cosmic_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 256 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:cosmic_computer" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("kubejs:cosmic_printed_circuit_board",
                "2x kubejs:cosmic_assembly",
                "64x kubejs:smd_capacitor_cosmic",
                "64x kubejs:smd_diode_cosmic",
                "64x kubejs:smd_resistor_cosmic",
                "64x kubejs:smd_transistor_cosmic",
                "64x kubejs:smd_inductor_cosmic",
                "8x gtceu:echoite_single_wire",
                "32x kubejs:cosmic_ram_chip",
                "32x kubejs:exotic_ram_chip",
                "64x gtceu:nor_memory_chip",
                "2x kubejs:fm_chip",
                "12x gtceu:fullerene_polymer_matrix_pulp_foil",
                "2x kubejs:unstable_star",
                "4x gtceu:double_trinium_titanium_plate")
            .inputFluids("gtceu:mithril 1296", "gtceu:fullerene_polymer_matrix_pulp 576", "gtceu:infuscolium 1296")
            .itemOutputs("kubejs:cosmic_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 256 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("kubejs:cosmic_mainframe" + circuit_robot)
            .notConsumable("kubejs:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:vibranium_frame",
                "2x kubejs:cosmic_computer",
                "64x kubejs:smd_capacitor_cosmic",
                "64x kubejs:smd_diode_cosmic",
                "64x kubejs:smd_resistor_cosmic",
                "64x kubejs:smd_transistor_cosmic",
                "64x kubejs:smd_inductor_cosmic",
                "64x kubejs:cosmic_ram_chip",
                "16x gtceu:data_orb",
                "4x kubejs:fm_chip",
                "16x gtceu:legendarium_double_wire",
                "64x gtceu:fullerene_polymer_matrix_pulp_foil",
                "4x kubejs:unstable_star",
                "16x kubejs:proto_matter",
                "8x gtceu:double_naquadriatictaranium_plate")
            .inputFluids("gtceu:taranium 576", "gtceu:trinium_titanium 1296", "gtceu:fullerene_polymer_matrix_pulp 1296", "gtceu:rareearth 1296")
            .itemOutputs("kubejs:cosmic_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 256 / (4 ** circuit_robot))
    })

    //supracausal
    gtr.assembler("kubejs:smd_capacitor_supracausal")
        .notConsumable("kubejs:microwormhole_generator")
        .itemInputs("gtceu:adamantine_plate")
        .itemOutputs("32x kubejs:smd_capacitor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_diode_supracausal")
        .notConsumable("kubejs:microwormhole_generator")
        .itemInputs("gtceu:vibramantium_plate")
        .itemOutputs("32x kubejs:smd_diode_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_transistor_supracausal")
        .notConsumable("kubejs:microwormhole_generator")
        .itemInputs("gtceu:neutronium_plate")
        .itemOutputs("32x kubejs:smd_transistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_resistor_supracausal")
        .notConsumable("kubejs:microwormhole_generator")
        .itemInputs("gtceu:fullerene_polymer_matrix_pulp_foil")
        .itemOutputs("32x kubejs:smd_resistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:smd_inductor_supracausal")
        .notConsumable("kubejs:microwormhole_generator")
        .itemInputs("gtceu:draconium_ring")
        .itemOutputs("32x kubejs:smd_inductor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("kubejs:supracausal_processor")
        .itemInputs("kubejs:supracausal_processing_core", "4x kubejs:supracausal_ram_chip", "16x kubejs:cosmic_processing_unit_core", "kubejs:microwormhole_generator", "kubejs:manifold_oscillatory_power_cell", "gtceu:crystalmatrix_plate")
        .itemOutputs("2x kubejs:supracausal_processor")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembly_line("kubejs:supracausal_assembly")
        .notConsumable("kubejs:precision_circuit_assembly_robot_mk5")
        .itemInputs("kubejs:supracausal_printed_circuit_board",
            "2x kubejs:supracausal_processor",
            "16x kubejs:smd_capacitor_supracausal",
            "16x kubejs:smd_diode_supracausal",
            "16x kubejs:smd_resistor_supracausal",
            "16x kubejs:smd_transistor_supracausal",
            "16x kubejs:smd_inductor_supracausal",
            "kubejs:awakened_core",
            "64x gtceu:fine_heavy_quark_degenerate_matter_wire",
            "16x gtceu:radox_foil",
            "8x gtceu:legendarium_single_wire",
            "8x kubejs:optical_soc",
            "kubejs:recursively_folded_negative_space",
            "kubejs:contained_exotic_matter",
            "16x gtceu:trinium_titanium_plate")
        .inputFluids("gtceu:taranium 432", "gtceu:trinium_titanium 1296", "gtceu:adamantine 576", "gtceu:fullerene_polymer_matrix_pulp 2304")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("kubejs:supracausal_assembly")
        .duration(200)

    gtr.circuit_assembly_line("kubejs:supracausal_computer")
        .notConsumable("kubejs:precision_circuit_assembly_robot_mk5")
        .itemInputs("kubejs:supracausal_printed_circuit_board",
            "2x kubejs:supracausal_assembly",
            "32x kubejs:smd_capacitor_supracausal",
            "32x kubejs:smd_diode_supracausal",
            "32x kubejs:smd_resistor_supracausal",
            "32x kubejs:smd_transistor_supracausal",
            "32x kubejs:smd_inductor_supracausal",
            "32x kubejs:supracausal_ram_chip",
            "16x gtceu:data_module",
            "32x gtceu:trinium_titanium_plate",
            "64x gtceu:legendarium_single_wire",
            "16x gtceu:starmetal_plate",
            "kubejs:nuclear_star",
            "kubejs:eigenfolded_kerr_manifold",
            "4x gtceu:cosmicneutronium_plate")
        .inputFluids("gtceu:taranium 288", "gtceu:trinium_titanium 1296", "gtceu:adamantine 432", "gtceu:fullerene_polymer_matrix_pulp 864")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("kubejs:supracausal_computer")
        .duration(200)

    gtr.circuit_assembly_line("kubejs:supracausal_mainframe")
        .notConsumable("kubejs:precision_circuit_assembly_robot_mk5")
        .itemInputs("2x gtceu:infinity_frame",
            "2x kubejs:supracausal_computer",
            "64x kubejs:smd_capacitor_supracausal",
            "64x kubejs:smd_diode_supracausal",
            "64x kubejs:smd_resistor_supracausal",
            "64x kubejs:smd_transistor_supracausal",
            "64x kubejs:smd_inductor_supracausal",
            "64x gtceu:radox_plate",
            "64x gtceu:draconiumawakened_double_wire",
            "64x kubejs:cosmic_fabric",
            "32x kubejs:cosmic_processing_unit_core",
            "8x kubejs:ultrashort_pulse_laser",
            "2x kubejs:nuclear_star",
            "kubejs:ctc_computational_unit",
            "64x gtceu:quantumchromodynamically_confined_matter_plate")
        .inputFluids("gtceu:taranium 9216", "gtceu:adamantine 9216", "gtceu:fullerene_polymer_matrix_pulp 9216", "gtceu:periodicium 9216")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("kubejs:supracausal_mainframe")
        .duration(400)

    const tiers = [["ulv", 1], ["lv", 2], ["mv", 3], ["hv", 4], ["ev", 5], ["iv", 6], ["luv", 7], ["zpm", 8], ["uv", 9], ["uhv", 10], ["uev", 11], ["uiv", 12], ["uxv", 13], ["opv", 14], ["max", 15]]
    tiers.forEach((c) => {
        gtr.packer("kubejs:" + c[0] + "_universal_circuit")
            .itemInputs("#gtceu:circuits/" + c[0])
            .itemOutputs("kubejs:" + c[0] + "_universal_circuit")
            .EUt(7)
            .duration(2 ** c[1])
    })

    tiers.forEach((c) => {
        gtr.suprachronal_assembly_line("kubejs:suprachronal_" + c[0])
            .notConsumable("kubejs:hyperdimensional_drone")
            .itemInputs("kubejs:timepiece")
            .inputFluids("gtceu:spacetime " + c[1], "gtceu:raw_star_matter_plasma " + c[1] * 10, "gtceu:uu_matter " + c[1] * 100, "gtceu:molten_periodicium " + c[1] * 100)
            .itemOutputs("kubejs:suprachronal_" + c[0])
            .duration(2 * c[1])
            .circuit(c[1])
            .EUt(GTValues.VA[GTValues.MAX])
            .stationResearch(b => b.researchStack(Item.of(c[1] == 1 ? "kubejs:supracausal_mainframe" : "kubejs:suprachronal_" + tiers[c[1] - 2][0]))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(GTValues.VA[GTValues.MAX])
                .CWUt(8192))
    })

    gtr.autoclave("kubejs:unstable_star")
        .notConsumable("gtceu:orichalcum_nanoswarm")
        .itemInputs("gtceu:gravi_star")
        .inputFluids("gtceu:adamantine 288")
        .itemOutputs("kubejs:unstable_star")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(480)

    gtr.autoclave("kubejs:nuclear_star")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("kubejs:unstable_star")
        .inputFluids("gtceu:infinity 288")
        .itemOutputs("kubejs:nuclear_star")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(480)

    gtr.suprachronal_assembly_line("gtceu:max_electric_motor")
        .itemInputs("gtceu:long_magmatter_rod",
            "8x gtceu:long_transcendentmetal_rod",
            "8x gtceu:transcendentmetal_ring",
            "16x gtceu:transcendentmetal_round",
            "64x gtceu:fine_black_dwarf_mtter_wire",
            "64x gtceu:fine_black_dwarf_mtter_wire",
            "64x gtceu:fine_white_dwarf_mtter_wire",
            "64x gtceu:fine_white_dwarf_mtter_wire",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 500 * 32, "gtceu:soldering_alloy " + 1000 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_electric_motor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_electric_motor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtceu:max_electric_pump")
        .itemInputs("gtceu:max_electric_motor",
            "64x gtceu:neutronium_small_fluid_pipe",
            "4x gtceu:transcendentmetal_plate",
            "16x gtceu:transcendentmetal_screw",
            "4x gtceu:double_black_dwarf_mtter_plate",
            "4x gtceu:double_white_dwarf_mtter_plate",
            "gtceu:transcendentmetal_rotor",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_electric_pump")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_electric_pump"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtceu:max_conveyor_module")
        .itemInputs("2x gtceu:max_electric_motor",
            "4x gtceu:transcendentmetal_plate",
            "8x gtceu:transcendentmetal_ring",
            "32x gtceu:transcendentmetal_round",
            "8x gtceu:transcendentmetal_screw",
            "8x gtceu:white_dwarf_mtter_plate",
            "8x gtceu:black_dwarf_mtter_plate",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:styrene_butadiene_rubber " + 1152 * (3 + 32), "gtceu:infinity 576")
        .itemOutputs("gtceu:max_conveyor_module")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_conveyor_module"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtceu:max_electric_piston")
        .itemInputs("gtceu:max_electric_motor",
            "8x gtceu:transcendentmetal_plate",
            "8x gtceu:transcendentmetal_ring",
            "32x gtceu:transcendentmetal_round",
            "8x gtceu:transcendentmetal_rod",
            "2x gtceu:transcendentmetal_gear",
            "4x gtceu:small_transcendentmetal_gear",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_electric_piston")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_electric_piston"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtceu:max_robot_arm")
        .itemInputs("8x gtceu:long_transcendentmetal_rod",
            "2x gtceu:transcendentmetal_gear",
            "6x gtceu:small_transcendentmetal_gear",
            "4x gtceu:max_electric_motor",
            "gtceu:max_electric_piston",
            "#gtceu:circuits/max",
            "2x #gtceu:circuits/opv",
            "4x #gtceu:circuits/uxv",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_robot_arm")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_robot_arm"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtceu:max_emitter")
        .itemInputs("gtceu:infinity_frame",
            "gtceu:max_electric_motor",
            "8x gtceu:long_transcendentmetal_rod",
            "4x kubejs:nuclear_star",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "32x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_emitter")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_emitter"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtceu:max_sensor")
        .itemInputs("gtceu:infinity_frame",
            "gtceu:max_electric_motor",
            "8x gtceu:transcendentmetal_plate",
            "4x kubejs:nuclear_star",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:shirabon_foil",
            "64x gtceu:cosmic_foil",
            "32x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_sensor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_sensor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtceu:max_field_generator")
        .itemInputs("gtceu:infinity_frame",
            "12x gtceu:chaos_plate",
            "4x kubejs:nuclear_star",
            "2x gtceu:max_emitter",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:shirabon_foil",
            "64x gtceu:cosmic_foil",
            "32x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtceu:max_field_generator")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:opv_field_generator"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.assembler_module("kubejs:space_probe_mk1")
        .itemInputs("gtceu:energy_module",
            "4x gtceu:data_module",
            "2x gtceu:uiv_emitter",
            "2x gtceu:uiv_sensor",
            "gtceu:uiv_field_generator",
            "4x gtceu:adamantium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("kubejs:space_probe_mk1")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .CWUt(512)

    gtr.assembler_module("kubejs:space_probe_mk2")
        .itemInputs("gtceu:energy_cluster",
            "16x gtceu:data_module",
            "2x gtceu:uxv_emitter",
            "2x gtceu:uxv_sensor",
            "gtceu:uxv_field_generator",
            "4x gtceu:vibranium_plate",
            "8x gtceu:celestialtungsten_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("kubejs:space_probe_mk2")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .CWUt(1024)

    gtr.assembler_module("kubejs:space_probe_mk3")
        .itemInputs("gtceu:max_battery",
            "64x gtceu:data_module",
            "2x gtceu:opv_emitter",
            "2x gtceu:opv_sensor",
            "gtceu:opv_field_generator",
            "gtceu:cosmicneutronium_nanoswarm",
            "4x gtceu:draconium_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:mutated_living_solder 2880", "gtceu:lubricant 5760", "gtceu:cosmicneutronium 1296")
        .itemOutputs("kubejs:space_probe_mk3")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)
        .CWUt(2048)

    gtr.assembler_module("kubejs:space_drone_mk1")
        .itemInputs("gtceu:titanium_drill_head",
            "4x gtceu:ev_vanadium_battery",
            "4x #gtceu:circuits/uv",
            "ae2:wireless_receiver",
            "gtceu:uv_electric_pump",
            "gtceu:uv_electric_piston",
            "2x gtceu:uv_electric_motor",
            "2x gtceu:uv_conveyor_module",
            "2x gtceu:uv_robot_arm",
            "gtceu:uv_sensor",
            "gtceu:uv_emitter",
            "4x gtceu:tritanium_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:darmstadtium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:manganese 2880", "gtceu:potin 2880", "gtceu:ultimet 2880")
        .itemOutputs("kubejs:space_drone_mk1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .CWUt(64)

    gtr.assembler_module("kubejs:space_drone_mk2")
        .itemInputs("gtceu:ultimet_drill_head",
            "16x gtceu:ev_vanadium_battery",
            "4x #gtceu:circuits/uhv",
            "ae2:wireless_receiver",
            "gtceu:uhv_electric_pump",
            "gtceu:uhv_electric_piston",
            "2x gtceu:uhv_electric_motor",
            "2x gtceu:uhv_conveyor_module",
            "2x gtceu:uhv_robot_arm",
            "gtceu:uhv_sensor",
            "gtceu:uhv_emitter",
            "4x gtceu:abyssalalloy_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:neutronium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:steel 2880", "gtceu:electrum 2880", "gtceu:vanadium_steel 2880")
        .itemOutputs("kubejs:space_drone_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .CWUt(128)

    gtr.assembler_module("kubejs:space_drone_mk3")
        .itemInputs("gtceu:hsse_drill_head",
            "4x gtceu:iv_vanadium_battery",
            "4x #gtceu:circuits/uev",
            "ae2:wireless_receiver",
            "gtceu:uev_electric_pump",
            "gtceu:uev_electric_piston",
            "2x gtceu:uev_electric_motor",
            "2x gtceu:uev_conveyor_module",
            "2x gtceu:uev_robot_arm",
            "gtceu:uev_sensor",
            "gtceu:uev_emitter",
            "4x gtceu:titansteel_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:quantanium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:yttrium 2880", "gtceu:blue_alloy 2880", "gtceu:rtm_alloy 2880")
        .itemOutputs("kubejs:space_drone_mk3")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .CWUt(256)

    gtr.assembler_module("kubejs:space_drone_mk4")
        .itemInputs("gtceu:naquadah_alloy_drill_head",
            "16x gtceu:iv_vanadium_battery",
            "4x #gtceu:circuits/uiv",
            "ae2:wireless_receiver",
            "gtceu:uiv_electric_pump",
            "gtceu:uiv_electric_piston",
            "2x gtceu:uiv_electric_motor",
            "2x gtceu:uiv_conveyor_module",
            "2x gtceu:uiv_robot_arm",
            "gtceu:uiv_sensor",
            "gtceu:uiv_emitter",
            "4x gtceu:adamantine_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:adamantium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:bohrium 2880", "gtceu:tungsten_carbide 2880", "gtceu:rhodium_plated_palladium 2880e")
        .itemOutputs("kubejs:space_drone_mk4")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .CWUt(512)

    gtr.assembler_module("kubejs:space_drone_mk5")
        .itemInputs("gtceu:duranium_drill_head",
            "4x gtceu:luv_vanadium_battery",
            "4x #gtceu:circuits/uxv",
            "ae2:wireless_receiver",
            "gtceu:uxv_electric_pump",
            "gtceu:uxv_electric_piston",
            "2x gtceu:uxv_electric_motor",
            "2x gtceu:uxv_conveyor_module",
            "2x gtceu:uxv_robot_arm",
            "gtceu:uxv_sensor",
            "gtceu:uxv_emitter",
            "4x gtceu:naquadriatictaranium_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:vibranium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:meitnerium 2880", "gtceu:black_bronze 2880", "gtceu:hssg 2880")
        .itemOutputs("kubejs:space_drone_mk5")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .CWUt(1024)

    gtr.assembler_module("kubejs:space_drone_mk6")
        .itemInputs("gtceu:neutronium_drill_head",
            "16x gtceu:luv_vanadium_battery",
            "4x #gtceu:circuits/opv",
            "ae2:wireless_receiver",
            "gtceu:opv_electric_pump",
            "gtceu:opv_electric_piston",
            "2x gtceu:opv_electric_motor",
            "2x gtceu:opv_conveyor_module",
            "2x gtceu:opv_robot_arm",
            "gtceu:opv_sensor",
            "gtceu:opv_emitter",
            "4x gtceu:starmetal_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:draconium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:livermorium 2880", "gtceu:sterling_silver 2880", "gtceu:titanium_tungsten_carbide 2880")
        .itemOutputs("kubejs:space_drone_mk6")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)
        .CWUt(2048)

    function space_probe(material, grade, amount, circuit) {
        gtr.space_probe_surface_reception(material + grade)
            .notConsumable("kubejs:space_probe_mk" + grade)
            .outputFluids(material + " " + amount)
            .EUt(GTValues.VA[GTValues.UEV] * (4 ** grade))
            .duration(200)
            .circuit(circuit)
            .CWUt(64 * (2 ** circuit))
    }
    space_probe("gtceu:starlight", 2, 1000, 2)
    space_probe("gtceu:starlight", 3, 10000, 2)
    space_probe("gtceu:heavy_lepton_mixture", 1, 100, 1)
    space_probe("gtceu:heavy_lepton_mixture", 2, 1000, 1)
    space_probe("gtceu:heavy_lepton_mixture", 3, 10000, 1)
    space_probe("gtceu:cosmic_element", 3, 10000, 3)

    const fishing = [
        ["minecraft:cod", 51],
        ["minecraft:salmon", 21.3],
        ["minecraft:tropical_fish", 1.7],
        ["minecraft:pufferfish", 11.1],
        [Item.of("minecraft:bow", "{Damage:100}").weakNBT(), 0.8],
        ["minecraft:experience_bottle", 0.8],
        ["minecraft:name_tag", 0.8],
        ["minecraft:nautilus_shell", 0.8],
        ["minecraft:saddle", 0.8],
        ["minecraft:lily_pad", 1.7],
        ["minecraft:bowl", 1],
        [Item.of("minecraft:fishing_rod", "{Damage:30,RepairCost:3}").enchant("minecraft:luck_of_the_sea", 2).enchant("minecraft:lure", 2).weakNBT(), 0.2],
        ["minecraft:leather", 1],
        ["minecraft:rotten_flesh", 1],
        ["minecraft:stick", 0.5],
        ["minecraft:string", 0.5],
        ["minecraft:potion", 1],
        ["minecraft:bone", 1],
        ["gtceu:damascus_steel_nugget", 0.05],
        ["minecraft:ink_sac", 0.1],
        ["minecraft:tripwire_hook", 1],
        ["gtceu:ancient_gold_coin", 0.024],
        ["avaritia:neutron_pile", 0.019],
        ["kubejs:zero_point_module_fragments", 0.012]
    ]
    const a = [[1, 1], [2, 1.1], [3, 1.2], [4, 1.8]]
    a.forEach((fish) => {
        let recipe = gtr.fishing_ground("fishing" + fish[0])
            .notConsumable((4 ** fish[0]) / 4 + "x minecraft:fishing_rod")
            .circuit(fish[0])
            .EUt(30)
            .duration(200)
        fishing.forEach(item => {
            recipe.chancedOutput(item[0], (100 * item[1]) * fish[1], 0)
        })
    })
    gtr.packer("gtceu:zero_point_module")
        .itemInputs("64x kubejs:zero_point_module_fragments")
        .itemOutputs(Item.of("gtceu:zero_point_module", "{Charge:2000000000000L}").weakNBT())
        .EUt(120)
        .duration(2000)

    gtr.fishing_ground("fishing_ground1")
        .notConsumable("64x minecraft:cod")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:cod")
        .EUt(1)
        .duration(2000)

    gtr.fishing_ground("fishing_ground2")
        .notConsumable("64x minecraft:salmon")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:salmon")
        .EUt(1)
        .duration(2000)

    gtr.fishing_ground("fishing_ground3")
        .notConsumable("64x minecraft:tropical_fish")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:tropical_fish")
        .EUt(1)
        .duration(2000)

    gtr.fishing_ground("fishing_ground4")
        .notConsumable("64x minecraft:pufferfish")
        .itemInputs("64x gtceu:tiny_meat_dust")
        .itemOutputs("32x minecraft:pufferfish")
        .EUt(1)
        .duration(2000)

    gtr.gas_collector("void")
        .outputFluids("gtceu:air 10000")
        .EUt(16)
        .circuit(4)
        .duration(200)
        .dimension("kubejs:void")

    gtr.gas_collector("flat")
        .outputFluids("gtceu:air 10000")
        .EUt(16)
        .circuit(5)
        .duration(200)
        .dimension("kubejs:flat")

    gtr.gas_collector("barnarda")
        .outputFluids("gtceu:barnarda_air 10000")
        .EUt(1024)
        .circuit(6)
        .duration(200)
        .dimension("kubejs:barnarda")

    gtr.mixer("gtceu:aluminium_bronze_dust")
        .itemInputs("gtceu:aluminium_dust", "6x gtceu:bronze_dust")
        .itemOutputs("7x gtceu:aluminium_bronze_dust")
        .EUt(30)
        .circuit(1)
        .duration(400)

    gtr.cosmos_simulation("cosmos_simulation1")
        .itemInputs("kubejs:quantum_chromodynamic_charge")
        .itemOutputs("131072x gtceu:carbon_dust",
            "131072x gtceu:phosphorus_dust",
            "131072x gtceu:sulfur_dust",
            "131072x gtceu:selenium_dust",
            "131072x gtceu:iodine_dust",
            "131072x gtceu:boron_dust",
            "131072x gtceu:silicon_dust",
            "131072x gtceu:germanium_dust",
            "131072x gtceu:arsenic_dust",
            "131072x gtceu:antimony_dust",
            "131072x gtceu:tellurium_dust",
            "131072x gtceu:astatine_dust",
            "131072x gtceu:aluminium_dust",
            "131072x gtceu:gallium_dust",
            "131072x gtceu:indium_dust",
            "131072x gtceu:tin_dust",
            "131072x gtceu:thallium_dust",
            "131072x gtceu:lead_dust",
            "131072x gtceu:bismuth_dust",
            "131072x gtceu:polonium_dust",
            "131072x gtceu:titanium_dust",
            "131072x gtceu:vanadium_dust",
            "131072x gtceu:chromium_dust",
            "131072x gtceu:manganese_dust",
            "131072x gtceu:iron_dust",
            "131072x gtceu:cobalt_dust",
            "131072x gtceu:nickel_dust",
            "131072x gtceu:copper_dust",
            "131072x gtceu:zinc_dust",
            "131072x gtceu:zirconium_dust",
            "131072x gtceu:niobium_dust",
            "131072x gtceu:molybdenum_dust",
            "131072x gtceu:technetium_dust",
            "131072x gtceu:ruthenium_dust",
            "131072x gtceu:rhodium_dust",
            "131072x gtceu:palladium_dust",
            "131072x gtceu:silver_dust",
            "131072x gtceu:cadmium_dust",
            "131072x gtceu:hafnium_dust",
            "131072x gtceu:tantalum_dust",
            "131072x gtceu:tungsten_dust",
            "131072x gtceu:rhenium_dust",
            "131072x gtceu:osmium_dust",
            "131072x gtceu:iridium_dust",
            "131072x gtceu:platinum_dust",
            "131072x gtceu:gold_dust",
            "131072x gtceu:beryllium_dust",
            "131072x gtceu:magnesium_dust",
            "131072x gtceu:calcium_dust",
            "131072x gtceu:strontium_dust",
            "131072x gtceu:barium_dust",
            "131072x gtceu:radium_dust",
            "131072x gtceu:yttrium_dust",
            "131072x gtceu:lithium_dust",
            "131072x gtceu:sodium_dust",
            "131072x gtceu:potassium_dust",
            "131072x gtceu:rubidium_dust",
            "131072x gtceu:caesium_dust",
            "131072x gtceu:francium_dust",
            "131072x gtceu:scandium_dust",
            "131072x gtceu:actinium_dust",
            "131072x gtceu:thorium_dust",
            "131072x gtceu:protactinium_dust",
            "131072x gtceu:uranium_dust",
            "131072x gtceu:neptunium_dust",
            "131072x gtceu:plutonium_dust",
            "131072x gtceu:americium_dust",
            "131072x gtceu:curium_dust",
            "131072x gtceu:berkelium_dust",
            "131072x gtceu:californium_dust",
            "131072x gtceu:einsteinium_dust",
            "131072x gtceu:fermium_dust",
            "131072x gtceu:mendelevium_dust",
            "131072x gtceu:nobelium_dust",
            "131072x gtceu:lawrencium_dust",
            "131072x gtceu:lanthanum_dust",
            "131072x gtceu:cerium_dust",
            "131072x gtceu:praseodymium_dust",
            "131072x gtceu:neodymium_dust",
            "131072x gtceu:promethium_dust",
            "131072x gtceu:samarium_dust",
            "131072x gtceu:europium_dust",
            "131072x gtceu:gadolinium_dust",
            "131072x gtceu:terbium_dust",
            "131072x gtceu:dysprosium_dust",
            "131072x gtceu:holmium_dust",
            "131072x gtceu:erbium_dust",
            "131072x gtceu:thulium_dust",
            "131072x gtceu:ytterbium_dust",
            "131072x gtceu:lutetium_dust",
            "131072x gtceu:rutherfordium_dust",
            "131072x gtceu:dubnium_dust",
            "131072x gtceu:seaborgium_dust",
            "131072x gtceu:bohrium_dust",
            "131072x gtceu:hassium_dust",
            "131072x gtceu:meitnerium_dust",
            "131072x gtceu:darmstadtium_dust",
            "131072x gtceu:roentgenium_dust",
            "131072x gtceu:copernicium_dust",
            "131072x gtceu:nihonium_dust",
            "131072x gtceu:flerovium_dust",
            "131072x gtceu:moscovium_dust",
            "131072x gtceu:livermorium_dust",
            "131072x gtceu:tennessine_dust",
            "131072x gtceu:oganesson_dust",
            "131072x gtceu:jasper_dust",
            "131072x gtceu:naquadah_dust",
            "131072x gtceu:enriched_naquadah_dust",
            "131072x gtceu:naquadria_dust",
            "131072x gtceu:duranium_dust",
            "131072x gtceu:tritanium_dust",
            "131072x gtceu:mithril_dust",
            "131072x gtceu:orichalcum_dust",
            "131072x gtceu:enderium_dust",
            "131072x gtceu:adamantine_dust",
            "131072x gtceu:vibranium_dust",
            "131072x gtceu:infuscolium_dust",
            "131072x gtceu:taranium_dust",
            "131072x gtceu:draconium_dust",
            "131072x gtceu:starmetal_dust")
        .outputFluids("gtceu:spacetime 256",
            "gtceu:raw_star_matter_plasma 1310720",
            "gtceu:quark_gluon_plasma 1310720",
            "gtceu:heavy_quark_degenerate_matter_plasma 1310720",
            "gtceu:neutronium 13107200",
            "gtceu:heavy_lepton_mixture 13107200",
            "gtceu:hydrogen 131072000",
            "gtceu:nitrogen 131072000",
            "gtceu:oxygen 131072000",
            "gtceu:fluorine 131072000",
            "gtceu:chlorine 131072000",
            "gtceu:bromine 131072000",
            "gtceu:helium 131072000",
            "gtceu:neon 131072000",
            "gtceu:argon 131072000",
            "gtceu:krypton 131072000",
            "gtceu:xenon 131072000",
            "gtceu:radon 131072000",
            "gtceu:mercury 131072000",
            "gtceu:deuterium 131072000",
            "gtceu:tritium 131072000",
            "gtceu:helium_3 131072000",
            "gtceu:unknowwater 131072000",
            "gtceu:uu_matter 131072000")
        .duration(1200)
        .inputFluids("gtceu:cosmic_element 1024000")

    const circuit_board = [["gtceu:polyethylene_plate", 1], ["gtceu:polyvinyl_chloride_plate", 2], ["gtceu:polytetrafluoroethylene_plate", 4], ["gtceu:polybenzimidazole_plate", 8]]
    circuit_board.forEach((board) => {
        gtr.pcb_factory(board[0])
            .itemInputs("8x " + board[0], (32 + 32 * board[1]) + "x gtceu:copper_foil")
            .inputFluids("gtceu:sulfuric_acid " + 1000 * board[1], "gtceu:iron_iii_chloride " + 500 * board[1])
            .itemOutputs(8 * board[1] + "x gtceu:plastic_printed_circuit_board")
            .EUt(120)
            .duration(400 * board[1])

        gtr.pcb_factory(board[0] + 1)
            .itemInputs("8x " + board[0], (32 + 32 * board[1]) + "x gtceu:copper_foil")
            .inputFluids("gtceu:sulfuric_acid " + 1000 * board[1], "gtceu:sodium_persulfate " + 1000 * board[1])
            .itemOutputs(8 * board[1] + "x gtceu:plastic_printed_circuit_board")
            .EUt(120)
            .duration(400 * board[1])
    })

    gtr.pcb_factory("gtceu:epoxy_printed_circuit_board")
        .itemInputs("8x gtceu:epoxy_plate", "128x gtceu:electrum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("8x gtceu:epoxy_printed_circuit_board")
        .EUt(120)
        .duration(600)

    gtr.pcb_factory("gtceu:epoxy_printed_circuit_board1")
        .itemInputs("8x gtceu:epoxy_plate", "128x gtceu:electrum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:sodium_persulfate 2000")
        .itemOutputs("8x gtceu:epoxy_printed_circuit_board")
        .EUt(120)
        .duration(600)

    gtr.pcb_factory("gtceu:fiber_reinforced_printed_circuit_board")
        .itemInputs("8x gtceu:reinforced_epoxy_resin_plate", "160x gtceu:annealed_copper_foil")
        .inputFluids("gtceu:sulfuric_acid 500", "gtceu:iron_iii_chloride 2000")
        .itemOutputs("8x gtceu:fiber_reinforced_printed_circuit_board")
        .EUt(120)
        .duration(800)

    gtr.pcb_factory("gtceu:fiber_reinforced_printed_circuit_board1")
        .itemInputs("8x gtceu:reinforced_epoxy_resin_plate", "160x gtceu:annealed_copper_foil")
        .inputFluids("gtceu:sulfuric_acid 500", "gtceu:sodium_persulfate 4000")
        .itemOutputs("8x gtceu:fiber_reinforced_printed_circuit_board")
        .EUt(120)
        .duration(800)

    gtr.pcb_factory("gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .itemInputs("16x gtceu:fiber_reinforced_circuit_board", "128x gtceu:platinum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("8x gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .EUt(480)
        .duration(800)

    gtr.pcb_factory("gtceu:multilayer_fiber_reinforced_printed_circuit_board1")
        .itemInputs("16x gtceu:fiber_reinforced_circuit_board", "128x gtceu:platinum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:sodium_persulfate 8000")
        .itemOutputs("8x gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .EUt(480)
        .duration(800)

    gtr.pcb_factory("gtceu:wetware_printed_circuit_board")
        .itemInputs("gtceu:wetware_circuit_board", "32x gtceu:niobium_titanium_foil")
        .inputFluids("gtceu:sodium_persulfate 1000", "gtceu:iron_iii_chloride 500")
        .itemOutputs("gtceu:wetware_printed_circuit_board")
        .EUt(1920)
        .duration(450)

    gtr.pcb_factory("kubejs:bioware_printed_circuit_board")
        .itemInputs("kubejs:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:sodium_persulfate 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("kubejs:bioware_printed_circuit_board")
        .EUt(7680)
        .duration(525)

    gtr.pcb_factory("kubejs:optical_circuit_board")
        .itemInputs("gtceu:kevlar_plate", "32x gtceu:rhodium_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:mithril_plasma 100")
        .itemOutputs("kubejs:optical_circuit_board")
        .EUt(7680 * 4)
        .duration(600)

    gtr.pcb_factory("kubejs:optical_printed_circuit_board")
        .itemInputs("kubejs:optical_circuit_board", "32x gtceu:ruthenium_foil")
        .inputFluids("gtceu:sodium_persulfate 4000", "gtceu:iron_iii_chloride 2000")
        .itemOutputs("kubejs:optical_printed_circuit_board")
        .EUt(7680 * 4)
        .duration(600)

    gtr.pcb_factory("kubejs:exotic_circuit_board")
        .itemInputs("2x gtceu:kevlar_plate", "32x gtceu:enderium_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:vibranium_plasma 100")
        .itemOutputs("kubejs:exotic_circuit_board")
        .EUt(7680 * 16)
        .duration(900)

    gtr.pcb_factory("kubejs:exotic_printed_circuit_board")
        .itemInputs("kubejs:exotic_circuit_board", "32x gtceu:americium_foil")
        .inputFluids("gtceu:sodium_persulfate 8000", "gtceu:iron_iii_chloride 4000")
        .itemOutputs("kubejs:exotic_printed_circuit_board")
        .EUt(7680 * 16)
        .duration(900)

    gtr.pcb_factory("kubejs:cosmic_circuit_board")
        .itemInputs("4x gtceu:kevlar_plate", "32x gtceu:heavy_quark_degenerate_matter_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:metastable_hassium_plasma 100")
        .itemOutputs("kubejs:cosmic_circuit_board")
        .EUt(7680 * 64)
        .duration(1200)

    gtr.pcb_factory("kubejs:cosmic_printed_circuit_board")
        .itemInputs("kubejs:cosmic_circuit_board", "32x gtceu:uruium_foil")
        .inputFluids("gtceu:sodium_persulfate 8000", "gtceu:iron_iii_chloride 4000")
        .itemOutputs("kubejs:cosmic_printed_circuit_board")
        .EUt(7680 * 64)
        .duration(1200)

    gtr.pcb_factory("kubejs:supracausal_circuit_board")
        .itemInputs("kubejs:cosmic_circuit_board", "32x gtceu:echoite_foil")
        .inputFluids("gtceu:dense_neutron_plasma 1000", "gtceu:quantumchromodynamically_confined_matter_plasma 100")
        .itemOutputs("kubejs:supracausal_circuit_board")
        .EUt(7680 * 256)
        .duration(1500)

    gtr.pcb_factory("kubejs:supracausal_printed_circuit_board")
        .itemInputs("kubejs:supracausal_circuit_board", "32x gtceu:legendarium_foil")
        .inputFluids("gtceu:sodium_persulfate 16000", "gtceu:iron_iii_chloride 8000")
        .itemOutputs("kubejs:supracausal_printed_circuit_board")
        .EUt(7680 * 256)
        .duration(1500)

    gtr.large_gas_collector("1")
        .notConsumable("kubejs:overworld_data")
        .outputFluids("gtceu:air 100000")
        .circuit(1)
        .EUt(120)
        .duration(200)

    gtr.large_gas_collector("2")
        .notConsumable("2x kubejs:nether_data")
        .outputFluids("gtceu:nether_air 100000")
        .circuit(1)
        .EUt(480)
        .duration(200)

    gtr.large_gas_collector("3")
        .notConsumable("4x kubejs:end_data")
        .outputFluids("gtceu:ender_air 100000")
        .circuit(1)
        .EUt(1920)
        .duration(200)

    gtr.large_gas_collector("4")
        .notConsumable("kubejs:overworld_data")
        .notConsumable("gtceu:vacuum_freezer")
        .outputFluids("gtceu:liquid_air 100000")
        .EUt(480)
        .duration(2000)

    gtr.large_gas_collector("5")
        .notConsumable("2x kubejs:nether_data")
        .notConsumable("gtceu:vacuum_freezer")
        .outputFluids("gtceu:liquid_nether_air 100000")
        .EUt(1920)
        .duration(2000)

    gtr.large_gas_collector("6")
        .notConsumable("4x kubejs:end_data")
        .notConsumable("gtceu:vacuum_freezer")
        .outputFluids("gtceu:liquid_ender_air 100000")
        .EUt(7680)
        .duration(2000)

    gtr.assembler("gtceu:large_gas_collector")
        .itemInputs("gtceu:mv_gas_collector", "gtceu:hv_gas_collector", "gtceu:ev_gas_collector", "2x gtceu:mv_field_generator", "2x gtceu:hv_field_generator", "2x gtceu:ev_field_generator", "2x #gtceu:circuits/luv", "gtceu:iridium_huge_fluid_pipe", "4x gtceu:double_sterling_silver_plate")
        .itemOutputs("gtceu:large_gas_collector")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtceu:large_incubator")
        .itemInputs("gtceu:incubator", "4x gtceu:luv_field_generator", "4x gtceu:luv_sensor", "4x gtceu:luv_fluid_regulator", "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire", "16x gtceu:laminated_glass")
        .itemOutputs("gtceu:large_incubator")
        .inputFluids("gtceu:polytetrafluoroethylene 1440")
        .EUt(122880)
        .duration(800)

    gtr.cutter("kubejs:taranium_wafer")
        .itemInputs("kubejs:taranium_boule")
        .itemOutputs("64x kubejs:taranium_wafer", "64x kubejs:taranium_wafer")
        .EUt(122880)
        .duration(3200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:rutherfordium_neutronium_wafer")
        .itemInputs("kubejs:rutherfordium_neutronium_boule")
        .itemOutputs("64x kubejs:rutherfordium_neutronium_wafer", "32x kubejs:rutherfordium_neutronium_wafer")
        .EUt(30720)
        .duration(3200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:nm_chip")
        .itemInputs("kubejs:nm_wafer")
        .itemOutputs("4x kubejs:nm_chip")
        .EUt(30720)
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:pm_chip")
        .itemInputs("kubejs:pm_wafer")
        .itemOutputs("4x kubejs:pm_chip")
        .EUt(122880)
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:fm_chip")
        .itemInputs("kubejs:fm_wafer")
        .itemOutputs("2x kubejs:fm_chip")
        .EUt(524288)
        .duration(2700)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:optical_ram_chip")
        .itemInputs("kubejs:optical_ram_wafer")
        .itemOutputs("32x kubejs:optical_ram_chip")
        .EUt(122880)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:exotic_ram_chip")
        .itemInputs("kubejs:exotic_ram_wafer")
        .itemOutputs("32x kubejs:exotic_ram_chip")
        .EUt(524288)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:cosmic_ram_chip")
        .itemInputs("kubejs:cosmic_ram_wafer")
        .itemOutputs("32x kubejs:cosmic_ram_chip")
        .EUt(524288 * 4)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:supracausal_ram_chip")
        .itemInputs("kubejs:supracausal_ram_wafer")
        .itemOutputs("4x kubejs:supracausal_ram_chip")
        .EUt(524288 * 16)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("kubejs:optical_ram_wafer")
        .itemInputs("kubejs:rutherfordium_neutronium_wafer", "gtceu:ram_wafer", "kubejs:photon_carrying_wafer")
        .itemOutputs("kubejs:optical_ram_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("kubejs:exotic_ram_wafer")
        .itemInputs("kubejs:optical_ram_wafer", "gtceu:nor_memory_wafer", "gtceu:nand_memory_wafer", "gtceu:amethyst_plate", "gtceu:technetium_plate")
        .itemOutputs("kubejs:exotic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("kubejs:cosmic_ram_wafer")
        .itemInputs("kubejs:taranium_wafer", "gtceu:ram_wafer", "kubejs:prepared_cosmic_soc_wafer")
        .itemOutputs("kubejs:cosmic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(550)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.forming_press("kubejs:supracausal_ram_wafer")
        .itemInputs("kubejs:cosmic_ram_wafer", "kubejs:exotic_ram_wafer", "kubejs:pellet_antimatter", "gtceu:legendarium_foil", "gtceu:double_hikarium_plate")
        .itemOutputs("kubejs:supracausal_ram_wafer")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(750)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.laser_engraver("gtceu:ilc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/red")
        .itemOutputs("64x gtceu:ilc_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:ram_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/green")
        .itemOutputs("64x gtceu:ram_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:lpic_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/orange")
        .itemOutputs("64x gtceu:lpic_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:simple_soc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/cyan")
        .itemOutputs("64x gtceu:simple_soc_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:ulpic_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/blue")
        .itemOutputs("64x gtceu:ulpic_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:cpu_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/light_blue")
        .itemOutputs("64x gtceu:cpu_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:soc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/yellow")
        .itemOutputs("32x gtceu:soc_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:nor_memory_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/pink")
        .itemOutputs("32x gtceu:nor_memory_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:mpic_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/brown")
        .itemOutputs("32x gtceu:mpic_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:nand_memory_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/gray")
        .itemOutputs("32x gtceu:nand_memory_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:advanced_soc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/purple")
        .itemOutputs("8x gtceu:advanced_soc_wafer")
        .EUt(122880)
        .duration(125)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtceu:highly_advanced_soc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/black")
        .itemOutputs("4x gtceu:highly_advanced_soc_wafer")
        .EUt(122880)
        .duration(225)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("kubejs:prepared_cosmic_soc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("kubejs:lithography_mask")
        .notConsumable("#forge:lenses/yellow")
        .notConsumable("#forge:lenses/lime")
        .notConsumable("#forge:lenses/light_blue")
        .notConsumable("#forge:lenses/cyan")
        .notConsumable("#forge:lenses/purple")
        .notConsumable("#forge:lenses/black")
        .notConsumable("#forge:lenses/blue")
        .inputFluids("gtceu:gamma_rays_photoresist 1000")
        .itemOutputs("kubejs:prepared_cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(9600)
        .CWUt(1024)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("kubejs:high_precision_crystal_soc")
        .itemInputs("gtceu:crystal_soc")
        .notConsumable("kubejs:lithography_mask")
        .notConsumable("#forge:lenses/yellow")
        .notConsumable("#forge:lenses/lime")
        .notConsumable("#forge:lenses/light_blue")
        .notConsumable("#forge:lenses/cyan")
        .notConsumable("#forge:lenses/purple")
        .notConsumable("#forge:lenses/black")
        .notConsumable("#forge:lenses/blue")
        .inputFluids("gtceu:euv_photoresist 1000")
        .itemOutputs("kubejs:high_precision_crystal_soc")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(4800)
        .CWUt(256)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("kubejs:nm_wafer")
        .itemInputs("kubejs:rutherfordium_neutronium_wafer")
        .notConsumable("kubejs:lithography_mask")
        .notConsumable("#forge:lenses/blue")
        .notConsumable("#forge:lenses/brown")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/red")
        .notConsumable("gtceu:lime_glass_lens")
        .notConsumable("#forge:lenses/pink")
        .notConsumable("#forge:lenses/gray")
        .inputFluids("gtceu:photoresist 1000")
        .itemOutputs("kubejs:nm_wafer")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1800)
        .CWUt(128)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("kubejs:pm_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("kubejs:lithography_mask")
        .notConsumable("#forge:lenses/blue")
        .notConsumable("#forge:lenses/brown")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/red")
        .notConsumable("gtceu:lime_glass_lens")
        .notConsumable("#forge:lenses/pink")
        .notConsumable("#forge:lenses/gray")
        .inputFluids("gtceu:euv_photoresist 1000")
        .itemOutputs("kubejs:pm_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(3600)
        .CWUt(256)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("kubejs:fm_wafer")
        .itemInputs("kubejs:pm_wafer")
        .notConsumable("kubejs:grating_lithography_mask")
        .notConsumable("#forge:lenses/blue")
        .notConsumable("#forge:lenses/brown")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/red")
        .notConsumable("gtceu:lime_glass_lens")
        .notConsumable("#forge:lenses/pink")
        .notConsumable("#forge:lenses/gray")
        .inputFluids("gtceu:gamma_rays_photoresist 1000")
        .itemOutputs("kubejs:fm_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(5600)
        .CWUt(512)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("kubejs:raw_photon_carrying_wafer")
        .itemInputs("kubejs:rutherfordium_neutronium_wafer")
        .notConsumable("kubejs:lithography_mask")
        .notConsumable("#forge:lenses/light_gray")
        .notConsumable("#forge:lenses/purple")
        .notConsumable("#forge:lenses/yellow")
        .notConsumable("#forge:lenses/magenta")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/light_blue")
        .notConsumable("#forge:lenses/pink")
        .itemOutputs("kubejs:raw_photon_carrying_wafer")
        .inputFluids("gtceu:photoresist 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .CWUt(128)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.dimensional_focus_engraving_array("kubejs:raw_photon_carrying_wafer")
        .itemInputs("kubejs:rutherfordium_neutronium_wafer")
        .notConsumable("#forge:lenses/yellow")
        .inputFluids("gtceu:photoresist 100")
        .itemOutputs("kubejs:raw_photon_carrying_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .CWUt(1)
        .cleanroom(CleanroomType.CLEANROOM)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:raw_photon_carrying_wafer"))
        .dataStack(Item.of("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("kubejs:prepared_cosmic_soc_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/light_blue")
        .inputFluids("gtceu:gamma_rays_photoresist 100")
        .itemOutputs("kubejs:prepared_cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4800)
        .CWUt(8)
        .cleanroom(CleanroomType.CLEANROOM)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:prepared_cosmic_soc_wafer"))
        .dataStack(Item.of("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("kubejs:high_precision_crystal_soc")
        .itemInputs("gtceu:crystal_soc")
        .notConsumable("#forge:lenses/lime")
        .inputFluids("gtceu:euv_photoresist 100")
        .itemOutputs("kubejs:high_precision_crystal_soc")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)
        .CWUt(2)
        .cleanroom(CleanroomType.CLEANROOM)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:high_precision_crystal_soc"))
        .dataStack(Item.of("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("kubejs:nm_wafer")
        .itemInputs("kubejs:rutherfordium_neutronium_wafer")
        .notConsumable("#forge:lenses/blue")
        .inputFluids("gtceu:photoresist 100")
        .itemOutputs("kubejs:nm_wafer")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(900)
        .CWUt(1)
        .cleanroom(CleanroomType.CLEANROOM)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:nm_wafer"))
        .dataStack(Item.of("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("kubejs:pm_wafer")
        .itemInputs("kubejs:taranium_wafer")
        .notConsumable("#forge:lenses/magenta")
        .inputFluids("gtceu:euv_photoresist 100")
        .itemOutputs("kubejs:pm_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1800)
        .CWUt(2)
        .cleanroom(CleanroomType.CLEANROOM)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:pm_wafer"))
        .dataStack(Item.of("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("kubejs:fm_wafer")
        .itemInputs("kubejs:pm_wafer")
        .notConsumable("#forge:lenses/orange")
        .inputFluids("gtceu:gamma_rays_photoresist 100")
        .itemOutputs("kubejs:fm_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2700)
        .CWUt(4)
        .cleanroom(CleanroomType.CLEANROOM)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:fm_wafer"))
        .dataStack(Item.of("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400))

    gtr.chemical_bath("kubejs:cosmic_soc_wafer")
        .itemInputs("kubejs:prepared_cosmic_soc_wafer")
        .inputFluids("gtceu:argon_plasma 1000")
        .itemOutputs("kubejs:cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("kubejs:cosmic_soc")
        .itemInputs("kubejs:cosmic_soc_wafer")
        .itemOutputs("8x kubejs:cosmic_soc")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.stellar_forge("kubejs:dragon_heart")
        .itemInputs("kubejs:naquadria_charge", "64x minecraft:dragon_egg", "gtceu:double_draconiumawakened_plate")
        .itemOutputs("kubejs:dragon_heart")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("kubejs:chaos_shard")
        .itemInputs("kubejs:quantum_chromodynamic_charge", "kubejs:infused_obsidian", "minecraft:bedrock")
        .inputFluids("gtceu:radox 1000")
        .itemOutputs("kubejs:chaos_shard")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.mixer("gtceu:hastelloy_n_dust")
        .itemInputs("2x gtceu:iridium_dust", "4x gtceu:molybdenum_dust", "2x gtceu:chromium_dust", "2x gtceu:titanium_dust", "15x gtceu:nickel_dust")
        .circuit(5)
        .itemOutputs("25x gtceu:hastelloy_n_dust")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.assembler("kubejs:accelerated_pipeline")
        .itemInputs("gtceu:europium_quadruple_fluid_pipe", "2x gtceu:luv_voltage_coil", "#gtceu:circuits/luv", "gtceu:niobium_nitride_single_cable", "gtceu:copper76_dust", "gtceu:double_neodymium_plate")
        .itemOutputs("kubejs:accelerated_pipeline")
        .inputFluids("gtceu:soldering_alloy 288")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:lafium_mechanical_casing")
        .itemInputs("gtceu:enriched_naquadah_frame", "6x gtceu:lafium_plate")
        .itemOutputs("2x kubejs:lafium_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("kubejs:module_connector")
        .itemInputs("64x gtceu:hv_item_passthrough_hatch", "64x gtceu:hv_fluid_passthrough_hatch", "2x #gtceu:circuits/zpm", "4x gtceu:trinium_single_cable", "16x gtceu:double_manganese_plate", "64x gtceu:double_technetium_plate")
        .itemOutputs("kubejs:module_connector")
        .inputFluids("gtceu:soldering_alloy 2880")
        .EUt(122880)
        .duration(400)

    gtr.assembler("kubejs:module_base")
        .itemInputs("kubejs:high_strength_concrete", "4x gtceu:technetium_plate", "4x gtceu:osmium_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("kubejs:module_base")
        .EUt(480)
        .duration(400)

    gtr.electric_blast_furnace("gtceu:fissioned_uranium_235_dust")
        .itemInputs("gtceu:uranium_235_dust", "gtceu:tiny_neutronium_dust")
        .itemOutputs("gtceu:fissioned_uranium_235_dust")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(3860)

    gtr.centrifuge("gtceu:fissioned_uranium_235_dust")
        .itemInputs("gtceu:fissioned_uranium_235_dust")
        .itemOutputs("gtceu:tin_dust", "gtceu:technetium_dust")
        .EUt(1920)
        .duration(400)

    gtr.chemical_reactor("gtceu:uranium_sulfate_waste_solution")
        .itemInputs("gtceu:impure_uraninite_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("gtceu:uraninite_dust")
        .outputFluids("gtceu:uranium_sulfate_waste_solution 1000")
        .EUt(120)
        .duration(200)

    gtr.centrifuge("gtceu:uranium_sulfate_waste_solution")
        .inputFluids("gtceu:uranium_sulfate_waste_solution 1000")
        .itemOutputs("gtceu:tiny_lead_dust", "gtceu:tiny_barium_dust", "gtceu:tiny_strontium_dust", "gtceu:tiny_radium_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 1000")
        .EUt(480)
        .duration(500)

    gtr.chemical_reactor("gtceu:bismuth_tellurite_dust")
        .itemInputs("2x gtceu:bismuth_dust", "3x gtceu:tellurium_dust")
        .itemOutputs("5x gtceu:bismuth_tellurite_dust")
        .EUt(120)
        .duration(760)

    gtr.chemical_reactor("gtceu:prasiolite_dust")
        .itemInputs("5x gtceu:silicon_dust", "gtceu:iron_dust")
        .inputFluids("gtceu:oxygen 10000")
        .itemOutputs("gtceu:prasiolite_dust")
        .EUt(480)
        .duration(270)

    gtr.mixer("gtceu:magneto_resonatic_dust")
        .itemInputs("3x gtceu:prasiolite_dust", "6x gtceu:bismuth_tellurite_dust", "1x gtceu:cubic_zirconia_dust", "1x gtceu:magnetic_steel_dust")
        .itemOutputs("9x gtceu:magneto_resonatic_dust")
        .EUt(30)
        .duration(80)

    gtr.chemical_reactor("gtceu:dibismuthhydroborat_dust")
        .itemInputs("2x gtceu:bismuth_dust", "gtceu:boron_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("4x gtceu:dibismuthhydroborat_dust")
        .EUt(90)
        .duration(590)

    gtr.mixer("gtceu:circuit_compound_dust")
        .itemInputs("3x gtceu:dibismuthhydroborat_dust", "2x gtceu:bismuth_tellurite_dust", "gtceu:indium_gallium_phosphide_dust")
        .itemOutputs("6x gtceu:circuit_compound_dust")
        .EUt(15)
        .duration(890)

    gtr.forming_press("kubejs:raw_imprinted_resonatic_circuit_board")
        .itemInputs("4x gtceu:circuit_compound_dust", "gtceu:magneto_resonatic_dust")
        .itemOutputs("kubejs:raw_imprinted_resonatic_circuit_board")
        .EUt(480)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("kubejs:imprinted_resonatic_circuit_board")
        .itemInputs("kubejs:raw_imprinted_resonatic_circuit_board")
        .inputFluids("gtceu:soldering_alloy 432")
        .itemOutputs("kubejs:imprinted_resonatic_circuit_board")
        .EUt(1920)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("kubejs:circuit_resonatic_ulv")
        .itemInputs("4x gtceu:tantalum_capacitor", "4x gtceu:resistor", "4x gtceu:inductor", "kubejs:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtceu:vacuum_tube")
        .itemOutputs("4x kubejs:circuit_resonatic_ulv")
        .EUt(30)
        .duration(50)

    gtr.circuit_assembler("kubejs:circuit_resonatic_lv")
        .itemInputs("4x gtceu:diode", "4x gtceu:capacitor", "4x gtceu:transistor", "kubejs:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "kubejs:circuit_resonatic_ulv")
        .itemOutputs("4x kubejs:circuit_resonatic_lv")
        .EUt(120)
        .duration(90)

    gtr.circuit_assembler("kubejs:circuit_resonatic_mv")
        .itemInputs("8x gtceu:diode", "8x gtceu:capacitor", "8x gtceu:transistor", "kubejs:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "kubejs:circuit_resonatic_lv")
        .itemOutputs("4x kubejs:circuit_resonatic_mv")
        .EUt(480)
        .duration(150)

    gtr.circuit_assembler("kubejs:circuit_resonatic_hv")
        .itemInputs("4x gtceu:smd_diode", "4x gtceu:smd_capacitor", "4x gtceu:smd_transistor", "2x kubejs:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "kubejs:circuit_resonatic_mv")
        .itemOutputs("4x kubejs:circuit_resonatic_hv")
        .EUt(1920)
        .duration(230)

    gtr.circuit_assembler("kubejs:circuit_resonatic_ev")
        .itemInputs("8x gtceu:smd_diode", "8x gtceu:smd_capacitor", "8x gtceu:smd_transistor", "4x kubejs:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "kubejs:circuit_resonatic_hv")
        .itemOutputs("4x kubejs:circuit_resonatic_ev")
        .EUt(7680)
        .duration(330)

    gtr.circuit_assembler("kubejs:circuit_resonatic_iv")
        .itemInputs("4x gtceu:advanced_smd_diode", "4x gtceu:advanced_smd_capacitor", "4x gtceu:advanced_smd_transistor", "4x kubejs:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "kubejs:circuit_resonatic_ev")
        .itemOutputs("4x kubejs:circuit_resonatic_iv")
        .EUt(30720)
        .duration(450)

    gtr.circuit_assembler("kubejs:circuit_resonatic_luv")
        .itemInputs("8x gtceu:advanced_smd_diode", "8x gtceu:advanced_smd_capacitor", "8x gtceu:advanced_smd_transistor", "4x kubejs:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "kubejs:circuit_resonatic_iv")
        .itemOutputs("4x kubejs:circuit_resonatic_luv")
        .EUt(122880)
        .duration(570)

    const circuits = [
        ["bioware", "zpm", "luv", 1],
        ["optical", "uv", "zpm", 2],
        ["exotic", "uhv", "uv", 3],
        ["cosmic", "uev", "uhv", 4],
        ["supracausal", "uiv", "uev", 5]
    ]

    circuits.forEach((circuit) => {
        gtr.circuit_assembler("kubejs:circuit_resonatic_" + circuit[1])
            .itemInputs("16x kubejs:smd_diode_" + circuit[0], "16x kubejs:smd_capacitor_" + circuit[0], "16x kubejs:smd_transistor_" + circuit[0], "8x kubejs:imprinted_resonatic_circuit_board", "gtceu:exquisite_magneto_resonatic_gem", "kubejs:circuit_resonatic_" + circuit[2])
            .itemOutputs("4x kubejs:circuit_resonatic_" + circuit[1])
            .EUt(122880 * (4 ** circuit[3]))
            .duration(570 + (120 + (20 * circuit[3])))
    })

    gtr.electric_blast_furnace("kubejs:rutherfordium_neutronium_boule")
        .itemInputs("gtceu:neutronium_boule", "4x gtceu:rutherfordium_dust")
        .inputFluids("gtceu:radon 8000")
        .itemOutputs("kubejs:rutherfordium_neutronium_boule")
        .EUt(30720)
        .duration(21000)
        .blastFurnaceTemp(8100)

    gtr.chemical_reactor("gtceu:acrylic_acid")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:allyl_chloride 1000", "minecraft:water 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:acrylic_acid 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(120)
        .duration(200)

    gtr.chemical_reactor("gtceu:ethyl_acrylate")
        .inputFluids("gtceu:acrylic_acid 1000", "gtceu:ethanol 1000", "gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:ethyl_acrylate 1000", "gtceu:diluted_sulfuric_acid 1000")
        .EUt(120)
        .duration(600)

    gtr.large_chemical_reactor("gtceu:photoresist")
        .inputFluids("gtceu:ethyl_acrylate 1000", "gtceu:styrene 1000", "gtceu:titanium_tetrachloride 100")
        .outputFluids("gtceu:photoresist 1000")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:trichloroflerane")
        .notConsumable("gtceu:ferrosilite_dust")
        .itemInputs("gtceu:flerovium_dust")
        .inputFluids("gtceu:hydrochloric_acid 3000")
        .outputFluids("gtceu:trichloroflerane 1000", "gtceu:hydrogen 3000")
        .EUt(7680)
        .duration(150)

    gtr.mixer("gtceu:euv_photoresist")
        .inputFluids("gtceu:photoresist 1000", "gtceu:polyurethaneresin 1000")
        .itemInputs("31x gtceu:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .outputFluids("gtceu:euv_photoresist")
        .EUt(524288)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtceu:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .itemInputs("26x gtceu:bisethylenedithiotetraselenafulvalene_dust")
        .inputFluids("gtceu:ammonium_perrhenate 1000")
        .outputFluids("gtceu:ammonia 1000")
        .itemOutputs("31x gtceu:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .EUt(120)
        .duration(9840)
        .blastFurnaceTemp(5000)

    gtr.electric_blast_furnace("gtceu:bisethylenedithiotetraselenafulvalene_dust")
        .itemInputs("28x gtceu:lithiumthiinediselenide_dust", "gtceu:cyclopentadienyl_titanium_trichloride_dust")
        .inputFluids("gtceu:tetrafluoroethylene 1000")
        .itemOutputs("8x gtceu:lithium_fluoride_dust", "26x gtceu:bisethylenedithiotetraselenafulvalene_dust")
        .EUt(120)
        .duration(7680)
        .blastFurnaceTemp(4600)

    gtr.large_chemical_reactor("gtceu:cyclopentadienyl_titanium_trichloride_dust")
        .inputFluids("gtceu:titanium_tetrachloride 1000", "gtceu:propadiene 2000", "gtceu:acetylene 2000")
        .itemOutputs("23x gtceu:cyclopentadienyl_titanium_trichloride_dust")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .EUt(7680)
        .duration(780)

    gtr.large_chemical_reactor("gtceu:propadiene")
        .inputFluids("gtceu:butene 1000", "gtceu:propene")
        .outputFluids("gtceu:butane 1000", "gtceu:propadiene 1000")
        .EUt(480)
        .duration(2400)

    gtr.chemical_reactor("gtceu:lithiumthiinediselenide_dust")
        .inputFluids("gtceu:bromodihydrothiine 1000", "gtceu:butyl_lithium 2000")
        .itemInputs("2x gtceu:selenium_dust")
        .outputFluids("gtceu:bromobutane 2000")
        .itemOutputs("14x gtceu:lithiumthiinediselenide_dust")
        .EUt(30720)
        .duration(290)

    gtr.chemical_reactor("gtceu:butyl_lithium")
        .itemInputs("gtceu:lithium_dust")
        .inputFluids("gtceu:butane 1000")
        .outputFluids("gtceu:butyl_lithium 1000", "gtceu:hydrogen 1000")
        .EUt(480)
        .duration(150)

    gtr.large_chemical_reactor("gtceu:bromodihydrothiine")
        .inputFluids("gtceu:ethane 1000", "gtceu:chlorine 1000", "gtceu:dibromoacrolein 1000")
        .itemInputs("14x gtceu:sodium_thiosulfate_dust")
        .outputFluids("gtceu:bromodihydrothiine 1000", "gtceu:hydrogen 1000")
        .itemOutputs("4x gtceu:salt_dust", "14x gtceu:sodium_bisulfate_dust")
        .EUt(7680)
        .duration(400)

    gtr.large_chemical_reactor("gtceu:dibromoacrolein")
        .inputFluids("gtceu:formic_acid 2000", "minecraft:water 2000", "gtceu:bromine 2000")
        .outputFluids("gtceu:dibromoacrolein 1000", "gtceu:hydrogen 2000")
        .itemOutputs("12x gtceu:sodium_hydroxide_dust")
        .EUt(7680)
        .duration(360)

    gtr.electric_blast_furnace("gtceu:sodium_thiosulfate_dust")
        .itemInputs("18x gtceu:sodium_hydroxide_dust", "4x gtceu:sulfur_dust")
        .itemOutputs("7x gtceu:sodium_thiosulfate_dust", "6x gtceu:sodium_sulfide_dust")
        .outputFluids("gtceu:steam 3000")
        .EUt(120)
        .duration(210)
        .blastFurnaceTemp(4500)

    gtr.electric_blast_furnace("gtceu:selenium_dust")
        .itemInputs("gtceu:refined_chalcopyrite_ore")
        .itemOutputs("gtceu:chalcopyrite_dust", "gtceu:small_selenium_dust")
        .EUt(480)
        .duration(500)
        .blastFurnaceTemp(4300)

    gtr.mixer("gtceu:gamma_rays_photoresist")
        .itemInputs("29x gtceu:borocarbide_dust", "4x gtceu:lanthanum_embedded_fullerene_dust")
        .inputFluids("gtceu:euv_photoresist 1000", "gtceu:trichloroflerane")
        .outputFluids("gtceu:gamma_rays_photoresist 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtceu:astatide_solution")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemInputs("1x gtceu:astatine_dust")
        .outputFluids("gtceu:astatide_solution 1000")
        .EUt(1920)
        .duration(200)

    gtr.chemical_reactor("gtceu:francium_carbide_dust")
        .itemInputs("2x gtceu:francium_dust")
        .inputFluids("gtceu:acetylene 1000")
        .itemOutputs("4x gtceu:francium_carbide_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .EUt(480)
        .duration(260)

    gtr.electric_blast_furnace("gtceu:boron_carbide_dust")
        .itemInputs("3x gtceu:carbon_dust", "4x gtceu:boron_dust")
        .itemOutputs("7x gtceu:boron_carbide_dust")
        .EUt(120)
        .duration(550)
        .blastFurnaceTemp(4000)

    gtr.chemical_reactor("gtceu:boron_francium_carbide_dust")
        .itemInputs("8x gtceu:francium_carbide_dust", "7x gtceu:boron_carbide_dust")
        .itemOutputs("15x gtceu:boron_francium_carbide_dust")
        .EUt(7680)
        .duration(900)

    gtr.mixer("gtceu:mixed_astatide_salts_dust")
        .itemInputs("gtceu:holmium_dust", "gtceu:thulium_dust", "gtceu:copernicium_dust", "gtceu:flerovium_dust")
        .inputFluids("gtceu:astatide_solution 3000", "gtceu:distilled_water 3000")
        .itemOutputs("7x gtceu:mixed_astatide_salts_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 6000")
        .EUt(122880)
        .duration(400)

    gtr.electric_blast_furnace("gtceu:borocarbide_dust")
        .itemInputs("15x gtceu:boron_francium_carbide_dust", "14x gtceu:mixed_astatide_salts_dust")
        .itemOutputs("29x gtceu:borocarbide_dust")
        .EUt(120)
        .duration(15000)
        .blastFurnaceTemp(11300)

    gtr.mixer("gtceu:lanthanum_fullerene_mix_dust")
        .itemInputs("gtceu:lanthanum_dust", "gtceu:unfolded_fullerene_dust")
        .itemOutputs("2x gtceu:lanthanum_fullerene_mix_dust")
        .EUt(30720)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtceu:lanthanum_embedded_fullerene_dust")
        .itemInputs("2x gtceu:lanthanum_fullerene_mix_dust")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("2x gtceu:lanthanum_embedded_fullerene_dust")
        .outputFluids("gtceu:ammonia 10000")
        .EUt(1966080)
        .duration(320)
        .blastFurnaceTemp(7000)

    gtr.large_chemical_reactor("gtceu:fullerene_doped_nanotubes")
        .itemInputs("gtceu:fullerene_dust")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 14400", "gtceu:cycloparaphenylene 3600")
        .outputFluids("gtceu:fullerene_doped_nanotubes 18000")
        .EUt(320000)
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distillery("gtceu:cyclopentadiene")
        .inputFluids("gtceu:severely_steam_cracked_naphtha 1000")
        .outputFluids("gtceu:cyclopentadiene 150")
        .circuit(12)
        .EUt(30)
        .duration(240)

    gtr.chemical_reactor("gtceu:dimethylether")
        .notConsumable("gtceu:silicon_dioxide_dust")
        .inputFluids("gtceu:methanol 2000")
        .outputFluids("gtceu:dimethylether 1000", "minecraft:water 1000")
        .EUt(8000)
        .duration(160)

    gtr.chemical_reactor("gtceu:dimethoxyethane")
        .inputFluids("gtceu:dimethylether 1000", "gtceu:ethylene_oxide 1000")
        .outputFluids("gtceu:dimethoxyethane 1000")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtceu:lithium_cyclopentadienide")
        .inputFluids("gtceu:butyl_lithium 1000", "gtceu:dimethoxyethane 500", "gtceu:cyclopentadiene 1000")
        .outputFluids("gtceu:lithium_cyclopentadienide 1000", "gtceu:butane 1000")
        .EUt(10000)
        .duration(460)

    gtr.large_chemical_reactor("gtceu:californium_trichloride_dust")
        .notConsumable("gtceu:ferrosilite_dust")
        .itemInputs("gtceu:californium_dust")
        .inputFluids("gtceu:hydrochloric_acid 6000")
        .outputFluids("gtceu:hydrogen 3000")
        .itemOutputs("4x gtceu:californium_trichloride_dust")
        .EUt(7680)
        .duration(150)

    gtr.chemical_reactor("gtceu:californium_cyclopentadienide")
        .inputFluids("gtceu:lithium_cyclopentadienide 3000")
        .itemInputs("4x gtceu:californium_trichloride_dust")
        .outputFluids("gtceu:californium_cyclopentadienide 1000")
        .EUt(2000000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("kubejs:fullerene_polymer_matrix_soft_tubing")
        .itemInputs("gtceu:fine_polyetheretherketone_wire")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 18")
        .itemOutputs("kubejs:fullerene_polymer_matrix_soft_tubing")
        .EUt(100)
        .duration(80)

    gtr.vacuum_freezer("kubejs:fullerene_polymer_matrix_fine_tubing")
        .itemInputs("kubejs:fullerene_polymer_matrix_soft_tubing")
        .itemOutputs("kubejs:fullerene_polymer_matrix_fine_tubing")
        .EUt(500)
        .duration(240)

    gtr.dimensionally_transcendent_mixer("gtceu:not_found")
        .itemInputs("1x gtceu:carbon_dust", "1x gtceu:phosphorus_dust", "1x gtceu:sulfur_dust", "1x gtceu:selenium_dust", "1x gtceu:iodine_dust")
        .inputFluids("gtceu:hydrogen 1000", "gtceu:nitrogen 1000", "gtceu:oxygen 1000", "gtceu:fluorine 1000", "gtceu:chlorine 1000", "gtceu:bromine 1000")
        .outputFluids("gtceu:not_found 11000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2200)

    gtr.dimensionally_transcendent_mixer("gtceu:noble_gas")
        .inputFluids("gtceu:helium 1000", "gtceu:neon 1000", "gtceu:argon 1000", "gtceu:krypton 1000", "gtceu:xenon 1000", "gtceu:radon 1000")
        .outputFluids("gtceu:noble_gas 6000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtceu:metalloid_dust")
        .itemInputs("1x gtceu:boron_dust", "1x gtceu:silicon_dust", "1x gtceu:germanium_dust", "1x gtceu:arsenic_dust", "1x gtceu:antimony_dust", "1x gtceu:tellurium_dust", "1x gtceu:astatine_dust")
        .itemOutputs("7x gtceu:metalloid_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtceu:poor_dust")
        .itemInputs("1x gtceu:aluminium_dust", "1x gtceu:gallium_dust", "1x gtceu:indium_dust", "1x gtceu:tin_dust", "1x gtceu:thallium_dust", "1x gtceu:lead_dust", "1x gtceu:bismuth_dust", "1x gtceu:polonium_dust")
        .itemOutputs("8x gtceu:poor_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtceu:transition_1_dust")
        .itemInputs("1x gtceu:titanium_dust", "1x gtceu:vanadium_dust", "1x gtceu:chromium_dust", "1x gtceu:manganese_dust", "1x gtceu:iron_dust", "1x gtceu:cobalt_dust", "1x gtceu:nickel_dust", "1x gtceu:copper_dust", "1x gtceu:zinc_dust")
        .itemOutputs("9x gtceu:transition_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtceu:transition_2_dust")
        .itemInputs("1x gtceu:zirconium_dust", "1x gtceu:niobium_dust", "1x gtceu:molybdenum_dust", "1x gtceu:technetium_dust", "1x gtceu:ruthenium_dust", "1x gtceu:rhodium_dust", "1x gtceu:palladium_dust", "1x gtceu:silver_dust", "1x gtceu:cadmium_dust")
        .itemOutputs("9x gtceu:transition_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtceu:transition_3_dust")
        .itemInputs("1x gtceu:hafnium_dust", "1x gtceu:tantalum_dust", "1x gtceu:tungsten_dust", "1x gtceu:rhenium_dust", "1x gtceu:osmium_dust", "1x gtceu:iridium_dust", "1x gtceu:platinum_dust", "1x gtceu:gold_dust")
        .inputFluids("gtceu:mercury 1000")
        .itemOutputs("9x gtceu:transition_3_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtceu:alkaline_earth_dust")
        .itemInputs("1x gtceu:beryllium_dust", "1x gtceu:magnesium_dust", "1x gtceu:calcium_dust", "1x gtceu:strontium_dust", "1x gtceu:barium_dust", "1x gtceu:radium_dust")
        .itemOutputs("6x gtceu:alkaline_earth_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtceu:alkaline_dust")
        .itemInputs("1x gtceu:lithium_dust", "1x gtceu:sodium_dust", "1x gtceu:potassium_dust", "1x gtceu:rubidium_dust", "1x gtceu:caesium_dust", "1x gtceu:francium_dust")
        .itemOutputs("6x gtceu:alkaline_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtceu:actinoids_1_dust")
        .itemInputs("1x gtceu:actinium_dust", "1x gtceu:thorium_dust", "1x gtceu:protactinium_dust", "1x gtceu:uranium_dust", "1x gtceu:neptunium_dust", "1x gtceu:plutonium_dust", "1x gtceu:americium_dust", "1x gtceu:curium_dust")
        .itemOutputs("8x gtceu:actinoids_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtceu:actinoids_2_dust")
        .itemInputs("1x gtceu:berkelium_dust", "1x gtceu:californium_dust", "1x gtceu:einsteinium_dust", "1x gtceu:fermium_dust", "1x gtceu:mendelevium_dust", "1x gtceu:nobelium_dust", "1x gtceu:lawrencium_dust")
        .itemOutputs("7x gtceu:actinoids_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.mixer("gtceu:actinoids_dust")
        .itemInputs("1x gtceu:actinoids_1_dust", "1x gtceu:actinoids_2_dust")
        .itemOutputs("2x gtceu:actinoids_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.dimensionally_transcendent_mixer("gtceu:lanthanoids_1_dust")
        .itemInputs("1x gtceu:lanthanum_dust", "1x gtceu:cerium_dust", "1x gtceu:praseodymium_dust", "1x gtceu:neodymium_dust", "1x gtceu:promethium_dust", "1x gtceu:samarium_dust", "1x gtceu:europium_dust", "1x gtceu:gadolinium_dust")
        .itemOutputs("8x gtceu:lanthanoids_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtceu:lanthanoids_2_dust")
        .itemInputs("1x gtceu:terbium_dust", "1x gtceu:dysprosium_dust", "1x gtceu:holmium_dust", "1x gtceu:erbium_dust", "1x gtceu:thulium_dust", "1x gtceu:ytterbium_dust", "1x gtceu:lutetium_dust")
        .itemOutputs("7x gtceu:lanthanoids_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtceu:dimensionallytranscendentprosaiccatalyst")
        .inputFluids("gtceu:dimensionallytranscendentcrudecatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:oxygen_plasma 1000", "gtceu:argon_plasma 1000", "gtceu:iron_plasma 1000", "gtceu:nickel_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)

    gtr.dimensionally_transcendent_mixer("gtceu:dimensionallytranscendentresplendentcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:mithril_plasma 1000", "gtceu:orichalcum_plasma 1000", "gtceu:enderium_plasma 1000", "gtceu:infuscolium_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.dimensionally_transcendent_mixer("gtceu:dimensionallytranscendentexoticcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:echoite_plasma 1000", "gtceu:adamantium_plasma 1000", "gtceu:vibranium_plasma 1000", "gtceu:starmetal_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtceu:dimensionallytranscendentstellarcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:legendarium_plasma 1000", "gtceu:crystalmatrix_plasma 1000", "gtceu:draconiumawakened_plasma 1000", "gtceu:raw_star_matter_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentstellarcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(3200)

    gtr.dimensionally_transcendent_mixer("gtceu:exciteddtsc")
        .inputFluids("gtceu:dimensionallytranscendentstellarcatalyst 10000", "gtceu:concentration_mixing_hyper_fuel_2 1000", "gtceu:high_energy_quark_gluon_plasma 1000")
        .outputFluids("gtceu:exciteddtsc 10000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(12000)

    gtr.dimensionally_transcendent_mixer("gtceu:primordialmatter")
        .inputFluids("gtceu:raw_star_matter_plasma 1000", "gtceu:spacetime 1000", "gtceu:spatialfluid 1000", "gtceu:dimensionallytranscendentresidue 1000")
        .outputFluids("gtceu:primordialmatter 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtceu:chaos_plasma")
        .itemInputs("kubejs:chaos_shard")
        .inputFluids("gtceu:uu_matter 4000", "gtceu:cosmicneutronium 2000", "gtceu:cosmic_mesh_plasma 2000", "gtceu:raw_star_matter_plasma 1000", "gtceu:dimensionallytranscendentexoticcatalyst 1000")
        .outputFluids("gtceu:chaos_plasma 10000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.assembler("gtceu:luv_solar_panel")
        .itemInputs("4x kubejs:pm_wafer", "16x gtceu:solar_panel", "16x gtceu:ulv_solar_panel", "16x gtceu:lv_solar_panel", "2x gtceu:cosmicneutronium_quadruple_wire", "4x gtceu:fusion_glass", "4x gtceu:double_hastelloyk_243_plate")
        .itemOutputs("gtceu:luv_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtceu:zpm_solar_panel")
        .itemInputs("4x kubejs:fm_wafer", "16x gtceu:mv_solar_panel", "16x gtceu:hv_solar_panel", "16x gtceu:ev_solar_panel", "2x gtceu:cosmicneutronium_hex_wire", "16x gtceu:fusion_glass", "16x gtceu:double_vibranium_plate")
        .itemOutputs("gtceu:zpm_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.assembler("gtceu:uv_solar_panel")
        .itemInputs("16x kubejs:fm_wafer", "16x gtceu:iv_solar_panel", "16x gtceu:luv_solar_panel", "16x gtceu:zpm_solar_panel", "2x gtceu:infinity_hex_wire", "64x gtceu:fusion_glass", "64x gtceu:double_neutronium_plate")
        .itemOutputs("gtceu:uv_solar_panel")
        .inputFluids("gtceu:super_mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.neutron_compressor("kubejs:combined_singularity_0")
        .itemInputs("64x gtceu:lafium_block", "64x gtceu:potin_block")
        .itemOutputs("kubejs:combined_singularity_0")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_1")
        .itemInputs("64x gtceu:enderite_block", "64x gtceu:indium_gallium_phosphide_block")
        .itemOutputs("kubejs:combined_singularity_1")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_2")
        .itemInputs("64x gtceu:ruthenium_trinium_americium_neutronate_block", "64x gtceu:yttrium_barium_cuprate_block")
        .itemOutputs("kubejs:combined_singularity_2")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_3")
        .itemInputs("64x gtceu:hastelloyk_243_block", "64x gtceu:cobalt_brass_block")
        .itemOutputs("kubejs:combined_singularity_3")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_4")
        .itemInputs("64x gtceu:titansteel_block", "64x gtceu:uranium_rhodium_dinaquadide_block")
        .itemOutputs("kubejs:combined_singularity_4")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_5")
        .itemInputs("64x gtceu:hastelloy_x_block", "64x gtceu:red_steel_block")
        .itemOutputs("kubejs:combined_singularity_5")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_6")
        .itemInputs("64x gtceu:highurabilityompoundteel_block", "64x gtceu:germaniumtungstennitride_block")
        .itemOutputs("kubejs:combined_singularity_6")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_7")
        .itemInputs("64x gtceu:hsse_block", "64x gtceu:watertight_steel_block")
        .itemOutputs("kubejs:combined_singularity_7")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_8")
        .itemInputs("64x gtceu:pikyonium_block", "64x gtceu:aluminium_bronze_block")
        .itemOutputs("kubejs:combined_singularity_8")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_9")
        .itemInputs("64x gtceu:abyssalalloy_block", "64x gtceu:soldering_alloy_block")
        .itemOutputs("kubejs:combined_singularity_9")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_10")
        .itemInputs("64x gtceu:black_titanium_block", "64x gtceu:nickel_zinc_ferrite_block")
        .itemOutputs("kubejs:combined_singularity_10")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_11")
        .itemInputs("64x gtceu:ultimet_block", "64x gtceu:hsla_steel_block")
        .itemOutputs("kubejs:combined_singularity_11")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_12")
        .itemInputs("64x gtceu:enriched_naquadah_trinium_europium_duranide_block", "64x gtceu:rtm_alloy_block")
        .itemOutputs("kubejs:combined_singularity_12")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_13")
        .itemInputs("64x gtceu:blue_steel_block", "64x gtceu:hastelloy_c_276_block")
        .itemOutputs("kubejs:combined_singularity_13")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_14")
        .itemInputs("64x gtceu:cinobite_block", "64x gtceu:stellite_100_block")
        .itemOutputs("kubejs:combined_singularity_14")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("kubejs:combined_singularity_15")
        .itemInputs("64x gtceu:maraging_steel_300_block", "64x gtceu:grisium_block")
        .itemOutputs("kubejs:combined_singularity_15")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("avaritia:eternal_singularity")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("64x gtceu:neutronium_block",
            "kubejs:combined_singularity_0",
            "kubejs:combined_singularity_1",
            "kubejs:combined_singularity_2",
            "kubejs:combined_singularity_3",
            "kubejs:combined_singularity_4",
            "kubejs:combined_singularity_5",
            "kubejs:combined_singularity_6",
            "kubejs:combined_singularity_7",
            "kubejs:combined_singularity_8",
            "kubejs:combined_singularity_9",
            "kubejs:combined_singularity_10",
            "kubejs:combined_singularity_11",
            "kubejs:combined_singularity_12",
            "kubejs:combined_singularity_13",
            "kubejs:combined_singularity_14",
            "kubejs:combined_singularity_15")
        .inputFluids("gtceu:draconiumawakened 1000", "gtceu:cosmicneutronium 1000", "gtceu:dimensionallytranscendentstellarcatalyst 1000")
        .itemOutputs("avaritia:eternal_singularity")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("avaritia:eternal_singularity_1")
        .notConsumable("kubejs:eternity_catalyst")
        .itemInputs("64x gtceu:neutronium_block",
            "kubejs:combined_singularity_0",
            "kubejs:combined_singularity_1",
            "kubejs:combined_singularity_2",
            "kubejs:combined_singularity_3",
            "kubejs:combined_singularity_4",
            "kubejs:combined_singularity_5",
            "kubejs:combined_singularity_6",
            "kubejs:combined_singularity_7",
            "kubejs:combined_singularity_8",
            "kubejs:combined_singularity_9",
            "kubejs:combined_singularity_10",
            "kubejs:combined_singularity_11",
            "kubejs:combined_singularity_12",
            "kubejs:combined_singularity_13",
            "kubejs:combined_singularity_14",
            "kubejs:combined_singularity_15")
        .inputFluids("gtceu:cosmicneutronium 1000", "gtceu:exciteddtec 1000", "gtceu:spatialfluid 1000")
        .itemOutputs("16x avaritia:eternal_singularity")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("gtceu:spatialfluid")
        .notConsumable("kubejs:hypercube")
        .notConsumable("kubejs:quantum_anomaly")
        .itemInputs("16x gtceu:cosmicneutronium_plate")
        .inputFluids("gtceu:temporalfluid 10000", "gtceu:exciteddtsc 10000")
        .outputFluids("gtceu:spatialfluid 10000")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(600)

    gtr.qft("kubejs:quantum_anomaly")
        .chancedInput("gtceu:draconium_nanoswarm", 100, 0)
        .itemInputs("kubejs:entangled_singularity")
        .inputFluids("gtceu:duranium 144", "gtceu:exciteddtec 100")
        .chancedOutput("kubejs:quantum_anomaly", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtceu:radox_gas")
        .notConsumable("kubejs:quantum_anomaly")
        .itemInputs("64x kubejs:variation_wood")
        .inputFluids("gtceu:xenoxene 10000", "gtceu:unknowwater 90000", "gtceu:temporalfluid 100")
        .outputFluids("gtceu:radox_gas 100000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.dimensionally_transcendent_plasma_forge("kubejs:hypercube_1")
        .itemInputs("16x gtceu:transcendentmetal_rod", "kubejs:quantum_anomaly")
        .inputFluids("gtceu:exciteddtec 1000", "gtceu:spatialfluid 1000")
        .itemOutputs("64x kubejs:hypercube")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(6400)
        .blastFurnaceTemp(62000)

    gtr.chemical_reactor("gtceu:sodium_hypochlorite_dust")
        .circuit(1)
        .itemInputs("6x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemOutputs("3x gtceu:sodium_hypochlorite_dust", "2x gtceu:salt_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(120)
        .duration(80)

    gtr.electrolyzer("gtceu:sodium_chlorate_dust")
        .itemInputs("9x gtceu:sodium_hypochlorite_dust")
        .itemOutputs("5x gtceu:sodium_chlorate_dust", "4x gtceu:salt_dust")
        .EUt(120)
        .duration(210)

    gtr.large_chemical_reactor("gtceu:phthalic_anhydride_dust")
        .inputFluids("gtceu:phthalic_acid 1000")
        .circuit(1)
        .itemOutputs("15x gtceu:phthalic_anhydride_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(480)
        .duration(400)

    gtr.chemical_reactor("gtceu:ethylanthraquinone")
        .itemInputs("15x gtceu:phthalic_anhydride_dust")
        .inputFluids("gtceu:ethylbenzene 1000")
        .outputFluids("gtceu:ethylanthraquinone 1000", "minecraft:water 1000")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtceu:ethylanthrahydroquinone")
        .inputFluids("gtceu:ethylanthraquinone 1000", "gtceu:hydrogen 2000")
        .outputFluids("gtceu:ethylanthrahydroquinone 1000")
        .EUt(30)
        .duration(200)

    gtr.chemical_reactor("gtceu:hydrogen_peroxide")
        .notConsumableFluid("gtceu:anthracene 1000")
        .inputFluids("gtceu:ethylanthrahydroquinone 1000", "gtceu:oxygen 2000")
        .outputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:ethylanthraquinone 1000")
        .EUt(480)
        .duration(600)

    gtr.arc_furnace("gtceu:anthracene")
        .itemInputs("gtceu:coke_gem")
        .outputFluids("gtceu:anthracene 100")
        .EUt(120)
        .duration(400)

    gtr.chemical_reactor("gtceu:sodium_perchlorate_dust")
        .inputFluids("gtceu:hydrogen_peroxide 1000")
        .itemInputs("5x gtceu:sodium_chlorate_dust")
        .itemOutputs("6x gtceu:sodium_perchlorate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(120)
        .duration(480)

    gtr.chemical_reactor("gtceu:silver_chloride_dust")
        .itemInputs("gtceu:silver_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("2x gtceu:silver_chloride_dust")
        .EUt(120)
        .duration(80)

    gtr.chemical_reactor("gtceu:silver_oxide_dust")
        .notConsumable("gtceu:sodium_hydroxide_dust")
        .itemInputs("4x gtceu:silver_chloride_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:silver_oxide_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 2000")
        .EUt(30)
        .duration(100)

    gtr.large_chemical_reactor("gtceu:silver_perchlorate_dust")
        .itemInputs("3x gtceu:silver_oxide_dust", "12x gtceu:sodium_perchlorate_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .itemOutputs("12x gtceu:silver_perchlorate_dust", "3x gtceu:sodium_oxide_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 1000")
        .EUt(480)
        .duration(350)

    gtr.chemical_reactor("gtceu:phenylsodium")
        .itemInputs("2x gtceu:sodium_dust")
        .inputFluids("gtceu:fluoro_benzene 1000")
        .outputFluids("gtceu:phenylsodium 1000")
        .itemOutputs("2x gtceu:sodium_fluoride_dust")
        .EUt(480)
        .duration(210)

    gtr.chemical_reactor("gtceu:tetraethylammonium_bromide")
        .inputFluids("gtceu:ethylene 4000", "gtceu:ammonia 1000", "gtceu:hydrobromic_acid 1000")
        .outputFluids("gtceu:tetraethylammonium_bromide 1000")
        .EUt(1920)
        .duration(200)

    gtr.chemical_reactor("gtceu:difluoroaniline")
        .itemInputs("8x gtceu:sodium_fluoride_dust")
        .inputFluids("gtceu:hydrogen 1000", "gtceu:dichlorobenzene 1000", "gtceu:nitrogen 1000")
        .outputFluids("gtceu:difluoroaniline 2000")
        .itemOutputs("8x gtceu:salt_dust")
        .EUt(7680)
        .duration(200)

    gtr.large_chemical_reactor("gtceu:succinaldehyde")
        .itemInputs("14x gtceu:succinic_acid_dust")
        .inputFluids("gtceu:hydrogen 8000")
        .outputFluids("gtceu:succinaldehyde 1000", "minecraft:water 2000")
        .EUt(1920)
        .duration(600)

    gtr.chemical_reactor("gtceu:n_difluorophenylpyrrole")
        .notConsumable("gtceu:phosphorus_pentoxide_dust")
        .inputFluids("gtceu:succinaldehyde 1000", "gtceu:difluoroaniline 1000")
        .outputFluids("gtceu:n_difluorophenylpyrrole 1000", "minecraft:water 2000")
        .EUt(480)
        .duration(180)

    gtr.large_chemical_reactor("gtceu:photopolymer")
        .itemInputs("69x gtceu:cyclopentadienyl_titanium_trichloride_dust", "42x gtceu:ice_dust", "12x gtceu:silver_perchlorate_dust")
        .inputFluids("gtceu:phenylsodium 8000", "gtceu:silver_tetrafluoroborate 2000", "gtceu:hydrochloric_acid 2000", "gtceu:n_difluorophenylpyrrole 6000", "gtceu:tetraethylammonium_bromide 2000")
        .itemOutputs("8x gtceu:silver_chloride_dust", "4x gtceu:sodium_bromide_dust")
        .outputFluids("gtceu:salt_water 6000", "gtceu:photopolymer 8000")
        .EUt(30720)
        .EUt(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("kubejs:hassium_seed_crystal")
        .itemInputs("gtceu:tiny_hassium_dust")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("kubejs:hassium_seed_crystal")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:manipulator")
        .itemInputs("2x gtceu:neutron_reflector", "4x #gtceu:circuits/uhv", "gtceu:uev_robot_arm", "32x gtceu:inconel_792_bolt", "16x gtceu:diamond_screw", "4x gtceu:double_iridium_plate", "8x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("kubejs:manipulator")
        .EUt(30720)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtceu:rhodium_rhenium_naquadah_catalyst_dust")
        .itemInputs("gtceu:rhenium_dust", "gtceu:rhodium_dust", "gtceu:naquadah_dust")
        .itemOutputs("gtceu:rhodium_rhenium_naquadah_catalyst_dust")
        .EUt(84500)
        .duration(260)

    gtr.chemical_reactor("gtceu:iodine_monochloride")
        .itemInputs("gtceu:iodine_dust")
        .inputFluids("gtceu:chlorine 1000")
        .outputFluids("gtceu:iodine_monochloride 1000")
        .EUt(120)
        .duration(260)

    gtr.chemical_reactor("gtceu:dimethylnaphthalene")
        .inputFluids("gtceu:methanol 2000", "gtceu:naphthalene 1000")
        .outputFluids("gtceu:dimethylnaphthalene 1000", "minecraft:water 2000")
        .EUt(120)
        .duration(200)

    gtr.chemical_reactor("gtceu:trimethylchlorosilane")
        .circuit(2)
        .itemInputs("gtceu:silicon_dust")
        .inputFluids("gtceu:chloromethane 3000")
        .outputFluids("gtceu:trimethylchlorosilane 1000", "gtceu:chlorine 2000")
        .EUt(1920)
        .duration(110)

    gtr.chemical_reactor("gtceu:dimethyldichlorosilane_a")
        .circuit(1)
        .itemInputs("gtceu:silicon_dust")
        .inputFluids("gtceu:chloromethane 2000")
        .outputFluids("gtceu:dimethyldichlorosilane 1000")
        .EUt(96)
        .duration(240)

    gtr.large_chemical_reactor("gtceu:acetylating_reagent")
        .itemInputs("6x gtceu:magnesium_chloride_dust")
        .inputFluids("gtceu:bromine 2000", "gtceu:trimethylchlorosilane 1000", "gtceu:acetylene 3000")
        .outputFluids("gtceu:hydrochloric_acid 3000", "gtceu:chlorine 2000", "gtceu:acetylating_reagent 1000")
        .EUt(480)
        .duration(350)

    gtr.large_chemical_reactor("gtceu:dihydroiodotetracene")
        .notConsumable("gtceu:rhodium_rhenium_naquadah_catalyst_dust")
        .itemInputs("12x gtceu:bromo_succinimide_dust")
        .inputFluids("gtceu:iodine_monochloride 1000", "gtceu:acetylating_reagent 1000", "gtceu:dimethylnaphthalene 1000", "gtceu:chlorine 2000")
        .itemOutputs("6x gtceu:magnesium_chloride_bromide_dust", "12x gtceu:succinimide_dust")
        .outputFluids("gtceu:dihydroiodotetracene 1000", "gtceu:trimethylchlorosilane 1000", "gtceu:hydrobromic_acid 1000")
        .EUt(122880)
        .duration(350)

    gtr.chemical_reactor("gtceu:isopropyl_alcohol")
        .notConsumable("gtceu:tungstate_dust")
        .notConsumable("gtceu:sodium_seaborgate_dust")
        .inputFluids("gtceu:propene 1000", "minecraft:water 1000")
        .outputFluids("gtceu:isopropyl_alcohol 1000")
        .EUt(480)
        .duration(400)

    gtr.large_chemical_reactor("gtceu:dichlorodicyanobenzoquinone")
        .inputFluids("gtceu:hydrogen_cyanide 2000", "gtceu:chlorine 10000", "gtceu:phenol 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:diluted_hydrochloric_acid 8000", "gtceu:dichlorodicyanobenzoquinone 1000")
        .EUt(30720)
        .duration(250)

    gtr.chemical_reactor("gtceu:dichlorodicyanobenzoquinone_1")
        .inputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:dichlorodicyanohydroquinone 1000")
        .outputFluids("minecraft:water 2000", "gtceu:dichlorodicyanobenzoquinone 1000")
        .EUt(480)
        .duration(250)

    gtr.large_chemical_reactor("gtceu:tetracene_dust")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:isopropyl_alcohol 1000", "gtceu:dichlorodicyanobenzoquinone 2000", "gtceu:dihydroiodotetracene 2000")
        .itemOutputs("60x gtceu:tetracene_dust", "2x gtceu:iodine_dust")
        .outputFluids("gtceu:dichlorodicyanohydroquinone 2000", "gtceu:acetone 1000")
        .EUt(491520)
        .duration(260)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtceu:polycyclic_aromatic_mixture_dust")
        .itemInputs("2x gtceu:tetracene_dust")
        .inputFluids("gtceu:naphthalene 1000")
        .itemOutputs("3x gtceu:polycyclic_aromatic_mixture_dust")
        .EUt(7680)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:wyvern_energy_core")
        .itemInputs("16x kubejs:wyvern_core", "64x kubejs:draconium_block_charged", "64x gtceu:iv_lapotronic_battery", "64x gtceu:luv_lapotronic_battery", "64x gtceu:double_draconium_plate")
        .inputFluids("gtceu:mutated_living_solder 5760")
        .itemOutputs("kubejs:wyvern_energy_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)

    gtr.sps_crafting("kubejs:dust_blizz")
        .itemInputs("minecraft:blaze_powder", "gtceu:aluminium_sulfite_dust", "16x minecraft:snowball")
        .inputFluids("gtceu:mana 1000", "gtceu:ice 1000")
        .itemOutputs("2x kubejs:dust_blizz")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.alloy_smelter("kubejs:dust_cryotheum")
        .itemInputs("kubejs:dust_blizz", "gtceu:enderium_dust")
        .itemOutputs("2x kubejs:dust_cryotheum")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(160)

    gtr.extractor("kubejs:gelid_cryotheum")
        .itemInputs("kubejs:dust_cryotheum")
        .outputFluids("kubejs:gelid_cryotheum 144")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(80)

    gtr.chemical_reactor("gtceu:ethylamine")
        .inputFluids("gtceu:ammonia 1000", "gtceu:ethylene 1000")
        .notConsumable("gtceu:sodium_dust")
        .outputFluids("gtceu:ethylamine 1000")
        .EUt(480)
        .duration(130)

    gtr.chemical_reactor("gtceu:isochloropropane")
        .inputFluids("gtceu:propane 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:isochloropropane 1000", "gtceu:hydrochloric_acid 1000")
        .EUt(30)
        .duration(100)

    gtr.large_chemical_reactor("gtceu:rhenium_hassium_thallium_isophtaloylbisdiethylthiourea_hexaf_dust")
        .itemInputs("2x gtceu:thallium_chloride_dust", "5x gtceu:hassium_chloride_dust", "6x gtceu:rhenium_chloride_dust")
        .inputFluids("gtceu:hexafluorophosphoric_acid 1000", "gtceu:isophthaloylbis 3000")
        .itemOutputs("125x gtceu:rhenium_hassium_thallium_isophtaloylbisdiethylthiourea_hexaf_dust")
        .outputFluids("gtceu:hydrochloric_acid 7000", "gtceu:chlorine 3000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:thallium_chloride_dust")
        .itemInputs("gtceu:thallium_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .itemOutputs("2x gtceu:thallium_chloride_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(120)
        .duration(100)

    gtr.electric_blast_furnace("gtceu:hassium_chloride_dust")
        .itemInputs("gtceu:hassium_dust")
        .inputFluids("gtceu:chlorine 4000")
        .itemOutputs("5x gtceu:hassium_chloride_dust")
        .EUt(120)
        .duration(930)
        .blastFurnaceTemp(12000)

    gtr.electric_blast_furnace("gtceu:rhenium_chloride_dust")
        .itemInputs("gtceu:rhenium_dust")
        .inputFluids("gtceu:chlorine 5000")
        .itemOutputs("6x gtceu:rhenium_chloride_dust")
        .EUt(120)
        .duration(930)
        .blastFurnaceTemp(12500)

    gtr.large_chemical_reactor("gtceu:isophthaloylbis")
        .inputFluids("gtceu:phenylenedioxydiacetic_acid 1000", "gtceu:thionyl_chloride 2000", "gtceu:diethylthiourea 2000")
        .outputFluids("gtceu:isophthaloylbis 1000", "gtceu:sulfur_dioxide 2000", "gtceu:hydrochloric_acid 4000")
        .EUt(122880)
        .duration(250)

    gtr.large_chemical_reactor("gtceu:diethylthiourea")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:ethylamine 2000", "gtceu:sodium_thiocyanate 1000")
        .outputFluids("gtceu:diethylthiourea 1000", "gtceu:ammonia 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(30720)
        .duration(210)

    gtr.chemical_reactor("gtceu:sodium_thiocyanate")
        .itemInputs("gtceu:sulfur_dust")
        .inputFluids("gtceu:sodium_cyanide 1000")
        .outputFluids("gtceu:sodium_thiocyanate 1000")
        .EUt(120)
        .duration(100)

    gtr.chemical_reactor("gtceu:thionyl_chloride")
        .itemInputs("gtceu:sulfur_dust")
        .inputFluids("gtceu:sulfur_trioxide 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:thionyl_chloride 1000", "gtceu:sulfur_dioxide 1000")
        .EUt(120)
        .duration(100)

    gtr.large_chemical_reactor("gtceu:phenylenedioxydiacetic_acid")
        .inputFluids("minecraft:water 1000", "gtceu:hydrogen_peroxide 1000", "gtceu:phenol 1000", "gtceu:ethenone 2000", "gtceu:chlorine 4000")
        .outputFluids("gtceu:phenylenedioxydiacetic_acid 1000", "gtceu:hydrochloric_acid 4000")
        .EUt(122880)
        .duration(320)

    gtr.large_chemical_reactor("gtceu:hexafluorophosphoric_acid")
        .inputFluids("gtceu:antimony_pentafluoride 1000", "gtceu:phosphorus_trichloride 1000", "gtceu:hydrofluoric_acid 1000")
        .outputFluids("gtceu:hexafluorophosphoric_acid 1000")
        .itemOutputs("4x gtceu:antimony_trichloride_dust")
        .EUt(30720)
        .duration(280)

    gtr.chemical_reactor("gtceu:phosphorus_trichloride")
        .itemInputs("gtceu:phosphorus_dust")
        .inputFluids("gtceu:chlorine 3000")
        .outputFluids("gtceu:phosphorus_trichloride 1000")
        .EUt(30)
        .duration(60)

    gtr.chemical_reactor("gtceu:antimony_pentafluoride")
        .itemInputs("4x gtceu:antimony_trifluoride_dust")
        .inputFluids("gtceu:fluorine 2000")
        .outputFluids("gtceu:antimony_pentafluoride 1000")
        .EUt(480)
        .duration(100)

    gtr.chemical_reactor("gtceu:antimony_trifluoride_dust_a")
        .itemInputs("4x gtceu:antimony_trichloride_dust")
        .inputFluids("gtceu:hydrofluoric_acid 3000")
        .outputFluids("gtceu:hydrochloric_acid 3000")
        .itemOutputs("4x gtceu:antimony_trifluoride_dust")
        .EUt(480)
        .duration(210)

    gtr.chemical_reactor("gtceu:atinium_hydride_dust")
        .itemInputs("gtceu:actinium_dust")
        .inputFluids("gtceu:hydrogen 3000")
        .itemOutputs("4x gtceu:atinium_hydride_dust")
        .EUt(122880)
        .duration(800)

    gtr.stellar_forge("gtceu:actinium_superhydride_plasma")
        .itemInputs("kubejs:naquadria_charge", "36x gtceu:atinium_hydride_dust")
        .inputFluids("gtceu:hydrogen 81000")
        .outputFluids("gtceu:actinium_superhydride_plasma 36000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.canner("kubejs:actinium_superhydride_plasma_containment_cell")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:actinium_superhydride_plasma 1000")
        .itemInputs("kubejs:plasma_containment_cell")
        .itemOutputs("kubejs:actinium_superhydride_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.plasma_condenser("gtceu:actinium_superhydride_dust")
        .itemInputs("kubejs:actinium_superhydride_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 24000")
        .itemOutputs("13x gtceu:actinium_superhydride_dust", "kubejs:plasma_containment_cell")
        .outputFluids("gtceu:helium 24000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(340)

    gtr.large_chemical_reactor("gtceu:cosmic_superconductor")
        .itemInputs("125x gtceu:rhenium_hassium_thallium_isophtaloylbisdiethylthiourea_hexaf_dust", "13x gtceu:actinium_superhydride_dust", "14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .inputFluids("gtceu:light_quarks 10000", "gtceu:free_alpha_gas 1000")
        .outputFluids("gtceu:cosmic_superconductor 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.mixer("gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .itemInputs("10x gtceu:indium_dust", "2x gtceu:cobalt_dust", "1x gtceu:cerium_dust", "1x gtceu:caesium_dust")
        .inputFluids("gtceu:cosmic_computing_mixture 1000")
        .itemOutputs("14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("kubejs:charged_lepton_trap_crystal")
        .notConsumable("gtceu:starmetal_nanoswarm")
        .itemInputs("kubejs:lepton_trap_crystal", "2x gtceu:small_vibranium_dust")
        .inputFluids("gtceu:free_electron_gas 1000", "gtceu:heavy_lepton_mixture 1000")
        .itemOutputs("kubejs:charged_lepton_trap_crystal")
        .EUt(491520)
        .duration(240)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.electric_blast_furnace("kubejs:lepton_trap_crystal")
        .itemInputs("gtceu:meitnerium_dust", "gtceu:molybdenum_dust", "gtceu:rhenium_dust")
        .inputFluids("gtceu:naquadah_alloy 288")
        .itemOutputs("kubejs:lepton_trap_crystal")
        .EUt(3450000)
        .duration(340)
        .blastFurnaceTemp(10900)

    gtr.chemical_reactor("gtceu:styrene_a")
        .circuit(1)
        .inputFluids("gtceu:ethylbenzene 1000")
        .outputFluids("gtceu:styrene 1000", "gtceu:hydrogen 2000")
        .EUt(30)
        .duration(30)

    gtr.electric_blast_furnace("kubejs:taranium_boulea")
        .itemInputs("64x gtceu:silicon_block", "8x gtceu:taranium_ingot", "4x gtceu:gallium_arsenide_dust")
        .inputFluids("gtceu:radon 16000")
        .itemOutputs("kubejs:taranium_boule")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(24000)
        .blastFurnaceTemp(10500)

    gtr.assembler("gtceu:integrated_ore_processor")
        .itemInputs("gtceu:large_maceration_tower",
            "gtceu:large_centrifuge",
            "gtceu:large_sifting_funnel",
            "gtceu:large_chemical_bath",
            "8x gtceu:zpm_robot_arm",
            "8x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "16x gtceu:double_hsss_plate")
        .inputFluids("gtceu:duranium 2880")
        .itemOutputs("gtceu:integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    gtr.alloy_smelter("kubejs:dragon_strength_tritanium_casing")
        .itemInputs("16x kubejs:extreme_strength_tritanium_casing", "16x kubejs:draconium_block_charged")
        .itemOutputs("kubejs:dragon_strength_tritanium_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2000)

    gtr.chemical_reactor("kubejs:blaze_blast_furnace_casing")
        .itemInputs("gtceu:high_temperature_smelting_casing", "32x gtceu:tin_foil")
        .inputFluids("gtceu:blaze 1440", "gtceu:gallium_arsenide 576", "gtceu:vanadium_gallium 288")
        .itemOutputs("kubejs:blaze_blast_furnace_casing")
        .EUt(1920)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtceu:vinyl_chloride_a")
        .circuit(1)
        .inputFluids("gtceu:chlorine 4000", "gtceu:ethane 1000")
        .outputFluids("gtceu:vinyl_chloride 1000", "gtceu:hydrochloric_acid 3000")
        .EUt(30)
        .duration(160)

    gtr.assembly_line("kubejs:dimension_creation_casing")
        .itemInputs("gtceu:infinity_frame",
            "64x gtceu:lv_world_accelerator",
            "64x gtceu:mv_world_accelerator",
            "64x gtceu:hv_world_accelerator",
            "64x gtceu:ev_world_accelerator",
            "64x gtceu:iv_world_accelerator",
            "64x gtceu:luv_world_accelerator",
            "64x gtceu:zpm_world_accelerator",
            "64x gtceu:uv_world_accelerator",
            "16x gtceu:hyper_core",
            "4x gtceu:spacetimebendingcore",
            "4x kubejs:dimensional_stability_casing",
            "4x kubejs:spacetime_compression_field_generator",
            "6x kubejs:topological_manipulator_unit",
            "gtceu:max_field_generator",
            "4x gtceu:double_eternity_plate")
        .inputFluids("gtceu:infinity 576", "gtceu:super_mutated_living_solder 1000", "gtceu:liquid_cosmic_mesh 1000", "gtceu:spatialfluid 2000")
        .itemOutputs("kubejs:dimension_creation_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("kubejs:dimension_connection_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtceu:door_of_create")
        .itemInputs("16x gtceu:infinity_frame",
            "16x gtceu:sphere_of_harmony",
            "16x kubejs:dimension_creation_casing",
            "16x kubejs:dimension_connection_casing",
            "8x kubejs:suprachronal_mainframe_complex",
            "8x kubejs:cosmic_singularity",
            "8x kubejs:chaotic_core",
            "64x kubejs:void_matter",
            "16x kubejs:quantum_anomaly",
            "16x gtceu:max_robot_arm",
            "gtceu:mega_max_battery",
            "64x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:super_mutated_living_solder 288000", "gtceu:infinity 100000", "gtceu:liquid_cosmic_mesh 100000", "gtceu:spacetime 100000")
        .itemOutputs("gtceu:door_of_create")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:dimension_creation_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembler("kubejs:dimension_connection_casing")
        .itemInputs("gtceu:draconium_frame", "kubejs:dimensional_bridge_casing", "gtceu:periodicium_block", "8x gtceu:double_mithril_plate", "4x gtceu:cosmic_plate", "2x gtceu:double_shirabon_plate")
        .itemOutputs("kubejs:dimension_connection_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.centrifuge("gtceu:adamantine_compounds_dust_a")
        .notConsumable("kubejs:microwormhole_generator")
        .itemInputs("4x gtceu:adamantine_compounds_dust")
        .itemOutputs("gtceu:adamantine_dust")
        .inputFluids("gtceu:mana 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)

    gtr.assembler("kubejs:magnetohydrodynamicallyconstrainedstarmatter_helmet")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("50x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "kubejs:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_helmet")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(1)
        .duration(200)

    gtr.assembler("kubejs:magnetohydrodynamicallyconstrainedstarmatter_chestplate")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("80x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "kubejs:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_chestplate")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(2)
        .duration(200)

    gtr.assembler("kubejs:magnetohydrodynamicallyconstrainedstarmatter_leggings")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("70x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "kubejs:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_leggings")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(3)
        .duration(200)

    gtr.assembler("kubejs:magnetohydrodynamicallyconstrainedstarmatter_boots")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("40x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "kubejs:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_boots")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(4)
        .duration(200)

    gtr.large_chemical_reactor("gtceu:glycerol_a")
        .circuit(1)
        .notConsumable("gtceu:soda_ash_dust")
        .notConsumableFluid("gtceu:carbon_dioxide 10000")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:epichlorohydrin 1000", "minecraft:water 2000")
        .outputFluids("gtceu:glycerol 1000", "gtceu:salt_water 1000")
        .EUt(7680)
        .duration(150)

    gtr.assembler("kubejs:echo_casing")
        .itemInputs("gtceu:europium_frame", "kubejs:reinforced_echo_shard", "6x gtceu:double_hsse_plate")
        .itemOutputs("2x kubejs:echo_casing")
        .circuit(6)
        .EUt(30)
        .duration(200)

    gtr.precision_assembler("kubejs:machine_casing_grinding_head")
        .itemInputs("gtceu:europium_frame", "8x kubejs:reinforced_echo_shard", "6x gtceu:tungsten_grinding_head", "36x gtceu:double_hsse_plate")
        .inputFluids("gtceu:annealed_copper 1440", "gtceu:invar 1440", "gtceu:nickel_zinc_ferrite 1440", "gtceu:osmiridium 1440")
        .itemOutputs("kubejs:machine_casing_grinding_head")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("kubejs:bedrock_drill")
        .itemInputs("kubejs:reinforced_echo_shard", "minecraft:bedrock", "gtceu:neutronium_buzz_saw_blade", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:rhodium 576", "gtceu:hastelloy_x 576", "gtceu:hsss 576", "gtceu:hsse 576")
        .itemOutputs("kubejs:bedrock_drill")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.large_chemical_reactor("gtceu:toluene_diisocyanate")
        .inputFluids("gtceu:nitric_acid 2000", "gtceu:phosgene 2000", "gtceu:toluene 1000", "gtceu:hydrogen 1000")
        .outputFluids("gtceu:toluene_diisocyanate 2000", "gtceu:hydrochloric_acid 4000", "minecraft:water 6000")
        .EUt(480)
        .duration(130)

    gtr.chemical_reactor("gtceu:polyurethane")
        .inputFluids("gtceu:oxygen 1000", "gtceu:ethyleneglycol 4000", "gtceu:toluene_diisocyanate 1000")
        .outputFluids("gtceu:polyurethane 1000", "minecraft:water 7000")
        .EUt(480)
        .duration(110)

    gtr.mixer("gtceu:viscoelastic_polyurethane")
        .itemInputs("5x gtceu:calcite_dust")
        .inputFluids("gtceu:polyurethane 1000", "gtceu:ethyleneglycol 1000")
        .outputFluids("gtceu:viscoelastic_polyurethane 2000")
        .EUt(120)
        .duration(110)

    gtr.mixer("gtceu:viscoelastic_polyurethane_foam")
        .inputFluids("gtceu:viscoelastic_polyurethane 1000", "gtceu:air 1000")
        .outputFluids("gtceu:viscoelastic_polyurethane_foam 2000")
        .EUt(120)
        .duration(150)

    gtr.fluid_solidifier("kubejs:memory_foam_block")
        .notConsumable("gtceu:block_casting_mold")
        .inputFluids("gtceu:viscoelastic_polyurethane_foam 1000")
        .itemOutputs("kubejs:memory_foam_block")
        .EUt(30)
        .duration(60)

    gtr.chemical_bath("gtceu:glucose")
        .itemInputs("2x gtceu:sugar_gem")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("24x gtceu:glucose_dust")
        .EUt(480)
        .duration(300)

    gtr.mixer("gtceu:glucose_iron_solution")
        .itemInputs("24x gtceu:glucose_dust")
        .inputFluids("gtceu:iron_iii_chloride 1000")
        .outputFluids("gtceu:glucose_iron_solution 1000")
        .EUt(30)
        .duration(80)

    gtr.distillery("kubejs:graphene_iron_plate")
        .notConsumable("gtceu:long_yttrium_barium_cuprate_rod")
        .inputFluids("gtceu:glucose_iron_solution 1000")
        .itemOutputs("kubejs:graphene_iron_plate")
        .EUt(120)
        .duration(40)

    gtr.electromagnetic_separator("gtceu:graphene_oxide_dust")
        .itemInputs("kubejs:graphene_iron_plate")
        .itemOutputs("3x gtceu:graphene_oxide_dust", "gtceu:iron_dust")
        .EUt(30)
        .duration(120)

    gtr.mixer("gtceu:graphene_gel_suspension_dust")
        .itemInputs("3x gtceu:graphene_oxide_dust")
        .inputFluids("gtceu:resorcinol 1000", "gtceu:formaldehyde 1000")
        .itemOutputs("gtceu:graphene_gel_suspension_dust")
        .EUt(120)
        .duration(100)

    gtr.vacuum_freezer("kubejs:cold_ice_casing")
        .itemInputs("gtceu:frostproof_machine_casing")
        .inputFluids("gtceu:ice 10000", "gtceu:vanadium_gallium 576")
        .itemOutputs("kubejs:cold_ice_casing")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.autoclave("gtceu:dry_graphene_gel_dust")
        .inputFluids("gtceu:acetone 1000")
        .itemInputs("gtceu:graphene_gel_suspension_dust")
        .itemOutputs("gtceu:dry_graphene_gel_dust")
        .EUt(480)
        .duration(260)

    gtr.fluid_heater("gtceu:supercritical_carbon_dioxide")
        .inputFluids("gtceu:carbon_dioxide 1000")
        .outputFluids("gtceu:supercritical_carbon_dioxide 1000")
        .EUt(480)
        .duration(200)

    gtr.electric_blast_furnace("kubejs:aerographene")
        .itemInputs("gtceu:dry_graphene_gel_dust")
        .inputFluids("gtceu:supercritical_carbon_dioxide 1000")
        .itemOutputs("kubejs:aerographene")
        .EUt(120)
        .duration(400)
        .blastFurnaceTemp(5000)

    gtr.qft("kubejs:hyper_stable_self_healing_adhesive")
        .chancedInput("gtceu:uruium_nanoswarm", 500, 0)
        .itemInputs("64x gtceu:activated_carbon_dust", "64x gtceu:bismuth_dust")
        .inputFluids("gtceu:oxygen 20000", "gtceu:hydrogen 20000")
        .chancedOutput("kubejs:hyper_stable_self_healing_adhesive", 2000, 0)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.qft("kubejs:black_body_naquadria_supersolid")
        .chancedInput("gtceu:uruium_nanoswarm", 500, 0)
        .itemInputs("64x gtceu:naquadria_dust", "64x gtceu:magnesium_dust")
        .inputFluids("gtceu:phosphoric_acid 20000", "gtceu:sulfuric_acid 20000")
        .chancedOutput("kubejs:black_body_naquadria_supersolid", 2000, 0)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.assembler("kubejs:two_way_foil")
        .itemInputs("gtceu:chaos_foil", "kubejs:hyper_stable_self_healing_adhesive", "kubejs:cosmic_fabric")
        .itemOutputs("kubejs:two_way_foil")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.dimensionally_transcendent_plasma_forge("kubejs:infinity_glass")
        .itemInputs("kubejs:black_body_naquadria_supersolid", "2x gtceu:infinity_dust")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000", "gtceu:woods_glass 9216")
        .itemOutputs("kubejs:infinity_glass")
        .EUt(4096 * GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(88000)

    gtr.dimensionally_transcendent_plasma_forge("kubejs:create_casing")
        .itemInputs("gtceu:eternity_frame", "kubejs:command_block_core")
        .inputFluids("gtceu:exciteddtsc 1000", "gtceu:primordialmatter 1000")
        .itemOutputs("kubejs:create_casing")
        .EUt(16384 * GTValues.VA[GTValues.MAX])
        .duration(3200)
        .blastFurnaceTemp(96000)

    gtr.gravitation_shockburst("kubejs:chain_command_block_core")
        .itemInputs("kubejs:command_block_core", "64x minecraft:observer")
        .itemOutputs("kubejs:chain_command_block_core")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("kubejs:repeating_command_block_core")
        .itemInputs("kubejs:chain_command_block_core", "64x minecraft:calibrated_sculk_sensor")
        .itemOutputs("kubejs:repeating_command_block_core")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("kubejs:command_block_broken")
        .itemInputs("minecraft:command_block", "gtceu:magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemOutputs("kubejs:command_block_broken")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("kubejs:chain_command_block_broken")
        .itemInputs("minecraft:chain_command_block", "gtceu:magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemOutputs("kubejs:chain_command_block_broken")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.assembly_line("kubejs:chaotic_energy_core")
        .itemInputs("kubejs:draconic_energy_core",
            "64x gtceu:uhv_ultimate_battery",
            "16x kubejs:chaotic_core",
            "32x #gtceu:circuits/max",
            "16x gtceu:white_dwarf_mtter_nanoswarm",
            "16x gtceu:black_dwarf_mtter_nanoswarm",
            "64x kubejs:smd_capacitor_supracausal",
            "64x kubejs:smd_diode_supracausal",
            "64x kubejs:smd_resistor_supracausal",
            "64x kubejs:smd_transistor_supracausal",
            "64x kubejs:smd_inductor_supracausal",
            "64x gtceu:chaos_block",
            "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_rod",
            "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_plate",
            "64x gtceu:shirabon_plate",
            "32x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:chaos 28800", "gtceu:spacetime 10000", "gtceu:primordialmatter 10000")
        .itemOutputs("kubejs:chaotic_energy_core")
        .EUt(64 * GTValues.VA[GTValues.MAX])
        .duration(2560)
        .stationResearch(b => b.researchStack(Item.of("kubejs:create_ultimate_battery"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("kubejs:hollow_casing")
        .itemInputs("kubejs:molecular_casing",
            "16x gtceu:magnalium_screw",
            "4x gtceu:europium_plate",
            "16x gtceu:apatite_screw",
            "2x gtceu:double_uranium_plate",
            "16x gtceu:molybdenum_screw",
            "4x gtceu:double_duranium_plate",)
        .inputFluids("gtceu:stainless_steel 1296", "gtceu:indium_gallium_phosphide 1296", "gtceu:wrought_iron 1296", "gtceu:indium_tin_barium_titanium_cuprate 1296")
        .itemOutputs("2x kubejs:hollow_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .stationResearch(b => b.researchStack(Item.of("kubejs:molecular_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("kubejs:spacetime_assembly_line_unit")
        .itemInputs("gtceu:adamantium_frame",
            "kubejs:advanced_assembly_line_unit",
            "kubejs:machine_casing_circuit_assembly_line",
            "kubejs:precision_circuit_assembly_robot_mk2",
            "gtceu:osmium_nanoswarm",
            "6x kubejs:optical_processing_core",
            "2x #gtceu:circuits/uev",
            "4x gtceu:blue_steel_gear",
            "4x gtceu:red_steel_gear",
            "4x gtceu:zpm_robot_arm",
            "6x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:liquidcrystalkevlar 5760", "gtceu:enderite 1296", "gtceu:highurabilityompoundteel 1296", "gtceu:pikyonium 1296")
        .itemOutputs("kubejs:spacetime_assembly_line_unit")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("kubejs:advanced_assembly_line_unit"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("kubejs:molecular_coil")
        .itemInputs("kubejs:hollow_casing",
            "2x gtceu:naquadah_coil_block",
            "2x gtceu:fusion_coil",
            "64x gtceu:fine_europium_wire",
            "32x gtceu:enriched_naquadah_trinium_europium_duranide_foil")
        .inputFluids("gtceu:borosilicate_glass 2304", "gtceu:silicone_rubber 5760", "gtceu:uranium_triplatinum 1296", "gtceu:stellite_100 1296")
        .itemOutputs("2x kubejs:molecular_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:molybdenum_disilicide_coil_block"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("kubejs:containment_field_generator")
        .itemInputs("kubejs:hollow_casing",
            "4x gtceu:luv_field_generator",
            "6x gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire",
            "4x #gtceu:circuits/uv",
            "gtceu:uv_transformer_16a",
            "6x gtceu:double_vanadium_gallium_plate",
            "4x gtceu:double_enriched_naquadah_trinium_europium_duranide_plate")
        .inputFluids("gtceu:lanthanum 2304", "gtceu:cobalt_brass 5760", "gtceu:battery_alloy 5760", "gtceu:molybdenum_disilicide 1296")
        .itemOutputs("kubejs:containment_field_generator")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .stationResearch(b => b.researchStack(Item.of("kubejs:force_field_glass"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtceu:crystalline_infinity")
        .itemInputs("4x gtceu:uev_autoclave",
            "4x gtceu:uev_chemical_bath",
            "16x gtceu:uhv_emitter",
            "16x gtceu:uhv_electric_pump",
            "8x gtceu:adamantium_rotor",
            "4x gtceu:neutronium_nanoswarm",
            "32x #gtceu:circuits/uev",
            "16x gtceu:titansteel_octal_cable",
            "16x gtceu:double_indium_tin_barium_titanium_cuprate_plate",
            "32x gtceu:double_tritanium_plate")
        .inputFluids("gtceu:lanthanum 2304", "gtceu:cobalt_brass 5760", "gtceu:battery_alloy 5760", "gtceu:molybdenum_disilicide 1296")
        .itemOutputs("gtceu:crystalline_infinity")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_autoclave"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:star_ultimate_material_forge_factory")
        .itemInputs("4x gtceu:stellar_forge",
            "4x gtceu:uiv_electric_furnace",
            "4x gtceu:uiv_arc_furnace",
            "4x gtceu:uiv_alloy_smelter",
            "16x gtceu:uiv_electric_pump",
            "gtceu:transcendent_max_battery",
            "4x gtceu:uxv_sensor",
            "16x #gtceu:circuits/uxv",
            "8x kubejs:containment_field_generator",
            "8x gtceu:hyper_core",
            "64x gtceu:vibranium_plate",
            "32x gtceu:double_vibramantium_plate")
        .inputFluids("gtceu:incoloy_ma_956 5760", "gtceu:germaniumtungstennitride 5760", "gtceu:abyssalalloy 5760", "gtceu:titanium_carbide 5760")
        .itemOutputs("gtceu:star_ultimate_material_forge_factory")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("kubejs:stellar_containment_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtceu:suprachronal_assembly_line")
        .itemInputs("kubejs:infinite_cell_component",
            "16x gtceu:advanced_assembly_line",
            "16x gtceu:circuit_assembly_line",
            "4x kubejs:spacetime_assembly_line_casing",
            "4x kubejs:spacetime_assembly_line_unit",
            "32x kubejs:molecular_coil",
            "16x gtceu:uev_emitter",
            "16x gtceu:uev_sensor",
            "16x kubejs:precision_circuit_assembly_robot_mk3",
            "16x #gtceu:circuits/uiv",
            "gtceu:max_battery",
            "32x gtceu:double_dalisenite_plate")
        .inputFluids("gtceu:borosilicate_glass 3204", "gtceu:silicone_rubber 5760", "gtceu:uranium_triplatinum 1296", "gtceu:stellite_100 1296")
        .itemOutputs("gtceu:suprachronal_assembly_line")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:assembler_module"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembler("kubejs:force_field_glass")
        .itemInputs("gtceu:laminated_glass", "gtceu:uhv_field_generator", "4x gtceu:long_naquadah_alloy_rod", "2x gtceu:long_mithril_rod", "4x gtceu:double_uranium_rhodium_dinaquadide_plate", "2x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .itemOutputs("kubejs:force_field_glass")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:molecular_casing")
        .itemInputs("gtceu:high_power_casing", "4x gtceu:double_battery_alloy_plate", "gtceu:iv_emitter", "24x gtceu:darmstadtium_ring", "12x gtceu:tungsten_foil", "12x gtceu:ruridit_foil", "24x gtceu:tungsten_steel_foil", "6x gtceu:rhodium_plate", "4x gtceu:double_ruthenium_plate")
        .inputFluids("gtceu:niobium_nitride 864")
        .itemOutputs("kubejs:molecular_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("kubejs:spacetime_assembly_line_casing")
        .itemInputs("gtceu:assembly_line_casing", "gtceu:uhv_emitter", "4x gtceu:uev_electric_motor", "2x gtceu:uev_conveyor_module", "2x gtceu:uev_electric_piston", "2x #gtceu:circuits/uev", "8x gtceu:double_zinc_plate")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .itemOutputs("kubejs:spacetime_assembly_line_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtceu:electric_implosion_compressor")
        .itemInputs("4x gtceu:implosion_compressor", "4x gtceu:luv_transformer_16a", "4x gtceu:luv_diode", "8x gtceu:luv_field_generator", "16x gtceu:tritanium_hex_cable", "4x gtceu:dense_obsidian_plate", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtceu:electric_implosion_compressor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.compressor("gtceu:dimensionally_transcendent_dirt_forge")
        .itemInputs("64x gtceu:primitive_blast_furnace")
        .itemOutputs("gtceu:dimensionally_transcendent_dirt_forge")
        .EUt(8)
        .duration(1200)

    gtr.compressor("gtceu:dimensionally_transcendent_steam_boiler")
        .itemInputs("64x gtceu:tungstensteel_large_boiler")
        .itemOutputs("gtceu:dimensionally_transcendent_steam_boiler")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtceu:steam_mega_turbine")
        .itemInputs("8x gtceu:steam_large_turbine", "16x #gtceu:circuits/iv", "4x gtceu:ev_electric_pump", "8x gtceu:ev_electric_piston", "8x gtceu:black_bronze_turbine_blade", "8x gtceu:double_molybdenum_plate", "32x gtceu:double_steel_plate")
        .itemOutputs("gtceu:steam_mega_turbine")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1200)

    gtr.assembler("gtceu:gas_mega_turbine")
        .itemInputs("8x gtceu:gas_large_turbine", "16x #gtceu:circuits/luv", "8x gtceu:ev_electric_pump", "32x gtceu:ev_electric_piston", "8x gtceu:neodymium_turbine_blade", "8x gtceu:double_sterling_silver_plate", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtceu:gas_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtceu:rocket_mega_turbine")
        .itemInputs("8x gtceu:rocket_large_turbine", "16x #gtceu:circuits/zpm", "4x gtceu:iv_electric_motor", "8x gtceu:iv_electric_piston", "8x gtceu:tungsten_turbine_blade", "8x gtceu:double_vanadium_steel_plate", "32x gtceu:double_titanium_plate")
        .itemOutputs("gtceu:rocket_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtceu:plasma_mega_turbine")
        .itemInputs("8x gtceu:plasma_large_turbine", "16x #gtceu:circuits/uv", "8x gtceu:iv_electric_pump", "16x gtceu:iv_electric_piston", "8x gtceu:osmiridium_turbine_blade", "8x gtceu:double_ultimet_plate", "32x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtceu:plasma_mega_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtceu:chemical_energy_devourer")
        .itemInputs("4x gtceu:extreme_combustion_engine", "4x gtceu:iv_field_generator", "8x gtceu:iv_emitter", "8x gtceu:iv_electric_pump", "16x gtceu:ev_fluid_regulator", "8x gtceu:small_tungsten_spring", "8x gtceu:small_vanadium_gallium_spring", "8x gtceu:luv_transformer_4a", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:lubricant 10000")
        .itemOutputs("gtceu:chemical_energy_devourer")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.ultimate_material_forge("kubejs:proto_matter")
        .itemInputs("kubejs:triplet_neutronium_sphere")
        .inputFluids("gtceu:uu_matter 1000")
        .itemOutputs("kubejs:proto_matter")
        .chancedOutput("gtceu:neutronium_ingot", 6000, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    function implosion_compressor_add(input, output, am) {
        gtr.implosion_compressor(output + "_powderbarrel")
            .itemInputs(input)
            .itemInputs("8x gtceu:powderbarrel")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.implosion_compressor(output + "_tnt")
            .itemInputs(input)
            .itemInputs("4x minecraft:tnt")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.implosion_compressor(output + "_dynamite")
            .itemInputs(input)
            .itemInputs("2x gtceu:dynamite")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.implosion_compressor(output + "_itnt")
            .itemInputs(input)
            .itemInputs("gtceu:industrial_tnt")
            .itemOutputs(am + "x " + output)
            .chancedOutput("gtceu:dark_ash_dust", 2500, 0)
            .EUt(30)
            .duration(20)

        gtr.electric_implosion_compressor("e" + output)
            .itemInputs(input)
            .itemOutputs(am + "x " + output)
            .EUt(GTValues.VA[GTValues.UV])
            .duration(1)
    }
    implosion_compressor_add("4x gtceu:echo_dust", "minecraft:echo_shard", 3)
    implosion_compressor_add(["minecraft:command_block", "kubejs:two_way_foil"], "kubejs:command_block_core", 1)
    implosion_compressor_add(["ae2:singularity", "kubejs:warped_ender_pearl"], "kubejs:entangled_singularity", 1)
    implosion_compressor_add("4x gtceu:certus_quartz_gem", "ae2:charged_certus_quartz_crystal", 4)
    implosion_compressor_add(["4x ad_astra:steel_plate", "2x gtceu:dense_tungsten_steel_plate"], "ad_astra:steel_block", 1)
    implosion_compressor_add(["64x avaritia:neutron_pile", "64x avaritia:neutron_pile"], "avaritia:neutron_nugget", 1)
    implosion_compressor_add("9x avaritia:neutron_nugget", "avaritia:neutron_ingot", 1)
    implosion_compressor_add("9x avaritia:neutron_ingot", "avaritia:neutron", 1)

    gtr.electric_implosion_compressor("minecraft:diamond")
        .itemInputs("64x minecraft:coal")
        .itemInputs("64x minecraft:coal")
        .itemOutputs("minecraft:diamond")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1)

    gtr.electric_implosion_compressor("avaritia:eternal_singularity")
        .notConsumable("16x gtceu:eternity_nanoswarm")
        .itemInputs("gtceu:spacetime_dust")
        .itemOutputs("avaritia:eternal_singularity")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(20)

    function op1(macerator, machine, am, a, b, ci, ch, mch1, mch2, mch3, mch4, tag) {
        event.forEachRecipe(
            { type: "gtceu:thermal_centrifuge", input: machine.outputs.item[0].content.ingredient.item }, c => {
                let thermal_centrifuge = JSON.parse(c.json.toString())
                event.forEachRecipe(
                    { type: "gtceu:macerator", input: thermal_centrifuge.outputs.item[0].content.ingredient.item }, d => {
                        let macerators = JSON.parse(d.json.toString())
                        gtr.integrated_ore_processor(d.id + c.id.toString().slice(8, -1) + c.id.toString().slice(8, -1) + b.id.toString().slice(8, -1) + a.id.toString().slice(8, -1))
                            .circuit(ci + 1)
                            .inputFluids("gtceu" + machine.inputs.fluid[0].content.value[0].tag.slice(5) + " " + 100 * am)
                            .itemInputs("#" + tag)
                            .itemOutputs(am + "x " + macerators.outputs.item[0].content.ingredient.item, "gtceu:stone_dust")
                            .chancedOutput(macerator.outputs.item[1].content.ingredient.item, mch1, mch2)
                            .chancedOutput(macerator.outputs.item[2].content.ingredient.item, mch3, mch4)
                            .chancedOutput(am + "x " + machine.outputs.item[1].content.ingredient.item, ch, 0)
                            .chancedOutput(am + "x " + thermal_centrifuge.outputs.item[1].content.ingredient.item, 3333, 0)
                            .chancedOutput(am + "x " + macerators.outputs.item[1].content.ingredient.item, 1400, 850)
                            .EUt(30)
                            .duration(am * 400 + 100)
                    })
            })
        event.forEachRecipe(
            { type: "gtceu:macerator", input: machine.outputs.item[0].content.ingredient.item }, c => {
                let macerators = JSON.parse(c.json.toString())
                event.forEachRecipe(
                    { type: "gtceu:centrifuge", input: macerators.outputs.item[0].content.ingredient.item }, d => {
                        let centrifuge = JSON.parse(d.json.toString())
                        gtr.integrated_ore_processor(d.id + c.id.toString().slice(8, -1) + c.id.toString().slice(8, -1) + b.id.toString().slice(8, -1) + a.id.toString().slice(8, -1))
                            .circuit(ci + 2)
                            .inputFluids("gtceu" + machine.inputs.fluid[0].content.value[0].tag.slice(5) + " " + 100 * am)
                            .itemInputs("#" + tag)
                            .itemOutputs(am + "x " + centrifuge.outputs.item[0].content.ingredient.item, "gtceu:stone_dust")
                            .chancedOutput(macerator.outputs.item[1].content.ingredient.item, mch1, mch2)
                            .chancedOutput(macerator.outputs.item[2].content.ingredient.item, mch3, mch4)
                            .chancedOutput(am + "x " + machine.outputs.item[1].content.ingredient.item, ch, 0)
                            .chancedOutput(am + "x " + macerators.outputs.item[1].content.ingredient.item, 1400, 850)
                            .chancedOutput(am + "x " + centrifuge.outputs.item[1].content.ingredient.item, 1111, 0)
                            .EUt(30)
                            .duration(am * 300 + 100)
                    })
            })
        event.forEachRecipe(
            { type: "gtceu:sifter", input: machine.outputs.item[0].content.ingredient.item }, c => {
                let sifter = JSON.parse(c.json.toString())
                event.forEachRecipe(
                    { type: "gtceu:centrifuge", input: sifter.outputs.item[3].content.ingredient.item }, d => {
                        let centrifuge = JSON.parse(d.json.toString())
                        gtr.integrated_ore_processor(d.id + c.id.toString().slice(8, -1) + c.id.toString().slice(8, -1) + b.id.toString().slice(8, -1) + a.id.toString().slice(8, -1))
                            .circuit(ci + 3)
                            .inputFluids("gtceu" + machine.inputs.fluid[0].content.value[0].tag.slice(5) + " " + 100 * am)
                            .itemInputs("#" + tag)
                            .itemOutputs("gtceu:stone_dust")
                            .chancedOutput(macerator.outputs.item[1].content.ingredient.item, mch1, mch2)
                            .chancedOutput(macerator.outputs.item[2].content.ingredient.item, mch3, mch4)
                            .chancedOutput(am + "x " + machine.outputs.item[1].content.ingredient.item, ch, 0)
                            .chancedOutput(am + "x " + sifter.outputs.item[0].content.ingredient.item, 500, 150)
                            .chancedOutput(am + "x " + sifter.outputs.item[1].content.ingredient.item, 1500, 200)
                            .chancedOutput(am + "x " + sifter.outputs.item[2].content.ingredient.item, 5000, 1000)
                            .chancedOutput(am + "x " + centrifuge.outputs.item[0].content.ingredient.item, 2500, 500)
                            .chancedOutput(am + "x " + centrifuge.outputs.item[1].content.ingredient.item, 278, 55)
                            .EUt(30)
                            .duration(am * 400 + 100)
                    })
            })
    }
    function op2(macerator, am, a, mch1, mch2, mch3, mch4, tag) {
        event.forEachRecipe(
            { type: "gtceu:ore_washer", input: macerator.outputs.item[0].content.ingredient.item, id: /.*_distilled/ }, b => {
                let ore_washer = JSON.parse(b.json.toString())
                op1(macerator, ore_washer, am, a, b, 1, 3333, mch1, mch2, mch3, mch4, tag)
            })
        event.forEachRecipe(
            { type: "gtceu:chemical_bath", input: macerator.outputs.item[0].content.ingredient.item }, b => {
                let chemical_bath = JSON.parse(b.json.toString())
                op1(macerator, chemical_bath, am, a, b, 4, 7000, mch1, mch2, mch3, mch4, tag)
            })
        event.forEachRecipe(
            { type: "gtceu:macerator", input: macerator.outputs.item[0].content.ingredient.item }, b => {
                let macerators = JSON.parse(b.json.toString())
                event.forEachRecipe(
                    { type: "gtceu:centrifuge", input: macerators.outputs.item[0].content.ingredient.item }, c => {
                        let centrifuge = JSON.parse(c.json.toString())
                        gtr.integrated_ore_processor(c.id + b.id.toString().slice(8, -1) + a.id.toString().slice(8, -1))
                            .circuit(1)
                            .itemInputs("#" + tag)
                            .itemOutputs(am + "x " + centrifuge.outputs.item[0].content.ingredient.item)
                            .chancedOutput(macerator.outputs.item[1].content.ingredient.item, mch1, mch2)
                            .chancedOutput(macerator.outputs.item[2].content.ingredient.item, mch3, mch4)
                            .chancedOutput(am + "x " + macerators.outputs.item[1].content.ingredient.item, 1400, 850)
                            .chancedOutput(am + "x " + centrifuge.outputs.item[1].content.ingredient.item, 1111, 0)
                            .EUt(30)
                            .duration(am * 100 + 100)
                    })
            })
    }

    event.forEachRecipe(
        { type: "gtceu:macerator", input: "#forge:ores_in_ground/stone" }, a => {
            let macerator = JSON.parse(a.json.toString())
            let am = macerator.outputs.item[0].content.count
            op2(macerator, am, a, 1400, 850, 6700, 800, macerator.inputs.item[0].content.children[0].tag)
        })
    event.forEachRecipe(
        { type: "gtceu:macerator", input: "#forge:raw_materials" }, a => {
            let macerator = JSON.parse(a.json.toString())
            let am = macerator.outputs.item[0].content.count
            op2(macerator, am, a, 1000, 0, 500, 0, macerator.inputs.item[0].content.ingredient.tag)
        })

    gtr.chemical_reactor("gtceu:ethylene_f_ethanol")
        .circuit(1)
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:ethanol 1000")
        .outputFluids("gtceu:ethylene 1000", "gtceu:diluted_sulfuric_acid 1000")
        .EUt(120)
        .duration(1200)

    gtr.assembler("gtceu:petrochemical_plant")
        .itemInputs("16x gtceu:watertight_steel_frame", "8x gtceu:large_distillery", "4x gtceu:large_cracker", "gtceu:chemical_plant", "4x #gtceu:circuits/uhv", "4x gtceu:zpm_emitter", "16x gtceu:zpm_fluid_regulator", "16x gtceu:stainless_steel_nonuple_fluid_pipe", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtceu:petrochemical_plant")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    const lasers = [["iv", "4x gtceu:platinum_single_cable", 7680],
    ["luv", "4x gtceu:niobium_titanium_single_cable", 30720],
    ["zpm", "4x gtceu:vanadium_gallium_single_cable", 122880],
    ["uv", "4x gtceu:yttrium_barium_cuprate_single_cable", 491520],
    ["uhv", "4x gtceu:europium_single_cable", 1966080],
    ["uev", "4x gtceu:mithril_single_cable", 7864320],
    ["uiv", "4x gtceu:neutronium_single_cable", 34257280],
    ["uxv", "4x gtceu:taranium_single_cable", 125829120],
    ["opv", "4x gtceu:crystalmatrix_single_cable", 503316480]]

    lasers.forEach(laser => {
        for (let index = 0; index < 5; index++) {
            gtr.assembler("gtceu:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_sensor",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtceu:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))

            gtr.assembler("gtceu:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_emitter",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtceu:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))
        }
    })
    for (let index = 0; index < 8; index++) {
        gtr.assembler("gtceu:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtceu:max_sensor",
                (2 ** index) + "x gtceu:max_electric_pump",
                "4x gtceu:cosmicneutronium_single_cable")
            .itemOutputs("gtceu:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))

        gtr.assembler("gtceu:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtceu:max_emitter",
                (2 ** index) + "x gtceu:max_electric_pump",
                "4x gtceu:cosmicneutronium_single_cable")
            .itemOutputs("gtceu:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))
    }

    gtr.dyson_sphere("gtceu:dysonsphere")
        .inputFluids("kubejs:gelid_cryotheum 1")
        .EUt(-GTValues.V[GTValues.MAX])
        .duration(20)
        .CWUt(1)

    gtr.dyson_sphere("gtceu:dysonspherelaunch")
        .itemInputs("64x kubejs:dyson_swarm_module")
        .EUt(GTValues.V[GTValues.UIV])
        .duration(200)
        .CWUt(512)

    gtr.petrochemical_plant("gtceu:petrochemical_plant_1")
        .inputFluids("gtceu:oil 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 60",
            "gtceu:benzene 180",
            "gtceu:octane 60",
            "gtceu:butane 80",
            "gtceu:butene 100",
            "gtceu:butadiene 90",
            "gtceu:propane 80",
            "gtceu:propene 400",
            "gtceu:ethane 80",
            "gtceu:ethylene 400",
            "gtceu:methane 400",
            "gtceu:helium 20")
        .EUt(1920)
        .duration(200)

    gtr.petrochemical_plant("gtceu:petrochemical_plant_2")
        .inputFluids("gtceu:oil_medium 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 40",
            "gtceu:benzene 200",
            "gtceu:octane 30",
            "gtceu:butane 70",
            "gtceu:butene 100",
            "gtceu:butadiene 100",
            "gtceu:propane 30",
            "gtceu:propene 600",
            "gtceu:ethane 130",
            "gtceu:ethylene 1000",
            "gtceu:methane 1000",
            "gtceu:helium 10")
        .EUt(1920)
        .duration(200)

    gtr.petrochemical_plant("gtceu:petrochemical_plant_3")
        .inputFluids("gtceu:oil_heavy 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 240",
            "gtceu:benzene 1200",
            "gtceu:octane 20",
            "gtceu:butane 60",
            "gtceu:butene 240",
            "gtceu:butadiene 150",
            "gtceu:propane 30",
            "gtceu:propene 300",
            "gtceu:ethane 45",
            "gtceu:ethylene 450",
            "gtceu:methane 450",
            "gtceu:helium 10")
        .EUt(1920)
        .duration(200)

    gtr.petrochemical_plant("gtceu:petrochemical_plant_4")
        .inputFluids("gtceu:oil_light 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:toluene 20",
            "gtceu:benzene 100",
            "gtceu:octane 20",
            "gtceu:butane 120",
            "gtceu:butene 80",
            "gtceu:butadiene 80",
            "gtceu:propane 140",
            "gtceu:propene 90",
            "gtceu:ethane 200",
            "gtceu:ethylene 250",
            "gtceu:methane 2000",
            "gtceu:helium 40")
        .EUt(1920)
        .duration(200)

    gtr.chemical_bath("gtceu:naquadria_sulfate_dust")
        .itemInputs("6x gtceu:sodium_dust")
        .inputFluids("gtceu:acidic_naquadria_caesiumfluoride 3000")
        .itemOutputs("6x gtceu:naquadria_sulfate_dust", "8x gtceu:sodium_fluoride_dust", "14x gtceu:sodium_sulfate_dust")
        .chancedOutput("gtceu:caesium_dust", 8000, 500)
        .EUt(120)
        .duration(200)

    gtr.compressor("gtceu:dimensionally_transcendent_steam_oven")
        .itemInputs("64x gtceu:steam_oven")
        .itemOutputs("gtceu:dimensionally_transcendent_steam_oven")
        .EUt(16)
        .duration(1200)

    gtr.assembler("gtceu:slaughterhouse")
        .itemInputs("gtceu:steel_frame", "gtceu:lv_world_accelerator", "4x #gtceu:circuits/lv", "8x gtceu:lv_electric_motor", "4x gtceu:lv_robot_arm", "8x gtceu:invar_gear", "2x gtceu:diamond_grinding_head", "4x gtceu:double_steel_plate")
        .itemOutputs("gtceu:slaughterhouse")
        .EUt(30)
        .duration(400)

    gtr.assembly_line("gtceu:holy_separator")
        .itemInputs("4x gtceu:uhv_macerator",
            "4x gtceu:uhv_cutter",
            "4x gtceu:uhv_lathe",
            "4x gtceu:uhv_centrifuge",
            "16x gtceu:uev_robot_arm",
            "8x #gtceu:circuits/uiv",
            "8x gtceu:neutronium_gear",
            "64x gtceu:small_rhodium_plated_palladium_gear",
            "32x gtceu:long_orichalcum_rod",
            "16x gtceu:osmiridium_huge_restrictive_item_pipe",
            "16x gtceu:naquadria_plate")
        .inputFluids("gtceu:mutated_living_solder 1440", "gtceu:dysprosium 2880", "gtceu:rhodium 2880", "gtceu:moscovium 2880")
        .itemOutputs("gtceu:holy_separator")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_cutter"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.large_chemical_reactor("gtceu:mutated_living_solder")
        .notConsumable("gtceu:gravi_star")
        .itemInputs("16x kubejs:biological_cells", "gtceu:quantum_star")
        .inputFluids("gtceu:helium_plasma 2000", "gtceu:oxygen_plasma 2000", "gtceu:tin 2000", "gtceu:carbon 2000", "gtceu:beryllium 2000")
        .outputFluids("gtceu:mutated_living_solder 2000")
        .itemOutputs("4x gtceu:tiny_nether_star_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.autoclave("gtceu:super_mutated_living_solder")
        .inputFluids("gtceu:mutated_living_solder 10000")
        .itemInputs("64x kubejs:space_essence", "64x kubejs:draconium_dust")
        .outputFluids("gtceu:super_mutated_living_solder 10000")
        .itemOutputs("kubejs:essence_block")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)

    gtr.evaporation("gtceu:salt_water")
        .inputFluids("minecraft:water 50000")
        .outputFluids("gtceu:salt_water 1000")
        .EUt(30)
        .duration(600)

    gtr.centrifuge("gtceu:grade_1_purified_water")
        .inputFluids("minecraft:water 1000")
        .chancedOutput("gtceu:small_stone_dust", 5000, 0)
        .chancedOutput("gtceu:small_clay_dust", 2000, 0)
        .chancedOutput("gtceu:small_calcite_dust", 1000, 0)
        .chancedOutput("gtceu:small_salt_dust", 1000, 0)
        .chancedOutput("gtceu:polyethylene_nugget", 100, 0)
        .outputFluids("gtceu:grade_1_purified_water 900")
        .EUt(1920)
        .duration(200)

    gtr.fluid_heater("gtceu:grade_2_purified_water")
        .inputFluids("gtceu:grade_1_purified_water 1000")
        .outputFluids("gtceu:grade_2_purified_water 900")
        .EUt(7680)
        .duration(200)

    gtr.distillation_tower("gtceu:grade_3_purified_water")
        .inputFluids("gtceu:grade_2_purified_water 1000")
        .outputFluids("gtceu:grade_3_purified_water 900")
        .outputFluids("gtceu:grade_2_purified_water 50")
        .outputFluids("gtceu:grade_1_purified_water 50")
        .outputFluids("gtceu:oil 10")
        .outputFluids("gtceu:ammonia 10")
        .EUt(1920)
        .duration(200)
        .disableDistilleryRecipes(true)

    gtr.chemical_bath("gtceu:grade_4_purified_water")
        .itemInputs("64x gtceu:activated_carbon_dust")
        .inputFluids("gtceu:grade_3_purified_water 1000")
        .itemOutputs("64x gtceu:carbon_dust")
        .outputFluids("gtceu:grade_4_purified_water 950")
        .EUt(480)
        .duration(600)

    gtr.chemical_reactor("gtceu:grade_5_purified_water")
        .inputFluids("gtceu:grade_4_purified_water 1000")
        .notConsumable("gtceu:exquisite_cubic_zirconia_gem")
        .outputFluids("gtceu:grade_5_purified_water 990")
        .outputFluids("gtceu:steam 1000")
        .EUt(122880)
        .duration(200)

    gtr.electric_blast_furnace("gtceu:grade_6_purified_water")
        .notConsumable("gtceu:luv_fluid_regulator")
        .inputFluids("gtceu:grade_5_purified_water 1000")
        .outputFluids("gtceu:grade_6_purified_water 900")
        .chancedOutput("gtceu:tiny_ammonium_chloride_dust", 500, 0)
        .EUt(122880)
        .duration(80)
        .blastFurnaceTemp(6740)

    gtr.evaporation("gtceu:grade_7_purified_water")
        .inputFluids("gtceu:grade_6_purified_water 1000000")
        .outputFluids("gtceu:grade_7_purified_water 900000")
        .outputFluids("gtceu:grade_6_purified_water 10000")
        .outputFluids("gtceu:grade_5_purified_water 20000")
        .outputFluids("gtceu:grade_4_purified_water 50000")
        .outputFluids("gtceu:acetic_acid 20")
        .outputFluids("gtceu:ethanol 40")
        .EUt(524288)
        .duration(4000)

    gtr.brewery("gtceu:grade_8_purified_water")
        .inputFluids("gtceu:grade_7_purified_water 1000")
        .notConsumable("gtceu:neutronium_dust")
        .outputFluids("gtceu:grade_8_purified_water 1000")
        .EUt(122880)
        .duration(200)

    gtr.mixer("gtceu:grade_9_purified_water")
        .inputFluids("gtceu:grade_8_purified_water 1000", "gtceu:liquid_oxygen 1000")
        .itemInputs("minecraft:blaze_powder")
        .outputFluids("gtceu:grade_9_purified_water 900")
        .itemOutputs("gtceu:dark_ash_dust")
        .EUt(524288)
        .duration(600)

    gtr.distillery("gtceu:grade_10_purified_water")
        .inputFluids("gtceu:grade_9_purified_water 1000")
        .itemInputs("minecraft:echo_shard")
        .outputFluids("gtceu:grade_10_purified_water 900")
        .itemOutputs("9x gtceu:tiny_echo_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.large_chemical_reactor("gtceu:grade_11_purified_water")
        .notConsumable("kubejs:fullerene_polymer_matrix_soft_tubing")
        .notConsumable("kubejs:electron_source")
        .itemInputs("64x gtceu:carbon_nanotubes_dust")
        .inputFluids("gtceu:grade_10_purified_water 1000")
        .itemOutputs("576x gtceu:carbon_nanotubes_nugget")
        .outputFluids("gtceu:grade_11_purified_water 900")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.evaporation("gtceu:grade_12_purified_water")
        .inputFluids("gtceu:grade_11_purified_water 10000000")
        .itemOutputs("gtceu:tiny_neutronium_dust")
        .outputFluids("gtceu:grade_12_purified_water 9999000")
        .outputFluids("gtceu:helium_3 100")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)

    gtr.arc_furnace("gtceu:grade_13_purified_water")
        .inputFluids("gtceu:grade_12_purified_water 10000")
        .itemInputs("gtceu:degenerate_rhenium_dust")
        .itemOutputs("gtceu:degenerate_rhenium_plate")
        .outputFluids("gtceu:grade_13_purified_water 9990")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(60)

    gtr.plasma_condenser("gtceu:grade_14_purified_water")
        .notConsumable("gtceu:uhv_fluid_regulator")
        .inputFluids("gtceu:grade_13_purified_water 10000", "gtceu:mithril_plasma 1000")
        .itemOutputs("60x gtceu:tiny_mithril_dust")
        .outputFluids("gtceu:grade_14_purified_water 9900")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)

    gtr.plasma_condenser("gtceu:grade_15_purified_water")
        .notConsumable("gtceu:uev_fluid_regulator")
        .inputFluids("gtceu:grade_14_purified_water 10000", "gtceu:enderium_plasma 1000")
        .itemOutputs("61x gtceu:tiny_enderium_dust")
        .outputFluids("gtceu:grade_15_purified_water 9990")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.plasma_condenser("gtceu:grade_16_purified_water")
        .notConsumable("gtceu:uiv_fluid_regulator")
        .inputFluids("gtceu:grade_15_purified_water 10000", "gtceu:echoite_plasma 1000")
        .itemOutputs("62x gtceu:tiny_echoite_dust")
        .outputFluids("gtceu:grade_16_purified_water 9999")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.precision_assembler("gtceu:power_core")
        .itemInputs("4x gtceu:power_module", "8x gtceu:uv_field_generator", "64x gtceu:gravitation_engine_unit", "16x gtceu:double_naquadria_plate")
        .inputFluids("gtceu:rhodium 2880", "gtceu:americium 2880", "gtceu:enriched_naquadah 2880", "gtceu:trinium 2880")
        .itemOutputs("gtceu:power_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:dyson_swarm_module")
        .itemInputs("16x gtceu:enriched_naquadah_frame", "64x gtceu:solar_panel", "gtceu:uev_sensor", "gtceu:uev_emitter")
        .inputFluids("gtceu:mutated_living_solder 20000", "kubejs:gelid_cryotheum 20000", "gtceu:neutronium 18432", "gtceu:orichalcum 18432")
        .itemOutputs("64x kubejs:dyson_swarm_module")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(CleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("kubejs:dyson_control_casing")
        .itemInputs("gtceu:uiv_machine_hull", "kubejs:exotic_processing_core", "#gtceu:circuits/uiv", "gtceu:high_performance_computation_array")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:pcb_coolant 2000", "gtceu:ruthenium 2304", "gtceu:naquadah 1296")
        .itemOutputs("kubejs:dyson_control_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("kubejs:dyson_receiver_casing")
        .itemInputs("gtceu:uiv_charger_4x", "2x kubejs:pm_chip", "4x kubejs:uiv_voltage_coil", "gtceu:echoite_quadruple_wire")
        .inputFluids("gtceu:mutated_living_solder 1296", "kubejs:gelid_cryotheum 576", "gtceu:echo 2304", "gtceu:infuscolium 1296")
        .itemOutputs("kubejs:dyson_receiver_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembly_line("kubejs:dyson_deployment_core")
        .itemInputs("4x gtceu:uiv_machine_hull",
            "32x gtceu:uiv_conveyor_module",
            "32x gtceu:uiv_robot_arm",
            "32x gtceu:uiv_electric_piston",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser")
        .inputFluids("gtceu:lubricant 48000", "gtceu:mutated_living_solder 12800", "kubejs:gelid_cryotheum 128000", "gtceu:copernicium 256000")
        .itemOutputs("kubejs:dyson_deployment_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:power_core"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtceu:dyson_sphere")
        .itemInputs("4x gtceu:uiv_diode",
            "16x kubejs:pm_wafer",
            "16x gtceu:uiv_sensor",
            "4x kubejs:dyson_control_toroid",
            "64x gtceu:superconducting_coil",
            "16x #gtceu:circuits/uxv",
            "32x gtceu:echoite_hex_wire",
            "4x kubejs:uxv_voltage_coil",
            "16x gtceu:double_vibranium_plate")
        .inputFluids("gtceu:mutated_living_solder 12000", "kubejs:gelid_cryotheum 12800", "gtceu:scandium 576000", "gtceu:mercury_barium_calcium_cuprate 576000")
        .itemOutputs("gtceu:dyson_sphere")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Item.of("kubejs:dyson_receiver_casing"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("kubejs:dyson_deployment_casing")
        .itemInputs("gtceu:uiv_diode",
            "4x gtceu:uiv_sensor",
            "2x gtceu:uiv_electric_pump",
            "gtceu:uhv_quantum_tank",
            "gtceu:uiv_conveyor_module",
            "4x gtceu:double_darmstadtium_plate")
        .inputFluids("gtceu:mutated_living_solder 1000", "kubejs:gelid_cryotheum 1000", "gtceu:lubricant 2000", "gtceu:copernicium 1296")
        .itemOutputs("kubejs:dyson_deployment_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Item.of("kubejs:module_connector"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("kubejs:dyson_control_toroid")
        .itemInputs("gtceu:black_titanium_frame",
            "4x gtceu:uiv_emitter",
            "2x gtceu:uiv_electric_pump",
            "2x #gtceu:circuits/uiv",
            "kubejs:exotic_processing_core",
            "8x gtceu:infuscolium_bolt",
            "24x gtceu:neutronium_foil")
        .inputFluids("gtceu:mutated_living_solder 2000", "kubejs:gelid_cryotheum 1000", "gtceu:zylon 1296", "gtceu:kevlar 1296")
        .itemOutputs("kubejs:dyson_control_toroid")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("kubejs:spacetime_assembly_line_unit"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.super_particle_collider("gtceu:positive_electron")
        .inputFluids("gtceu:phosphorus 200", "gtceu:lithium 200")
        .outputFluids("gtceu:positive_electron 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antiproton")
        .inputFluids("gtceu:liquid_hydrogen 1000", "gtceu:helium_plasma 200")
        .outputFluids("gtceu:antiproton 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antineutron")
        .inputFluids("gtceu:positive_electron 200", "gtceu:antiproton 200")
        .outputFluids("gtceu:antineutron 1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antimatter")
        .inputFluids("gtceu:antihydrogen 2000", "gtceu:antineutron 2000")
        .outputFluids("gtceu:antimatter 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.mixer("gtceu:antihydrogen")
        .inputFluids("gtceu:positive_electron 200", "gtceu:antiproton 200")
        .notConsumable("gtceu:uv_field_generator")
        .outputFluids("gtceu:antihydrogen 200")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.fluid_solidifier("kubejs:pellet_antimatter")
        .inputFluids("gtceu:antimatter 1000")
        .notConsumable("kubejs:ball_field_shape")
        .itemOutputs("kubejs:pellet_antimatter")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)

    gtr.ultimate_material_forge("kubejs:pellet_antimatter")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:antihydrogen 10")
        .itemInputs("64x ae2:matter_ball", "gtceu:neutronium_nugget")
        .itemOutputs("kubejs:pellet_antimatter")
        .chancedOutput("kubejs:void_matter", 100, 0)
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)

    gtr.ultimate_material_forge("kubejs:corporeal_matter")
        .itemInputs("kubejs:proto_matter", "minecraft:iron_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:nihonium 100")
        .itemOutputs("kubejs:corporeal_matter")
        .chancedOutput("gtceu:heavy_quark_degenerate_matter_nugget", 500, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.ultimate_material_forge("kubejs:kinetic_matter")
        .itemInputs("kubejs:corporeal_matter", "gtceu:tritanium_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:naquadria 1000")
        .itemOutputs("kubejs:kinetic_matter")
        .chancedOutput("kubejs:amorphous_matter", 200, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)

    gtr.ultimate_material_forge("kubejs:amorphous_matter")
        .itemInputs("kubejs:corporeal_matter", "gtceu:carbon_nanotubes_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:legendarium 1000")
        .itemOutputs("kubejs:amorphous_matter")
        .chancedOutput("kubejs:essentia_matter", 100, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.ultimate_material_forge("kubejs:essentia_matter")
        .itemInputs("kubejs:amorphous_matter", "gtceu:heavy_quark_degenerate_matter_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:quantumchromodynamically_confined_matter 1000")
        .itemOutputs("kubejs:essentia_matter")
        .chancedOutput("kubejs:dark_matter", 100, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)

    gtr.ultimate_material_forge("kubejs:omni_matter")
        .itemInputs("kubejs:essentia_matter", "kubejs:kinetic_matter")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:dense_neutron_plasma 1000")
        .itemOutputs("kubejs:omni_matter")
        .chancedOutput("gtceu:tiny_cosmicneutronium_dust", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.ultimate_material_forge("kubejs:void_matter")
        .itemInputs("kubejs:omni_matter", "kubejs:pellet_antimatter")
        .inputFluids("gtceu:uu_matter 2000", "gtceu:gluons 1000")
        .itemOutputs("kubejs:void_matter")
        .chancedOutput("kubejs:corporeal_matter", 2000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.ultimate_material_forge("kubejs:temporal_matter")
        .notConsumable("kubejs:quantum_anomaly")
        .itemInputs("kubejs:kinetic_matter")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:draconiumawakened_plasma 1000")
        .itemOutputs("kubejs:temporal_matter")
        .chancedOutput("kubejs:omni_matter", 500, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(600)

    gtr.ultimate_material_forge("kubejs:dark_matter")
        .itemInputs("kubejs:temporal_matter", "kubejs:void_matter")
        .inputFluids("gtceu:uu_matter 3000", "gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .itemOutputs("kubejs:dark_matter")
        .chancedOutput("kubejs:kinetic_matter", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.assembler("kubejs:dyson_deployment_magnet")
        .itemInputs("gtceu:uiv_energy_output_hatch", "4x gtceu:superconducting_coil", "8x kubejs:pm_chip", "4x #gtceu:circuits/uiv", "6x gtceu:neutronium_plate")
        .itemOutputs("kubejs:dyson_deployment_magnet")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.assembler("kubejs:sps_casing")
        .itemInputs("gtceu:zylon_block", "kubejs:force_field_glass", "4x #gtceu:circuits/uev", "4x gtceu:small_quantanium_gear", "gtceu:neutronium_hex_cable", "32x gtceu:polyetheretherketone_foil")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("kubejs:sps_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.aggregation_device("kubejs:draconic_core")
        .notConsumable("kubejs:stabilizer_core")
        .itemInputs("kubejs:draconium_dust", "gtceu:zpm_field_generator", "gtceu:lapotronic_energy_orb", "gtceu:mithril_block", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:uv_field_generator", "minecraft:nether_star", "gtceu:enderium_block")
        .itemOutputs("kubejs:draconic_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.aggregation_device("kubejs:wyvern_core")
        .notConsumable("kubejs:stabilizer_core")
        .itemInputs("kubejs:draconium_dust", "gtceu:uhv_field_generator", "gtceu:quantum_eye", "gtceu:adamantine_block", "kubejs:draconic_core", "gtceu:uev_field_generator", "gtceu:quantum_star", "gtceu:orichalcum_block")
        .itemOutputs("kubejs:wyvern_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.aggregation_device("kubejs:awakened_core")
        .notConsumable("kubejs:dragon_stabilizer_core")
        .itemInputs("gtceu:draconium_dust", "gtceu:uiv_field_generator", "kubejs:dragon_heart", "gtceu:vibranium_block", "kubejs:wyvern_core", "gtceu:uxv_field_generator", "gtceu:gravi_star", "gtceu:taranium_block")
        .itemOutputs("kubejs:awakened_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.aggregation_device("kubejs:chaotic_core")
        .notConsumable("kubejs:dragon_stabilizer_core")
        .itemInputs("gtceu:draconium_nanoswarm", "gtceu:opv_field_generator", "kubejs:chaos_shard", "gtceu:legendarium_block", "kubejs:awakened_core", "gtceu:max_field_generator", "kubejs:unstable_star", "gtceu:draconiumawakened_block")
        .itemOutputs("kubejs:chaotic_core")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.distillery("gtceu:kerosene")
        .itemInputs("gtceu:coke_dust")
        .inputFluids("gtceu:coal_tar 200")
        .outputFluids("gtceu:kerosene 100")
        .itemOutputs("gtceu:dark_ash_dust")
        .EUt(120)
        .duration(30)

    gtr.distillery("gtceu:rp_1")
        .circuit(1)
        .inputFluids("gtceu:kerosene 50")
        .outputFluids("gtceu:rp_1 25")
        .EUt(120)
        .duration(16)

    gtr.mixer("gtceu:rocket_fuel_rp_1")
        .inputFluids("gtceu:rp_1 1000", "gtceu:liquid_oxygen 1000")
        .outputFluids("gtceu:rocket_fuel_rp_1 1000")
        .EUt(1920)
        .duration(16)

    gtr.large_chemical_reactor("gtceu:hydrazine")
        .inputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:ammonia 2000")
        .outputFluids("gtceu:hydrazine 1000", "minecraft:water 1000")
        .EUt(30)
        .duration(320)

    gtr.mixer("gtceu:dense_hydrazine_fuel_mixture")
        .inputFluids("gtceu:hydrazine 1000", "gtceu:methanol 1000")
        .outputFluids("gtceu:dense_hydrazine_fuel_mixture 1000")
        .EUt(240)
        .duration(320)

    gtr.mixer("gtceu:rocket_fuel_h8n4c2o4")
        .inputFluids("gtceu:dimethylhydrazine 1000", "gtceu:dinitrogen_tetroxide 1000")
        .outputFluids("gtceu:rocket_fuel_h8n4c2o4 1000")
        .EUt(1920)
        .duration(480)

    gtr.mixer("gtceu:rocket_fuel_cn3h7o3")
        .inputFluids("gtceu:monomethylhydrazine 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:rocket_fuel_cn3h7o3 1000")
        .EUt(1920)
        .duration(200)

    gtr.large_chemical_reactor("gtceu:monomethylhydrazine")
        .inputFluids("gtceu:hydrazine 1000", "gtceu:hydrogen 2000")
        .itemInputs("gtceu:carbon_dust")
        .outputFluids("gtceu:monomethylhydrazine 1000")
        .EUt(240)
        .duration(240)

    gtr.mixer("ad_astra:cryo_fuel")
        .itemInputs("16x ad_astra:ice_shard")
        .inputFluids("gtceu:cetane_boosted_diesel 1000", "gtceu:explosivehydrazine 1000")
        .outputFluids("ad_astra:cryo_fuel 1000")
        .EUt(7680)
        .duration(320)

    gtr.mixer("gtceu:explosivehydrazine")
        .inputFluids("gtceu:glyceryl_trinitrate 1000", "gtceu:dense_hydrazine_fuel_mixture 3000")
        .notConsumable("gtceu:luv_field_generator")
        .itemInputs("16x gtceu:gelled_toluene", "8x minecraft:fire_charge")
        .outputFluids("gtceu:explosivehydrazine 4000")
        .EUt(1920)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtceu:stellar_energy_rocket_fuel")
        .itemInputs("gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:rocket_fuel_cn3h7o3 2000", "gtceu:explosivehydrazine 3000", "gtceu:nitrobenzene 8000", "gtceu:dinitrogen_tetroxide 6000", "gtceu:kerosene 4000")
        .itemInputs("2x gtceu:hmxexplosive_dust")
        .itemOutputs("gtceu:naquadah_dust")
        .outputFluids("gtceu:stellar_energy_rocket_fuel 5000")
        .EUt(122880)
        .duration(120)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.chemical_reactor("gtceu:hmxexplosive_dust")
        .notConsumableFluid("gtceu:acetic_anhydride 1000")
        .inputFluids("gtceu:fuming_nitric_acid 2000")
        .itemInputs("22x gtceu:hexamethylenetetramine_dust")
        .itemOutputs("gtceu:hmxexplosive_dust")
        .EUt(1024)
        .duration(20)

    gtr.chemical_reactor("gtceu:fuming_nitric_acid")
        .inputFluids("gtceu:nitrogen_dioxide 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:fuming_nitric_acid 1000")
        .EUt(120)
        .duration(200)

    gtr.large_chemical_reactor("gtceu:nether_air")
        .itemInputs("64x minecraft:gunpowder")
        .inputFluids("gtceu:blaze 1000", "gtceu:hydrogen_sulfide 10000", "gtceu:sulfur_dioxide 10000", "gtceu:carbon_monoxide 10000", "gtceu:coal_gas 1000")
        .outputFluids("gtceu:nether_air 1000")
        .EUt(480)
        .duration(400)

    gtr.large_chemical_reactor("gtceu:ender_air")
        .itemInputs("64x gtceu:ender_pearl_dust")
        .inputFluids("gtceu:fuming_nitric_acid 1000", "gtceu:nitrogen_dioxide 10000", "gtceu:helium 10000", "gtceu:radon 1000", "gtceu:deuterium 1000")
        .outputFluids("gtceu:ender_air 1000")
        .EUt(1920)
        .duration(800)

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

    gtr.chemical_bath("gtceu:damascus_steel_dust")
        .itemInputs("gtceu:steel_dust")
        .inputFluids("gtceu:lubricant 100")
        .itemOutputs("gtceu:damascus_steel_dust")
        .EUt(120)
        .duration(200)
        .dimension("kubejs:ancient_world")

    gtr.chemical_reactor("gtceu:ammonium_chloride_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:ammonia 1000")
        .itemOutputs("6x gtceu:ammonium_chloride_dust")
        .EUt(30)
        .duration(120)

    gtr.electric_blast_furnace("gtceu:iridium_dioxide_dust")
        .itemInputs("6x gtceu:iridium_metal_residue_dust", "5x gtceu:sodium_chlorate_dust")
        .inputFluids("gtceu:hydrogen 6000")
        .itemOutputs("3x gtceu:iridium_dioxide_dust", "2x gtceu:salt_dust")
        .chancedOutput("gtceu:platinum_sludge_residue_dust", 8000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 6000")
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(790)

    gtr.mixer("gtceu:potassium_pyrosulfate_dust")
        .itemInputs("2x gtceu:potassium_dust", "2x gtceu:sulfur_dust")
        .inputFluids("gtceu:oxygen 7000")
        .itemOutputs("11x gtceu:potassium_pyrosulfate_dust")
        .EUt(120)
        .duration(120)

    gtr.centrifuge("gtceu:rare_earth_chlorides")
        .notConsumable("gtceu:hv_item_magnet")
        .inputFluids("gtceu:rare_earth_chlorides 2000")
        .outputFluids("gtceu:la_nd_oxides_solution 250",
            "gtceu:sm_gd_oxides_solution 250",
            "gtceu:tb_ho_oxides_solution 250",
            "gtceu:er_lu_oxides_solution 250",
            "gtceu:hydrochloric_acid 1000")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtceu:la_nd_oxides_solution")
        .inputFluids("gtceu:la_nd_oxides_solution 4000")
        .chancedOutput("5x gtceu:lanthanum_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:cerium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:praseodymium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:neodymium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.centrifuge("gtceu:sm_gd_oxides_solution")
        .inputFluids("gtceu:sm_gd_oxides_solution 4000")
        .chancedOutput("5x gtceu:scandium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:samarium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:europium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:gadolinium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.centrifuge("gtceu:tb_ho_oxides_solution")
        .inputFluids("gtceu:tb_ho_oxides_solution 4000")
        .chancedOutput("5x gtceu:yttrium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:terbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:dysprosium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:holmium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.centrifuge("gtceu:er_lu_oxides_solution")
        .inputFluids("gtceu:er_lu_oxides_solution 4000")
        .chancedOutput("5x gtceu:erbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:thulium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:ytterbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:lutetium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    const rare_earth_oxides = ["lanthanum",
        "praseodymium",
        "neodymium",
        "cerium",
        "scandium",
        "europium",
        "gadolinium",
        "samarium",
        "terbium",
        "dysprosium",
        "holmium",
        "erbium",
        "thulium",
        "ytterbium",
        "lutetium",
        "yttrium"]

    rare_earth_oxides.forEach((element) => {
        gtr.electric_blast_furnace("gtceu:" + element + "_dust")
            .itemInputs("10x gtceu:" + element + "_oxide_dust", "3x gtceu:carbon_dust")
            .itemOutputs("4x gtceu:" + element + "_dust")
            .outputFluids("gtceu:carbon_dioxide 3000")
            .EUt(480)
            .duration(200)
            .blastFurnaceTemp(2500)
    })

    gtr.chemical_reactor("gtceu:zirconium_hafnium_chloride")
        .itemInputs("6x gtceu:zircon_dust")
        .inputFluids("gtceu:chlorine 8000")
        .outputFluids("gtceu:zirconium_hafnium_chloride 1000", "gtceu:zircon_chlorinating_residue 1000")
        .EUt(120)
        .duration(120)

    gtr.chemical_reactor("gtceu:zirconiu_hafnium_oxychloride")
        .inputFluids("gtceu:zirconium_hafnium_chloride 1000", "minecraft:water 1000")
        .outputFluids("gtceu:zirconiu_hafnium_oxychloride 1000", "gtceu:diluted_hydrochloric_acid 2000")
        .EUt(480)
        .duration(100)

    gtr.large_chemical_reactor("gtceu:zirconium_oxide_dust")
        .itemInputs("36x gtceu:ammonium_chloride_dust", "9x gtceu:potassium_hydroxide_dust", "10x gtceu:hematite_dust")
        .inputFluids("gtceu:zirconiu_hafnium_oxychloride 3000", "gtceu:sulfur_trioxide 3000", "gtceu:hydrogen_peroxide 6000")
        .itemOutputs("21x gtceu:potassium_sulfate_dust", "3x gtceu:zirconium_oxide_dust")
        .chancedOutput("3x gtceu:hafnium_oxide_dust", 8000, 0)
        .outputFluids("gtceu:ammonia 6000", "gtceu:iron_iii_chloride 4000")
        .EUt(1920)
        .duration(100)

    gtr.chemical_reactor("gtceu:hafnium_chloride_dust")
        .itemInputs("3x gtceu:hafnium_oxide_dust", "gtceu:carbon_dust")
        .inputFluids("gtceu:chlorine 4000")
        .itemOutputs("5x gtceu:hafnium_chloride_dust")
        .outputFluids("gtceu:carbon_dioxide 1000")
        .EUt(120)
        .duration(150)

    gtr.electric_blast_furnace("gtceu:hafnium_dust")
        .itemInputs("5x gtceu:hafnium_chloride_dust", "2x gtceu:magnesium_dust")
        .itemOutputs("1x gtceu:hafnium_dust", "6x gtceu:magnesium_chloride_dust")
        .EUt(120)
        .duration(300)
        .blastFurnaceTemp(3400)

    gtr.incubator("gtceu:stem_cells")
        .chancedInput("kubejs:glacio_spirit", 6000, 500)
        .itemInputs("gtceu:osmiridium_dust")
        .inputFluids("gtceu:sterilized_growth_medium 500", "gtceu:bacteria 500")
        .itemOutputs("32x gtceu:stem_cells")
        .outputFluids("gtceu:bacterial_sludge 500")
        .EUt(30720)
        .duration(300)

    gtr.incubator("kubejs:glacio_spirit")
        .chancedInput("4x kubejs:glacio_spirit", 1000, 100)
        .itemInputs("16x gtceu:celestine_dust", "kubejs:essence")
        .inputFluids("ad_astra:cryo_fuel 100", "gtceu:ice 900")
        .itemOutputs("64x kubejs:glacio_spirit")
        .EUt(30720)
        .duration(2000)

    gtr.assembly_line("gtceu:carbon_nanoswarm")
        .itemInputs("16x #gtceu:circuits/uv", "16x gtceu:uv_robot_arm", "32x gtceu:stem_cells", "32x gtceu:naquadah_alloy_ring", "16x gtceu:naquadah_alloy_rod", "64x gtceu:carbon_dust")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:polytetrafluoroethylene 4608", "gtceu:glowstone 4608", "gtceu:rubber 4608")
        .itemOutputs("2x gtceu:carbon_nanoswarm")
        .EUt(122880)
        .duration(1200)
        .stationResearch(b => b.researchStack(Item.of("gtceu:activated_carbon_dust"))
            .dataStack(Item.of("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(32))

    gtr.assembly_line("gtceu:nano_forge_1")
        .itemInputs("16x gtceu:uv_machine_hull", "16x gtceu:carbon_nanoswarm", "16x gtceu:zpm_field_generator", "16x gtceu:uv_robot_arm", "16x gtceu:uv_conveyor_module", "32x gtceu:uv_electric_motor", "16x #gtceu:circuits/uv", "16x gtceu:naquadah_octal_wire")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtceu:nano_forge_1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:carbon_nanoswarm"))
            .dataStack(Item.of("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtceu:nano_forge_2")
        .itemInputs("16x gtceu:uev_machine_hull", "16x gtceu:neutronium_nanoswarm", "16x kubejs:draconic_core", "16x gtceu:uev_robot_arm", "16x gtceu:uev_conveyor_module", "32x gtceu:uev_electric_motor", "16x #gtceu:circuits/uev", "16x gtceu:mithril_octal_wire")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtceu:nano_forge_2")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:nano_forge_1"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:nano_forge_3")
        .itemInputs("16x gtceu:uxv_machine_hull", "16x gtceu:draconium_nanoswarm", "16x kubejs:awakened_core", "16x gtceu:uxv_robot_arm", "16x gtceu:uxv_conveyor_module", "32x gtceu:uxv_electric_motor", "16x #gtceu:circuits/uxv", "16x gtceu:taranium_octal_wire", "kubejs:wyvern_energy_core", "16x gtceu:double_celestialtungsten_plate")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtceu:nano_forge_3")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Item.of("gtceu:nano_forge_2"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.assembly_line("gtceu:field_extruder_factory")
        .itemInputs("4x gtceu:uhv_extruder", "4x gtceu:uhv_compressor", "8x gtceu:uev_field_generator", "4x gtceu:uev_emitter", "4x #gtceu:circuits/uiv", "4x gtceu:rhenium_nanoswarm", "64x gtceu:stress_proof_casing", "64x gtceu:dalisenite_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:platinum 4608", "gtceu:reinforced_epoxy_resin 4608", "gtceu:uranium_rhodium_dinaquadide 4608")
        .itemOutputs("gtceu:field_extruder_factory")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_extruder"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:mega_presser")
        .itemInputs("4x gtceu:uhv_forming_press", "4x gtceu:uhv_forge_hammer", "4x gtceu:uhv_bender", "32x gtceu:uev_electric_piston", "4x gtceu:uev_robot_arm", "4x #gtceu:circuits/uiv", "64x gtceu:stress_proof_casing", "64x gtceu:dalisenite_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:palladium 4608", "gtceu:reinforced_epoxy_resin 4608", "gtceu:uranium_rhodium_dinaquadide 4608")
        .itemOutputs("gtceu:mega_presser")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_material_press"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:mega_wiremill")
        .itemInputs("16x gtceu:uhv_wiremill", "64x gtceu:uev_electric_motor", "4x gtceu:uev_robot_arm", "4x #gtceu:circuits/uiv", "8x gtceu:abyssalalloy_hex_wire", "32x gtceu:double_germanium_plate", "16x gtceu:double_maraging_steel_300_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:niobium 4608", "gtceu:tantalum_carbide 4608", "gtceu:ruthenium_trinium_americium_neutronate 4608")
        .itemOutputs("gtceu:mega_wiremill")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_wiremill"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:dimensional_focus_engraving_array")
        .itemInputs("8x gtceu:uhv_laser_engraver", "16x gtceu:neutronium_nanoswarm", "64x gtceu:normal_laser_pipe", "8x gtceu:uev_field_generator", "4x gtceu:uev_emitter", "16x #gtceu:circuits/uiv", "16x gtceu:quantanium_rod", "32x gtceu:double_dubnium_plate")
        .inputFluids("gtceu:mutated_living_solder 28800", "gtceu:polyetheretherketone 28800", "gtceu:pikyonium 4608", "gtceu:abyssalalloy 4608")
        .itemOutputs("gtceu:dimensional_focus_engraving_array")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Item.of("gtceu:engraving_laser_plant"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembler("kubejs:naquadah_alloy_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadah_alloy_plate")
        .circuit(6)
        .itemOutputs("kubejs:naquadah_alloy_casing")
        .EUt(16)
        .duration(50)

    gtr.nano_forge("gtceu:carbon_nanoswarm")
        .notConsumable("gtceu:lime_glass_lens")
        .itemInputs("64x gtceu:carbon_block", "64x gtceu:soc")
        .itemOutputs("64x gtceu:carbon_nanoswarm")
        .inputFluids("gtceu:soldering_alloy 20000", "gtceu:lubricant 20000")
        .duration(80000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:glowstone_nanoswarm")
        .notConsumable("gtceu:orange_glass_lens")
        .itemInputs("64x minecraft:glowstone", "64x gtceu:advanced_soc")
        .itemOutputs("64x gtceu:glowstone_nanoswarm")
        .inputFluids("gtceu:uu_amplifier 10000", "gtceu:soldering_alloy 20000", "gtceu:lubricant 20000")
        .duration(320000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:copper_nanoswarm")
        .notConsumable("gtceu:brown_glass_lens")
        .itemInputs("8x minecraft:copper_block", "8x gtceu:soc")
        .itemOutputs("gtceu:copper_nanoswarm")
        .inputFluids("gtceu:naquadah 2000", "gtceu:soldering_alloy 10000", "gtceu:bismuth 10000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:iron_nanoswarm")
        .notConsumable("gtceu:gray_glass_lens")
        .itemInputs("8x minecraft:iron_block", "8x gtceu:soc")
        .itemOutputs("gtceu:iron_nanoswarm")
        .inputFluids("gtceu:naquadah 2000", "gtceu:soldering_alloy 10000", "gtceu:bismuth 10000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:gold_nanoswarm")
        .notConsumable("gtceu:yellow_glass_lens")
        .itemInputs("8x minecraft:gold_block", "16x gtceu:soc")
        .itemOutputs("gtceu:gold_nanoswarm")
        .inputFluids("gtceu:enriched_naquadah 2000", "gtceu:soldering_alloy 20000", "gtceu:bismuth 20000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:silver_nanoswarm")
        .notConsumable("gtceu:light_gray_glass_lens")
        .itemInputs("8x gtceu:silver_block", "16x gtceu:soc")
        .itemOutputs("gtceu:silver_nanoswarm")
        .inputFluids("gtceu:enriched_naquadah 2000", "gtceu:soldering_alloy 20000", "gtceu:bismuth 20000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:iridium_nanoswarm")
        .notConsumable("gtceu:glass_lens")
        .itemInputs("8x gtceu:iridium_block", "32x gtceu:soc")
        .itemOutputs("gtceu:iridium_nanoswarm")
        .inputFluids("gtceu:naquadria 2000", "gtceu:hafnium 8000", "gtceu:soldering_alloy 20000")
        .duration(80000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:osmium_nanoswarm")
        .notConsumable("gtceu:diamond_lens")
        .itemInputs("8x gtceu:osmium_block", "32x gtceu:soc")
        .itemOutputs("gtceu:osmium_nanoswarm")
        .inputFluids("gtceu:naquadria 2000", "gtceu:hafnium 8000", "gtceu:soldering_alloy 20000")
        .duration(80000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:rhenium_nanoswarm")
        .notConsumable("gtceu:cyan_glass_lens")
        .itemInputs("8x gtceu:rhenium_block", "64x gtceu:soc")
        .itemOutputs("gtceu:rhenium_nanoswarm")
        .inputFluids("gtceu:naquadria 2000", "gtceu:uu_amplifier 2000", "gtceu:soldering_alloy 20000")
        .duration(160000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:naquadah_nanoswarm")
        .notConsumable("gtceu:emerald_lens")
        .itemInputs("8x gtceu:naquadah_block", "16x gtceu:advanced_soc")
        .itemOutputs("gtceu:naquadah_nanoswarm")
        .inputFluids("gtceu:naquadria 8000", "gtceu:uu_amplifier 2000", "gtceu:mutated_living_solder 20000")
        .duration(320000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:neutronium_nanoswarm")
        .notConsumable("gtceu:nether_star_lens")
        .itemInputs("8x gtceu:neutronium_block", "64x gtceu:soc", "32x gtceu:advanced_soc")
        .itemOutputs("gtceu:neutronium_nanoswarm")
        .inputFluids("gtceu:neutronium 4000", "gtceu:uu_amplifier 2000", "gtceu:mutated_living_solder 20000")
        .duration(640000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:orichalcum_nanoswarm")
        .notConsumable("gtceu:magenta_glass_lens")
        .itemInputs("8x gtceu:orichalcum_block", "64x gtceu:advanced_soc", "64x gtceu:advanced_soc")
        .itemOutputs("gtceu:orichalcum_nanoswarm")
        .inputFluids("gtceu:neutronium 8000", "gtceu:uu_amplifier 4000", "gtceu:mutated_living_solder 40000")
        .duration(640000)
        .EUt(GTValues.VA[GTValues.UV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 1)

    gtr.nano_forge("gtceu:enderium_nanoswarm")
        .notConsumable("gtceu:green_glass_lens")
        .itemInputs("8x gtceu:enderium_block", "64x gtceu:advanced_soc", "64x gtceu:advanced_soc")
        .itemOutputs("gtceu:enderium_nanoswarm")
        .inputFluids("gtceu:neutronium 8000", "gtceu:uu_amplifier 4000", "gtceu:mutated_living_solder 40000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UEV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 2)

    gtr.nano_forge("gtceu:infuscolium_nanoswarm")
        .notConsumable("gtceu:pink_glass_lens")
        .itemInputs("8x gtceu:infuscolium_block", "64x gtceu:advanced_soc", "32x gtceu:highly_advanced_soc")
        .itemOutputs("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:neutronium 8000", "gtceu:uu_amplifier 4000", "gtceu:mutated_living_solder 40000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UEV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 2)

    gtr.nano_forge("gtceu:uruium_nanoswarm")
        .notConsumable("gtceu:light_blue_glass_lens")
        .itemInputs("8x gtceu:uruium_block", "64x gtceu:advanced_soc", "64x gtceu:highly_advanced_soc")
        .itemOutputs("gtceu:uruium_nanoswarm")
        .inputFluids("gtceu:uu_matter 20000", "gtceu:mutated_living_solder 40000", "gtceu:super_mutated_living_solder 40000")
        .duration(80000)
        .EUt(GTValues.VA[GTValues.UEV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 2)

    gtr.nano_forge("gtceu:vibranium_nanoswarm")
        .notConsumable("gtceu:light_blue_glass_lens")
        .itemInputs("8x gtceu:vibranium_block", "64x gtceu:highly_advanced_soc", "64x gtceu:highly_advanced_soc")
        .itemOutputs("gtceu:vibranium_nanoswarm")
        .inputFluids("gtceu:uu_matter 20000", "gtceu:mutated_living_solder 40000", "gtceu:super_mutated_living_solder 40000")
        .duration(60000)
        .EUt(GTValues.VA[GTValues.UEV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 2)

    gtr.nano_forge("gtceu:starmetal_nanoswarm")
        .notConsumable("gtceu:red_glass_lens")
        .itemInputs("8x gtceu:starmetal_block", "64x gtceu:highly_advanced_soc", "64x gtceu:highly_advanced_soc", "64x gtceu:exquisite_glass_gem", "64x gtceu:exquisite_amethyst_gem")
        .itemOutputs("gtceu:starmetal_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:mutated_living_solder 80000", "gtceu:super_mutated_living_solder 80000")
        .duration(160000)
        .EUt(GTValues.VA[GTValues.UEV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 2)

    gtr.nano_forge("gtceu:draconium_nanoswarm")
        .notConsumable("gtceu:purple_glass_lens")
        .itemInputs("8x gtceu:draconium_block", "32x gtceu:highly_advanced_soc_wafer", "32x kubejs:optical_ram_wafer", "32x kubejs:optical_soc", "8x kubejs:exotic_processing_core")
        .itemOutputs("gtceu:draconium_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:mutated_living_solder 80000", "gtceu:super_mutated_living_solder 80000")
        .duration(320000)
        .EUt(GTValues.VA[GTValues.UEV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 2)

    gtr.nano_forge("gtceu:cosmicneutronium_nanoswarm")
        .notConsumable("gtceu:black_glass_lens")
        .itemInputs("8x gtceu:cosmicneutronium_block", "32x kubejs:optical_soc", "32x kubejs:exotic_wafer", "16x kubejs:cosmic_ram_wafer", "8x kubejs:cosmic_processing_unit_core")
        .itemOutputs("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:crystalmatrix 40000", "gtceu:liquid_cosmic_mesh 40000")
        .duration(40000)
        .EUt(GTValues.VA[GTValues.UXV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 3)

    gtr.nano_forge("gtceu:white_dwarf_mtter_nanoswarm")
        .notConsumable("gtceu:ruby_lens")
        .itemInputs("8x gtceu:white_dwarf_mtter_block", "8x kubejs:cosmic_processing_unit_core")
        .itemOutputs("gtceu:white_dwarf_mtter_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:neutronium 40000", "gtceu:cosmic_element 40000")
        .duration(20000)
        .EUt(GTValues.VA[GTValues.UXV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 3)

    gtr.nano_forge("gtceu:black_dwarf_mtter_nanoswarm")
        .notConsumable("gtceu:ruby_lens")
        .itemInputs("8x gtceu:black_dwarf_mtter_block", "8x kubejs:cosmic_processing_unit_core")
        .itemOutputs("gtceu:black_dwarf_mtter_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:neutronium 40000", "gtceu:cosmic_element 40000")
        .duration(20000)
        .EUt(GTValues.VA[GTValues.UXV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 3)

    gtr.nano_forge("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:sapphire_lens")
        .notConsumable("kubejs:quantum_anomaly")
        .itemInputs("8x gtceu:spacetime_block", "4x kubejs:eigenfolded_kerr_manifold", "16x kubejs:supracausal_ram_wafer", "8x kubejs:supracausal_processing_core")
        .itemOutputs("gtceu:spacetime_nanoswarm")
        .inputFluids("gtceu:uu_matter 80000", "gtceu:infinity 40000", "gtceu:temporalfluid 40000")
        .duration(80000)
        .EUt(GTValues.VA[GTValues.UXV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 3)

    gtr.nano_forge("gtceu:transcendentmetal_nanoswarm")
        .notConsumable("kubejs:non_linear_optical_lens")
        .notConsumable("kubejs:hypercube")
        .itemInputs("gtceu:rhenium_nanoswarm", "8x gtceu:transcendentmetal_block", "8x kubejs:recursively_folded_negative_space", "#gtceu:circuits/max")
        .itemOutputs("gtceu:transcendentmetal_nanoswarm")
        .inputFluids("gtceu:uu_matter 80000", "gtceu:raw_star_matter_plasma 40000", "gtceu:spatialfluid 20000")
        .duration(160000)
        .EUt(GTValues.VA[GTValues.UXV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 3)

    gtr.nano_forge("gtceu:eternity_nanoswarm")
        .notConsumable("gtceu:blue_glass_lens")
        .notConsumable("kubejs:quantum_anomaly")
        .notConsumable("kubejs:eternity_catalyst")
        .itemInputs("gtceu:neutronium_nanoswarm", "8x gtceu:eternity_block", "8x kubejs:ctc_computational_unit")
        .itemOutputs("gtceu:eternity_nanoswarm")
        .inputFluids("gtceu:spatialfluid 80000", "gtceu:exciteddtsc 80000", "gtceu:primordialmatter 80000")
        .duration(320000)
        .EUt(GTValues.VA[GTValues.UXV])
    ["addData(java.lang.String,int)"]("nano_forge_tier", 3)

    gtr.electric_blast_furnace("gtceu:tellurium_oxide_dust")
        .itemInputs("gtceu:tellurium_dust")
        .inputFluids("gtceu:oxygen 2000")
        .itemOutputs("3x gtceu:tellurium_oxide_dust")
        .EUt(128)
        .duration(100)
        .blastFurnaceTemp(1760)

    gtr.chemical_reactor("gtceu:butane_1_4_diol")
        .notConsumable("gtceu:molybdenum_trioxide_dust")
        .itemInputs("3x gtceu:tellurium_oxide_dust")
        .inputFluids("gtceu:butane 1000")
        .outputFluids("gtceu:butane_1_4_diol 1000")
        .itemOutputs("gtceu:tellurium_dust")
        .EUt(1920)
        .duration(20)

    gtr.chemical_reactor("gtceu:gammabutyrolactone")
        .notConsumable("gtceu:copper_dust")
        .inputFluids("gtceu:butane_1_4_diol 1000")
        .outputFluids("gtceu:gammabutyrolactone 1000", "gtceu:hydrogen 4000")
        .EUt(1920)
        .duration(80)

    gtr.chemical_reactor("gtceu:methylamine")
        .circuit(1)
        .inputFluids("gtceu:ammonia 1000", "gtceu:methanol 1000")
        .outputFluids("gtceu:methylamine 1000", "gtceu:water 1000")
        .EUt(1920)
        .duration(80)

    gtr.chemical_reactor("gtceu:nmethylpyrolidone")
        .inputFluids("gtceu:gammabutyrolactone 1000", "gtceu:methylamine 1000")
        .outputFluids("gtceu:nmethylpyrolidone 1000", "minecraft:water 1000")
        .EUt(7680)
        .duration(120)

    gtr.chemical_reactor("gtceu:p_nitroaniline")
        .notConsumableFluid("gtceu:acetic_anhydride 1000")
        .inputFluids("gtceu:aniline 1000", "gtceu:nitration_mixture 2000")
        .outputFluids("gtceu:p_nitroaniline 1000", "gtceu:diluted_sulfuric_acid 1000")
        .EUt(1920)
        .duration(150)

    gtr.large_chemical_reactor("gtceu:p_phenylenediamine_dust")
        .notConsumable("gtceu:palladium_dust")
        .inputFluids("gtceu:nitrogen_dioxide 100", "gtceu:hydrogen 6000", "gtceu:p_nitroaniline 1000")
        .outputFluids("minecraft:water 2000")
        .itemOutputs("16x gtceu:p_phenylenediamine_dust")
        .EUt(122880)
        .duration(60)

    gtr.chemical_reactor("gtceu:terephthalicacid")
        .notConsumable("gtceu:cadmium_dust")
        .notConsumable("gtceu:sodium_bisulfate_dust")
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .inputFluids("gtceu:phthalic_acid 1000")
        .outputFluids("gtceu:terephthalicacid 1000")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtceu:dimethylterephthalate")
        .inputFluids("gtceu:terephthalicacid 1000", "gtceu:methanol 2000", "gtceu:sulfuric_acid 2000")
        .outputFluids("gtceu:dimethylterephthalate 1000", "gtceu:diluted_sulfuric_acid 2000")
        .EUt(480)
        .duration(210)

    gtr.large_chemical_reactor("gtceu:terephthaloyl_chloride_dust")
        .inputFluids("gtceu:thionyl_chloride 20000", "gtceu:dimethylterephthalate 5000", "gtceu:carbon_dioxide 6000")
        .itemOutputs("64x gtceu:terephthaloyl_chloride_dust", "48x gtceu:terephthaloyl_chloride_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 20000", "gtceu:sulfur_dioxide 20000")
        .EUt(1920)
        .duration(240)

    gtr.large_chemical_reactor("gtceu:liquidcrystalkevlar")
        .itemInputs("gtceu:calcium_chloride_dust", "9x gtceu:terephthaloyl_chloride_dust", "9x gtceu:p_phenylenediamine_dust")
        .inputFluids("gtceu:nmethylpyrolidone 1000")
        .outputFluids("gtceu:liquidcrystalkevlar 9000")
        .EUt(524288)
        .duration(160)

    gtr.assembler("gtceu:chemical_distort")
        .itemInputs("gtceu:chemical_plant", "16x gtceu:carbon_nanoswarm", "8x gtceu:uv_electric_pump", "8x gtceu:uv_emitter", "8x #gtceu:circuits/uv", "8x gtceu:naquadria_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtceu:chemical_distort")
        .EUt(524288)
        .duration(400)

    gtr.distort("gtceu:epoxy")
        .notConsumable("gtceu:copper_nanoswarm")
        .itemInputs("1x gtceu:phosphorus_dust", "16x gtceu:salt_dust")
        .inputFluids("minecraft:water 21500", "gtceu:oxygen 10500", "gtceu:propene 4000", "gtceu:benzene 6000")
        .itemOutputs("86x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:epoxy 4000", "gtceu:hydrogen 16000", "gtceu:hydrochloric_acid 4000")
        .EUt(30)
        .duration(2400)
        .blastFurnaceTemp(5600)

    gtr.distort("gtceu:polybenzimidazole")
        .notConsumable("gtceu:iridium_nanoswarm")
        .notConsumable("gtceu:potassium_dichromate_dust")
        .itemInputs("1152x gtceu:carbon_dust", "16x gtceu:copper_dust", "144x gtceu:zinc_dust")
        .inputFluids("gtceu:chlorobenzene 28800", "gtceu:sulfuric_acid 14400", "gtceu:hydrogen 316800", "gtceu:nitrogen 57600", "gtceu:oxygen 201600")
        .outputFluids("gtceu:polybenzimidazole 21600")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(6400)
        .blastFurnaceTemp(6000)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:polyphenylene_sulfide")
        .notConsumable("gtceu:silver_nanoswarm")
        .itemInputs("16x gtceu:sulfur_dust")
        .inputFluids("gtceu:benzene 16000")
        .outputFluids("gtceu:polyphenylene_sulfide 24000", "gtceu:hydrogen 32000")
        .EUt(4800)
        .duration(360)
        .blastFurnaceTemp(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:platinum_dust")
        .notConsumable("gtceu:iridium_nanoswarm")
        .itemInputs("576x gtceu:platinum_group_sludge_dust", "16x gtceu:sulfur_dust")
        .inputFluids("gtceu:hydrogen 72000", "gtceu:oxygen 128000", "gtceu:chlorine 14400")
        .itemOutputs("64x gtceu:platinum_dust", "64x gtceu:palladium_dust", "60x gtceu:ruthenium_dust", "32x gtceu:iridium_dust", "48x gtceu:rhodium_dust", "32x gtceu:osmium_dust")
        .outputFluids("gtceu:hydrogen 2800", "minecraft:water 7200", "gtceu:chlorine 6400")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .blastFurnaceTemp(9000)

    gtr.distort("gtceu:polyimide")
        .notConsumable("gtceu:glowstone_nanoswarm")
        .itemInputs("486x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 256000", "gtceu:nitrogen_dioxide 64000")
        .outputFluids("gtceu:polyimide 21000", "gtceu:hydrogen 12800", "gtceu:nitrogen 6400")
        .EUt(GTValues.V[GTValues.ZPM])
        .duration(2000)
        .blastFurnaceTemp(14400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:cycloparaphenylene")
        .notConsumable("gtceu:osmium_nanoswarm")
        .itemInputs("1920x gtceu:carbon_dust", "64x gtceu:iodine_dust")
        .inputFluids("gtceu:hydrogen 640000", "gtceu:oxygen 96000", "gtceu:chlorine 96000", "gtceu:fluorine 96000")
        .outputFluids("gtceu:cycloparaphenylene 32000", "gtceu:fluorine 4800", "gtceu:chlorine 3200")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:polyvinyl_chloride")
        .notConsumable("gtceu:carbon_nanoswarm")
        .inputFluids("gtceu:oxygen 10000", "gtceu:chlorine 1440", "gtceu:ethylene 1440")
        .outputFluids("gtceu:polyvinyl_chloride 2160", "gtceu:hydrogen 1440")
        .EUt(30)
        .duration(1600)
        .blastFurnaceTemp(800)

    gtr.distort("gtceu:silicone_rubber")
        .notConsumable("gtceu:carbon_nanoswarm")
        .itemInputs("3x gtceu:silicon_dust", "gtceu:sulfur_dust")
        .inputFluids("minecraft:water 2000", "gtceu:methane 4000")
        .outputFluids("gtceu:silicone_rubber 1296", "gtceu:hydrogen 4000")
        .EUt(120)
        .duration(720)
        .blastFurnaceTemp(1200)

    gtr.distort("gtceu:styrene_butadiene_rubber")
        .notConsumable("gtceu:iron_nanoswarm")
        .itemInputs("5x gtceu:sulfur_dust")
        .inputFluids("gtceu:butadiene 3000", "gtceu:benzene 1000", "gtceu:ethylene 1000", "gtceu:oxygen 15000")
        .outputFluids("gtceu:styrene_butadiene_rubber 6480", "gtceu:hydrogen 2000")
        .EUt(480)
        .duration(1200)
        .blastFurnaceTemp(1800)

    gtr.distort("gtceu:polytetrafluoroethylene")
        .notConsumable("gtceu:copper_nanoswarm")
        .inputFluids("gtceu:oxygen 5000", "gtceu:methane 1440", "gtceu:fluorine 2880")
        .outputFluids("gtceu:polytetrafluoroethylene 1080", "gtceu:hydrogen 5760")
        .EUt(480)
        .duration(2400)
        .blastFurnaceTemp(2600)

    gtr.distort("gtceu:naquadria_dust")
        .notConsumable("gtceu:naquadah_nanoswarm")
        .itemInputs("64x gtceu:naquadah_dust", "16x gtceu:caesium_dust")
        .inputFluids("gtceu:fluorine 32000", "gtceu:fluoroantimonic_acid 64000", "gtceu:sulfuric_acid 12000", "gtceu:radon 8000", "gtceu:nitrogen_dioxide 4000", "gtceu:xenon 4000")
        .itemOutputs("64x gtceu:naquadria_dust", "256x gtceu:antimony_trifluoride_dust")
        .outputFluids("gtceu:hydrofluoric_acid 272000", "gtceu:radon_trioxide 8000", "gtceu:xenon_trioxide 4000", "gtceu:caesium_fluoride 16000")
        .EUt(7680)
        .duration(3600)
        .blastFurnaceTemp(12600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:unfolded_fullerene_dust")
        .notConsumable("gtceu:enderium_nanoswarm")
        .itemInputs("3780x gtceu:carbon_dust")
        .inputFluids("gtceu:methane 60000", "gtceu:bromine 60000", "gtceu:nitrogen 60000")
        .itemOutputs("64x gtceu:unfolded_fullerene_dust")
        .outputFluids("gtceu:hydrobromic_acid 60000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(64000)
        .blastFurnaceTemp(16800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:stem_cells")
        .notConsumable("gtceu:naquadah_nanoswarm")
        .chancedInput("kubejs:glacio_spirit", 8000, 100)
        .itemInputs("gtceu:tiny_naquadah_dust", "gtceu:osmiridium_dust", "gtceu:salt_dust", "gtceu:calcium_dust", "4x gtceu:meat_dust", "4x gtceu:bio_chaff", "2x minecraft:bone")
        .inputFluids("gtceu:phosphoric_acid 1000", "minecraft:water 3000", "gtceu:distilled_water 2000", "gtceu:biomass 1000")
        .itemOutputs("64x gtceu:stem_cells", "gtceu:phosphorus_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)
        .blastFurnaceTemp(12200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.distort("gtceu:polyurethaneresin")
        .notConsumable("gtceu:gold_nanoswarm")
        .itemInputs("45x gtceu:tin_dust", "64x gtceu:carbon_dust", "5x gtceu:nickel_dust", "5x gtceu:palladium_dust", "5x gtceu:iron_dust", "36x gtceu:silicon_dust")
        .inputFluids("gtceu:oxygen 1964000", "gtceu:hydrogen 529000", "gtceu:chlorine 870000", "gtceu:nitrogen 45000")
        .outputFluids("gtceu:polyurethaneresin 45000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(27000)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:liquidcrystalkevlar")
        .notConsumable("gtceu:rhenium_nanoswarm")
        .notConsumable("gtceu:annealed_copper_dust")
        .itemInputs("64x gtceu:carbon_dust", "2x gtceu:calcium_dust")
        .inputFluids("gtceu:hydrogen 100000", "gtceu:chlorine 16000", "gtceu:oxygen 18000", "gtceu:nitrogen 18000")
        .outputFluids("gtceu:liquidcrystalkevlar 45000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(4000)
        .blastFurnaceTemp(17200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:zirconium_dust")
        .notConsumable("gtceu:osmium_nanoswarm")
        .itemInputs("1152x gtceu:zircon_dust", "64x gtceu:potassium_dust")
        .inputFluids("gtceu:chlorine 512000", "gtceu:hydrogen 256000", "gtceu:hydrogen_peroxide 128000", "gtceu:sulfur_trioxide 64000")
        .itemOutputs("64x gtceu:zirconium_dust", "48x gtceu:hafnium_dust", "448x gtceu:potassium_sulfate_dust")
        .outputFluids("gtceu:hydrochloric_acid 512000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(6400)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .notConsumable("gtceu:orichalcum_nanoswarm")
        .notConsumable("16x kubejs:unstable_star")
        .itemInputs("191x gtceu:silica_gel_dust", "76x gtceu:succinic_acid_dust", "144x gtceu:activated_carbon_dust", "216x gtceu:sodium_dust", "47x gtceu:boron_trioxide_dust", "39x gtceu:potassium_carbonate_dust", "101x gtceu:barium_chloride_dust")
        .inputFluids("gtceu:hydrogen 470000", "gtceu:hydrofluoric_acid 12000", "gtceu:methanol 62000", "gtceu:nitric_acid 15000", "gtceu:ammonia 39000", "gtceu:glyoxal 47000", "gtceu:oxygen_plasma 11000", "gtceu:acetic_anhydride 9000", "gtceu:nitrogen_plasma 7000")
        .itemOutputs("288x gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(51200)
        .blastFurnaceTemp(21600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:photoresist")
        .notConsumable("gtceu:uruium_nanoswarm")
        .itemInputs("91x gtceu:rutile_dust", "60x gtceu:carbon_dust", "42x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:sulfuric_acid 80000", "gtceu:ethanol 7000", "gtceu:chlorine 81000", "gtceu:propene 15000", "gtceu:benzene 39000", "gtceu:ethylene 47000")
        .outputFluids("gtceu:photoresist 16000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(9600)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:euv_photoresist")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .itemInputs("30x gtceu:rhenium_dust", "56x gtceu:lithium_dust", "40x gtceu:selenium_dust", "50x gtceu:activated_carbon_dust", "60x gtceu:rutile_dust", "55x gtceu:quicklime_dust")
        .inputFluids("gtceu:ethane 12000", "gtceu:chlorine 75000", "gtceu:photoresist 8000", "gtceu:hydrogen 4700", "gtceu:oxygen 89000", "gtceu:nitrogen 40000", "gtceu:butane 57000")
        .outputFluids("gtceu:euv_photoresist 21600")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(12800)
        .blastFurnaceTemp(21600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:photopolymer")
        .notConsumable("gtceu:white_dwarf_mtter_nanoswarm")
        .itemInputs("768x gtceu:carbon_dust", "50x gtceu:rutile_dust", "70x gtceu:succinic_acid_dust", "32x gtceu:ice_dust", "20x gtceu:silver_dust", "25x gtceu:quicklime_dust", "40x gtceu:boron_dust", "120x gtceu:sodium_dust")
        .inputFluids("gtceu:benzene 40000", "gtceu:bromine 25000", "gtceu:oxygen 21600", "gtceu:chlorine 5600", "gtceu:propene 16000", "gtceu:butene 80000")
        .outputFluids("gtceu:photopolymer 16000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(25600)
        .blastFurnaceTemp(21600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:polyetheretherketone")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .itemInputs("16x gtceu:sodium_dust")
        .inputFluids("gtceu:chlorine 48000", "gtceu:benzene 16000", "gtceu:oxygen 60000", "gtceu:propene 8000", "gtceu:nitric_acid 8000")
        .outputFluids("gtceu:polyetheretherketone 20736", "minecraft:water 8000", "gtceu:carbon_dioxide 8000")
        .itemOutputs("32x gtceu:sodium_fluoride_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(16400)
        .blastFurnaceTemp(14400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtceu:zylon_dust")
        .notConsumable("gtceu:black_dwarf_mtter_nanoswarm")
        .itemInputs("1762x gtceu:sulfur_dust", "41x gtceu:sodium_dust")
        .inputFluids("gtceu:bromine 15200", "gtceu:toluene 432000", "gtceu:hydrogen 412000", "gtceu:ethane 6000", "gtceu:propene 50000", "gtceu:nitric_acid 67000", "gtceu:oxygen 40000", "gtceu:benzene 70000")
        .itemOutputs("115x gtceu:zylon_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(9600)
        .blastFurnaceTemp(18900)
        .cleanroom(CleanroomType.CLEANROOM)


    gtr.qft("gtceu:fullerene_polymer_matrix_pulp_dust")
        .notConsumable("gtceu:starmetal_nanoswarm")
        .itemInputs("16x gtceu:fullerene_dust", "8x gtceu:palladium_dust")
        .inputFluids("gtceu:nitrogen 15000", "gtceu:hydrogen 73000", "gtceu:oxygen 13000")
        .itemOutputs("16x gtceu:fullerene_polymer_matrix_pulp_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtceu:taranium_dust")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("176x gtceu:bedrock_dust", "64x gtceu:carbon_dust", "640x gtceu:deepslate_dust")
        .inputFluids("gtceu:helium 37000", "gtceu:hydrogen 73000", "gtceu:xenon 3000")
        .itemOutputs("64x gtceu:taranium_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.chemical_reactor("gtceu:calcium_chloride_dust")
        .itemInputs("gtceu:calcium_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemOutputs("3x gtceu:calcium_chloride_dust")
        .EUt(30)
        .duration(80)

    gtr.large_chemical_reactor("gtceu:iridium_chloride_dust")
        .circuit(24)
        .itemInputs("gtceu:iridium_dust")
        .inputFluids("gtceu:chlorine 3000")
        .itemOutputs("4x gtceu:iridium_chloride_dust")
        .EUt(30720)
        .duration(800)

    gtr.large_chemical_reactor("gtceu:titanium_trifluoride_dust")
        .circuit(24)
        .itemInputs("gtceu:titanium_dust")
        .inputFluids("gtceu:fluorine 3000")
        .itemOutputs("4x gtceu:titanium_trifluoride_dust")
        .EUt(30720)
        .duration(600)

    gtr.large_chemical_reactor("gtceu:barium_sulfide_dust")
        .circuit(24)
        .itemInputs("6x gtceu:barite_dust")
        .inputFluids("gtceu:hydrogen 4000")
        .itemOutputs("2x gtceu:barium_sulfide_dust")
        .outputFluids("minecraft:water 4000")
        .EUt(30720)
        .duration(400)

    gtr.large_chemical_reactor("gtceu:aluminium_sulfite_dust")
        .circuit(24)
        .itemInputs("2x gtceu:aluminium_dust")
        .inputFluids("gtceu:sulfuric_acid 3000")
        .itemOutputs("14x gtceu:aluminium_sulfite_dust")
        .outputFluids("minecraft:water 3000")
        .EUt(30720)
        .duration(400)

    gtr.chemical_reactor("gtceu:potassium_bromide_dust")
        .itemInputs("gtceu:potassium_dust")
        .inputFluids("gtceu:bromine 1000")
        .itemOutputs("2x gtceu:potassium_bromide_dust")
        .EUt(120)
        .duration(160)

    gtr.qft("kubejs:timepiece")
        .notConsumable("gtceu:white_dwarf_mtter_nanoswarm")
        .notConsumable("gtceu:black_dwarf_mtter_nanoswarm")
        .chancedInput("gtceu:spacetime_hex_wire", 1, 0)
        .chancedOutput("kubejs:timepiece", 2500, 0)
        .inputFluids("gtceu:cosmic_element 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.packer("gtceu:tiny_degenerate_rhenium_dust")
        .itemInputs("gtceu:degenerate_rhenium_dust")
        .itemOutputs("9x gtceu:tiny_degenerate_rhenium_dust")
        .EUt(1920)
        .duration(20)

    gtr.large_chemical_reactor("gtceu:thaumium_dust")
        .itemInputs("8x gtceu:infused_gold_dust", "8x gtceu:iron_dust", "16x gtceu:lapis_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("16x gtceu:thaumium_dust")
        .EUt(7680)
        .duration(480)

    gtr.mixer("gtceu:astral_silver_dust")
        .itemInputs("2x gtceu:silver_dust", "gtceu:thaumium_dust")
        .itemOutputs("3x gtceu:astral_silver_dust")
        .EUt(1920)
        .duration(400)

    gtr.mixer("gtceu:highenergymixture_dust")
        .itemInputs("4x minecraft:glowstone_dust", "2x minecraft:redstone", "1x gtceu:aluminium_dust")
        .circuit(3)
        .itemOutputs("4x gtceu:highenergymixture_dust")
        .EUt(480)
        .duration(600)

    gtr.fluid_solidifier("gtceu:luminessence_dust")
        .itemInputs("2x gtceu:highenergymixture_dust")
        .inputFluids("gtceu:phosphoric_acid 2000")
        .itemOutputs("gtceu:luminessence_dust")
        .EUt(480)
        .duration(200)

    gtr.mixer("gtceu:sunnarium")
        .notConsumable("gtceu:uxv_field_generator")
        .inputFluids("gtceu:helium_plasma 1000", "gtceu:glowstone 1000")
        .outputFluids("gtceu:sunnarium 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.stellar_forge("gtceu:astraltitanium_plasma")
        .itemInputs("kubejs:naquadria_charge")
        .inputFluids("gtceu:force 576", "gtceu:titanium 576", "gtceu:cobalt 288", "gtceu:copper 288", "gtceu:tritium 1000")
        .outputFluids("gtceu:astraltitanium_plasma 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.stellar_forge("gtceu:celestialtungsten_plasma")
        .itemInputs("kubejs:naquadria_charge")
        .inputFluids("gtceu:tartarite 576", "gtceu:tungsten 576", "gtceu:americium 288", "gtceu:titan_precision_steel 144", "gtceu:astraltitanium 144", "gtceu:xenon 1000")
        .outputFluids("gtceu:celestialtungsten_plasma 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.arc_furnace("kubejs:cosmic_singularity")
        .itemInputs("avaritia:eternal_singularity")
        .inputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 9216")
        .itemOutputs("kubejs:cosmic_singularity", "64x gtceu:shirabon_dust")
        .outputFluids("gtceu:helium_plasma 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.qft("gtceu:cosmic_ingot")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .chancedInput("kubejs:cosmic_singularity", 1000, 0)
        .itemInputs("kubejs:hypercube", "gtceu:infinity_ingot")
        .inputFluids("gtceu:white_dwarf_mtter 576", "gtceu:black_dwarf_mtter 576", "gtceu:primordialmatter 500")
        .itemOutputs("gtceu:cosmic_ingot")
        .EUt(64 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("gtceu:magmatter")
        .notConsumable("kubejs:spacetime_catalyst")
        .inputFluids("gtceu:chaos 1000", "gtceu:spatialfluid 1000", "gtceu:exciteddtsc 1000")
        .itemInputs("gtceu:attuned_tengam_block")
        .outputFluids("gtceu:magmatter 1000")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.sps_crafting("gtceu:magmatter_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:mana 100000", "gtceu:magmatter 100")
        .itemInputs("minecraft:netherite_ingot")
        .itemOutputs("gtceu:magmatter_ingot")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.sps_crafting("gtceu:magmatter_ingot_d")
        .inputFluids("gtceu:mana 10000", "gtceu:magmatter 10")
        .notConsumable("kubejs:ingot_field_shape")
        .itemInputs("gtceu:magmatter_dust", "minecraft:netherite_ingot")
        .itemOutputs("gtceu:magmatter_ingot")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.lathe("gtceu:magmatter_rod")
        .itemInputs("gtceu:magmatter_ingot")
        .itemOutputs("gtceu:magmatter_rod")
        .itemOutputs("gtceu:small_magmatter_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.packer("gtceu:magmatter_dust")
        .notConsumable("gtceu:transcendentmetal_nanoswarm")
        .itemInputs("4x gtceu:small_magmatter_dust")
        .itemOutputs("gtceu:magmatter_dust")
        .EUt(30)
        .duration(20)

    gtr.forge_hammer("gtceu:long_magmatter_rod")
        .itemInputs("2x gtceu:magmatter_rod")
        .itemOutputs("gtceu:long_magmatter_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(300)

    gtr.assembly_line("gtceu:mega_extractor")
        .itemInputs("16x gtceu:uhv_extractor", "16x gtceu:uhv_fluid_solidifier", "32x gtceu:uev_electric_piston", "8x gtceu:uev_electric_pump", "4x #gtceu:circuits/uiv", "16x gtceu:titansteel_hex_wire", "16x gtceu:double_quantum_plate", "32x gtceu:double_hastelloy_x_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:naquadria 4608", "gtceu:plutonium 4608", "gtceu:mithril 4608")
        .itemOutputs("gtceu:mega_extractor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_extractor"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtceu:mega_canner")
        .itemInputs("16x gtceu:uev_canner", "16x gtceu:uev_robot_arm", "32x gtceu:uev_electric_piston", "16x gtceu:uev_electric_pump", "32x gtceu:double_lafium_plate", "32x gtceu:double_naquadria_plate", "4x #gtceu:circuits/uiv")
        .inputFluids("gtceu:naquadria 4608", "gtceu:orichalcum_plasma 2304", "gtceu:mithril_plasma 2304", "gtceu:darmstadtium 4608")
        .itemOutputs("gtceu:mega_canner")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:uiv_canner"))
            .dataStack(Item.of("gtceu_data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.chemical_reactor("gtceu:sodium_hydroxide_dust")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(30)
        .duration(60)

    gtr.chemical_reactor("gtceu:potassium_hydroxide_dust")
        .itemInputs("gtceu:potassium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:potassium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(30)
        .duration(60)

    gtr.assembler("kubejs:inverter")
        .itemInputs("4x gtceu:polyethylene_plate", "4x gtceu:ilc_chip", "2x gtceu:exquisite_quartzite_gem", "gtceu:computer_monitor_cover", "#gtceu:circuits/ev", "4x gtceu:diode", "8x gtceu:aluminium_single_wire")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("kubejs:inverter")
        .EUt(120)
        .duration(200)

    tiers.forEach(i => {
        gtr.assembler("gtceu:" + i[0] + "_neutron_accelerator")
            .itemInputs("gtceu:" + i[0] + "_machine_hull", "kubejs:inverter", i[1] == 1 ? "2x gtceu:lead_rotor" : "2x gtceu:" + i[0] + "_electric_motor", "gtceu:double_beryllium_plate", "2x gtceu:polyvinyl_chloride_plate")
            .itemOutputs("gtceu:" + i[0] + "_neutron_accelerator")
            .inputFluids("gtceu:polonium 288")
            .EUt(30)
            .duration(400)
    })

    gtr.assembler("gtceu:neutron_sensor")
        .itemInputs("gtceu:iv_machine_hull", "gtceu:advanced_activity_detector_cover", "gtceu:computer_monitor_cover", "gtceu:vibrant_alloy_hex_wire", "#gtceu:circuits/ev", "2x gtceu:hv_sensor")
        .inputFluids("gtceu:helium 1000")
        .itemOutputs("gtceu:neutron_sensor")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtceu:neutron_activator")
        .itemInputs("gtceu:iv_machine_hull", "4x gtceu:soc", "#gtceu:circuits/iv", "2x gtceu:data_stick", "gtceu:ev_sensor", "2x gtceu:ev_emitter", "gtceu:uranium_235_block", "gtceu:polonium_block", "2x gtceu:neutron_reflector")
        .inputFluids("gtceu:stainless_steel 1296")
        .itemOutputs("gtceu:neutron_activator")
        .EUt(7680)
        .duration(200)

    gtr.assembler("kubejs:speeding_pipe")
        .itemInputs("ad_astra:fluid_pipe_duct", "gtceu:stainless_steel_huge_fluid_pipe", "16x gtceu:blue_alloy_rod", "#gtceu:circuits/ev", "32x gtceu:mercury_barium_calcium_cuprate_single_wire", "32x gtceu:beryllium_plate")
        .itemOutputs("kubejs:speeding_pipe")
        .inputFluids("gtceu:mar_m_200_steel 576")
        .EUt(1920)
        .duration(200)

    gtr.assembler("kubejs:process_machine_casing")
        .itemInputs("gtceu:solid_machine_casing", "2x #gtceu:circuits/iv", "2x gtceu:double_stainless_steel_plate", "4x gtceu:double_mar_m_200_steel_plate")
        .inputFluids("gtceu:fall_king 576")
        .itemOutputs("kubejs:process_machine_casing")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtceu:disassembly")
        .itemInputs("gtceu:assembly_line", "4x gtceu:naquadah_alloy_gear", "16x gtceu:luv_robot_arm", "8x gtceu:luv_conveyor_module", "8x gtceu:luv_emitter", "4x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:naquadah 1440")
        .itemOutputs("gtceu:disassembly")
        .EUt(7680)
        .duration(800)

    gtr.vacuum_freezer("gtceu:metastable_oganesson")
        .inputFluids("gtceu:hot_oganesson 1000", "kubejs:gelid_cryotheum 144")
        .outputFluids("gtceu:metastable_oganesson 144")
        .itemOutputs("2x gtceu:small_enderium_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(280)

    gtr.neutron_activator("gtceu:hassium")
        .inputFluids("gtceu:liquid_metastable_hassium 1000")
        .outputFluids("gtceu:hassium 1000")
    ["addData(java.lang.String,int)"]("ev_min", 340)
    ["addData(java.lang.String,int)"]("ev_max", 380)
    ["addData(java.lang.String,int)"]("evt", 480)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.neutron_activator("gtceu:oganesson")
        .inputFluids("gtceu:metastable_oganesson 1000")
        .outputFluids("gtceu:oganesson 1000")
    ["addData(java.lang.String,int)"]("ev_min", 720)
    ["addData(java.lang.String,int)"]("ev_max", 800)
    ["addData(java.lang.String,int)"]("evt", 1200)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.neutron_activator("gtceu:quantanium")
        .inputFluids("gtceu:neon 10000")
        .itemInputs("4x gtceu:quantum_star", "8x gtceu:quantum_eye", "16x gtceu:mithril_dust", "16x gtceu:gadolinium_dust", "64x minecraft:netherite_scrap", "64x ae2:fluix_dust")
        .outputFluids("gtceu:quantanium 10000")
    ["addData(java.lang.String,int)"]("ev_min", 1020)
    ["addData(java.lang.String,int)"]("ev_max", 1200)
    ["addData(java.lang.String,int)"]("evt", 3840)
        .duration(1200)

    gtr.neutron_activator("kubejs:draconium_dust")
        .inputFluids("gtceu:uu_amplifier 1000")
        .notConsumable("gtceu:degenerate_rhenium_plate")
        .itemInputs("minecraft:dragon_egg")
        .itemOutputs("8x gtceu:ender_eye_dust", "4x gtceu:ender_pearl_dust")
        .chancedOutput("kubejs:draconium_dust", 4000, 0)
    ["addData(java.lang.String,int)"]("ev_min", 800)
    ["addData(java.lang.String,int)"]("ev_max", 900)
    ["addData(java.lang.String,int)"]("evt", 5760)
        .duration(800)

    gtr.assembly_line("gtceu:auto_configuration_maintenance_hatch")
        .itemInputs("gtceu:iv_machine_hull", "4x gtceu:configurable_maintenance_hatch", "8x gtceu:iv_conveyor_module", "8x gtceu:iv_robot_arm", "16x #gtceu:circuits/iv", "4x gtceu:iv_emitter", "4x gtceu:iv_sensor", "gtceu:rad_away_pill", "gtceu:paracetamol_pill", "16x gtceu:stainless_steel_foil")
        .inputFluids("gtceu:lubricant 1000", "gtceu:soldering_alloy 576", "gtceu:cupronickel 576", "gtceu:brass 576")
        .itemOutputs("gtceu:auto_configuration_maintenance_hatch")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("gtceu:auto_maintenance_hatch")).dataStack(Item.of("gtceu:data_orb")).EUt(GTValues.VA[GTValues.IV]).duration(8000))

    gtr.plasma_generator("gtceu:orichalcum")
        .inputFluids("gtceu:orichalcum_plasma 1")
        .outputFluids("gtceu:orichalcum 1")
        .duration(384)
        .EUt(-GTValues.V[GTValues.EV])

    gtr.plasma_generator("gtceu:mithril")
        .inputFluids("gtceu:mithril_plasma 1")
        .outputFluids("gtceu:mithril 1")
        .duration(422)
        .EUt(-GTValues.V[GTValues.EV])

    gtr.assembler("gtceu:heat_exchanger")
        .itemInputs("gtceu:iv_machine_hull", "8x gtceu:tungsten_carbide_huge_fluid_pipe", "16x gtceu:mar_m_200_steel_gear", "16x gtceu:lapis_plate", "16x gtceu:diamond_plate", "16x gtceu:obsidian_plate", "8x gtceu:double_mar_m_200_steel_plate", "16x gtceu:double_tungsten_steel_plate", "16x gtceu:double_tungsten_steel_plate")
        .inputFluids("gtceu:redstone 5760")
        .itemOutputs("gtceu:heat_exchanger")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)

    gtr.assembler("gtceu:supercritical_turbine_casing")
        .itemInputs("gtceu:tungstensteel_turbine_casing", "2x gtceu:mar_m_200_steel_rod", "gtceu:mar_m_200_steel_gear", "6x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtceu:supercritical_turbine_casing")
        .EUt(16)
        .duration(50)

    gtr.assembler("gtceu:supercritical_steam_turbine")
        .itemInputs("gtceu:luv_machine_hull", "4x #gtceu:circuits/luv", "2x gtceu:luv_electric_motor", "2x gtceu:mar_m_200_steel_gear", "2x gtceu:tungsten_carbide_large_fluid_pipe", "8x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtceu:supercritical_steam_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    gtr.assembler("gtceu:supercritical_mega_steam_turbine")
        .itemInputs("8x gtceu:supercritical_steam_turbine", "8x #gtceu:circuits/uv", "8x gtceu:luv_electric_piston", "16x gtceu:luv_electric_pump", "8x gtceu:naquadah_turbine_blade", "8x gtceu:double_hsss_plate", "32x gtceu:double_mar_m_200_steel_plate")
        .itemOutputs("gtceu:supercritical_mega_steam_turbine")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.extractor("gtceu:antimatter")
        .itemInputs("kubejs:pellet_antimatter")
        .outputFluids("gtceu:antimatter 1000")
        .duration(2000)
        .EUt(480)

    gtr.assembly_line("gtceu:element_copying")
        .itemInputs("4x gtceu:uxv_scanner", "4x gtceu:uxv_canner", "4x gtceu:uxv_packer", "4x gtceu:uxv_extractor", "16x #gtceu:circuits/uxv", "8x gtceu:uxv_fluid_regulator", "16x gtceu:heavy_quark_degenerate_matter_small_fluid_pipe", "4x gtceu:uruium_nanoswarm", "32x gtceu:molybdenum_disilicide_rod", "32x gtceu:titanium_tungsten_carbide_rod", "32x gtceu:double_silicon_carbide_plate", "32x gtceu:double_heavy_quark_degenerate_matter_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:periodicium 2304", "gtceu:sunnarium 4608", "gtceu:vibramantium 4608")
        .itemOutputs("gtceu:element_copying")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Item.of("gtceu:star_ultimate_material_forge_factory"))
            .dataStack(Item.of("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.electric_blast_furnace("kubejs:giga_chad")
        .itemInputs("64x gtceu:uiv_field_generator", "64x gtceu:uxv_field_generator", "64x gtceu:opv_field_generator")
        .inputFluids("gtceu:exciteddtec 10000000")
        .itemOutputs("kubejs:giga_chad")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4000)
        .blastFurnaceTemp(36000)

    gtr.heat_exchanger("gtceu:hot_sodium_potassium")
        .inputFluids("gtceu:hot_sodium_potassium 1")
        .inputFluids("minecraft:water 40")
        .outputFluids("gtceu:sodium_potassium 1")
        .outputFluids("gtceu:steam 6400")
        .duration(200)

    gtr.heat_exchanger("gtceu:supercritical_sodium_potassium")
        .inputFluids("gtceu:supercritical_sodium_potassium 1")
        .inputFluids("gtceu:distilled_water 20")
        .outputFluids("gtceu:sodium_potassium 1")
        .outputFluids("gtceu:supercritical_steam 3200")
        .duration(200)

    gtr.assembler("kubejs:fission_reactor_casing")
        .itemInputs("gtceu:vanadium_steel_frame", "6x gtceu:lead_plate", "6x gtceu:reactor_steel_plate")
        .itemOutputs("2x kubejs:fission_reactor_casing")
        .EUt(30)
        .duration(50)

    gtr.assembler("gtceu:cooler")
        .itemInputs("kubejs:fission_reactor_casing", "2x gtceu:annealed_copper_hex_wire", "8x gtceu:vanadium_steel_tiny_fluid_pipe", "4x gtceu:stainless_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtceu:cooler")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtceu:fission_fuel_assembly")
        .itemInputs("gtceu:graphite_block", "4x gtceu:long_stainless_steel_rod", "4x gtceu:double_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtceu:fission_fuel_assembly")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtceu:fission_reactor")
        .itemInputs("gtceu:iv_machine_hull", "4x kubejs:circuit_resonatic_iv", "gtceu:computer_monitor_cover", "4x gtceu:neutron_reflector", "8x gtceu:dense_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtceu:fission_reactor")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtceu:neutronium_block")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .itemInputs("avaritia:neutron")
        .itemOutputs("9x gtceu:naquadah_dust", "9x gtceu:neutronium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.forming_press("kubejs:reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_steel_ingot")
        .itemOutputs("kubejs:reactor_fuel_rod")
        .EUt(30)
        .duration(200)

    gtr.forming_press("kubejs:tungsten_carbide_reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_neodymium_ingot", "gtceu:tungsten_carbide_ingot")
        .itemOutputs("kubejs:tungsten_carbide_reactor_fuel_rod")
        .EUt(120)
        .duration(200)

    gtr.canner("kubejs:reactor_uranium_simple")
        .itemInputs("kubejs:reactor_fuel_rod", "6x gtceu:uranium_dust")
        .inputFluids("gtceu:uranium_235 48")
        .itemOutputs("kubejs:reactor_uranium_simple")
        .EUt(1920)
        .duration(60)

    gtr.canner("kubejs:reactor_thorium_simple")
        .itemInputs("kubejs:reactor_fuel_rod", "3x gtceu:thorium_dust")
        .itemOutputs("kubejs:reactor_thorium_simple")
        .EUt(480)
        .duration(60)

    gtr.canner("kubejs:reactor_mox_simple")
        .itemInputs("kubejs:reactor_fuel_rod", "6x gtceu:uranium_dust")
        .inputFluids("gtceu:plutonium 432")
        .itemOutputs("kubejs:reactor_mox_simple")
        .EUt(7680)
        .duration(60)

    gtr.canner("kubejs:reactor_naquadah_simple")
        .itemInputs("kubejs:tungsten_carbide_reactor_fuel_rod", "gtceu:naquadah_dust")
        .inputFluids("gtceu:thorium 144")
        .itemOutputs("kubejs:reactor_naquadah_simple")
        .EUt(30720)
        .duration(60)

    function assemble_fuel(name, isnq) {
        let rod = isnq ? "4x gtceu:tungsten_carbide_rod" : "4x gtceu:steel_rod"
        gtr.assembler("kubejs:reactor_" + name + "_dual")
            .circuit(2)
            .itemInputs("2x kubejs:reactor_" + name + "_simple", rod)
            .itemOutputs("kubejs:reactor_" + name + "_dual")
            .EUt(30)
            .duration(40)

        gtr.assembler("kubejs:reactor_" + name + "_quad")
            .circuit(4)
            .itemInputs("2x kubejs:reactor_" + name + "_dual", rod)
            .itemOutputs("kubejs:reactor_" + name + "_quad")
            .EUt(30)
            .duration(80)
    }

    assemble_fuel("uranium", false)
    assemble_fuel("thorium", false)
    assemble_fuel("mox", false)
    assemble_fuel("naquadah", true)

    function centrifuge_fuel(name, isnq, product, output, chance, extra) {
        let rod = isnq ? "gtceu:tungsten_carbide_rod" : "gtceu:steel_rod"
        let fuel_rod = isnq ? "kubejs:tungsten_carbide_reactor_fuel_rod" : "kubejs:reactor_fuel_rod"
        gtr.centrifuge("kubejs:depleted_reactor_" + name + "_simple")
            .itemInputs("kubejs:depleted_reactor_" + name + "_simple")
            .itemOutputs(fuel_rod)
            .chancedOutput(output + "x " + product, chance, extra)
            .chancedOutput("2x kubejs:nuclear_waste", 1600, 500)
            .EUt(480)
            .duration(40)

        gtr.centrifuge("kubejs:depleted_reactor_" + name + "_dual")
            .itemInputs("kubejs:depleted_reactor_" + name + "_dual")
            .itemOutputs("2x " + fuel_rod, "4x " + rod)
            .chancedOutput(2 * output + "x " + product, chance, extra)
            .chancedOutput("4x kubejs:nuclear_waste", 3600, 500)
            .EUt(480)
            .duration(80)

        gtr.centrifuge("kubejs:depleted_reactor_" + name + "_quad")
            .itemInputs("kubejs:depleted_reactor_" + name + "_quad")
            .itemOutputs("4x " + fuel_rod, "12x " + rod)
            .chancedOutput(4 * output + "x " + product, chance, extra)
            .chancedOutput("8x kubejs:nuclear_waste", 8000, 500)
            .EUt(480)
            .duration(160)
    }

    centrifuge_fuel("uranium", false, "gtceu:plutonium_dust", 4, 2500, 100)
    centrifuge_fuel("thorium", false, "gtceu:uranium_dust", 2, 4000, 500)
    centrifuge_fuel("mox", false, "kubejs:nuclear_waste", 6, 2000, 1000)
    centrifuge_fuel("naquadah", true, "gtceu:plutonium_dust", 1, 8000, 200)

    gtr.fission_reactor("kubejs:reactor_thorium_simple")
        .itemInputs("kubejs:reactor_thorium_simple")
        .itemOutputs("kubejs:depleted_reactor_thorium_simple")
        .EUt(6)
        .duration(1200)
    ["addData(java.lang.String,int)"]("FRheat", 1)

    gtr.fission_reactor("kubejs:reactor_thorium_dual")
        .itemInputs("kubejs:reactor_thorium_dual")
        .itemOutputs("kubejs:depleted_reactor_thorium_dual")
        .EUt(8)
        .duration(1800)
    ["addData(java.lang.String,int)"]("FRheat", 2)

    gtr.fission_reactor("kubejs:reactor_thorium_quad")
        .itemInputs("kubejs:reactor_thorium_quad")
        .itemOutputs("kubejs:depleted_reactor_thorium_quad")
        .EUt(10)
        .duration(2700)
    ["addData(java.lang.String,int)"]("FRheat", 3)

    gtr.fission_reactor("kubejs:reactor_uranium_simple")
        .itemInputs("kubejs:reactor_uranium_simple")
        .itemOutputs("kubejs:depleted_reactor_uranium_simple")
        .EUt(3)
        .duration(2000)
    ["addData(java.lang.String,int)"]("FRheat", 4)

    gtr.fission_reactor("kubejs:reactor_uranium_dual")
        .itemInputs("kubejs:reactor_uranium_dual")
        .itemOutputs("kubejs:depleted_reactor_uranium_dual")
        .EUt(4)
        .duration(3000)
    ["addData(java.lang.String,int)"]("FRheat", 5)

    gtr.fission_reactor("kubejs:reactor_uranium_quad")
        .itemInputs("kubejs:reactor_uranium_quad")
        .itemOutputs("kubejs:depleted_reactor_uranium_quad")
        .EUt(5)
        .duration(4500)
    ["addData(java.lang.String,int)"]("FRheat", 6)

    gtr.fission_reactor("kubejs:reactor_mox_simple")
        .itemInputs("kubejs:reactor_mox_simple")
        .itemOutputs("kubejs:depleted_reactor_mox_simple")
        .EUt(1)
        .duration(1400)
    ["addData(java.lang.String,int)"]("FRheat", 6)

    gtr.fission_reactor("kubejs:reactor_mox_dual")
        .itemInputs("kubejs:reactor_mox_dual")
        .itemOutputs("kubejs:depleted_reactor_mox_dual")
        .EUt(2)
        .duration(2100)
    ["addData(java.lang.String,int)"]("FRheat", 7)

    gtr.fission_reactor("kubejs:reactor_mox_quad")
        .itemInputs("kubejs:reactor_mox_quad")
        .itemOutputs("kubejs:depleted_reactor_mox_quad")
        .EUt(3)
        .duration(3200)
    ["addData(java.lang.String,int)"]("FRheat", 8)

    gtr.fission_reactor("kubejs:reactor_naquadah_simple")
        .itemInputs("kubejs:reactor_naquadah_simple")
        .itemOutputs("kubejs:depleted_reactor_naquadah_simple")
        .EUt(3)
        .duration(16000)
    ["addData(java.lang.String,int)"]("FRheat", 6)

    gtr.fission_reactor("kubejs:reactor_naquadah_dual")
        .itemInputs("kubejs:reactor_naquadah_dual")
        .itemOutputs("kubejs:depleted_reactor_naquadah_dual")
        .EUt(5)
        .duration(24000)
    ["addData(java.lang.String,int)"]("FRheat", 7)

    gtr.fission_reactor("kubejs:reactor_naquadah_quad")
        .itemInputs("kubejs:reactor_naquadah_quad")
        .itemOutputs("kubejs:depleted_reactor_naquadah_quad")
        .EUt(7)
        .duration(36000)
    ["addData(java.lang.String,int)"]("FRheat", 8)
})