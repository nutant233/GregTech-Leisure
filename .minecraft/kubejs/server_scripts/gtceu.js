//priority: 96
ServerEvents.recipes((event) => {
    event.shapeless(Registries.getItemStack("gtceu:small_flint_dust", 3), "gtceu:flint_dust")
    event.shapeless(Registries.getItemStack("gtceu:tiny_flint_dust", 2), "gtceu:small_flint_dust")
    event.shapeless("gtlcore:cfg_copy", "minecraft:writable_book")
    event.shapeless("gtlcore:advanced_multi_smelter", "gtceu:multi_smelter")
    event.shapeless("gtlcore:suprachronal_assembly_line_module", "gtlcore:suprachronal_assembly_line")
    event.shapeless("gtlcore:suprachronal_assembly_line", "gtlcore:suprachronal_assembly_line_module")
    event.shapeless("gtceu:spacetime_small_fluid_pipe", ["gtceu:spacetime_tiny_fluid_pipe", "gtceu:spacetime_tiny_fluid_pipe"])
    event.shapeless("gtceu:spacetime_normal_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_quadruple_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_nonuple_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_large_fluid_pipe", ["gtceu:spacetime_normal_fluid_pipe", "gtceu:spacetime_normal_fluid_pipe"])
    event.shapeless("gtceu:spacetime_huge_fluid_pipe", ["gtceu:spacetime_large_fluid_pipe", "gtceu:spacetime_large_fluid_pipe"])
    event.shaped(Registries.getItemStack("gtlcore:primitive_robot_arm", 64), [
        "AAA",
        "BEB",
        "CDE"
    ], {
        A: "gtceu:potin_tiny_fluid_pipe",
        B: "gtceu:bronze_gear",
        C: "gtlcore:precision_steam_mechanism",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:bronze_rod"
    })

    event.shaped(Registries.getItemStack("gtlcore:primitive_fluid_regulator", 64), [
        "BAE",
        "DFA",
        "ECB"
    ], {
        A: "gtceu:potin_tiny_fluid_pipe",
        B: "gtceu:bronze_rotor",
        C: "gtlcore:precision_steam_mechanism",
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
        B: "gtlcore:chaotic_energy_core",
        C: "gtmthings:max_4194304a_wireless_laser_target_hatch"
    })

    event.shaped("gtlcore:large_steam_input_hatch", [
        "ACA",
        "BDB",
        "ACA"
    ], {
        A: "gtlcore:precision_steam_mechanism",
        B: "gtceu:stainless_steel_tiny_fluid_pipe",
        C: "gtceu:iron_rotor",
        D: "gtceu:steam_input_hatch"
    })

    event.shaped("gtlcore:reactor_core", [
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
        C: "gtlcore:glacio_spirit",
        D: "gtlcore:pellet_antimatter"
    })

    event.shaped("gtlcore:large_rock_crusher", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:iv_electric_piston",
        B: "#gtceu:circuits/iv",
        C: "gtceu:platinum_double_cable",
        D: "gtceu:iv_rock_crusher"
    })

    event.shaped("gtlcore:incubator", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:plascrete",
        B: "gtceu:hv_field_generator",
        C: "gtceu:filter_casing",
        D: "gtlcore:greenhouse"
    })

    event.shaped("gtlcore:block_conversion_room", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:quantum_eye",
        B: "gtceu:lv_field_generator",
        D: "minecraft:netherite_block"
    })

    event.shaped("gtlcore:lava_furnace", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:double_copper_plate",
        B: "gtceu:double_wrought_iron_plate",
        C: "gtceu:tin_hex_cable",
        D: "gtceu:steam_oven"
    })

    event.shaped("gtlcore:mega_alloy_blast_smelter", [
        "AFA",
        "CDC",
        "EBE"
    ], {
        A: "gtceu:naquadah_alloy_spring",
        B: "gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
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
        A: "gtlcore:rutherfordium_neutronium_wafer",
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
        A: "gtlcore:taranium_wafer",
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
        A: "gtlcore:pm_wafer",
        B: "gtceu:fusion_glass",
        C: "#gtceu:circuits/max",
        D: "gtceu:taranium_hex_wire",
        E: "gtceu:double_oganesson_plate"
    })

    event.shaped("gtlcore:max_neutron_compressor", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:max_machine_hull",
        B: "gtceu:cosmicneutronium_single_cable",
        C: "#gtceu:circuits/max",
        D: "gtlcore:max_electric_piston",
        E: "gtlcore:max_electric_pump"
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

    event.shaped("gtceu:max_parallel_hatch", [
        "DCE",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:max_machine_hull",
        B: "gtceu:cosmicneutronium_double_cable",
        C: "gtlcore:suprachronal_circuit_max",
        D: "gtlcore:max_sensor",
        E: "gtlcore:max_emitter"
    })

    event.shaped("gtlcore:sterile_cleaning_maintenance_hatch", [
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

    event.shaped("gtlcore:law_cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:uev_machine_hull",
        C: "gtceu:uev_robot_arm",
        D: "gtlcore:law_filter_casing",
        E: "gtlcore:sterile_cleaning_maintenance_hatch"
    })

    event.shaped("gtlcore:cleaning_configuration_maintenance_hatch", [
        "DCD",
        "CAC",
        "DCD"
    ], {
        A: "gtlcore:auto_configuration_maintenance_hatch",
        C: "#gtceu:circuits/luv",
        D: "gtceu:cleaning_maintenance_hatch"
    })

    event.shaped("gtlcore:sterile_configuration_cleaning_maintenance_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:uhv_machine_hull",
        B: "gtceu:uhv_field_generator",
        C: "gtlcore:cleaning_configuration_maintenance_hatch",
        D: "gtlcore:sterile_cleaning_maintenance_hatch"
    })

    event.shaped("gtlcore:law_configuration_cleaning_maintenance_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:uxv_machine_hull",
        B: "gtceu:uxv_field_generator",
        C: "gtlcore:sterile_configuration_cleaning_maintenance_hatch",
        D: "gtlcore:law_cleaning_maintenance_hatch"
    })

    event.shaped("gtlcore:dragon_egg_copier", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "minecraft:dragon_egg",
        C: "gtceu:uxv_robot_arm",
        D: "gtlcore:dragon_strength_tritanium_casing",
        E: "gtceu:uxv_field_generator"
    })

    event.shaped("gtlcore:blaze_blast_furnace", [
        "DCD",
        "CAC",
        "DCD"
    ], {
        A: "gtceu:electric_blast_furnace",
        C: "gtceu:iv_field_generator",
        D: "gtlcore:blaze_blast_furnace_casing"
    })

    event.shaped("gtlcore:large_cracker", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:cracker",
        B: "gtceu:naquadah_spring",
        C: "#gtceu:circuits/uv",
        D: "gtceu:luv_field_generator"
    })

    event.shaped("gtlcore:large_greenhouse", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtlcore:greenhouse",
        B: "gtceu:ev_sensor",
        C: "#gtceu:circuits/luv",
        D: "gtceu:ev_field_generator"
    })

    event.shaped("gtlcore:law_filter_casing", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:mithril_frame",
        B: "gtceu:uev_emitter",
        C: "gtceu:sterilizing_filter_casing",
        D: "gtceu:uev_muffler_hatch"
    })

    event.shaped("gtlcore:cold_ice_freezer", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:vacuum_freezer",
        B: "gtlcore:cold_ice_casing",
        C: "gtceu:iv_emitter"
    })

    event.shaped("gtlcore:gravitation_shockburst", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtlcore:create_ultimate_battery",
        B: "gtlcore:create_casing",
        C: "gtlcore:suprachronal_mainframe_complex"
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

    event.shaped(Registries.getItemStack("gtlcore:multi_functional_casing", 2), [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:solid_machine_casing",
        B: "gtceu:double_aluminium_plate",
        C: "gtceu:mv_robot_arm",
        D: "gtceu:mv_electric_piston"
    })

    event.shaped("gtlcore:steam_piston_hammer", [
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

    event.shaped("gtlcore:steam_pressor", [
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

    event.shaped("gtlcore:steam_foundry", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:lp_steam_alloy_smelter",
        B: "gtceu:bronze_plate",
        C: "gtceu:potin_plate",
        D: "gtceu:long_tin_alloy_rod"
    })

    event.shaped("gtlcore:processing_plant", [
        "BCB",
        "DAF",
        "BEB"
    ], {
        A: "gtlcore:multi_functional_casing",
        B: "gtceu:aluminium_foil",
        C: "gtceu:mv_conveyor_module",
        D: "gtceu:mv_sensor",
        E: "gtceu:mv_fluid_regulator",
        F: "gtceu:mv_emitter"
    })

    event.shaped("gtlcore:ev_rocket_engine", [
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

    event.shaped("gtlcore:iv_rocket_engine", [
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

    event.shaped("gtlcore:luv_rocket_engine", [
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

    event.shaped("gtlcore:rocket_large_turbine", [
        "BCB",
        "DAD",
        "WPW"
    ], {
        A: "gtlcore:ev_rocket_engine",
        W: "gtceu:black_steel_double_cable",
        C: "#gtceu:circuits/iv",
        D: "gtceu:ev_electric_motor",
        B: "gtceu:ev_electric_piston",
        P: "gtceu:dense_obsidian_plate"
    })

    event.shaped("gtlcore:iv_naquadah_reactor", [
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

    event.shaped("gtlcore:luv_naquadah_reactor", [
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

    event.shaped("gtlcore:zpm_naquadah_reactor", [
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

    event.shaped("gtlcore:large_steam_macerator", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:steam_grinder",
        B: "gtceu:bronze_block",
        C: "gtceu:diamond_grinding_head",
        D: "gtlcore:precision_steam_mechanism"
    })

    event.shaped("gtlcore:large_steam_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:bronze_gearbox",
        B: "gtceu:bronze_block",
        C: "gtlcore:precision_steam_mechanism",
        D: "gtceu:small_iron_gear"
    })

    event.shaped("gtlcore:large_steam_bath", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtlcore:steam_bath",
        B: "gtceu:bronze_block",
        C: "gtlcore:precision_steam_mechanism",
        D: "gtceu:stone_gear",
        E: "gtceu:steel_foil"
    })

    event.shaped("gtlcore:large_steam_circuit_assembler", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "ae2:molecular_assembler",
        B: "gtceu:bronze_plate",
        C: "minecraft:comparator",
        D: "#gtceu:circuits/ulv"
    })

    event.shaped("gtlcore:large_steam_mixer", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtlcore:steam_mixer",
        B: "gtceu:bronze_plate",
        C: "gtlcore:precision_steam_mechanism",
        D: "gtceu:copper_huge_fluid_pipe"
    })

    event.shaped("gtlcore:large_steam_thermal_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:bronze_pipe_casing",
        B: "gtceu:bronze_plate",
        C: "gtlcore:precision_steam_mechanism",
        D: "gtceu:long_copper_rod"
    })

    event.shaped("gtlcore:large_steam_ore_washer", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtlcore:steam_ore_washer",
        B: "gtceu:bronze_plate",
        C: "gtceu:double_bronze_plate",
        D: "gtlcore:precision_steam_mechanism"
    })

    event.shaped("gtlcore:steam_mixer", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:bronze_normal_fluid_pipe",
        B: "gtceu:bronze_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:bronze_gear"
    })

    event.shaped("gtlcore:steam_bath", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:bronze_rod",
        B: "gtceu:bronze_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:bronze_gear"
    })

    event.shaped("gtlcore:steam_ore_washer", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:bronze_rod",
        B: "gtceu:steel_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:potin_gear"
    })

    event.shaped("gtlcore:weather_control", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "minecraft:amethyst_block",
        B: "minecraft:lightning_rod",
        C: "gtceu:double_steel_plate",
        D: "minecraft:daylight_detector"
    })

    event.shaped("gtlcore:large_pyrolyse_oven", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:pyrolyse_oven",
        B: "gtceu:double_stainless_steel_plate",
        C: "gtceu:iv_field_generator",
        D: "gtceu:vanadium_steel_huge_fluid_pipe"
    })

    event.shaped("gtlcore:precision_steam_mechanism", [
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

    event.shaped("gtlcore:steam_assembly_block", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:bronze_normal_fluid_pipe",
        B: "gtlcore:precision_steam_mechanism",
        C: "gtceu:bronze_frame"
    })

    event.shaped("gtlcore:ev_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotron_crystal",
        B: "gtceu:ev_transformer_16a",
        C: "gtceu:ev_machine_hull"
    })

    event.shaped("gtlcore:iv_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotronic_energy_orb",
        B: "gtceu:iv_transformer_16a",
        C: "gtceu:iv_machine_hull"
    })

    event.shaped("gtlcore:luv_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotronic_energy_orb_cluster",
        B: "gtceu:luv_transformer_16a",
        C: "gtceu:luv_machine_hull"
    })

    event.shaped("gtlcore:lv_semi_fluid", [
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

    event.shaped("gtlcore:mv_semi_fluid", [
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

    event.shaped("gtlcore:hv_semi_fluid", [
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

    event.shaped("gtlcore:large_semi_fluid_generator", [
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

    event.shaped("gtlcore:gravity_hatch", [
        "CBC",
        "BAB",
        "DBD"
    ], {
        A: "gtceu:uv_machine_hull",
        B: "gtceu:gravi_star",
        C: "gtceu:uv_robot_arm",
        D: "gtceu:gravitation_engine_unit"
    })

    event.shaped("gtlcore:desulfurizer", [
        "AEA",
        "CDC",
        "AEA",
    ], {
        E: "gtceu:hv_electric_motor",
        C: "#gtceu:circuits/ev",
        D: "gtceu:hv_machine_hull",
        A: "gtceu:hv_electric_pump",
    })

    event.shaped("2x gtlcore:neutronium_pipe_casing", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:neutronium_frame",
        B: "gtceu:neutronium_normal_fluid_pipe",
        C: "gtceu:neutronium_plate"
    })

    event.shaped("2x gtlcore:neutronium_gearbox", [
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

    event.shaped("gtlcore:advanced_assembly_line_unit", [
        "CEC",
        "BAB",
        "CEC"
    ], {
        A: "gtceu:assembly_line_unit",
        B: "#gtceu:circuits/uv",
        C: "gtceu:hssg_plate",
        E: "gtceu:rhodium_gear"
    })

    event.shaped("minecraft:netherite_upgrade_smithing_template", [
        "ABA",
        "ACA",
        "AAA"
    ], {
        A: "minecraft:diamond",
        B: "minecraft:netherite_block",
        C: "minecraft:netherrack"
    })

    event.shaped("gtlcore:wood_rotor", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:wood_frame",
        B: "gtceu:wood_plate",
        C: "gtceu:treated_wood_plate"
    })

    event.shaped("gtlcore:iron_rotor", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:long_invar_rod",
        B: "gtceu:iron_turbine_blade",
        C: "minecraft:chain"
    })

    event.shaped("gtlcore:steel_rotor", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:long_invar_rod",
        B: "gtceu:steel_turbine_blade",
        C: "minecraft:chain"
    })

    event.shaped("gtlcore:machine_casing_circuit_assembly_line", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:pikyonium_plate",
        B: "gtceu:hssg_gear",
        C: "gtceu:luv_robot_arm",
        D: "gtceu:ruridit_frame"
    })

    event.shaped("gtlcore:aggregatione_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:attuned_tengam_ingot",
        B: "gtlcore:infused_obsidian",
        D: "kubejs:magic_core"
    })

    event.shaped("gtlcore:stabilizer_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:double_infuscolium_plate",
        B: "gtceu:long_neutronium_rod",
        D: "gtlcore:time_dilation_containment_unit"
    })

    event.shaped("gtlcore:dragon_stabilizer_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:double_draconium_plate",
        B: "gtceu:long_cosmicneutronium_rod",
        D: "gtlcore:stabilizer_core"
    })


    event.shaped("gtlcore:greenhouse", [
        "GGG",
        "CHC",
        "PUP"
    ], {
        G: "gtceu:tempered_glass",
        C: "#gtceu:circuits/mv",
        H: "gtceu:mv_machine_hull",
        P: "gtceu:mv_electric_piston",
        U: "gtceu:mv_electric_pump",
    })

    event.shaped("gtlcore:vacuum_hatch", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:ev_robot_arm",
        B: "gtceu:vanadium_steel_large_fluid_pipe",
        C: "gtceu:ev_pump"
    })

    event.shaped("gtlcore:vacuum_hatch", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:ev_robot_arm",
        B: "gtceu:vanadium_steel_large_fluid_pipe",
        C: "gtceu:ev_pump"
    })

    event.shaped("gtlcore:vacuum_configuration_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtlcore:auto_configuration_maintenance_hatch",
        B: "gtceu:gravi_star",
        C: "#gtceu:circuits/uhv",
        D: "gtlcore:vacuum_hatch"
    })

    event.shaped("gtlcore:gravity_configuration_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtlcore:auto_configuration_maintenance_hatch",
        B: "gtceu:uev_field_generator",
        C: "#gtceu:circuits/uev",
        D: "gtlcore:gravity_hatch"
    })

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
        event.shaped("gtlcore:" + scanner[0] + "_world_data_scanner", [
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

    const machine_materials = [
        ["uhv", "neutronium", "europium", "abyssalalloy", "uev", "1966080", "uv", "128", "gtlcore:smd_diode_bioware"],
        ["uev", "quantanium", "mithril", "titansteel", "uiv", "7864320", "uhv", "256", "gtlcore:smd_diode_optical"],
        ["uiv", "adamantium", "neutronium", "adamantine", "uxv", "31457280", "uev", "512", "gtlcore:smd_diode_exotic"],
        ["uxv", "vibranium", "taranium", "naquadriatictaranium", "opv", "125829120", "uiv", "1024", "gtlcore:smd_diode_cosmic"],
        ["opv", "draconium", "crystalmatrix", "starmetal", "max", "503316480", "uxv", "2048", "gtlcore:smd_diode_supracausal"]
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

    event.smithing("gtlcore:create_hpca_component", "gtlcore:command_block_core", "gtlcore:super_computation_component", "gtlcore:suprachronal_mainframe_complex")
    event.smithing("gtlcore:create_computation", "gtlcore:command_block_core", "gtceu:high_performance_computation_array", "gtlcore:suprachronal_mainframe_complex")
    event.smithing("kubejs:space_fermium_helmet", "ad_astra:netherite_space_helmet", "kubejs:fermium_helmet", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_chestplate", "ad_astra:netherite_space_suit", "kubejs:fermium_chestplate", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_leggings", "ad_astra:netherite_space_pants", "kubejs:fermium_leggings", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_boots", "ad_astra:netherite_space_boots", "kubejs:fermium_boots", "ad_astra:oxygen_distributor")

    const gtr = event.recipes.gtceu

    gtr.forming_press("gtlcore:carbon_rotor")
        .itemInputs("minecraft:chain", "2x gtceu:magnalium_rod", "8x gtceu:magnalium_bolt", "18x gtceu:carbon_fiber_plate")
        .itemOutputs("gtlcore:carbon_rotor")
        .EUt(120)
        .duration(200)

    gtr.alloy_smelter("gtlcore:pulsating_alloy_ingot")
        .itemInputs("minecraft:iron_ingot", "minecraft:gunpowder")
        .itemOutputs("gtceu:pulsating_alloy_ingot")
        .EUt(16)
        .duration(80)

    gtr.alloy_smelter("gtlcore:conductive_alloy_ingot")
        .itemInputs("gtceu:pulsating_alloy_ingot", "minecraft:redstone")
        .itemOutputs("gtceu:conductive_alloy_ingot")
        .EUt(16)
        .duration(160)

    gtr.mixer("gtlcore:vibrant_alloy_dust")
        .itemInputs("#forge:dusts/energetic_alloy", "#forge:dusts/ender_pearl")
        .itemOutputs("2x gtceu:vibrant_alloy_dust")
        .duration(260)
        .EUt(30)

    gtr.mixer("gtlcore:energetic_alloy_dust")
        .itemInputs("2x #forge:dusts/gold", "#forge:dusts/redstone", "#forge:dusts/glowstone")
        .itemOutputs("4x gtceu:energetic_alloy_dust")
        .duration(140)
        .EUt(30)

    const machine_materialas = [
        ["uhv", "europium", "1966080", "uv", "128", "gtlcore:nm_chip"],
        ["uev", "mithril", "7864320", "uhv", "256", "gtlcore:nm_chip"],
        ["uiv", "neutronium", "31457280", "uev", "512", "gtlcore:pm_chip"],
        ["uxv", "taranium", "125829120", "uiv", "1024", "gtlcore:pm_chip"],
        ["opv", "crystalmatrix", "503316480", "uxv", "2048", "gtlcore:fm_chip"],
        ["max", "cosmicneutronium", "503316480", "opv", "4096", "gtlcore:fm_chip"]
    ]
    machine_materialas.forEach((machine_material) => {
        gtr.assembly_line("gtlcore:" + machine_material[0] + "_energy_input_hatch")
            .itemInputs("gtceu:" + machine_material[0] + "_machine_hull",
                "4x gtceu:" + machine_material[1] + "_single_cable",
                "2x " + machine_material[5],
                "#gtceu:circuits/" + machine_material[0],
                "2x gtlcore:" + machine_material[0] + "_voltage_coil")
            .inputFluids("gtceu:sodium_potassium 10000", "gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
            .itemOutputs("gtceu:" + machine_material[0] + "_energy_input_hatch")
            .EUt(machine_material[2])
            .duration(800)
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + machine_material[3] + "_energy_input_hatch"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(machine_material[2])
                .CWUt(machine_material[4]))

        gtr.assembly_line("gtlcore:" + machine_material[0] + "_energy_output_hatch")
            .itemInputs("gtceu:" + machine_material[0] + "_machine_hull",
                "4x #forge:springs/" + machine_material[1],
                "2x " + machine_material[5],
                "#gtceu:circuits/" + machine_material[0],
                "2x gtlcore:" + machine_material[0] + "_voltage_coil")
            .inputFluids("gtceu:sodium_potassium 10000", "gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
            .itemOutputs("gtceu:" + machine_material[0] + "_energy_output_hatch")
            .EUt(machine_material[2])
            .duration(800)
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + machine_material[3] + "_energy_output_hatch"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(machine_material[2])
                .CWUt(machine_material[4]))
    })

    gtr.assembly_line("gtlcore:magic_manufacturer")
        .itemInputs("8x gtceu:adamantium_plate",
            "16x gtceu:kanthal_rod",
            "16x gtceu:ultimet_screw",
            "16x minecraft:end_crystal",
            "16x gtlcore:ballast",
            "gtceu:uev_electric_pump",
            "2x gtceu:uev_field_generator",
            "minecraft:dragon_egg",
            "4x #gtceu:circuits/uiv",
            "gtlcore:really_max_battery",
            "8x gtceu:dense_obsidian_plate",
            "16x gtceu:double_stellite_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:indalloy_140 2592", "gtceu:mutated_living_solder 1296", "gtceu:tairitsu 1296")
        .itemOutputs("gtlcore:magic_manufacturer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("kubejs:magic_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:draconic_energy_core")
        .itemInputs("gtlcore:wyvern_energy_core",
            "64x gtceu:uv_lapotronic_battery",
            "16x gtlcore:awakened_core",
            "16x gtlcore:dragon_stabilizer_core",
            "8x #gtceu:circuits/opv",
            "gtceu:uv_solar_panel",
            "64x gtlcore:smd_capacitor_cosmic",
            "64x gtlcore:smd_diode_cosmic",
            "64x gtlcore:smd_resistor_cosmic",
            "64x gtlcore:smd_transistor_cosmic",
            "64x gtlcore:smd_inductor_cosmic",
            "64x gtceu:draconiumawakened_block")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:draconiumawakened 28800", "gtceu:cosmicneutronium 14400", "gtceu:crystalmatrix 14400")
        .itemOutputs("gtlcore:draconic_energy_core")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:wyvern_energy_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:super_computation")
        .itemInputs("16x gtceu:data_bank",
            "64x #gtceu:circuits/uev",
            "64x gtceu:uv_field_generator",
            "64x gtceu:uv_field_generator",
            "16x gtceu:data_module",
            "8x gtceu:gold_nanoswarm",
            "4x gtceu:hpca_bridge_component",
            "16x gtceu:computer_monitor_cover",
            "64x gtlcore:optical_processing_core",
            "64x gtlcore:high_precision_crystal_soc",
            "64x gtceu:enderite_quadruple_wire",
            "64x gtceu:normal_optical_pipe")
        .inputFluids("gtceu:mutated_living_solder 2880", "gtceu:vanadium_gallium 2880", "gtceu:pcb_coolant 16000", "kubejs:gelid_cryotheum 16000")
        .itemOutputs("gtlcore:super_computation")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:high_performance_computation_array"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:super_computation_component")
        .itemInputs("gtceu:hpca_advanced_computation_component",
            "gtceu:hpca_heat_sink_component",
            "4x #gtceu:circuits/uhv",
            "#gtceu:circuits/uev",
            "2x gtceu:zpm_field_generator",
            "gtceu:data_orb",
            "gtlcore:high_precision_crystal_soc",
            "4x gtceu:normal_optical_pipe")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:vanadium_gallium 576", "gtceu:pcb_coolant 1000", "kubejs:gelid_cryotheum 1000")
        .itemOutputs("gtlcore:super_computation_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:advanced_computer_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:large_chemical_plant")
        .itemInputs("16x gtceu:large_chemical_reactor",
            "4x gtceu:neutronium_spring",
            "4x gtceu:uv_field_generator",
            "4x #gtceu:circuits/uev",
            "4x gtceu:polytetrafluoroethylene_nonuple_fluid_pipe",
            "8x gtceu:uhv_electric_motor",
            "16x gtceu:polytetrafluoroethylene_rod",
            "64x gtceu:polytetrafluoroethylene_foil",
            "16x gtceu:double_watertight_steel_plate")
        .inputFluids("gtceu:indalloy_140 2880", "gtceu:soldering_alloy 2880", "gtceu:polytetrafluoroethylene 2880")
        .itemOutputs("gtlcore:large_chemical_plant")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:chemical_plant"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:super_blast_smelter")
        .itemInputs("64x gtceu:tungsten_carbide_frame",
            "64x gtceu:mega_blast_furnace",
            "64x gtlcore:mega_alloy_blast_smelter",
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
        .itemOutputs("gtlcore:super_blast_smelter")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:multi_smelter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:super_cooler_component")
        .itemInputs("gtceu:hpca_active_cooler_component",
            "gtceu:hpca_heat_sink_component",
            "4x gtceu:tungsten_large_fluid_pipe",
            "16x gtceu:naquadah_screw",
            "gtceu:zpm_fluid_regulator",
            "32x gtceu:fine_rhodium_wire")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:vanadium_gallium 576", "gtceu:pcb_coolant 1000", "kubejs:gelid_cryotheum 1000")
        .itemOutputs("gtlcore:super_cooler_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:hpca_active_cooler_component"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:sps_crafting")
        .itemInputs("8x gtceu:double_americium_plate",
            "32x gtceu:uev_robot_arm",
            "8x gtceu:uev_fluid_regulator",
            "4x gtceu:long_rhodium_rod",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:naquadah_nanoswarm",
            "gtlcore:pellet_antimatter",
            "gtlcore:rydberg_spinorial_assembly",
            "8x gtceu:degenerate_rhenium_plate",
            "16x gtceu:double_grisium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:artherium_sn 2880", "gtceu:soldering_alloy 2880", "gtceu:mana 10000")
        .itemOutputs("gtlcore:sps_crafting")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:pellet_antimatter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:advanced_sps_crafting")
        .itemInputs("4x gtceu:uiv_emitter",
            "4x gtceu:uiv_sensor",
            "4x gtlcore:rydberg_spinorial_assembly",
            "16x gtlcore:pellet_antimatter",
            "16x minecraft:reinforced_deepslate",
            "64x minecraft:crying_obsidian",
            "64x minecraft:crying_obsidian",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uiv_field_generator",
            "gtlcore:really_max_battery",
            "16x gtceu:neutronium_nanoswarm",
            "16x gtceu:double_gold_plate")
        .inputFluids("gtceu:super_mutated_living_solder 864", "gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:echoite 2880")
        .itemOutputs("gtlcore:advanced_sps_crafting")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:sps_crafting"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:mass_fabricator")
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
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:tairitsu 2880", "gtceu:indalloy_140 2592", "gtceu:mutated_living_solder 1296")
        .itemOutputs("gtlcore:mass_fabricator")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:matter_fabricator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:matter_fabricator")
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
        .itemOutputs("gtlcore:matter_fabricator")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:large_recycler"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:assembler_module")
        .itemInputs("4x gtlcore:advanced_assembly_line_unit",
            "4x gtceu:uv_emitter",
            "4x gtceu:uv_sensor",
            "4x gtceu:uv_robot_arm",
            "4x gtceu:uv_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
            "8x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:artherium_sn 2880")
        .itemOutputs("gtlcore:assembler_module")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:advanced_assembly_line"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:resource_collection")
        .itemInputs("gtlcore:large_void_miner",
            "gtlcore:void_fluid_drilling_rig",
            "4x gtceu:uv_robot_arm",
            "16x gtceu:stellite_gear",
            "4x gtceu:uv_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
            "8x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:artherium_sn 2880")
        .itemOutputs("gtlcore:resource_collection")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:luv_large_miner"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:power_module")
        .itemInputs("gtceu:hssg_frame", "2x gtceu:iv_field_generator", "4x gtceu:luv_conveyor_module", "gtceu:uv_electric_motor", "4x gtceu:battery_alloy_rod", "2x gtceu:small_darmstadtium_gear", "4x gtceu:advanced_power_thruster", "6x gtceu:double_blue_steel_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:curium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtlcore:power_module")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:gravitation_engine_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:power_module_2")
        .itemInputs("gtlcore:power_module", "2x gtceu:luv_field_generator", "4x gtceu:zpm_conveyor_module", "gtceu:uhv_electric_motor", "2x gtceu:small_neutronium_gear", "6x gtceu:double_fluxed_electrum_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:berkelium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtlcore:power_module_2")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:power_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(128))

    gtr.assembly_line("gtlcore:power_module_3")
        .itemInputs("gtlcore:power_module_2", "2x gtceu:zpm_field_generator", "4x gtceu:uv_conveyor_module", "gtceu:uev_electric_motor", "2x gtceu:small_quantanium_gear", "6x gtceu:double_titansteel_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:californium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtlcore:power_module_3")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:power_module_2"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:power_module_4")
        .itemInputs("gtlcore:power_module_3", "2x gtceu:uv_field_generator", "4x gtceu:uhv_conveyor_module", "gtceu:uiv_electric_motor", "2x gtceu:small_infuscolium_gear", "6x gtceu:double_uruium_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:fermium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtlcore:power_module_4")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:power_module_3"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:power_module_5")
        .itemInputs("gtlcore:power_module_4", "2x gtceu:uhv_field_generator", "4x gtceu:uev_conveyor_module", "gtceu:uxv_electric_motor", "gtceu:small_vibramantium_gear", "6x gtceu:double_celestialtungsten_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:mendelevium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtlcore:power_module_5")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:power_module_4"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:stellar_forge")
        .itemInputs("4x gtlcore:stellar_containment_casing",
            "64x gtceu:naquadah_alloy_bolt",
            "32x gtceu:trinium_plate",
            "64x gtceu:darmstadtium_screw",
            "64x gtceu:highurabilityompoundteel_rod",
            "32x gtceu:titanium_tungsten_carbide_gear",
            "32x gtlcore:nm_chip",
            "8x #gtceu:circuits/uev",
            "8x gtceu:uhv_sensor",
            "8x gtceu:uhv_emitter",
            "4x gtceu:uhv_field_generator",
            "gtceu:max_battery")
        .inputFluids("gtceu:soldering_alloy 20736", "gtceu:neutronium 2880", "gtceu:protactinium 2880", "gtceu:fermium 2880")
        .itemOutputs("gtlcore:stellar_forge")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:stellar_containment_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:plasma_condenser")
        .itemInputs("64x gtceu:inconel_792_screw",
            "16x gtceu:rhodium_plated_palladium_plate",
            "16x gtceu:small_neutronium_gear",
            "8x gtceu:tungsten_carbide_gear",
            "4x gtceu:uhv_electric_motor",
            "4x gtceu:uhv_electric_pump",
            "2x #gtceu:circuits/uev",
            "4x gtlcore:magnetic_trap",
            "2x gtceu:copper_nanoswarm",
            "4x gtceu:uhv_sensor",
            "8x gtceu:double_tungsten_plate",
            "16x gtceu:double_zirconium_carbide_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:zirconium_carbide 5760", "gtceu:tungsten_carbide 5760", "gtceu:tantalum_carbide 5760")
        .itemOutputs("gtlcore:plasma_condenser")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:mega_vacuum_freezer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:void_fluid_drilling_rig")
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
        .itemOutputs("gtlcore:void_fluid_drilling_rig")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:ev_fluid_drilling_rig"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:large_void_miner")
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
        .itemOutputs("gtlcore:large_void_miner")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:fall_king 5760", "gtceu:energetic_alloy 5760", "gtceu:tanmolyium 5760")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:void_miner"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(64))

    gtr.assembly_line("gtlcore:annihilate_generator")
        .itemInputs("gtlcore:graviton_field_constraint_casing",
            "4x gtceu:uxv_emitter",
            "4x gtceu:uxv_sensor",
            "4x #gtceu:circuits/opv",
            "16x gtceu:uxv_field_generator",
            "4x gtlcore:rydberg_spinorial_assembly",
            "16x gtlcore:uxv_voltage_coil",
            "gtlcore:insanely_max_battery",
            "8x gtceu:double_draconium_plate",
            "8x gtceu:double_legendarium_plate")
        .itemOutputs("gtlcore:annihilate_generator")
        .inputFluids("gtceu:super_mutated_living_solder 4000", "gtceu:neutronium_doped_nanotubes 4000", "gtceu:europium 8192", "gtceu:tairitsu 8192")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:annihilation_constrainer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(4096))

    gtr.assembly_line("gtlcore:suprachronal_mainframe_complex")
        .itemInputs("2x gtceu:eternity_frame",
            "gtlcore:chaotic_core",
            "gtceu:micro_processor_mainframe",
            "gtceu:nano_processor_mainframe",
            "gtceu:quantum_processor_mainframe",
            "gtceu:crystal_processor_mainframe",
            "gtceu:wetware_processor_mainframe",
            "gtlcore:bioware_mainframe",
            "gtlcore:optical_mainframe",
            "gtlcore:exotic_mainframe",
            "gtlcore:cosmic_mainframe",
            "gtlcore:supracausal_mainframe",
            "gtlcore:eternity_catalyst",
            "16x gtlcore:nuclear_star",
            "16x gtceu:eternity_foil",
            "4x gtceu:eternity_plate")
        .itemOutputs("gtlcore:suprachronal_mainframe_complex")
        .inputFluids("gtceu:infinity 1000", "gtceu:spacetime 1000", "gtceu:eternity 1000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 1000")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(8000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:suprachronal_circuit_max"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.suprachronal_assembly_line("gtlcore:create_ultimate_battery")
        .itemInputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame",
            "4x gtlcore:suprachronal_mainframe_complex",
            "16x gtlcore:mega_max_battery",
            "16x gtlcore:max_field_generator",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "16x gtceu:infinity_hex_wire",
            "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_foil",
            "32x gtceu:magnetohydrodynamicallyconstrainedstarmatter_plate",
            "32x gtceu:double_cosmic_plate")
        .itemOutputs("gtlcore:create_ultimate_battery")
        .inputFluids("gtceu:infinity 1000", "gtceu:spacetime 1000", "gtceu:eternity 1000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 1000")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(8000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:mega_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtlcore:chemical_plant")
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
        .itemOutputs("gtlcore:chemical_plant")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtceu:large_chemical_reactor"))
        .dataStack(Registries.getItemStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400))

    gtr.assembly_line("gtlcore:iridium_casing")
        .itemInputs("2x gtceu:iridium_frame",
            "gtceu:titanium_turbine_casing",
            "gtceu:stainless_steel_turbine_casing",
            "4x gtceu:osmiridium_foil",
            "4x gtceu:iridium_foil",
            "gtceu:tanmolyium_plate",
            "gtceu:double_iridium_plate",
            "gtceu:double_osmiridium_plate")
        .inputFluids("gtceu:soldering_alloy 1440", "gtceu:iridium 576")
        .itemOutputs("2x gtlcore:iridium_casing")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtceu:large_scale_assembler_casing"))
        .dataStack(Registries.getItemStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200))

    gtr.assembly_line("gtlcore:hyper_reactor")
        .itemInputs("64x gtceu:uhpic_chip",
            "64x gtlcore:nm_chip",
            "4x #gtceu:circuits/uev",
            "2x gtceu:uev_electric_pump",
            "2x gtceu:uev_field_generator",
            "4x gtceu:double_orichalcum_plate",
            "4x gtceu:double_enderite_plate",
            "8x gtceu:naquadria_gear",
            "16x gtceu:naquadah_nanoswarm",
            "32x gtceu:naquadria_screw",
            "gtceu:max_battery")
        .inputFluids("gtceu:indalloy_140 1296", "gtceu:soldering_alloy 1296", "gtceu:mutated_living_solder 864", "gtceu:artherium_sn 864")
        .itemOutputs("gtlcore:hyper_reactor")
        .EUt(2000000)
        .duration(500)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:large_naquadah_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:advanced_hyper_reactor")
        .itemInputs("64x gtlcore:nm_chip",
            "64x gtlcore:pm_chip",
            "4x #gtceu:circuits/uxv",
            "2x gtceu:uiv_electric_pump",
            "2x gtceu:uiv_field_generator",
            "8x gtceu:double_seaborgium_plate",
            "8x gtceu:double_taranium_plate",
            "16x gtceu:naquadria_gear",
            "64x gtceu:naquadria_screw",
            "64x gtceu:infuscolium_nanoswarm",
            "gtlcore:transcendent_max_battery")
        .inputFluids("gtceu:tairitsu 2304", "gtceu:soldering_alloy 1296", "gtceu:indalloy_140 1296", "gtceu:super_mutated_living_solder 864")
        .itemOutputs("gtlcore:advanced_hyper_reactor")
        .EUt(32000000)
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:hyper_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:really_max_battery")
        .itemInputs("16x gtceu:double_neutronium_plate",
            "16x #gtceu:circuits/uev",
            "gtceu:max_battery",
            "8x gtlcore:bioware_processing_core",
            "64x gtlcore:nm_wafer",
            "64x gtlcore:nm_wafer",
            "64x gtlcore:smd_diode_bioware",
            "64x gtlcore:smd_capacitor_bioware",
            "64x gtlcore:smd_resistor_bioware",
            "64x gtlcore:smd_transistor_bioware",
            "64x gtlcore:smd_inductor_bioware",
            "64x gtceu:enderite_double_wire",
            "64x gtceu:quantanium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:polyetheretherketone 5760", "gtceu:neutronium 1296", "gtceu:duranium 2592")
        .itemOutputs("gtlcore:really_max_battery")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(288))

    gtr.assembly_line("gtlcore:transcendent_max_battery")
        .itemInputs("16x gtceu:double_quantanium_plate",
            "16x #gtceu:circuits/uiv",
            "gtlcore:really_max_battery",
            "8x gtlcore:optical_processing_core",
            "64x gtlcore:nm_wafer",
            "64x gtlcore:nm_wafer",
            "64x gtlcore:smd_diode_optical",
            "64x gtlcore:smd_capacitor_optical",
            "64x gtlcore:smd_resistor_optical",
            "64x gtlcore:smd_transistor_optical",
            "64x gtlcore:smd_inductor_optical",
            "64x gtceu:echoite_double_wire",
            "64x gtceu:adamantium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:zylon 5760", "gtceu:adamantine 2592", "gtceu:adamantium 2592")
        .itemOutputs("gtlcore:transcendent_max_battery")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:really_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(576))

    gtr.assembly_line("gtlcore:extremely_max_battery")
        .itemInputs("16x gtceu:double_adamantium_plate",
            "16x #gtceu:circuits/uxv",
            "gtlcore:transcendent_max_battery",
            "8x gtlcore:exotic_processing_core",
            "64x gtlcore:pm_wafer",
            "64x gtlcore:pm_wafer",
            "64x gtlcore:smd_diode_exotic",
            "64x gtlcore:smd_capacitor_exotic",
            "64x gtlcore:smd_resistor_exotic",
            "64x gtlcore:smd_transistor_exotic",
            "64x gtlcore:smd_inductor_exotic",
            "64x gtceu:legendarium_double_wire",
            "64x gtceu:vibranium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:kevlar 5760", "gtceu:vibranium 2592", "gtceu:heavy_quark_degenerate_matter 2592")
        .itemOutputs("gtlcore:extremely_max_battery")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:transcendent_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1152))

    gtr.assembly_line("gtlcore:insanely_max_battery")
        .itemInputs("16x gtceu:double_vibranium_plate",
            "16x #gtceu:circuits/opv",
            "gtlcore:extremely_max_battery",
            "8x gtlcore:cosmic_processing_core",
            "64x gtlcore:pm_wafer",
            "64x gtlcore:pm_wafer",
            "64x gtlcore:smd_diode_cosmic",
            "64x gtlcore:smd_capacitor_cosmic",
            "64x gtlcore:smd_resistor_cosmic",
            "64x gtlcore:smd_transistor_cosmic",
            "64x gtlcore:smd_inductor_cosmic",
            "64x gtceu:draconiumawakened_double_wire",
            "64x gtceu:draconium_bolt")
        .inputFluids("gtceu:super_mutated_living_solder 17280", "gtceu:fullerene_polymer_matrix_pulp 5760", "gtceu:legendarium 2592", "gtceu:draconiumawakened 2592")
        .itemOutputs("gtlcore:insanely_max_battery")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(3600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:extremely_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2304))

    gtr.assembly_line("gtlcore:mega_max_battery")
        .itemInputs("16x gtceu:double_draconium_plate",
            "16x #gtceu:circuits/max",
            "gtlcore:insanely_max_battery",
            "8x gtlcore:supracausal_processing_core",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:fm_wafer",
            "64x gtlcore:smd_diode_supracausal",
            "64x gtlcore:smd_capacitor_supracausal",
            "64x gtlcore:smd_resistor_supracausal",
            "64x gtlcore:smd_transistor_supracausal",
            "64x gtlcore:smd_inductor_supracausal",
            "64x gtceu:infinity_quadruple_wire",
            "64x gtceu:transcendentmetal_bolt")
        .inputFluids("gtceu:super_mutated_living_solder 24560", "gtceu:radox 5760", "gtceu:infinity 2592", "gtceu:spacetime 2592")
        .itemOutputs("gtlcore:mega_max_battery")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:insanely_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(4608))

    gtr.assembly_line("gtlcore:advanced_assembly_line")
        .itemInputs("4x gtceu:assembly_line_casing",
            "2x gtceu:uv_robot_arm",
            "2x gtceu:uv_emitter",
            "2x gtceu:uv_sensor",
            "4x #gtceu:circuits/uhv",
            "8x gtceu:stellite_gear",
            "8x gtceu:double_hssg_plate",
            "8x gtceu:double_tanmolyium_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:rose_gold 5760", "gtceu:osmiridium 5760", "gtceu:vanadium_gallium 5760")
        .itemOutputs("gtlcore:advanced_assembly_line")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:assembly_line"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(32))

    gtr.assembly_line("gtlcore:space_probe_surface_reception")
        .itemInputs("12x gtceu:double_adamantine_plate",
            "12x gtceu:neutronium_gear",
            "16x gtceu:double_titansteel_plate",
            "6x gtceu:fullerene_polymer_matrix_pulp_foil",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uxv_emitter",
            "4x gtceu:uxv_sensor",
            "16x gtceu:astraltitanium_rod",
            "8x gtlcore:lepton_trap_crystal",
            "4x gtlcore:scintillator",
            "2x gtceu:fusion_coil",
            "16x gtceu:double_arceusalloy2b_plate")
        .inputFluids("gtceu:mutated_living_solder 864", "gtceu:tairitsu 1296", "gtceu:soldering_alloy 1296", "gtceu:cinobite 864")
        .itemOutputs("gtlcore:space_probe_surface_reception")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:resource_collection"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:eye_of_harmony")
        .itemInputs("16x gtlcore:dimension_injection_casing",
            "16x gtlcore:spacetime_compression_field_generator",
            "16x gtlcore:dimensional_stability_casing",
            "64x gtceu:uv_world_accelerator",
            "64x gtlcore:resource_collection",
            "64x gtceu:high_performance_computation_array",
            "32x gtlcore:ctc_computational_unit",
            "32x gtlcore:stabilized_wormhole_generator",
            "16x #gtceu:circuits/max",
            "16x gtceu:cosmicneutronium_nanoswarm",
            "64x gtceu:opv_emitter",
            "64x gtceu:opv_sensor",
            "64x gtceu:opv_robot_arm",
            "64x gtlcore:time_dilation_containment_unit",
            "4x gtlcore:insanely_max_battery",
            "32x gtceu:double_chaos_plate")
        .inputFluids("gtceu:super_mutated_living_solder 480000", "gtceu:liquid_degenerate_rhenium 100000", "gtceu:neutronium 57600", "gtceu:infinity 16000")
        .itemOutputs("gtlcore:eye_of_harmony")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:recursively_folded_negative_space"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtlcore:dimensionally_transcendent_plasma_forge")
        .itemInputs("16x gtceu:black_titanium_frame",
            "8x gtlcore:dimensional_bridge_casing",
            "16x gtlcore:super_blast_smelter",
            "4x gtceu:uiv_energy_input_hatch",
            "8x gtceu:echoite_hex_wire",
            "32x #gtceu:circuits/uiv",
            "16x gtceu:zpm_quantum_chest",
            "16x gtceu:zpm_quantum_tank",
            "16x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_pump",
            "gtlcore:extremely_max_battery",
            "16x gtceu:uruium_nanoswarm",
            "64x gtceu:astraltitanium_plate",
            "64x gtceu:arceusalloy2b_plate",
            "32x gtceu:double_hassium_plate",
            "32x gtceu:double_hastelloyx_78_plate")
        .inputFluids("gtceu:mutated_living_solder 12960", "gtceu:transition 5760", "gtceu:hastelloyx_78 5760", "gtceu:hastelloyk_243 5760")
        .itemOutputs("gtlcore:dimensionally_transcendent_plasma_forge")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:stellar_forge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(4096))

    gtr.assembly_line("gtlcore:dimensionally_transcendent_mixer")
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
            "gtlcore:transcendent_max_battery",
            "4x gtceu:vibranium_nanoswarm",
            "16x gtceu:double_hastelloyx_78_plate")
        .inputFluids("gtceu:mutated_living_solder 12960", "gtceu:niobium_titanium 5760", "gtceu:grisium 5760", "gtceu:black_titanium 5760")
        .itemOutputs("gtlcore:dimensionally_transcendent_mixer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_mixer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:precision_assembler")
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
        .itemOutputs("gtlcore:precision_assembler")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_assembler"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(48))

    gtr.assembly_line("gtlcore:decay_hastener")
        .itemInputs("8x gtceu:neutron_reflector", "4x gtceu:luv_field_generator", "4x #gtceu:circuits/zpm", "16x gtceu:fine_naquadria_wire", "8x gtceu:long_darmstadtium_rod", "4x gtceu:double_incoloy_ma_956_plate", "16x gtceu:double_thorium_plate")
        .itemOutputs("gtlcore:decay_hastener")
        .inputFluids("gtceu:soldering_alloy 1296", "gtceu:indalloy_140 1296")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:zpm_world_accelerator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(32))

    gtr.assembly_line("gtlcore:compressed_stone_dust")
        .itemInputs("64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust")
        .itemOutputs("gtceu:compressed_stone_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)
        .stationResearch(b => b.researchStack(Registries.getItemStack("minecraft:reinforced_deepslate"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:time_dilation_containment_unit")
        .itemInputs("4x gtceu:naquadah_alloy_rod", "4x gtceu:degenerate_rhenium_plate", "2x gtceu:gravi_star", "2x gtceu:ruthenium_trinium_americium_neutronate_single_wire", "gtceu:uhv_emitter")
        .inputFluids("gtceu:fluxed_electrum 288", "gtceu:mutated_living_solder 288", "gtceu:neutronium 288", "gtceu:tritanium 576")
        .itemOutputs("gtlcore:time_dilation_containment_unit")
        .EUt(8000000)
        .duration(100)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:empty_laser_cooling_container"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:extremely_durable_plasma_cell")
        .itemInputs("48x gtceu:neutronium_plate", "4x gtceu:heavy_quark_degenerate_matter_large_fluid_pipe", "2x gtceu:uxv_electric_pump", "2x gtceu:uxv_field_generator", "gtceu:infuscolium_nanoswarm", "2x gtceu:quantumchromodynamically_confined_matter_frame", "4x gtlcore:force_field_glass", "8x gtceu:fusion_coil", "2x #gtceu:circuits/uiv", "4x gtceu:double_adamantine_plate", "4x gtceu:double_celestialtungsten_plate")
        .inputFluids("gtceu:super_mutated_living_solder 2304", "gtceu:dalisenite 2304", "gtceu:echoite 2592", "gtceu:taranium 1584")
        .itemOutputs("gtlcore:extremely_durable_plasma_cell")
        .EUt(15000000)
        .duration(150)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:plasma_containment_cell"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:dimension_injection_casing")
        .itemInputs("6x gtceu:osmiridium_plate", "4x gtceu:lead_plate", "12x gtceu:adamantium_bolt", "2x #gtceu:circuits/iv", "2x gtceu:enderite_single_wire", "gtceu:ev_super_tank", "gtceu:ev_super_chest")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200", "gtceu:vibrant_alloy 288", "gtceu:astral_silver 288", "gtceu:enriched_naquadah 288")
        .itemOutputs("2x gtlcore:dimension_injection_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:spacetime_assembly_line_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:spacetime_compression_field_generator")
        .itemInputs("gtlcore:dimensionally_transcendent_casing", "gtlcore:containment_field_generator", "4x gtlcore:dyson_deployment_casing", "gtceu:opv_field_generator", "gtlcore:microwormhole_generator", "4x gtceu:orichalcum_nanoswarm", "2x gtceu:infinity_rod", "gtceu:double_starmetal_plate", "gtceu:double_quantumchromodynamically_confined_matter_plate", "4x gtceu:double_titan_precision_steel_plate")
        .inputFluids("gtceu:super_mutated_living_solder 576", "gtceu:cosmicneutronium 288", "gtceu:crystalmatrix 576", "gtceu:heavy_quark_degenerate_matter 576")
        .itemOutputs("gtlcore:spacetime_compression_field_generator")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:time_dilation_containment_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:dimensional_bridge_casing")
        .itemInputs("gtlcore:dimensionally_transcendent_casing", "gtceu:uv_quantum_chest", "gtceu:uv_quantum_tank", "2x gtceu:enderite_single_wire", "2x #gtceu:circuits/uv", "gtceu:uhv_field_generator")
        .itemOutputs("gtlcore:dimensional_bridge_casing")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:liquid_degenerate_rhenium 200", "gtceu:duranium 288", "gtceu:enriched_naquadah 288")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:dimension_injection_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:manifold_oscillatory_power_cell")
        .itemInputs("32x gtceu:titansteel_single_wire", "32x gtceu:magnetic_neodymium_rod", "16x gtceu:vibranium_plate", "8x gtceu:fine_legendarium_wire", "4x gtlcore:amorphous_matter", "16x gtceu:double_red_alloy_plate", "2x gtceu:degenerate_rhenium_plate", "4x gtceu:double_quantum_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144", "gtceu:taranium 72", "gtceu:naquadria 144", "gtceu:tritanium 288")
        .itemOutputs("gtlcore:manifold_oscillatory_power_cell")
        .EUt(33550000)
        .duration(1800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:luv_vanadium_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:hyperdimensional_drone")
        .itemInputs("2x gtlcore:max_robot_arm", "2x gtlcore:max_conveyor_module", "2x gtlcore:max_emitter", "2x gtlcore:max_sensor", "gtlcore:max_field_generator", "gtlcore:chaotic_core", "gtlcore:draconic_energy_core", "gtlcore:spacetime_catalyst", "gtlcore:ctc_guidance_unit", "gtceu:black_dwarf_mtter_nanoswarm", "64x gtlcore:dyson_swarm_module", "64x gtlcore:dyson_swarm_module", "64x gtlcore:dyson_swarm_module", "64x gtlcore:dyson_swarm_module", "16x gtceu:double_transcendentmetal_plate", "16x gtceu:double_hypogen_plate")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:transcendentmetal 20000", "gtceu:rhugnor 20000", "gtceu:spacetime 10000")
        .itemOutputs("gtlcore:hyperdimensional_drone")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:space_drone_mk6"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtlcore:leptonic_charge")
        .itemInputs("gtceu:enriched_naquadah_frame", "gtceu:naquadriatictaranium_rod", "gtceu:double_uranium_235_plate", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:degenerate_rhenium_dust", "gtceu:protactinium_dust", "gtceu:mendelevium_dust", "2x gtceu:mithril_foil", "6x gtceu:orichalcum_bolt", "gtceu:enderium_plate", "gtceu:vibranium_plate")
        .inputFluids("gtceu:mutated_living_solder 1000", "gtceu:glyceryl_trinitrate 1000", "gtceu:stellar_energy_rocket_fuel 1000", "gtceu:free_electron_gas 1000")
        .itemOutputs("gtlcore:leptonic_charge")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:naquadria_charge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:quantum_chromodynamic_charge")
        .itemInputs("2x gtceu:double_infuscolium_plate", "2x gtceu:heavy_quark_degenerate_matter_plate", "gtlcore:time_dilation_containment_unit", "gtlcore:leptonic_charge", "gtceu:double_superheavy_l_alloy_plate", "gtceu:double_superheavy_h_alloy_plate")
        .inputFluids("gtceu:draconium 72", "gtceu:gluons 1296", "gtceu:legendarium 144", "gtceu:starmetal 144")
        .itemOutputs("gtlcore:quantum_chromodynamic_charge")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:leptonic_charge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:circuit_assembly_line")
        .itemInputs("4x gtlcore:machine_casing_circuit_assembly_line",
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
        .itemOutputs("gtlcore:circuit_assembly_line")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_circuit_assembler"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:bioware_processing_core")
        .itemInputs("gtlcore:bioware_printed_circuit_board",
            "8x gtlcore:smd_capacitor_bioware",
            "8x gtlcore:smd_diode_bioware",
            "8x gtlcore:smd_resistor_bioware",
            "8x gtlcore:smd_transistor_bioware",
            "8x gtlcore:smd_inductor_bioware",
            "2x gtceu:polyetheretherketone_foil",
            "8x gtlcore:biological_cells",
            "8x gtlcore:bioware_chip",
            "16x gtceu:fine_naquadah_wire",
            "4x gtceu:niobium_titanium_plate")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:polyethylene 1296", "gtceu:polyvinyl_chloride 864", "gtceu:soldering_alloy 1296")
        .itemOutputs("8x gtlcore:bioware_processing_core")
        .EUt(368640)
        .duration(320)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:bioware_chip"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:optical_processing_core")
        .itemInputs("gtlcore:optical_printed_circuit_board",
            "8x gtlcore:smd_capacitor_optical",
            "8x gtlcore:smd_diode_optical",
            "8x gtlcore:smd_resistor_optical",
            "8x gtlcore:smd_transistor_optical",
            "8x gtlcore:smd_inductor_optical",
            "2x gtceu:polyetheretherketone_foil",
            "2x kubejs:non_linear_optical_lens",
            "16x gtceu:normal_optical_pipe",
            "8x gtlcore:optical_soc",
            "4x gtlcore:solar_light_splitter",
            "gtlcore:low_frequency_laser",
            "gtlcore:medium_frequency_laser",
            "gtlcore:high_frequency_laser",
            "gtlcore:bose_einstein_cooling_container",
            "4x gtceu:graphene_plate")
        .inputFluids("gtceu:polytetrafluoroethylene 864", "gtceu:naquadah_alloy 432", "gtceu:soldering_alloy 1296", "gtceu:fullerene_doped_nanotubes 144")
        .itemOutputs("8x gtlcore:optical_processing_core")
        .EUt(1474560)
        .duration(320)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:optical_soc"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:exotic_processing_core")
        .itemInputs("gtlcore:exotic_printed_circuit_board",
            "16x gtlcore:smd_capacitor_exotic",
            "16x gtlcore:smd_diode_exotic",
            "16x gtlcore:smd_resistor_exotic",
            "16x gtlcore:smd_transistor_exotic",
            "16x gtlcore:smd_inductor_exotic",
            "8x gtceu:trinium_titanium_foil",
            "4x gtlcore:high_precision_crystal_soc",
            "gtlcore:rydberg_spinorial_assembly",
            "gtlcore:x_ray_laser",
            "4x kubejs:non_linear_optical_lens",
            "8x gtceu:kevlar_foil",
            "4x gtceu:degenerate_rhenium_plate")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:quantum_dots 80")
        .itemOutputs("8x gtlcore:exotic_processing_core")
        .EUt(4000000)
        .duration(160)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:exotic_chip"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:cosmic_processing_core")
        .itemInputs("gtlcore:cosmic_printed_circuit_board",
            "24x gtlcore:smd_capacitor_cosmic",
            "24x gtlcore:smd_diode_cosmic",
            "24x gtlcore:smd_resistor_cosmic",
            "24x gtlcore:smd_transistor_cosmic",
            "24x gtlcore:smd_inductor_cosmic",
            "gtlcore:cosmic_processing_unit_core",
            "gtlcore:ultrashort_pulse_laser",
            "16x gtceu:fine_cinobite_wire",
            "32x gtceu:fine_borosilicate_glass_wire",
            "4x gtlcore:bose_einstein_cooling_container",
            "2x gtceu:fullerene_polymer_matrix_pulp_foil",
            "4x gtceu:black_titanium_plate")
        .inputFluids("gtceu:zylon 864", "gtceu:adamantium 432", "gtceu:mutated_living_solder 1296", "gtceu:echoite 432")
        .itemOutputs("8x gtlcore:cosmic_processing_core")
        .EUt(11796480)
        .duration(320)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:cosmic_processing_unit_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:supracausal_processing_core")
        .itemInputs("gtlcore:supracausal_printed_circuit_board",
            "64x gtlcore:smd_capacitor_supracausal",
            "64x gtlcore:smd_diode_supracausal",
            "64x gtlcore:smd_resistor_supracausal",
            "64x gtlcore:smd_transistor_supracausal",
            "64x gtlcore:smd_inductor_supracausal",
            "3x gtlcore:quantumchromodynamic_protective_plating",
            "2x gtceu:legendarium_single_wire",
            "gtlcore:nuclear_clock",
            "gtlcore:topological_manipulator_unit",
            "gtlcore:relativistic_spinorial_memory_system",
            "gtlcore:graviton_transducer",
            "4x gtceu:neutronium_plate")
        .inputFluids("gtceu:polyimide 1296", "gtceu:zylon 1296", "gtceu:fullerene_polymer_matrix_pulp 1296", "gtceu:radox 1296")
        .itemOutputs("8x gtlcore:supracausal_processing_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:relativistic_spinorial_memory_system"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:qft_coil")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_frame",
            "gtlcore:uruium_coil_block",
            "gtceu:uev_field_generator",
            "gtlcore:quantumchromodynamic_protective_plating",
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
        .itemOutputs("gtlcore:qft_coil")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:fusion_coil"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:spacetimecontinuumripper")
        .itemInputs("gtlcore:manipulator",
            "4x gtceu:uiv_emitter",
            "gtceu:uiv_field_generator",
            "gtceu:uxv_emitter",
            "4x gtceu:echoite_octal_wire",
            "8x gtceu:neutron_reflector",
            "4x gtceu:double_dubnium_plate",
            "4x gtceu:double_superheavy_l_alloy_plate")
        .inputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000", "gtceu:thulium 2880", "gtceu:neptunium 2880", "gtceu:fermium 2880")
        .itemOutputs("gtlcore:spacetimecontinuumripper")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:manipulator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:spacetimebendingcore")
        .itemInputs("gtlcore:manipulator",
            "4x gtceu:uiv_field_generator",
            "4x gtceu:uxv_robot_arm",
            "gtceu:uxv_fluid_regulator",
            "4x gtceu:echoite_octal_wire",
            "8x gtceu:neutron_reflector",
            "4x gtceu:double_hassium_plate",
            "4x gtceu:double_superheavy_h_alloy_plate")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:thulium 2880", "gtceu:nobelium 2880", "gtceu:lawrencium 2880")
        .itemOutputs("gtlcore:spacetimebendingcore")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:spacetimecontinuumripper"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:a_mass_fabricator")
        .itemInputs("16x gtceu:active_transformer",
            "4x gtlcore:mass_fabricator",
            "4x gtlcore:cosmic_processing_core",
            "16x gtlcore:magnetic_trap",
            "32x gtlcore:scintillator_crystal",
            "16x gtlcore:electron_source",
            "8x gtlcore:unstable_star",
            "4x gtceu:vibranium_nanoswarm",
            "16x gtlcore:charged_lepton_trap_crystal",
            "4x #gtceu:circuits/opv",
            "gtlcore:extremely_max_battery",
            "16x gtceu:superheavy_h_alloy_plate",
            "32x gtceu:double_vibranium_plate",
            "32x gtceu:double_arceusalloy2b_plate")
        .inputFluids("gtceu:uruium 5760", "gtceu:zeron_100 2880", "gtceu:maraging_steel_300 2880", "gtceu:hastelloy_c_276 2880")
        .itemOutputs("gtlcore:a_mass_fabricator")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:mass_fabricator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:mage_assembler")
        .itemInputs("16x gtceu:large_assembler",
            "16x gtceu:large_circuit_assembler",
            "16x gtlcore:precision_circuit_assembly_robot_mk1",
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
        .itemOutputs("gtlcore:mage_assembler")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:precision_assembler"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:cooling_tower")
        .itemInputs("64x gtceu:hsse_frame",
            "16x gtlcore:plasma_condenser",
            "16x gtceu:mega_vacuum_freezer",
            "64x gtlcore:empty_laser_cooling_container",
            "64x gtlcore:high_frequency_laser",
            "64x gtlcore:medium_frequency_laser",
            "64x gtlcore:low_frequency_laser",
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
        .itemOutputs("gtlcore:cooling_tower")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:vacuum_freezer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:bedrock_drilling_rig")
        .itemInputs("16x gtceu:uev_rock_crusher",
            "16x gtceu:uev_cutter",
            "16x gtceu:uev_macerator",
            "4x gtlcore:machine_casing_grinding_head",
            "4x gtlcore:bedrock_drill",
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
        .itemOutputs("gtlcore:bedrock_drilling_rig")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:bedrock_drill"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:superconducting_electromagnetism")
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
        .inputFluids("gtceu:indalloy_140 2880", "gtceu:mutated_living_solder 2880", "gtceu:soldering_alloy 5760", "gtceu:enriched_naquadah_trinium_europium_duranide 5760")
        .itemOutputs("gtlcore:superconducting_electromagnetism")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:superconducting_coil"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:create_aggregation")
        .itemInputs("32x gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame",
            "16x gtlcore:chain_command_block_core",
            "16x gtlcore:spacetimecontinuumripper",
            "8x gtlcore:create_aggregatione_core",
            "32x gtlcore:max_robot_arm",
            "32x gtlcore:max_emitter",
            "16x gtlcore:max_field_generator",
            "64x gtceu:infinity_octal_wire",
            "2x gtlcore:mega_max_battery",
            "64x gtceu:cosmic_plate",
            "64x gtceu:double_shirabon_plate",
            "64x gtceu:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .inputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 10000", "gtceu:primordialmatter 16000", "gtceu:temporalfluid 32000", "gtceu:spatialfluid 32000")
        .itemOutputs("gtlcore:create_aggregation")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(12000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:create_aggregatione_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(16384))

    gtr.assembly_line("gtlcore:create_aggregatione_core")
        .itemInputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_frame",
            "16x gtlcore:dimension_creation_casing",
            "16x gtlcore:two_way_foil",
            "16x gtceu:cosmic_foil",
            "64x gtlcore:black_body_naquadria_supersolid",
            "16x gtlcore:max_field_generator",
            "32x gtceu:magmatter_rod",
            "8x gtlcore:eigenfolded_kerr_manifold",
            "16x gtlcore:max_robot_arm",
            "gtlcore:insanely_max_battery",
            "16x gtceu:magnetohydrodynamicallyconstrainedstarmatter_foil",
            "64x gtceu:eternity_foil")
        .inputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 10000", "gtceu:chaos 10000", "gtceu:temporalfluid 10000", "gtceu:magmatter 10000")
        .itemOutputs("gtlcore:create_aggregatione_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:dragon_stabilizer_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(16384))

    const parts_materialas = [
        ["uhv", "1", "europium", "abyssalalloy", "uv", "zpm", "400000", "neutronium", "ruthenium_trinium_americium_neutronate", "orichalcum", "2x gtceu:gravi_star", "1", "fluxed_electrum", "gtceu:highurabilityompoundteel 576"],
        ["uev", "2", "mithril", "titansteel", "uhv", "uv", "1600000", "quantanium", "enderite", "hastelloyx_78", "4x gtceu:gravi_star", "2", "dalisenite", "gtceu:bohrium 576"]
    ]
    parts_materialas.forEach((parts_material) => {
        gtr.assembly_line("gtlcore:" + parts_material[0] + "_electric_motor")
            .itemInputs("gtlcore:magnetic_long_netherite_rod",
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_electric_motor"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_electric_pump")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_electric_pump"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_conveyor_module")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_conveyor_module"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_electric_piston")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_electric_piston"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_robot_arm")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_robot_arm"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_emitter")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_emitter"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_sensor")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_sensor"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_field_generator")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_field_generator"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembler("gtlcore:" + parts_material[0] + "_fluid_regulator")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_pump", "2x #gtceu:circuits/" + parts_material[0])
            .itemOutputs("gtceu:" + parts_material[0] + "_fluid_regulator")
            .EUt(parts_material[6])
            .circuit(1)
            .duration(100)
    })

    const parts_materials = [
        ["uiv", "4", "neutronium", "adamantine", "uev", "uhv", "6400000", "adamantium", "echoite", "infuscolium", "gtlcore:unstable_star", "3", "arceusalloy2b", "gtceu:taranium 576"],
        ["uxv", "8", "taranium", "naquadriatictaranium", "uiv", "uev", "25600000", "vibranium", "legendarium", "hastelloyk_243", "2x gtlcore:unstable_star", "4", "titan_precision_steel", "gtceu:astraltitanium 576"],
        ["opv", "16", "crystalmatrix", "starmetal", "uxv", "uev", "102400000", "draconium", "draconiumawakened", "vibramantium", "4x gtlcore:unstable_star", "5", "hikarium", "gtceu:celestialtungsten 576"]
    ]
    parts_materials.forEach((parts_material) => {
        gtr.assembly_line("gtlcore:" + parts_material[0] + "_electric_motor")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_electric_motor"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_electric_pump")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_electric_pump"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_conveyor_module")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_conveyor_module"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_electric_piston")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_electric_piston"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_robot_arm")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_robot_arm"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(64 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_emitter")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_emitter"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_sensor")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_sensor"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembly_line("gtlcore:" + parts_material[0] + "_field_generator")
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
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + parts_material[4] + "_field_generator"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(parts_material[6])
                .CWUt(96 * parts_material[1]))

        gtr.assembler("gtlcore:" + parts_material[0] + "_fluid_regulator")
            .itemInputs("gtceu:" + parts_material[0] + "_electric_pump", "2x #gtceu:circuits/" + parts_material[0])
            .itemOutputs("gtceu:" + parts_material[0] + "_fluid_regulator")
            .EUt(parts_material[6])
            .circuit(1)
            .duration(100)
    })

    gtr.assembly_line("gtlcore:dimensional_stability_casing")
        .itemInputs("gtlcore:containment_field_generator",
            "4x gtlcore:dyson_control_casing",
            "4x gtlcore:dyson_control_toroid",
            "gtceu:uxv_field_generator",
            "4x gtceu:uiv_field_generator",
            "2x gtceu:opv_electric_pump",
            "2x gtceu:rtm_alloy_spring",
            "#gtceu:circuits/uev",
            "2x gtceu:crystalmatrix_rod",
            "gtceu:double_crystalmatrix_plate")
        .inputFluids("gtceu:super_mutated_living_solder 288", "gtceu:liquid_degenerate_rhenium 200", "gtceu:pikyonium 288", "gtceu:periodicium 288")
        .itemOutputs("gtlcore:dimensional_stability_casing")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:dimensional_bridge_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:pcb_factory")
        .itemInputs("4x gtceu:neutronium_frame",
            "4x gtceu:uv_circuit_assembler",
            "4x gtlcore:chemical_plant",
            "4x #gtceu:circuits/uev",
            "4x gtceu:uhv_robot_arm",
            "4x gtceu:uhv_electric_pump",
            "2x gtceu:uhv_sensor",
            "2x gtceu:uhv_emitter",
            "gtceu:uhv_field_generator",
            "2x gtceu:iridium_nanoswarm",
            "2x gtceu:silver_nanoswarm",
            "16x gtceu:double_grisium_plate")
        .inputFluids("gtceu:soldering_alloy 2592", "gtceu:bismuth_bronze 2582", "gtceu:indalloy_140 1440", "gtceu:enriched_naquadah 1296")
        .itemOutputs("gtlcore:pcb_factory")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:bioware_circuit_board"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:large_naquadah_reactor")
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
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:indalloy_140 2304", "gtceu:trinium 2304")
        .itemOutputs("gtlcore:large_naquadah_reactor")
        .EUt(90000)
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:zpm_naquadah_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:aggregation_device")
        .itemInputs("4x gtlcore:draconium_block_charged", "64x gtlcore:pm_chip", "64x gtlcore:pm_chip", "8x gtlcore:reinforced_echo_shard", "4x gtceu:enderite_hex_wire", "4x gtceu:uev_field_generator", "gtlcore:really_max_battery", "64x gtceu:quantanium_screw", "8x gtceu:double_dalisenite_plate", "8x gtceu:double_seaborgium_plate")
        .itemOutputs("gtlcore:aggregation_device")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:neutronium 576", "gtceu:mana 1000", "gtceu:enriched_dragon_breath 100")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:aggregatione_core"))
            .EUt(GTValues.VA[GTValues.UEV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(128))

    gtr.assembly_line("gtlcore:super_particle_collider")
        .itemInputs("16x gtceu:zpm_field_generator", "16x gtceu:zpm_electric_pump", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "16x gtceu:uranium_rhodium_dinaquadide_hex_wire", "32x #gtceu:circuits/uv", "16x gtceu:neutron_reflector", "8x gtceu:double_lafium_plate")
        .itemOutputs("gtlcore:super_particle_collider")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:protactinium 1152", "gtceu:uranium 1152", "gtceu:neptunium 1152")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:accelerated_pipeline"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(32))

    gtr.assembly_line("gtlcore:space_elevator")
        .itemInputs("16x gtceu:gravitation_engine_unit", "8x gtceu:uv_field_generator", "8x #gtceu:circuits/uhv", "16x #gtceu:circuits/uv", "32x #gtceu:circuits/zpm", "64x #gtceu:circuits/luv", "4x gtlcore:module_connector", "32x gtceu:indium_tin_barium_titanium_cuprate_hex_wire", "16x gtceu:uranium_rhodium_dinaquadide_hex_wire", "8x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire", "48x gtceu:americium_huge_restrictive_item_pipe", "48x gtceu:duranium_huge_fluid_pipe", "64x gtceu:carbon_nanoswarm", "64x gtceu:carbon_nanoswarm", "32x gtceu:double_pikyonium_plate", "16x gtceu:double_orichalcum_plate")
        .itemOutputs("gtlcore:space_elevator")
        .inputFluids("gtceu:soldering_alloy 4096", "gtceu:mendelevium 4096", "gtceu:nobelium 4096", "gtceu:lawrencium 4096")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("ad_astra_rocketed:tier_7_rocket"))
            .EUt(GTValues.VA[GTValues.UV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(64))

    gtr.assembly_line("gtlcore:engraving_laser_plant")
        .itemInputs("8x gtceu:uv_laser_engraver", "8x gtceu:uhv_emitter", "8x gtceu:uhv_electric_piston", "8x gtceu:uhv_sensor", "8x gtceu:uhv_robot_arm", "8x gtceu:uhv_electric_pump", "32x gtceu:stellite_rod", "8x #gtceu:circuits/uev", "32x gtceu:fluxed_electrum_plate", "32x gtceu:grisium_plate", "16x gtceu:double_titanium_carbide_plate", "16x gtceu:double_titanium_tungsten_carbide_plate")
        .itemOutputs("gtlcore:engraving_laser_plant")
        .inputFluids("gtceu:indalloy_140 2592", "gtceu:artherium_sn 1296", "gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_engraving_laser"))
            .EUt(GTValues.VA[GTValues.UV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(64))

    gtr.assembly_line("gtlcore:qft")
        .itemInputs("8x gtceu:vibranium_frame", "4x gtlcore:spacetimecontinuumripper", "4x gtlcore:spacetimebendingcore", "8x gtlcore:precision_circuit_assembly_robot_mk4", "8x gtceu:uxv_sensor", "8x gtceu:uxv_robot_arm", "8x gtceu:uxv_electric_pump", "8x gtceu:uxv_field_generator", "8x #gtceu:circuits/opv", "gtlcore:extremely_max_battery", "64x gtceu:double_lafium_plate", "64x gtceu:double_titan_precision_steel_plate")
        .itemOutputs("gtlcore:qft")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:tairitsu 2880", "gtceu:soldering_alloy 2880", "gtceu:periodicium 2880")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:spacetimebendingcore"))
            .EUt(GTValues.VA[GTValues.UXV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(2048))

    const wireless_tiers = [
        [0, "uhv", "neutronium", "europium", "gtlcore:nm_chip", "8x gtlcore:smd_inductor_bioware"],
        [1, "uev", "quantanium", "mithril", "gtlcore:nm_chip", "8x gtlcore:smd_inductor_optical"],
        [2, "uiv", "adamantium", "neutronium", "gtlcore:pm_chip", "8x gtlcore:smd_inductor_exotic"],
        [3, "uxv", "vibranium", "taranium", "gtlcore:pm_chip", "8x gtlcore:smd_inductor_cosmic"],
        [4, "opv", "draconium", "crystalmatrix", "gtlcore:fm_chip", "8x gtlcore:smd_inductor_supracausal"]
    ]
    wireless_tiers.forEach((tier) => {
        let soldering = tier[0] < 3 ? "gtceu:mutated_living_solder 144" : "gtceu:super_mutated_living_solder 144"
        gtr.assembler(`gtmthings:${tier[1]}_wireless_energy_receive_cover`)
            .itemInputs(`gtceu:${tier[1]}_sensor`,
                `gtceu:${tier[1]}_emitter`,
                "4x gtceu:ender_pearl_plate",
                "2x #gtceu:circuits/" + tier[1],
                `gtlcore:${tier[1]}_voltage_coil`,
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
                `2x gtlcore:${tier[1]}_voltage_coil`,
                "2x gtceu:double_battery_alloy_plate")
            .inputFluids(soldering)
            .itemOutputs(`gtmthings:${tier[1]}_4a_wireless_energy_receive_cover`)
            .EUt(GTValues.VA[tier[0] + 9])
            .duration(200)
    })

    gtr.assembler("gtlcore:max_wireless_energy_receive_cover")
        .itemInputs("gtlcore:max_sensor",
            "gtlcore:max_emitter",
            "4x gtceu:ender_pearl_plate",
            "2x #gtceu:circuits/max",
            "gtlcore:max_voltage_coil",
            "gtlcore:fm_chip",
            "2x gtceu:cosmicneutronium_single_cable",
            "2x gtceu:red_alloy_single_cable",
            "4x gtceu:chaos_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144")
        .itemOutputs("gtlcore:max_wireless_energy_receive_cover")
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler("gtlcore:max_4a_wireless_energy_receive_cover")
        .itemInputs("2x gtlcore:max_wireless_energy_receive_cover",
            "8x gtceu:shirabon_foil",
            "4x gtceu:niobium_titanium_quadruple_cable",
            "2x gtlcore:max_voltage_coil",
            "2x gtceu:double_battery_alloy_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144")
        .itemOutputs("gtlcore:max_4a_wireless_energy_receive_cover")
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_16384a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_16384a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "4x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_16384a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_16384a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_16384a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "4x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_16384a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_65536a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_65536a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "8x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_65536a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_65536a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_65536a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "8x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtmthings:max_65536a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_262144a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_262144a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "16x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_262144a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_262144a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_262144a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "2x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "16x gtceu:normal_laser_pipe",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_262144a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)


    gtr.assembler(`gtlcore:max_1048576a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_1048576a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "4x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "4x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_1048576a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_1048576a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_1048576a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "4x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "4x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_1048576a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_4194304a_wireless_laser_target_hatch`)
        .itemInputs(`gtlcore:max_4194304a_laser_target_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "8x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "8x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_4194304a_wireless_laser_target_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    gtr.assembler(`gtlcore:max_4194304a_wireless_laser_source_hatch`)
        .itemInputs(`gtlcore:max_4194304a_laser_source_hatch`,
            `16x gtlcore:max_4a_wireless_energy_receive_cover`,
            "2x gtceu:active_transformer",
            "8x gtceu:superconducting_coil",
            "2x gtceu:high_power_casing",
            "32x gtceu:normal_laser_pipe",
            "8x gtlcore:molecular_coil",
            "gtceu:advanced_energy_detector_cover")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs(`gtlcore:max_4194304a_wireless_laser_source_hatch`)
        .EUt(GTValues.VA[14])
        .duration(200)

    for (let index = 5; index < 14; index++) {
        let tierName = GTValues.VN[index].toLowerCase()
        gtr.assembler(`gtlcore:${tierName}_16384a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_16384a_laser_target_hatch`,
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

        gtr.assembler(`gtlcore:${tierName}_16384a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_16384a_laser_source_hatch`,
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

        gtr.assembler(`gtlcore:${tierName}_65536a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_65536a_laser_target_hatch`,
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

        gtr.assembler(`gtlcore:${tierName}_65536a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_65536a_laser_source_hatch`,
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

        gtr.assembler(`gtlcore:${tierName}_262144a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_262144a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "16x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_262144a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_262144a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_262144a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "2x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "16x gtceu:normal_laser_pipe",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_262144a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)


        gtr.assembler(`gtlcore:${tierName}_1048576a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_1048576a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "4x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "4x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_1048576a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_1048576a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_1048576a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "4x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "4x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_1048576a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_4194304a_wireless_laser_target_hatch`)
            .itemInputs(`gtlcore:${tierName}_4194304a_laser_target_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "8x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "8x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_4194304a_wireless_laser_target_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)

        gtr.assembler(`gtlcore:${tierName}_4194304a_wireless_laser_source_hatch`)
            .itemInputs(`gtlcore:${tierName}_4194304a_laser_source_hatch`,
                `16x gtmthings:${tierName}_4a_wireless_energy_receive_cover`,
                "2x gtceu:active_transformer",
                "8x gtceu:superconducting_coil",
                "2x gtceu:high_power_casing",
                "32x gtceu:normal_laser_pipe",
                "8x gtlcore:molecular_coil",
                "gtceu:advanced_energy_detector_cover")
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(`gtlcore:${tierName}_4194304a_wireless_laser_source_hatch`)
            .EUt(GTValues.VA[index])
            .duration(200)
    }

    gtr.assembler("gtlcore:large_recycler")
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
        .itemOutputs("gtlcore:large_recycler")
        .EUt(1920)
        .duration(400)

    gtr.large_recycler("gtlcore:scrap_1")
        .itemInputs("#forge:ingots")
        .itemOutputs("gtlcore:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_2")
        .itemInputs("#forge:dusts")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_3")
        .itemInputs("4x #forge:small_dusts")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_4")
        .itemInputs("9x #forge:tiny_dusts")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_5")
        .itemInputs("#forge:storage_blocks")
        .itemOutputs("9x gtlcore:scrap")
        .EUt(1920)
        .duration(400)

    gtr.large_recycler("gtlcore:scrap_6")
        .itemInputs("9x #forge:nuggets")
        .itemOutputs("gtlcore:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_7")
        .itemInputs("#forge:gems")
        .itemOutputs("gtlcore:scrap")
        .EUt(480)
        .duration(200)

    gtr.large_recycler("gtlcore:scrap_8")
        .itemInputs("#minecraft:logs")
        .itemOutputs("gtlcore:scrap")
        .EUt(120)
        .duration(200)

    gtr.mixer("gtlcore:fertilizer_")
        .itemInputs("gtceu:fertilizer", "2x gtlcore:scrap")
        .itemOutputs("2x gtceu:fertilizer")
        .EUt(480)
        .duration(40)

    gtr.packer("gtlcore:scrap_box")
        .itemInputs("9x gtlcore:scrap")
        .itemOutputs("gtlcore:scrap_box")
        .EUt(12)
        .duration(200)

    gtr.assembler("gtlcore:space_elevator_mechanical_casing")
        .itemInputs("gtceu:hssg_frame", "6x gtceu:inconel_792_plate", "6x gtceu:double_pikyonium_plate")
        .itemOutputs("2x gtlcore:space_elevator_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.chemical_bath("gtlcore:high_strength_concrete")
        .itemInputs("#forge:concretes")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("gtlcore:high_strength_concrete")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtlcore:space_elevator_support")
        .itemInputs("gtceu:naquadah_frame", "4x gtceu:red_steel_rod", "6x gtceu:black_steel_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x gtlcore:space_elevator_support")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtlcore:space_elevator_internal_support")
        .itemInputs("gtceu:naquadah_frame", "2x gtceu:niobium_titanium_single_wire", "16x gtceu:fine_annealed_copper_wire", "#gtceu:circuits/luv", "6x gtceu:double_iridium_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x gtlcore:space_elevator_internal_support")
        .EUt(480)
        .duration(400)

    gtr.mass_fabricator("gtlcore:uu_matter")
        .itemInputs("ae2:matter_ball")
        .inputFluids("gtceu:uu_amplifier 10")
        .outputFluids("gtceu:uu_matter 10")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)

    gtr.assembler("gtlcore:void_miner")
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
        .itemOutputs("gtlcore:void_miner")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(800)

    gtr.forming_press("gtlcore:netherite_rod")
        .itemInputs("minecraft:netherite_upgrade_smithing_template", "2x gtceu:neodymium_rod", "minecraft:netherite_ingot")
        .itemOutputs("2x gtlcore:netherite_rod")
        .EUt(480)
        .duration(400)

    gtr.forge_hammer("gtlcore:long_netherite_rod")
        .itemInputs("2x gtlcore:netherite_rod")
        .itemOutputs("gtlcore:long_netherite_rod")
        .EUt(30)
        .duration(200)

    gtr.forge_hammer("gtlcore:magnetic_long_netherite_rod")
        .itemInputs("2x gtlcore:magnetic_netherite_rod")
        .itemOutputs("gtlcore:magnetic_long_netherite_rod")
        .EUt(30)
        .duration(200)

    gtr.polarizer("gtlcore:magnetic_netherite_rod")
        .itemInputs("gtlcore:netherite_rod")
        .itemOutputs("gtlcore:magnetic_netherite_rod")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.polarizer("gtlcore:magnetic_long_netherite_rod")
        .itemInputs("gtlcore:long_netherite_rod")
        .itemOutputs("gtlcore:magnetic_long_netherite_rod")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)

    //coil
    const coils = [
        ["uhv", "1966080", "abyssalalloy", "europium", "tritanium"],
        ["uev", "7864320", "titansteel", "mithril", "abyssalalloy"]
    ]
    coils.forEach((coil) => {
        gtr.assembler("gtlcore:" + coil[0] + "_voltage_coil")
            .itemInputs("gtlcore:magnetic_netherite_rod", "16x #forge:fine_wires/" + coil[2])
            .itemOutputs("gtlcore:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("gtlcore:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("gtlcore:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    const coilas = [
        ["uiv", "31457280", "adamantine", "neutronium", "titansteel"],
        ["uxv", "125829120", "naquadriatictaranium", "taranium", "adamantine"],
        ["opv", "503316480", "starmetal", "crystalmatrix", "naquadriatictaranium"]
    ]
    coilas.forEach((coil) => {
        gtr.assembler("gtlcore:" + coil[0] + "_voltage_coil")
            .itemInputs("gtceu:attuned_tengam_rod", "16x #forge:fine_wires/" + coil[2])
            .itemOutputs("gtlcore:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("gtlcore:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("gtlcore:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    gtr.assembler("gtlcore:max_voltage_coil")
        .itemInputs("gtceu:attuned_tengam_rod", "16x #forge:fine_wires/cosmicneutronium")
        .itemOutputs("gtlcore:max_voltage_coil")
        .EUt(2013265920)
        .duration(200)
        .circuit(1)

    gtr.assembly_line("gtlcore:infinity_coil_block")
        .itemInputs("gtlcore:qft_coil", "8x gtceu:infinity_double_wire", "16x gtceu:draconium_screw", "64x gtceu:kevlar_foil", "32x gtceu:radox_foil")
        .inputFluids("gtceu:starmetal 576", "gtceu:crystalmatrix 576")
        .itemOutputs("gtlcore:infinity_coil_block")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:starmetal_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(2048))

    gtr.assembly_line("gtlcore:hypogen_coil_block")
        .itemInputs("gtlcore:qft_coil", "8x gtceu:hypogen_double_wire", "16x gtceu:transcendentmetal_screw", "64x gtceu:radox_foil", "32x gtceu:chaos_foil")
        .inputFluids("gtceu:infinity 576", "gtceu:cosmicneutronium 576")
        .itemOutputs("gtlcore:hypogen_coil_block")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:infinity_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.assembly_line("gtlcore:eternity_coil_block")
        .itemInputs("gtlcore:qft_coil", "8x gtceu:spacetime_double_wire", "4x gtceu:eternity_rod", "avaritia:eternal_singularity", "64x gtlcore:cosmic_fabric", "64x gtceu:radox_foil", "64x gtceu:radox_foil", "64x gtceu:chaos_foil")
        .inputFluids("gtceu:hypogen 576", "gtceu:spacetime 576")
        .itemOutputs("gtlcore:eternity_coil_block")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:hypogen_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembler("gtlcore:ingot_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ingot_casting_mold")
        .itemOutputs("kubejs:ingot_field_shape")
        .EUt(30720)
        .duration(200)

    gtr.assembler("gtlcore:ball_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ball_casting_mold")
        .itemOutputs("kubejs:ball_field_shape")
        .EUt(30720)
        .duration(200)

    gtr.forming_press("gtlcore:scintillator_crystal")
        .itemInputs("gtceu:vibranium_plate", "gtceu:thallium_thulium_doped_caesium_iodide_dust", "gtceu:polycyclic_aromatic_mixture_dust", "gtceu:cadmium_tungstate_dust", "gtceu:bismuth_germanate_dust", "2x gtceu:mithril_plate")
        .itemOutputs("gtlcore:scintillator_crystal")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(280)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.chemical_reactor("gtlcore:caesium_iodide_dust")
        .itemInputs("gtceu:caesium_dust", "gtceu:iodine_dust")
        .itemOutputs("2x gtceu:caesium_iodide_dust")
        .EUt(30)
        .duration(100)

    gtr.electric_blast_furnace("gtlcore:thallium_thulium_doped_caesium_iodide_dust")
        .itemInputs("gtceu:caesium_iodide_dust", "gtceu:small_thulium_dust", "gtceu:small_thallium_dust")
        .itemOutputs("gtceu:thallium_thulium_doped_caesium_iodide_dust")
        .EUt(120)
        .duration(260)
        .blastFurnaceTemp(2853)

    gtr.assembler_module("gtlcore:scintillator")
        .itemInputs("12x gtceu:highurabilityompoundteel_screw", "12x gtceu:fine_cinobite_wire", "6x gtceu:zylon_foil", "4x gtceu:cinobite_plate", "4x gtceu:echoite_plate", "gtlcore:scintillator_crystal", "gtlcore:separation_electromagnet", "gtceu:double_astraltitanium_plate")
        .itemOutputs("gtlcore:scintillator")
        .inputFluids("gtceu:trinium_titanium 432", "gtceu:soldering_alloy 288", "gtceu:mutated_living_solder 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .addData("SEPMTier", 2)

    gtr.assembler("gtlcore:rare_earth_centrifugal")
        .itemInputs("8x gtceu:europium_plate", "16x gtceu:uhv_electric_motor", "16x gtceu:hsss_gear", "8x gtceu:long_mithril_rod", "16x gtceu:hsse_plate", "64x gtceu:fine_naquadria_wire", "4x #gtceu:circuits/uhv", "32x gtceu:stellite_plate")
        .itemOutputs("gtlcore:rare_earth_centrifugal")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    gtr.magic_manufacturer("gtlcore:mana_0")
        .notConsumable("gtceu:uev_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 100")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_1")
        .notConsumable("gtceu:uiv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_2")
        .notConsumable("gtceu:uxv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_3")
        .notConsumable("gtceu:opv_field_generator")
        .circuit(1)
        .outputFluids("gtceu:mana 100000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)

    gtr.magic_manufacturer("gtlcore:mana_4")
        .notConsumable("4x gtceu:uev_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 400")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_5")
        .notConsumable("4x gtceu:uiv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 4000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_6")
        .notConsumable("4x gtceu:uxv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 40000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_7")
        .notConsumable("4x gtceu:opv_field_generator")
        .circuit(2)
        .outputFluids("gtceu:mana 400000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(40)

    gtr.magic_manufacturer("gtlcore:mana_8")
        .notConsumable("16x gtceu:uev_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 1600")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_9")
        .notConsumable("16x gtceu:uiv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 16000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_10")
        .notConsumable("16x gtceu:uxv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 160000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_11")
        .notConsumable("16x gtceu:opv_field_generator")
        .circuit(3)
        .outputFluids("gtceu:mana 1600000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(80)

    gtr.magic_manufacturer("gtlcore:mana_12")
        .notConsumable("64x gtceu:uev_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 6400")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(160)

    gtr.magic_manufacturer("gtlcore:mana_13")
        .notConsumable("64x gtceu:uiv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 64000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(160)

    gtr.magic_manufacturer("gtlcore:mana_14")
        .notConsumable("64x gtceu:uxv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 640000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(160)

    gtr.magic_manufacturer("gtlcore:mana_15")
        .notConsumable("64x gtceu:opv_field_generator")
        .circuit(4)
        .outputFluids("gtceu:mana 6400000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(160)

    gtr.decay_hastener("gtceu:rutherfordium_dust")
        .inputFluids("gtceu:seaborgium 144")
        .itemOutputs("gtceu:rutherfordium_dust")
        .EUt(480)
        .duration(4000)

    gtr.decay_hastener("gtceu:rutherfordium_dust1")
        .inputFluids("gtceu:actinium 144")
        .itemOutputs("gtceu:rutherfordium_dust")
        .EUt(480)
        .duration(8000)

    gtr.decay_hastener("gtceu:actinium_dust")
        .inputFluids("gtceu:radium 144")
        .itemOutputs("gtceu:actinium_dust")
        .EUt(480)
        .duration(2000)

    gtr.assembler("gtlcore:plasma_containment_cell")
        .itemInputs("4x gtceu:osmiridium_plate", "gtceu:uv_field_generator", "gtceu:long_naquadah_alloy_rod", "2x gtceu:fusion_glass", "8x gtceu:fluxed_electrum_foil")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:magic_core")
        .itemInputs("8x gtceu:double_stellite_100_plate", "gtlcore:bose_einstein_cooling_container", "minecraft:conduit", "8x gtceu:double_enderium_plate")
        .itemOutputs("kubejs:magic_core")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.assembler("gtlcore:separation_electromagnet")
        .itemInputs("64x gtceu:fine_yttrium_barium_cuprate_wire", "64x gtceu:fine_niobium_titanium_wire", "16x gtceu:polybenzimidazole_foil", "8x gtceu:niobium_nitride_plate", "gtceu:long_vanadium_gallium_rod")
        .itemOutputs("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    gtr.canner("gtlcore:rhenium_plasma_containment_cell")
        .notConsumable("gtceu:naquadah_nanoswarm")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:degenerate_rhenium_plasma 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.sps_crafting("gtlcore:echoite_plasma")
        .itemInputs("16x gtceu:exquisite_echo_shard_gem", "gtlcore:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:mana 16000", "gtceu:enderium 1152", "gtceu:infuscolium 1152")
        .outputFluids("gtceu:echoite_plasma 2304")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.sps_crafting("gtlcore:bedrock_dust")
        .itemInputs("64x gtceu:compressed_stone_dust", "64x gtceu:compressed_stone_dust")
        .inputFluids("gtceu:mana 100000", "gtceu:thulium 9216", "gtceu:copernicium 9216")
        .itemOutputs("gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.bedrock_drilling_rig("gtlcore:bedrock_dust_1")
        .chancedInput("gtlcore:bedrock_drill", 10, 0)
        .itemOutputs("gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(1)
        .duration(200)

    gtr.bedrock_drilling_rig("gtlcore:bedrock_dust_2")
        .chancedInput("4x gtlcore:bedrock_drill", 10, 0)
        .itemOutputs("4x gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(2)
        .duration(400)

    gtr.bedrock_drilling_rig("gtlcore:bedrock_dust_3")
        .chancedInput("16x gtlcore:bedrock_drill", 10, 0)
        .itemOutputs("16x gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(3)
        .duration(800)

    gtr.bedrock_drilling_rig("gtlcore:bedrock_dust_4")
        .chancedInput("64x gtlcore:bedrock_drill", 10, 0)
        .itemOutputs("64x gtceu:bedrock_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .circuit(4)
        .duration(1600)

    gtr.vacuum_freezer("gtlcore:liquid_hydrogen")
        .inputFluids("gtceu:hydrogen 1000")
        .outputFluids("gtceu:liquid_hydrogen 1000")
        .EUt(7680)
        .duration(240)

    gtr.matter_fabricator("gtlcore:uu_amplifier")
        .itemInputs("gtlcore:scrap")
        .circuit(1)
        .outputFluids("gtceu:uu_amplifier 1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.matter_fabricator("gtlcore:uu_amplifier_a")
        .itemInputs("gtlcore:scrap_box")
        .circuit(1)
        .outputFluids("gtceu:uu_amplifier 9")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.matter_fabricator("gtlcore:uu_amplifier_1")
        .itemInputs("gtlcore:scrap")
        .circuit(2)
        .itemOutputs("64x ae2:matter_ball")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1)

    gtr.matter_fabricator("gtlcore:uu_amplifier_2")
        .itemInputs("gtlcore:scrap_box")
        .circuit(2)
        .itemOutputs("576x ae2:matter_ball")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1)

    gtr.centrifuge("gtlcore:free_electron_gas")
        .notConsumable("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:uu_matter 1000")
        .outputFluids("gtceu:free_electron_gas 1000", "gtceu:free_alpha_gas 500")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtlcore:quark_gluon")
        .notConsumable("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:quark_gluon_plasma 1000")
        .outputFluids("gtceu:heavy_quarks 200", "gtceu:light_quarks 600", "gtceu:gluons 200")
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.fluid_solidifier("gtlcore:degenerate_rhenium_plate")
        .notConsumable("gtceu:plate_casting_mold")
        .inputFluids("gtceu:liquid_degenerate_rhenium 144")
        .itemOutputs("gtceu:degenerate_rhenium_plate")
        .EUt(7)
        .duration(400)

    gtr.macerator("gtlcore:degenerate_rhenium_dust")
        .itemInputs("gtceu:degenerate_rhenium_plate")
        .itemOutputs("gtceu:degenerate_rhenium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.polarizer("gtlcore:triplet_neutronium_sphere")
        .itemInputs("gtlcore:neutronium_sphere")
        .itemOutputs("gtlcore:triplet_neutronium_sphere")
        .EUt(5000000)
        .duration(200)

    gtr.canner("gtlcore:charged_triplet_neutronium_sphere")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .itemInputs("gtlcore:triplet_neutronium_sphere")
        .inputFluids("gtceu:free_alpha_gas 1000")
        .itemOutputs("gtlcore:charged_triplet_neutronium_sphere")
        .EUt(500000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:hyper_core")
        .itemInputs("16x gtceu:highurabilityompoundteel_screw", "4x gtceu:naquadria_frame", "4x gtceu:naquadria_plate", "2x gtceu:uev_field_generator", "gtceu:naquadah_nanoswarm", "gtceu:uev_sensor", "gtceu:uev_emitter", "#gtceu:circuits/uev")
        .inputFluids("gtceu:mutated_living_solder 288")
        .itemOutputs("gtlcore:hyper_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:annihilate_core")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_frame", "gtlcore:graviton_transducer", "gtlcore:topological_manipulator_unit", "gtceu:uxv_field_generator", "2x #gtceu:circuits/uxv", "4x gtceu:double_cinobite_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296")
        .itemOutputs("gtlcore:annihilate_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:draconiumawakened_plasma_containment_cell")
        .notConsumable("gtceu:draconium_nanoswarm")
        .inputFluids("gtceu:draconiumawakened_plasma 1000")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:draconiumawakened_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:dense_neutron_plasma_cell")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .inputFluids("gtceu:dense_neutron_plasma 1000")
        .itemInputs("gtlcore:extremely_durable_plasma_cell")
        .itemOutputs("gtlcore:dense_neutron_plasma_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:chaos_containment_unit")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:chaos_plasma 1000")
        .itemInputs("gtlcore:time_dilation_containment_unit")
        .itemOutputs("gtlcore:chaos_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:neutronium_gearbox")
        .itemInputs("4x gtceu:neutronium_plate", "2x gtceu:neutronium_gear", "gtceu:neutronium_frame")
        .itemOutputs("2x gtlcore:neutronium_gearbox")
        .EUt(16)
        .duration(50)
        .circuit(4)

    gtr.precision_assembler("gtlcore:annihilation_constrainer")
        .itemInputs("gtlcore:hypercube", "8x gtlcore:contained_reissner_nordstrom_singularity", "4x #gtceu:circuits/uxv", "16x gtceu:cosmicneutronium_foil")
        .inputFluids("gtceu:cinobite 1152", "gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("gtlcore:annihilation_constrainer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:neutronium_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:zylon 100", "gtceu:neutronium 100")
        .itemOutputs("gtlcore:neutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:draconium_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:fullerene_polymer_matrix_pulp 100", "gtceu:draconium 100")
        .itemOutputs("gtlcore:draconium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:cosmicneutronium_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:radox 100", "gtceu:cosmicneutronium 100")
        .itemOutputs("gtlcore:cosmicneutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:infinity_antimatter_fuel_rod")
        .itemInputs("64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "64x gtlcore:pellet_antimatter", "gtlcore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:heavy_quark_degenerate_matter_plasma 1000", "gtceu:liquid_cosmic_mesh 100", "gtceu:infinity 100")
        .itemOutputs("gtlcore:infinity_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:reinforced_echo_shard")
        .itemInputs("4x gtceu:echo_shard_plate", "4x gtlcore:echobone", "2x minecraft:netherite_scrap", "gtceu:double_echoite_plate")
        .inputFluids("gtceu:liquid_hydrogen 8000", "gtceu:echoite_plasma 1000")
        .itemOutputs("gtlcore:reinforced_echo_shard")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:graviton_field_constraint_casing")
        .itemInputs("gtceu:draconium_frame", "gtlcore:annihilation_constrainer", "gtceu:neutronium_nanoswarm", "gtceu:celestialtungsten_gear", "4x gtceu:double_adamantium_plate")
        .inputFluids("gtceu:neutronium 288")
        .itemOutputs("2x gtlcore:graviton_field_constraint_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.assembler("gtlcore:laser_cooling_casing")
        .itemInputs("gtceu:hsse_frame", "gtlcore:laser_cooling_unit", "2x gtlcore:uhv_voltage_coil", "6x gtceu:zirconium_carbide_plate", "2x gtceu:double_fluxed_electrum_plate", "4x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtlcore:laser_cooling_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:hypercube")
        .itemInputs("12x gtceu:cosmicneutronium_rod", "24x gtceu:celestialtungsten_rod")
        .inputFluids("gtceu:exciteddtec 1000")
        .itemOutputs("gtlcore:hypercube")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2400)
        .blastFurnaceTemp(30000)

    gtr.mixer("gtlcore:dimensionallytranscendentcrudecatalyst")
        .itemInputs("gtlcore:resonating_gem")
        .inputFluids("gtceu:nitrogen_plasma 1000", "gtceu:helium_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    gtr.stellar_forge("gtlcore:exciteddtec")
        .itemInputs("gtlcore:quantum_chromodynamic_charge")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 10000")
        .outputFluids("gtceu:exciteddtec 10000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)


    gtr.annihilate_generator("gtlcore:neutronium_antimatter_fuel_rod")
        .itemInputs("gtlcore:neutronium_antimatter_fuel_rod")
        .chancedOutput("gtlcore:annihilation_constrainer", 9000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 256)

    gtr.annihilate_generator("gtlcore:draconium_antimatter_fuel_rod")
        .itemInputs("gtlcore:draconium_antimatter_fuel_rod")
        .chancedOutput("gtlcore:annihilation_constrainer", 8000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 4096)

    gtr.annihilate_generator("gtlcore:cosmicneutronium_antimatter_fuel_rod")
        .itemInputs("gtlcore:cosmicneutronium_antimatter_fuel_rod")
        .chancedOutput("gtlcore:annihilation_constrainer", 7000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 65536)

    gtr.annihilate_generator("gtlcore:infinity_antimatter_fuel_rod")
        .itemInputs("gtlcore:infinity_antimatter_fuel_rod")
        .chancedOutput("gtlcore:annihilation_constrainer", 6000, 0)
        .duration(200)
        .EUt(-GTValues.V[GTValues.MAX] * 1048576)

    gtr.assembler("gtlcore:fishing_ground")
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
        .itemOutputs("gtlcore:fishing_ground")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtlcore:extreme_strength_tritanium_casing")
        .itemInputs("gtceu:tritanium_frame", "6x gtceu:tritanium_plate")
        .itemOutputs("2x gtlcore:extreme_strength_tritanium_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:aluminium_bronze_casing")
        .itemInputs("gtceu:aluminium_bronze_frame", "6x gtceu:aluminium_bronze_plate")
        .itemOutputs("2x gtlcore:aluminium_bronze_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:hyper_mechanical_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadria_plate")
        .itemOutputs("2x gtlcore:hyper_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:enhance_hyper_mechanical_casing")
        .itemInputs("gtceu:naquadria_frame", "2x gtceu:double_naquadah_alloy_plate", "2x gtceu:double_naquadah_plate", "2x gtceu:double_enriched_naquadah_plate")
        .itemOutputs("2x gtlcore:enhance_hyper_mechanical_casing")
        .inputFluids("gtceu:naquadria 576")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:dimensionally_transcendent_casing")
        .itemInputs("gtceu:mithril_frame", "2x gtlcore:dimension_injection_casing", "2x gtlcore:molecular_casing", "gtceu:iv_quantum_chest", "gtceu:iv_quantum_tank", "12x gtceu:adamantium_bolt", "gtceu:enderite_single_wire", "6x gtceu:palladium_plate", "6x gtceu:osmiridium_plate")
        .itemOutputs("2x gtlcore:dimensionally_transcendent_casing")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.assembler("gtlcore:uruium_coil_block")
        .itemInputs("64x gtceu:uruium_double_wire", "64x gtceu:uruium_double_wire", "16x gtceu:neutronium_ring", "32x gtceu:vibramantium_bolt", "64x gtceu:black_steel_foil", "64x gtceu:cupronickel_foil", "64x gtceu:ruthenium_trinium_americium_neutronate_foil", "64x gtceu:hssg_foil", "64x gtceu:styrene_butadiene_rubber_foil")
        .itemOutputs("gtlcore:uruium_coil_block")
        .inputFluids("gtceu:molybdenum 576")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.mixer("gtlcore:concentration_mixing_hyper_fuel_1")
        .itemInputs("gtceu:hassium_dust", "gtceu:oganesson_dust")
        .inputFluids("gtceu:hyper_fuel_4 1000", "gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_1 1000")
        .EUt(GTValues.V[GTValues.UXV])
        .duration(800)

    gtr.mixer("gtlcore:concentration_mixing_hyper_fuel_2")
        .itemInputs("gtceu:starmetal_dust", "gtceu:draconium_dust")
        .inputFluids("gtceu:concentration_mixing_hyper_fuel_1 1000", "gtceu:dimensionallytranscendentprosaiccatalyst 1000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_2 1000")
        .EUt(GTValues.V[GTValues.OpV])
        .duration(800)

    gtr.compressor("gtlcore:rubber_plate")
        .itemInputs("2x gtceu:sticky_resin")
        .itemOutputs("gtceu:rubber_plate")
        .EUt(2)
        .duration(100)

    gtr.fusion_reactor("gtlcore:mithril_plasma")
        .duration(200)
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .inputFluids("gtceu:berkelium 144", "gtceu:potassium 1152")
        .outputFluids("gtceu:mithril_plasma 144")

    gtr.fusion_reactor("gtlcore:orichalcum_plasma")
        .duration(200)
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .inputFluids("gtceu:einsteinium 144", "gtceu:sodium 1152")
        .outputFluids("gtceu:orichalcum_plasma 144")

    gtr.fusion_reactor("gtlcore:silver_plasma")
        .inputFluids("gtceu:europium 16", "gtceu:arsenic 16")
        .outputFluids("gtceu:silver_plasma 16")
        .EUt(GTValues.VH[GTValues.ZPM])
        .duration(18)
        .fusionStartEU(480000000)

    gtr.fusion_reactor("gtlcore:moscovium")
        .inputFluids("gtceu:calcium 32", "gtceu:curium 32")
        .outputFluids("gtceu:moscovium 32")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(800000000)

    gtr.fusion_reactor("gtlcore:livermorium")
        .inputFluids("gtceu:thorium 32", "gtceu:iron 32")
        .outputFluids("gtceu:livermorium 32")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(800000000)

    gtr.fusion_reactor("gtlcore:dubnium")
        .inputFluids("gtceu:europium 64", "gtceu:neon 250")
        .outputFluids("gtceu:dubnium 64")
        .EUt(GTValues.VH[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(720000000)

    gtr.fusion_reactor("gtlcore:seaborgium")
        .inputFluids("gtceu:calcium 64", "gtceu:plutonium 64")
        .outputFluids("gtceu:seaborgium 64")
        .EUt(GTValues.VH[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(720000000)

    gtr.fusion_reactor("gtlcore:tennessine")
        .inputFluids("gtceu:lead 16", "gtceu:bromine 16")
        .outputFluids("gtceu:tennessine 16")
        .EUt(GTValues.VH[GTValues.UV])
        .duration(64)
        .fusionStartEU(960000000)

    gtr.fusion_reactor("gtlcore:taranium_rich_liquid_helium_4_plasma")
        .inputFluids("gtceu:taranium_enriched_liquid_helium_3 125", "gtceu:hydrogen 125")
        .outputFluids("gtceu:taranium_rich_liquid_helium_4_plasma 125")
        .EUt(GTValues.VH[GTValues.UHV])
        .duration(128)
        .fusionStartEU(1200000000)

    gtr.fusion_reactor("gtlcore:vibranium_plasma")
        .inputFluids("gtceu:vibranium_unstable 16", "gtceu:adamantium 16")
        .outputFluids("gtceu:vibranium_plasma 16")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .fusionStartEU(1800000000)

    gtr.fusion_reactor("gtlcore:hassium")
        .inputFluids("gtceu:scandium_titanium_50_mixture 32", "gtceu:radon 250")
        .outputFluids("gtceu:metastable_hassium_plasma 32")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(64)
        .fusionStartEU(960000000)

    gtr.fusion_reactor("gtlcore:hot_oganesson")
        .inputFluids("gtceu:oganesson_breeding_base 16", "gtceu:dysprosium 16")
        .outputFluids("gtceu:hot_oganesson 125")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(64)
        .fusionStartEU(960000000)

    gtr.fusion_reactor("gtlcore:draconiumawakened_plasma")
        .inputFluids("gtceu:draconium 125", "gtceu:quantumchromodynamically_confined_matter 125")
        .outputFluids("gtceu:draconiumawakened_plasma 125")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .fusionStartEU(2100000000)

    gtr.fusion_reactor("gtlcore:infinity")
        .inputFluids("gtceu:crystalmatrix 2000", "gtceu:cosmicneutronium 1000")
        .outputFluids("gtceu:infinity 64")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(4800)
        .fusionStartEU(2100000000)

    //peek
    gtr.electric_blast_furnace("gtlcore:calcium_carbide_dust")
        .itemInputs("2x gtceu:carbon_dust", "2x gtceu:quicklime_dust")
        .itemOutputs("gtceu:calcium_carbide_dust")
        .outputFluids("gtceu:oxygen 1000")
        .EUt(120)
        .duration(100)
        .blastFurnaceTemp(800)

    gtr.chemical_reactor("gtlcore:acetylene")
        .itemInputs("3x gtceu:calcium_carbide_dust")
        .inputFluids("minecraft:water 2000")
        .outputFluids("gtceu:acetylene 1000")
        .itemOutputs("5x gtceu:calcium_hydroxide_dust")
        .EUt(7)
        .duration(60)

    gtr.mixer("gtlcore:sodium_nitrate_solution")
        .itemInputs("5x gtceu:sodium_nitrate_dust")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:sodium_nitrate_solution 1000")
        .EUt(120)
        .duration(80)

    gtr.mixer("gtlcore:znfealcl_catalyst_dust")
        .itemInputs("gtceu:zinc_dust", "gtceu:iron_dust", "gtceu:aluminium_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("4x gtceu:znfealcl_catalyst_dust")
        .EUt(15360)
        .duration(250)

    gtr.large_chemical_reactor("gtlcore:co_ac_ab_catalyst_dust")
        .itemInputs("2x gtceu:charcoal_dust", "gtceu:cobalt_dust", "gtceu:polybenzimidazole_plate")
        .inputFluids("gtceu:steam 1000", "gtceu:acetylene 1000")
        .outputFluids("gtceu:hydrogen 4000", "gtceu:carbon_monoxide 1000")
        .itemOutputs("1x gtceu:co_ac_ab_catalyst_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:sodium_nitrite_dust")
        .notConsumable("gtceu:co_ac_ab_catalyst_dust")
        .inputFluids("gtceu:sodium_nitrate_solution 1000")
        .outputFluids("gtceu:oxygen 1000", "minecraft:water 1000")
        .itemOutputs("4x gtceu:sodium_nitrite_dust")
        .EUt(30)
        .duration(300)

    gtr.chemical_reactor("gtlcore:boric_acide")
        .itemInputs("23x gtceu:borax_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .outputFluids("gtceu:boric_acide 4000", "minecraft:water 5000")
        .itemOutputs("4x gtceu:salt_dust")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtlcore:fluoroboric_acide")
        .inputFluids("gtceu:boric_acide 1000", "gtceu:hydrofluoric_acid 4000")
        .outputFluids("gtceu:fluoroboric_acide 1000", "minecraft:water 13000")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtlcore:benzenediazonium_tetrafluoroborate")
        .itemInputs("4x gtceu:sodium_nitrite_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:fluoroboric_acide 2000")
        .outputFluids("gtceu:benzenediazonium_tetrafluoroborate 1000", "minecraft:water 2000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(30720)
        .duration(130)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distillery("gtlcore:fluoro_benzene")
        .inputFluids("gtceu:benzenediazonium_tetrafluoroborate 1000")
        .outputFluids("gtceu:fluoro_benzene 1000")
        .EUt(122880)
        .duration(100)

    gtr.chemical_reactor("gtlcore:fluorotoluene")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:fluoroantimonic_acid 1000", "gtceu:methane 1000", "gtceu:fluoro_benzene 1000")
        .outputFluids("gtceu:fluorotoluene 1000", "minecraft:water 4000")
        .itemOutputs("4x gtceu:antimony_trifluoride_dust")
        .EUt(480)
        .duration(150)

    gtr.chemical_reactor("gtlcore:hydroquinone")
        .inputFluids("gtceu:benzene 2000", "gtceu:oxygen 5000", "gtceu:propene 1000")
        .outputFluids("gtceu:hydroquinone 1000", "gtceu:resorcinol 1000", "gtceu:acetone 1000")
        .EUt(1920)
        .duration(200)
        .circuit(2)

    gtr.large_chemical_reactor("gtlcore:difluorobenzophenone_dust")
        .notConsumable("gtceu:znfealcl_catalyst_dust")
        .inputFluids("gtceu:fluorotoluene 1000", "gtceu:chlorine 6000", "minecraft:water 1000", "gtceu:fluoro_benzene 1000")
        .outputFluids("gtceu:hydrochloric_acid 6000")
        .itemOutputs("24x gtceu:difluorobenzophenone_dust")
        .EUt(1920)
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:polyetheretherketone")
        .itemInputs("24x gtceu:difluorobenzophenone_dust", "6x gtceu:soda_ash_dust")
        .inputFluids("gtceu:hydroquinone 1000")
        .outputFluids("gtceu:polyetheretherketone 2592", "minecraft:water 1000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("4x gtceu:sodium_fluoride_dust")
        .EUt(122880)
        .duration(250)
        .cleanroom(CleanroomType.CLEANROOM)

    //nuclear_waste
    gtr.centrifuge("nuclear_waste")
        .itemInputs("gtlcore:nuclear_waste")
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
        gtr.macerator(echo)
            .itemInputs(echo)
            .itemOutputs("gtceu:echo_shard_dust")
            .EUt(7)
            .duration(100)
    })
    //iodine
    gtr.mixer("gtlcore:kelp_slurry")
        .itemInputs("8x minecraft:dried_kelp")
        .inputFluids("minecraft:water 1000")
        .outputFluids("gtceu:kelp_slurry 1000")
        .EUt(30)
        .duration(600)

    gtr.distillery("gtlcore:enriched_potassium_iodide_slurry")
        .inputFluids("gtceu:kelp_slurry 1000")
        .outputFluids("gtceu:enriched_potassium_iodide_slurry 100")
        .EUt(30)
        .duration(200)

    gtr.chemical_reactor("gtlcore:iodine_containing_slurry")
        .inputFluids("gtceu:chlorine 1000", "gtceu:enriched_potassium_iodide_slurry 1000")
        .outputFluids("gtceu:iodine_containing_slurry 1000")
        .EUt(120)
        .duration(100)

    gtr.centrifuge("gtlcore:iodine_dust")
        .inputFluids("gtceu:iodine_containing_slurry 1000")
        .itemOutputs("gtceu:iodine_dust", "2x gtceu:rock_salt_dust")
        .EUt(120)
        .duration(200)

    //germanium
    gtr.extractor("gtlcore:tannic")
        .itemInputs("minecraft:nether_wart_block")
        .outputFluids("gtceu:tannic 50")
        .EUt(30)
        .duration(200)

    gtr.chemical_bath("gtlcore:ash_leaching_solution")
        .itemInputs("12x #forge:dusts/ash")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:ash_leaching_solution 1000")
        .EUt(120)
        .duration(400)

    gtr.mixer("gtlcore:germanium_containing_precipitate_dust")
        .inputFluids("gtceu:ash_leaching_solution 1000", "gtceu:tannic 1000")
        .itemOutputs("gtceu:germanium_containing_precipitate_dust")
        .EUt(120)
        .duration(200)

    gtr.arc_furnace("gtlcore:germanium_ash_dust")
        .itemInputs("2x gtceu:germanium_containing_precipitate_dust")
        .itemOutputs("gtceu:germanium_ash_dust")
        .EUt(30)
        .duration(120)

    gtr.chemical_reactor("gtlcore:germanium_tetrachloride_solution")
        .itemInputs("2x gtceu:germanium_ash_dust")
        .inputFluids("gtceu:hydrochloric_acid 4000")
        .outputFluids("gtceu:germanium_tetrachloride_solution 1000")
        .EUt(120)
        .duration(200)

    gtr.dehydrator("gtlcore:germanium_dioxide_dust")
        .inputFluids("gtceu:germanium_tetrachloride_solution 1000", "gtceu:hydrogen 4000")
        .itemOutputs("3x gtceu:germanium_dioxide_dust")
        .outputFluids("gtceu:hydrochloric_acid 4000")
        .EUt(30)
        .duration(800)

    gtr.electric_blast_furnace("gtlcore:germanium_dust")
        .itemInputs("3x gtceu:germanium_dioxide_dust")
        .inputFluids("gtceu:hydrogen 4000")
        .itemOutputs("gtceu:germanium_dust")
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(680)

    //rhenium
    gtr.chemical_reactor("gtlcore:rhenium_dust")
        .inputFluids("gtceu:ammonium_perrhenate 1000", "gtceu:hydrogen 7000")
        .itemOutputs("gtceu:rhenium_dust")
        .outputFluids("gtceu:ammonia 1000", "minecraft:water 4000")
        .EUt(1920)
        .duration(80)

    gtr.chemical_reactor("gtlcore:ammonium_perrhenate")
        .inputFluids("gtceu:rhenium_sulfuric_solution 1000", "gtceu:ammonia 1000")
        .outputFluids("gtceu:ammonium_perrhenate 1000", "gtceu:hydrogen_sulfide 1000")
        .EUt(480)
        .duration(150)

    gtr.dissolution_treatment("gtlcore:rhenium_sulfuric_solution")
        .inputFluids("gtceu:molybdenum_flue 30000")
        .inputFluids("minecraft:water 2500")
        .outputFluids("gtceu:rhenium_sulfuric_solution 30000")
        .EUt(1920)
        .duration(3000)

    gtr.electric_blast_furnace("gtlcore:molybdenum_flue")
        .itemInputs("4x gtceu:molybdenum_concentrate_dust")
        .inputFluids("gtceu:oxygen 7250")
        .itemOutputs("4x gtceu:molybdenum_trioxide_dust")
        .outputFluids("gtceu:molybdenum_flue 3000")
        .EUt(120)
        .duration(340)
        .blastFurnaceTemp(2400)

    gtr.chemical_reactor("gtlcore:molybdenum_concentrate_dust")
        .itemInputs("3x gtceu:gold_depleted_molybdenite_dust")
        .inputFluids("gtceu:iron_iii_chloride 250")
        .itemOutputs("4x gtceu:molybdenum_concentrate_dust")
        .EUt(1920)
        .duration(10)

    gtr.chemical_reactor("gtlcore:gold_depleted_molybdenite_dust")
        .itemInputs("3x gtceu:molybdenite_dust")
        .inputFluids("gtceu:sodium_cyanide 1000")
        .itemOutputs("3x gtceu:gold_depleted_molybdenite_dust")
        .outputFluids("gtceu:gold_cyanide 1000")
        .EUt(7680)
        .duration(100)

    gtr.chemical_reactor("gtlcore:sodium_cyanide")
        .itemInputs("2x gtceu:sodium_dust")
        .inputFluids("gtceu:hydrogen_cyanide 2000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:sodium_cyanide 2000", "minecraft:water 1000")
        .EUt(1920)
        .duration(12)

    gtr.chemical_reactor("gtlcore:gold_cyanide")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("gtceu:gold_cyanide 1000")
        .itemOutputs("gtceu:gold_dust")
        .outputFluids("gtceu:sodium_cyanide 1000")
        .EUt(1920)
        .duration(140)

    //carbon nanotubes
    gtr.chemical_reactor("gtlcore:carbon_nanotubes_ingot")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 800", "gtceu:cycloparaphenylene 200")
        .itemOutputs("gtceu:carbon_nanotubes_ingot")
        .circuit(1)
        .EUt(320000)
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:cycloparaphenylene")
        .itemInputs("23x gtceu:dichlorocyclooctadieneplatinium_dust", "8x gtceu:carbon_dust", "4x gtceu:diiodobiphenyl_dust")
        .inputFluids("gtceu:trimethyltin_chloride 4000", "gtceu:silver_tetrafluoroborate 4000")
        .itemOutputs("3x gtceu:platinum_raw_dust", "4x gtceu:silver_dust")
        .outputFluids("gtceu:cycloparaphenylene 10000", "gtceu:boron_fluoride 4000", "gtceu:1_octene 3000", "gtceu:hydrofluoric_acid 4000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:dichlorocyclooctadieneplatinium_dust")
        .itemInputs("gtceu:platinum_dust", "2x gtceu:potassium_dust")
        .inputFluids("gtceu:nitric_acid 4000", "gtceu:hydrochloric_acid 4000", "gtceu:cyclooctadiene 1000")
        .itemOutputs("23x gtceu:dichlorocyclooctadieneplatinium_dust", "4x gtceu:rock_salt_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:cyclooctadiene")
        .notConsumable("gtceu:nickel_dust")
        .inputFluids("gtceu:butadiene 2000")
        .outputFluids("gtceu:cyclooctadiene 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:diiodobiphenyl_dust")
        .notConsumable("gtceu:blacklight")
        .itemInputs("2x gtceu:iodine_dust", "22x gtceu:biphenyl_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .itemOutputs("22x gtceu:diiodobiphenyl_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.chemical_reactor("gtlcore:formaldehyde")
        .notConsumable("gtceu:silver_dust")
        .inputFluids("gtceu:methanol 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:formaldehyde 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    gtr.chemical_reactor("gtlcore:acetaldehyde")
        .notConsumable("gtceu:osmium_tetroxide_dust")
        .inputFluids("gtceu:acetone 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:formaldehyde 1000", "gtceu:acetaldehyde 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(320)

    gtr.large_chemical_reactor("gtlcore:trimethyltin_chloride")
        .notConsumable("gtceu:magnesium_dust")
        .itemInputs("gtceu:tin_dust")
        .inputFluids("gtceu:methane 3000", "gtceu:oxygen 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:trimethyltin_chloride 1000", "gtceu:diluted_hydrochloric_acid 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:silver_tetrafluoroborate")
        .itemInputs("6x gtceu:silver_dust")
        .inputFluids("gtceu:boron_fluoride 2000", "gtceu:oxygen 3000")
        .outputFluids("gtceu:silver_tetrafluoroborate 6000")
        .itemOutputs("5x gtceu:boron_trioxide_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.chemical_reactor("gtlcore:boron_fluoride")
        .itemInputs("5x gtceu:boron_trioxide_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .outputFluids("gtceu:boron_fluoride 2000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    gtr.dehydrator("gtlcore:boron_trioxide_dust")
        .inputFluids("gtceu:boric_acide 2000")
        .itemOutputs("5x gtceu:boron_trioxide_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(400)

    gtr.chemical_reactor("gtlcore:pyridine")
        .inputFluids("gtceu:formaldehyde 2000", "gtceu:acetaldehyde 1000", "gtceu:ammonia 1000")
        .outputFluids("gtceu:pyridine 1000", "gtceu:hydrogen 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    //hexanitrohexaaxaisowurtzitane
    gtr.chemical_reactor("gtlcore:potassium_bisulfite_dust")
        .itemInputs("6x gtceu:potassium_carbonate_dust")
        .inputFluids("gtceu:sulfur_dioxide 2000", "minecraft:water 1000")
        .itemOutputs("12x gtceu:potassium_bisulfite_dust")
        .outputFluids("gtceu:carbon_dioxide 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(160)

    gtr.chemical_reactor("gtlcore:potassium_hydroxylaminedisulfonate_dust")
        .itemInputs("12x gtceu:potassium_bisulfite_dust")
        .inputFluids("gtceu:nitrous_acid 1000")
        .itemOutputs("13x gtceu:potassium_hydroxylaminedisulfonate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.chemical_reactor("gtlcore:hydroxylammonium_sulfate_dust")
        .itemInputs("26x gtceu:potassium_hydroxylaminedisulfonate_dust")
        .inputFluids("minecraft:water 4000")
        .itemOutputs("17x gtceu:hydroxylammonium_sulfate_dust", "14x gtceu:potassium_sulfate_dust")
        .outputFluids("gtceu:sulfuric_acid 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.chemical_reactor("gtlcore:hexanitrohexaaxaisowurtzitane_dust")
        .inputFluids("gtceu:ethylenediamine 1000")
        .itemInputs("36x gtceu:crude_hexanitrohexaaxaisowurtzitane_dust", "3x gtceu:silica_gel_dust")
        .itemOutputs("36x gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:ethylenediamine")
        .notConsumable("gtceu:palladium_dust")
        .inputFluids("gtceu:ammonia 1000", "gtceu:ethanolamine 1000")
        .outputFluids("gtceu:ethylenediamine 1000", "minecraft:water 1000")
        .EUt(120)
        .duration(180)

    gtr.chemical_reactor("gtlcore:ethanolamine")
        .inputFluids("gtceu:ammonia 1000", "gtceu:ethylene_oxide 1000")
        .outputFluids("gtceu:ethanolamine 1000")
        .EUt(7680)
        .duration(60)

    gtr.chemical_reactor("gtlcore:ethylene_oxide")
        .inputFluids("gtceu:oxygen 1000", "gtceu:ethylene 1000")
        .outputFluids("gtceu:ethylene_oxide 1000")
        .EUt(480)
        .circuit(4)
        .duration(80)

    gtr.mixer("gtlcore:silica_gel_base")
        .itemInputs("3x gtceu:silicon_dioxide_dust", "3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .outputFluids("gtceu:silica_gel_base 1000")
        .EUt(120)
        .duration(80)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:crude_hexanitrohexaaxaisowurtzitane_dust")
        .inputFluids("minecraft:water 4000")
        .itemInputs("46x gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust", "48x gtceu:nitronium_tetrafluoroborate_dust")
        .itemOutputs("36x gtceu:crude_hexanitrohexaaxaisowurtzitane_dust", "14x gtceu:nitrosonium_tetrafluoroborate_dust")
        .outputFluids("gtceu:fluoroboric_acide 4000", "gtceu:acetic_acid 4000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:nitronium_tetrafluoroborate_dust")
        .inputFluids("gtceu:boron_fluoride 1000", "gtceu:hydrofluoric_acid 1000", "gtceu:nitric_acid 1000")
        .itemOutputs("8x gtceu:nitronium_tetrafluoroborate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(1920)
        .duration(40)

    gtr.chemical_reactor("gtlcore:tetraacetyldinitrosohexaazaisowurtzitane_dust")
        .inputFluids("minecraft:water 14000")
        .itemInputs("70x gtceu:dibenzyltetraacetylhexaazaisowurtzitane_dust", "42x gtceu:nitrosonium_tetrafluoroborate_dust")
        .itemOutputs("46x gtceu:tetraacetyldinitrosohexaazaisowurtzitane_dust")
        .outputFluids("gtceu:hydrofluoric_acid 24000", "gtceu:boric_acide 6000", "gtceu:nitric_oxide 4000", "gtceu:benzaldehyde 2000")
        .EUt(7680)
        .duration(140)

    gtr.chemical_reactor("gtlcore:nitrosonium_tetrafluoroborate_dust")
        .inputFluids("gtceu:boron_fluoride 2000", "gtceu:hydrofluoric_acid 2000", "gtceu:dinitrogen_tetroxide 2000")
        .itemOutputs("7x gtceu:nitrosonium_tetrafluoroborate_dust")
        .outputFluids("gtceu:nitric_acid 1000")
        .EUt(120)
        .duration(120)

    gtr.large_chemical_reactor("gtlcore:dibenzyltetraacetylhexaazaisowurtzitane_dust")
        .notConsumableFluid("gtceu:hydrobromic_acid 10000")
        .itemInputs("72x gtceu:succinimidyl_acetate_dust", "102x gtceu:hexabenzylhexaazaisowurtzitane_dust")
        .inputFluids("gtceu:hydrogen 8000")
        .itemOutputs("70x gtceu:dibenzyltetraacetylhexaazaisowurtzitane_dust")
        .outputFluids("gtceu:toluene 6000")
        .EUt(122880)
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:hydrobromic_acid")
        .inputFluids("gtceu:bromine 1000", "gtceu:hydrogen 1000")
        .outputFluids("gtceu:hydrobromic_acid 1000")
        .EUt(480)
        .duration(300)

    gtr.chemical_reactor("gtlcore:succinimidyl_acetate_dust")
        .inputFluids("gtceu:acetic_anhydride 1000")
        .itemInputs("13x gtceu:n_hydroxysuccinimide_dust")
        .itemOutputs("18x gtceu:succinimidyl_acetate_dust")
        .outputFluids("gtceu:acetic_acid 1000")
        .EUt(7680)
        .duration(80)

    gtr.chemical_reactor("gtlcore:n_hydroxysuccinimide_dust")
        .inputFluids("gtceu:methanol 40000", "gtceu:toluene 6000", "gtceu:hydroxylamine_hydrochloride 6000")
        .itemInputs("6x gtceu:sodium_dust", "66x gtceu:succinic_anhydride_dust")
        .outputFluids("minecraft:water 6000", "gtceu:hydrogen 6000")
        .itemOutputs("13x gtceu:n_hydroxysuccinimide_dust", "12x gtceu:salt_dust")
        .EUt(1920)
        .duration(220)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:succinic_anhydride_dust")
        .inputFluids("gtceu:acetic_anhydride 1000")
        .itemInputs("14x gtceu:succinic_acid_dust")
        .itemOutputs("11x gtceu:succinic_anhydride_dust")
        .outputFluids("gtceu:acetic_acid 2000")
        .EUt(7680)
        .duration(20)

    gtr.chemical_reactor("gtlcore:succinic_acid_dust")
        .notConsumable("gtceu:rhodium_plated_palladium_dust")
        .inputFluids("minecraft:water 1000", "gtceu:hydrogen 1000", "gtceu:maleic_anhydride 2000")
        .itemOutputs("14x gtceu:succinic_acid_dust")
        .EUt(1920)
        .duration(200)

    gtr.chemical_reactor("gtlcore:maleic_anhydride")
        .notConsumable("gtceu:bismuth_dust")
        .inputFluids("gtceu:oxygen 7000", "gtceu:butane 1000")
        .outputFluids("minecraft:water 4000", "gtceu:maleic_anhydride 1000")
        .EUt(480)
        .duration(280)

    gtr.large_chemical_reactor("gtlcore:hydroxylamine_hydrochloride")
        .itemInputs("17x gtceu:hydroxylammonium_sulfate_dust", "3x gtceu:barium_chloride_dust")
        .outputFluids("gtceu:hydroxylamine_hydrochloride 2000", "minecraft:water 1000")
        .itemOutputs("6x gtceu:barite_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)

    gtr.chemical_reactor("gtlcore:nitrous_acid")
        .itemInputs("4x gtceu:sodium_nitrite_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("7x gtceu:sodium_bisulfate_dust")
        .outputFluids("gtceu:nitrous_acid 1000")
        .EUt(30)
        .duration(80)

    gtr.chemical_reactor("gtlcore:barium_chloride_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemInputs("6x gtceu:barium_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .itemOutputs("3x gtceu:barium_chloride_dust")
        .EUt(120)
        .duration(60)

    gtr.chemical_reactor("gtlcore:hexabenzylhexaazaisowurtzitane_dust")
        .inputFluids("gtceu:benzylamine 6000", "gtceu:glyoxal 3000")
        .itemInputs("6x gtceu:acetonitrile_dust")
        .itemOutputs("102x gtceu:hexabenzylhexaazaisowurtzitane_dust")
        .EUt(7680)
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:acetonitrile_dust")
        .inputFluids("gtceu:ammonia 1000", "gtceu:carbon_monoxide 2000", "gtceu:hydrogen 4000")
        .outputFluids("minecraft:water 2000")
        .itemOutputs("6x gtceu:acetonitrile_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:glyoxal")
        .inputFluids("gtceu:acetaldehyde 2000", "gtceu:nitric_acid 2000")
        .outputFluids("minecraft:water 3000", "gtceu:glyoxal 2000", "gtceu:nitrogen_dioxide 1000")
        .EUt(60)
        .duration(120)

    gtr.large_chemical_reactor("gtlcore:benzylamine")
        .itemInputs("22x gtceu:hexamethylenetetramine_dust")
        .inputFluids("minecraft:water 6000", "gtceu:hydrochloric_acid 2000", "gtceu:benzyl_chloride 1000")
        .outputFluids("gtceu:benzylamine 1000", "gtceu:formaldehyde 6000")
        .itemOutputs("18x gtceu:ammonium_chloride_dust")
        .EUt(7680)
        .duration(200)

    gtr.chemical_reactor("gtlcore:benzyl_chloride")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:toluene 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:benzyl_chloride 1000", "gtceu:hydrochloric_acid 1000")
        .EUt(480)
        .duration(200)

    gtr.chemical_reactor("gtlcore:hexamethylenetetramine_dust")
        .circuit(1)
        .inputFluids("gtceu:formaldehyde 4000", "gtceu:ammonia 6000")
        .itemOutputs("22x gtceu:hexamethylenetetramine_dust")
        .outputFluids("minecraft:water 6000")
        .EUt(30)
        .duration(160)

    //rare_earth
    gtr.dissolution_treatment("gtlcore:rare_earth_hydroxides")
        .itemInputs("10x gtceu:rare_earth_dust", "30x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:phosphoric_acid 1000")
        .inputFluids("minecraft:water 9000")
        .outputFluids("gtceu:rare_earth_hydroxides 10000")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtlcore:rare_earth_chlorides")
        .inputFluids("gtceu:rare_earth_hydroxides 1000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:rare_earth_chlorides 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .EUt(30)
        .duration(120)

    gtr.digestion_treatment("gtlcore:rare_earth_oxide_dust")
        .inputFluids("gtceu:rare_earth_chlorides 1000")
        .itemInputs("3x gtceu:sodium_oxide_dust")
        .outputFluids("gtceu:salt_water 1000")
        .itemOutputs("gtceu:rare_earth_oxide_dust")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(2580)

    gtr.digestion_treatment("gtlcore:rare_earth_metal_dust")
        .itemInputs("gtceu:rare_earth_oxide_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("gtceu:rare_earth_metal_dust")
        .outputFluids("minecraft:water 500")
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
    gtr.large_chemical_reactor("gtlcore:adamantine_dust")
        .itemInputs("2x gtceu:adamantine_compounds_dust", "17x gtceu:mirabilite_dust")
        .inputFluids("gtceu:nitration_mixture 1000", "gtceu:aqua_regia 2000", "gtceu:mana 100")
        .itemOutputs("gtceu:adamantine_dust", "5x gtceu:sodium_nitrate_dust", "7x gtceu:sodium_bisulfate_dust")
        .outputFluids("gtceu:rare_earth_chlorides 1000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.rare_earth_centrifugal("gtlcore:raw_adamantine")
        .itemInputs("gtceu:naquadah_contain_rare_earth_dust")
        .chancedOutput("gtceu:raw_adamantine_compounds", 5000, 1000)
        .itemOutputs("6x gtceu:enriched_naquadah_sulfate_dust", "6x gtceu:naquadria_sulfate_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.lightning_processor("gtlcore:naquadah_contain_rare_earth_fluoride_dust")
        .inputFluids("gtceu:rare_earth_chlorides 6000", "gtceu:acidic_enriched_naquadah_solution 3000", "gtceu:acidic_naquadria_solution 3000", "gtceu:hydrofluoric_acid 2000", "gtceu:enriched_naquadah_front 1000")
        .outputFluids("gtceu:hydrochloric_acid 6000")
        .itemInputs("gtceu:alunite_dust")
        .itemOutputs("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.digestion_treatment("gtlcore:naquadah_contain_rare_earth_dust")
        .itemInputs("gtceu:naquadah_contain_rare_earth_fluoride_dust")
        .inputFluids("gtceu:hydrogen 2000")
        .outputFluids("gtceu:hydrofluoric_acid 2000")
        .itemOutputs("gtceu:naquadah_contain_rare_earth_dust")
        .EUt(491520)
        .duration(800)
        .blastFurnaceTemp(6800)

    //vibranium
    gtr.electric_blast_furnace("gtlcore:bedrock_smoke")
        .itemInputs("gtceu:bedrock_dust")
        .inputFluids("gtceu:xenon 100")
        .outputFluids("gtceu:bedrock_smoke 1000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .blastFurnaceTemp(16200)

    gtr.dissolution_treatment("gtlcore:bedrock_soot_solution")
        .inputFluids("gtceu:bedrock_smoke 10000")
        .inputFluids("gtceu:distilled_water 10000")
        .itemInputs("10x gtceu:naquadah_dust")
        .outputFluids("gtceu:bedrock_soot_solution 10000")
        .EUt(7680)
        .duration(4000)

    gtr.centrifuge("gtlcore:clean_bedrock_solution")
        .inputFluids("gtceu:bedrock_soot_solution 2000")
        .itemOutputs("gtceu:small_naquadah_dust", "gtceu:tiny_enriched_naquadah_dust", "gtceu:tiny_naquadria_dust")
        .outputFluids("gtceu:clean_bedrock_solution 1000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.fluid_heater("gtlcore:bedrock_gas")
        .inputFluids("gtceu:clean_bedrock_solution 1000")
        .outputFluids("gtceu:bedrock_gas 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:vibranium_unstable")
        .inputFluids("gtceu:bedrock_gas 1000", "gtceu:hydrochloric_acid 4000")
        .itemInputs("2x gtceu:adamantine_dust")
        .outputFluids("gtceu:vibranium_unstable 500", "gtceu:rare_earth_chlorides 1000")
        .itemOutputs("4x gtceu:iridium_chloride_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    //zylon
    gtr.electric_blast_furnace("gtlcore:zylon_dust")
        .itemInputs("gtceu:pre_zylon_dust")
        .outputFluids("gtceu:propane 2000")
        .itemOutputs("gtceu:zylon_dust")
        .EUt(120)
        .duration(16000)
        .blastFurnaceTemp(10000)

    gtr.chemical_reactor("gtlcore:pre_zylon_dust")
        .itemInputs("16x gtceu:terephthalaldehyde_dust")
        .inputFluids("gtceu:dinitrodipropanyloxybenzene 1000")
        .itemOutputs("gtceu:pre_zylon_dust")
        .outputFluids("gtceu:oxygen 6000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:terephthalaldehyde_dust")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:dibromomethylbenzene 1000")
        .itemOutputs("16x gtceu:terephthalaldehyde_dust")
        .outputFluids("gtceu:bromine 2000", "gtceu:hydrogen_sulfide 1000", "minecraft:water 1000", "gtceu:oxygen 1000")
        .EUt(7680)
        .duration(50)

    gtr.large_chemical_reactor("gtlcore:dinitrodipropanyloxybenzene")
        .itemInputs("3x gtceu:sodium_oxide_dust")
        .inputFluids("gtceu:acetic_anhydride 1000", "gtceu:isochloropropane 1000", "gtceu:resorcinol 1000", "gtceu:propene 1000", "gtceu:nitric_acid 2000")
        .outputFluids("gtceu:dinitrodipropanyloxybenzene 1000", "minecraft:water 2000", "gtceu:acetic_acid 2000")
        .EUt(7680)
        .duration(50)

    gtr.chemical_reactor("gtlcore:sodium_oxide_dust")
        .itemInputs("2x gtceu:sodium_dust")
        .inputFluids("gtceu:oxygen 1000")
        .circuit(1)
        .itemOutputs("3x gtceu:sodium_oxide_dust")
        .EUt(7)
        .duration(60)

    gtr.chemical_reactor("gtlcore:dibromomethylbenzene")
        .inputFluids("gtceu:bromine 2000", "gtceu:toluene 1000")
        .outputFluids("gtceu:dibromomethylbenzene 1000", "gtceu:hydrogen 2000")
        .EUt(30)
        .duration(600)

    //taranium
    gtr.chemical_bath("gtlcore:metal_residue_dust")
        .inputFluids("gtceu:bedrock_gas 100")
        .itemInputs("gtceu:partially_oxidized_residues_dust")
        .itemOutputs("gtceu:metal_residue_dust")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    gtr.centrifuge("gtlcore:inert_residues_dust")
        .notConsumable("gtlcore:separation_electromagnet")
        .itemInputs("10x gtceu:metal_residue_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .itemOutputs("gtceu:inert_residues_dust")
        .outputFluids("gtceu:oxidized_residual_solution 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.ore_washer("gtlcore:clean_inert_residues_dust")
        .itemInputs("gtceu:inert_residues_dust")
        .inputFluids("gtceu:aqua_regia 1000")
        .itemOutputs("gtceu:clean_inert_residues_dust")
        .EUt(480)
        .duration(400)

    gtr.centrifuge("gtlcore:taranium_enriched_liquid_helium_3")
        .notConsumable("gtlcore:separation_electromagnet")
        .inputFluids("gtceu:dusty_liquid_helium_iii 1000")
        .outputFluids("gtceu:taranium_enriched_liquid_helium_3 500")
        .EUt(3000)
        .duration(400)

    gtr.fermenter("gtlcore:taranium_dust")
        .inputFluids("gtceu:taranium_rich_liquid_helium_4 1000")
        .itemInputs("gtceu:activated_carbon_dust")
        .itemOutputs("gtceu:taranium_dust")
        .EUt(2)
        .duration(200000)

    //radox
    gtr.incubator("gtlcore:variation_wood")
        .itemInputs("64x kubejs:barnarda_log", "16x minecraft:crimson_stem", "64x #forge:dusts/wood", "gtceu:lapotron_dust")
        .inputFluids("gtceu:unknowwater 10000", "gtceu:biomass 1000")
        .itemOutputs("64x kubejs:variation_wood")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 440)

    gtr.incubator("gtlcore:variation_wood1")
        .itemInputs("64x kubejs:barnarda_log", "16x minecraft:warped_stem", "64x #forge:dusts/wood", "gtceu:lapotron_dust")
        .inputFluids("gtceu:unknowwater 10000", "gtceu:biomass 1000")
        .itemOutputs("64x kubejs:variation_wood")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 440)

    gtr.qft("gtlcore:radox")
        .inputFluids("gtceu:radox_gas 21600", "gtceu:oxygen_plasma 75000", "gtceu:titanium_50_tetrachloride 1000")
        .itemInputs("16x gtceu:molybdenum_trioxide_dust",
            "16x gtceu:chromium_trioxide_dust",
            "14x gtceu:phosphorus_pentoxide_dust",
            "12x gtceu:cubic_zirconia_dust",
            "12x gtceu:germanium_dioxide_dust",
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

    gtr.distillation_tower("gtlcore:radox_gas")
        .inputFluids("gtceu:crackedradox 1000")
        .outputFluids("gtceu:radox_gas 100", "gtceu:lightradox 200")
        .EUt(GTValues.VA[GTValues.UV])
        .itemOutputs("gtceu:ash_dust")
        .duration(600)

    gtr.distillation_tower("gtlcore:dilutedxenoxene")
        .inputFluids("gtceu:dilutedxenoxene 1000")
        .outputFluids("gtceu:xenoxene 250", "gtceu:lightradox 300")
        .itemOutputs("gtceu:ash_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.cracker("gtlcore:crackedradox")
        .inputFluids("gtceu:superlightradox 100", "gtceu:silver_plasma 10")
        .outputFluids("gtceu:crackedradox 100")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    gtr.cracker("gtlcore:superlightradox")
        .inputFluids("gtceu:lightradox 100", "gtceu:silver_plasma 10")
        .outputFluids("gtceu:superlightradox 50")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    gtr.cracker("gtlcore:lightradox")
        .inputFluids("gtceu:heavyradox 100", "gtceu:silver_plasma 10")
        .outputFluids("gtceu:lightradox 20")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.distillation_tower("gtlcore:rawradox")
        .inputFluids("gtceu:rawradox 5000")
        .outputFluids("gtceu:oil_heavy 600", "gtceu:oil 300", "gtceu:creosote 1000", "minecraft:water 1400", "gtceu:bacteria 50", "gtceu:fermented_biomass 50", "gtceu:superheavyradox 100", "gtceu:heavyradox 100", "gtceu:dilutedxenoxene 100", "gtceu:lightradox 100", "gtceu:superlightradox 100")
        .itemOutputs("5x gtceu:ash_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)

    gtr.mixer("gtlcore:xenoxene_mixture")
        .itemInputs("gtceu:tiny_radox_dust", "gtceu:antimony_dust", "gtceu:osmium_dust", "gtceu:ender_eye_dust")
        .inputFluids("gtceu:xenoxene 1000", "gtceu:xenon 9000")
        .outputFluids("gtceu:xenoxene_mixture 10000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.fluid_solidifier("gtlcore:xenoxene_crystal_dust")
        .inputFluids("gtceu:xenoxene_mixture 1000")
        .itemInputs("3x gtceu:perlite_dust")
        .itemOutputs("3x gtceu:xenoxene_crystal_dust")
        .EUt(1920)
        .duration(200)

    gtr.electrolyzer("gtlcore:purified_xenoxene")
        .itemInputs("4x gtceu:xenoxene_crystal_dust")
        .inputFluids("gtceu:oil 1000")
        .outputFluids("gtceu:purified_xenoxene 1000", "minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(900)

    gtr.mixer("gtlcore:enriched_xenoxene")
        .itemInputs("gtceu:taranium_dust")
        .inputFluids("gtceu:purified_xenoxene 10000", "gtceu:radox_gas 100")
        .outputFluids("gtceu:enriched_xenoxene 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)

    gtr.mixer("gtlcore:perlite_dust")
        .itemInputs("2x gtceu:obsidian_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:perlite_dust")
        .EUt(480)
        .duration(300)

    gtr.pyrolyse_oven("gtlcore:rawradox")
        .inputFluids("gtceu:xenoxene 1000")
        .itemInputs("16x kubejs:variation_wood")
        .outputFluids("gtceu:rawradox 1000")
        .itemOutputs("gtceu:ash_dust")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(900)

    gtr.pyrolyse_oven("gtlcore:rawradox1")
        .inputFluids("gtceu:enriched_xenoxene 1000")
        .itemInputs("16x kubejs:variation_wood")
        .outputFluids("gtceu:rawradox 10000")
        .itemOutputs("gtceu:ash_dust")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)

    gtr.incubator("gtlcore:xenoxene")
        .itemInputs("16x gtceu:antimony_trioxide_dust", "16x gtceu:osmium_dust")
        .inputFluids("gtceu:oil 20000")
        .outputFluids("gtceu:xenoxene 20000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 360)

    gtr.centrifuge("gtlcore:superheavyradox")
        .inputFluids("gtceu:superheavyradox 1000")
        .outputFluids("gtceu:heavyradox 2000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    //draconium
    gtr.electric_blast_furnace("gtlcore:hot_draconium_ingot_1")
        .itemInputs("gtceu:draconium_dust")
        .inputFluids("gtceu:cetane_boosted_diesel 2000")
        .itemOutputs("gtceu:hot_draconium_ingot")
        .EUt(GTValues.VA[GTValues.UXV])
        .blastFurnaceTemp(21600)
        .duration(800)

    gtr.electric_blast_furnace("gtlcore:hot_draconium_ingot_2")
        .itemInputs("gtceu:draconium_dust")
        .inputFluids("gtceu:gasoline 1000")
        .itemOutputs("gtceu:hot_draconium_ingot")
        .EUt(GTValues.VA[GTValues.UXV])
        .blastFurnaceTemp(21600)
        .duration(400)

    gtr.electric_blast_furnace("gtlcore:hot_draconium_ingot_3")
        .itemInputs("gtceu:draconium_dust")
        .inputFluids("gtceu:high_octane_gasoline 500")
        .itemOutputs("gtceu:hot_draconium_ingot")
        .EUt(GTValues.VA[GTValues.UXV])
        .blastFurnaceTemp(21600)
        .duration(200)

    gtr.vacuum_freezer("gtlcore:draconium_ingot")
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

    gtr.canner("gtlcore:infused_breath")
        .inputFluids("gtceu:xpjuice 1000")
        .itemInputs("minecraft:dragon_breath")
        .itemOutputs("gtlcore:infused_breath")
        .EUt(480)
        .duration(400)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.extractor("gtlcore:dragon_breath")
        .itemInputs("gtlcore:infused_breath")
        .outputFluids("gtceu:dragon_breath 1000")
        .itemOutputs("minecraft:glass_bottle")
        .EUt(30)
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.distillery("gtlcore:enriched_dragon_breath")
        .inputFluids("gtceu:dragon_breath 10")
        .outputFluids("gtceu:enriched_dragon_breath 5")
        .EUt(120)
        .duration(100)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.sps_crafting("gtlcore:dragon_stem_cells")
        .itemInputs("gtceu:stem_cells")
        .inputFluids("gtceu:mana 1000", "gtceu:mutagen 100", "gtceu:enriched_dragon_breath 100")
        .itemOutputs("gtlcore:dragon_stem_cells")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.incubator("gtlcore:dragon_cells")
        .itemInputs("64x gtlcore:dragon_stem_cells", "16x gtceu:naquadria_dust")
        .inputFluids("gtceu:biohmediumsterilized 10000", "gtceu:mutagen 10000")
        .itemOutputs("64x gtlcore:dragon_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .addData("filter_casing", 3)
        .addData("radioactivity", 560)

    gtr.brewery("gtlcore:dragon_blood")
        .itemInputs("gtlcore:dragon_cells")
        .inputFluids("gtceu:sterilized_growth_medium 1000")
        .outputFluids("gtceu:dragon_blood 1000")
        .EUt(480)
        .duration(6000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.centrifuge("gtlcore:dragon_element")
        .inputFluids("gtceu:turbid_dragon_blood 1000")
        .outputFluids("gtceu:dragon_element 500")
        .itemOutputs("gtceu:collagen_dust")
        .EUt(7680)
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.mixer("gtlcore:turbid_dragon_blood")
        .inputFluids("gtceu:dragon_blood 1000", "gtceu:gelatin_mixture 1000")
        .itemInputs("gtceu:silica_gel_dust")
        .outputFluids("gtceu:turbid_dragon_blood 1000")
        .EUt(1920)
        .duration(800)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.autoclave("gtlcore:draconium_dust")
        .notConsumable("64x gtceu:enderium_nanoswarm")
        .itemInputs("gtlcore:draconium_dust")
        .inputFluids("gtceu:dragon_element 1000")
        .itemOutputs("gtceu:draconium_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    //fullerene
    gtr.large_chemical_reactor("gtlcore:methylbenzophenanthrene_dust")
        .notConsumable("gtceu:iodine_dust")
        .inputFluids("gtceu:naphthalene 1000", "gtceu:formaldehyde 1000", "gtceu:oxygen 1000", "gtceu:ethylbenzene 1000")
        .itemOutputs("33x gtceu:methylbenzophenanthrene_dust")
        .EUt(1920)
        .duration(600)

    gtr.large_chemical_reactor("gtlcore:unfolded_fullerene_dust")
        .notConsumable("gtceu:titanium_dust")
        .notConsumable("gtceu:aluminium_dust")
        .notConsumableFluid("gtceu:chlorine 1000")
        .itemInputs("102x gtceu:benzophenanthrenylacetonitrile_dust")
        .itemOutputs("gtceu:unfolded_fullerene_dust")
        .EUt(7680)
        .duration(250)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:benzophenanthrenylacetonitrile_dust")
        .itemInputs("33x gtceu:methylbenzophenanthrene_dust", "12x gtceu:bromo_succinimide_dust", "3x gtceu:potassium_cyanide_dust")
        .itemOutputs("34x gtceu:benzophenanthrenylacetonitrile_dust", "12x gtceu:succinimide_dust", "2x gtceu:potassium_bromide_dust")
        .EUt(1920)
        .duration(100)

    gtr.chemical_reactor("gtlcore:bromo_succinimide_dust")
        .itemInputs("12x gtceu:succinimide_dust")
        .inputFluids("gtceu:bromine 2000")
        .outputFluids("gtceu:hydrobromic_acid 1000")
        .itemOutputs("12x gtceu:bromo_succinimide_dust")
        .EUt(120)
        .duration(100)

    gtr.chemical_reactor("gtlcore:succinimide_dust")
        .inputFluids("gtceu:ammonia 1000")
        .itemInputs("14x gtceu:succinic_acid_dust")
        .outputFluids("minecraft:water 1000")
        .itemOutputs("12x gtceu:succinimide_dust")
        .EUt(120)
        .duration(100)

    gtr.laser_engraver("gtlcore:fullerene_dust")
        .itemInputs("gtceu:unfolded_fullerene_dust")
        .notConsumable("gtceu:ruby_lens")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("gtceu:fullerene_dust")
        .outputFluids("gtceu:ammonia 10000")
        .EUt(2000000)
        .duration(400)
        .addDataBool("special", true)

    gtr.large_chemical_reactor("gtlcore:phenylpentanoic_acid")
        .notConsumableFluid("gtceu:trimethyltin_chloride 1000")
        .inputFluids("minecraft:water 2000", "gtceu:hydroiodic_acid 1000", "gtceu:acrylonitrile 1000", "gtceu:styrene 1000")
        .outputFluids("gtceu:phenylpentanoic_acid 1000", "gtceu:ammonia 1000")
        .itemOutputs("4x gtceu:aluminium_hydride_dust", "2x gtceu:lithium_iodide_dust")
        .EUt(8000000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:hydroiodic_acid")
        .inputFluids("gtceu:monomethylhydrazine 1000")
        .itemInputs("4x gtceu:iodine_dust")
        .outputFluids("gtceu:nitrogen 2000", "gtceu:hydroiodic_acid 4000")
        .EUt(500)
        .duration(210)

    gtr.chemical_reactor("gtlcore:acrylonitrile")
        .notConsumable("gtceu:platinum_dust")
        .inputFluids("gtceu:oxygen 3000", "gtceu:ammonia 1000", "gtceu:propene 1000")
        .outputFluids("gtceu:acrylonitrile 2000", "minecraft:water 3000")
        .EUt(120)
        .duration(100)

    //oganesson
    gtr.chemical_reactor("gtlcore:titanium_tetrachloride_1")
        .inputFluids("gtceu:hydrochloric_acid 4000")
        .itemInputs("gtceu:titanium_dust")
        .outputFluids("gtceu:hydrogen 4000", "gtceu:titanium_tetrachloride 1000")
        .EUt(480)
        .duration(400)

    gtr.chemical_reactor("gtlcore:titanium_tetrafluoride")
        .inputFluids("gtceu:titanium_tetrachloride 1000", "gtceu:fluorine 4000")
        .outputFluids("gtceu:chlorine 4000", "gtceu:titanium_tetrafluoride 1000")
        .EUt(1920)
        .duration(800)

    gtr.centrifuge("gtlcore:titanium_50_tetrafluoride")
        .inputFluids("gtceu:titanium_tetrafluoride 1000")
        .outputFluids("gtceu:titanium_50_tetrafluoride 10", "gtceu:titanium_tetrafluoride 990")
        .EUt(480)
        .duration(200)

    gtr.chemical_reactor("gtlcore:titanium_50_tetrachloride")
        .inputFluids("gtceu:titanium_50_tetrafluoride 1000", "gtceu:hydrochloric_acid 4000")
        .outputFluids("gtceu:hydrofluoric_acid 4000", "gtceu:titanium_50_tetrachloride 1000")
        .EUt(480)
        .duration(400)

    gtr.electric_blast_furnace("gtlcore:hot_titanium_50_ingot_1")
        .itemInputs("2x gtceu:magnesium_dust")
        .inputFluids("gtceu:titanium_50_tetrachloride 1000")
        .itemOutputs("gtceu:hot_titanium_50_ingot", "6x gtceu:magnesium_chloride_dust")
        .EUt(480)
        .duration(800)
        .blastFurnaceTemp(2142)

    gtr.mixer("gtlcore:oganesson_breeding_base")
        .inputFluids("gtceu:titanium_50 1440", "gtceu:californium 576")
        .outputFluids("gtceu:oganesson_breeding_base 2016")
        .EUt(7680)
        .duration(480)

    //hassium
    gtr.mixer("gtlcore:scandium_titanium_50_mixture")
        .inputFluids("gtceu:titanium_50 144", "gtceu:scandium 144")
        .outputFluids("gtceu:scandium_titanium_50_mixture 288")
        .EUt(7680)
        .duration(120)

    //kevlar
    gtr.chemical_bath("gtlcore:kevlar_plate")
        .itemInputs("gtlcore:woven_kevlar")
        .inputFluids("gtceu:polyurethaneresin 1000")
        .itemOutputs("gtceu:kevlar_plate")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:woven_kevlar")
        .itemInputs("8x gtlcore:kevlar_fiber")
        .itemOutputs("gtlcore:woven_kevlar")
        .circuit(8)
        .EUt(120)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.fluid_solidifier("gtlcore:kevlar_fiber")
        .notConsumable("gtceu:nugget_casting_mold")
        .inputFluids("gtceu:liquidcrystalkevlar 72")
        .itemOutputs("gtlcore:kevlar_fiber")
        .EUt(30)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:polyurethaneresin")
        .itemInputs("gtceu:pentaerythritol_dust", "5x gtceu:diphenylmethane_diisocyanate_dust")
        .inputFluids("gtceu:ethyleneglycol 4000", "gtceu:siliconoil 1000")
        .outputFluids("gtceu:polyurethaneresin 1000")
        .EUt(7680)
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distillation_tower("gtlcore:diphenylmethane_diisocyanate_dust")
        .inputFluids("gtceu:diphenylmethanediisocyanatemixture 1000")
        .itemOutputs("29x gtceu:diphenylmethane_diisocyanate_dust")
        .outputFluids("gtceu:hydrochloric_acid 5000")
        .EUt(1920)
        .duration(700)

    gtr.large_chemical_reactor("gtlcore:diphenylmethanediisocyanatemixture")
        .inputFluids("gtceu:diaminodiphenylmethanmixture 1000", "gtceu:phosgene 2000")
        .outputFluids("gtceu:diphenylmethanediisocyanatemixture 1000")
        .EUt(7680)
        .duration(600)

    gtr.chemical_reactor("gtlcore:phosgene")
        .inputFluids("gtceu:carbon_monoxide 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:phosgene 1000")
        .EUt(1920)
        .duration(400)

    gtr.large_chemical_reactor("gtlcore:diaminodiphenylmethanmixture")
        .inputFluids("gtceu:formaldehyde 1000", "gtceu:aniline 2000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:diaminodiphenylmethanmixture 1000")
        .EUt(122880)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:siliconoil")
        .inputFluids("gtceu:ethylene_oxide 1000", "gtceu:dimethyldichlorosilane 4000", "gtceu:distilled_water 5000")
        .outputFluids("gtceu:siliconoil 5000")
        .EUt(480)
        .duration(1000)

    gtr.chemical_reactor("gtlcore:ethyleneglycol")
        .circuit(1)
        .inputFluids("gtceu:ethylene_oxide 1000", "minecraft:water 1000")
        .outputFluids("gtceu:ethyleneglycol 1000")
        .EUt(480)
        .duration(300)

    gtr.large_chemical_reactor("gtlcore:pentaerythritol_dust")
        .notConsumable("gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:formaldehyde 4000", "gtceu:acetaldehyde 1000")
        .itemOutputs("21x gtceu:pentaerythritol_dust")
        .outputFluids("gtceu:carbon_monoxide 1000")
        .EUt(1920)
        .duration(1200)

    //fullerene polymer matrix pulp
    gtr.large_chemical_reactor("gtlcore:sarcosine_dust")
        .inputFluids("gtceu:acetic_acid 1000", "gtceu:chlorine 2000", "gtceu:methanol 1000", "gtceu:ammonia 1000")
        .outputFluids("gtceu:diluted_hydrochloric_acid 3000")
        .itemOutputs("13x gtceu:sarcosine_dust")
        .EUt(7680)
        .duration(200)

    gtr.mixer("gtlcore:silica_alumina_gel_dust")
        .itemInputs("5x gtceu:alumina_dust", "3x gtceu:silica_gel_dust")
        .itemOutputs("gtceu:silica_alumina_gel_dust")
        .EUt(120)
        .duration(60)

    gtr.dehydrator("gtlcore:zeolite_sieving_pellets_dust")
        .itemInputs("gtceu:wet_zeolite_sieving_pellets_dust")
        .itemOutputs("gtceu:zeolite_sieving_pellets_dust")
        .EUt(120)
        .duration(50)

    gtr.electric_blast_furnace("gtlcore:zeolite_sieving_pellets_dust")
        .itemInputs("gtceu:silica_alumina_gel_dust", "gtceu:zeolite_dust")
        .itemOutputs("gtceu:zeolite_sieving_pellets_dust")
        .blastFurnaceTemp(4500)
        .EUt(120)
        .duration(400)

    gtr.chemical_reactor("gtlcore:ferrocene")
        .itemInputs("gtceu:zeolite_sieving_pellets_dust")
        .inputFluids("gtceu:iron_ii_chloride 1000", "gtceu:cyclopentadiene 2000")
        .outputFluids("gtceu:diluted_hydrochloric_acid 2000", "gtceu:ferrocene 1000")
        .itemOutputs("gtceu:wet_zeolite_sieving_pellets_dust")
        .EUt(30720)
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:palladium_fullerene_matrix_dust")
        .itemInputs("13x gtceu:sarcosine_dust", "gtceu:fullerene_dust", "gtceu:palladium_dust")
        .inputFluids("gtceu:ferrocene 1000")
        .itemOutputs("gtceu:palladium_fullerene_matrix_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:fullerene_polymer_matrix_pulp_dust")
        .itemInputs("gtceu:palladium_fullerene_matrix_dust")
        .inputFluids("gtceu:pcbs 1000")
        .itemOutputs("2x gtceu:fullerene_polymer_matrix_pulp_dust")
        .EUt(8000000)
        .duration(40)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:pcbs")
        .itemInputs("8x gtceu:fullerene_dust")
        .notConsumable("gtceu:dmap_dust")
        .inputFluids("gtceu:phenylpentanoic_acid 8000", "gtceu:dichloromethane 8000", "gtceu:styrene 7000", "gtceu:chlorobenzene 8000", "gtceu:dimethyl_sulfide 8000")
        .outputFluids("gtceu:toluene 8000", "gtceu:hydrogen_sulfide 8000", "gtceu:hydrochloric_acid 24000", "gtceu:pcbs 8000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(80)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:dmap_dust")
        .inputFluids("gtceu:pyridine 1000", "gtceu:dimethylamine 1000")
        .itemOutputs("gtceu:dmap_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .EUt(7680)
        .duration(200)

    gtr.chemical_reactor("gtlcore:dichloromethane")
        .inputFluids("gtceu:chloromethane 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:dichloromethane 1000", "gtceu:hydrochloric_acid 1000")
        .EUt(30)
        .duration(80)

    gtr.chemical_reactor("gtlcore:dimethyl_sulfide")
        .inputFluids("gtceu:methanol 2000", "gtceu:hydrogen_sulfide 1000")
        .outputFluids("gtceu:dimethyl_sulfide 1000", "minecraft:water 2000")
        .EUt(1920)
        .duration(100)

    //starmetal
    gtr.sps_crafting("gtlcore:liquid_starlight")
        .inputFluids("gtceu:mana 10000", "gtceu:starlight 10000")
        .itemInputs("64x minecraft:blue_ice", "64x minecraft:blue_ice")
        .outputFluids("gtceu:liquid_starlight 10000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(9600)

    gtr.chemical_bath("gtlcore:resonating_gem")
        .itemInputs("gtceu:exquisite_sapphire_gem")
        .inputFluids("gtceu:liquid_starlight 1000")
        .itemOutputs("gtlcore:resonating_gem")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    //chaos
    gtr.large_chemical_reactor("gtlcore:neutronium_doped_nanotubes")
        .itemInputs("gtceu:neutronium_dust")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 800", "gtceu:cycloparaphenylene 200")
        .outputFluids("gtceu:neutronium_doped_nanotubes 1000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:highly_dense_polymer_plate")
        .itemInputs("gtceu:carbon_nanotubes_plate", "gtceu:double_cosmicneutronium_plate", "gtceu:fullerene_polymer_matrix_pulp_plate")
        .inputFluids("gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("gtlcore:highly_dense_polymer_plate")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.stellar_forge("gtlcore:cosmic_mesh_plasma")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "gtlcore:highly_dense_polymer_plate")
        .outputFluids("gtceu:cosmic_mesh_plasma 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:chaos_plasma")
        .itemInputs("gtlcore:chaos_shard")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:cosmic_mesh_plasma 1000")
        .outputFluids("gtceu:chaos_plasma 1000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(32000)

    gtr.canner("gtlcore:cosmic_mesh_containment_unit")
        .notConsumable("gtceu:uruium_nanoswarm")
        .itemInputs("gtlcore:time_dilation_containment_unit")
        .inputFluids("gtceu:cosmic_mesh_plasma 1000")
        .itemOutputs("gtlcore:cosmic_mesh_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(20)

    gtr.plasma_condenser("gtlcore:cosmic_mesh")
        .itemInputs("gtlcore:cosmic_mesh_containment_unit")
        .inputFluids("gtceu:liquid_helium 100000")
        .itemOutputs("gtlcore:time_dilation_containment_unit")
        .outputFluids("gtceu:liquid_cosmic_mesh 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.sps_crafting("gtlcore:cosmic_fabric")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:mana 1000", "gtceu:enriched_xenoxene 1000", "gtceu:liquid_cosmic_mesh 100")
        .itemInputs("gtceu:rubber_foil", "gtlcore:amorphous_matter")
        .itemOutputs("gtlcore:cosmic_fabric")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)

    //hyper fuel
    gtr.chemical_reactor("gtlcore:ammonium_nitrate_solution")
        .inputFluids("gtceu:ammonia 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:ammonium_nitrate_solution 1000")
        .EUt(120)
        .duration(60)

    gtr.mixer("gtlcore:naquadah_solution")
        .itemInputs("2x gtceu:naquadah_dust")
        .inputFluids("gtceu:ammonium_nitrate_solution 1000")
        .outputFluids("gtceu:naquadah_solution 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)

    gtr.cracker("gtlcore:fluorine_cracked_aquadah")
        .inputFluids("gtceu:naquadah_solution 1000", "gtceu:fluorine 1000")
        .outputFluids("gtceu:fluorine_cracked_aquadah 1000")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120)

    gtr.cracker("gtlcore:radon_cracked_enriched_aquadah")
        .inputFluids("gtceu:enriched_naquadah_solution 1000", "gtceu:radon 1000")
        .outputFluids("gtceu:radon_cracked_enriched_aquadah 1000")
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(160)

    gtr.distillation_tower("gtlcore:naquadah_fuel")
        .inputFluids("gtceu:fluorine_cracked_aquadah 1000")
        .outputFluids("gtceu:naquadah_fuel 800", "gtceu:nitric_acid 200", "gtceu:enriched_naquadah_waste 100", "gtceu:ammonia 200", "gtceu:fluorine 200")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    gtr.distillation_tower("gtlcore:enriched_naquadah_fuel")
        .inputFluids("gtceu:radon_cracked_enriched_aquadah 1000")
        .outputFluids("gtceu:enriched_naquadah_fuel 800", "gtceu:naquadria_waste 100", "gtceu:radon 200", "gtceu:fluorine 200")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.large_chemical_reactor("gtlcore:hyper_fuel_1")
        .inputFluids("gtceu:naquadria_solution 1000", "gtceu:naquadah_fuel 1000", "gtceu:enriched_naquadah_fuel 1000", "gtceu:thorium 2304")
        .outputFluids("gtceu:hyper_fuel_1 3000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.dimensionally_transcendent_plasma_forge("avaritia:infinity_catalyst")
        .itemInputs("64x gtlcore:contained_exotic_matter", "64x gtlcore:essentia_matter")
        .inputFluids("gtceu:infinity 1000", "gtceu:high_energy_quark_gluon_plasma 100000")
        .itemOutputs("avaritia:infinity_catalyst", "64x gtlcore:time_dilation_containment_unit")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4800)
        .blastFurnaceTemp(32000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:transcendentmetal")
        .notConsumable("gtlcore:spacetime_catalyst")
        .itemInputs("gtlcore:hypercube")
        .inputFluids("gtceu:spacetime 100", "gtceu:tennessine 144")
        .outputFluids("gtceu:transcendentmetal 144", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(3200)
        .blastFurnaceTemp(36000)

    gtr.autoclave("gtlcore:spacetime_catalyst")
        .itemInputs("avaritia:infinity_catalyst")
        .inputFluids("gtceu:spacetime 1000")
        .itemOutputs("gtlcore:spacetime_catalyst")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.chemical_bath("gtlcore:eternity_catalyst")
        .itemInputs("gtlcore:spacetime_catalyst")
        .inputFluids("gtceu:eternity 1000")
        .itemOutputs("gtlcore:eternity_catalyst")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.chemical_reactor("gtlcore:aniline")
        .notConsumable("#forge:dusts/zinc")
        .inputFluids("gtceu:nitrobenzene 1000", "gtceu:hydrogen 3000")
        .outputFluids("gtceu:aniline 1000", "minecraft:water 2000")
        .EUt(1920)
        .duration(160)

    gtr.chemical_reactor("gtlcore:durene_dust")
        .inputFluids("gtceu:chloromethane 2000", "gtceu:dimethylbenzene 1000")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("24x gtceu:durene_dust")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtlcore:pyromellitic_dianhydride_dust")
        .itemInputs("24x gtceu:durene_dust")
        .inputFluids("gtceu:oxygen 12000")
        .outputFluids("minecraft:water 6000")
        .itemOutputs("18x gtceu:pyromellitic_dianhydride_dust")
        .EUt(120)
        .duration(150)

    gtr.chemical_reactor("gtlcore:oxydianiline")
        .inputFluids("gtceu:aniline 2000", "gtceu:phenol 1000")
        .notConsumable("#forge:dusts/tin")
        .outputFluids("gtceu:oxydianiline 1000", "gtceu:methane 2000")
        .EUt(120)
        .duration(150)

    gtr.large_chemical_reactor("gtlcore:paa")
        .itemInputs("18x gtceu:pyromellitic_dianhydride_dust")
        .inputFluids("gtceu:oxydianiline 1000")
        .outputFluids("gtceu:paa 1000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    //optical
    gtr.forming_press("gtlcore:optical_soc_containment_housing")
        .itemInputs("gtceu:multilayer_fiber_reinforced_printed_circuit_board", "gtceu:titanium_foil", "gtceu:yttrium_barium_cuprate_foil", "gtceu:nickel_zinc_ferrite_foil", "gtceu:uranium_rhodium_dinaquadide_foil", "4x gtceu:darmstadtium_bolt")
        .itemOutputs("gtlcore:optical_soc_containment_housing")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:optical_soc")
        .itemInputs("gtlcore:optical_soc_containment_housing", "gtlcore:optical_slice", "8x gtceu:gold_bolt", "8x gtceu:fine_zinc_wire")
        .inputFluids("gtceu:lumiium 144", "gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:helium 100")
        .itemOutputs("gtlcore:optical_soc")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.canner("gtlcore:bose_einstein_cooling_container")
        .notConsumable("gtceu:iridium_nanoswarm")
        .inputFluids("gtceu:rubidium 288")
        .itemInputs("gtlcore:empty_laser_cooling_container")
        .itemOutputs("gtlcore:bose_einstein_cooling_container")
        .EUt(90000)
        .duration(280)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtlcore:cubic_zirconia_dust")
        .itemInputs("gtceu:zirconium_dust")
        .itemOutputs("3x gtceu:cubic_zirconia_dust")
        .inputFluids("gtceu:oxygen 2000")
        .EUt(480)
        .duration(360)
        .blastFurnaceTemp(2600)

    gtr.assembler("gtlcore:low_frequency_laser")
        .itemInputs("gtceu:red_garnet_rod", "gtlcore:red_halide_lamp", "gtlcore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtlcore:smd_diode_optical")
        .itemOutputs("gtlcore:low_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:medium_frequency_laser")
        .itemInputs("gtceu:lazurite_rod", "gtlcore:green_halide_lamp", "gtlcore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtlcore:smd_diode_optical")
        .itemOutputs("gtlcore:medium_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:high_frequency_laser")
        .itemInputs("gtceu:amethyst_rod", "gtlcore:blue_halide_lamp", "gtlcore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtlcore:smd_diode_optical")
        .itemOutputs("gtlcore:high_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:ballast")
        .itemInputs("2x gtceu:fine_annealed_copper_wire", "gtceu:resistor", "gtceu:inductor", "gtceu:double_annealed_copper_plate")
        .itemOutputs("gtlcore:ballast")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1920)
        .duration(290)

    gtr.assembler("gtlcore:laser_diode")
        .itemInputs("2x gtceu:fine_gold_wire", "gtlcore:smd_diode_bioware", "gtceu:amethyst_lens", "gtceu:double_nichrome_plate")
        .itemOutputs("gtlcore:laser_diode")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(980000)
        .duration(260)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:laser_cooling_unit")
        .itemInputs("4x gtceu:fine_gold_wire", "gtceu:frostproof_machine_casing", "gtlcore:laser_diode", "#gtceu:circuits/hv")
        .itemOutputs("gtlcore:laser_cooling_unit")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(1200000)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:empty_laser_cooling_container")
        .itemInputs("8x gtceu:steel_plate", "gtlcore:laser_cooling_unit", "gtlcore:magnetic_trap", "2x gtceu:double_magnalium_plate")
        .itemOutputs("gtlcore:empty_laser_cooling_container")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1150000)
        .duration(380)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:magnetic_trap")
        .itemInputs("2x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire", "gtceu:frostproof_machine_casing", "gtceu:double_kanthal_plate")
        .itemOutputs("gtlcore:magnetic_trap")
        .inputFluids("gtceu:soldering_alloy 432")
        .EUt(1000000)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:red_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:potassium_bromide_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtlcore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtlcore:red_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtlcore:green_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:iridium_chloride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtlcore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtlcore:green_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtlcore:blue_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:titanium_trifluoride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtlcore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtlcore:blue_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.electric_blast_furnace("gtlcore:strontium_europium_aluminate_dust")
        .itemInputs("2x gtceu:aluminium_dust", "gtceu:europium_dust", "gtceu:strontium_dust")
        .inputFluids("gtceu:oxygen 4000")
        .itemOutputs("8x gtceu:strontium_europium_aluminate_dust")
        .EUt(120)
        .duration(340)
        .blastFurnaceTemp(1200)

    gtr.chemical_reactor("gtlcore:highly_reflective_mirror")
        .itemInputs("gtceu:germanium_plate")
        .inputFluids("gtceu:hydrogen_sulfide 1000", "gtceu:zinc 144")
        .itemOutputs("gtlcore:highly_reflective_mirror")
        .EUt(710000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:lithium_niobate_nanoparticles_dust")
        .notConsumable("gtceu:hafnium_dust")
        .itemInputs("2x gtceu:lithium_dust", "gtceu:niobium_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("6x gtceu:lithium_niobate_nanoparticles_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("gtlcore:periodically_poled_lithium_niobate_boule")
        .notConsumable("gtlcore:electron_source")
        .itemInputs("2x gtceu:lithium_niobate_nanoparticles_dust")
        .inputFluids("gtceu:xenon 1000")
        .itemOutputs("gtlcore:periodically_poled_lithium_niobate_boule")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:electron_source")
        .itemInputs("gtceu:mendelevium_plate", "gtceu:radium_dust", "6x gtceu:polyetheretherketone_plate", "4x gtceu:polybenzimidazole_plate", "4x gtceu:steel_plate")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtlcore:electron_source")
        .EUt(750000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:rotating_transparent_surface")
        .itemInputs("4x gtceu:graphene_plate", "gtceu:uhv_electric_motor")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtlcore:rotating_transparent_surface")
        .EUt(1250000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.lathe("gtlcore:non_linear_optical_lens")
        .itemInputs("gtlcore:periodically_poled_lithium_niobate_boule")
        .itemOutputs("kubejs:non_linear_optical_lens")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(360)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:sodium_seaborgate_dust")
        .itemInputs("gtceu:seaborgium_dust", "6x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:fluorine 6000", "minecraft:water 1000")
        .outputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("7x gtceu:sodium_seaborgate_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:optical_slice")
        .itemInputs("gtlcore:optical_wafer")
        .itemOutputs("16x gtlcore:optical_slice")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(560)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:optical_wafer")
        .itemInputs("2x gtceu:francium_caesium_cadmium_bromide_dust", "gtlcore:photon_carrying_wafer", "gtceu:glowstone_nanoswarm")
        .inputFluids("gtceu:seaborgium_doped_nanotubes 144", "gtceu:carbon_nanotubes 144")
        .itemOutputs("gtlcore:optical_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:photon_carrying_wafer")
        .itemInputs("gtlcore:raw_photon_carrying_wafer")
        .inputFluids("gtceu:blaze 288")
        .itemOutputs("gtlcore:photon_carrying_wafer")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtlcore:francium_caesium_cadmium_bromide_dust")
        .itemInputs("2x gtceu:cadmium_dust", "gtceu:francium_dust", "gtceu:caesium_dust")
        .inputFluids("gtceu:bromine 6000")
        .itemOutputs("10x gtceu:francium_caesium_cadmium_bromide_dust")
        .EUt(120)
        .duration(250)
        .blastFurnaceTemp(2200)

    gtr.large_chemical_reactor("gtlcore:seaborgium_doped_nanotubes")
        .itemInputs("gtceu:seaborgium_dust")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 800", "gtceu:cycloparaphenylene 200")
        .outputFluids("gtceu:seaborgium_doped_nanotubes 144")
        .EUt(320000)
        .duration(390)
        .cleanroom(CleanroomType.CLEANROOM)

    //exotic
    gtr.laser_engraver("gtlcore:exotic_wafer")
        .notConsumable("gtceu:magenta_glass_lens")
        .itemInputs("gtceu:highly_advanced_soc_wafer")
        .itemOutputs("gtlcore:exotic_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:exotic_chip")
        .itemInputs("gtlcore:exotic_wafer")
        .itemOutputs("4x gtlcore:exotic_chip")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:x_ray_laser")
        .itemInputs("gtlcore:x_ray_waveguide", "gtlcore:microfocus_x_ray_tube", "gtceu:exquisite_jasper_gem", "gtlcore:x_ray_mirror_plate")
        .itemOutputs("gtlcore:x_ray_laser")
        .inputFluids("gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:iridium 144", "gtceu:californium_cyclopentadienide 10")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:microfocus_x_ray_tube")
        .itemInputs("4x gtceu:fine_enderium_wire", "gtceu:echoite_rod", "gtceu:glass_tube", "gtceu:double_palladium_plate")
        .itemOutputs("gtlcore:microfocus_x_ray_tube")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:x_ray_mirror_plate")
        .itemInputs("gtceu:graphene_plate")
        .inputFluids("gtceu:iridium_trichloride_solution 100")
        .itemOutputs("gtlcore:x_ray_mirror_plate")
        .EUt(2000000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:iridium_trichloride_solution")
        .itemInputs("4x gtceu:iridium_chloride_dust")
        .inputFluids("gtceu:hypochlorous_acid 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:iridium_trichloride_solution 1000")
        .EUt(1920)
        .duration(360)

    gtr.chemical_bath("gtlcore:x_ray_waveguide")
        .itemInputs("gtlcore:fullerene_polymer_matrix_fine_tubing")
        .inputFluids("gtceu:iridium_trichloride_solution 100")
        .itemOutputs("gtlcore:x_ray_waveguide")
        .EUt(8000000)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:rydberg_spinorial_assembly")
        .itemInputs("gtlcore:cryogenic_interface",
            "gtlcore:rotating_transparent_surface",
            "gtlcore:exotic_chip",
            "gtlcore:x_ray_waveguide")
        .notConsumableFluid("gtceu:xenon 10")
        .inputFluids("gtceu:quantum_dots 10", "gtceu:zylon 144", "gtceu:liquid_hydrogen 10")
        .itemOutputs("gtlcore:rydberg_spinorial_assembly")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(560)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:cryogenic_interface")
        .itemInputs("gtceu:double_graphene_plate", "8x gtceu:graphene_foil", "gtceu:fine_trinium_titanium_wire", "8x gtceu:mendelevium_foil", "2x gtceu:zirconium_carbide_plate")
        .inputFluids("gtceu:zylon 72")
        .itemOutputs("gtlcore:cryogenic_interface")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:quantum_dots")
        .itemInputs("gtceu:selenium_dust", "gtceu:cadmium_dust")
        .inputFluids("gtceu:stearic_acid 1000", "gtceu:tricotylphosphine 1000")
        .outputFluids("gtceu:quantum_dots 1000")
        .EUt(5000000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:deglycerated_soap")
        .inputFluids("gtceu:soap 1000")
        .itemInputs("gtceu:salt_dust")
        .outputFluids("gtceu:deglycerated_soap 800", "gtceu:glycerol 200")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtlcore:soap_1")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:steam 2000", "gtceu:fish_oil 100")
        .outputFluids("gtceu:soap 1000")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtlcore:soap_2")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:steam 2000", "gtceu:seed_oil 100")
        .outputFluids("gtceu:soap 1000")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtlcore:tricotylphosphine")
        .inputFluids("gtceu:octane 3000")
        .itemInputs("gtceu:phosphorus_dust")
        .outputFluids("gtceu:tricotylphosphine 1000")
        .EUt(2000)
        .duration(160)

    //cosmic
    gtr.sps_crafting("gtlcore:photocoated_hassium_boule")
        .itemInputs("gtceu:silicon_boule", "2x gtceu:hassium_ingot", "gtlcore:hassium_seed_crystal")
        .inputFluids("gtceu:mana 10000", "gtceu:woods_glass 2304", "gtceu:photopolymer 2000")
        .itemOutputs("gtlcore:photocoated_hassium_boule")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    gtr.cutter("gtlcore:photocoated_hassium_wafer")
        .itemInputs("gtlcore:photocoated_hassium_boule")
        .itemOutputs("4x gtlcore:photocoated_hassium_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(280)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:lithography_mask")
        .itemInputs("64x gtceu:fine_borosilicate_glass_wire", "16x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:polyethylene 288", "gtceu:polytetrafluoroethylene 288", "gtceu:polycaprolactam 288", "gtceu:polyvinyl_butyral 288")
        .itemOutputs("gtlcore:lithography_mask")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:grating_lithography_mask")
        .itemInputs("gtlcore:lithography_mask", "gtceu:glass_lens")
        .itemOutputs("gtlcore:grating_lithography_mask")
        .EUt(1920)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:diffractor_grating_mirror")
        .itemInputs("gtlcore:photocoated_hassium_wafer")
        .notConsumable("gtlcore:grating_lithography_mask")
        .itemOutputs("gtlcore:diffractor_grating_mirror")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:cosmic_computing_mixture")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .inputFluids("gtceu:gluons 1000", "gtceu:heavy_quarks 1000", "gtceu:heavy_lepton_mixture 1000")
        .outputFluids("gtceu:cosmic_computing_mixture 3000")
        .EUt(24000000)
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:cosmic_processing_unit_core")
        .itemInputs("6x gtceu:fine_heavy_quark_degenerate_matter_wire", "4x gtlcore:cosmic_soc", "3x gtceu:degenerate_rhenium_plate", "gtlcore:empty_laser_cooling_container")
        .inputFluids("gtceu:cosmic_computing_mixture 1000", "gtceu:cosmic_superconductor 1000", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:quantum_dots 100")
        .itemOutputs("gtlcore:cosmic_processing_unit_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3500)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtlcore:ultrashort_pulse_laser")
        .itemInputs("4x gtlcore:diffractor_grating_mirror", "8x gtceu:fine_borosilicate_glass_wire", "gtlcore:high_frequency_laser", "2x gtlcore:insulation_wire_assembly", "gtceu:yellow_garnet_rod", "gtceu:lapis_rod", "gtceu:exquisite_olivine_gem", "gtceu:ev_emitter", "gtceu:double_platinum_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:ultrashort_pulse_laser")
        .EUt(45000000)
        .duration(270)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:insulation_wire_assembly")
        .itemInputs("gtceu:reinforced_epoxy_resin_rod", "gtlcore:aerographene", "gtlcore:highly_insulating_foil", "gtlcore:memory_foam_block", "gtceu:fullerene_polymer_matrix_pulp_foil")
        .inputFluids("gtceu:polyimide 144")
        .itemOutputs("gtlcore:insulation_wire_assembly")
        .EUt(480)
        .duration(200)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.chemical_bath("gtlcore:highly_insulating_foil")
        .itemInputs("gtceu:polyetheretherketone_foil")
        .inputFluids("gtceu:azafullerene 10")
        .itemOutputs("gtlcore:highly_insulating_foil")
        .EUt(7680)
        .duration(70)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.fluid_heater("gtlcore:azafullerene")
        .notConsumable("36x gtceu:tiny_rhenium_dust")
        .inputFluids("gtceu:aminated_fullerene 100")
        .outputFluids("gtceu:azafullerene 100")
        .EUt(480)
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:aminated_fullerene")
        .itemInputs("gtceu:fullerene_dust")
        .inputFluids("gtceu:carbon_monoxide 4000", "minecraft:water 8000", "gtceu:tertbuthylcarbonylazide 4000")
        .outputFluids("gtceu:aminated_fullerene 1000", "gtceu:carbon_dioxide 8000", "gtceu:tert_butanol 4000")
        .EUt(30720)
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:tertbuthylcarbonylazide")
        .itemInputs("33x gtceu:ditertbutyl_dicarbonate_dust", "8x gtceu:sodium_azide_dust", "2x gtceu:potassium_dust")
        .itemOutputs("2x gtceu:sodium_dust", "6x gtceu:potash_dust")
        .outputFluids("gtceu:tertbuthylcarbonylazide 2000")
        .EUt(480)
        .duration(110)

    gtr.chemical_reactor("gtlcore:sodium_toluenesulfonate")
        .itemInputs("2x gtceu:salt_dust")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:toluene 1000")
        .outputFluids("gtceu:sodium_toluenesulfonate 1000", "gtceu:diluted_hydrochloric_acid 1000")
        .EUt(950)
        .duration(220)

    gtr.chemical_reactor("gtlcore:tert_butanol")
        .notConsumable("gtceu:magnesium_chloride_dust")
        .itemInputs("gtceu:zeolite_sieving_pellets_dust")
        .inputFluids("gtceu:methane 1000", "gtceu:acetone 1000")
        .outputFluids("gtceu:tert_butanol 1000")
        .itemOutputs("gtceu:wet_zeolite_sieving_pellets_dust")
        .EUt(120)
        .duration(126)

    gtr.chemical_reactor("gtlcore:ditertbutyl_dicarbonate_dust")
        .notConsumableFluid("gtceu:sodium_toluenesulfonate 1000")
        .inputFluids("gtceu:tert_butanol 2000", "gtceu:carbon_dioxide 2000")
        .outputFluids("minecraft:water 1000")
        .itemOutputs("33x gtceu:ditertbutyl_dicarbonate_dust")
        .EUt(480)
        .duration(260)

    gtr.mixer("gtlcore:heavy_quark_enriched_mixture")
        .inputFluids("gtceu:heavy_quarks 750", "gtceu:light_quarks 250")
        .outputFluids("gtceu:heavy_quark_enriched_mixture 1000")
        .EUt(32500000)
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:graviton_transducer")
        .itemInputs("2x gtlcore:quantumchromodynamic_protective_plating", "gtlcore:contained_reissner_nordstrom_singularity", "gtlcore:microwormhole_generator", "gtlcore:dark_matter", "gtceu:uiv_sensor")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("gtlcore:graviton_transducer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:topological_manipulator_unit")
        .itemInputs("2x gtlcore:quantumchromodynamic_protective_plating", "gtlcore:contained_kerr_newmann_singularity", "gtlcore:microwormhole_generator", "gtceu:uhv_field_generator")
        .inputFluids("gtceu:antineutron 10", "gtceu:neutronium 144", "gtceu:arceusalloy2b 144", "gtceu:nitrogen 10000")
        .itemOutputs("gtlcore:topological_manipulator_unit")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler_module("gtlcore:relativistic_spinorial_memory_system")
        .itemInputs("2x gtceu:neutron_reflector", "gtlcore:rydberg_spinorial_assembly", "4x gtlcore:charged_lepton_trap_crystal", "2x gtceu:legendarium_single_wire", "gtceu:uhv_field_generator", "gtceu:uiv_sensor", "gtceu:fusion_coil")
        .inputFluids("gtceu:uu_matter 10000", "gtceu:noble_gas 2000", "gtceu:cosmic_computing_mixture 1000", "gtceu:neutronium 1296")
        .itemOutputs("gtlcore:relativistic_spinorial_memory_system")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:microwormhole_generator")
        .itemInputs("2x gtceu:zpm_emitter", "2x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire", "2x gtceu:neutronium_plate", "gtceu:zpm_field_generator", "gtlcore:contained_kerr_singularity", "gtlcore:void_matter", "gtceu:enderium_nanoswarm", "2x gtceu:celestialtungsten_plate")
        .inputFluids("gtceu:tritanium 576")
        .itemOutputs("gtlcore:microwormhole_generator")
        .EUt(100000)
        .duration(200)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:nuclear_clock")
        .itemInputs("2x gtceu:uiv_sensor", "2x gtlcore:ultrashort_pulse_laser", "2x gtceu:neutronium_plate", "gtlcore:scintillator", "gtlcore:bose_einstein_cooling_container", "gtceu:iron_nanoswarm", "gtceu:uv_naquadria_battery", "2x gtceu:double_rhodium_plate")
        .inputFluids("gtceu:thorium 144", "gtceu:black_titanium 1296")
        .itemOutputs("gtlcore:nuclear_clock")
        .EUt(33550000)
        .duration(1600)
        .addData("SEPMTier", 3)

    gtr.autoclave("gtlcore:contained_kerr_singularity")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .itemInputs("gtlcore:contained_kerr_newmann_singularity")
        .inputFluids("gtceu:free_electron_gas 1000")
        .itemOutputs("gtlcore:contained_kerr_singularity")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler_module("gtlcore:macrowormhole_generator")
        .itemInputs("4x gtceu:uv_emitter", "4x gtceu:uv_sensor", "2x gtceu:uv_field_generator", "gtlcore:contained_high_density_protonic_matter", "gtlcore:microwormhole_generator", "gtlcore:contained_kerr_singularity", "gtceu:zpm_naquadria_battery", "gtlcore:kinetic_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("gtlcore:macrowormhole_generator")
        .EUt(1000000)
        .duration(400)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:stabilized_wormhole_generator")
        .itemInputs("4x gtceu:uev_emitter", "4x gtceu:uev_sensor", "2x gtceu:uev_field_generator", "gtlcore:contained_exotic_matter", "gtlcore:macrowormhole_generator", "gtlcore:contained_kerr_singularity", "gtceu:energy_cluster", "gtlcore:omni_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("gtlcore:stabilized_wormhole_generator")
        .EUt(10000000)
        .duration(800)
        .addData("SEPMTier", 4)

    gtr.precision_assembler("gtlcore:ctc_guidance_unit")
        .itemInputs("64x gtlcore:cosmic_ram_chip", "gtlcore:supracausal_processing_core", "gtceu:data_module", "gtlcore:nuclear_clock")
        .inputFluids("gtceu:arceusalloy2b 1296", "gtceu:super_mutated_living_solder 1296", "gtceu:trinium_titanium 1296", "gtceu:vibranium 1296")
        .itemOutputs("gtlcore:ctc_guidance_unit")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler_module("gtlcore:ctc_computational_unit_container")
        .itemInputs("36x gtceu:enriched_naquadah_plate", "36x gtceu:fullerene_polymer_matrix_pulp_plate", "6x gtceu:heavy_quark_degenerate_matter_plate", "3x gtceu:uhv_field_generator", "2x gtceu:taranium_plate", "gtlcore:ctc_guidance_unit", "gtlcore:manifold_oscillatory_power_cell", "4x gtceu:double_uranium_plate", "gtceu:dense_darmstadtium_plate", "gtceu:neutronium_frame", "gtlcore:time_dilation_containment_unit", "gtlcore:stabilized_wormhole_generator", "2x gtlcore:dark_matter", "gtceu:starmetal_nanoswarm", "8x gtceu:double_black_dwarf_mtter_plate", "8x gtceu:double_trinium_plate")
        .inputFluids("gtceu:superheavy_l_alloy 1296", "gtceu:superheavy_h_alloy 1296", "gtceu:trinium_titanium 1296", "gtceu:adamantine 1296")
        .itemOutputs("gtlcore:ctc_computational_unit_container")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .addData("SEPMTier", 5)

    gtr.world_data_scanner("gtlcore:overworld_data")
        .itemInputs("gtceu:data_stick", "64x gtceu:stone_dust")
        .inputFluids("gtceu:pcb_coolant 100", "gtceu:air 64000")
        .itemOutputs("kubejs:overworld_data")
        .EUt(32)
        .duration(4000)
        .dimension("overworld")

    gtr.world_data_scanner("gtlcore:nether_data")
        .itemInputs("2x gtceu:data_stick", "64x gtceu:netherrack_dust")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:nether_air 64000")
        .itemOutputs("2x kubejs:nether_data")
        .EUt(128)
        .duration(4000)
        .dimension("ad_astra:venus")

    gtr.world_data_scanner("gtlcore:end_data")
        .itemInputs("4x gtceu:data_stick", "64x gtceu:endstone_dust")
        .inputFluids("gtceu:pcb_coolant 400", "gtceu:ender_air 64000")
        .itemOutputs("4x kubejs:end_data")
        .EUt(512)
        .duration(4000)
        .dimension("kubejs:pluto")

    const overworld_fluids = [
        ["gtceu:oil_medium 20000", 1],
        ["gtceu:oil 20000", 2],
        ["gtceu:oil_heavy 15000", 3],
        ["gtceu:oil_light 25000", 4],
        ["gtceu:natural_gas 15000", 5],
        ["gtceu:salt_water 40000", 6]
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
        ["minecraft:lava 65000", 1],
        ["gtceu:natural_gas 35000", 2]
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
            "1x gtceu:raw_glauconite_sand"], 1],

        [["9x gtceu:raw_almandine",
            "6x gtceu:raw_pyrope",
            "3x gtceu:raw_sapphire",
            "3x gtceu:raw_green_sapphire"], 2],

        [["3x gtceu:raw_goethite",
            "12x gtceu:raw_yellow_limonite",
            "12x gtceu:raw_hematite",
            "6x gtceu:raw_malachite"], 3],

        [["6x gtceu:raw_soapstone",
            "4x gtceu:raw_talc",
            "4x gtceu:raw_glauconite_sand",
            "2x gtceu:raw_pentlandite"], 4],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_spessartine",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], 5],

        [["13x gtceu:raw_chalcopyrite",
            "1x gtceu:raw_zeolite",
            "1x gtceu:raw_cassiterite",
            "3x gtceu:raw_realgar"], 6],

        [["12x gtceu:raw_coal"], 7],

        [["2x gtceu:raw_chalcopyrite",
            "8x minecraft:raw_iron",
            "8x gtceu:raw_pyrite",
            "8x minecraft:raw_copper"], 8],

        [["12x gtceu:raw_magnetite",
            "8x gtceu:raw_vanadium_magnetite",
            "4x minecraft:raw_gold"], 9],

        [["6x gtceu:raw_lazurite",
            "4x gtceu:raw_sodalite",
            "4x gtceu:raw_lapis",
            "2x gtceu:raw_calcite"], 10],

        [["6x gtceu:raw_galena",
            "4x gtceu:raw_silver",
            "2x gtceu:raw_lead"], 11],

        [["3x gtceu:raw_kyanite",
            "2x gtceu:raw_mica",
            "1x gtceu:raw_pollucite"], 12],

        [["16x gtceu:raw_tin",
            "8x gtceu:raw_cassiterite"], 13],

        [["6x gtceu:raw_red_garnet",
            "4x gtceu:raw_yellow_garnet",
            "4x gtceu:raw_amethyst",
            "2x gtceu:raw_opal"], 14],

        [["12x gtceu:raw_basaltic_mineral_sand",
            "8x gtceu:raw_granitic_mineral_sand",
            "8x gtceu:raw_fullers_earth",
            "4x gtceu:raw_gypsum"], 15],

        [["8x gtceu:raw_rock_salt",
            "1x gtceu:raw_salt",
            "3x gtceu:raw_lepidolite",
            "3x gtceu:raw_spodumene"], 16],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar"], 17],

        [["6x gtceu:raw_apatite",
            "4x gtceu:raw_tricalcium_phosphate"], 18],

        [["12x gtceu:raw_cassiterite_sand",
            "8x gtceu:raw_garnet_sand",
            "8x gtceu:raw_asbestos",
            "4x gtceu:raw_diatomite"], 19],

        [["12x gtceu:raw_oilsands"], 20],

        [["6x gtceu:raw_graphite",
            "4x gtceu:raw_diamond",
            "2x gtceu:raw_coal"], 21],

        [["6x gtceu:raw_garnierite",
            "4x gtceu:raw_nickel",
            "4x gtceu:raw_cobaltite",
            "2x gtceu:raw_pentlandite"], 22]]

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
            "4x gtceu:raw_stibnite"], 1],

        [["5x gtceu:raw_bastnasite",
            "2x gtceu:raw_molybdenum",
            "2x gtceu:raw_neodymium",
            "2x gtceu:raw_monazite"], 2],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar"], 3],

        [["6x gtceu:raw_saltpeter",
            "4x gtceu:raw_diatomite",
            "4x gtceu:raw_electrotine",
            "2x gtceu:raw_alunite"], 4],

        [["5x gtceu:raw_beryllium",
            "6x gtceu:raw_emerald"], 5],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], 6],

        [["8x gtceu:raw_wulfenite",
            "5x gtceu:raw_molybdenite",
            "3x gtceu:raw_molybdenum",
            "3x gtceu:raw_powellite"], 7],

        [["5x gtceu:raw_goethite",
            "3x gtceu:raw_yellow_limonite",
            "3x gtceu:raw_hematite",
            "2x minecraft:raw_gold"], 8],

        [["6x gtceu:raw_quartzite",
            "4x gtceu:raw_certus_quartz",
            "2x gtceu:raw_barite"], 9],

        [["11x gtceu:raw_blue_topaz",
            "7x gtceu:raw_topaz",
            "7x gtceu:raw_chalcocite",
            "4x gtceu:raw_bornite"], 10],

        [["12x gtceu:raw_nether_quartz",
            "4x gtceu:raw_quartzite"], 11],

        [["15x gtceu:raw_sulfur",
            "10x gtceu:raw_pyrite",
            "5x gtceu:raw_sphalerite"], 12]]

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
            "3x minecraft:raw_gold"], 1],

        [["8x gtceu:raw_bauxite",
            "4x gtceu:raw_ilmenite",
            "4x gtceu:raw_aluminium"], 2],

        [["3x gtceu:raw_bornite",
            "2x gtceu:raw_cooperite",
            "2x gtceu:raw_platinum",
            "1x gtceu:raw_palladium"], 3],

        [["6x gtceu:raw_scheelite",
            "4x gtceu:raw_tungstate",
            "2x gtceu:raw_lithium"], 4],

        [["9x gtceu:raw_pitchblende",
            "6x gtceu:raw_uraninite"], 5],

        [["9x gtceu:raw_naquadah",
            "3x gtceu:raw_plutonium"], 6]]

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
            "2x #forge:ores/glauconite_sand"], "gtlcore:olivine_vein_essence"],

        [["18x #forge:ores/almandine",
            "12x #forge:ores/pyrope",
            "6x #forge:ores/sapphire",
            "6x #forge:ores/green_sapphire"], "gtlcore:sapphire_vein_essence"],

        [["6x #forge:ores/goethite",
            "24x #forge:ores/yellow_limonite",
            "24x #forge:ores/hematite",
            "12x #forge:ores/malachite"], "gtlcore:iron_vein_essence"],

        [["12x #forge:ores/soapstone",
            "8x #forge:ores/talc",
            "8x #forge:ores/glauconite_sand",
            "4x #forge:ores/pentlandite"], "gtlcore:lubricant_vein_essence"],

        [["6x #forge:ores/grossular",
            "4x #forge:ores/spessartine",
            "4x #forge:ores/pyrolusite",
            "2x #forge:ores/tantalite"], "gtlcore:manganese_vein_ow_essence"],

        [["25x #forge:ores/chalcopyrite",
            "1x #forge:ores/zeolite",
            "1x #forge:ores/cassiterite",
            "5x #forge:ores/realgar"], "gtlcore:copper_tin_vein_essence"],

        [["24x #forge:ores/coal"], "gtlcore:coal_vein_essence"],

        [["4x #forge:ores/chalcopyrite",
            "16x #forge:ores/iron",
            "16x #forge:ores/pyrite",
            "16x #forge:ores/copper"], "gtlcore:copper_vein_essence"],

        [["24x #forge:ores/magnetite",
            "16x #forge:ores/vanadium_magnetite",
            "8x #forge:ores/gold"], "gtlcore:magnetite_vein_ow_essence"],

        [["12x #forge:ores/lazurite",
            "8x #forge:ores/sodalite",
            "8x #forge:ores/lapis",
            "4x #forge:ores/calcite"], "gtlcore:lapis_vein_essence"],

        [["12x #forge:ores/galena",
            "8x #forge:ores/silver",
            "4x #forge:ores/lead"], "gtlcore:galena_vein_essence"],

        [["6x #forge:ores/kyanite",
            "4x #forge:ores/mica",
            "4x #forge:ores/bauxite",
            "2x #forge:ores/pollucite"], "gtlcore:mica_vein_essence"],

        [["32x #forge:ores/tin",
            "16x #forge:ores/cassiterite"], "gtlcore:cassiterite_vein_essence"],

        [["12x #forge:ores/red_garnet",
            "8x #forge:ores/yellow_garnet",
            "8x #forge:ores/amethyst",
            "4x #forge:ores/opal"], "gtlcore:garnet_vein_essence"],

        [["24x #forge:ores/basaltic_mineral_sand",
            "16x #forge:ores/granitic_mineral_sand",
            "16x #forge:ores/fullers_earth",
            "8x #forge:ores/gypsum"], "gtlcore:mineral_sand_vein_essence"],

        [["15x #forge:ores/rock_salt",
            "1x #forge:ores/salt",
            "5x #forge:ores/lepidolite",
            "5x #forge:ores/spodumene"], "gtlcore:salts_vein_essence"],

        [["18x #forge:ores/redstone",
            "12x #forge:ores/ruby",
            "6x #forge:ores/cinnabar"], "gtlcore:redstone_vein_ow_essence"],

        [["12x #forge:ores/apatite",
            "8x #forge:ores/tricalcium_phosphate",
            "4x #forge:ores/pyrochlore"], "gtlcore:apatite_vein_essence"],

        [["24x #forge:ores/cassiterite_sand",
            "16x #forge:ores/garnet_sand",
            "16x #forge:ores/asbestos",
            "8x #forge:ores/diatomite"], "gtlcore:garnet_tin_vein_essence"],

        [["24x #forge:ores/oilsands"], "gtlcore:oilsands_vein_essence"],

        [["12x #forge:ores/graphite",
            "8x #forge:ores/diamond"], "gtlcore:diamond_vein_essence"],

        [["12x #forge:ores/garnierite",
            "8x #forge:ores/nickel",
            "8x #forge:ores/cobaltite",
            "4x #forge:ores/pentlandite"], "gtlcore:nickel_vein_essence"]]

    overworld_vs.forEach((overworld_v) => {
        gtr.incubator("overworld_e_" + overworld_v[1])
            .notConsumable("16x kubejs:overworld_data")
            .itemInputs("gtlcore:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(overworld_v[0])
            .itemOutputs("64x " + overworld_v[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)
    })

    const nether_vs =
        [[["28x #forge:ores/tetrahedrite",
            "14x #forge:ores/copper",
            "7x #forge:ores/stibnite"], "gtlcore:tetrahedrite_vein_essence"],

        [["9x #forge:ores/bastnasite",
            "3x #forge:ores/molybdenum",
            "3x #forge:ores/neodymium"], "gtlcore:monazite_vein_essence"],

        [["18x #forge:ores/redstone",
            "12x #forge:ores/ruby",
            "6x #forge:ores/cinnabar"], "gtlcore:redstone_vein_essence"],

        [["12x #forge:ores/saltpeter",
            "8x #forge:ores/diatomite",
            "8x #forge:ores/electrotine",
            "4x #forge:ores/alunite"], "gtlcore:saltpeter_vein_essence"],

        [["9x #forge:ores/beryllium",
            "12x #forge:ores/emerald"], "gtlcore:beryllium_vein_essence"],

        [["6x #forge:ores/grossular",
            "4x #forge:ores/pyrolusite",
            "2x #forge:ores/tantalite"], "gtlcore:manganese_vein_essence"],

        [["15x #forge:ores/wulfenite",
            "1x #forge:ores/molybdenite",
            "5x #forge:ores/molybdenum",
            "5x #forge:ores/powellite"], "gtlcore:molybdenum_vein_essence"],

        [["9x #forge:ores/goethite",
            "6x #forge:ores/yellow_limonite",
            "6x #forge:ores/hematite",
            "3x #forge:ores/gold"], "gtlcore:banded_iron_vein_essence"],

        [["12x #forge:ores/quartzite",
            "8x #forge:ores/certus_quartz",
            "4x #forge:ores/barite"], "gtlcore:certus_quartz_essence"],

        [["21x #forge:ores/blue_topaz",
            "14x #forge:ores/topaz",
            "14x #forge:ores/chalcocite",
            "7x #forge:ores/bornite"], "gtlcore:topaz_vein_essence"],

        [["24x #forge:ores/nether_quartz",
            "8x #forge:ores/quartzite",
            "5x minecraft:ancient_debris"], "gtlcore:nether_quartz_vein_essence"],

        [["3x #forge:ores/sulfur",
            "2x #forge:ores/pyrite",
            "1x #forge:ores/sphalerite"], "gtlcore:sulfur_vein_essence"]]

    nether_vs.forEach((nether_v) => {
        gtr.incubator("nether_e_" + nether_v[1])
            .notConsumable("32x kubejs:nether_data")
            .itemInputs("gtlcore:essence_seed")
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
            "6x #forge:ores/gold"], "gtlcore:magnetite_vein_end_essence"],

        [["16x #forge:ores/bauxite",
            "8x #forge:ores/ilmenite",
            "8x #forge:ores/aluminium"], "gtlcore:bauxite_vein_end_essence"],

        [["6x #forge:ores/bornite",
            "4x #forge:ores/cooperite",
            "4x #forge:ores/platinum",
            "2x #forge:ores/palladium"], "gtlcore:sheldonite_vein_essence"],

        [["12x #forge:ores/scheelite",
            "8x #forge:ores/tungstate",
            "4x #forge:ores/lithium"], "gtlcore:scheelite_vein_essence"],

        [["18x #forge:ores/pitchblende",
            "12x #forge:ores/uraninite"], "gtlcore:pitchblende_vein_end_essence"],

        [["18x #forge:ores/naquadah",
            "6x #forge:ores/plutonium"], "gtlcore:naquadah_vein_essence"]]

    end_vs.forEach((end_v) => {
        gtr.incubator("end_e_" + end_v[1])
            .notConsumable("64x kubejs:end_data")
            .itemInputs("gtlcore:essence_seed")
            .inputFluids("gtceu:biomass 10000", "gtceu:milk 10000")
            .itemInputs(end_v[0])
            .itemOutputs("64x " + end_v[1])
            .EUt(GTValues.VA[GTValues.HV])
            .duration(12000)
    })

    gtr.macerator("gtlcore:essence")
        .itemInputs("gtlcore:essence_block")
        .itemOutputs("gtlcore:essence")
        .chancedOutput("gtlcore:essence", 5000, 400)
        .chancedOutput("gtlcore:essence", 5000, 200)
        .chancedOutput("gtlcore:essence", 5000, 100)
        .EUt(30)
        .duration(200)

    gtr.mixer("gtlcore:essence_seed")
        .itemInputs("16x #forge:seeds", "gtlcore:essence")
        .inputFluids("gtceu:distilled_water 1000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("16x gtlcore:essence_seed")
        .EUt(120)
        .duration(400)

    gtr.incubator("gtlcore:space_essence")
        .itemInputs("#gtlcore:vein_essence", "ae2:sky_dust", "gtceu:tiny_nether_star_dust")
        .inputFluids("gtceu:biomass 100", "gtceu:sterilized_growth_medium 100")
        .itemOutputs("gtlcore:space_essence")
        .EUt(480)
        .duration(1200)
        .addData("radioactivity", 180)

    gtr.incubator("gtlcore:cow_spawn_egg")
        .itemInputs("4x minecraft:beef", "4x minecraft:bone", "4x minecraft:leather")
        .inputFluids("gtceu:milk 1000")
        .itemOutputs("minecraft:cow_spawn_egg")
        .EUt(480)
        .duration(1200)
        .addData("radioactivity", 120)

    gtr.extractor("gtlcore:milk")
        .itemInputs("minecraft:milk_bucket")
        .itemOutputs("minecraft:bucket")
        .outputFluids("gtceu:milk 1000")
        .EUt(16)
        .duration(60)

    gtr.extractor("gtlcore:milk1")
        .notConsumable("minecraft:cow_spawn_egg")
        .outputFluids("gtceu:milk 100")
        .EUt(30)
        .duration(20)

    const overworld_ores =
        [[["60x gtceu:bentonite_ore",
            "40x gtceu:magnetite_ore",
            "40x gtceu:olivine_ore",
            "20x gtceu:glauconite_sand_ore"], "gtlcore:olivine_vein_essence"],

        [["180x gtceu:almandine_ore",
            "120x gtceu:pyrope_ore",
            "60x gtceu:sapphire_ore",
            "60x gtceu:green_sapphire_ore"], "gtlcore:sapphire_vein_essence"],

        [["60x gtceu:goethite_ore",
            "240x gtceu:yellow_limonite_ore",
            "240x gtceu:hematite_ore",
            "120x gtceu:malachite_ore"], "gtlcore:iron_vein_essence"],

        [["120x gtceu:soapstone_ore",
            "80x gtceu:talc_ore",
            "80x gtceu:glauconite_sand_ore",
            "40x gtceu:pentlandite_ore"], "gtlcore:lubricant_vein_essence"],

        [["60x gtceu:grossular_ore",
            "40x gtceu:spessartine_ore",
            "40x gtceu:pyrolusite_ore",
            "20x gtceu:tantalite_ore"], "gtlcore:manganese_vein_ow_essence"],

        [["250x gtceu:chalcopyrite_ore",
            "10x gtceu:zeolite_ore",
            "10x gtceu:cassiterite_ore",
            "50x gtceu:realgar_ore"], "gtlcore:copper_tin_vein_essence"],

        [["240x gtceu:coal_ore"], "gtlcore:coal_vein_essence"],

        [["40x gtceu:chalcopyrite_ore",
            "160x gtceu:iron_ore",
            "160x gtceu:pyrite_ore",
            "160x gtceu:copper_ore"], "gtlcore:copper_vein_essence"],

        [["240x gtceu:magnetite_ore",
            "160x gtceu:vanadium_magnetite_ore",
            "80x gtceu:gold_ore"], "gtlcore:magnetite_vein_ow_essence"],

        [["120x gtceu:lazurite_ore",
            "80x gtceu:sodalite_ore",
            "80x gtceu:lapis_ore",
            "40x gtceu:calcite_ore"], "gtlcore:lapis_vein_essence"],

        [["120x gtceu:galena_ore",
            "80x gtceu:silver_ore",
            "40x gtceu:lead_ore"], "gtlcore:galena_vein_essence"],

        [["60x gtceu:kyanite_ore",
            "40x gtceu:mica_ore",
            "40x gtceu:bauxite_ore",
            "20x gtceu:pollucite_ore"], "gtlcore:mica_vein_essence"],

        [["320x gtceu:tin_ore",
            "160x gtceu:cassiterite_ore"], "gtlcore:cassiterite_vein_essence"],

        [["120x gtceu:red_garnet_ore",
            "80x gtceu:yellow_garnet_ore",
            "80x gtceu:amethyst_ore",
            "40x gtceu:opal_ore"], "gtlcore:garnet_vein_essence"],

        [["240x gtceu:basaltic_mineral_sand_ore",
            "160x gtceu:granitic_mineral_sand_ore",
            "160x gtceu:fullers_earth_ore",
            "80x gtceu:gypsum_ore"], "gtlcore:mineral_sand_vein_essence"],

        [["150x gtceu:rock_salt_ore",
            "10x gtceu:salt_ore",
            "50x gtceu:lepidolite_ore",
            "50x gtceu:spodumene_ore"], "gtlcore:salts_vein_essence"],

        [["180x gtceu:redstone_ore",
            "120x gtceu:ruby_ore",
            "60x gtceu:cinnabar_ore"], "gtlcore:redstone_vein_ow_essence"],

        [["120x gtceu:apatite_ore",
            "80x gtceu:tricalcium_phosphate_ore",
            "40x gtceu:pyrochlore_ore"], "gtlcore:apatite_vein_essence"],

        [["240x gtceu:cassiterite_sand_ore",
            "160x gtceu:garnet_sand_ore",
            "160x gtceu:asbestos_ore",
            "80x gtceu:diatomite_ore"], "gtlcore:garnet_tin_vein_essence"],

        [["240x gtceu:oilsands_ore"], "gtlcore:oilsands_vein_essence"],

        [["120x gtceu:graphite_ore",
            "80x gtceu:diamond_ore",
            "40x gtceu:coal_ore"], "gtlcore:diamond_vein_essence"],

        [["120x gtceu:garnierite_ore",
            "80x gtceu:nickel_ore",
            "80x gtceu:cobaltite_ore",
            "40x gtceu:pentlandite_ore"], "gtlcore:nickel_vein_essence"]]

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
            "70x gtceu:netherrack_stibnite_ore"], "gtlcore:tetrahedrite_vein_essence"],

        [["90x gtceu:netherrack_bastnasite_ore",
            "30x gtceu:netherrack_molybdenum_ore",
            "30x gtceu:netherrack_neodymium_ore",
            "30x gtceu:netherrack_monazite_ore"], "gtlcore:monazite_vein_essence"],

        [["180x gtceu:netherrack_redstone_ore",
            "120x gtceu:netherrack_ruby_ore",
            "60x gtceu:netherrack_cinnabar_ore",
            "20x gtceu:netherrack_rubidium_ore"], "gtlcore:redstone_vein_essence"],

        [["120x gtceu:netherrack_saltpeter_ore",
            "80x gtceu:netherrack_diatomite_ore",
            "80x gtceu:netherrack_electrotine_ore",
            "40x gtceu:netherrack_alunite_ore"], "gtlcore:saltpeter_vein_essence"],

        [["90x gtceu:netherrack_beryllium_ore",
            "120x gtceu:netherrack_emerald_ore",
            "20x gtceu:netherrack_celestine_ore"], "gtlcore:beryllium_vein_essence"],

        [["60x gtceu:netherrack_grossular_ore",
            "40x gtceu:netherrack_pyrolusite_ore",
            "20x gtceu:netherrack_tantalite_ore",
            "20x gtceu:netherrack_zircon_ore"], "gtlcore:manganese_vein_essence"],

        [["150x gtceu:netherrack_wulfenite_ore",
            "100x gtceu:netherrack_molybdenite_ore",
            "50x gtceu:netherrack_molybdenum_ore",
            "50x gtceu:netherrack_powellite_ore"], "gtlcore:molybdenum_vein_essence"],

        [["90x gtceu:netherrack_goethite_ore",
            "60x gtceu:netherrack_yellow_limonite_ore",
            "60x gtceu:netherrack_hematite_ore",
            "30x gtceu:netherrack_gold_ore"], "gtlcore:banded_iron_vein_essence"],

        [["120x gtceu:netherrack_quartzite_ore",
            "80x gtceu:netherrack_certus_quartz_ore",
            "40x gtceu:netherrack_barite_ore"], "gtlcore:certus_quartz_essence"],

        [["210x gtceu:netherrack_blue_topaz_ore",
            "140x gtceu:netherrack_topaz_ore",
            "140x gtceu:netherrack_chalcocite_ore",
            "70x gtceu:netherrack_bornite_ore"], "gtlcore:topaz_vein_essence"],

        [["240x gtceu:netherrack_nether_quartz_ore",
            "80x gtceu:netherrack_quartzite_ore",
            "50x minecraft:ancient_debris"], "gtlcore:nether_quartz_vein_essence"],

        [["300x gtceu:netherrack_sulfur_ore",
            "200x gtceu:netherrack_pyrite_ore",
            "100x gtceu:netherrack_sphalerite_ore",
            "20x gtceu:netherrack_indium_ore"], "gtlcore:sulfur_vein_essence"]]

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
            "60x gtceu:endstone_gold_ore"], "gtlcore:magnetite_vein_end_essence"],

        [["160x gtceu:endstone_bauxite_ore",
            "80x gtceu:endstone_ilmenite_ore",
            "80x gtceu:endstone_aluminium_ore",
            "30x gtceu:endstone_titanium_ore"], "gtlcore:bauxite_vein_end_essence"],

        [["60x gtceu:endstone_bornite_ore",
            "40x gtceu:endstone_cooperite_ore",
            "40x gtceu:endstone_platinum_ore",
            "20x gtceu:endstone_palladium_ore"], "gtlcore:sheldonite_vein_essence"],

        [["120x gtceu:endstone_scheelite_ore",
            "80x gtceu:endstone_tungstate_ore",
            "40x gtceu:endstone_lithium_ore",
            "20x gtceu:endstone_tellurium_ore"], "gtlcore:scheelite_vein_essence"],

        [["180x gtceu:endstone_pitchblende_ore",
            "120x gtceu:endstone_uraninite_ore",
            "30x gtceu:endstone_tungsten_ore"], "gtlcore:pitchblende_vein_end_essence"],

        [["180x gtceu:endstone_naquadah_ore",
            "80x gtceu:endstone_enriched_naquadah_ore",
            "60x gtceu:endstone_plutonium_ore",
            "40x gtceu:endstone_trinium_compound_ore"], "gtlcore:naquadah_vein_essence"]]

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
            "20x gtceu:glauconite_sand_ore"], 1],

        [["180x gtceu:almandine_ore",
            "120x gtceu:pyrope_ore",
            "60x gtceu:sapphire_ore",
            "60x gtceu:green_sapphire_ore",
            "70x gtceu:stibnite_ore",
            "120x gtceu:uraninite_ore"], 2],

        [["90x gtceu:bastnasite_ore",
            "30x gtceu:molybdenum_ore",
            "60x gtceu:goethite_ore",
            "240x gtceu:yellow_limonite_ore",
            "240x gtceu:hematite_ore",
            "120x gtceu:malachite_ore"], 3],

        [["120x gtceu:soapstone_ore",
            "80x gtceu:talc_ore",
            "80x gtceu:glauconite_sand_ore",
            "40x gtceu:pentlandite_ore",
            "30x gtceu:neodymium_ore",
            "60x gtceu:monazite_ore"], 4],

        [["180x gtceu:redstone_ore",
            "120x gtceu:ruby_ore",
            "60x gtceu:grossular_ore",
            "40x gtceu:spessartine_ore",
            "40x gtceu:ostrum_ore",
            "20x gtceu:tantalite_ore"], 5],

        [["250x gtceu:chalcopyrite_ore",
            "10x gtceu:zeolite_ore",
            "10x gtceu:cassiterite_ore",
            "50x gtceu:realgar_ore",
            "60x gtceu:cinnabar_ore",
            "80x ae2:sky_stone_block"], 6],

        [["120x gtceu:saltpeter_ore",
            "80x gtceu:diatomite_ore",
            "80x gtceu:electrotine_ore",
            "40x gtceu:alunite_ore",
            "240x gtceu:coal_ore",
            "40x gtceu:rubidium_ore"], 7],

        [["90x gtceu:beryllium_ore",
            "120x gtceu:emerald_ore",
            "40x gtceu:chalcopyrite_ore",
            "160x gtceu:iron_ore",
            "160x gtceu:pyrite_ore",
            "160x gtceu:copper_ore"], 8],

        [["60x gtceu:grossular_ore",
            "40x gtceu:pyrolusite_ore",
            "20x gtceu:tantalite_ore",
            "240x gtceu:magnetite_ore",
            "160x gtceu:vanadium_magnetite_ore",
            "80x gtceu:gold_ore"], 9],

        [["120x gtceu:lazurite_ore",
            "80x gtceu:sodalite_ore",
            "80x gtceu:lapis_ore",
            "40x gtceu:calcite_ore",
            "150x gtceu:wulfenite_ore",
            "30x gtceu:calorite_ore"], 10],

        [["120x gtceu:galena_ore",
            "80x gtceu:silver_ore",
            "40x gtceu:lead_ore",
            "100x gtceu:molybdenite_ore",
            "50x gtceu:molybdenum_ore",
            "50x gtceu:powellite_ore"], 11],

        [["140x gtceu:zircon_ore",
            "60x gtceu:yellow_limonite_ore",
            "60x gtceu:kyanite_ore",
            "40x gtceu:mica_ore",
            "40x gtceu:bauxite_ore",
            "20x gtceu:pollucite_ore"], 12],

        [["60x gtceu:desh_ore",
            "80x gtceu:certus_quartz_ore",
            "90x gtceu:goethite_ore",
            "160x gtceu:cassiterite_ore",
            "60x gtceu:hematite_ore",
            "30x gtceu:gold_ore"], 13],

        [["40x gtceu:barite_ore",
            "120x gtceu:red_garnet_ore",
            "80x gtceu:yellow_garnet_ore",
            "80x gtceu:amethyst_ore",
            "40x gtceu:opal_ore",
            "20x gtceu:alien_algae_ore"], 14],

        [["210x gtceu:blue_topaz_ore",
            "140x gtceu:topaz_ore",
            "240x gtceu:basaltic_mineral_sand_ore",
            "160x gtceu:granitic_mineral_sand_ore",
            "160x gtceu:fullers_earth_ore",
            "80x gtceu:gypsum_ore"], 15],

        [["150x gtceu:rock_salt_ore",
            "10x gtceu:salt_ore",
            "50x gtceu:lepidolite_ore",
            "50x gtceu:spodumene_ore",
            "140x gtceu:chalcocite_ore",
            "70x gtceu:bornite_ore"], 16],

        [["180x gtceu:redstone_ore",
            "120x gtceu:ruby_ore",
            "60x gtceu:cinnabar_ore",
            "240x gtceu:nether_quartz_ore",
            "80x gtceu:quartzite_ore",
            "50x minecraft:ancient_debris"], 17],

        [["120x gtceu:apatite_ore",
            "80x gtceu:tricalcium_phosphate_ore",
            "40x gtceu:pyrochlore_ore",
            "300x gtceu:sulfur_ore",
            "200x gtceu:pyrite_ore",
            "100x gtceu:sphalerite_ore"], 18],

        [["180x gtceu:magnetite_ore",
            "120x gtceu:vanadium_magnetite_ore",
            "240x gtceu:cassiterite_sand_ore",
            "160x gtceu:garnet_sand_ore",
            "160x gtceu:asbestos_ore",
            "80x gtceu:diatomite_ore"], 19],

        [["240x gtceu:oilsands_ore",
            "60x gtceu:gold_ore",
            "80x gtceu:infused_gold_ore",
            "160x gtceu:bauxite_ore",
            "80x gtceu:ilmenite_ore",
            "80x gtceu:aluminium_ore"], 20],

        [["60x gtceu:bornite_ore",
            "40x gtceu:cooperite_ore",
            "120x gtceu:graphite_ore",
            "80x gtceu:diamond_ore",
            "40x gtceu:coal_ore",
            "40x gtceu:titanium_ore"], 21],

        [["120x gtceu:garnierite_ore",
            "80x gtceu:nickel_ore",
            "80x gtceu:cobaltite_ore",
            "40x gtceu:pentlandite_ore",
            "40x gtceu:platinum_ore",
            "20x gtceu:palladium_ore"], 22],

        [["120x gtceu:scheelite_ore",
            "80x gtceu:tungstate_ore",
            "40x gtceu:lithium_ore",
            "20x gtceu:tellurium_ore",
            "30x gtceu:tungsten_ore",
            "180x gtceu:pitchblende_ore"], 23],

        [["180x gtceu:naquadah_ore",
            "120x gtceu:chromite_ore",
            "60x gtceu:plutonium_ore",
            "30x gtceu:enriched_naquadah_ore",
            "90x gtceu:trinium_compound_ore",
            "30x gtceu:indium_ore"], 24]
        ]

    const space_drones = [1, 2, 3, 4, 5, 6]

    space_drones.forEach((space_drone) => {
        space_ores1.forEach((space_ore) => {
            gtr.miner_module("space_ore_1_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(800 / (2 ** space_drone))
        })
    })

    const space_ores2 =
        [[["20x gtceu:jasper_ore",
            "140x gtceu:red_garnet_ore",
            "60x gtceu:topaz_ore",
            "40x gtceu:emerald_ore",
            "40x gtceu:amethyst_ore",
            "20x gtceu:celestine_ore"], 25]
        ]

    space_drones.slice(1).forEach((space_drone) => {
        space_ores2.forEach((space_ore) => {
            gtr.miner_module("space_ore_2_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(800 / (2 ** space_drone))
        })
    })

    const space_ores3 =
        [[["140x gtceu:iron_ore",
            "140x gtceu:tin_ore",
            "60x gtceu:nickel_ore",
            "60x gtceu:uruium_ore",
            "40x gtceu:force_ore",
            "20x gtceu:cobalt_ore"], 26],
        [["120x gtceu:bloodstone_ore",
            "80x gtceu:redstone_ore",
            "120x gtceu:red_garnet_ore",
            "40x gtceu:gravel_ruby_ore",
            "40x gtceu:almandine_ore",
            "40x gtceu:pyrope_ore"], 27]
        ]

    space_drones.slice(2).forEach((space_drone) => {
        space_ores3.forEach((space_ore) => {
            gtr.miner_module("space_ore_3_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(800 / (2 ** space_drone))
        })
    })

    const space_ores4 =
        [[["80x gtceu:naquadah_ore",
            "40x gtceu:adamantine_compounds_ore",
            "60x gtceu:rare_earth_metal_ore",
            "40x gtceu:monazite_ore",
            "40x gtceu:bastnasite_ore",
            "20x gtceu:enriched_naquadah_ore"], 28],
        [["40x gtceu:earth_crystal_ore",
            "40x gtceu:ignis_crystal_ore",
            "80x gtceu:uraninite_ore",
            "40x gtceu:orichalcum_ore",
            "60x gtceu:mithril_ore",
            "80x gtceu:salt_ore"], 29]
        ]

    space_drones.slice(3).forEach((space_drone) => {
        space_ores4.forEach((space_ore) => {
            gtr.miner_module("space_ore_4_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(800 / (2 ** space_drone))
        })
    })

    const space_ores5 =
        [[["80x gtceu:enderium_ore",
            "120x gtceu:sodalite_ore",
            "60x gtceu:celestine_ore",
            "80x gtceu:lapis_ore",
            "60x gtceu:bauxite_ore",
            "40x gtceu:pitchblende_ore"], 30],
        [["40x gtceu:silver_ore",
            "60x gtceu:andesite_platinum_ore",
            "60x gtceu:tartarite_ore",
            "80x gtceu:vibranium_ore",
            "120x gtceu:aluminium_ore",
            "120x gtceu:iron_ore"], 31]
        ]

    space_drones.slice(4).forEach((space_drone) => {
        space_ores5.forEach((space_ore) => {
            gtr.miner_module("space_ore_6_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(800 / (2 ** space_drone))
        })
    })

    const space_ores6 =
        [[["12x gtceu:lazurite_ore",
            "80x gtceu:sapphire_ore",
            "60x gtceu:starmetal_ore",
            "80x gtceu:green_sapphire_ore",
            "120x gtceu:yellow_garnet_ore",
            "80x gtceu:pollucite_ore"], 32]
        ]

    space_drones.slice(5).forEach((space_drone) => {
        space_ores6.forEach((space_ore) => {
            gtr.miner_module("space_ore_7_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("ad_astra:cryo_fuel 10000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.miner_module("space_ore_8_" + space_ore[1] + space_drone)
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_ore[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 6000")
                .itemOutputs(space_ore[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(600 / (2 ** space_drone))
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
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "2_space_fluid_" + space_fluid[1])
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_rp_1 6000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(600 / (2 ** space_drone))
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
            gtr.drilling_module(space_drone + "3_space_fluid_" + space_fluid[1])
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:dense_hydrazine_fuel_mixture 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))


            gtr.drilling_module(space_drone + "5_space_fluid_" + space_fluid[1])
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_cn3h7o3 6000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(600 / (2 ** space_drone))
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
            gtr.drilling_module(space_drone + "6_space_fluid_" + space_fluid[1])
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:rocket_fuel_h8n4c2o4 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(1200 / (2 ** space_drone))

            gtr.drilling_module(space_drone + "7_space_fluid_" + space_fluid[1])
                .notConsumable("16x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("ad_astra:cryo_fuel 6000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(600 / (2 ** space_drone))
        })
    })

    const space_fluid5s = [
        ["gtceu:white_dwarf_mtter 100000", 29],
        ["gtceu:black_dwarf_mtter 100000", 30]]
    space_drones.slice(5).forEach((space_drone) => {
        space_fluid5s.forEach((space_fluid) => {
            gtr.drilling_module(space_drone + "8_space_fluid_" + space_fluid[1])
                .notConsumable("64x gtlcore:space_drone_mk" + space_drone)
                .circuit(space_fluid[1])
                .inputFluids("gtceu:stellar_energy_rocket_fuel 10000")
                .outputFluids(space_fluid[0])
                .EUt(GTValues.VA[GTValues.ZPM] * (4 ** space_drone))
                .duration(48000 / (2 ** space_drone))
        })
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
        ["minecraft:dandelion", "minecraft:dandelion", 8],
        ["minecraft:poppy", "minecraft:poppy", 8],
        ["minecraft:blue_orchid", "minecraft:blue_orchid", 8],
        ["minecraft:allium", "minecraft:allium", 8],
        ["minecraft:azure_bluet", "minecraft:azure_bluet", 8],
        ["minecraft:red_tulip", "minecraft:red_tulip", 8],
        ["minecraft:orange_tulip", "minecraft:orange_tulip", 8],
        ["minecraft:white_tulip", "minecraft:white_tulip", 8],
        ["minecraft:pink_tulip", "minecraft:pink_tulip", 8],
        ["minecraft:oxeye_daisy", "minecraft:oxeye_daisy", 8],
        ["minecraft:lily_of_the_valley", "minecraft:lily_of_the_valley", 8],
        ["minecraft:torchflower", "minecraft:torchflower", 8],
        ["minecraft:wither_rose", "minecraft:wither_rose", 8],
        ["minecraft:spore_blossom", "minecraft:spore_blossom", 8],
        ["minecraft:sunflower", "minecraft:sunflower", 8],
        ["minecraft:lilac", "minecraft:lilac", 8],
        ["minecraft:pink_petals", "minecraft:pink_petals", 8],
        ["minecraft:rose_bush", "minecraft:rose_bush", 8],
        ["minecraft:peony", "minecraft:peony", 8],
        ["minecraft:pitcher_plant", "minecraft:pitcher_plant", 8],
    ]

    trees.forEach((woodType) => {
        gtr.greenhouse(woodType[0])
            .notConsumable(woodType[0])
            .inputFluids("water 1000")
            .itemOutputs(`64x ${woodType[1]}`, `6x ${woodType[0]}`)
            .duration(900)
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
            .duration(300)
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
    gtr.greenhouse("gtlcore:rubber_wood")
        .notConsumable("gtceu:rubber_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x gtceu:rubber_log", "3x gtceu:rubber_sapling", "4x gtceu:sticky_resin")
        .duration(1200)
        .EUt(480)
        .circuit(1)

    gtr.greenhouse("gtlcore:rubber_wood_fertiliser")
        .notConsumable("gtceu:rubber_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x gtceu:rubber_log", "6x gtceu:rubber_sapling", "8x gtceu:sticky_resin")
        .duration(400)
        .EUt(960)
        .circuit(2)

    gtr.greenhouse("gtlcore:barnarda_log")
        .notConsumable("64x kubejs:barnarda_leaves")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("gtceu:unknowwater 1000")
        .itemOutputs("16x kubejs:barnarda_log")
        .duration(600)
        .EUt(30)
        .circuit(1)

    gtr.greenhouse("gtlcore:barnarda_log_fertiliser")
        .notConsumable("64x kubejs:barnarda_leaves")
        .itemInputs("16x gtceu:fertilizer")
        .inputFluids("gtceu:unknowwater 1000")
        .itemOutputs("32x kubejs:barnarda_log")
        .duration(200)
        .EUt(60)
        .circuit(2)

    gtr.incubator("gtlcore:chorus_fruit")
        .notConsumable("64x minecraft:chorus_flower")
        .itemOutputs("64x minecraft:chorus_fruit")
        .inputFluids("gtceu:unknowwater 1000", "gtceu:ender_pearl 100")
        .EUt(120)
        .duration(1200)
        .addData("radioactivity", 230)

    gtr.incubator("gtlcore:echo")
        .notConsumable("64x minecraft:sculk_shrieker")
        .notConsumable("64x minecraft:sculk_sensor")
        .itemInputs("64x minecraft:dirt", "64x minecraft:sculk_vein")
        .itemOutputs("64x minecraft:sculk")
        .inputFluids("gtceu:unknowwater 1000", "gtceu:xpjuice 1000")
        .outputFluids("gtceu:echo_shard 10000")
        .EUt(1920)
        .duration(2400)
        .addData("filter_casing", 3)
        .addData("radioactivity", 380)

    gtr.canner("gtlcore:sculk")
        .itemInputs("minecraft:dirt", "minecraft:sculk_vein")
        .inputFluids("gtceu:xpjuice 10")
        .itemOutputs("minecraft:sculk")
        .EUt(480)
        .duration(600)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:cosmic_neutron_plasma_cell")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("5x gtlcore:extremely_durable_plasma_cell")
        .inputFluids("gtceu:uu_matter 1000000", "gtceu:dense_neutron_plasma 1000")
        .itemOutputs("5x gtlcore:cosmic_neutron_plasma_cell")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .blastFurnaceTemp(28000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:crystalmatrix_plasma")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("avaritia:crystal_matrix")
        .inputFluids("gtceu:uu_matter 1000000", "gtceu:free_proton_gas 20000")
        .outputFluids("gtceu:crystalmatrix_plasma 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .blastFurnaceTemp(28000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:infinity")
        .notConsumable("gtlcore:spacetime_catalyst")
        .inputFluids("gtceu:crystalmatrix_plasma 10000", "gtceu:cosmicneutronium 5000")
        .outputFluids("gtceu:infinity 1000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(32000)

    gtr.stellar_forge("gtlcore:eternity_dust")
        .itemInputs("4x gtlcore:quantum_chromodynamic_charge", "avaritia:eternal_singularity")
        .inputFluids("gtceu:primordialmatter 1000", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:eternity_dust")
        .outputFluids("gtceu:temporalfluid 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:temporalfluid")
        .itemInputs("4x gtlcore:quantum_chromodynamic_charge", "gtlcore:hypercube")
        .inputFluids("gtceu:spacetime 1000", "gtceu:dimensionallytranscendentresidue 100")
        .outputFluids("gtceu:temporalfluid 500", "gtceu:spatialfluid 500")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .addData("SCTier", 3)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:dimensionallytranscendentresidue")
        .inputFluids("gtceu:dimensionallytranscendentcrudecatalyst 100", "gtceu:raw_star_matter_plasma 100")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)
        .blastFurnaceTemp(36000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:spacetime_ingot")
        .notConsumable("64x kubejs:ingot_field_shape")
        .notConsumable("64x gtlcore:spacetimebendingcore")
        .inputFluids("gtceu:spacetime 1000", "gtceu:raw_star_matter_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .itemOutputs("8x gtceu:spacetime_ingot")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(6400)
        .blastFurnaceTemp(62000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:spacetime")
        .notConsumable("gtlcore:spacetime_catalyst")
        .inputFluids("gtceu:infinity 100", "gtceu:hypogen 100")
        .outputFluids("gtceu:spacetime 200", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(36000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:magnetohydrodynamicallyconstrainedstarmatter")
        .notConsumable("gtlcore:eternity_catalyst")
        .itemInputs("gtceu:eternity_nanoswarm")
        .chancedOutput("gtceu:contaminable_eternity_nanoswarm", 5000, 0)
        .inputFluids("gtceu:raw_star_matter_plasma 100000", "gtceu:exciteddtsc 100000")
        .outputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 100000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(1024 * GTValues.VA[GTValues.MAX])
        .duration(6400)
        .blastFurnaceTemp(81000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:dense_neutron_plasma")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("gtlcore:neutron_plasma_containment_cell")
        .inputFluids("gtceu:heavy_quark_degenerate_matter_plasma 10000", "gtceu:periodicium 1000")
        .outputFluids("gtceu:dense_neutron_plasma 10000", "gtceu:dimensionallytranscendentresidue 100")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .blastFurnaceTemp(26000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:eternity")
        .notConsumable("gtlcore:eternity_catalyst")
        .itemInputs("avaritia:eternal_singularity")
        .inputFluids("gtceu:primordialmatter 1000", "gtceu:raw_star_matter_plasma 9000")
        .outputFluids("gtceu:eternity 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(4800)
        .blastFurnaceTemp(56000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:rhugnor")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("64x gtceu:energy_crystal")
        .inputFluids("gtceu:infinity 10000", "gtceu:quantum 10000")
        .outputFluids("gtceu:rhugnor 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(3600)
        .blastFurnaceTemp(36000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:hypogen")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("gtceu:quantumchromodynamically_confined_matter_block")
        .inputFluids("gtceu:rhugnor 10000", "gtceu:dragon_blood 10000")
        .outputFluids("gtceu:hypogen 10000", "gtceu:dimensionallytranscendentresidue 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .blastFurnaceTemp(26000)

    gtr.macerator("gtlcore:spacetime_dust")
        .itemInputs("gtceu:spacetime_ingot")
        .itemOutputs("gtceu:spacetime_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.compressor("gtlcore:spacetime_block")
        .itemInputs("9x gtceu:spacetime_ingot")
        .itemOutputs("gtceu:spacetime_block")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(3000)

    gtr.qft("gtlcore:spacetime_single_wire")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:transcendentmetal_nanoswarm")
        .itemInputs("gtceu:infinity_single_wire")
        .inputFluids("gtceu:spacetime 100", "gtceu:rhugnor 100")
        .itemOutputs("gtceu:spacetime_single_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtlcore:spacetime_double_wire")
        .notConsumable("4x gtceu:spacetime_nanoswarm")
        .notConsumable("4x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_single_wire")
        .inputFluids("gtceu:rhugnor 200")
        .itemOutputs("gtceu:spacetime_double_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.qft("gtlcore:spacetime_quadruple_wire")
        .notConsumable("8x gtceu:spacetime_nanoswarm")
        .notConsumable("8x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_double_wire")
        .inputFluids("gtceu:rhugnor 400")
        .itemOutputs("gtceu:spacetime_quadruple_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.qft("gtlcore:spacetime_octal_wire")
        .notConsumable("16x gtceu:spacetime_nanoswarm")
        .notConsumable("16x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_quadruple_wire")
        .inputFluids("gtceu:rhugnor 800")
        .itemOutputs("gtceu:spacetime_octal_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(3200)

    gtr.qft("gtlcore:spacetime_hex_wire")
        .notConsumable("32x gtceu:spacetime_nanoswarm")
        .notConsumable("32x gtceu:transcendentmetal_nanoswarm")
        .itemInputs("2x gtceu:spacetime_octal_wire")
        .inputFluids("gtceu:rhugnor 1600")
        .itemOutputs("gtceu:spacetime_hex_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(6400)

    const mcsms = [["ingot", 144], ["dust", 144], ["nugget", 16], ["rod", 72], ["plate", 144], ["foil", 36], ["block", 1296], ["frame", 288]]
    mcsms.forEach((mcsm) => {
        gtr.sps_crafting("gtlcore:magnetohydrodynamicallyconstrainedstarmatter" + mcsm[0])
            .itemInputs("gtceu:eternity_" + mcsm[0], "gtlcore:solar_light_splitter")
            .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter " + mcsm[1], "gtceu:dimensionallytranscendentresidue 1000")
            .itemOutputs("gtceu:magnetohydrodynamicallyconstrainedstarmatter_" + mcsm[0])
            .EUt(4 * GTValues.VA[GTValues.MAX])
            .duration(200)
    })

    gtr.sps_crafting("gtlcore:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .itemInputs("gtceu:double_eternity_plate", "gtlcore:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 288", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:double_magnetohydrodynamicallyconstrainedstarmatter_plate")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtlcore:tiny_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemInputs("gtceu:tiny_eternity_dust", "gtlcore:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 16", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:tiny_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.sps_crafting("gtlcore:small_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemInputs("gtceu:small_eternity_dust", "gtlcore:solar_light_splitter")
        .inputFluids("gtceu:mana 10000", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 36", "gtceu:dimensionallytranscendentresidue 1000")
        .itemOutputs("gtceu:small_magnetohydrodynamicallyconstrainedstarmatter_dust")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.assembler("gtlcore:solar_light_splitter")
        .itemInputs("gtceu:laminated_glass", "gtceu:ruby_lens", "gtceu:emerald_lens", "gtceu:sapphire_lens")
        .inputFluids("gtceu:glowstone 576")
        .itemOutputs("gtlcore:solar_light_splitter")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtlcore:atomic_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "2x gtceu:abyssalalloy_plate", "4x gtceu:enriched_naquadah_plate")
        .itemOutputs("2x gtceu:atomic_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:stellar_containment_casing")
        .itemInputs("gtceu:trinium_frame", "16x gtceu:trinium_screw", "gtceu:uv_field_generator", "gtceu:yttrium_barium_cuprate_quadruple_wire", "4x gtceu:naquadah_alloy_rod", "4x gtceu:double_highurabilityompoundteel_plate")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("gtlcore:stellar_containment_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(140)

    gtr.assembler("gtlcore:naquadria_charge")
        .itemInputs("gtceu:black_steel_frame", "4x gtceu:titanium_bolt", "gtceu:hmxexplosive_dust", "gtceu:naquadria_dust", "gtceu:uranium_plate", "gtceu:osmium_bolt", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:thorium_plate")
        .inputFluids("gtceu:glyceryl_trinitrate 1000")
        .itemOutputs("gtlcore:naquadria_charge")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.mixer("gtlcore:eglin_steel_dust")
        .itemInputs("4x gtceu:iron_dust", "1x gtceu:kanthal_dust", "5x gtceu:invar_dust", "1x gtceu:sulfur_dust", "1x gtceu:silicon_dust", "1x gtceu:carbon_dust")
        .itemOutputs("13x gtceu:eglin_steel_dust")
        .EUt(120)
        .duration(600)

    gtr.assembler("gtlcore:antifreeze_heatproof_machine_casing")
        .itemInputs("gtceu:inconel_792_frame", "2x gtceu:double_hsse_plate", "4x gtceu:double_rhodium_plated_palladium_plate")
        .itemOutputs("2x gtlcore:antifreeze_heatproof_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtlcore:pikyonium_machine_casing")
        .itemInputs("gtceu:hastelloy_x_frame", "6x gtceu:pikyonium_plate")
        .itemOutputs("2x gtlcore:pikyonium_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtlcore:oxidation_resistant_hastelloy_n_mechanical_casing")
        .itemInputs("gtceu:hastelloy_n_frame", "6x gtceu:hastelloy_n_plate")
        .itemOutputs("2x gtlcore:oxidation_resistant_hastelloy_n_mechanical_casing")
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

    gtr.stellar_forge("gtlcore:neutron_plasma_containment_cell")
        .inputFluids("gtceu:neutronium 1000", "gtceu:heavy_lepton_mixture 1000")
        .itemInputs("gtlcore:naquadria_charge", "gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:neutron_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:free_proton_gas")
        .itemInputs("gtlcore:naquadria_charge", "gtlcore:contained_high_density_protonic_matter")
        .outputFluids("gtceu:free_proton_gas 10000")
        .itemOutputs("gtlcore:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:enderium_plasma")
        .inputFluids("gtceu:ender_eye 2304", "gtceu:lead 2304", "gtceu:bismuth 2304", "gtceu:platinum 1152", "gtceu:liquid_ender_air 100000")
        .itemInputs("gtlcore:naquadria_charge", "gtlcore:warped_ender_pearl")
        .outputFluids("gtceu:enderium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:adamantium_plasma")
        .inputFluids("gtceu:orichalcum 576", "gtceu:tin 1024", "gtceu:antimony 864", "gtceu:iron 1152", "gtceu:mercury 1000")
        .itemInputs("gtlcore:naquadria_charge", "24x gtceu:bloodstone_dust")
        .outputFluids("gtceu:adamantium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:degenerate_rhenium_plasma")
        .itemInputs("gtlcore:naquadria_charge", "5x gtceu:double_rhenium_plate")
        .outputFluids("gtceu:degenerate_rhenium_plasma 10000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:infuscolium_plasma")
        .inputFluids("gtceu:adamantine 2304", "gtceu:mana 10000")
        .itemInputs("gtlcore:naquadria_charge", "16x minecraft:end_crystal", "16x minecraft:popped_chorus_fruit")
        .outputFluids("gtceu:infuscolium_plasma 2304")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:legendarium_plasma")
        .inputFluids("gtceu:naquadriatictaranium 576", "gtceu:trinium 288", "gtceu:duranium 288", "gtceu:tritanium 288", "gtceu:orichalcum 288", "gtceu:mithril 288", "gtceu:adamantium 288", "gtceu:adamantine 288", "gtceu:vibranium 288")
        .itemInputs("gtlcore:leptonic_charge", "gtlcore:neutron_plasma_containment_cell")
        .outputFluids("gtceu:legendarium_plasma 2304")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:quark_gluon_plasma")
        .itemInputs("gtlcore:leptonic_charge", "10x gtceu:degenerate_rhenium_dust")
        .outputFluids("gtceu:quark_gluon_plasma 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:heavy_quark_degenerate_matter_plasma")
        .inputFluids("gtceu:heavy_quark_enriched_mixture 1152", "gtceu:flerovium 144", "gtceu:oganesson 144", "gtceu:hassium 144", "gtceu:deuterium 1000")
        .itemInputs("gtlcore:leptonic_charge")
        .outputFluids("gtceu:heavy_quark_degenerate_matter_plasma 1152")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:contained_high_density_protonic_matter")
        .itemInputs("gtlcore:leptonic_charge", "gtlcore:time_dilation_containment_unit", "gtlcore:charged_triplet_neutronium_sphere")
        .itemOutputs("gtlcore:contained_high_density_protonic_matter")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:crystalmatrix_plasma")
        .itemInputs("gtlcore:leptonic_charge", "avaritia:crystal_matrix", "16x gtlcore:corporeal_matter")
        .inputFluids("gtceu:free_proton_gas 20000")
        .outputFluids("gtceu:crystalmatrix_plasma 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:starmetal_plasma")
        .itemInputs("gtlcore:leptonic_charge", "10x gtlcore:resonating_gem")
        .inputFluids("gtceu:free_proton_gas 1000", "gtceu:free_electron_gas 1000")
        .outputFluids("gtceu:starmetal_plasma 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:high_energy_quark_gluon_plasma")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "10x gtceu:double_heavy_quark_degenerate_matter_plate")
        .outputFluids("gtceu:high_energy_quark_gluon_plasma 2000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:quantumchromodynamically_confined_matter_plasma")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "20x gtlcore:quantumchromodynamic_protective_plating")
        .outputFluids("gtceu:quantumchromodynamically_confined_matter_plasma 2000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:dense_neutron_plasma")
        .inputFluids("gtceu:periodicium 2736", "gtceu:gluons 6000", "gtceu:heavy_lepton_mixture 6000")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "5x gtceu:neutronium_block", "5x gtceu:heavy_quark_degenerate_matter_block")
        .outputFluids("gtceu:dense_neutron_plasma 6000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:extremely_durable_plasma_cell")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "2x gtlcore:dense_neutron_plasma_cell")
        .itemOutputs("gtlcore:cosmic_neutron_plasma_cell", "gtlcore:extremely_durable_plasma_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:infinity_ingot")
        .inputFluids("gtceu:crystalmatrix 2000", "gtceu:cosmicneutronium 1000")
        .itemInputs("gtlcore:quantum_chromodynamic_charge")
        .itemOutputs("gtceu:hot_infinity_ingot")
        .outputFluids("gtceu:infinity 10")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:contained_reissner_nordstrom_singularity")
        .itemInputs("gtlcore:naquadria_charge", "64x gtlcore:time_dilation_containment_unit", "64x gtlcore:charged_triplet_neutronium_sphere")
        .itemOutputs("64x gtlcore:contained_reissner_nordstrom_singularity")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:contained_kerr_newmann_singularity")
        .itemInputs("gtlcore:leptonic_charge", "64x gtlcore:contained_reissner_nordstrom_singularity")
        .itemOutputs("gtlcore:contained_kerr_newmann_singularity", "63x gtlcore:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:contained_exotic_matter")
        .itemInputs("gtlcore:leptonic_charge", "gtlcore:contained_high_density_protonic_matter", "9x gtceu:tiny_degenerate_rhenium_dust")
        .itemOutputs("gtlcore:contained_exotic_matter")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
        .addData("SCTier", 2)

    gtr.stellar_forge("gtlcore:recursively_folded_negative_space")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "2x gtlcore:macrowormhole_generator", "2x gtlcore:temporal_matter")
        .itemOutputs("gtlcore:recursively_folded_negative_space")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:eigenfolded_kerr_manifold")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "gtlcore:stabilized_wormhole_generator", "gtlcore:recursively_folded_negative_space")
        .itemOutputs("gtlcore:eigenfolded_kerr_manifold")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.stellar_forge("gtlcore:ctc_computational_unit")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "gtlcore:eigenfolded_kerr_manifold", "gtlcore:ctc_computational_unit_container")
        .itemOutputs("gtlcore:ctc_computational_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    const fluids = ["argon", "helium", "nickel", "iron", "nitrogen", "oxygen", "mithril", "orichalcum", "enderium", "adamantium", "infuscolium", "echoite", "vibranium", "taranium_rich_liquid_helium_4", "legendarium", "heavy_quark_degenerate_matter", "starmetal", "quantumchromodynamically_confined_matter", "astraltitanium", "celestialtungsten"]
    fluids.forEach((fluid) => {
        gtr.plasma_condenser("gtlcore:" + fluid + "_condenser")
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

    gtr.plasma_condenser("gtlcore:nickel_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:nickel_plasma 144", "gtceu:liquid_helium 14400")
        .outputFluids("gtceu:helium 14400")
        .itemOutputs("gtceu:nickel_ingot")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(50)

    const ingots = ["mithril", "orichalcum", "enderium", "adamantium", "infuscolium", "echoite", "vibranium", "legendarium", "heavy_quark_degenerate_matter", "starmetal", "quantumchromodynamically_confined_matter"]
    ingots.forEach((ingot) => {
        gtr.plasma_condenser("gtlcore:" + ingot + "_ingot_condenser")
            .notConsumable("kubejs:ingot_field_shape")
            .inputFluids("gtceu:" + ingot + "_plasma 144", "gtceu:liquid_helium 14400")
            .outputFluids("gtceu:helium 14400")
            .itemOutputs("gtceu:hot_" + ingot + "_ingot")
            .EUt(GTValues.VA[GTValues.UHV])
            .duration(60)
    })

    gtr.plasma_condenser("gtlcore:degenerate_rhenium")
        .itemInputs("gtlcore:rhenium_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:liquid_degenerate_rhenium 1000")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:draconiumawakened")
        .itemInputs("gtlcore:draconiumawakened_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:draconiumawakened 1000")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:neutronium_sphere")
        .notConsumable("kubejs:ball_field_shape")
        .inputFluids("gtceu:liquid_helium 32000")
        .outputFluids("gtceu:helium 32000")
        .itemInputs("gtlcore:neutron_plasma_containment_cell")
        .itemOutputs("4x gtlcore:neutronium_sphere", "gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)

    gtr.plasma_condenser("gtlcore:quantumchromodynamic_protective_plating")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:liquid_helium 10000", "gtceu:high_energy_quark_gluon_plasma 100")
        .outputFluids("gtceu:helium 10000")
        .itemOutputs("gtlcore:quantumchromodynamic_protective_plating")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(300)

    gtr.plasma_condenser("gtlcore:cosmicneutronium")
        .itemInputs("gtlcore:cosmic_neutron_plasma_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:cosmicneutronium 1000")
        .itemOutputs("gtlcore:extremely_durable_plasma_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)

    gtr.plasma_condenser("gtlcore:crystalmatrix")
        .itemInputs("gtlcore:crystalmatrix_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:crystalmatrix 1000")
        .itemOutputs("gtlcore:plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1000)

    gtr.plasma_condenser("gtlcore:chaos")
        .itemInputs("gtlcore:chaos_containment_unit")
        .inputFluids("gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:chaos 1000")
        .itemOutputs("gtlcore:time_dilation_containment_unit")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    gtr.plasma_condenser("gtlcore:hassium")
        .inputFluids("gtceu:metastable_hassium_plasma 1000", "gtceu:liquid_helium 100000")
        .outputFluids("gtceu:helium 100000", "gtceu:liquid_metastable_hassium 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)

    gtr.canner("gtlcore:crystalmatrix_plasma_containment_cell")
        .notConsumable("gtceu:enderium_nanoswarm")
        .inputFluids("gtceu:crystalmatrix_plasma 1000")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:crystalmatrix_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.extractor("gtlcore:xpjuice")
        .itemInputs("minecraft:sculk")
        .outputFluids("gtceu:xpjuice 100")
        .EUt(120)
        .duration(20)

    const robots = [["uv", "1", "uhv", "1966080"], ["uhv", "2", "uev", "7864320"], ["uev", "3", "uiv", "31457280"], ["uiv", "4", "uxv", "125829120"], ["uxv", "5", "opv", "503316480"]]

    robots.forEach((robot) => {
        gtr.assembler("gtlcore:precision_circuit_assembly_robot_mk" + robot[1])
            .itemInputs("2x gtceu:" + robot[0] + "_robot_arm", "gtceu:" + robot[0] + "_sensor", "4x #gtceu:circuits/" + robot[2], "gtceu:silver_nanoswarm", "2x gtceu:pikyonium_plate")
            .inputFluids("gtceu:soldering_alloy 1440")
            .itemOutputs("gtlcore:precision_circuit_assembly_robot_mk" + robot[1])
            .EUt(robot[3])
            .duration(400)
    })

    gtr.macerator("gtlcore:draconium_dust")
        .itemInputs("gtlcore:draconium_block_charged")
        .itemOutputs("9x gtlcore:draconium_dust", "gtceu:obsidian_dust", "gtceu:ender_eye_dust", "minecraft:redstone")
        .EUt(1920)
        .duration(400)

    gtr.alloy_smelter("gtlcore:infused_obsidian")
        .itemInputs("gtlcore:ender_obsidian", "gtlcore:draconium_dust")
        .itemOutputs("gtlcore:infused_obsidian")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.sps_crafting("gtlcore:draconium_dust")
        .itemInputs("gtceu:netherrack_dust", "gtceu:endstone_dust")
        .inputFluids("gtceu:mana 1000", "gtceu:dragon_breath 10")
        .itemOutputs("gtlcore:draconium_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)

    gtr.electromagnetic_separator("gtlcore:purified_tengam_dust")
        .itemInputs("gtceu:clean_raw_tengam_dust")
        .itemOutputs("gtceu:purified_tengam_dust")
        .chancedOutput("gtceu:magnetic_neodymium_dust", 1000, 0)
        .chancedOutput("gtceu:magnetic_samarium_dust", 500, 0)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.electromagnetic_separator("gtlcore:raw_tengam_dust")
        .itemInputs("gtceu:pure_jasper_dust")
        .itemOutputs("gtceu:jasper_dust")
        .chancedOutput("gtceu:raw_tengam_dust", 1000, 0)
        .chancedOutput("gtceu:raw_tengam_dust", 500, 0)
        .EUt(24)
        .duration(200)

    gtr.polarizer("gtlcore:attuned_tengam_dust")
        .itemInputs("gtceu:purified_tengam_dust")
        .itemOutputs("gtceu:attuned_tengam_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.polarizer("gtlcore:small_attuned_tengam_dust")
        .itemInputs("gtceu:small_purified_tengam_dust")
        .itemOutputs("gtceu:small_attuned_tengam_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.sps_crafting("gtlcore:attuned_tengam_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .itemInputs("gtceu:attuned_tengam_dust")
        .inputFluids("gtceu:mana 1000")
        .itemOutputs("gtceu:attuned_tengam_ingot")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.ore_washer("gtlcore:clean_raw_tengam_dust")
        .itemInputs("gtceu:raw_tengam_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("gtceu:clean_raw_tengam_dust")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtlcore:attuned_tengam_ingot")
        .itemInputs("gtceu:attuned_tengam_dust", "gtceu:magnetic_samarium_dust")
        .inputFluids("gtceu:infuscolium_plasma 144", "gtceu:nitrogen_plasma 1000")
        .itemOutputs("gtceu:attuned_tengam_ingot")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)

    //bioware
    gtr.circuit_assembler("gtlcore:bioware_circuit_board")
        .itemInputs("32x gtceu:wetware_circuit_board", "8x gtlcore:electricaly_wired_petri_dish", "gtceu:uv_electric_pump", "2x gtceu:luv_sensor", "#gtceu:circuits/luv", "32x gtceu:vanadium_gallium_foil")
        .itemOutputs("32x gtlcore:bioware_circuit_board")
        .inputFluids("gtceu:biohmediumsterilized 1000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.chemical_reactor("gtlcore:bioware_printed_circuit_board")
        .itemInputs("gtlcore:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:iron_iii_chloride 10000")
        .itemOutputs("gtlcore:bioware_printed_circuit_board")
        .EUt(1920)
        .duration(2100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.chemical_reactor("gtlcore:bioware_printed_circuit_board1")
        .itemInputs("gtlcore:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:sodium_persulfate 20000")
        .itemOutputs("gtlcore:bioware_printed_circuit_board")
        .EUt(1920)
        .duration(2100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.fluid_heater("gtlcore:biohmediumsterilized")
        .inputFluids("gtceu:biomediumraw 100")
        .outputFluids("gtceu:biohmediumsterilized 100")
        .EUt(480)
        .duration(400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.incubator("gtlcore:biomediumraw")
        .itemInputs("64x gtceu:stem_cells", "16x gtlcore:tcetieseaweedextract", "gtceu:tritanium_dust")
        .inputFluids("gtceu:raw_growth_medium 1000")
        .outputFluids("gtceu:biomediumraw 1000")
        .EUt(1920)
        .duration(1200)
        .addData("filter_casing", 2)
        .addData("radioactivity", 80)
        .addCondition(new GravityCondition(true))

    gtr.incubator("gtlcore:biomediumraw1")
        .itemInputs("64x gtlcore:biological_cells", "16x gtlcore:tcetieseaweedextract", "gtceu:tritanium_dust")
        .inputFluids("gtceu:raw_growth_medium 10000")
        .outputFluids("gtceu:biomediumraw 10000")
        .EUt(1920)
        .duration(1200)
        .addData("filter_casing", 2)
        .addData("radioactivity", 120)
        .addCondition(new GravityCondition(true))

    gtr.extractor("gtlcore:tcetieseaweedextract")
        .itemInputs("64x gtlcore:tcetiedandelions")
        .itemOutputs("gtlcore:tcetieseaweedextract")
        .EUt(16)
        .duration(200)
        .addCondition(new GravityCondition(false))

    gtr.centrifuge("gtlcore:tcetiedandelions")
        .inputFluids("gtceu:seaweedbroth 1000")
        .itemOutputs("64x gtlcore:tcetiedandelions")
        .EUt(120)
        .duration(200)
        .addCondition(new GravityCondition(false))

    gtr.incubator("gtlcore:seaweedbroth")
        .itemInputs("64x minecraft:kelp", "20x gtceu:alien_algae_dust", "8x gtceu:energium_dust", "gtceu:mithril_dust")
        .inputFluids("gtceu:unknownnutrientagar 50000", "gtceu:methane 50000")
        .outputFluids("gtceu:seaweedbroth 50000")
        .EUt(7680)
        .duration(4800)
        .addData("filter_casing", 2)
        .addData("radioactivity", 80)

    gtr.large_chemical_reactor("gtlcore:unknownnutrientagar")
        .inputFluids("gtceu:unknowwater 4000", "gtceu:phthalic_acid 4000")
        .itemInputs("16x gtceu:salt_dust", "16x gtceu:meat_dust", "16x gtceu:agar_dust")
        .outputFluids("gtceu:unknownnutrientagar 8000")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.incubator("gtlcore:biological_cells")
        .itemInputs("64x gtceu:stem_cells", "gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:mutagen 1000")
        .itemOutputs("64x gtlcore:biological_cells")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .addData("filter_casing", 2)
        .addData("radioactivity", 60)

    gtr.precision_assembler("gtlcore:bioware_boule")
        .itemInputs("gtceu:neutronium_wafer", "16x gtlcore:biological_cells", "gtceu:small_actinium_dust", "gtceu:small_strontium_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:lubricant 1000", "gtceu:nitrogen 10000")
        .itemOutputs("gtlcore:bioware_boule")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.cutter("gtlcore:bioware_chip")
        .itemInputs("gtlcore:bioware_boule")
        .itemOutputs("16x gtlcore:bioware_chip", "8x gtlcore:biological_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_transistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "2x gtceu:germaniumtungstennitride_plate", "2x gtceu:silicon_carbide_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_transistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "8x gtceu:silicon_foil", "4x gtceu:naquadah_foil")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_capacitor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadria_plate", "gtceu:tritanium_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_resistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:lutetium_dust", "gtceu:tritanium_dust")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_diode_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadah_alloy_ring")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtlcore:smd_inductor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.circuit_assembler("gtlcore:bioware_processor")
        .itemInputs("gtlcore:bioware_processing_core",
            "4x gtceu:qbit_cpu_chip",
            "gtceu:highly_advanced_soc",
            "8x gtlcore:smd_capacitor_bioware",
            "8x gtlcore:smd_transistor_bioware",
            "8x gtceu:fine_naquadah_wire")
        .itemOutputs("4x gtlcore:bioware_processor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    const circuit_robots = [1, 2, 3, 4, 5]
    circuit_robots.forEach((circuit_robot) => {
        gtr.circuit_assembly_line("gtlcore:bioware_assembly" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:bioware_printed_circuit_board",
                "2x gtlcore:bioware_processor",
                "16x gtlcore:smd_capacitor_bioware",
                "16x gtlcore:smd_diode_bioware",
                "16x gtlcore:smd_resistor_bioware",
                "16x gtlcore:smd_transistor_bioware",
                "16x gtlcore:smd_inductor_bioware",
                "16x gtceu:fine_naquadah_wire",
                "48x gtceu:ram_chip",
                "16x gtceu:polybenzimidazole_foil",
                "2x gtceu:duranium_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:americium 576", "gtceu:polyethylene 2592", "gtceu:enriched_naquadah 1296")
            .itemOutputs("2x gtlcore:bioware_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 4 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:bioware_computer" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:bioware_printed_circuit_board",
                "2x gtlcore:bioware_assembly",
                "32x gtlcore:smd_capacitor_bioware",
                "32x gtlcore:smd_diode_bioware",
                "32x gtlcore:smd_resistor_bioware",
                "32x gtlcore:smd_transistor_bioware",
                "32x gtlcore:smd_inductor_bioware",
                "32x gtceu:fine_naquadah_wire",
                "64x gtceu:ram_chip",
                "32x gtceu:nor_memory_chip",
                "2x gtceu:uhpic_chip",
                "32x gtceu:polybenzimidazole_foil",
                "2x gtceu:neutronium_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:darmstadtium 576", "gtceu:polybenzimidazole 1296", "gtceu:enriched_naquadah 1296")
            .itemOutputs("gtlcore:bioware_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 4 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:bioware_mainframe" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:neutronium_frame",
                "2x gtlcore:bioware_computer",
                "64x gtlcore:smd_capacitor_bioware",
                "64x gtlcore:smd_diode_bioware",
                "64x gtlcore:smd_resistor_bioware",
                "64x gtlcore:smd_transistor_bioware",
                "64x gtlcore:smd_inductor_bioware",
                "64x gtceu:ram_chip",
                "4x gtceu:uhpic_chip",
                "16x gtceu:ruthenium_trinium_americium_neutronate_double_wire",
                "64x gtceu:polybenzimidazole_foil",
                "gtceu:gravi_star",
                "2x gtceu:mithril_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:darmstadtium 1296", "gtceu:polybenzimidazole 2592", "gtceu:naquadria 1296")
            .itemOutputs("gtlcore:bioware_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 4 / (4 ** circuit_robot))
    })

    //optical
    gtr.mass_fabricator("gtlcore:quasifissioning_plasma")
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

    gtr.centrifuge("gtlcore:flerovium")
        .inputFluids("gtceu:flyb_plasma 1000")
        .outputFluids("gtceu:flerovium 288", "gtceu:ytterbium_178 288")
        .EUt(1920)
        .duration(290)

    gtr.assembler("gtlcore:smd_transistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:nether_star_plate", "2x gtceu:molybdenum_disilicide_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_transistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:tritanium_foil")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_capacitor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "3x gtceu:sodium_seaborgate_dust", "2x gtceu:ender_eye_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_resistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:vanadium_gallium_plate", "2x gtceu:beryllium_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_diode_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "gtceu:quantanium_ring")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtlcore:smd_inductor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)


    gtr.circuit_assembler("gtlcore:optical_processor")
        .itemInputs("gtlcore:optical_processing_core",
            "4x gtlcore:optical_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x gtlcore:smd_capacitor_optical",
            "8x gtlcore:smd_transistor_optical",
            "8x gtceu:fine_dubnium_wire")
        .itemOutputs("4x gtlcore:optical_processor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    circuit_robots.slice(1).forEach((circuit_robot) => {
        gtr.circuit_assembly_line("gtlcore:optical_assembly" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:optical_printed_circuit_board",
                "2x gtlcore:optical_processor",
                "16x gtlcore:smd_capacitor_optical",
                "16x gtlcore:smd_diode_optical",
                "16x gtlcore:smd_resistor_optical",
                "16x gtlcore:smd_transistor_optical",
                "16x gtlcore:smd_inductor_optical",
                "16x gtceu:fine_dubnium_wire",
                "24x gtlcore:optical_ram_chip",
                "8x gtceu:polyetheretherketone_foil",
                "2x gtceu:highurabilityompoundteel_plate")
            .inputFluids("gtceu:duranium 576", "gtceu:polyvinyl_chloride 1296", "gtceu:enriched_naquadah 1296")
            .itemOutputs("2x gtlcore:optical_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 16 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:optical_computer" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:optical_printed_circuit_board",
                "2x gtlcore:optical_assembly",
                "32x gtlcore:smd_capacitor_optical",
                "32x gtlcore:smd_diode_optical",
                "32x gtlcore:smd_resistor_optical",
                "32x gtlcore:smd_transistor_optical",
                "32x gtlcore:smd_inductor_optical",
                "32x gtceu:fine_dubnium_wire",
                "32x gtlcore:optical_ram_chip",
                "64x gtceu:nor_memory_chip",
                "64x gtceu:nand_memory_chip",
                "2x gtlcore:nm_chip",
                "16x gtceu:polyetheretherketone_foil",
                "gtceu:gravi_star",
                "2x gtceu:seaborgium_plate")
            .inputFluids("gtceu:tritanium 576", "gtceu:polyetheretherketone 576", "gtceu:naquadria 1296")
            .itemOutputs("gtlcore:optical_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 16 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:optical_mainframe" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:quantanium_frame",
                "2x gtlcore:optical_computer",
                "64x gtlcore:smd_capacitor_optical",
                "64x gtlcore:smd_diode_optical",
                "64x gtlcore:smd_resistor_optical",
                "64x gtlcore:smd_transistor_optical",
                "64x gtlcore:smd_inductor_optical",
                "64x gtlcore:optical_ram_chip",
                "4x gtlcore:nm_chip",
                "16x gtceu:enderite_double_wire",
                "32x gtceu:polyetheretherketone_foil",
                "2x gtceu:gravi_star",
                "2x gtceu:titansteel_plate")
            .inputFluids("gtceu:tritanium 1296", "gtceu:polyetheretherketone 1296", "gtceu:neutronium 576")
            .itemOutputs("gtlcore:optical_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 16 / (4 ** circuit_robot))
    })

    //exotic
    gtr.assembler("gtlcore:smd_transistor_exotic")
        .itemInputs("gtceu:degenerate_rhenium_plate", "gtceu:dubnium_plate", "2x gtceu:duranium_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_transistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_exotic")
        .itemInputs("gtceu:glowstone_plate", "gtceu:quantum_plate", "2x gtceu:cinobite_foil", "2x gtceu:carbon_nanotubes_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_capacitor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_exotic")
        .itemInputs("4x gtceu:fine_cinobite_wire", "gtceu:quantum_dust", "2x gtceu:indium_tin_barium_titanium_cuprate_foil", "2x gtceu:enderite_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_resistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_exotic")
        .itemInputs("gtceu:enderite_plate", "gtceu:trinium_titanium_plate", "2x gtceu:dubnium_foil", "2x gtceu:quantum_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_diode_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_exotic")
        .itemInputs("8x gtceu:fine_cinobite_wire", "gtceu:adamantium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtlcore:smd_inductor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:exotic_processor")
        .itemInputs("gtlcore:exotic_processing_core",
            "4x gtlcore:exotic_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x gtlcore:smd_capacitor_exotic",
            "8x gtlcore:smd_transistor_exotic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x gtlcore:exotic_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    circuit_robots.slice(2).forEach((circuit_robot) => {
        gtr.circuit_assembly_line("gtlcore:exotic_assembly" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:exotic_printed_circuit_board",
                "2x gtlcore:exotic_processor",
                "16x gtlcore:smd_capacitor_exotic",
                "16x gtlcore:smd_diode_exotic",
                "16x gtlcore:smd_resistor_exotic",
                "16x gtlcore:smd_transistor_exotic",
                "16x gtlcore:smd_inductor_exotic",
                "gtlcore:draconic_core",
                "16x gtceu:fine_cinobite_wire",
                "24x gtlcore:exotic_ram_chip",
                "16x gtceu:polyetheretherketone_foil",
                "2x gtceu:infuscolium_plate")
            .inputFluids("gtceu:tritanium 576", "gtceu:zylon 288", "gtceu:quantanium 288", "gtceu:naquadria 1296")
            .itemOutputs("2x gtlcore:exotic_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 64 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:exotic_computer" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:exotic_printed_circuit_board",
                "2x gtlcore:exotic_assembly",
                "32x gtlcore:smd_capacitor_exotic",
                "32x gtlcore:smd_diode_exotic",
                "32x gtlcore:smd_resistor_exotic",
                "32x gtlcore:smd_transistor_exotic",
                "32x gtlcore:smd_inductor_exotic",
                "32x gtceu:fine_cinobite_wire",
                "32x gtlcore:exotic_ram_chip",
                "64x gtceu:nor_memory_chip",
                "64x gtceu:nor_memory_chip",
                "2x gtlcore:pm_chip",
                "32x gtceu:polyetheretherketone_foil",
                "gtlcore:unstable_star",
                "2x gtceu:adamantine_plate")
            .inputFluids("gtceu:enderium 576", "gtceu:zylon 576", "gtceu:quantanium 576", "gtceu:orichalcum 1296")
            .itemOutputs("gtlcore:exotic_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 64 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:exotic_mainframe" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:adamantium_frame",
                "2x gtlcore:exotic_computer",
                "64x gtlcore:smd_capacitor_exotic",
                "64x gtlcore:smd_diode_exotic",
                "64x gtlcore:smd_resistor_exotic",
                "64x gtlcore:smd_transistor_exotic",
                "64x gtlcore:smd_inductor_exotic",
                "64x gtlcore:exotic_ram_chip",
                "16x gtceu:data_stick",
                "4x gtlcore:pm_chip",
                "16x gtceu:echoite_double_wire",
                "64x gtceu:polyetheretherketone_foil",
                "2x gtlcore:unstable_star",
                "2x gtceu:black_titanium_plate",
                "4x gtceu:double_technetium_plate")
            .inputFluids("gtceu:enderium 1296", "gtceu:zylon 1296", "gtceu:quantanium 1296", "gtceu:seaborgium 1296")
            .itemOutputs("gtlcore:exotic_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 64 / (4 ** circuit_robot))
    })

    //cosmic
    gtr.assembler("gtlcore:smd_transistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:degenerate_rhenium_plate", "gtceu:hassium_plate", "2x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_transistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_capacitor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:graphene_plate", "4x gtceu:taranium_foil", "2x gtceu:polycaprolactam_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_capacitor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:black_titanium_plate", "2x gtceu:superheavy_l_alloy_plate", "2x gtceu:naquadah_alloy_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_resistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:abyssalalloy_plate", "2x gtceu:superheavy_h_alloy_plate", "2x gtceu:niobium_nitride_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_diode_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "gtceu:vibranium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtlcore:smd_inductor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:cosmic_processor")
        .itemInputs("gtlcore:cosmic_processing_core",
            "4x gtlcore:cosmic_ram_chip",
            "gtceu:highly_advanced_soc",
            "16x gtlcore:smd_capacitor_cosmic",
            "16x gtlcore:smd_transistor_cosmic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x gtlcore:cosmic_processor")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    circuit_robots.slice(3).forEach((circuit_robot) => {
        gtr.circuit_assembly_line("gtlcore:cosmic_assembly" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:cosmic_printed_circuit_board",
                "2x gtlcore:cosmic_processor",
                "32x gtlcore:smd_capacitor_cosmic",
                "32x gtlcore:smd_diode_cosmic",
                "32x gtlcore:smd_resistor_cosmic",
                "32x gtlcore:smd_transistor_cosmic",
                "32x gtlcore:smd_inductor_cosmic",
                "gtlcore:wyvern_core",
                "4x gtceu:enderite_single_wire",
                "24x gtlcore:cosmic_ram_chip",
                "16x gtceu:zylon_foil",
                "2x gtceu:cinobite_plate")
            .inputFluids("gtceu:mithril 576", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:enriched_naquadah 576", "gtceu:adamantine 288")
            .itemOutputs("2x gtlcore:cosmic_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 256 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:cosmic_computer" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtlcore:cosmic_printed_circuit_board",
                "2x gtlcore:cosmic_assembly",
                "64x gtlcore:smd_capacitor_cosmic",
                "64x gtlcore:smd_diode_cosmic",
                "64x gtlcore:smd_resistor_cosmic",
                "64x gtlcore:smd_transistor_cosmic",
                "64x gtlcore:smd_inductor_cosmic",
                "8x gtceu:echoite_single_wire",
                "32x gtlcore:cosmic_ram_chip",
                "32x gtlcore:exotic_ram_chip",
                "64x gtceu:nor_memory_chip",
                "2x gtlcore:fm_chip",
                "12x gtceu:fullerene_polymer_matrix_pulp_foil",
                "2x gtlcore:unstable_star",
                "4x gtceu:double_trinium_titanium_plate")
            .inputFluids("gtceu:mithril 1296", "gtceu:fullerene_polymer_matrix_pulp 576", "gtceu:infuscolium 1296")
            .itemOutputs("gtlcore:cosmic_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 256 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtlcore:cosmic_mainframe" + circuit_robot)
            .notConsumable("gtlcore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:vibranium_frame",
                "2x gtlcore:cosmic_computer",
                "64x gtlcore:smd_capacitor_cosmic",
                "64x gtlcore:smd_diode_cosmic",
                "64x gtlcore:smd_resistor_cosmic",
                "64x gtlcore:smd_transistor_cosmic",
                "64x gtlcore:smd_inductor_cosmic",
                "64x gtlcore:cosmic_ram_chip",
                "16x gtceu:data_orb",
                "4x gtlcore:fm_chip",
                "16x gtceu:legendarium_double_wire",
                "64x gtceu:fullerene_polymer_matrix_pulp_foil",
                "4x gtlcore:unstable_star",
                "16x gtlcore:proto_matter",
                "8x gtceu:double_naquadriatictaranium_plate")
            .inputFluids("gtceu:taranium 576", "gtceu:trinium_titanium 1296", "gtceu:fullerene_polymer_matrix_pulp 1296", "gtceu:rareearth 1296")
            .itemOutputs("gtlcore:cosmic_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 256 / (4 ** circuit_robot))
    })

    //supracausal
    gtr.assembler("gtlcore:smd_capacitor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:adamantine_plate")
        .itemOutputs("32x gtlcore:smd_capacitor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_diode_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:vibramantium_plate")
        .itemOutputs("32x gtlcore:smd_diode_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_transistor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:neutronium_plate")
        .itemOutputs("32x gtlcore:smd_transistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_resistor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:fullerene_polymer_matrix_pulp_foil")
        .itemOutputs("32x gtlcore:smd_resistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:smd_inductor_supracausal")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("gtceu:draconium_ring")
        .itemOutputs("32x gtlcore:smd_inductor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:supracausal_processor")
        .itemInputs("gtlcore:supracausal_processing_core", "4x gtlcore:supracausal_ram_chip", "16x gtlcore:cosmic_processing_unit_core", "gtlcore:microwormhole_generator", "gtlcore:manifold_oscillatory_power_cell", "gtceu:crystalmatrix_plate")
        .itemOutputs("2x gtlcore:supracausal_processor")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembly_line("gtlcore:supracausal_assembly")
        .notConsumable("gtlcore:precision_circuit_assembly_robot_mk5")
        .itemInputs("gtlcore:supracausal_printed_circuit_board",
            "2x gtlcore:supracausal_processor",
            "16x gtlcore:smd_capacitor_supracausal",
            "16x gtlcore:smd_diode_supracausal",
            "16x gtlcore:smd_resistor_supracausal",
            "16x gtlcore:smd_transistor_supracausal",
            "16x gtlcore:smd_inductor_supracausal",
            "gtlcore:awakened_core",
            "64x gtceu:fine_heavy_quark_degenerate_matter_wire",
            "16x gtceu:radox_foil",
            "8x gtceu:legendarium_single_wire",
            "8x gtlcore:optical_soc",
            "gtlcore:recursively_folded_negative_space",
            "gtlcore:contained_exotic_matter",
            "16x gtceu:trinium_titanium_plate")
        .inputFluids("gtceu:taranium 432", "gtceu:trinium_titanium 1296", "gtceu:adamantine 576", "gtceu:fullerene_polymer_matrix_pulp 2304")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("gtlcore:supracausal_assembly")
        .duration(200)

    gtr.circuit_assembly_line("gtlcore:supracausal_computer")
        .notConsumable("gtlcore:precision_circuit_assembly_robot_mk5")
        .itemInputs("gtlcore:supracausal_printed_circuit_board",
            "2x gtlcore:supracausal_assembly",
            "32x gtlcore:smd_capacitor_supracausal",
            "32x gtlcore:smd_diode_supracausal",
            "32x gtlcore:smd_resistor_supracausal",
            "32x gtlcore:smd_transistor_supracausal",
            "32x gtlcore:smd_inductor_supracausal",
            "32x gtlcore:supracausal_ram_chip",
            "16x gtceu:data_module",
            "32x gtceu:trinium_titanium_plate",
            "64x gtceu:legendarium_single_wire",
            "16x gtceu:starmetal_plate",
            "gtlcore:nuclear_star",
            "gtlcore:eigenfolded_kerr_manifold",
            "4x gtceu:cosmicneutronium_plate")
        .inputFluids("gtceu:taranium 288", "gtceu:trinium_titanium 1296", "gtceu:adamantine 432", "gtceu:fullerene_polymer_matrix_pulp 864")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("gtlcore:supracausal_computer")
        .duration(200)

    gtr.circuit_assembly_line("gtlcore:supracausal_mainframe")
        .notConsumable("gtlcore:precision_circuit_assembly_robot_mk5")
        .itemInputs("2x gtceu:infinity_frame",
            "2x gtlcore:supracausal_computer",
            "64x gtlcore:smd_capacitor_supracausal",
            "64x gtlcore:smd_diode_supracausal",
            "64x gtlcore:smd_resistor_supracausal",
            "64x gtlcore:smd_transistor_supracausal",
            "64x gtlcore:smd_inductor_supracausal",
            "64x gtceu:radox_plate",
            "64x gtceu:draconiumawakened_double_wire",
            "64x gtlcore:cosmic_fabric",
            "32x gtlcore:cosmic_processing_unit_core",
            "8x gtlcore:ultrashort_pulse_laser",
            "2x gtlcore:nuclear_star",
            "gtlcore:ctc_computational_unit",
            "64x gtceu:quantumchromodynamically_confined_matter_plate")
        .inputFluids("gtceu:taranium 9216", "gtceu:adamantine 9216", "gtceu:fullerene_polymer_matrix_pulp 9216", "gtceu:periodicium 9216")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("gtlcore:supracausal_mainframe")
        .duration(400)

    tiers.forEach((c) => {
        gtr.packer("gtlcore:universal_circuit_" + c[0])
            .itemInputs("#gtceu:circuits/" + c[0])
            .itemOutputs("gtlcore:universal_circuit_" + c[0])
            .EUt(7)
            .duration(2 ** (c[1] + 1))
    })

    tiers.forEach((c) => {
        gtr.suprachronal_assembly_line("gtlcore:suprachronal_circuit_" + c[0])
            .notConsumable("gtlcore:hyperdimensional_drone")
            .itemInputs("gtlcore:timepiece")
            .inputFluids("gtceu:spacetime " + (c[1] + 1), "gtceu:raw_star_matter_plasma " + (c[1] + 1) * 10, "gtceu:uu_matter " + (c[1] + 1) * 100, "gtceu:periodicium " + (c[1] + 1) * 100)
            .itemOutputs("gtlcore:suprachronal_circuit_" + c[0])
            .duration(2 * (c[1] + 1))
            .circuit((c[1] + 1))
            .EUt(GTValues.VA[GTValues.MAX])
            .stationResearch(b => b.researchStack(Registries.getItemStack((c[1] + 1) === 1 ? "gtlcore:supracausal_mainframe" : "gtlcore:suprachronal_circuit_" + tiers[(c[1] + 1) - 2][0]))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(GTValues.VA[GTValues.MAX])
                .CWUt(8192))
    })

    for (let tier = 1; tier < GTValues.MAX; tier++) {
        gtr.assembler("gtlcore:huge_input_hatch_" + GTValues.VN[tier].toLowerCase())
            .itemInputs(GTMachines.FLUID_IMPORT_HATCH[tier].asStack())
            .itemInputs((tier > GTValues.EV ? GTMachines.QUANTUM_TANK[tier].asStack() : GTMachines.SUPER_TANK[tier].asStack()))
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(GTLMachines.HUGE_FLUID_IMPORT_HATCH[tier].asStack())
            .duration(200)
            .EUt(GTValues.VA[tier])

        gtr.assembler("gtlcore:huge_output_hatch_" + GTValues.VN[tier].toLowerCase())
            .itemInputs(GTMachines.FLUID_EXPORT_HATCH[tier].asStack())
            .itemInputs((tier > GTValues.EV ? GTMachines.QUANTUM_TANK[tier].asStack() : GTMachines.SUPER_TANK[tier].asStack()))
            .inputFluids("gtceu:soldering_alloy 144")
            .itemOutputs(GTLMachines.HUGE_FLUID_EXPORT_HATCH[tier].asStack())
            .duration(200)
            .EUt(GTValues.VA[tier])
    }

    gtr.autoclave("gtlcore:unstable_star")
        .itemInputs("gtceu:orichalcum_nanoswarm")
        .itemInputs("gtceu:gravi_star")
        .inputFluids("gtceu:adamantine 288")
        .itemOutputs("gtceu:contaminable_orichalcum_nanoswarm")
        .itemOutputs("gtlcore:unstable_star")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(480)
        .addCondition(new GravityCondition(true))

    gtr.autoclave("gtlcore:nuclear_star")
        .itemInputs("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("gtlcore:unstable_star")
        .itemOutputs("gtceu:contaminable_cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:infinity 288")
        .itemOutputs("gtlcore:nuclear_star")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(480)
        .addCondition(new GravityCondition(true))

    gtr.suprachronal_assembly_line("gtlcore:max_electric_motor")
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
        .itemOutputs("gtlcore:max_electric_motor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_electric_motor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtlcore:max_electric_pump")
        .itemInputs("gtlcore:max_electric_motor",
            "64x gtceu:neutronium_small_fluid_pipe",
            "4x gtceu:transcendentmetal_plate",
            "16x gtceu:transcendentmetal_screw",
            "4x gtceu:double_black_dwarf_mtter_plate",
            "4x gtceu:double_white_dwarf_mtter_plate",
            "gtceu:transcendentmetal_rotor",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_electric_pump")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_electric_pump"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtlcore:max_conveyor_module")
        .itemInputs("2x gtlcore:max_electric_motor",
            "4x gtceu:transcendentmetal_plate",
            "8x gtceu:transcendentmetal_ring",
            "32x gtceu:transcendentmetal_round",
            "8x gtceu:transcendentmetal_screw",
            "8x gtceu:white_dwarf_mtter_plate",
            "8x gtceu:black_dwarf_mtter_plate",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:styrene_butadiene_rubber " + 1152 * (3 + 32), "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_conveyor_module")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_conveyor_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtlcore:max_electric_piston")
        .itemInputs("gtlcore:max_electric_motor",
            "8x gtceu:transcendentmetal_plate",
            "8x gtceu:transcendentmetal_ring",
            "32x gtceu:transcendentmetal_round",
            "8x gtceu:transcendentmetal_rod",
            "2x gtceu:transcendentmetal_gear",
            "4x gtceu:small_transcendentmetal_gear",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_electric_piston")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_electric_piston"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtlcore:max_robot_arm")
        .itemInputs("8x gtceu:long_transcendentmetal_rod",
            "2x gtceu:transcendentmetal_gear",
            "6x gtceu:small_transcendentmetal_gear",
            "4x gtlcore:max_electric_motor",
            "gtlcore:max_electric_piston",
            "#gtceu:circuits/max",
            "2x #gtceu:circuits/opv",
            "4x #gtceu:circuits/uxv",
            "16x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_robot_arm")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_robot_arm"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtlcore:max_emitter")
        .itemInputs("gtceu:infinity_frame",
            "gtlcore:max_electric_motor",
            "8x gtceu:long_transcendentmetal_rod",
            "4x gtlcore:nuclear_star",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:shirabon_foil",
            "64x gtceu:cosmic_foil",
            "32x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_emitter")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_emitter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtlcore:max_sensor")
        .itemInputs("gtceu:infinity_frame",
            "gtlcore:max_electric_motor",
            "8x gtceu:transcendentmetal_plate",
            "4x gtlcore:nuclear_star",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:shirabon_foil",
            "64x gtceu:cosmic_foil",
            "32x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_sensor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_sensor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtlcore:max_field_generator")
        .itemInputs("gtceu:infinity_frame",
            "12x gtceu:chaos_plate",
            "4x gtlcore:nuclear_star",
            "2x gtlcore:max_emitter",
            "2x #gtceu:circuits/max",
            "64x gtceu:fine_white_dwarf_mtter_wire",
            "64x gtceu:fine_black_dwarf_mtter_wire",
            "64x gtceu:fine_shirabon_wire",
            "64x gtceu:fine_cosmic_wire",
            "32x gtceu:cosmicneutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtlcore:max_field_generator")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_field_generator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.assembler_module("gtlcore:space_probe_mk1")
        .itemInputs("gtceu:energy_module",
            "4x gtceu:data_module",
            "2x gtceu:uiv_emitter",
            "2x gtceu:uiv_sensor",
            "gtceu:uiv_field_generator",
            "4x gtceu:adamantium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("gtlcore:space_probe_mk1")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData("SEPMTier", 3)

    gtr.assembler_module("gtlcore:space_probe_mk2")
        .itemInputs("gtceu:energy_cluster",
            "16x gtceu:data_module",
            "2x gtceu:uxv_emitter",
            "2x gtceu:uxv_sensor",
            "gtceu:uxv_field_generator",
            "4x gtceu:vibranium_plate",
            "8x gtceu:celestialtungsten_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("gtlcore:space_probe_mk2")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:space_probe_mk3")
        .itemInputs("gtceu:max_battery",
            "64x gtceu:data_module",
            "2x gtceu:opv_emitter",
            "2x gtceu:opv_sensor",
            "gtceu:opv_field_generator",
            "gtceu:cosmicneutronium_nanoswarm",
            "4x gtceu:draconium_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:mutated_living_solder 2880", "gtceu:lubricant 5760", "gtceu:cosmicneutronium 1296")
        .itemOutputs("gtlcore:space_probe_mk3")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)
        .addData("SEPMTier", 5)

    gtr.assembler_module("gtlcore:space_drone_mk1")
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
        .itemOutputs("gtlcore:space_drone_mk1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .addData("SEPMTier", 1)

    gtr.assembler_module("gtlcore:space_drone_mk2")
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
        .itemOutputs("gtlcore:space_drone_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .addData("SEPMTier", 1)

    gtr.assembler_module("gtlcore:space_drone_mk3")
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
        .itemOutputs("gtlcore:space_drone_mk3")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .addData("SEPMTier", 2)

    gtr.assembler_module("gtlcore:space_drone_mk4")
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
        .itemOutputs("gtlcore:space_drone_mk4")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .addData("SEPMTier", 3)

    gtr.assembler_module("gtlcore:space_drone_mk5")
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
        .itemOutputs("gtlcore:space_drone_mk5")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .addData("SEPMTier", 4)

    gtr.assembler_module("gtlcore:space_drone_mk6")
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
        .itemOutputs("gtlcore:space_drone_mk6")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)
        .addData("SEPMTier", 5)

    function space_probe(material, grade, amount, circuit) {
        gtr.space_probe_surface_reception(material + grade)
            .notConsumable("gtlcore:space_probe_mk" + grade)
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
        ["gtlcore:zero_point_module_fragments", 0.012]
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
    gtr.packer("gtlcore:zero_point_module")
        .itemInputs("64x gtlcore:zero_point_module_fragments")
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

    gtr.gas_collector("gtlcore:void")
        .outputFluids("gtceu:air 10000")
        .EUt(16)
        .circuit(4)
        .duration(200)
        .dimension("kubejs:void")

    gtr.gas_collector("gtlcore:flat")
        .outputFluids("gtceu:air 10000")
        .EUt(16)
        .circuit(5)
        .duration(200)
        .dimension("kubejs:flat")

    gtr.gas_collector("gtlcore:barnarda")
        .outputFluids("gtceu:barnarda_air 10000")
        .EUt(1024)
        .circuit(6)
        .duration(200)
        .dimension("kubejs:barnarda")

    gtr.mixer("gtlcore:aluminium_bronze_dust")
        .itemInputs("gtceu:aluminium_dust", "6x gtceu:bronze_dust")
        .itemOutputs("7x gtceu:aluminium_bronze_dust")
        .EUt(30)
        .circuit(1)
        .duration(400)

    gtr.cosmos_simulation("cosmos_simulation1")
        .itemInputs("gtlcore:quantum_chromodynamic_charge")
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

    gtr.pcb_factory("gtlcore:epoxy_printed_circuit_board")
        .itemInputs("8x gtceu:epoxy_plate", "128x gtceu:electrum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("8x gtceu:epoxy_printed_circuit_board")
        .EUt(120)
        .duration(600)

    gtr.pcb_factory("gtlcore:epoxy_printed_circuit_board1")
        .itemInputs("8x gtceu:epoxy_plate", "128x gtceu:electrum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:sodium_persulfate 2000")
        .itemOutputs("8x gtceu:epoxy_printed_circuit_board")
        .EUt(120)
        .duration(600)

    gtr.pcb_factory("gtlcore:fiber_reinforced_printed_circuit_board")
        .itemInputs("8x gtceu:reinforced_epoxy_resin_plate", "160x gtceu:annealed_copper_foil")
        .inputFluids("gtceu:sulfuric_acid 500", "gtceu:iron_iii_chloride 2000")
        .itemOutputs("8x gtceu:fiber_reinforced_printed_circuit_board")
        .EUt(120)
        .duration(800)

    gtr.pcb_factory("gtlcore:fiber_reinforced_printed_circuit_board1")
        .itemInputs("8x gtceu:reinforced_epoxy_resin_plate", "160x gtceu:annealed_copper_foil")
        .inputFluids("gtceu:sulfuric_acid 500", "gtceu:sodium_persulfate 4000")
        .itemOutputs("8x gtceu:fiber_reinforced_printed_circuit_board")
        .EUt(120)
        .duration(800)

    gtr.pcb_factory("gtlcore:multilayer_fiber_reinforced_printed_circuit_board")
        .itemInputs("16x gtceu:fiber_reinforced_circuit_board", "128x gtceu:platinum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("8x gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .EUt(480)
        .duration(800)

    gtr.pcb_factory("gtlcore:multilayer_fiber_reinforced_printed_circuit_board1")
        .itemInputs("16x gtceu:fiber_reinforced_circuit_board", "128x gtceu:platinum_foil")
        .inputFluids("gtceu:sulfuric_acid 2000", "gtceu:sodium_persulfate 8000")
        .itemOutputs("8x gtceu:multilayer_fiber_reinforced_printed_circuit_board")
        .EUt(480)
        .duration(800)

    gtr.pcb_factory("gtlcore:wetware_printed_circuit_board")
        .itemInputs("gtceu:wetware_circuit_board", "32x gtceu:niobium_titanium_foil")
        .inputFluids("gtceu:sodium_persulfate 1000", "gtceu:iron_iii_chloride 500")
        .itemOutputs("gtceu:wetware_printed_circuit_board")
        .EUt(1920)
        .duration(450)

    gtr.pcb_factory("gtlcore:bioware_printed_circuit_board")
        .itemInputs("gtlcore:bioware_circuit_board", "32x gtceu:vanadium_gallium_foil")
        .inputFluids("gtceu:sodium_persulfate 2000", "gtceu:iron_iii_chloride 1000")
        .itemOutputs("gtlcore:bioware_printed_circuit_board")
        .EUt(7680)
        .duration(525)

    gtr.pcb_factory("gtlcore:optical_circuit_board")
        .itemInputs("gtceu:kevlar_plate", "32x gtceu:rhodium_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:mithril_plasma 100")
        .itemOutputs("gtlcore:optical_circuit_board")
        .EUt(7680 * 4)
        .duration(600)

    gtr.pcb_factory("gtlcore:optical_printed_circuit_board")
        .itemInputs("gtlcore:optical_circuit_board", "32x gtceu:ruthenium_foil")
        .inputFluids("gtceu:sodium_persulfate 4000", "gtceu:iron_iii_chloride 2000")
        .itemOutputs("gtlcore:optical_printed_circuit_board")
        .EUt(7680 * 4)
        .duration(600)

    gtr.pcb_factory("gtlcore:exotic_circuit_board")
        .itemInputs("2x gtceu:kevlar_plate", "32x gtceu:enderium_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:vibranium_plasma 100")
        .itemOutputs("gtlcore:exotic_circuit_board")
        .EUt(7680 * 16)
        .duration(900)

    gtr.pcb_factory("gtlcore:exotic_printed_circuit_board")
        .itemInputs("gtlcore:exotic_circuit_board", "32x gtceu:americium_foil")
        .inputFluids("gtceu:sodium_persulfate 8000", "gtceu:iron_iii_chloride 4000")
        .itemOutputs("gtlcore:exotic_printed_circuit_board")
        .EUt(7680 * 16)
        .duration(900)

    gtr.pcb_factory("gtlcore:cosmic_circuit_board")
        .itemInputs("4x gtceu:kevlar_plate", "32x gtceu:heavy_quark_degenerate_matter_foil")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:metastable_hassium_plasma 100")
        .itemOutputs("gtlcore:cosmic_circuit_board")
        .EUt(7680 * 64)
        .duration(1200)

    gtr.pcb_factory("gtlcore:cosmic_printed_circuit_board")
        .itemInputs("gtlcore:cosmic_circuit_board", "32x gtceu:uruium_foil")
        .inputFluids("gtceu:sodium_persulfate 8000", "gtceu:iron_iii_chloride 4000")
        .itemOutputs("gtlcore:cosmic_printed_circuit_board")
        .EUt(7680 * 64)
        .duration(1200)

    gtr.pcb_factory("gtlcore:supracausal_circuit_board")
        .itemInputs("gtlcore:cosmic_circuit_board", "32x gtceu:echoite_foil")
        .inputFluids("gtceu:dense_neutron_plasma 1000", "gtceu:quantumchromodynamically_confined_matter_plasma 100")
        .itemOutputs("gtlcore:supracausal_circuit_board")
        .EUt(7680 * 256)
        .duration(1500)

    gtr.pcb_factory("gtlcore:supracausal_printed_circuit_board")
        .itemInputs("gtlcore:supracausal_circuit_board", "32x gtceu:legendarium_foil")
        .inputFluids("gtceu:sodium_persulfate 16000", "gtceu:iron_iii_chloride 8000")
        .itemOutputs("gtlcore:supracausal_printed_circuit_board")
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

    gtr.assembler("gtlcore:large_gas_collector")
        .itemInputs("gtceu:mv_gas_collector", "gtceu:hv_gas_collector", "gtceu:ev_gas_collector", "2x gtceu:mv_field_generator", "2x gtceu:hv_field_generator", "2x gtceu:ev_field_generator", "2x #gtceu:circuits/luv", "gtceu:iridium_huge_fluid_pipe", "4x gtceu:double_sterling_silver_plate")
        .itemOutputs("gtlcore:large_gas_collector")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtlcore:large_incubator")
        .itemInputs("gtlcore:incubator", "4x gtceu:luv_field_generator", "4x gtceu:luv_sensor", "4x gtceu:luv_fluid_regulator", "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire", "16x gtceu:laminated_glass")
        .itemOutputs("gtlcore:large_incubator")
        .inputFluids("gtceu:polytetrafluoroethylene 1440")
        .EUt(122880)
        .duration(800)

    gtr.cutter("gtlcore:taranium_wafer")
        .itemInputs("gtlcore:taranium_boule")
        .itemOutputs("64x gtlcore:taranium_wafer", "64x gtlcore:taranium_wafer")
        .EUt(122880)
        .duration(3200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:rutherfordium_neutronium_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_boule")
        .itemOutputs("64x gtlcore:rutherfordium_neutronium_wafer", "32x gtlcore:rutherfordium_neutronium_wafer")
        .EUt(30720)
        .duration(3200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:nm_chip")
        .itemInputs("gtlcore:nm_wafer")
        .itemOutputs("4x gtlcore:nm_chip")
        .EUt(30720)
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:pm_chip")
        .itemInputs("gtlcore:pm_wafer")
        .itemOutputs("4x gtlcore:pm_chip")
        .EUt(122880)
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:fm_chip")
        .itemInputs("gtlcore:fm_wafer")
        .itemOutputs("2x gtlcore:fm_chip")
        .EUt(524288)
        .duration(2700)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:optical_ram_chip")
        .itemInputs("gtlcore:optical_ram_wafer")
        .itemOutputs("32x gtlcore:optical_ram_chip")
        .EUt(122880)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:exotic_ram_chip")
        .itemInputs("gtlcore:exotic_ram_wafer")
        .itemOutputs("32x gtlcore:exotic_ram_chip")
        .EUt(524288)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:cosmic_ram_chip")
        .itemInputs("gtlcore:cosmic_ram_wafer")
        .itemOutputs("32x gtlcore:cosmic_ram_chip")
        .EUt(524288 * 4)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:supracausal_ram_chip")
        .itemInputs("gtlcore:supracausal_ram_wafer")
        .itemOutputs("4x gtlcore:supracausal_ram_chip")
        .EUt(524288 * 16)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtlcore:optical_ram_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_wafer", "gtceu:ram_wafer", "gtlcore:photon_carrying_wafer")
        .itemOutputs("gtlcore:optical_ram_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtlcore:exotic_ram_wafer")
        .itemInputs("gtlcore:optical_ram_wafer", "gtceu:nor_memory_wafer", "gtceu:nand_memory_wafer", "gtceu:amethyst_plate", "gtceu:technetium_plate")
        .itemOutputs("gtlcore:exotic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.forming_press("gtlcore:cosmic_ram_wafer")
        .itemInputs("gtlcore:taranium_wafer", "gtceu:ram_wafer", "gtlcore:prepared_cosmic_soc_wafer")
        .itemOutputs("gtlcore:cosmic_ram_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(550)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.forming_press("gtlcore:supracausal_ram_wafer")
        .itemInputs("gtlcore:cosmic_ram_wafer", "gtlcore:exotic_ram_wafer", "gtlcore:pellet_antimatter", "gtceu:legendarium_foil", "gtceu:double_hikarium_plate")
        .itemOutputs("gtlcore:supracausal_ram_wafer")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(750)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.laser_engraver("gtlcore:ilc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/red")
        .itemOutputs("64x gtceu:ilc_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:ram_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/green")
        .itemOutputs("64x gtceu:ram_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:lpic_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/orange")
        .itemOutputs("64x gtceu:lpic_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:simple_soc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/cyan")
        .itemOutputs("64x gtceu:simple_soc_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:ulpic_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/blue")
        .itemOutputs("64x gtceu:ulpic_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:cpu_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/light_blue")
        .itemOutputs("64x gtceu:cpu_wafer")
        .EUt(122880)
        .duration(13)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:soc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/yellow")
        .itemOutputs("32x gtceu:soc_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:nor_memory_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/pink")
        .itemOutputs("32x gtceu:nor_memory_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:mpic_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/brown")
        .itemOutputs("32x gtceu:mpic_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:nand_memory_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/gray")
        .itemOutputs("32x gtceu:nand_memory_wafer")
        .EUt(122880)
        .duration(50)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:advanced_soc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/purple")
        .itemOutputs("8x gtceu:advanced_soc_wafer")
        .EUt(122880)
        .duration(125)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:highly_advanced_soc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/black")
        .itemOutputs("4x gtceu:highly_advanced_soc_wafer")
        .EUt(122880)
        .duration(225)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_laser_engraver("gtlcore:prepared_cosmic_soc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("gtlcore:lithography_mask")
        .notConsumable("#forge:lenses/yellow")
        .notConsumable("#forge:lenses/lime")
        .notConsumable("#forge:lenses/light_blue")
        .notConsumable("#forge:lenses/cyan")
        .notConsumable("#forge:lenses/purple")
        .notConsumable("#forge:lenses/black")
        .notConsumable("#forge:lenses/blue")
        .inputFluids("gtceu:gamma_rays_photoresist 1000")
        .itemOutputs("gtlcore:prepared_cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4800)
        .CWUt(1024)

    gtr.precision_laser_engraver("gtlcore:high_precision_crystal_soc")
        .itemInputs("gtceu:crystal_soc")
        .notConsumable("gtlcore:lithography_mask")
        .notConsumable("#forge:lenses/yellow")
        .notConsumable("#forge:lenses/lime")
        .notConsumable("#forge:lenses/light_blue")
        .notConsumable("#forge:lenses/cyan")
        .notConsumable("#forge:lenses/purple")
        .notConsumable("#forge:lenses/black")
        .notConsumable("#forge:lenses/blue")
        .inputFluids("gtceu:euv_photoresist 1000")
        .itemOutputs("gtlcore:high_precision_crystal_soc")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)
        .CWUt(256)

    gtr.precision_laser_engraver("gtlcore:nm_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_wafer")
        .notConsumable("gtlcore:lithography_mask")
        .notConsumable("#forge:lenses/blue")
        .notConsumable("#forge:lenses/brown")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/red")
        .notConsumable("gtceu:lime_glass_lens")
        .notConsumable("#forge:lenses/pink")
        .notConsumable("#forge:lenses/gray")
        .inputFluids("gtceu:photoresist 1000")
        .itemOutputs("gtlcore:nm_wafer")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(900)
        .CWUt(128)

    gtr.precision_laser_engraver("gtlcore:pm_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("gtlcore:lithography_mask")
        .notConsumable("#forge:lenses/blue")
        .notConsumable("#forge:lenses/brown")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/red")
        .notConsumable("gtceu:lime_glass_lens")
        .notConsumable("#forge:lenses/pink")
        .notConsumable("#forge:lenses/gray")
        .inputFluids("gtceu:euv_photoresist 1000")
        .itemOutputs("gtlcore:pm_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1800)
        .CWUt(256)

    gtr.precision_laser_engraver("gtlcore:fm_wafer")
        .itemInputs("gtlcore:pm_wafer")
        .notConsumable("gtlcore:grating_lithography_mask")
        .notConsumable("#forge:lenses/blue")
        .notConsumable("#forge:lenses/brown")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/red")
        .notConsumable("gtceu:lime_glass_lens")
        .notConsumable("#forge:lenses/pink")
        .notConsumable("#forge:lenses/gray")
        .inputFluids("gtceu:gamma_rays_photoresist 1000")
        .itemOutputs("gtlcore:fm_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2800)
        .CWUt(512)

    gtr.precision_laser_engraver("gtlcore:raw_photon_carrying_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_wafer")
        .notConsumable("gtlcore:lithography_mask")
        .notConsumable("#forge:lenses/light_gray")
        .notConsumable("#forge:lenses/purple")
        .notConsumable("#forge:lenses/yellow")
        .notConsumable("#forge:lenses/magenta")
        .notConsumable("#forge:lenses/orange")
        .notConsumable("#forge:lenses/light_blue")
        .notConsumable("#forge:lenses/pink")
        .itemOutputs("gtlcore:raw_photon_carrying_wafer")
        .inputFluids("gtceu:photoresist 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .CWUt(128)

    gtr.dimensional_focus_engraving_array("gtlcore:raw_photon_carrying_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_wafer")
        .notConsumable("#forge:lenses/yellow")
        .inputFluids("gtceu:photoresist 100")
        .itemOutputs("gtlcore:raw_photon_carrying_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .CWUt(1)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:raw_photon_carrying_wafer"))
        .dataStack(Registries.getItemStack("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("gtlcore:prepared_cosmic_soc_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/light_blue")
        .inputFluids("gtceu:gamma_rays_photoresist 100")
        .itemOutputs("gtlcore:prepared_cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4800)
        .CWUt(8)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:prepared_cosmic_soc_wafer"))
        .dataStack(Registries.getItemStack("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("gtlcore:high_precision_crystal_soc")
        .itemInputs("gtceu:crystal_soc")
        .notConsumable("#forge:lenses/lime")
        .inputFluids("gtceu:euv_photoresist 100")
        .itemOutputs("gtlcore:high_precision_crystal_soc")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)
        .CWUt(2)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:high_precision_crystal_soc"))
        .dataStack(Registries.getItemStack("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("gtlcore:nm_wafer")
        .itemInputs("gtlcore:rutherfordium_neutronium_wafer")
        .notConsumable("#forge:lenses/blue")
        .inputFluids("gtceu:photoresist 100")
        .itemOutputs("gtlcore:nm_wafer")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(900)
        .CWUt(1)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:nm_wafer"))
        .dataStack(Registries.getItemStack("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("gtlcore:pm_wafer")
        .itemInputs("gtlcore:taranium_wafer")
        .notConsumable("#forge:lenses/magenta")
        .inputFluids("gtceu:euv_photoresist 100")
        .itemOutputs("gtlcore:pm_wafer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1800)
        .CWUt(2)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:pm_wafer"))
        .dataStack(Registries.getItemStack("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400))

    gtr.dimensional_focus_engraving_array("gtlcore:fm_wafer")
        .itemInputs("gtlcore:pm_wafer")
        .notConsumable("#forge:lenses/orange")
        .inputFluids("gtceu:gamma_rays_photoresist 100")
        .itemOutputs("gtlcore:fm_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2700)
        .CWUt(4)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtlcore:fm_wafer"))
        .dataStack(Registries.getItemStack("gtceu:data_module"))
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400))

    gtr.chemical_bath("gtlcore:cosmic_soc_wafer")
        .itemInputs("gtlcore:prepared_cosmic_soc_wafer")
        .inputFluids("gtceu:argon_plasma 1000")
        .itemOutputs("gtlcore:cosmic_soc_wafer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.cutter("gtlcore:cosmic_soc")
        .itemInputs("gtlcore:cosmic_soc_wafer")
        .itemOutputs("8x gtlcore:cosmic_soc")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.stellar_forge("gtlcore:dragon_heart")
        .itemInputs("gtlcore:naquadria_charge", "64x minecraft:dragon_egg", "gtceu:double_draconiumawakened_plate")
        .itemOutputs("gtlcore:dragon_heart")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:chaos_shard")
        .itemInputs("gtlcore:quantum_chromodynamic_charge", "gtlcore:infused_obsidian", "minecraft:bedrock")
        .inputFluids("gtceu:radox 1000")
        .itemOutputs("gtlcore:chaos_shard")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(200)
        .addData("SCTier", 3)

    gtr.mixer("gtlcore:hastelloy_n_dust")
        .itemInputs("2x gtceu:iridium_dust", "4x gtceu:molybdenum_dust", "2x gtceu:chromium_dust", "2x gtceu:titanium_dust", "15x gtceu:nickel_dust")
        .circuit(5)
        .itemOutputs("25x gtceu:hastelloy_n_dust")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.assembler("gtlcore:accelerated_pipeline")
        .itemInputs("gtceu:europium_quadruple_fluid_pipe", "2x gtceu:luv_voltage_coil", "#gtceu:circuits/luv", "gtceu:niobium_nitride_single_cable", "gtceu:copper76_dust", "gtceu:double_neodymium_plate")
        .itemOutputs("gtlcore:accelerated_pipeline")
        .inputFluids("gtceu:soldering_alloy 288")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:lafium_mechanical_casing")
        .itemInputs("gtceu:enriched_naquadah_frame", "6x gtceu:lafium_plate")
        .itemOutputs("2x gtlcore:lafium_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:module_connector")
        .itemInputs("64x gtceu:hv_item_passthrough_hatch", "64x gtceu:hv_fluid_passthrough_hatch", "2x #gtceu:circuits/zpm", "4x gtceu:trinium_single_cable", "16x gtceu:double_manganese_plate", "64x gtceu:double_technetium_plate")
        .itemOutputs("gtlcore:module_connector")
        .inputFluids("gtceu:soldering_alloy 2880")
        .EUt(122880)
        .duration(400)

    gtr.assembler("gtlcore:module_base")
        .itemInputs("gtlcore:high_strength_concrete", "4x gtceu:technetium_plate", "4x gtceu:osmium_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:module_base")
        .EUt(480)
        .duration(400)

    gtr.electric_blast_furnace("gtlcore:fissioned_uranium_235_dust")
        .itemInputs("gtceu:uranium_235_dust", "gtceu:tiny_neutronium_dust")
        .itemOutputs("gtceu:fissioned_uranium_235_dust")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(3860)

    gtr.centrifuge("gtlcore:fissioned_uranium_235_dust")
        .itemInputs("gtceu:fissioned_uranium_235_dust")
        .itemOutputs("gtceu:tin_dust", "gtceu:technetium_dust")
        .EUt(1920)
        .duration(400)

    gtr.chemical_reactor("gtlcore:uranium_sulfate_waste_solution")
        .itemInputs("gtceu:impure_uraninite_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemOutputs("gtceu:uraninite_dust")
        .outputFluids("gtceu:uranium_sulfate_waste_solution 1000")
        .EUt(120)
        .duration(200)

    gtr.centrifuge("gtlcore:uranium_sulfate_waste_solution")
        .inputFluids("gtceu:uranium_sulfate_waste_solution 1000")
        .itemOutputs("gtceu:tiny_lead_dust", "gtceu:tiny_barium_dust", "gtceu:tiny_strontium_dust", "gtceu:tiny_radium_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 1000")
        .EUt(480)
        .duration(500)

    gtr.chemical_reactor("gtlcore:bismuth_tellurite_dust")
        .itemInputs("2x gtceu:bismuth_dust", "3x gtceu:tellurium_dust")
        .itemOutputs("5x gtceu:bismuth_tellurite_dust")
        .EUt(120)
        .duration(760)

    gtr.chemical_reactor("gtlcore:prasiolite_dust")
        .itemInputs("5x gtceu:silicon_dust", "gtceu:iron_dust")
        .inputFluids("gtceu:oxygen 10000")
        .itemOutputs("gtceu:prasiolite_dust")
        .EUt(480)
        .duration(270)

    gtr.mixer("gtlcore:magneto_resonatic_dust")
        .itemInputs("3x gtceu:prasiolite_dust", "6x gtceu:bismuth_tellurite_dust", "1x gtceu:cubic_zirconia_dust", "1x gtceu:magnetic_steel_dust")
        .itemOutputs("9x gtceu:magneto_resonatic_dust")
        .EUt(30)
        .duration(80)
        .addCondition(new GravityCondition(true))

    gtr.chemical_reactor("gtlcore:dibismuthhydroborat_dust")
        .itemInputs("2x gtceu:bismuth_dust", "gtceu:boron_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("4x gtceu:dibismuthhydroborat_dust")
        .EUt(90)
        .duration(590)

    gtr.mixer("gtlcore:circuit_compound_dust")
        .itemInputs("3x gtceu:dibismuthhydroborat_dust", "2x gtceu:bismuth_tellurite_dust", "gtceu:indium_gallium_phosphide_dust")
        .itemOutputs("6x gtceu:circuit_compound_dust")
        .EUt(15)
        .duration(890)

    gtr.forming_press("gtlcore:raw_imprinted_resonatic_circuit_board")
        .itemInputs("4x gtceu:circuit_compound_dust", "gtceu:magneto_resonatic_dust")
        .itemOutputs("gtlcore:raw_imprinted_resonatic_circuit_board")
        .EUt(480)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("gtlcore:imprinted_resonatic_circuit_board")
        .itemInputs("gtlcore:raw_imprinted_resonatic_circuit_board")
        .inputFluids("gtceu:soldering_alloy 432")
        .itemOutputs("gtlcore:imprinted_resonatic_circuit_board")
        .EUt(1920)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_ulv")
        .itemInputs("4x gtceu:tantalum_capacitor", "4x gtceu:resistor", "4x gtceu:inductor", "gtlcore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtceu:vacuum_tube")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_ulv")
        .EUt(30)
        .duration(50)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_lv")
        .itemInputs("4x gtceu:diode", "4x gtceu:capacitor", "4x gtceu:transistor", "gtlcore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_ulv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_lv")
        .EUt(120)
        .duration(90)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_mv")
        .itemInputs("8x gtceu:diode", "8x gtceu:capacitor", "8x gtceu:transistor", "gtlcore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_lv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_mv")
        .EUt(480)
        .duration(150)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_hv")
        .itemInputs("4x gtceu:smd_diode", "4x gtceu:smd_capacitor", "4x gtceu:smd_transistor", "2x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_mv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_hv")
        .EUt(1920)
        .duration(230)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_ev")
        .itemInputs("8x gtceu:smd_diode", "8x gtceu:smd_capacitor", "8x gtceu:smd_transistor", "4x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_hv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_ev")
        .EUt(7680)
        .duration(330)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_iv")
        .itemInputs("4x gtceu:advanced_smd_diode", "4x gtceu:advanced_smd_capacitor", "4x gtceu:advanced_smd_transistor", "4x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_ev")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_iv")
        .EUt(30720)
        .duration(450)

    gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_luv")
        .itemInputs("8x gtceu:advanced_smd_diode", "8x gtceu:advanced_smd_capacitor", "8x gtceu:advanced_smd_transistor", "4x gtlcore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_iv")
        .itemOutputs("4x gtlcore:magneto_resonatic_circuit_luv")
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
        gtr.circuit_assembler("gtlcore:magneto_resonatic_circuit_" + circuit[1])
            .itemInputs("16x gtlcore:smd_diode_" + circuit[0], "16x gtlcore:smd_capacitor_" + circuit[0], "16x gtlcore:smd_transistor_" + circuit[0], "8x gtlcore:imprinted_resonatic_circuit_board", "gtceu:exquisite_magneto_resonatic_gem", "gtlcore:magneto_resonatic_circuit_" + circuit[2])
            .itemOutputs("4x gtlcore:magneto_resonatic_circuit_" + circuit[1])
            .EUt(122880 * (4 ** circuit[3]))
            .duration(570 + (120 + (20 * circuit[3])))
    })

    gtr.electric_blast_furnace("gtlcore:rutherfordium_neutronium_boule")
        .itemInputs("gtceu:neutronium_boule", "4x gtceu:rutherfordium_dust")
        .inputFluids("gtceu:radon 8000")
        .itemOutputs("gtlcore:rutherfordium_neutronium_boule")
        .EUt(30720)
        .duration(21000)
        .blastFurnaceTemp(8100)

    gtr.chemical_reactor("gtlcore:acrylic_acid")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:allyl_chloride 1000", "minecraft:water 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:acrylic_acid 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(120)
        .duration(200)

    gtr.chemical_reactor("gtlcore:ethyl_acrylate")
        .inputFluids("gtceu:acrylic_acid 1000", "gtceu:ethanol 1000", "gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:ethyl_acrylate 1000", "gtceu:diluted_sulfuric_acid 1000")
        .EUt(120)
        .duration(600)

    gtr.large_chemical_reactor("gtlcore:photoresist")
        .inputFluids("gtceu:ethyl_acrylate 1000", "gtceu:styrene 1000", "gtceu:titanium_tetrachloride 100")
        .outputFluids("gtceu:photoresist 1000")
        .EUt(1920)
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:trichloroflerane")
        .notConsumable("gtceu:ferrosilite_dust")
        .itemInputs("gtceu:flerovium_dust")
        .inputFluids("gtceu:hydrochloric_acid 3000")
        .outputFluids("gtceu:trichloroflerane 1000", "gtceu:hydrogen 3000")
        .EUt(7680)
        .duration(150)

    gtr.mixer("gtlcore:euv_photoresist")
        .inputFluids("gtceu:photoresist 1000", "gtceu:polyurethaneresin 1000")
        .itemInputs("31x gtceu:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .outputFluids("gtceu:euv_photoresist")
        .EUt(524288)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.electric_blast_furnace("gtlcore:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .itemInputs("26x gtceu:bisethylenedithiotetraselenafulvalene_dust")
        .inputFluids("gtceu:ammonium_perrhenate 1000")
        .outputFluids("gtceu:ammonia 1000")
        .itemOutputs("31x gtceu:bisethylenedithiotetraselenafulvalene_perrhenate_dust")
        .EUt(120)
        .duration(9840)
        .blastFurnaceTemp(5000)

    gtr.electric_blast_furnace("gtlcore:bisethylenedithiotetraselenafulvalene_dust")
        .itemInputs("28x gtceu:lithiumthiinediselenide_dust", "gtceu:cyclopentadienyl_titanium_trichloride_dust")
        .inputFluids("gtceu:tetrafluoroethylene 1000")
        .itemOutputs("8x gtceu:lithium_fluoride_dust", "26x gtceu:bisethylenedithiotetraselenafulvalene_dust")
        .EUt(120)
        .duration(7680)
        .blastFurnaceTemp(4600)

    gtr.large_chemical_reactor("gtlcore:cyclopentadienyl_titanium_trichloride_dust")
        .inputFluids("gtceu:titanium_tetrachloride 1000", "gtceu:propadiene 2000", "gtceu:acetylene 2000")
        .itemOutputs("23x gtceu:cyclopentadienyl_titanium_trichloride_dust")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .EUt(7680)
        .duration(780)

    gtr.large_chemical_reactor("gtlcore:propadiene")
        .inputFluids("gtceu:butene 1000", "gtceu:propene")
        .outputFluids("gtceu:butane 1000", "gtceu:propadiene 1000")
        .EUt(480)
        .duration(2400)

    gtr.chemical_reactor("gtlcore:lithiumthiinediselenide_dust")
        .inputFluids("gtceu:bromodihydrothiine 1000", "gtceu:butyl_lithium 2000")
        .itemInputs("2x gtceu:selenium_dust")
        .outputFluids("gtceu:bromobutane 2000")
        .itemOutputs("14x gtceu:lithiumthiinediselenide_dust")
        .EUt(30720)
        .duration(290)

    gtr.chemical_reactor("gtlcore:butyl_lithium")
        .itemInputs("gtceu:lithium_dust")
        .inputFluids("gtceu:butane 1000")
        .outputFluids("gtceu:butyl_lithium 1000", "gtceu:hydrogen 1000")
        .EUt(480)
        .duration(150)

    gtr.large_chemical_reactor("gtlcore:bromodihydrothiine")
        .inputFluids("gtceu:ethane 1000", "gtceu:chlorine 1000", "gtceu:dibromoacrolein 1000")
        .itemInputs("14x gtceu:sodium_thiosulfate_dust")
        .outputFluids("gtceu:bromodihydrothiine 1000", "gtceu:hydrogen 1000")
        .itemOutputs("4x gtceu:salt_dust", "14x gtceu:sodium_bisulfate_dust")
        .EUt(7680)
        .duration(400)

    gtr.large_chemical_reactor("gtlcore:dibromoacrolein")
        .inputFluids("gtceu:formic_acid 2000", "minecraft:water 2000", "gtceu:bromine 2000")
        .outputFluids("gtceu:dibromoacrolein 1000", "gtceu:hydrogen 2000")
        .itemOutputs("12x gtceu:sodium_hydroxide_dust")
        .EUt(7680)
        .duration(360)

    gtr.electric_blast_furnace("gtlcore:sodium_thiosulfate_dust")
        .itemInputs("18x gtceu:sodium_hydroxide_dust", "4x gtceu:sulfur_dust")
        .itemOutputs("7x gtceu:sodium_thiosulfate_dust", "6x gtceu:sodium_sulfide_dust")
        .outputFluids("gtceu:steam 3000")
        .EUt(120)
        .duration(210)
        .blastFurnaceTemp(4500)

    gtr.mixer("gtlcore:gamma_rays_photoresist")
        .itemInputs("29x gtceu:borocarbide_dust", "4x gtceu:lanthanum_embedded_fullerene_dust")
        .inputFluids("gtceu:euv_photoresist 1000", "gtceu:trichloroflerane")
        .outputFluids("gtceu:gamma_rays_photoresist 1000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:astatide_solution")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemInputs("1x gtceu:astatine_dust")
        .outputFluids("gtceu:astatide_solution 1000")
        .EUt(1920)
        .duration(200)

    gtr.chemical_reactor("gtlcore:francium_carbide_dust")
        .itemInputs("2x gtceu:francium_dust")
        .inputFluids("gtceu:acetylene 1000")
        .itemOutputs("4x gtceu:francium_carbide_dust")
        .outputFluids("gtceu:hydrogen 2000")
        .EUt(480)
        .duration(260)

    gtr.electric_blast_furnace("gtlcore:boron_carbide_dust")
        .itemInputs("3x gtceu:carbon_dust", "4x gtceu:boron_dust")
        .itemOutputs("7x gtceu:boron_carbide_dust")
        .EUt(120)
        .duration(550)
        .blastFurnaceTemp(4000)

    gtr.chemical_reactor("gtlcore:boron_francium_carbide_dust")
        .itemInputs("8x gtceu:francium_carbide_dust", "7x gtceu:boron_carbide_dust")
        .itemOutputs("15x gtceu:boron_francium_carbide_dust")
        .EUt(7680)
        .duration(900)

    gtr.mixer("gtlcore:mixed_astatide_salts_dust")
        .itemInputs("gtceu:holmium_dust", "gtceu:thulium_dust", "gtceu:copernicium_dust", "gtceu:flerovium_dust")
        .inputFluids("gtceu:astatide_solution 3000", "gtceu:distilled_water 3000")
        .itemOutputs("7x gtceu:mixed_astatide_salts_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 6000")
        .EUt(122880)
        .duration(400)

    gtr.electric_blast_furnace("gtlcore:borocarbide_dust")
        .itemInputs("15x gtceu:boron_francium_carbide_dust", "14x gtceu:mixed_astatide_salts_dust")
        .itemOutputs("29x gtceu:borocarbide_dust")
        .EUt(120)
        .duration(15000)
        .blastFurnaceTemp(11300)

    gtr.mixer("gtlcore:lanthanum_fullerene_mix_dust")
        .itemInputs("gtceu:lanthanum_dust", "gtceu:unfolded_fullerene_dust")
        .itemOutputs("2x gtceu:lanthanum_fullerene_mix_dust")
        .EUt(30720)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.laser_engraver("gtlcore:lanthanum_embedded_fullerene_dust")
        .itemInputs("2x gtceu:lanthanum_fullerene_mix_dust")
        .notConsumable("gtceu:sapphire_lens")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("2x gtceu:lanthanum_embedded_fullerene_dust")
        .outputFluids("gtceu:ammonia 10000")
        .EUt(1966080)
        .duration(320)
        .addDataBool("special", true)

    gtr.large_chemical_reactor("gtlcore:fullerene_doped_nanotubes")
        .itemInputs("gtceu:fullerene_dust")
        .notConsumable("gtceu:rhenium_plate")
        .inputFluids("gtceu:methane 14400", "gtceu:cycloparaphenylene 3600")
        .outputFluids("gtceu:fullerene_doped_nanotubes 18000")
        .EUt(320000)
        .duration(290)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distillery("gtlcore:cyclopentadiene")
        .inputFluids("gtceu:severely_steam_cracked_naphtha 1000")
        .outputFluids("gtceu:cyclopentadiene 150")
        .circuit(12)
        .EUt(30)
        .duration(240)

    gtr.chemical_reactor("gtlcore:dimethylether")
        .notConsumable("gtceu:silicon_dioxide_dust")
        .inputFluids("gtceu:methanol 2000")
        .outputFluids("gtceu:dimethylether 1000", "minecraft:water 1000")
        .EUt(8000)
        .duration(160)

    gtr.chemical_reactor("gtlcore:dimethoxyethane")
        .inputFluids("gtceu:dimethylether 1000", "gtceu:ethylene_oxide 1000")
        .outputFluids("gtceu:dimethoxyethane 1000")
        .EUt(2000)
        .duration(160)

    gtr.chemical_reactor("gtlcore:lithium_cyclopentadienide")
        .inputFluids("gtceu:butyl_lithium 1000", "gtceu:dimethoxyethane 500", "gtceu:cyclopentadiene 1000")
        .outputFluids("gtceu:lithium_cyclopentadienide 1000", "gtceu:butane 1000")
        .EUt(10000)
        .duration(460)

    gtr.large_chemical_reactor("gtlcore:californium_trichloride_dust")
        .notConsumable("gtceu:ferrosilite_dust")
        .itemInputs("gtceu:californium_dust")
        .inputFluids("gtceu:hydrochloric_acid 6000")
        .outputFluids("gtceu:hydrogen 3000")
        .itemOutputs("4x gtceu:californium_trichloride_dust")
        .EUt(7680)
        .duration(150)

    gtr.chemical_reactor("gtlcore:californium_cyclopentadienide")
        .inputFluids("gtceu:lithium_cyclopentadienide 3000")
        .itemInputs("4x gtceu:californium_trichloride_dust")
        .outputFluids("gtceu:californium_cyclopentadienide 1000")
        .EUt(2000000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_bath("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .itemInputs("gtceu:fine_polyetheretherketone_wire")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 18")
        .itemOutputs("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .EUt(100)
        .duration(80)

    gtr.vacuum_freezer("gtlcore:fullerene_polymer_matrix_fine_tubing")
        .itemInputs("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .itemOutputs("gtlcore:fullerene_polymer_matrix_fine_tubing")
        .EUt(500)
        .duration(240)

    gtr.dimensionally_transcendent_mixer("gtlcore:not_found")
        .itemInputs("1x gtceu:carbon_dust", "1x gtceu:phosphorus_dust", "1x gtceu:sulfur_dust", "1x gtceu:selenium_dust", "1x gtceu:iodine_dust")
        .inputFluids("gtceu:hydrogen 1000", "gtceu:nitrogen 1000", "gtceu:oxygen 1000", "gtceu:fluorine 1000", "gtceu:chlorine 1000", "gtceu:bromine 1000")
        .outputFluids("gtceu:not_found 11000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2200)

    gtr.dimensionally_transcendent_mixer("gtlcore:noble_gas")
        .inputFluids("gtceu:helium 1000", "gtceu:neon 1000", "gtceu:argon 1000", "gtceu:krypton 1000", "gtceu:xenon 1000", "gtceu:radon 1000")
        .outputFluids("gtceu:noble_gas 6000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:metalloid_dust")
        .itemInputs("1x gtceu:boron_dust", "1x gtceu:silicon_dust", "1x gtceu:germanium_dust", "1x gtceu:arsenic_dust", "1x gtceu:antimony_dust", "1x gtceu:tellurium_dust", "1x gtceu:astatine_dust")
        .itemOutputs("7x gtceu:metalloid_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtlcore:poor_dust")
        .itemInputs("1x gtceu:aluminium_dust", "1x gtceu:gallium_dust", "1x gtceu:indium_dust", "1x gtceu:tin_dust", "1x gtceu:thallium_dust", "1x gtceu:lead_dust", "1x gtceu:bismuth_dust", "1x gtceu:polonium_dust")
        .itemOutputs("8x gtceu:poor_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:transition_1_dust")
        .itemInputs("1x gtceu:titanium_dust", "1x gtceu:vanadium_dust", "1x gtceu:chromium_dust", "1x gtceu:manganese_dust", "1x gtceu:iron_dust", "1x gtceu:cobalt_dust", "1x gtceu:nickel_dust", "1x gtceu:copper_dust", "1x gtceu:zinc_dust")
        .itemOutputs("9x gtceu:transition_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtlcore:transition_2_dust")
        .itemInputs("1x gtceu:zirconium_dust", "1x gtceu:niobium_dust", "1x gtceu:molybdenum_dust", "1x gtceu:technetium_dust", "1x gtceu:ruthenium_dust", "1x gtceu:rhodium_dust", "1x gtceu:palladium_dust", "1x gtceu:silver_dust", "1x gtceu:cadmium_dust")
        .itemOutputs("9x gtceu:transition_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtlcore:transition_3_dust")
        .itemInputs("1x gtceu:hafnium_dust", "1x gtceu:tantalum_dust", "1x gtceu:tungsten_dust", "1x gtceu:rhenium_dust", "1x gtceu:osmium_dust", "1x gtceu:iridium_dust", "1x gtceu:platinum_dust", "1x gtceu:gold_dust")
        .inputFluids("gtceu:mercury 1000")
        .itemOutputs("9x gtceu:transition_3_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)

    gtr.dimensionally_transcendent_mixer("gtlcore:alkaline_earth_dust")
        .itemInputs("1x gtceu:beryllium_dust", "1x gtceu:magnesium_dust", "1x gtceu:calcium_dust", "1x gtceu:strontium_dust", "1x gtceu:barium_dust", "1x gtceu:radium_dust")
        .itemOutputs("6x gtceu:alkaline_earth_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:alkaline_dust")
        .itemInputs("1x gtceu:lithium_dust", "1x gtceu:sodium_dust", "1x gtceu:potassium_dust", "1x gtceu:rubidium_dust", "1x gtceu:caesium_dust", "1x gtceu:francium_dust")
        .itemOutputs("6x gtceu:alkaline_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:actinoids_1_dust")
        .itemInputs("1x gtceu:actinium_dust", "1x gtceu:thorium_dust", "1x gtceu:protactinium_dust", "1x gtceu:uranium_dust", "1x gtceu:neptunium_dust", "1x gtceu:plutonium_dust", "1x gtceu:americium_dust", "1x gtceu:curium_dust")
        .itemOutputs("8x gtceu:actinoids_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:actinoids_2_dust")
        .itemInputs("1x gtceu:berkelium_dust", "1x gtceu:californium_dust", "1x gtceu:einsteinium_dust", "1x gtceu:fermium_dust", "1x gtceu:mendelevium_dust", "1x gtceu:nobelium_dust", "1x gtceu:lawrencium_dust")
        .itemOutputs("7x gtceu:actinoids_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.mixer("gtlcore:actinoids_dust")
        .itemInputs("1x gtceu:actinoids_1_dust", "1x gtceu:actinoids_2_dust")
        .itemOutputs("2x gtceu:actinoids_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    gtr.dimensionally_transcendent_mixer("gtlcore:lanthanoids_1_dust")
        .itemInputs("1x gtceu:lanthanum_dust", "1x gtceu:cerium_dust", "1x gtceu:praseodymium_dust", "1x gtceu:neodymium_dust", "1x gtceu:promethium_dust", "1x gtceu:samarium_dust", "1x gtceu:europium_dust", "1x gtceu:gadolinium_dust")
        .itemOutputs("8x gtceu:lanthanoids_1_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:lanthanoids_2_dust")
        .itemInputs("1x gtceu:terbium_dust", "1x gtceu:dysprosium_dust", "1x gtceu:holmium_dust", "1x gtceu:erbium_dust", "1x gtceu:thulium_dust", "1x gtceu:ytterbium_dust", "1x gtceu:lutetium_dust")
        .itemOutputs("7x gtceu:lanthanoids_2_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1400)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentprosaiccatalyst")
        .inputFluids("gtceu:dimensionallytranscendentcrudecatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:oxygen_plasma 1000", "gtceu:argon_plasma 1000", "gtceu:iron_plasma 1000", "gtceu:nickel_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentresplendentcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:mithril_plasma 1000", "gtceu:orichalcum_plasma 1000", "gtceu:enderium_plasma 1000", "gtceu:infuscolium_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentexoticcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:echoite_plasma 1000", "gtceu:adamantium_plasma 1000", "gtceu:vibranium_plasma 1000", "gtceu:starmetal_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1600)

    gtr.dimensionally_transcendent_mixer("gtlcore:dimensionallytranscendentstellarcatalyst")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000", "gtceu:heavy_quark_enriched_mixture 1000", "gtceu:legendarium_plasma 1000", "gtceu:crystalmatrix_plasma 1000", "gtceu:draconiumawakened_plasma 1000", "gtceu:raw_star_matter_plasma 1000")
        .outputFluids("gtceu:dimensionallytranscendentstellarcatalyst 1000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(3200)

    gtr.dimensionally_transcendent_mixer("gtlcore:exciteddtsc")
        .inputFluids("gtceu:dimensionallytranscendentstellarcatalyst 10000", "gtceu:concentration_mixing_hyper_fuel_2 1000", "gtceu:high_energy_quark_gluon_plasma 1000")
        .outputFluids("gtceu:exciteddtsc 10000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(12000)

    gtr.dimensionally_transcendent_mixer("gtlcore:primordialmatter")
        .inputFluids("gtceu:raw_star_matter_plasma 1000", "gtceu:spacetime 1000", "gtceu:spatialfluid 1000", "gtceu:dimensionallytranscendentresidue 1000")
        .outputFluids("gtceu:primordialmatter 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.dimensionally_transcendent_mixer("gtlcore:chaos_plasma")
        .itemInputs("gtlcore:chaos_shard")
        .inputFluids("gtceu:uu_matter 4000", "gtceu:cosmicneutronium 2000", "gtceu:cosmic_mesh_plasma 2000", "gtceu:raw_star_matter_plasma 1000", "gtceu:dimensionallytranscendentexoticcatalyst 1000")
        .outputFluids("gtceu:chaos_plasma 10000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.assembler("gtlcore:luv_solar_panel")
        .itemInputs("4x gtlcore:pm_wafer", "16x gtceu:solar_panel", "16x gtceu:ulv_solar_panel", "16x gtceu:lv_solar_panel", "2x gtceu:cosmicneutronium_quadruple_wire", "4x gtceu:fusion_glass", "4x gtceu:double_hastelloyk_243_plate")
        .itemOutputs("gtceu:luv_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtlcore:zpm_solar_panel")
        .itemInputs("4x gtlcore:fm_wafer", "16x gtceu:mv_solar_panel", "16x gtceu:hv_solar_panel", "16x gtceu:ev_solar_panel", "2x gtceu:cosmicneutronium_hex_wire", "16x gtceu:fusion_glass", "16x gtceu:double_vibranium_plate")
        .itemOutputs("gtceu:zpm_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.assembler("gtlcore:uv_solar_panel")
        .itemInputs("16x gtlcore:fm_wafer", "16x gtceu:iv_solar_panel", "16x gtceu:luv_solar_panel", "16x gtceu:zpm_solar_panel", "2x gtceu:infinity_hex_wire", "64x gtceu:fusion_glass", "64x gtceu:double_neutronium_plate")
        .itemOutputs("gtceu:uv_solar_panel")
        .inputFluids("gtceu:super_mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.neutron_compressor("gtlcore:combined_singularity_0")
        .itemInputs("64x gtceu:lafium_block", "64x gtceu:potin_block")
        .itemOutputs("gtlcore:combined_singularity_0")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_1")
        .itemInputs("64x gtceu:enderite_block", "64x gtceu:indium_gallium_phosphide_block")
        .itemOutputs("gtlcore:combined_singularity_1")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_2")
        .itemInputs("64x gtceu:ruthenium_trinium_americium_neutronate_block", "64x gtceu:yttrium_barium_cuprate_block")
        .itemOutputs("gtlcore:combined_singularity_2")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_3")
        .itemInputs("64x gtceu:hastelloyk_243_block", "64x gtceu:cobalt_brass_block")
        .itemOutputs("gtlcore:combined_singularity_3")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_4")
        .itemInputs("64x gtceu:titansteel_block", "64x gtceu:uranium_rhodium_dinaquadide_block")
        .itemOutputs("gtlcore:combined_singularity_4")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_5")
        .itemInputs("64x gtceu:hastelloy_x_block", "64x gtceu:red_steel_block")
        .itemOutputs("gtlcore:combined_singularity_5")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_6")
        .itemInputs("64x gtceu:highurabilityompoundteel_block", "64x gtceu:germaniumtungstennitride_block")
        .itemOutputs("gtlcore:combined_singularity_6")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_7")
        .itemInputs("64x gtceu:hsse_block", "64x gtceu:watertight_steel_block")
        .itemOutputs("gtlcore:combined_singularity_7")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_8")
        .itemInputs("64x gtceu:pikyonium_block", "64x gtceu:aluminium_bronze_block")
        .itemOutputs("gtlcore:combined_singularity_8")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_9")
        .itemInputs("64x gtceu:abyssalalloy_block", "64x gtceu:soldering_alloy_block")
        .itemOutputs("gtlcore:combined_singularity_9")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_10")
        .itemInputs("64x gtceu:black_titanium_block", "64x gtceu:nickel_zinc_ferrite_block")
        .itemOutputs("gtlcore:combined_singularity_10")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_11")
        .itemInputs("64x gtceu:ultimet_block", "64x gtceu:hsla_steel_block")
        .itemOutputs("gtlcore:combined_singularity_11")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_12")
        .itemInputs("64x gtceu:enriched_naquadah_trinium_europium_duranide_block", "64x gtceu:rtm_alloy_block")
        .itemOutputs("gtlcore:combined_singularity_12")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_13")
        .itemInputs("64x gtceu:blue_steel_block", "64x gtceu:hastelloy_c_276_block")
        .itemOutputs("gtlcore:combined_singularity_13")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_14")
        .itemInputs("64x gtceu:cinobite_block", "64x gtceu:stellite_100_block")
        .itemOutputs("gtlcore:combined_singularity_14")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.neutron_compressor("gtlcore:combined_singularity_15")
        .itemInputs("64x gtceu:maraging_steel_300_block", "64x gtceu:grisium_block")
        .itemOutputs("gtlcore:combined_singularity_15")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("avaritia:eternal_singularity")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("64x gtceu:neutronium_block",
            "gtlcore:combined_singularity_0",
            "gtlcore:combined_singularity_1",
            "gtlcore:combined_singularity_2",
            "gtlcore:combined_singularity_3",
            "gtlcore:combined_singularity_4",
            "gtlcore:combined_singularity_5",
            "gtlcore:combined_singularity_6",
            "gtlcore:combined_singularity_7",
            "gtlcore:combined_singularity_8",
            "gtlcore:combined_singularity_9",
            "gtlcore:combined_singularity_10",
            "gtlcore:combined_singularity_11",
            "gtlcore:combined_singularity_12",
            "gtlcore:combined_singularity_13",
            "gtlcore:combined_singularity_14",
            "gtlcore:combined_singularity_15")
        .inputFluids("gtceu:draconiumawakened 1000", "gtceu:cosmicneutronium 1000", "gtceu:dimensionallytranscendentstellarcatalyst 1000")
        .itemOutputs("avaritia:eternal_singularity")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("avaritia:eternal_singularity_1")
        .notConsumable("gtlcore:eternity_catalyst")
        .itemInputs("64x gtceu:neutronium_block",
            "gtlcore:combined_singularity_0",
            "gtlcore:combined_singularity_1",
            "gtlcore:combined_singularity_2",
            "gtlcore:combined_singularity_3",
            "gtlcore:combined_singularity_4",
            "gtlcore:combined_singularity_5",
            "gtlcore:combined_singularity_6",
            "gtlcore:combined_singularity_7",
            "gtlcore:combined_singularity_8",
            "gtlcore:combined_singularity_9",
            "gtlcore:combined_singularity_10",
            "gtlcore:combined_singularity_11",
            "gtlcore:combined_singularity_12",
            "gtlcore:combined_singularity_13",
            "gtlcore:combined_singularity_14",
            "gtlcore:combined_singularity_15")
        .inputFluids("gtceu:cosmicneutronium 1000", "gtceu:exciteddtec 1000", "gtceu:spatialfluid 1000")
        .itemOutputs("16x avaritia:eternal_singularity")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("gtlcore:spatialfluid")
        .notConsumable("gtlcore:hypercube")
        .notConsumable("gtlcore:quantum_anomaly")
        .itemInputs("16x gtceu:cosmicneutronium_plate")
        .inputFluids("gtceu:temporalfluid 10000", "gtceu:exciteddtsc 10000")
        .outputFluids("gtceu:spatialfluid 10000")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(600)

    gtr.qft("gtlcore:quantum_anomaly")
        .chancedInput("gtceu:draconium_nanoswarm", 100, 0)
        .itemInputs("gtlcore:entangled_singularity")
        .inputFluids("gtceu:duranium 144", "gtceu:exciteddtec 100")
        .chancedOutput("gtlcore:quantum_anomaly", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtlcore:radox_gas")
        .notConsumable("gtlcore:quantum_anomaly")
        .itemInputs("64x kubejs:variation_wood")
        .inputFluids("gtceu:xenoxene 10000", "gtceu:unknowwater 90000", "gtceu:temporalfluid 100")
        .outputFluids("gtceu:radox_gas 100000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtlcore:grade_8_purified_water")
        .circuit(1)
        .inputFluids("minecraft:water 8000")
        .outputFluids("gtceu:grade_8_purified_water 1000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.qft("gtlcore:grade_16_purified_water")
        .circuit(2)
        .inputFluids("minecraft:water 16000")
        .outputFluids("gtceu:grade_16_purified_water 1000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:hypercube_1")
        .itemInputs("16x gtceu:transcendentmetal_rod", "gtlcore:quantum_anomaly")
        .inputFluids("gtceu:exciteddtec 1000", "gtceu:spatialfluid 1000")
        .itemOutputs("64x gtlcore:hypercube")
        .outputFluids("gtceu:dimensionallytranscendentresidue 100")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(6400)
        .blastFurnaceTemp(62000)

    gtr.chemical_reactor("gtlcore:sodium_hypochlorite_dust")
        .circuit(1)
        .itemInputs("6x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemOutputs("3x gtceu:sodium_hypochlorite_dust", "2x gtceu:salt_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(120)
        .duration(80)

    gtr.electrolyzer("gtlcore:sodium_chlorate_dust")
        .itemInputs("9x gtceu:sodium_hypochlorite_dust")
        .itemOutputs("5x gtceu:sodium_chlorate_dust", "4x gtceu:salt_dust")
        .EUt(120)
        .duration(210)

    gtr.dehydrator("gtlcore:phthalic_anhydride_dust")
        .inputFluids("gtceu:phthalic_acid 1000")
        .itemOutputs("15x gtceu:phthalic_anhydride_dust")
        .EUt(480)
        .duration(400)

    gtr.chemical_reactor("gtlcore:ethylanthraquinone")
        .itemInputs("15x gtceu:phthalic_anhydride_dust")
        .inputFluids("gtceu:ethylbenzene 1000")
        .outputFluids("gtceu:ethylanthraquinone 1000", "minecraft:water 1000")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtlcore:ethylanthrahydroquinone")
        .inputFluids("gtceu:ethylanthraquinone 1000", "gtceu:hydrogen 2000")
        .outputFluids("gtceu:ethylanthrahydroquinone 1000")
        .EUt(30)
        .duration(200)

    gtr.chemical_reactor("gtlcore:hydrogen_peroxide")
        .notConsumableFluid("gtceu:anthracene 1000")
        .inputFluids("gtceu:ethylanthrahydroquinone 1000", "gtceu:oxygen 2000")
        .outputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:ethylanthraquinone 1000")
        .EUt(480)
        .duration(600)

    gtr.arc_furnace("gtlcore:anthracene")
        .itemInputs("gtceu:coke_gem")
        .outputFluids("gtceu:anthracene 100")
        .EUt(120)
        .duration(400)

    gtr.chemical_reactor("gtlcore:sodium_perchlorate_dust")
        .inputFluids("gtceu:hydrogen_peroxide 1000")
        .itemInputs("5x gtceu:sodium_chlorate_dust")
        .itemOutputs("6x gtceu:sodium_perchlorate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(120)
        .duration(480)

    gtr.chemical_reactor("gtlcore:silver_chloride_dust")
        .itemInputs("gtceu:silver_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("2x gtceu:silver_chloride_dust")
        .EUt(120)
        .duration(80)

    gtr.chemical_reactor("gtlcore:silver_oxide_dust")
        .notConsumable("gtceu:sodium_hydroxide_dust")
        .itemInputs("4x gtceu:silver_chloride_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:silver_oxide_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 2000")
        .EUt(30)
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:silver_perchlorate_dust")
        .itemInputs("3x gtceu:silver_oxide_dust", "12x gtceu:sodium_perchlorate_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .itemOutputs("12x gtceu:silver_perchlorate_dust", "3x gtceu:sodium_oxide_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 1000")
        .EUt(480)
        .duration(350)

    gtr.chemical_reactor("gtlcore:phenylsodium")
        .itemInputs("2x gtceu:sodium_dust")
        .inputFluids("gtceu:fluoro_benzene 1000")
        .outputFluids("gtceu:phenylsodium 1000")
        .itemOutputs("2x gtceu:sodium_fluoride_dust")
        .EUt(480)
        .duration(210)

    gtr.chemical_reactor("gtlcore:tetraethylammonium_bromide")
        .inputFluids("gtceu:ethylene 4000", "gtceu:ammonia 1000", "gtceu:hydrobromic_acid 1000")
        .outputFluids("gtceu:tetraethylammonium_bromide 1000")
        .EUt(1920)
        .duration(200)

    gtr.chemical_reactor("gtlcore:difluoroaniline")
        .itemInputs("8x gtceu:sodium_fluoride_dust")
        .inputFluids("gtceu:hydrogen 1000", "gtceu:dichlorobenzene 1000", "gtceu:nitrogen 1000")
        .outputFluids("gtceu:difluoroaniline 2000")
        .itemOutputs("8x gtceu:salt_dust")
        .EUt(7680)
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:succinaldehyde")
        .itemInputs("14x gtceu:succinic_acid_dust", "4x gtceu:lithium_aluminium_hydride_dust")
        .outputFluids("gtceu:succinaldehyde 1000", "minecraft:water 2000")
        .itemOutputs("1x gtceu:lithium_dust", "1x gtceu:aluminium_dust")
        .EUt(1920)
        .duration(600)

    gtr.chemical_reactor("gtlcore:n_difluorophenylpyrrole")
        .notConsumable("gtceu:phosphorus_pentoxide_dust")
        .inputFluids("gtceu:succinaldehyde 1000", "gtceu:difluoroaniline 1000")
        .outputFluids("gtceu:n_difluorophenylpyrrole 1000", "minecraft:water 2000")
        .EUt(480)
        .duration(180)

    gtr.large_chemical_reactor("gtlcore:photopolymer")
        .itemInputs("69x gtceu:cyclopentadienyl_titanium_trichloride_dust", "42x gtceu:ice_dust", "12x gtceu:silver_perchlorate_dust")
        .inputFluids("gtceu:phenylsodium 8000", "gtceu:silver_tetrafluoroborate 2000", "gtceu:hydrochloric_acid 2000", "gtceu:n_difluorophenylpyrrole 6000", "gtceu:tetraethylammonium_bromide 2000")
        .itemOutputs("8x gtceu:silver_chloride_dust", "4x gtceu:sodium_bromide_dust")
        .outputFluids("gtceu:salt_water 6000", "gtceu:photopolymer 8000")
        .EUt(30720)
        .duration(340)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.autoclave("gtlcore:hassium_seed_crystal")
        .itemInputs("gtceu:tiny_hassium_dust")
        .inputFluids("gtceu:nitrogen 10000")
        .itemOutputs("gtlcore:hassium_seed_crystal")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:manipulator")
        .itemInputs("2x gtceu:neutron_reflector", "4x #gtceu:circuits/uhv", "gtceu:uev_robot_arm", "32x gtceu:inconel_792_bolt", "16x gtceu:diamond_screw", "4x gtceu:double_iridium_plate", "8x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("gtlcore:manipulator")
        .EUt(30720)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:rhodium_rhenium_naquadah_catalyst_dust")
        .itemInputs("gtceu:rhenium_dust", "gtceu:rhodium_dust", "gtceu:naquadah_dust")
        .itemOutputs("gtceu:rhodium_rhenium_naquadah_catalyst_dust")
        .EUt(84500)
        .duration(260)

    gtr.chemical_reactor("gtlcore:iodine_monochloride")
        .itemInputs("gtceu:iodine_dust")
        .inputFluids("gtceu:chlorine 1000")
        .outputFluids("gtceu:iodine_monochloride 1000")
        .EUt(120)
        .duration(260)

    gtr.chemical_reactor("gtlcore:dimethylnaphthalene")
        .inputFluids("gtceu:methanol 2000", "gtceu:naphthalene 1000")
        .outputFluids("gtceu:dimethylnaphthalene 1000", "minecraft:water 2000")
        .EUt(120)
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:acetylating_reagent")
        .itemInputs("6x gtceu:magnesium_chloride_dust")
        .inputFluids("gtceu:bromine 2000", "gtceu:trimethylchlorosilane 1000", "gtceu:acetylene 3000")
        .outputFluids("gtceu:hydrochloric_acid 3000", "gtceu:chlorine 2000", "gtceu:acetylating_reagent 1000")
        .EUt(480)
        .duration(350)

    gtr.large_chemical_reactor("gtlcore:dihydroiodotetracene")
        .notConsumable("gtceu:rhodium_rhenium_naquadah_catalyst_dust")
        .itemInputs("12x gtceu:bromo_succinimide_dust")
        .inputFluids("gtceu:iodine_monochloride 1000", "gtceu:acetylating_reagent 1000", "gtceu:dimethylnaphthalene 1000", "gtceu:chlorine 2000")
        .itemOutputs("6x gtceu:magnesium_chloride_bromide_dust", "12x gtceu:succinimide_dust")
        .outputFluids("gtceu:dihydroiodotetracene 1000", "gtceu:trimethylchlorosilane 1000", "gtceu:hydrobromic_acid 1000")
        .EUt(122880)
        .duration(350)

    gtr.chemical_reactor("gtlcore:isopropyl_alcohol")
        .notConsumable("gtceu:tungstate_dust")
        .notConsumable("gtceu:sodium_seaborgate_dust")
        .inputFluids("gtceu:propene 1000", "minecraft:water 1000")
        .outputFluids("gtceu:isopropyl_alcohol 1000")
        .EUt(480)
        .duration(400)

    gtr.large_chemical_reactor("gtlcore:dichlorodicyanobenzoquinone")
        .inputFluids("gtceu:hydrogen_cyanide 2000", "gtceu:chlorine 10000", "gtceu:phenol 1000", "gtceu:oxygen 1000")
        .outputFluids("gtceu:diluted_hydrochloric_acid 8000", "gtceu:dichlorodicyanobenzoquinone 1000")
        .EUt(30720)
        .duration(250)

    gtr.chemical_reactor("gtlcore:dichlorodicyanobenzoquinone_1")
        .inputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:dichlorodicyanohydroquinone 1000")
        .outputFluids("minecraft:water 2000", "gtceu:dichlorodicyanobenzoquinone 1000")
        .EUt(480)
        .duration(250)

    gtr.large_chemical_reactor("gtlcore:tetracene_dust")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:isopropyl_alcohol 1000", "gtceu:dichlorodicyanobenzoquinone 2000", "gtceu:dihydroiodotetracene 2000")
        .itemOutputs("60x gtceu:tetracene_dust", "2x gtceu:iodine_dust")
        .outputFluids("gtceu:dichlorodicyanohydroquinone 2000", "gtceu:acetone 1000")
        .EUt(491520)
        .duration(260)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.mixer("gtlcore:polycyclic_aromatic_mixture_dust")
        .itemInputs("2x gtceu:tetracene_dust")
        .inputFluids("gtceu:naphthalene 1000")
        .itemOutputs("3x gtceu:polycyclic_aromatic_mixture_dust")
        .EUt(7680)
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:wyvern_energy_core")
        .itemInputs("16x gtlcore:wyvern_core", "64x gtlcore:draconium_block_charged", "64x gtceu:iv_lapotronic_battery", "64x gtceu:luv_lapotronic_battery", "64x gtceu:double_draconium_plate")
        .inputFluids("gtceu:mutated_living_solder 5760")
        .itemOutputs("gtlcore:wyvern_energy_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)

    gtr.sps_crafting("gtlcore:dust_blizz")
        .itemInputs("minecraft:blaze_powder", "gtceu:aluminium_sulfite_dust", "16x minecraft:snowball")
        .inputFluids("gtceu:mana 1000", "gtceu:ice 1000")
        .itemOutputs("2x gtlcore:dust_blizz")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.alloy_smelter("gtlcore:dust_cryotheum")
        .itemInputs("gtlcore:dust_blizz", "gtceu:enderium_dust")
        .itemOutputs("2x gtlcore:dust_cryotheum")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(160)

    gtr.extractor("gtlcore:gelid_cryotheum")
        .itemInputs("gtlcore:dust_cryotheum")
        .outputFluids("kubejs:gelid_cryotheum 144")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(80)

    gtr.chemical_reactor("gtlcore:nitrogen_pentoxide")
        .inputFluids("gtceu:ozone 1000", "gtceu:nitrogen_dioxide 6000")
        .outputFluids("gtceu:nitrogen_pentoxide 3000")
        .EUt(480)
        .duration(240)

    gtr.chemical_reactor("gtlcore:sodium_azanide_dust")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("gtceu:ammonia 1000")
        .outputFluids("gtceu:hydrogen 1000")
        .itemOutputs("4x gtceu:sodium_azanide_dust")
        .EUt(120)
        .duration(110)

    gtr.chemical_reactor("gtlcore:sodium_azide_dust")
        .itemInputs("8x gtceu:sodium_azanide_dust")
        .inputFluids("gtceu:nitrogen_dioxide 1000")
        .outputFluids("gtceu:ammonia 1000")
        .itemOutputs("4x gtceu:sodium_azide_dust", "3x gtceu:sodium_hydroxide_dust")
        .EUt(480)
        .duration(170)

    gtr.chemical_reactor("gtlcore:ethylamine")
        .inputFluids("gtceu:ammonia 1000", "gtceu:ethylene 1000")
        .notConsumable("gtceu:sodium_azanide_dust")
        .outputFluids("gtceu:ethylamine 1000")
        .EUt(480)
        .duration(130)

    gtr.chemical_reactor("gtlcore:isochloropropane")
        .inputFluids("gtceu:propane 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:isochloropropane 1000", "gtceu:hydrochloric_acid 1000")
        .EUt(30)
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:rhenium_hassium_thallium_isophtaloylbisdiethylthiourea_hexaf_dust")
        .itemInputs("2x gtceu:thallium_chloride_dust", "5x gtceu:hassium_chloride_dust", "6x gtceu:rhenium_chloride_dust")
        .inputFluids("gtceu:hexafluorophosphoric_acid 1000", "gtceu:isophthaloylbis 3000")
        .itemOutputs("125x gtceu:rhenium_hassium_thallium_isophtaloylbisdiethylthiourea_hexaf_dust")
        .outputFluids("gtceu:hydrochloric_acid 7000", "gtceu:chlorine 3000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.chemical_reactor("gtlcore:thallium_chloride_dust")
        .itemInputs("gtceu:thallium_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .itemOutputs("2x gtceu:thallium_chloride_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(120)
        .duration(100)

    gtr.electric_blast_furnace("gtlcore:hassium_chloride_dust")
        .itemInputs("gtceu:hassium_dust")
        .inputFluids("gtceu:chlorine 4000")
        .itemOutputs("5x gtceu:hassium_chloride_dust")
        .EUt(120)
        .duration(930)
        .blastFurnaceTemp(12000)

    gtr.electric_blast_furnace("gtlcore:rhenium_chloride_dust")
        .itemInputs("gtceu:rhenium_dust")
        .inputFluids("gtceu:chlorine 5000")
        .itemOutputs("6x gtceu:rhenium_chloride_dust")
        .EUt(120)
        .duration(930)
        .blastFurnaceTemp(12500)

    gtr.large_chemical_reactor("gtlcore:isophthaloylbis")
        .inputFluids("gtceu:phenylenedioxydiacetic_acid 1000", "gtceu:thionyl_chloride 2000", "gtceu:diethylthiourea 2000")
        .outputFluids("gtceu:isophthaloylbis 1000", "gtceu:sulfur_dioxide 2000", "gtceu:hydrochloric_acid 4000")
        .EUt(122880)
        .duration(250)

    gtr.large_chemical_reactor("gtlcore:diethylthiourea")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:ethylamine 2000", "gtceu:sodium_thiocyanate 1000")
        .outputFluids("gtceu:diethylthiourea 1000", "gtceu:ammonia 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(30720)
        .duration(210)

    gtr.chemical_reactor("gtlcore:sodium_thiocyanate")
        .itemInputs("gtceu:sulfur_dust")
        .inputFluids("gtceu:sodium_cyanide 1000")
        .outputFluids("gtceu:sodium_thiocyanate 1000")
        .EUt(120)
        .duration(100)

    gtr.chemical_reactor("gtlcore:thionyl_chloride")
        .itemInputs("gtceu:sulfur_dust")
        .inputFluids("gtceu:sulfur_trioxide 1000", "gtceu:chlorine 2000")
        .outputFluids("gtceu:thionyl_chloride 1000", "gtceu:sulfur_dioxide 1000")
        .EUt(120)
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:phenylenedioxydiacetic_acid")
        .inputFluids("minecraft:water 1000", "gtceu:hydrogen_peroxide 1000", "gtceu:phenol 1000", "gtceu:ethenone 2000", "gtceu:chlorine 4000")
        .outputFluids("gtceu:phenylenedioxydiacetic_acid 1000", "gtceu:hydrochloric_acid 4000")
        .EUt(122880)
        .duration(320)

    gtr.large_chemical_reactor("gtlcore:hexafluorophosphoric_acid")
        .inputFluids("gtceu:antimony_pentafluoride 1000", "gtceu:phosphorus_trichloride 1000", "gtceu:hydrofluoric_acid 1000")
        .outputFluids("gtceu:hexafluorophosphoric_acid 1000")
        .itemOutputs("4x gtceu:antimony_trichloride_dust")
        .EUt(30720)
        .duration(280)

    gtr.chemical_reactor("gtlcore:phosphorus_trichloride")
        .itemInputs("gtceu:phosphorus_dust")
        .inputFluids("gtceu:chlorine 3000")
        .outputFluids("gtceu:phosphorus_trichloride 1000")
        .EUt(30)
        .duration(60)

    gtr.chemical_reactor("gtlcore:antimony_pentafluoride")
        .itemInputs("4x gtceu:antimony_trifluoride_dust")
        .inputFluids("gtceu:fluorine 2000")
        .outputFluids("gtceu:antimony_pentafluoride 1000")
        .EUt(480)
        .duration(100)

    gtr.chemical_reactor("gtlcore:antimony_trifluoride_dust_a")
        .itemInputs("4x gtceu:antimony_trichloride_dust")
        .inputFluids("gtceu:hydrofluoric_acid 3000")
        .outputFluids("gtceu:hydrochloric_acid 3000")
        .itemOutputs("4x gtceu:antimony_trifluoride_dust")
        .EUt(480)
        .duration(210)

    gtr.chemical_reactor("gtlcore:carbon_tetrachloride")
        .circuit(4)
        .itemInputs("gtceu:carbon_dust")
        .inputFluids("gtceu:chlorine 4000")
        .outputFluids("gtceu:carbon_tetrachloride 1000")
        .EUt(120)
        .duration(200)

    gtr.chemical_reactor("gtlcore:actinium_oxalate_dust")
        .itemInputs("gtceu:actinium_dust")
        .inputFluids("gtceu:oxalic_acid 4000")
        .itemOutputs("13x gtceu:actinium_oxalate_dust")
        .EUt(1920)
        .duration(200)

    gtr.electric_blast_furnace("gtlcore:atinium_hydride_dust")
        .itemInputs("13x gtceu:actinium_oxalate_dust", "6x gtceu:sodium_hydride_dust", "gtceu:sodium_dust")
        .inputFluids("gtceu:carbon_tetrachloride 3000")
        .itemOutputs("4x gtceu:atinium_hydride_dust", "8x gtceu:salt_dust")
        .outputFluids("gtceu:carbon_dioxide 5000")
        .EUt(122880)
        .duration(400)
        .blastFurnaceTemp(10700)

    gtr.stellar_forge("gtlcore:actinium_superhydride_plasma")
        .itemInputs("gtlcore:naquadria_charge", "36x gtceu:atinium_hydride_dust")
        .inputFluids("gtceu:hydrogen 81000")
        .outputFluids("gtceu:actinium_superhydride_plasma 36000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.canner("gtlcore:actinium_superhydride_plasma_containment_cell")
        .notConsumable("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:actinium_superhydride_plasma 1000")
        .itemInputs("gtlcore:plasma_containment_cell")
        .itemOutputs("gtlcore:actinium_superhydride_plasma_containment_cell")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.plasma_condenser("gtlcore:actinium_superhydride_dust")
        .itemInputs("gtlcore:actinium_superhydride_plasma_containment_cell")
        .inputFluids("gtceu:liquid_helium 24000")
        .itemOutputs("13x gtceu:actinium_superhydride_dust", "gtlcore:plasma_containment_cell")
        .outputFluids("gtceu:helium 24000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(340)

    gtr.large_chemical_reactor("gtlcore:cosmic_superconductor")
        .itemInputs("125x gtceu:rhenium_hassium_thallium_isophtaloylbisdiethylthiourea_hexaf_dust", "39x gtceu:actinium_superhydride_dust", "14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .inputFluids("gtceu:light_quarks 10000", "gtceu:free_alpha_gas 1000")
        .outputFluids("gtceu:cosmic_superconductor 10000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.mixer("gtlcore:charged_caesium_cerium_cobalt_indium_dust")
        .itemInputs("10x gtceu:indium_dust", "2x gtceu:cobalt_dust", "1x gtceu:cerium_dust", "1x gtceu:caesium_dust")
        .inputFluids("gtceu:cosmic_computing_mixture 1000")
        .itemOutputs("14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:charged_lepton_trap_crystal")
        .notConsumable("gtceu:starmetal_nanoswarm")
        .itemInputs("gtlcore:lepton_trap_crystal", "2x gtceu:small_vibranium_dust")
        .inputFluids("gtceu:free_electron_gas 1000", "gtceu:heavy_lepton_mixture 1000")
        .itemOutputs("gtlcore:charged_lepton_trap_crystal")
        .EUt(491520)
        .duration(240)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.electric_blast_furnace("gtlcore:lepton_trap_crystal")
        .itemInputs("gtceu:meitnerium_dust", "gtceu:molybdenum_dust", "gtceu:rhenium_dust")
        .inputFluids("gtceu:naquadah_alloy 288")
        .itemOutputs("gtlcore:lepton_trap_crystal")
        .EUt(3450000)
        .duration(340)
        .blastFurnaceTemp(10900)

    gtr.electric_blast_furnace("gtlcore:taranium_boulea")
        .itemInputs("64x gtceu:silicon_block", "8x gtceu:taranium_ingot", "4x gtceu:gallium_arsenide_dust")
        .inputFluids("gtceu:radon 16000")
        .itemOutputs("gtlcore:taranium_boule")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(24000)
        .blastFurnaceTemp(10500)

    gtr.assembler("gtlcore:integrated_ore_processor")
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
        .itemOutputs("gtlcore:integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    gtr.alloy_smelter("gtlcore:dragon_strength_tritanium_casing")
        .itemInputs("16x gtlcore:extreme_strength_tritanium_casing", "16x gtlcore:draconium_block_charged")
        .itemOutputs("gtlcore:dragon_strength_tritanium_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2000)

    gtr.chemical_reactor("gtlcore:blaze_blast_furnace_casing")
        .itemInputs("gtceu:high_temperature_smelting_casing", "32x gtceu:tin_foil")
        .inputFluids("gtceu:blaze 1440", "gtceu:gallium_arsenide 576", "gtceu:vanadium_gallium 288")
        .itemOutputs("gtlcore:blaze_blast_furnace_casing")
        .EUt(1920)
        .duration(900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembly_line("gtlcore:dimension_creation_casing")
        .itemInputs("gtceu:infinity_frame",
            "64x gtceu:lv_world_accelerator",
            "64x gtceu:mv_world_accelerator",
            "64x gtceu:hv_world_accelerator",
            "64x gtceu:ev_world_accelerator",
            "64x gtceu:iv_world_accelerator",
            "64x gtceu:luv_world_accelerator",
            "64x gtceu:zpm_world_accelerator",
            "64x gtceu:uv_world_accelerator",
            "16x gtlcore:hyper_core",
            "4x gtlcore:spacetimebendingcore",
            "4x gtlcore:dimensional_stability_casing",
            "4x gtlcore:spacetime_compression_field_generator",
            "6x gtlcore:topological_manipulator_unit",
            "gtlcore:max_field_generator",
            "4x gtceu:double_eternity_plate")
        .inputFluids("gtceu:infinity 576", "gtceu:super_mutated_living_solder 1000", "gtceu:liquid_cosmic_mesh 1000", "gtceu:spatialfluid 2000")
        .itemOutputs("gtlcore:dimension_creation_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:dimension_connection_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtlcore:door_of_create")
        .itemInputs("16x gtceu:infinity_frame",
            "16x gtlcore:eye_of_harmony",
            "16x gtlcore:dimension_creation_casing",
            "16x gtlcore:dimension_connection_casing",
            "8x gtlcore:suprachronal_mainframe_complex",
            "8x gtlcore:cosmic_singularity",
            "8x gtlcore:chaotic_core",
            "64x gtlcore:void_matter",
            "16x gtlcore:quantum_anomaly",
            "16x gtlcore:max_robot_arm",
            "gtlcore:mega_max_battery",
            "64x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:super_mutated_living_solder 288000", "gtceu:infinity 100000", "gtceu:liquid_cosmic_mesh 100000", "gtceu:spacetime 100000")
        .itemOutputs("gtlcore:door_of_create")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:dimension_creation_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembler("gtlcore:dimension_connection_casing")
        .itemInputs("gtceu:draconium_frame", "gtlcore:dimensional_bridge_casing", "gtceu:periodicium_block", "8x gtceu:double_mithril_plate", "4x gtceu:cosmic_plate", "2x gtceu:double_shirabon_plate")
        .itemOutputs("gtlcore:dimension_connection_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.lightning_processor("gtlcore:adamantine_compounds_dust_a")
        .notConsumable("gtlcore:microwormhole_generator")
        .itemInputs("4x gtceu:adamantine_compounds_dust")
        .itemOutputs("gtceu:adamantine_dust")
        .inputFluids("gtceu:mana 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(20)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_helmet")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("50x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_helmet")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(1)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_chestplate")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("80x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_chestplate")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(2)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_leggings")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("70x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_leggings")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(3)
        .duration(200)

    gtr.assembler("gtlcore:magnetohydrodynamicallyconstrainedstarmatter_boots")
        .notConsumable("gtceu:spacetime_nanoswarm")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .itemInputs("40x gtceu:magnetohydrodynamicallyconstrainedstarmatter_ingot", "gtlcore:command_block_core")
        .itemOutputs("kubejs:magnetohydrodynamicallyconstrainedstarmatter_boots")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(4)
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:glycerol_a")
        .circuit(1)
        .notConsumable("gtceu:soda_ash_dust")
        .notConsumableFluid("gtceu:carbon_dioxide 10000")
        .itemInputs("3x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:epichlorohydrin 1000", "minecraft:water 2000")
        .outputFluids("gtceu:glycerol 1000", "gtceu:salt_water 1000")
        .EUt(7680)
        .duration(150)

    gtr.assembler("gtlcore:echo_casing")
        .itemInputs("gtceu:europium_frame", "gtlcore:reinforced_echo_shard", "6x gtceu:double_hsse_plate")
        .itemOutputs("2x gtlcore:echo_casing")
        .circuit(6)
        .EUt(30)
        .duration(200)

    gtr.precision_assembler("gtlcore:machine_casing_grinding_head")
        .itemInputs("gtceu:europium_frame", "8x gtlcore:reinforced_echo_shard", "6x gtceu:tungsten_grinding_head", "36x gtceu:double_hsse_plate")
        .inputFluids("gtceu:annealed_copper 1440", "gtceu:invar 1440", "gtceu:nickel_zinc_ferrite 1440", "gtceu:osmiridium 1440")
        .itemOutputs("gtlcore:machine_casing_grinding_head")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:bedrock_drill")
        .itemInputs("gtlcore:reinforced_echo_shard", "minecraft:bedrock", "gtceu:neutronium_buzz_saw_blade", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:rhodium 576", "gtceu:hastelloy_x 576", "gtceu:hsss 576", "gtceu:hsse 576")
        .itemOutputs("gtlcore:bedrock_drill")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:toluene_diisocyanate")
        .inputFluids("gtceu:nitric_acid 2000", "gtceu:phosgene 2000", "gtceu:toluene 1000", "gtceu:hydrogen 1000")
        .outputFluids("gtceu:toluene_diisocyanate 2000", "gtceu:hydrochloric_acid 4000", "minecraft:water 6000")
        .EUt(480)
        .duration(130)

    gtr.chemical_reactor("gtlcore:polyurethane")
        .inputFluids("gtceu:oxygen 1000", "gtceu:ethyleneglycol 4000", "gtceu:toluene_diisocyanate 1000")
        .outputFluids("gtceu:polyurethane 1000", "minecraft:water 7000")
        .EUt(480)
        .duration(110)

    gtr.mixer("gtlcore:viscoelastic_polyurethane")
        .itemInputs("5x gtceu:calcite_dust")
        .inputFluids("gtceu:polyurethane 1000", "gtceu:ethyleneglycol 1000")
        .outputFluids("gtceu:viscoelastic_polyurethane 2000")
        .EUt(120)
        .duration(110)

    gtr.mixer("gtlcore:viscoelastic_polyurethane_foam")
        .inputFluids("gtceu:viscoelastic_polyurethane 1000", "gtceu:air 1000")
        .outputFluids("gtceu:viscoelastic_polyurethane_foam 2000")
        .EUt(120)
        .duration(150)

    gtr.fluid_solidifier("gtlcore:memory_foam_block")
        .notConsumable("gtceu:block_casting_mold")
        .inputFluids("gtceu:viscoelastic_polyurethane_foam 1000")
        .itemOutputs("gtlcore:memory_foam_block")
        .EUt(30)
        .duration(60)

    gtr.chemical_bath("gtlcore:glucose")
        .itemInputs("2x gtceu:sugar_gem")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("24x gtceu:glucose_dust")
        .EUt(480)
        .duration(300)

    gtr.mixer("gtlcore:glucose_iron_solution")
        .itemInputs("24x gtceu:glucose_dust")
        .inputFluids("gtceu:iron_iii_chloride 1000")
        .outputFluids("gtceu:glucose_iron_solution 1000")
        .EUt(30)
        .duration(80)

    gtr.dehydrator("gtlcore:graphene_iron_plate")
        .notConsumable("gtceu:long_yttrium_barium_cuprate_rod")
        .inputFluids("gtceu:glucose_iron_solution 1000")
        .itemOutputs("gtlcore:graphene_iron_plate")
        .EUt(120)
        .duration(40)

    gtr.electromagnetic_separator("gtlcore:graphene_oxide_dust")
        .itemInputs("gtlcore:graphene_iron_plate")
        .itemOutputs("3x gtceu:graphene_oxide_dust", "gtceu:iron_dust")
        .EUt(30)
        .duration(120)

    gtr.mixer("gtlcore:graphene_gel_suspension_dust")
        .itemInputs("3x gtceu:graphene_oxide_dust")
        .inputFluids("gtceu:resorcinol 1000", "gtceu:formaldehyde 1000")
        .itemOutputs("gtceu:graphene_gel_suspension_dust")
        .EUt(120)
        .duration(100)

    gtr.vacuum_freezer("gtlcore:cold_ice_casing")
        .itemInputs("gtceu:frostproof_machine_casing")
        .inputFluids("gtceu:ice 10000", "gtceu:vanadium_gallium 576")
        .itemOutputs("gtlcore:cold_ice_casing")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.autoclave("gtlcore:dry_graphene_gel_dust")
        .inputFluids("gtceu:acetone 1000")
        .itemInputs("gtceu:graphene_gel_suspension_dust")
        .itemOutputs("gtceu:dry_graphene_gel_dust")
        .EUt(480)
        .duration(260)

    gtr.fluid_heater("gtlcore:supercritical_carbon_dioxide")
        .inputFluids("gtceu:carbon_dioxide 1000")
        .outputFluids("gtceu:supercritical_carbon_dioxide 1000")
        .EUt(480)
        .duration(200)

    gtr.electric_blast_furnace("gtlcore:aerographene")
        .itemInputs("gtceu:dry_graphene_gel_dust")
        .inputFluids("gtceu:supercritical_carbon_dioxide 1000")
        .itemOutputs("gtlcore:aerographene")
        .EUt(120)
        .duration(400)
        .blastFurnaceTemp(5000)

    gtr.qft("gtlcore:hyper_stable_self_healing_adhesive")
        .chancedInput("gtceu:uruium_nanoswarm", 500, 0)
        .itemInputs("64x gtceu:activated_carbon_dust", "64x gtceu:bismuth_dust")
        .inputFluids("gtceu:oxygen 20000", "gtceu:hydrogen 20000")
        .chancedOutput("gtlcore:hyper_stable_self_healing_adhesive", 2000, 0)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.qft("gtlcore:black_body_naquadria_supersolid")
        .chancedInput("gtceu:uruium_nanoswarm", 500, 0)
        .itemInputs("64x gtceu:naquadria_dust", "64x gtceu:magnesium_dust")
        .inputFluids("gtceu:phosphoric_acid 20000", "gtceu:sulfuric_acid 20000")
        .chancedOutput("gtlcore:black_body_naquadria_supersolid", 2000, 0)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.assembler("gtlcore:two_way_foil")
        .itemInputs("gtceu:chaos_foil", "gtlcore:hyper_stable_self_healing_adhesive", "gtlcore:cosmic_fabric")
        .itemOutputs("gtlcore:two_way_foil")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:infinity_glass")
        .itemInputs("gtlcore:black_body_naquadria_supersolid", "2x gtceu:infinity_dust")
        .inputFluids("gtceu:dimensionallytranscendentexoticcatalyst 1000", "gtceu:woods_glass 9216")
        .itemOutputs("gtlcore:infinity_glass")
        .EUt(4096 * GTValues.VA[GTValues.MAX])
        .duration(1600)
        .blastFurnaceTemp(88000)

    gtr.dimensionally_transcendent_plasma_forge("gtlcore:create_casing")
        .itemInputs("gtceu:eternity_frame", "gtlcore:command_block_core")
        .inputFluids("gtceu:exciteddtsc 1000", "gtceu:primordialmatter 1000")
        .itemOutputs("gtlcore:create_casing")
        .EUt(16384 * GTValues.VA[GTValues.MAX])
        .duration(3200)
        .blastFurnaceTemp(96000)

    gtr.gravitation_shockburst("gtlcore:chain_command_block_core")
        .itemInputs("gtlcore:command_block_core", "64x minecraft:observer")
        .itemOutputs("gtlcore:chain_command_block_core")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("gtlcore:repeating_command_block_core")
        .itemInputs("gtlcore:chain_command_block_core", "64x minecraft:calibrated_sculk_sensor")
        .itemOutputs("gtlcore:repeating_command_block_core")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("gtlcore:command_block_broken")
        .itemInputs("minecraft:command_block", "gtceu:magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemOutputs("gtlcore:command_block_broken")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.gravitation_shockburst("gtlcore:chain_command_block_broken")
        .itemInputs("minecraft:chain_command_block", "gtceu:magnetohydrodynamicallyconstrainedstarmatter_dust")
        .itemOutputs("gtlcore:chain_command_block_broken")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.assembly_line("gtlcore:chaotic_energy_core")
        .itemInputs("gtlcore:draconic_energy_core",
            "64x gtceu:uhv_ultimate_battery",
            "16x gtlcore:chaotic_core",
            "32x #gtceu:circuits/max",
            "16x gtceu:white_dwarf_mtter_nanoswarm",
            "16x gtceu:black_dwarf_mtter_nanoswarm",
            "64x gtlcore:smd_capacitor_supracausal",
            "64x gtlcore:smd_diode_supracausal",
            "64x gtlcore:smd_resistor_supracausal",
            "64x gtlcore:smd_transistor_supracausal",
            "64x gtlcore:smd_inductor_supracausal",
            "64x gtceu:chaos_block",
            "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_rod",
            "64x gtceu:magnetohydrodynamicallyconstrainedstarmatter_plate",
            "64x gtceu:shirabon_plate",
            "32x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:chaos 28800", "gtceu:spacetime 10000", "gtceu:primordialmatter 10000")
        .itemOutputs("gtlcore:chaotic_energy_core")
        .EUt(64 * GTValues.VA[GTValues.MAX])
        .duration(2560)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:create_ultimate_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtlcore:hollow_casing")
        .itemInputs("gtlcore:molecular_casing",
            "16x gtceu:magnalium_screw",
            "4x gtceu:europium_plate",
            "4x gtceu:apatite_rod",
            "2x gtceu:double_uranium_plate",
            "16x gtceu:molybdenum_screw",
            "4x gtceu:double_duranium_plate",)
        .inputFluids("gtceu:stainless_steel 1296", "gtceu:indium_gallium_phosphide 1296", "gtceu:wrought_iron 1296", "gtceu:indium_tin_barium_titanium_cuprate 1296")
        .itemOutputs("2x gtlcore:hollow_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:molecular_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:spacetime_assembly_line_unit")
        .itemInputs("gtceu:adamantium_frame",
            "gtlcore:advanced_assembly_line_unit",
            "gtlcore:machine_casing_circuit_assembly_line",
            "gtlcore:precision_circuit_assembly_robot_mk2",
            "gtceu:osmium_nanoswarm",
            "6x gtlcore:optical_processing_core",
            "2x #gtceu:circuits/uev",
            "4x gtceu:blue_steel_gear",
            "4x gtceu:red_steel_gear",
            "4x gtceu:zpm_robot_arm",
            "6x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:liquidcrystalkevlar 5760", "gtceu:enderite 1296", "gtceu:highurabilityompoundteel 1296", "gtceu:pikyonium 1296")
        .itemOutputs("gtlcore:spacetime_assembly_line_unit")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:advanced_assembly_line_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:molecular_coil")
        .itemInputs("gtlcore:hollow_casing",
            "2x gtceu:naquadah_coil_block",
            "2x gtceu:fusion_coil",
            "64x gtceu:fine_europium_wire",
            "32x gtceu:enriched_naquadah_trinium_europium_duranide_foil")
        .inputFluids("gtceu:borosilicate_glass 2304", "gtceu:silicone_rubber 5760", "gtceu:uranium_triplatinum 1296", "gtceu:stellite_100 1296")
        .itemOutputs("2x gtlcore:molecular_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:molybdenum_disilicide_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:containment_field_generator")
        .itemInputs("gtlcore:hollow_casing",
            "4x gtceu:luv_field_generator",
            "6x gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire",
            "4x #gtceu:circuits/uv",
            "gtceu:uv_transformer_16a",
            "6x gtceu:double_vanadium_gallium_plate",
            "4x gtceu:double_enriched_naquadah_trinium_europium_duranide_plate")
        .inputFluids("gtceu:lanthanum 2304", "gtceu:cobalt_brass 5760", "gtceu:battery_alloy 5760", "gtceu:molybdenum_disilicide 1296")
        .itemOutputs("gtlcore:containment_field_generator")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:force_field_glass"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:crystalline_infinity")
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
        .itemOutputs("gtlcore:crystalline_infinity")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_autoclave"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:star_ultimate_material_forge_factory")
        .itemInputs("4x gtlcore:stellar_forge",
            "4x gtceu:uiv_electric_furnace",
            "4x gtceu:uiv_arc_furnace",
            "4x gtceu:uiv_alloy_smelter",
            "16x gtceu:uiv_electric_pump",
            "gtlcore:transcendent_max_battery",
            "4x gtceu:uxv_sensor",
            "16x #gtceu:circuits/uxv",
            "8x gtlcore:containment_field_generator",
            "8x gtlcore:hyper_core",
            "64x gtceu:vibranium_plate",
            "32x gtceu:double_vibramantium_plate")
        .inputFluids("gtceu:incoloy_ma_956 5760", "gtceu:germaniumtungstennitride 5760", "gtceu:abyssalalloy 5760", "gtceu:titanium_carbide 5760")
        .itemOutputs("gtlcore:star_ultimate_material_forge_factory")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:ultimate_stellar_containment_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:suprachronal_assembly_line")
        .itemInputs("gtlcore:infinite_cell_component",
            "16x gtlcore:advanced_assembly_line",
            "16x gtlcore:circuit_assembly_line",
            "4x gtlcore:spacetime_assembly_line_casing",
            "4x gtlcore:spacetime_assembly_line_unit",
            "32x gtlcore:molecular_coil",
            "16x gtceu:uev_emitter",
            "16x gtceu:uev_sensor",
            "16x gtlcore:precision_circuit_assembly_robot_mk3",
            "16x #gtceu:circuits/uiv",
            "gtceu:max_battery",
            "32x gtceu:double_dalisenite_plate")
        .inputFluids("gtceu:borosilicate_glass 3204", "gtceu:silicone_rubber 5760", "gtceu:uranium_triplatinum 1296", "gtceu:stellite_100 1296")
        .itemOutputs("gtlcore:suprachronal_assembly_line")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:assembler_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembler("gtlcore:force_field_glass")
        .itemInputs("gtceu:laminated_glass", "gtceu:uhv_field_generator", "4x gtceu:long_naquadah_alloy_rod", "2x gtceu:long_mithril_rod", "4x gtceu:double_uranium_rhodium_dinaquadide_plate", "2x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .itemOutputs("gtlcore:force_field_glass")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:molecular_casing")
        .itemInputs("gtceu:high_power_casing", "4x gtceu:double_battery_alloy_plate", "gtceu:iv_emitter", "24x gtceu:darmstadtium_ring", "12x gtceu:tungsten_foil", "12x gtceu:ruridit_foil", "24x gtceu:tungsten_steel_foil", "6x gtceu:rhodium_plate", "4x gtceu:double_ruthenium_plate")
        .inputFluids("gtceu:niobium_nitride 864")
        .itemOutputs("gtlcore:molecular_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:spacetime_assembly_line_casing")
        .itemInputs("gtceu:assembly_line_casing", "gtceu:uhv_emitter", "4x gtceu:uev_electric_motor", "2x gtceu:uev_conveyor_module", "2x gtceu:uev_electric_piston", "2x #gtceu:circuits/uev", "8x gtceu:double_zinc_plate")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .itemOutputs("gtlcore:spacetime_assembly_line_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:electric_implosion_compressor")
        .itemInputs("4x gtceu:implosion_compressor", "4x gtceu:luv_transformer_16a", "4x gtceu:luv_diode", "8x gtceu:luv_field_generator", "16x gtceu:tritanium_hex_cable", "4x gtceu:dense_obsidian_plate", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtlcore:electric_implosion_compressor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.compressor("gtlcore:dimensionally_transcendent_dirt_forge")
        .itemInputs("16x gtceu:primitive_blast_furnace")
        .itemOutputs("gtlcore:dimensionally_transcendent_dirt_forge")
        .EUt(8)
        .duration(1200)

    gtr.compressor("gtlcore:dimensionally_transcendent_steam_boiler")
        .itemInputs("16x gtceu:tungstensteel_large_boiler")
        .itemOutputs("gtlcore:dimensionally_transcendent_steam_boiler")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:steam_mega_turbine")
        .itemInputs("8x gtceu:steam_large_turbine", "16x #gtceu:circuits/iv", "4x gtceu:ev_electric_pump", "8x gtceu:ev_electric_piston", "8x gtceu:black_bronze_turbine_blade", "8x gtceu:double_molybdenum_plate", "32x gtceu:double_steel_plate")
        .itemOutputs("gtlcore:steam_mega_turbine")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1200)

    gtr.assembler("gtlcore:gas_mega_turbine")
        .itemInputs("8x gtceu:gas_large_turbine", "16x #gtceu:circuits/luv", "8x gtceu:ev_electric_pump", "32x gtceu:ev_electric_piston", "8x gtceu:neodymium_turbine_blade", "8x gtceu:double_sterling_silver_plate", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtlcore:gas_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:rocket_mega_turbine")
        .itemInputs("8x gtlcore:rocket_large_turbine", "16x #gtceu:circuits/zpm", "4x gtceu:iv_electric_motor", "8x gtceu:iv_electric_piston", "8x gtceu:tungsten_turbine_blade", "8x gtceu:double_vanadium_steel_plate", "32x gtceu:double_titanium_plate")
        .itemOutputs("gtlcore:rocket_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:plasma_mega_turbine")
        .itemInputs("8x gtceu:plasma_large_turbine", "16x #gtceu:circuits/uv", "8x gtceu:iv_electric_pump", "16x gtceu:iv_electric_piston", "8x gtceu:osmiridium_turbine_blade", "8x gtceu:double_ultimet_plate", "32x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtlcore:plasma_mega_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtlcore:chemical_energy_devourer")
        .itemInputs("4x gtceu:extreme_combustion_engine", "4x gtceu:iv_field_generator", "8x gtceu:iv_emitter", "8x gtceu:iv_electric_pump", "16x gtceu:ev_fluid_regulator", "8x gtceu:small_tungsten_spring", "8x gtceu:small_vanadium_gallium_spring", "8x gtceu:luv_transformer_4a", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:lubricant 10000")
        .itemOutputs("gtlcore:chemical_energy_devourer")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtlcore:degenerate_rhenium_constrained_casing")
        .circuit(6)
        .itemInputs("gtceu:quantanium_frame", "6x gtceu:degenerate_rhenium_plate")
        .itemOutputs("2x gtlcore:degenerate_rhenium_constrained_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtlcore:rhenium_reinforced_energy_glass")
        .itemInputs("4x gtceu:fusion_glass", "6x gtceu:degenerate_rhenium_plate")
        .itemOutputs("2x gtlcore:rhenium_reinforced_energy_glass")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.ultimate_material_forge("gtlcore:proto_matter")
        .itemInputs("gtlcore:triplet_neutronium_sphere")
        .inputFluids("gtceu:uu_matter 1000")
        .itemOutputs("gtlcore:proto_matter")
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
    implosion_compressor_add(["minecraft:command_block", "gtlcore:two_way_foil"], "gtlcore:command_block_core", 1)
    implosion_compressor_add(["ae2:singularity", "gtlcore:warped_ender_pearl"], "gtlcore:entangled_singularity", 1)
    implosion_compressor_add(["4x ad_astra:steel_plate", "2x gtceu:dense_tungsten_steel_plate"], "ad_astra:steel_block", 1)
    implosion_compressor_add(["64x avaritia:neutron_pile", "64x avaritia:neutron_pile"], "avaritia:neutron_nugget", 1)
    implosion_compressor_add("9x avaritia:neutron_nugget", "avaritia:neutron_ingot", 1)
    implosion_compressor_add("9x avaritia:neutron_ingot", "avaritia:neutron", 1)
    implosion_compressor_add(["64x avaritia:compressed_crafting_table", "64x avaritia:compressed_crafting_table"], "avaritia:double_compressed_crafting_table", 1)
    implosion_compressor_add(["4x gtceu:exquisite_diamond_gem", "minecraft:netherite_scrap"], "avaritia:diamond_lattice", 1)
    implosion_compressor_add(["8x avaritia:diamond_lattice", "minecraft:nether_star"], "avaritia:crystal_matrix", 1)
    implosion_compressor_add(["2x minecraft:chest", "2x ae2:smooth_sky_stone_chest"], "avaritia:compressed_chest", 1)

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

    gtr.assembler("gtlcore:petrochemical_plant")
        .itemInputs("16x gtceu:watertight_steel_frame", "8x gtceu:large_distillery", "4x gtlcore:large_cracker", "gtlcore:chemical_plant", "4x #gtceu:circuits/uhv", "4x gtceu:zpm_emitter", "16x gtceu:zpm_fluid_regulator", "16x gtceu:stainless_steel_nonuple_fluid_pipe", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtlcore:petrochemical_plant")
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
            gtr.assembler("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_sensor",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))

            gtr.assembler("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_emitter",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtlcore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))
        }
    })
    for (let index = 0; index < 8; index++) {
        gtr.assembler("gtlcore:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtlcore:max_sensor",
                (2 ** index) + "x gtlcore:max_electric_pump",
                "4x gtceu:cosmicneutronium_single_cable")
            .itemOutputs("gtlcore:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))

        gtr.assembler("gtlcore:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtlcore:max_emitter",
                (2 ** index) + "x gtlcore:max_electric_pump",
                "4x gtceu:cosmicneutronium_single_cable")
            .itemOutputs("gtlcore:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))
    }

    gtr.dyson_sphere("gtlcore:dysonsphere")
        .inputFluids("kubejs:gelid_cryotheum 1")
        .circuit(1)
        .EUt(-GTValues.V[GTValues.MAX])
        .duration(20)
        .CWUt(1)

    gtr.dyson_sphere("gtlcore:dysonspherelaunch")
        .itemInputs("64x gtlcore:dyson_swarm_module")
        .EUt(GTValues.V[GTValues.UIV])
        .duration(200)
        .CWUt(512)

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_1")
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

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_2")
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

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_3")
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

    gtr.petrochemical_plant("gtlcore:petrochemical_plant_4")
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

    gtr.chemical_bath("gtlcore:naquadria_sulfate_dust")
        .itemInputs("6x gtceu:sodium_dust")
        .inputFluids("gtceu:acidic_naquadria_caesiumfluoride 3000")
        .itemOutputs("6x gtceu:naquadria_sulfate_dust", "2x gtceu:trinium_sulfide_dust", "8x gtceu:sodium_fluoride_dust", "7x gtceu:sodium_sulfate_dust")
        .chancedOutput("gtceu:caesium_dust", 8000, 500)
        .EUt(120)
        .duration(200)

    gtr.compressor("gtlcore:dimensionally_transcendent_steam_oven")
        .itemInputs("16x gtceu:steam_oven")
        .itemOutputs("gtlcore:dimensionally_transcendent_steam_oven")
        .EUt(16)
        .duration(1200)

    gtr.assembler("gtlcore:slaughterhouse")
        .itemInputs("gtceu:steel_frame", "gtceu:lv_world_accelerator", "4x #gtceu:circuits/lv", "8x gtceu:lv_electric_motor", "4x gtceu:lv_robot_arm", "8x gtceu:invar_gear", "2x gtceu:diamond_grinding_head", "4x gtceu:double_steel_plate")
        .itemOutputs("gtlcore:slaughterhouse")
        .EUt(30)
        .duration(400)

    gtr.assembly_line("gtlcore:holy_separator")
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
        .itemOutputs("gtlcore:holy_separator")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_cutter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.large_chemical_reactor("gtlcore:mutated_living_solder")
        .notConsumable("gtceu:gravi_star")
        .itemInputs("16x gtlcore:biological_cells", "gtceu:quantum_star")
        .inputFluids("gtceu:helium_plasma 2000", "gtceu:oxygen_plasma 2000", "gtceu:tin 2000", "gtceu:carbon 2000", "gtceu:beryllium 2000")
        .outputFluids("gtceu:mutated_living_solder 2000")
        .itemOutputs("4x gtceu:tiny_nether_star_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.autoclave("gtlcore:super_mutated_living_solder")
        .inputFluids("gtceu:mutated_living_solder 10000")
        .itemInputs("64x gtlcore:space_essence", "64x gtlcore:draconium_dust")
        .outputFluids("gtceu:super_mutated_living_solder 10000")
        .itemOutputs("gtlcore:essence_block")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)

    gtr.evaporation("gtlcore:salt_water")
        .inputFluids("minecraft:water 50000")
        .outputFluids("gtceu:salt_water 1000")
        .EUt(30)
        .duration(600)

    gtr.centrifuge("gtlcore:grade_1_purified_water")
        .inputFluids("minecraft:water 1000")
        .chancedOutput("gtceu:small_stone_dust", 5000, 0)
        .chancedOutput("gtceu:small_clay_dust", 2000, 0)
        .chancedOutput("gtceu:small_calcite_dust", 1000, 0)
        .chancedOutput("gtceu:small_salt_dust", 1000, 0)
        .chancedOutput("gtceu:polyethylene_nugget", 100, 0)
        .outputFluids("gtceu:grade_1_purified_water 900")
        .EUt(1920)
        .duration(200)

    gtr.fluid_heater("gtlcore:grade_2_purified_water")
        .inputFluids("gtceu:grade_1_purified_water 1000")
        .outputFluids("gtceu:grade_2_purified_water 900")
        .EUt(7680)
        .duration(200)

    gtr.distillation_tower("gtlcore:grade_3_purified_water")
        .inputFluids("gtceu:grade_2_purified_water 1000")
        .outputFluids("gtceu:grade_3_purified_water 900")
        .outputFluids("gtceu:grade_2_purified_water 50")
        .outputFluids("gtceu:grade_1_purified_water 50")
        .outputFluids("gtceu:oil 10")
        .outputFluids("gtceu:ammonia 10")
        .EUt(1920)
        .duration(200)
        .disableDistilleryRecipes(true)

    gtr.chemical_bath("gtlcore:grade_4_purified_water")
        .itemInputs("64x gtceu:activated_carbon_dust")
        .inputFluids("gtceu:grade_3_purified_water 1000")
        .itemOutputs("64x gtceu:carbon_dust")
        .outputFluids("gtceu:grade_4_purified_water 950")
        .EUt(480)
        .duration(600)

    gtr.chemical_reactor("gtlcore:grade_5_purified_water")
        .inputFluids("gtceu:grade_4_purified_water 1000")
        .notConsumable("gtceu:exquisite_cubic_zirconia_gem")
        .outputFluids("gtceu:grade_5_purified_water 990")
        .outputFluids("gtceu:steam 1000")
        .EUt(122880)
        .duration(200)

    gtr.electric_blast_furnace("gtlcore:grade_6_purified_water")
        .notConsumable("gtceu:luv_fluid_regulator")
        .inputFluids("gtceu:grade_5_purified_water 1000")
        .outputFluids("gtceu:grade_6_purified_water 900")
        .chancedOutput("gtceu:tiny_ammonium_chloride_dust", 500, 0)
        .EUt(122880)
        .duration(80)
        .blastFurnaceTemp(6740)

    gtr.evaporation("gtlcore:grade_7_purified_water")
        .inputFluids("gtceu:grade_6_purified_water 1000000")
        .outputFluids("gtceu:grade_7_purified_water 900000")
        .outputFluids("gtceu:grade_6_purified_water 50000")
        .outputFluids("gtceu:grade_5_purified_water 20000")
        .outputFluids("gtceu:acetic_acid 20")
        .outputFluids("gtceu:ethanol 40")
        .EUt(524288)
        .duration(4000)

    gtr.brewery("gtlcore:grade_8_purified_water")
        .inputFluids("gtceu:grade_7_purified_water 1000")
        .notConsumable("gtceu:neutronium_dust")
        .outputFluids("gtceu:grade_8_purified_water 1000")
        .EUt(122880)
        .duration(200)

    gtr.mixer("gtlcore:grade_9_purified_water")
        .inputFluids("gtceu:grade_8_purified_water 1000", "gtceu:liquid_oxygen 1000")
        .itemInputs("minecraft:blaze_powder")
        .outputFluids("gtceu:grade_9_purified_water 900")
        .itemOutputs("gtceu:dark_ash_dust")
        .EUt(524288)
        .duration(600)

    gtr.distillery("gtlcore:grade_10_purified_water")
        .inputFluids("gtceu:grade_9_purified_water 1000")
        .itemInputs("minecraft:echo_shard")
        .outputFluids("gtceu:grade_10_purified_water 900")
        .itemOutputs("9x gtceu:tiny_echo_shard_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:grade_11_purified_water")
        .notConsumable("gtlcore:fullerene_polymer_matrix_soft_tubing")
        .notConsumable("gtlcore:electron_source")
        .itemInputs("64x gtceu:carbon_nanotubes_dust")
        .inputFluids("gtceu:grade_10_purified_water 1000")
        .itemOutputs("576x gtceu:carbon_nanotubes_nugget")
        .outputFluids("gtceu:grade_11_purified_water 900")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.evaporation("gtlcore:grade_12_purified_water")
        .inputFluids("gtceu:grade_11_purified_water 10000000")
        .itemOutputs("gtceu:tiny_neutronium_dust")
        .outputFluids("gtceu:grade_12_purified_water 9999000")
        .outputFluids("gtceu:helium_3 100")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)

    gtr.arc_furnace("gtlcore:grade_13_purified_water")
        .inputFluids("gtceu:grade_12_purified_water 10000")
        .itemInputs("gtceu:degenerate_rhenium_dust")
        .itemOutputs("gtceu:degenerate_rhenium_plate")
        .outputFluids("gtceu:grade_13_purified_water 9990")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(60)

    gtr.plasma_condenser("gtlcore:grade_14_purified_water")
        .notConsumable("gtceu:uhv_fluid_regulator")
        .inputFluids("gtceu:grade_13_purified_water 10000", "gtceu:mithril_plasma 1000")
        .itemOutputs("60x gtceu:tiny_mithril_dust")
        .outputFluids("gtceu:grade_14_purified_water 9900")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)

    gtr.plasma_condenser("gtlcore:grade_15_purified_water")
        .notConsumable("gtceu:uev_fluid_regulator")
        .inputFluids("gtceu:grade_14_purified_water 10000", "gtceu:enderium_plasma 1000")
        .itemOutputs("61x gtceu:tiny_enderium_dust")
        .outputFluids("gtceu:grade_15_purified_water 9990")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.plasma_condenser("gtlcore:grade_16_purified_water")
        .notConsumable("gtceu:uiv_fluid_regulator")
        .inputFluids("gtceu:grade_15_purified_water 10000", "gtceu:echoite_plasma 1000")
        .itemOutputs("62x gtceu:tiny_echoite_dust")
        .outputFluids("gtceu:grade_16_purified_water 9999")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.precision_assembler("gtlcore:power_core")
        .itemInputs("4x gtlcore:power_module", "8x gtceu:uv_field_generator", "64x gtceu:gravitation_engine_unit", "16x gtceu:double_naquadria_plate")
        .inputFluids("gtceu:rhodium 2880", "gtceu:americium 2880", "gtceu:enriched_naquadah 2880", "gtceu:trinium 2880")
        .itemOutputs("gtlcore:power_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:dyson_swarm_module")
        .itemInputs("16x gtceu:enriched_naquadah_frame", "64x gtceu:solar_panel", "gtceu:uev_sensor", "gtceu:uev_emitter")
        .inputFluids("gtceu:mutated_living_solder 20000", "kubejs:gelid_cryotheum 20000", "gtceu:neutronium 18432", "gtceu:orichalcum 18432")
        .itemOutputs("64x gtlcore:dyson_swarm_module")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtlcore:dyson_control_casing")
        .itemInputs("gtceu:uiv_machine_hull", "gtlcore:exotic_processing_core", "#gtceu:circuits/uiv", "gtceu:high_performance_computation_array")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:pcb_coolant 2000", "gtceu:ruthenium 2304", "gtceu:naquadah 1296")
        .itemOutputs("gtlcore:dyson_control_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:dyson_receiver_casing")
        .itemInputs("gtceu:uiv_charger_4x", "2x gtlcore:pm_chip", "4x gtlcore:uiv_voltage_coil", "gtceu:echoite_quadruple_wire")
        .inputFluids("gtceu:mutated_living_solder 1296", "kubejs:gelid_cryotheum 576", "gtceu:echo_shard 2304", "gtceu:infuscolium 1296")
        .itemOutputs("gtlcore:dyson_receiver_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembly_line("gtlcore:dyson_deployment_core")
        .itemInputs("4x gtceu:uiv_machine_hull",
            "32x gtceu:uiv_conveyor_module",
            "32x gtceu:uiv_robot_arm",
            "32x gtceu:uiv_electric_piston",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser")
        .inputFluids("gtceu:lubricant 48000", "gtceu:mutated_living_solder 12800", "kubejs:gelid_cryotheum 128000", "gtceu:copernicium 256000")
        .itemOutputs("gtlcore:dyson_deployment_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:power_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:dyson_sphere")
        .itemInputs("4x gtceu:uiv_diode",
            "16x gtlcore:pm_wafer",
            "16x gtceu:uiv_sensor",
            "4x gtlcore:dyson_control_toroid",
            "64x gtceu:superconducting_coil",
            "16x #gtceu:circuits/uxv",
            "32x gtceu:echoite_hex_wire",
            "4x gtlcore:uxv_voltage_coil",
            "16x gtceu:double_vibranium_plate")
        .inputFluids("gtceu:mutated_living_solder 12000", "kubejs:gelid_cryotheum 12800", "gtceu:scandium 576000", "gtceu:mercury_barium_calcium_cuprate 576000")
        .itemOutputs("gtlcore:dyson_sphere")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:dyson_receiver_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:dyson_deployment_casing")
        .itemInputs("gtceu:uiv_diode",
            "4x gtceu:uiv_sensor",
            "2x gtceu:uiv_electric_pump",
            "gtceu:uhv_quantum_tank",
            "gtceu:uiv_conveyor_module",
            "4x gtceu:double_darmstadtium_plate")
        .inputFluids("gtceu:mutated_living_solder 1000", "kubejs:gelid_cryotheum 1000", "gtceu:lubricant 2000", "gtceu:copernicium 1296")
        .itemOutputs("gtlcore:dyson_deployment_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:module_connector"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:dyson_control_toroid")
        .itemInputs("gtceu:black_titanium_frame",
            "4x gtceu:uiv_emitter",
            "2x gtceu:uiv_electric_pump",
            "2x #gtceu:circuits/uiv",
            "gtlcore:exotic_processing_core",
            "8x gtceu:infuscolium_bolt",
            "24x gtceu:neutronium_foil")
        .inputFluids("gtceu:mutated_living_solder 2000", "kubejs:gelid_cryotheum 1000", "gtceu:zylon 1296", "gtceu:kevlar 1296")
        .itemOutputs("gtlcore:dyson_control_toroid")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:spacetime_assembly_line_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:restraint_device")
        .itemInputs("2x gtlcore:hollow_casing",
            "2x gtlcore:force_field_glass",
            "6x gtlcore:laser_cooling_unit",
            "8x gtceu:double_titansteel_plate",
            "24x gtceu:double_plutonium_241_plate",
            "16x gtceu:double_quantanium_plate",)
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:lubricant 2000", "gtceu:mutated_living_solder 1000", "gtceu:highurabilityompoundteel 576")
        .itemOutputs("gtlcore:restraint_device")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:containment_field_generator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:atomic_energy_excitation_plant")
        .itemInputs("8x gtceu:uev_mixer",
            "8x gtceu:uev_centrifuge",
            "16x gtceu:uev_chemical_reactor",
            "8x #gtceu:circuits/uiv",
            "12x gtceu:double_adamantine_plate",
            "16x gtceu:double_highurabilityompoundteel_plate",
            "16x gtceu:double_enderite_plate",
            "4x gtlcore:reinforced_echo_shard")
        .inputFluids("gtceu:lubricant 8000", "gtceu:mutated_living_solder 2000", "gtceu:echoite 1152", "gtceu:mana 32000")
        .itemOutputs("gtlcore:atomic_energy_excitation_plant")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:restraint_device"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
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
        .inputFluids("gtceu:positive_electron 100", "gtceu:antiproton 100")
        .outputFluids("gtceu:antineutron 2")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antimatter")
        .inputFluids("gtceu:antihydrogen 2000", "gtceu:antineutron 2000")
        .outputFluids("gtceu:antimatter 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.mixer("gtlcore:antihydrogen")
        .inputFluids("gtceu:positive_electron 200", "gtceu:antiproton 200")
        .notConsumable("gtceu:uv_field_generator")
        .outputFluids("gtceu:antihydrogen 200")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.fluid_solidifier("gtlcore:pellet_antimatter")
        .inputFluids("gtceu:antimatter 1000")
        .notConsumable("kubejs:ball_field_shape")
        .itemOutputs("gtlcore:pellet_antimatter")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)

    gtr.ultimate_material_forge("gtlcore:pellet_antimatter")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:antihydrogen 10")
        .itemInputs("64x ae2:matter_ball", "gtceu:neutronium_nugget")
        .itemOutputs("gtlcore:pellet_antimatter")
        .chancedOutput("gtlcore:void_matter", 100, 0)
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)

    gtr.ultimate_material_forge("gtlcore:corporeal_matter")
        .itemInputs("gtlcore:proto_matter", "minecraft:iron_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:nihonium 100")
        .itemOutputs("gtlcore:corporeal_matter")
        .chancedOutput("gtceu:heavy_quark_degenerate_matter_nugget", 500, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.ultimate_material_forge("gtlcore:kinetic_matter")
        .itemInputs("gtlcore:corporeal_matter", "gtceu:tritanium_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:naquadria 1000")
        .itemOutputs("gtlcore:kinetic_matter")
        .chancedOutput("gtlcore:amorphous_matter", 200, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)

    gtr.ultimate_material_forge("gtlcore:amorphous_matter")
        .itemInputs("gtlcore:corporeal_matter", "gtceu:carbon_nanotubes_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:legendarium 1000")
        .itemOutputs("gtlcore:amorphous_matter")
        .chancedOutput("gtlcore:essentia_matter", 100, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)

    gtr.ultimate_material_forge("gtlcore:essentia_matter")
        .itemInputs("gtlcore:amorphous_matter", "gtceu:heavy_quark_degenerate_matter_block")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:quantumchromodynamically_confined_matter 1000")
        .itemOutputs("gtlcore:essentia_matter")
        .chancedOutput("gtlcore:dark_matter", 100, 0)
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)

    gtr.ultimate_material_forge("gtlcore:omni_matter")
        .itemInputs("gtlcore:essentia_matter", "gtlcore:kinetic_matter")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:dense_neutron_plasma 1000")
        .itemOutputs("gtlcore:omni_matter")
        .chancedOutput("gtceu:tiny_cosmicneutronium_dust", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.ultimate_material_forge("gtlcore:void_matter")
        .itemInputs("gtlcore:omni_matter", "gtlcore:pellet_antimatter")
        .inputFluids("gtceu:uu_matter 2000", "gtceu:gluons 1000")
        .itemOutputs("gtlcore:void_matter")
        .chancedOutput("gtlcore:corporeal_matter", 2000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.ultimate_material_forge("gtlcore:temporal_matter")
        .notConsumable("gtlcore:quantum_anomaly")
        .itemInputs("gtlcore:kinetic_matter")
        .inputFluids("gtceu:uu_matter 1000", "gtceu:draconiumawakened_plasma 1000")
        .itemOutputs("gtlcore:temporal_matter")
        .chancedOutput("gtlcore:omni_matter", 500, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(600)

    gtr.ultimate_material_forge("gtlcore:dark_matter")
        .itemInputs("gtlcore:temporal_matter", "gtlcore:void_matter")
        .inputFluids("gtceu:uu_matter 3000", "gtceu:dimensionallytranscendentcrudecatalyst 1000")
        .itemOutputs("gtlcore:dark_matter")
        .chancedOutput("gtlcore:kinetic_matter", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)

    gtr.assembler("gtlcore:dyson_deployment_magnet")
        .itemInputs("gtceu:uiv_energy_output_hatch", "4x gtceu:superconducting_coil", "8x gtlcore:pm_chip", "4x #gtceu:circuits/uiv", "6x gtceu:neutronium_plate")
        .itemOutputs("gtlcore:dyson_deployment_magnet")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.assembler("gtlcore:sps_casing")
        .itemInputs("gtceu:zylon_block", "gtlcore:restraint_device", "4x #gtceu:circuits/uev", "4x gtceu:small_quantanium_gear", "gtceu:neutronium_hex_cable", "32x gtceu:polyetheretherketone_foil")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("gtlcore:sps_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.aggregation_device("gtlcore:draconic_core")
        .notConsumable("gtlcore:stabilizer_core")
        .itemInputs("gtlcore:draconium_dust", "gtceu:zpm_field_generator", "gtceu:lapotronic_energy_orb", "gtceu:mithril_block", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:uv_field_generator", "minecraft:nether_star", "gtceu:enderium_block")
        .itemOutputs("2x gtlcore:draconic_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.aggregation_device("gtlcore:wyvern_core")
        .notConsumable("gtlcore:stabilizer_core")
        .itemInputs("gtlcore:draconium_dust", "gtceu:uhv_field_generator", "gtceu:quantum_eye", "gtceu:adamantine_block", "gtlcore:draconic_core", "gtceu:uev_field_generator", "gtceu:quantum_star", "gtceu:orichalcum_block")
        .itemOutputs("2x gtlcore:wyvern_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.aggregation_device("gtlcore:awakened_core")
        .notConsumable("gtlcore:dragon_stabilizer_core")
        .itemInputs("gtceu:draconium_dust", "gtceu:uiv_field_generator", "gtlcore:dragon_heart", "gtceu:vibranium_block", "gtlcore:wyvern_core", "gtceu:uxv_field_generator", "gtceu:gravi_star", "gtceu:taranium_block")
        .itemOutputs("2x gtlcore:awakened_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.aggregation_device("gtlcore:chaotic_core")
        .notConsumable("gtlcore:dragon_stabilizer_core")
        .itemInputs("gtceu:draconium_nanoswarm", "gtceu:opv_field_generator", "gtlcore:chaos_shard", "gtceu:legendarium_block", "gtlcore:awakened_core", "gtlcore:max_field_generator", "gtlcore:unstable_star", "gtceu:draconiumawakened_block")
        .itemOutputs("2x gtlcore:chaotic_core")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)
        .fusionStartEU(4800000000)

    gtr.distillery("gtlcore:kerosene")
        .itemInputs("gtceu:coke_dust")
        .inputFluids("gtceu:coal_tar 200")
        .outputFluids("gtceu:kerosene 100")
        .itemOutputs("gtceu:dark_ash_dust")
        .EUt(120)
        .duration(30)

    gtr.distillery("gtlcore:rp_1")
        .circuit(1)
        .inputFluids("gtceu:kerosene 50")
        .outputFluids("gtceu:rp_1 25")
        .EUt(120)
        .duration(16)

    gtr.mixer("gtlcore:rocket_fuel_rp_1")
        .inputFluids("gtceu:rp_1 1000", "gtceu:liquid_oxygen 1000")
        .outputFluids("gtceu:rocket_fuel_rp_1 1000")
        .EUt(1920)
        .duration(16)

    gtr.large_chemical_reactor("gtlcore:hydrazine")
        .inputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:ammonia 2000")
        .outputFluids("gtceu:hydrazine 1000", "minecraft:water 1000")
        .EUt(30)
        .duration(320)

    gtr.mixer("gtlcore:dense_hydrazine_fuel_mixture")
        .inputFluids("gtceu:hydrazine 1000", "gtceu:methanol 1000")
        .outputFluids("gtceu:dense_hydrazine_fuel_mixture 1000")
        .EUt(240)
        .duration(320)

    gtr.mixer("gtlcore:rocket_fuel_h8n4c2o4")
        .inputFluids("gtceu:dimethylhydrazine 1000", "gtceu:dinitrogen_tetroxide 1000")
        .outputFluids("gtceu:rocket_fuel_h8n4c2o4 1000")
        .EUt(1920)
        .duration(480)

    gtr.mixer("gtlcore:rocket_fuel_cn3h7o3")
        .inputFluids("gtceu:monomethylhydrazine 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:rocket_fuel_cn3h7o3 1000")
        .EUt(1920)
        .duration(200)

    gtr.dehydrator("gtlcore:monomethylhydrazine")
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

    gtr.mixer("gtlcore:explosivehydrazine")
        .inputFluids("gtceu:glyceryl_trinitrate 1000", "gtceu:dense_hydrazine_fuel_mixture 3000")
        .notConsumable("gtceu:luv_field_generator")
        .itemInputs("16x gtceu:gelled_toluene", "8x minecraft:fire_charge")
        .outputFluids("gtceu:explosivehydrazine 4000")
        .EUt(1920)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.large_chemical_reactor("gtlcore:stellar_energy_rocket_fuel")
        .itemInputs("gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:rocket_fuel_cn3h7o3 2000", "gtceu:explosivehydrazine 3000", "gtceu:nitrobenzene 8000", "gtceu:dinitrogen_tetroxide 6000", "gtceu:kerosene 4000")
        .itemInputs("2x gtceu:hmxexplosive_dust")
        .itemOutputs("gtceu:naquadah_dust")
        .outputFluids("gtceu:stellar_energy_rocket_fuel 5000")
        .EUt(122880)
        .duration(120)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.chemical_reactor("gtlcore:hmxexplosive_dust")
        .notConsumableFluid("gtceu:acetic_anhydride 1000")
        .inputFluids("gtceu:fuming_nitric_acid 2000")
        .itemInputs("22x gtceu:hexamethylenetetramine_dust")
        .itemOutputs("gtceu:hmxexplosive_dust")
        .EUt(1024)
        .duration(20)

    gtr.chemical_reactor("gtlcore:fuming_nitric_acid")
        .inputFluids("gtceu:nitrogen_dioxide 1000", "gtceu:nitric_acid 1000")
        .outputFluids("gtceu:fuming_nitric_acid 1000")
        .EUt(120)
        .duration(200)

    gtr.lightning_processor("gtlcore:nether_air")
        .itemInputs("64x minecraft:gunpowder")
        .inputFluids("gtceu:blaze 1000", "gtceu:hydrogen_sulfide 10000", "gtceu:sulfur_dioxide 10000", "gtceu:carbon_monoxide 10000", "gtceu:coal_gas 1000", "gtceu:helium 1000")
        .outputFluids("gtceu:nether_air 1000")
        .EUt(120)
        .duration(400)

    gtr.lightning_processor("gtlcore:ender_air")
        .itemInputs("64x ae2:ender_dust")
        .inputFluids("gtceu:fuming_nitric_acid 1000", "gtceu:nitrogen_dioxide 10000", "gtceu:helium 10000", "gtceu:radon 1000", "gtceu:deuterium 1000", "gtceu:xenon 1000")
        .outputFluids("gtceu:ender_air 1000")
        .EUt(480)
        .duration(800)

    gtr.chemical_bath("gtlcore:damascus_steel_dust")
        .itemInputs("gtceu:steel_dust")
        .inputFluids("gtceu:lubricant 100")
        .itemOutputs("gtceu:damascus_steel_dust")
        .EUt(120)
        .duration(200)
        .dimension("kubejs:ancient_world")

    gtr.chemical_reactor("gtlcore:ammonium_chloride_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:ammonia 1000")
        .itemOutputs("6x gtceu:ammonium_chloride_dust")
        .EUt(30)
        .duration(120)

    gtr.electric_blast_furnace("gtlcore:iridium_dioxide_dust")
        .itemInputs("6x gtceu:iridium_metal_residue_dust", "5x gtceu:sodium_chlorate_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("3x gtceu:iridium_dioxide_dust", "2x gtceu:salt_dust")
        .chancedOutput("gtceu:platinum_sludge_residue_dust", 8000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1000")
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(790)

    gtr.mixer("gtlcore:potassium_pyrosulfate_dust")
        .itemInputs("2x gtceu:potassium_dust", "2x gtceu:sulfur_dust")
        .inputFluids("gtceu:oxygen 7000")
        .itemOutputs("11x gtceu:potassium_pyrosulfate_dust")
        .EUt(120)
        .duration(120)

    gtr.centrifuge("gtlcore:rare_earth_chlorides")
        .notConsumable("gtceu:hv_item_magnet")
        .inputFluids("gtceu:rare_earth_chlorides 2000")
        .outputFluids("gtceu:la_nd_oxides_solution 250",
            "gtceu:sm_gd_oxides_solution 250",
            "gtceu:tb_ho_oxides_solution 250",
            "gtceu:er_lu_oxides_solution 250",
            "gtceu:hydrochloric_acid 1000")
        .EUt(480)
        .duration(200)

    gtr.dehydrator("gtlcore:la_nd_oxides_solution")
        .inputFluids("gtceu:la_nd_oxides_solution 4000")
        .chancedOutput("5x gtceu:lanthanum_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:cerium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:praseodymium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:neodymium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:sm_gd_oxides_solution")
        .inputFluids("gtceu:sm_gd_oxides_solution 4000")
        .chancedOutput("5x gtceu:scandium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:samarium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:europium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:gadolinium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:tb_ho_oxides_solution")
        .inputFluids("gtceu:tb_ho_oxides_solution 4000")
        .chancedOutput("5x gtceu:yttrium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:terbium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:dysprosium_oxide_dust", 4300, 275)
        .chancedOutput("5x gtceu:holmium_oxide_dust", 4300, 275)
        .EUt(480)
        .duration(220)

    gtr.dehydrator("gtlcore:er_lu_oxides_solution")
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
        "promethium",
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
        gtr.electric_blast_furnace("gtlcore:" + element + "_dust")
            .itemInputs("10x gtceu:" + element + "_oxide_dust", "3x gtceu:carbon_dust")
            .itemOutputs("4x gtceu:" + element + "_dust")
            .outputFluids("gtceu:carbon_dioxide 3000")
            .EUt(480)
            .duration(200)
            .blastFurnaceTemp(2500)
    })

    gtr.chemical_reactor("gtlcore:zirconium_hafnium_chloride")
        .itemInputs("6x gtceu:zircon_dust")
        .inputFluids("gtceu:chlorine 8000")
        .outputFluids("gtceu:zirconium_hafnium_chloride 1000", "gtceu:zircon_chlorinating_residue 1000")
        .EUt(120)
        .duration(120)

    gtr.chemical_reactor("gtlcore:zirconiu_hafnium_oxychloride")
        .inputFluids("gtceu:zirconium_hafnium_chloride 1000", "minecraft:water 1000")
        .outputFluids("gtceu:zirconiu_hafnium_oxychloride 1000", "gtceu:diluted_hydrochloric_acid 2000")
        .EUt(480)
        .duration(100)

    gtr.large_chemical_reactor("gtlcore:zirconium_oxide_dust")
        .itemInputs("36x gtceu:ammonium_chloride_dust", "9x gtceu:potassium_hydroxide_dust", "10x gtceu:hematite_dust")
        .inputFluids("gtceu:zirconiu_hafnium_oxychloride 3000", "gtceu:sulfur_trioxide 3000", "gtceu:hydrogen_peroxide 6000")
        .itemOutputs("21x gtceu:potassium_sulfate_dust", "3x gtceu:zirconium_oxide_dust")
        .chancedOutput("3x gtceu:hafnium_oxide_dust", 8000, 0)
        .outputFluids("gtceu:ammonia 6000", "gtceu:iron_iii_chloride 4000")
        .EUt(1920)
        .duration(100)

    gtr.chemical_reactor("gtlcore:hafnium_chloride_dust")
        .itemInputs("3x gtceu:hafnium_oxide_dust", "gtceu:carbon_dust")
        .inputFluids("gtceu:chlorine 4000")
        .itemOutputs("5x gtceu:hafnium_chloride_dust")
        .outputFluids("gtceu:carbon_dioxide 1000")
        .EUt(120)
        .duration(150)

    gtr.electric_blast_furnace("gtlcore:hafnium_dust")
        .itemInputs("5x gtceu:hafnium_chloride_dust", "2x gtceu:magnesium_dust")
        .itemOutputs("1x gtceu:hafnium_dust", "6x gtceu:magnesium_chloride_dust")
        .EUt(120)
        .duration(300)
        .blastFurnaceTemp(3400)

    gtr.incubator("gtlcore:stem_cells")
        .chancedInput("gtlcore:glacio_spirit", 6000, 500)
        .itemInputs("gtceu:osmiridium_dust")
        .inputFluids("gtceu:sterilized_growth_medium 500", "gtceu:bacteria 500")
        .itemOutputs("32x gtceu:stem_cells")
        .outputFluids("gtceu:bacterial_sludge 500")
        .EUt(30720)
        .duration(300)
        .addData("filter_casing", 2)
        .addData("radioactivity", 10)
        .addCondition(new GravityCondition(true))

    gtr.incubator("gtlcore:glacio_spirit")
        .chancedInput("4x gtlcore:glacio_spirit", 1000, 100)
        .itemInputs("16x gtceu:celestine_dust", "gtlcore:essence")
        .inputFluids("ad_astra:cryo_fuel 100", "gtceu:ice 900")
        .itemOutputs("64x gtlcore:glacio_spirit")
        .EUt(30720)
        .duration(2000)
        .addData("radioactivity", 40)

    gtr.assembly_line("gtlcore:carbon_nanoswarm")
        .itemInputs("16x #gtceu:circuits/uv", "16x gtceu:uv_robot_arm", "32x gtceu:stem_cells", "32x gtceu:naquadah_alloy_ring", "16x gtceu:naquadah_alloy_rod", "64x gtceu:carbon_dust")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:polytetrafluoroethylene 4608", "gtceu:glowstone 4608", "gtceu:rubber 4608")
        .itemOutputs("2x gtceu:carbon_nanoswarm")
        .EUt(122880)
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:activated_carbon_dust"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(32))

    gtr.assembly_line("gtlcore:nano_forge_1")
        .itemInputs("16x gtceu:uv_machine_hull", "16x gtceu:carbon_nanoswarm", "16x gtceu:zpm_field_generator", "16x gtceu:uv_robot_arm", "16x gtceu:uv_conveyor_module", "32x gtceu:uv_electric_motor", "16x #gtceu:circuits/uv", "16x gtceu:naquadah_octal_wire")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtlcore:nano_forge_1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:carbon_nanoswarm"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtlcore:nano_forge_2")
        .itemInputs("16x gtceu:uev_machine_hull", "16x gtceu:neutronium_nanoswarm", "16x gtlcore:draconic_core", "16x gtceu:uev_robot_arm", "16x gtceu:uev_conveyor_module", "32x gtceu:uev_electric_motor", "16x #gtceu:circuits/uev", "16x gtceu:mithril_octal_wire")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtlcore:nano_forge_2")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:nano_forge_1"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:nano_forge_3")
        .itemInputs("16x gtceu:uxv_machine_hull", "16x gtceu:draconium_nanoswarm", "16x gtlcore:awakened_core", "16x gtceu:uxv_robot_arm", "16x gtceu:uxv_conveyor_module", "32x gtceu:uxv_electric_motor", "16x #gtceu:circuits/uxv", "16x gtceu:taranium_octal_wire", "gtlcore:wyvern_energy_core", "16x gtceu:double_celestialtungsten_plate")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtlcore:nano_forge_3")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:nano_forge_2"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.assembly_line("gtlcore:field_extruder_factory")
        .itemInputs("16x gtceu:uhv_extruder", "16x gtceu:uhv_forming_press", "8x gtceu:uev_field_generator", "4x gtceu:uev_emitter", "4x #gtceu:circuits/uiv", "4x gtceu:rhenium_nanoswarm", "64x gtceu:stress_proof_casing", "64x gtceu:dalisenite_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:platinum 4608", "gtceu:reinforced_epoxy_resin 4608", "gtceu:uranium_rhodium_dinaquadide 4608")
        .itemOutputs("gtlcore:field_extruder_factory")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_extruder"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:mega_presser")
        .itemInputs("16x gtceu:uhv_compressor", "16x gtceu:uhv_forge_hammer", "16x gtceu:uhv_rolling", "32x gtceu:uev_electric_piston", "4x gtceu:uev_robot_arm", "4x #gtceu:circuits/uiv", "64x gtceu:stress_proof_casing", "64x gtceu:dalisenite_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:palladium 4608", "gtceu:reinforced_epoxy_resin 4608", "gtceu:uranium_rhodium_dinaquadide 4608")
        .itemOutputs("gtlcore:mega_presser")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_material_press"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:mega_wiremill")
        .itemInputs("16x gtceu:uhv_wiremill", "16x gtceu:uhv_loom", "64x gtceu:uev_electric_motor", "4x gtceu:uev_robot_arm", "4x #gtceu:circuits/uiv", "8x gtceu:abyssalalloy_hex_wire", "32x gtceu:double_germanium_plate", "16x gtceu:double_maraging_steel_300_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:niobium 4608", "gtceu:tantalum_carbide 4608", "gtceu:ruthenium_trinium_americium_neutronate 4608")
        .itemOutputs("gtlcore:mega_wiremill")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_wiremill"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:dimensional_focus_engraving_array")
        .itemInputs("8x gtceu:uhv_laser_engraver", "16x gtceu:neutronium_nanoswarm", "64x gtceu:normal_laser_pipe", "8x gtceu:uev_field_generator", "4x gtceu:uev_emitter", "16x #gtceu:circuits/uiv", "16x gtceu:quantanium_rod", "32x gtceu:double_dubnium_plate")
        .inputFluids("gtceu:mutated_living_solder 28800", "gtceu:polyetheretherketone 28800", "gtceu:pikyonium 4608", "gtceu:abyssalalloy 4608")
        .itemOutputs("gtlcore:dimensional_focus_engraving_array")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:engraving_laser_plant"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembler("gtlcore:naquadah_alloy_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadah_alloy_plate")
        .circuit(6)
        .itemOutputs("gtlcore:naquadah_alloy_casing")
        .EUt(16)
        .duration(50)

    gtr.nano_forge("gtlcore:carbon_nanoswarm")
        .notConsumable("gtceu:lime_glass_lens")
        .itemInputs("64x gtceu:carbon_block", "64x gtceu:soc")
        .itemOutputs("64x gtceu:carbon_nanoswarm")
        .inputFluids("gtceu:soldering_alloy 20000", "gtceu:lubricant 20000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:glowstone_nanoswarm")
        .notConsumable("gtceu:orange_glass_lens")
        .itemInputs("64x minecraft:glowstone", "64x gtceu:advanced_soc")
        .itemOutputs("64x gtceu:glowstone_nanoswarm")
        .inputFluids("gtceu:uu_amplifier 10000", "gtceu:soldering_alloy 20000", "gtceu:lubricant 20000")
        .duration(16000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:copper_nanoswarm")
        .notConsumable("gtceu:brown_glass_lens")
        .itemInputs("8x minecraft:copper_block", "8x gtceu:soc")
        .itemOutputs("gtceu:copper_nanoswarm")
        .inputFluids("gtceu:naquadah 2000", "gtceu:soldering_alloy 10000", "gtceu:bismuth 10000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:iron_nanoswarm")
        .notConsumable("gtceu:gray_glass_lens")
        .itemInputs("8x minecraft:iron_block", "8x gtceu:soc")
        .itemOutputs("gtceu:iron_nanoswarm")
        .inputFluids("gtceu:naquadah 2000", "gtceu:soldering_alloy 10000", "gtceu:bismuth 10000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:gold_nanoswarm")
        .notConsumable("gtceu:yellow_glass_lens")
        .itemInputs("8x minecraft:gold_block", "16x gtceu:soc")
        .itemOutputs("gtceu:gold_nanoswarm")
        .inputFluids("gtceu:enriched_naquadah 2000", "gtceu:soldering_alloy 20000", "gtceu:bismuth 20000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:silver_nanoswarm")
        .notConsumable("gtceu:light_gray_glass_lens")
        .itemInputs("8x gtceu:silver_block", "16x gtceu:soc")
        .itemOutputs("gtceu:silver_nanoswarm")
        .inputFluids("gtceu:enriched_naquadah 2000", "gtceu:soldering_alloy 20000", "gtceu:bismuth 20000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:iridium_nanoswarm")
        .notConsumable("gtceu:glass_lens")
        .itemInputs("8x gtceu:iridium_block", "32x gtceu:soc")
        .itemOutputs("gtceu:iridium_nanoswarm")
        .inputFluids("gtceu:naquadria 2000", "gtceu:hafnium 8000", "gtceu:soldering_alloy 20000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:osmium_nanoswarm")
        .notConsumable("gtceu:diamond_lens")
        .itemInputs("8x gtceu:osmium_block", "32x gtceu:soc")
        .itemOutputs("gtceu:osmium_nanoswarm")
        .inputFluids("gtceu:naquadria 2000", "gtceu:hafnium 8000", "gtceu:soldering_alloy 20000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:rhenium_nanoswarm")
        .notConsumable("gtceu:cyan_glass_lens")
        .itemInputs("8x gtceu:rhenium_block", "64x gtceu:soc")
        .itemOutputs("gtceu:rhenium_nanoswarm")
        .inputFluids("gtceu:naquadria 2000", "gtceu:uu_amplifier 2000", "gtceu:soldering_alloy 20000")
        .duration(8000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:naquadah_nanoswarm")
        .notConsumable("gtceu:emerald_lens")
        .itemInputs("8x gtceu:naquadah_block", "16x gtceu:advanced_soc")
        .itemOutputs("gtceu:naquadah_nanoswarm")
        .inputFluids("gtceu:naquadria 8000", "gtceu:uu_amplifier 2000", "gtceu:mutated_living_solder 20000")
        .duration(16000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:neutronium_nanoswarm")
        .notConsumable("gtceu:nether_star_lens")
        .itemInputs("8x gtceu:neutronium_block", "64x gtceu:soc", "32x gtceu:advanced_soc")
        .itemOutputs("gtceu:neutronium_nanoswarm")
        .inputFluids("gtceu:neutronium 4000", "gtceu:uu_amplifier 2000", "gtceu:mutated_living_solder 20000")
        .duration(32000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:orichalcum_nanoswarm")
        .notConsumable("gtceu:magenta_glass_lens")
        .itemInputs("8x gtceu:orichalcum_block", "64x gtceu:advanced_soc", "64x gtceu:advanced_soc")
        .itemOutputs("gtceu:orichalcum_nanoswarm")
        .inputFluids("gtceu:neutronium 8000", "gtceu:uu_amplifier 4000", "gtceu:mutated_living_solder 40000")
        .duration(32000)
        .EUt(GTValues.VA[GTValues.UV])
        .addData("nano_forge_tier", 1)

    gtr.nano_forge("gtlcore:enderium_nanoswarm")
        .notConsumable("gtceu:green_glass_lens")
        .itemInputs("8x gtceu:enderium_block", "64x gtceu:advanced_soc", "64x gtceu:advanced_soc")
        .itemOutputs("gtceu:enderium_nanoswarm")
        .inputFluids("gtceu:neutronium 8000", "gtceu:uu_amplifier 4000", "gtceu:mutated_living_solder 40000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData("nano_forge_tier", 2)

    gtr.nano_forge("gtlcore:infuscolium_nanoswarm")
        .notConsumable("gtceu:pink_glass_lens")
        .itemInputs("8x gtceu:infuscolium_block", "64x gtceu:advanced_soc", "32x gtceu:highly_advanced_soc")
        .itemOutputs("gtceu:infuscolium_nanoswarm")
        .inputFluids("gtceu:neutronium 8000", "gtceu:uu_amplifier 4000", "gtceu:mutated_living_solder 40000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData("nano_forge_tier", 2)

    gtr.nano_forge("gtlcore:uruium_nanoswarm")
        .notConsumable("gtceu:light_blue_glass_lens")
        .itemInputs("8x gtceu:uruium_block", "64x gtceu:advanced_soc", "64x gtceu:highly_advanced_soc")
        .itemOutputs("gtceu:uruium_nanoswarm")
        .inputFluids("gtceu:uu_matter 20000", "gtceu:mutated_living_solder 40000", "gtceu:super_mutated_living_solder 40000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData("nano_forge_tier", 2)

    gtr.nano_forge("gtlcore:vibranium_nanoswarm")
        .notConsumable("gtceu:light_blue_glass_lens")
        .itemInputs("8x gtceu:vibranium_block", "64x gtceu:highly_advanced_soc", "64x gtceu:highly_advanced_soc")
        .itemOutputs("gtceu:vibranium_nanoswarm")
        .inputFluids("gtceu:uu_matter 20000", "gtceu:mutated_living_solder 40000", "gtceu:super_mutated_living_solder 40000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData("nano_forge_tier", 2)

    gtr.nano_forge("gtlcore:starmetal_nanoswarm")
        .notConsumable("gtceu:red_glass_lens")
        .itemInputs("8x gtceu:starmetal_block", "64x gtceu:highly_advanced_soc", "64x gtceu:highly_advanced_soc", "64x gtceu:exquisite_glass_gem", "64x gtceu:exquisite_amethyst_gem")
        .itemOutputs("gtceu:starmetal_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:mutated_living_solder 80000", "gtceu:super_mutated_living_solder 80000")
        .duration(8000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData("nano_forge_tier", 2)

    gtr.nano_forge("gtlcore:draconium_nanoswarm")
        .notConsumable("gtceu:purple_glass_lens")
        .itemInputs("8x gtceu:draconium_block", "32x gtceu:highly_advanced_soc_wafer", "32x gtlcore:optical_ram_wafer", "32x gtlcore:optical_soc", "8x gtlcore:exotic_processing_core")
        .itemOutputs("gtceu:draconium_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:mutated_living_solder 80000", "gtceu:super_mutated_living_solder 80000")
        .duration(16000)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData("nano_forge_tier", 2)

    gtr.nano_forge("gtlcore:cosmicneutronium_nanoswarm")
        .notConsumable("gtceu:black_glass_lens")
        .itemInputs("8x gtceu:cosmicneutronium_block", "32x gtlcore:optical_soc", "32x gtlcore:exotic_wafer", "16x gtlcore:cosmic_ram_wafer", "8x gtlcore:cosmic_processing_unit_core")
        .itemOutputs("gtceu:cosmicneutronium_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:crystalmatrix 40000", "gtceu:liquid_cosmic_mesh 40000")
        .duration(8000)
        .EUt(GTValues.VA[GTValues.UXV])
        .addData("nano_forge_tier", 3)

    gtr.nano_forge("gtlcore:white_dwarf_mtter_nanoswarm")
        .notConsumable("gtceu:ruby_lens")
        .itemInputs("8x gtceu:white_dwarf_mtter_block", "8x gtlcore:cosmic_processing_unit_core")
        .itemOutputs("gtceu:white_dwarf_mtter_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:neutronium 40000", "gtceu:cosmic_element 40000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UXV])
        .addData("nano_forge_tier", 3)

    gtr.nano_forge("gtlcore:black_dwarf_mtter_nanoswarm")
        .notConsumable("gtceu:ruby_lens")
        .itemInputs("8x gtceu:black_dwarf_mtter_block", "8x gtlcore:cosmic_processing_unit_core")
        .itemOutputs("gtceu:black_dwarf_mtter_nanoswarm")
        .inputFluids("gtceu:uu_matter 40000", "gtceu:neutronium 40000", "gtceu:cosmic_element 40000")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UXV])
        .addData("nano_forge_tier", 3)

    gtr.nano_forge("gtlcore:spacetime_nanoswarm")
        .notConsumable("gtceu:sapphire_lens")
        .notConsumable("gtlcore:quantum_anomaly")
        .itemInputs("8x gtceu:spacetime_block", "4x gtlcore:eigenfolded_kerr_manifold", "16x gtlcore:supracausal_ram_wafer", "8x gtlcore:supracausal_processing_core")
        .itemOutputs("gtceu:spacetime_nanoswarm")
        .inputFluids("gtceu:uu_matter 80000", "gtceu:infinity 40000", "gtceu:temporalfluid 40000")
        .duration(8000)
        .EUt(GTValues.VA[GTValues.UXV])
        .addData("nano_forge_tier", 3)

    gtr.nano_forge("gtlcore:transcendentmetal_nanoswarm")
        .notConsumable("kubejs:non_linear_optical_lens")
        .notConsumable("gtlcore:hypercube")
        .itemInputs("gtceu:rhenium_nanoswarm", "8x gtceu:transcendentmetal_block", "8x gtlcore:recursively_folded_negative_space", "#gtceu:circuits/max")
        .itemOutputs("gtceu:transcendentmetal_nanoswarm")
        .inputFluids("gtceu:uu_matter 80000", "gtceu:raw_star_matter_plasma 40000", "gtceu:spatialfluid 20000")
        .duration(16000)
        .EUt(GTValues.VA[GTValues.UXV])
        .addData("nano_forge_tier", 3)

    gtr.nano_forge("gtlcore:eternity_nanoswarm")
        .notConsumable("gtceu:blue_glass_lens")
        .notConsumable("gtlcore:quantum_anomaly")
        .notConsumable("gtlcore:eternity_catalyst")
        .itemInputs("gtceu:neutronium_nanoswarm", "8x gtceu:eternity_block", "8x gtlcore:ctc_computational_unit")
        .itemOutputs("gtceu:eternity_nanoswarm")
        .inputFluids("gtceu:spatialfluid 80000", "gtceu:exciteddtsc 80000", "gtceu:primordialmatter 80000")
        .duration(64000)
        .EUt(GTValues.VA[GTValues.UXV])
        .addData("nano_forge_tier", 3)

    gtr.electric_blast_furnace("gtlcore:tellurium_oxide_dust")
        .itemInputs("gtceu:tellurium_dust")
        .inputFluids("gtceu:oxygen 2000")
        .itemOutputs("3x gtceu:tellurium_oxide_dust")
        .EUt(128)
        .duration(100)
        .blastFurnaceTemp(1760)

    gtr.chemical_reactor("gtlcore:butane_1_4_diol")
        .notConsumable("gtceu:molybdenum_trioxide_dust")
        .itemInputs("3x gtceu:tellurium_oxide_dust")
        .inputFluids("gtceu:butane 1000")
        .outputFluids("gtceu:butane_1_4_diol 1000")
        .itemOutputs("gtceu:tellurium_dust")
        .EUt(1920)
        .duration(20)

    gtr.chemical_reactor("gtlcore:gammabutyrolactone")
        .notConsumable("gtceu:copper_dust")
        .inputFluids("gtceu:butane_1_4_diol 1000")
        .outputFluids("gtceu:gammabutyrolactone 1000", "gtceu:hydrogen 4000")
        .EUt(1920)
        .duration(80)

    gtr.chemical_reactor("gtlcore:methylamine")
        .circuit(1)
        .inputFluids("gtceu:ammonia 1000", "gtceu:methanol 1000")
        .outputFluids("gtceu:methylamine 1000", "minecraft:water 1000")
        .EUt(1920)
        .duration(80)

    gtr.chemical_reactor("gtlcore:nmethylpyrolidone")
        .inputFluids("gtceu:gammabutyrolactone 1000", "gtceu:methylamine 1000")
        .outputFluids("gtceu:nmethylpyrolidone 1000", "minecraft:water 1000")
        .EUt(7680)
        .duration(120)

    gtr.chemical_reactor("gtlcore:p_nitroaniline")
        .notConsumableFluid("gtceu:acetic_anhydride 1000")
        .inputFluids("gtceu:aniline 1000", "gtceu:nitration_mixture 2000")
        .outputFluids("gtceu:p_nitroaniline 1000", "gtceu:diluted_sulfuric_acid 1000")
        .EUt(1920)
        .duration(150)

    gtr.large_chemical_reactor("gtlcore:p_phenylenediamine_dust")
        .notConsumable("gtceu:palladium_dust")
        .inputFluids("gtceu:nitrogen_dioxide 100", "gtceu:hydrogen 6000", "gtceu:p_nitroaniline 1000")
        .outputFluids("minecraft:water 2000")
        .itemOutputs("16x gtceu:p_phenylenediamine_dust")
        .EUt(122880)
        .duration(60)

    gtr.chemical_reactor("gtlcore:terephthalicacid")
        .notConsumable("gtceu:cadmium_dust")
        .notConsumable("gtceu:sodium_bisulfate_dust")
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .inputFluids("gtceu:phthalic_acid 1000")
        .outputFluids("gtceu:terephthalicacid 1000")
        .EUt(480)
        .duration(800)

    gtr.chemical_reactor("gtlcore:dimethylterephthalate")
        .inputFluids("gtceu:terephthalicacid 1000", "gtceu:methanol 2000", "gtceu:sulfuric_acid 2000")
        .outputFluids("gtceu:dimethylterephthalate 1000", "gtceu:diluted_sulfuric_acid 2000")
        .EUt(480)
        .duration(210)

    gtr.large_chemical_reactor("gtlcore:terephthaloyl_chloride_dust")
        .inputFluids("gtceu:thionyl_chloride 20000", "gtceu:dimethylterephthalate 5000", "gtceu:carbon_dioxide 6000")
        .itemOutputs("64x gtceu:terephthaloyl_chloride_dust", "48x gtceu:terephthaloyl_chloride_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 20000", "gtceu:sulfur_dioxide 20000")
        .EUt(1920)
        .duration(240)

    gtr.large_chemical_reactor("gtlcore:liquidcrystalkevlar")
        .itemInputs("gtceu:calcium_chloride_dust", "9x gtceu:terephthaloyl_chloride_dust", "9x gtceu:p_phenylenediamine_dust")
        .inputFluids("gtceu:nmethylpyrolidone 1000")
        .outputFluids("gtceu:liquidcrystalkevlar 9000")
        .EUt(524288)
        .duration(160)

    gtr.assembler("gtlcore:chemical_distort")
        .itemInputs("gtlcore:chemical_plant", "16x gtceu:carbon_nanoswarm", "8x gtceu:uv_electric_pump", "8x gtceu:uv_emitter", "8x #gtceu:circuits/uv", "8x gtceu:naquadria_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtlcore:chemical_distort")
        .EUt(524288)
        .duration(400)

    gtr.distort("gtlcore:epoxy")
        .itemInputs("gtceu:copper_nanoswarm")
        .itemOutputs("gtceu:contaminable_copper_nanoswarm")
        .itemInputs("1x gtceu:phosphorus_dust", "16x gtceu:salt_dust")
        .inputFluids("minecraft:water 21500", "gtceu:oxygen 10500", "gtceu:propene 4000", "gtceu:benzene 6000")
        .itemOutputs("86x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:epoxy 4000", "gtceu:hydrogen 16000", "gtceu:hydrochloric_acid 4000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(240)
        .blastFurnaceTemp(5600)

    gtr.distort("gtlcore:polybenzimidazole")
        .itemInputs("gtceu:iridium_nanoswarm")
        .itemOutputs("gtceu:contaminable_iridium_nanoswarm")
        .notConsumable("gtceu:potassium_dichromate_dust")
        .itemInputs("1152x gtceu:carbon_dust", "16x gtceu:copper_dust", "144x gtceu:zinc_dust")
        .inputFluids("gtceu:chlorobenzene 28800", "gtceu:sulfuric_acid 14400", "gtceu:hydrogen 316800", "gtceu:nitrogen 57600", "gtceu:oxygen 201600")
        .outputFluids("gtceu:polybenzimidazole 21600")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)
        .blastFurnaceTemp(6000)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:polyphenylene_sulfide")
        .itemInputs("gtceu:silver_nanoswarm")
        .itemOutputs("gtceu:contaminable_silver_nanoswarm")
        .itemInputs("16x gtceu:sulfur_dust")
        .inputFluids("gtceu:benzene 16000")
        .outputFluids("gtceu:polyphenylene_sulfide 24000", "gtceu:hydrogen 32000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120)
        .blastFurnaceTemp(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:platinum_dust")
        .itemInputs("gtceu:iridium_nanoswarm")
        .itemOutputs("gtceu:contaminable_iridium_nanoswarm")
        .itemInputs("576x gtceu:platinum_group_sludge_dust", "16x gtceu:sulfur_dust")
        .inputFluids("gtceu:hydrogen 72000", "gtceu:oxygen 128000", "gtceu:chlorine 14400")
        .itemOutputs("64x gtceu:platinum_dust", "64x gtceu:palladium_dust", "60x gtceu:ruthenium_dust", "32x gtceu:iridium_dust", "48x gtceu:rhodium_dust", "32x gtceu:osmium_dust")
        .outputFluids("gtceu:hydrogen 2800", "minecraft:water 7200", "gtceu:chlorine 6400")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .blastFurnaceTemp(9000)

    gtr.distort("gtlcore:polyimide")
        .itemInputs("gtceu:glowstone_nanoswarm")
        .itemOutputs("gtceu:contaminable_glowstone_nanoswarm")
        .itemInputs("486x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 256000", "gtceu:nitrogen_dioxide 64000")
        .outputFluids("gtceu:polyimide 21000", "gtceu:hydrogen 12800", "gtceu:nitrogen 6400")
        .EUt(GTValues.V[GTValues.UEV])
        .duration(2000)
        .blastFurnaceTemp(14400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:cycloparaphenylene")
        .itemInputs("gtceu:osmium_nanoswarm")
        .itemOutputs("gtceu:contaminable_osmium_nanoswarm")
        .itemInputs("1920x gtceu:carbon_dust", "64x gtceu:iodine_dust")
        .inputFluids("gtceu:hydrogen 640000", "gtceu:oxygen 96000", "gtceu:chlorine 96000", "gtceu:fluorine 96000")
        .outputFluids("gtceu:cycloparaphenylene 32000", "gtceu:fluorine 4800", "gtceu:chlorine 3200")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:polyvinyl_chloride")
        .itemInputs("gtceu:glowstone_nanoswarm")
        .itemOutputs("gtceu:contaminable_glowstone_nanoswarm")
        .inputFluids("gtceu:oxygen 10000", "gtceu:chlorine 1440", "gtceu:ethylene 1440")
        .outputFluids("gtceu:polyvinyl_chloride 2160", "gtceu:hydrogen 1440")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(160)
        .blastFurnaceTemp(800)

    gtr.distort("gtlcore:silicone_rubber")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("3x gtceu:silicon_dust", "gtceu:sulfur_dust")
        .inputFluids("minecraft:water 2000", "gtceu:methane 4000")
        .outputFluids("gtceu:silicone_rubber 1296", "gtceu:hydrogen 4000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(320)
        .blastFurnaceTemp(1200)

    gtr.distort("gtlcore:styrene_butadiene_rubber")
        .itemInputs("gtceu:iron_nanoswarm")
        .itemOutputs("gtceu:contaminable_iron_nanoswarm")
        .itemInputs("5x gtceu:sulfur_dust")
        .inputFluids("gtceu:butadiene 3000", "gtceu:benzene 1000", "gtceu:ethylene 1000", "gtceu:oxygen 15000")
        .outputFluids("gtceu:styrene_butadiene_rubber 6480", "gtceu:hydrogen 2000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(120)
        .blastFurnaceTemp(1800)

    gtr.distort("gtlcore:polytetrafluoroethylene")
        .itemInputs("gtceu:copper_nanoswarm")
        .itemOutputs("gtceu:contaminable_copper_nanoswarm")
        .inputFluids("gtceu:oxygen 5000", "gtceu:methane 1440", "gtceu:fluorine 2880")
        .outputFluids("gtceu:polytetrafluoroethylene 1080", "gtceu:hydrogen 5760")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(240)
        .blastFurnaceTemp(2600)

    gtr.distort("gtlcore:naquadria_dust")
        .itemInputs("gtceu:naquadah_nanoswarm")
        .itemOutputs("gtceu:contaminable_naquadah_nanoswarm")
        .itemInputs("128x gtceu:naquadah_dust", "16x gtceu:caesium_dust")
        .inputFluids("gtceu:fluorine 32000", "gtceu:fluoroantimonic_acid 64000", "gtceu:sulfuric_acid 12000", "gtceu:radon 8000", "gtceu:nitrogen_dioxide 4000", "gtceu:xenon 4000")
        .itemOutputs("64x gtceu:naquadria_dust", "64x gtceu:trinium_dust", "256x gtceu:antimony_trifluoride_dust")
        .outputFluids("gtceu:hydrofluoric_acid 272000", "gtceu:radon_trioxide 8000", "gtceu:xenon_trioxide 4000", "gtceu:caesium_fluoride 16000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(3600)
        .blastFurnaceTemp(12600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:unfolded_fullerene_dust")
        .itemInputs("gtceu:enderium_nanoswarm")
        .itemOutputs("gtceu:contaminable_enderium_nanoswarm")
        .itemInputs("3780x gtceu:carbon_dust")
        .inputFluids("gtceu:methane 60000", "gtceu:bromine 60000", "gtceu:nitrogen 60000")
        .itemOutputs("64x gtceu:unfolded_fullerene_dust")
        .outputFluids("gtceu:hydrobromic_acid 60000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(16000)
        .blastFurnaceTemp(16800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:stem_cells")
        .itemInputs("gtceu:naquadah_nanoswarm")
        .itemOutputs("gtceu:contaminable_naquadah_nanoswarm")
        .chancedInput("gtlcore:glacio_spirit", 8000, 100)
        .itemInputs("gtceu:tiny_naquadah_dust", "gtceu:osmiridium_dust", "gtceu:salt_dust", "gtceu:calcium_dust", "4x gtceu:meat_dust", "4x gtceu:bio_chaff", "2x minecraft:bone")
        .inputFluids("gtceu:phosphoric_acid 1000", "minecraft:water 3000", "gtceu:distilled_water 2000", "gtceu:biomass 1000")
        .itemOutputs("64x gtceu:stem_cells", "gtceu:phosphorus_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .blastFurnaceTemp(12200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.distort("gtlcore:polyurethaneresin")
        .itemInputs("gtceu:gold_nanoswarm")
        .itemOutputs("gtceu:contaminable_gold_nanoswarm")
        .itemInputs("45x gtceu:tin_dust", "64x gtceu:carbon_dust", "5x gtceu:nickel_dust", "5x gtceu:palladium_dust", "5x gtceu:iron_dust", "36x gtceu:silicon_dust")
        .inputFluids("gtceu:oxygen 1964000", "gtceu:hydrogen 529000", "gtceu:chlorine 870000", "gtceu:nitrogen 45000")
        .outputFluids("gtceu:polyurethaneresin 45000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2700)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:liquidcrystalkevlar")
        .itemInputs("gtceu:rhenium_nanoswarm")
        .itemOutputs("gtceu:contaminable_rhenium_nanoswarm")
        .notConsumable("gtceu:annealed_copper_dust")
        .itemInputs("64x gtceu:carbon_dust", "2x gtceu:calcium_dust")
        .inputFluids("gtceu:hydrogen 100000", "gtceu:chlorine 16000", "gtceu:oxygen 18000", "gtceu:nitrogen 18000")
        .outputFluids("gtceu:liquidcrystalkevlar 45000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .blastFurnaceTemp(17200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:zirconium_dust")
        .itemInputs("gtceu:osmium_nanoswarm")
        .itemOutputs("gtceu:contaminable_osmium_nanoswarm")
        .itemInputs("1152x gtceu:zircon_dust", "64x gtceu:potassium_dust")
        .inputFluids("gtceu:chlorine 512000", "gtceu:hydrogen 256000", "gtceu:hydrogen_peroxide 128000", "gtceu:sulfur_trioxide 64000")
        .itemOutputs("64x gtceu:zirconium_dust", "48x gtceu:hafnium_dust", "448x gtceu:potassium_sulfate_dust")
        .outputFluids("gtceu:hydrochloric_acid 512000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(6400)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:hexanitrohexaaxaisowurtzitane_dust")
        .itemInputs("gtceu:orichalcum_nanoswarm")
        .itemOutputs("gtceu:contaminable_orichalcum_nanoswarm")
        .notConsumable("16x gtlcore:unstable_star")
        .itemInputs("191x gtceu:silica_gel_dust", "76x gtceu:succinic_acid_dust", "144x gtceu:activated_carbon_dust", "216x gtceu:sodium_dust", "47x gtceu:boron_trioxide_dust", "39x gtceu:potassium_carbonate_dust", "101x gtceu:barium_chloride_dust")
        .inputFluids("gtceu:hydrogen 470000", "gtceu:hydrofluoric_acid 12000", "gtceu:methanol 62000", "gtceu:nitric_acid 15000", "gtceu:ammonia 39000", "gtceu:glyoxal 47000", "gtceu:oxygen_plasma 11000", "gtceu:acetic_anhydride 9000", "gtceu:nitrogen_plasma 7000")
        .itemOutputs("288x gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(6400)
        .blastFurnaceTemp(21600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:photoresist")
        .itemInputs("gtceu:uruium_nanoswarm")
        .itemOutputs("gtceu:contaminable_uruium_nanoswarm")
        .itemInputs("91x gtceu:rutile_dust", "60x gtceu:carbon_dust", "42x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:sulfuric_acid 80000", "gtceu:ethanol 7000", "gtceu:chlorine 81000", "gtceu:propene 15000", "gtceu:benzene 39000", "gtceu:ethylene 47000")
        .outputFluids("gtceu:photoresist 16000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(9600)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:euv_photoresist")
        .itemInputs("gtceu:infuscolium_nanoswarm")
        .itemOutputs("gtceu:contaminable_infuscolium_nanoswarm")
        .itemInputs("30x gtceu:rhenium_dust", "56x gtceu:lithium_dust", "40x gtceu:selenium_dust", "50x gtceu:activated_carbon_dust", "60x gtceu:rutile_dust", "55x gtceu:quicklime_dust")
        .inputFluids("gtceu:ethane 12000", "gtceu:chlorine 75000", "gtceu:photoresist 8000", "gtceu:hydrogen 4700", "gtceu:oxygen 89000", "gtceu:nitrogen 40000", "gtceu:butane 57000")
        .outputFluids("gtceu:euv_photoresist 21600")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(12800)
        .blastFurnaceTemp(21600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:photopolymer")
        .itemInputs("gtceu:white_dwarf_mtter_nanoswarm")
        .itemOutputs("gtceu:contaminable_white_dwarf_mtter_nanoswarm")
        .itemInputs("768x gtceu:carbon_dust", "50x gtceu:rutile_dust", "70x gtceu:succinic_acid_dust", "32x gtceu:ice_dust", "20x gtceu:silver_dust", "25x gtceu:quicklime_dust", "40x gtceu:boron_dust", "120x gtceu:sodium_dust")
        .inputFluids("gtceu:benzene 40000", "gtceu:bromine 25000", "gtceu:oxygen 21600", "gtceu:chlorine 5600", "gtceu:propene 16000", "gtceu:butene 80000")
        .outputFluids("gtceu:photopolymer 16000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(5120)
        .blastFurnaceTemp(21600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:polyetheretherketone")
        .itemInputs("gtceu:vibranium_nanoswarm")
        .itemOutputs("gtceu:contaminable_vibranium_nanoswarm")
        .itemInputs("16x gtceu:sodium_dust")
        .inputFluids("gtceu:chlorine 48000", "gtceu:benzene 16000", "gtceu:oxygen 60000", "gtceu:propene 8000", "gtceu:nitric_acid 8000")
        .outputFluids("gtceu:polyetheretherketone 20736", "minecraft:water 8000", "gtceu:carbon_dioxide 8000")
        .itemOutputs("32x gtceu:sodium_fluoride_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(16400)
        .blastFurnaceTemp(14400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:zylon_dust")
        .itemInputs("gtceu:black_dwarf_mtter_nanoswarm")
        .itemOutputs("gtceu:contaminable_black_dwarf_mtter_nanoswarm")
        .itemInputs("1762x gtceu:sulfur_dust", "41x gtceu:sodium_dust")
        .inputFluids("gtceu:bromine 15200", "gtceu:toluene 432000", "gtceu:hydrogen 412000", "gtceu:ethane 6000", "gtceu:propene 50000", "gtceu:nitric_acid 67000", "gtceu:oxygen 40000", "gtceu:benzene 70000")
        .itemOutputs("115x gtceu:zylon_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(3200)
        .blastFurnaceTemp(18900)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.distort("gtlcore:mutagen")
        .itemInputs("gtceu:silver_nanoswarm")
        .itemOutputs("gtceu:contaminable_silver_nanoswarm")
        .itemInputs("256x gtceu:bio_chaff", "gtceu:naquadria_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .outputFluids("gtceu:mutagen 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
        .blastFurnaceTemp(12600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.distort("gtlcore:biological_cells")
        .itemInputs("gtceu:neutronium_nanoswarm")
        .itemOutputs("gtceu:contaminable_neutronium_nanoswarm")
        .itemInputs("256x gtceu:stem_cells", "64x gtceu:meat_dust", "64x gtceu:salt_dust", "64x gtceu:calcium_dust", "64x gtceu:agar_dust", "4x gtlcore:tcetieseaweedextract", "2x gtceu:enriched_naquadah_dust", "gtceu:tritanium_dust")
        .inputFluids("gtceu:mutagen 10000")
        .itemOutputs("64x gtlcore:biological_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(4000)
        .blastFurnaceTemp(16200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.distort("gtlcore:polyvinyl_butyral")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("96x gtceu:carbon_dust", "4x gtceu:rutile_dust")
        .inputFluids("gtceu:hydrogen 52000", "gtceu:oxygen 32000", "gtceu:chlorine 4000", "gtceu:propene 16000 ", "gtceu:ethylene 10000")
        .outputFluids("gtceu:polyvinyl_butyral 36864")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .blastFurnaceTemp(6000)

    gtr.distort("gtlcore:cosmic_superconductor")
        .itemInputs("gtceu:draconium_nanoswarm")
        .itemOutputs("gtceu:contaminable_draconium_nanoswarm")
        .itemInputs("gtceu:phosphorus_dust", "18x gtceu:sulfur_dust", "6x gtceu:sodium_dust", "gtceu:thallium_dust", "6x gtceu:rhenium_chloride_dust", "5x gtceu:hassium_chloride_dust", "36x gtceu:atinium_hydride_dust", "14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .inputFluids("gtceu:chlorine 34000", "gtceu:fluorine 3000", "gtceu:ethylene 12000", "gtceu:oxygen 46000", "gtceu:hydrogen 102000", "gtceu:uu_matter 2000", "gtceu:quark_gluon_plasma 17000", "gtceu:benzene 3000", "gtceu:acetone 6000")
        .outputFluids("gtceu:cosmic_superconductor 10000")
        .EUt(GTValues.VA[GTValues.MAX])
        .blastFurnaceTemp(36000)
        .duration(16000)
        .cleanroom(GTLCleanroomType.LAW_CLEANROOM)

    gtr.distort("gtlcore:acidic_naquadria_solution")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:sulfuric_acid 2000")
        .outputFluids("gtceu:acidic_naquadria_solution 3000")
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(9000)
        .duration(200)

    gtr.distort("gtlcore:acidic_enriched_naquadah_solution")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("gtceu:naquadria_dust")
        .inputFluids("gtceu:sulfuric_acid 2000")
        .outputFluids("gtceu:acidic_enriched_naquadah_solution 3000")
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(9000)
        .duration(200)

    gtr.qft("gtlcore:fullerene_polymer_matrix_pulp_dust")
        .notConsumable("gtceu:starmetal_nanoswarm")
        .itemInputs("16x gtceu:fullerene_dust", "8x gtceu:palladium_dust")
        .inputFluids("gtceu:nitrogen 15000", "gtceu:hydrogen 73000", "gtceu:oxygen 13000")
        .itemOutputs("16x gtceu:fullerene_polymer_matrix_pulp_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.qft("gtlcore:taranium_dust")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("176x gtceu:bedrock_dust", "64x gtceu:carbon_dust", "640x gtceu:deepslate_dust")
        .inputFluids("gtceu:helium 37000", "gtceu:hydrogen 73000", "gtceu:xenon 3000")
        .itemOutputs("64x gtceu:taranium_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.chemical_reactor("gtlcore:calcium_chloride_dust")
        .itemInputs("gtceu:calcium_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemOutputs("3x gtceu:calcium_chloride_dust")
        .EUt(30)
        .duration(80)

    gtr.large_chemical_reactor("gtlcore:iridium_chloride_dust")
        .circuit(24)
        .itemInputs("gtceu:iridium_dust")
        .inputFluids("gtceu:chlorine 3000")
        .itemOutputs("4x gtceu:iridium_chloride_dust")
        .EUt(30720)
        .duration(800)

    gtr.large_chemical_reactor("gtlcore:titanium_trifluoride_dust")
        .circuit(24)
        .itemInputs("gtceu:titanium_dust")
        .inputFluids("gtceu:fluorine 3000")
        .itemOutputs("4x gtceu:titanium_trifluoride_dust")
        .EUt(30720)
        .duration(600)

    gtr.large_chemical_reactor("gtlcore:barium_sulfide_dust")
        .circuit(24)
        .itemInputs("6x gtceu:barite_dust")
        .inputFluids("gtceu:hydrogen 4000")
        .itemOutputs("2x gtceu:barium_sulfide_dust")
        .outputFluids("minecraft:water 4000")
        .EUt(30720)
        .duration(400)

    gtr.large_chemical_reactor("gtlcore:aluminium_sulfite_dust")
        .circuit(24)
        .itemInputs("2x gtceu:aluminium_dust")
        .inputFluids("gtceu:sulfuric_acid 3000")
        .itemOutputs("14x gtceu:aluminium_sulfite_dust")
        .outputFluids("minecraft:water 3000")
        .EUt(30720)
        .duration(400)

    gtr.chemical_reactor("gtlcore:potassium_bromide_dust")
        .itemInputs("gtceu:potassium_dust")
        .inputFluids("gtceu:bromine 1000")
        .itemOutputs("2x gtceu:potassium_bromide_dust")
        .EUt(120)
        .duration(160)

    gtr.qft("gtlcore:timepiece")
        .notConsumable("gtceu:white_dwarf_mtter_nanoswarm")
        .notConsumable("gtceu:black_dwarf_mtter_nanoswarm")
        .chancedInput("gtceu:spacetime_hex_wire", 1, 0)
        .chancedOutput("gtlcore:timepiece", 2500, 0)
        .inputFluids("gtceu:cosmic_element 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.packer("gtlcore:tiny_degenerate_rhenium_dust")
        .itemInputs("gtceu:degenerate_rhenium_dust")
        .itemOutputs("9x gtceu:tiny_degenerate_rhenium_dust")
        .EUt(1920)
        .duration(20)

    gtr.lightning_processor("gtlcore:thaumium_dust")
        .itemInputs("8x gtceu:infused_gold_dust", "8x gtceu:iron_dust", "16x gtceu:lapis_dust")
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("16x gtceu:thaumium_dust")
        .EUt(7680)
        .duration(480)

    gtr.mixer("gtlcore:astral_silver_dust")
        .itemInputs("2x gtceu:silver_dust", "gtceu:thaumium_dust")
        .itemOutputs("3x gtceu:astral_silver_dust")
        .EUt(1920)
        .duration(400)

    gtr.mixer("gtlcore:highenergymixture_dust")
        .itemInputs("4x minecraft:glowstone_dust", "2x minecraft:redstone", "1x gtceu:aluminium_dust")
        .circuit(3)
        .itemOutputs("4x gtceu:highenergymixture_dust")
        .EUt(480)
        .duration(600)

    gtr.fluid_solidifier("gtlcore:luminessence_dust")
        .itemInputs("2x gtceu:highenergymixture_dust")
        .inputFluids("gtceu:phosphoric_acid 2000")
        .itemOutputs("gtceu:luminessence_dust")
        .EUt(480)
        .duration(200)

    gtr.mixer("gtlcore:sunnarium")
        .notConsumable("gtceu:uxv_field_generator")
        .inputFluids("gtceu:helium_plasma 1000", "gtceu:glowstone 1000")
        .outputFluids("gtceu:sunnarium 1000")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)

    gtr.stellar_forge("gtlcore:astraltitanium_plasma")
        .itemInputs("gtlcore:naquadria_charge")
        .inputFluids("gtceu:force 576", "gtceu:titanium 576", "gtceu:cobalt 288", "gtceu:copper 288", "gtceu:tritium 1000")
        .outputFluids("gtceu:astraltitanium_plasma 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.stellar_forge("gtlcore:celestialtungsten_plasma")
        .itemInputs("gtlcore:naquadria_charge")
        .inputFluids("gtceu:tartarite 576", "gtceu:tungsten 576", "gtceu:americium 288", "gtceu:titan_precision_steel 144", "gtceu:astraltitanium 144", "gtceu:xenon 1000")
        .outputFluids("gtceu:celestialtungsten_plasma 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("SCTier", 1)

    gtr.arc_furnace("gtlcore:cosmic_singularity")
        .itemInputs("avaritia:eternal_singularity")
        .inputFluids("gtceu:magnetohydrodynamicallyconstrainedstarmatter 9216")
        .itemOutputs("gtlcore:cosmic_singularity", "64x gtceu:shirabon_dust")
        .outputFluids("gtceu:helium_plasma 1000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("gtlcore:cosmic_ingot")
        .notConsumable("gtceu:cosmicneutronium_nanoswarm")
        .chancedInput("gtlcore:cosmic_singularity", 1000, 0)
        .itemInputs("gtlcore:hypercube", "avaritia:infinity_ingot")
        .inputFluids("gtceu:white_dwarf_mtter 576", "gtceu:black_dwarf_mtter 576", "gtceu:primordialmatter 500")
        .itemOutputs("gtceu:cosmic_ingot")
        .EUt(64 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.qft("gtlcore:magmatter")
        .notConsumable("gtlcore:spacetime_catalyst")
        .inputFluids("gtceu:chaos 1000", "gtceu:spatialfluid 1000", "gtceu:exciteddtsc 1000")
        .itemInputs("gtceu:attuned_tengam_block")
        .outputFluids("gtceu:magmatter 1000")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.sps_crafting("gtlcore:magmatter_ingot")
        .notConsumable("kubejs:ingot_field_shape")
        .inputFluids("gtceu:mana 100000", "gtceu:magmatter 100")
        .itemInputs("minecraft:netherite_ingot")
        .itemOutputs("gtceu:magmatter_ingot")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.sps_crafting("gtlcore:magmatter_ingot_d")
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

    gtr.packer("gtlcore:magmatter_dust")
        .itemInputs("gtceu:transcendentmetal_nanoswarm")
        .itemInputs("4x gtceu:small_magmatter_dust")
        .itemOutputs("gtceu:contaminable_transcendentmetal_nanoswarm")
        .itemOutputs("gtceu:magmatter_dust")
        .EUt(30)
        .duration(20)

    gtr.forge_hammer("gtlcore:long_magmatter_rod")
        .itemInputs("2x gtceu:magmatter_rod")
        .itemOutputs("gtceu:long_magmatter_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(300)

    gtr.assembly_line("gtlcore:mega_extractor")
        .itemInputs("16x gtceu:uhv_extractor", "16x gtceu:uhv_fluid_solidifier", "32x gtceu:uev_electric_piston", "8x gtceu:uev_electric_pump", "4x #gtceu:circuits/uiv", "16x gtceu:titansteel_hex_wire", "16x gtceu:double_quantum_plate", "32x gtceu:double_hastelloy_x_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:naquadria 4608", "gtceu:plutonium 4608", "gtceu:mithril 4608")
        .itemOutputs("gtlcore:mega_extractor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_extractor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:mega_fluid_heater")
        .itemInputs("16x gtceu:uev_fluid_heater", "8x #gtceu:circuits/uxv", "16x gtceu:uiv_fluid_heater", "16x gtceu:uiv_fluid_regulator", "16x gtceu:titansteel_hex_wire", "16x gtceu:double_mithril_plate", "16x gtceu:double_quantum_plate")
        .inputFluids("gtceu:taranium 2304", "gtceu:vibranium 2304", "gtceu:astraltitanium_plasma 4608", "gtceu:degenerate_rhenium_plasma 4608")
        .itemOutputs("gtlcore:mega_fluid_heater")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:uiv_fluid_heater"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:mega_canner")
        .itemInputs("16x gtceu:uev_canner", "16x gtceu:uev_robot_arm", "32x gtceu:uev_electric_piston", "16x gtceu:uev_electric_pump", "32x gtceu:double_lafium_plate", "32x gtceu:double_naquadria_plate", "4x #gtceu:circuits/uiv")
        .inputFluids("gtceu:naquadria 4608", "gtceu:orichalcum_plasma 2304", "gtceu:mithril_plasma 2304", "gtceu:darmstadtium 4608")
        .itemOutputs("gtlcore:mega_canner")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:uev_canner"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.chemical_reactor("gtlcore:sodium_hydroxide_dust")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(30)
        .duration(60)

    gtr.chemical_reactor("gtlcore:potassium_hydroxide_dust")
        .itemInputs("gtceu:potassium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:potassium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(30)
        .duration(60)

    gtr.assembler("gtlcore:inverter")
        .itemInputs("4x gtceu:polyethylene_plate", "4x gtceu:ilc_chip", "2x gtceu:exquisite_quartzite_gem", "gtceu:computer_monitor_cover", "#gtceu:circuits/ev", "4x gtceu:diode", "8x gtceu:aluminium_single_wire")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtlcore:inverter")
        .EUt(120)
        .duration(200)

    tiers.forEach(i => {
        gtr.assembler("gtlcore:" + i[0] + "_neutron_accelerator")
            .itemInputs("gtceu:" + i[0] + "_machine_hull", "gtlcore:inverter", i[1] === 0 ? "2x gtceu:lead_rotor" : "2x gtceu:" + i[0] + "_electric_motor", "gtceu:double_beryllium_plate", "2x gtceu:polyvinyl_chloride_plate")
            .itemOutputs("gtceu:" + i[0] + "_neutron_accelerator")
            .inputFluids("gtceu:polonium 288")
            .EUt(30)
            .duration(400)
    })

    gtr.assembler("gtlcore:neutron_sensor")
        .itemInputs("gtceu:iv_machine_hull", "gtceu:advanced_activity_detector_cover", "gtceu:computer_monitor_cover", "gtceu:vibrant_alloy_hex_wire", "#gtceu:circuits/ev", "2x gtceu:hv_sensor")
        .inputFluids("gtceu:helium 1000")
        .itemOutputs("gtlcore:neutron_sensor")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtlcore:neutron_activator")
        .itemInputs("gtceu:iv_machine_hull", "4x gtlcore:hui_circuit_1", "#gtceu:circuits/iv", "2x gtceu:data_stick", "gtceu:ev_sensor", "2x gtceu:ev_emitter", "gtceu:uranium_235_block", "gtceu:polonium_block", "2x gtceu:neutron_reflector")
        .inputFluids("gtceu:stainless_steel 1296")
        .itemOutputs("gtlcore:neutron_activator")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtlcore:speeding_pipe")
        .itemInputs("ad_astra:fluid_pipe_duct", "gtceu:stainless_steel_huge_fluid_pipe", "16x gtceu:blue_alloy_rod", "#gtceu:circuits/ev", "32x gtceu:mercury_barium_calcium_cuprate_single_wire", "32x gtceu:beryllium_plate")
        .itemOutputs("gtlcore:speeding_pipe")
        .inputFluids("gtceu:mar_m_200_steel 576")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtlcore:process_machine_casing")
        .itemInputs("gtceu:solid_machine_casing", "2x #gtceu:circuits/iv", "2x gtceu:double_stainless_steel_plate", "4x gtceu:double_mar_m_200_steel_plate")
        .inputFluids("gtceu:fall_king 576")
        .itemOutputs("gtlcore:process_machine_casing")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtlcore:disassembly")
        .itemInputs("gtceu:assembly_line", "4x gtceu:naquadah_alloy_gear", "16x gtceu:luv_robot_arm", "8x gtceu:luv_conveyor_module", "8x gtceu:luv_emitter", "4x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:naquadah 1440")
        .itemOutputs("gtlcore:disassembly")
        .EUt(7680)
        .duration(800)

    gtr.vacuum_freezer("gtlcore:metastable_oganesson")
        .inputFluids("gtceu:hot_oganesson 1000", "kubejs:gelid_cryotheum 144")
        .outputFluids("gtceu:metastable_oganesson 144")
        .itemOutputs("2x gtceu:small_enderium_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(280)

    gtr.neutron_activator("gtlcore:hassium")
        .inputFluids("gtceu:liquid_metastable_hassium 1000")
        .outputFluids("gtceu:hassium 1000")
        .addData("ev_min", 340)
        .addData("ev_max", 380)
        .addData("evt", 480)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.neutron_activator("gtlcore:oganesson")
        .inputFluids("gtceu:metastable_oganesson 1000")
        .outputFluids("gtceu:oganesson 1000")
        .addData("ev_min", 720)
        .addData("ev_max", 800)
        .addData("evt", 1200)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.neutron_activator("gtlcore:quantanium")
        .inputFluids("gtceu:neon 10000")
        .itemInputs("4x gtceu:quantum_star", "8x gtceu:quantum_eye", "16x gtceu:mithril_dust", "16x gtceu:gadolinium_dust", "16x gtceu:exquisite_fluix_gem", "64x minecraft:netherite_scrap")
        .outputFluids("gtceu:quantanium 10000")
        .addData("ev_min", 1020)
        .addData("ev_max", 1200)
        .addData("evt", 3840)
        .duration(1200)

    gtr.neutron_activator("gtlcore:draconium_dust")
        .inputFluids("gtceu:uu_amplifier 1000")
        .notConsumable("gtceu:degenerate_rhenium_plate")
        .itemInputs("minecraft:dragon_egg")
        .itemOutputs("8x gtceu:ender_eye_dust", "4x ae2:ender_dust")
        .chancedOutput("gtlcore:draconium_dust", 4000, 0)
        .addData("ev_min", 800)
        .addData("ev_max", 900)
        .addData("evt", 5760)
        .duration(800)

    gtr.assembly_line("gtlcore:auto_configuration_maintenance_hatch")
        .itemInputs("gtceu:iv_machine_hull", "4x gtceu:configurable_maintenance_hatch", "8x gtceu:iv_conveyor_module", "8x gtceu:iv_robot_arm", "16x #gtceu:circuits/iv", "4x gtceu:iv_emitter", "4x gtceu:iv_sensor", "gtceu:rad_away_pill", "gtceu:paracetamol_pill", "16x gtceu:stainless_steel_foil")
        .inputFluids("gtceu:lubricant 1000", "gtceu:soldering_alloy 576", "gtceu:cupronickel 576", "gtceu:brass 576")
        .itemOutputs("gtlcore:auto_configuration_maintenance_hatch")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtceu:auto_maintenance_hatch")).dataStack(Registries.getItemStack("gtceu:data_orb")).EUt(GTValues.VA[GTValues.IV]).duration(8000))

    gtr.assembler("gtlcore:heat_exchanger")
        .itemInputs("gtceu:iv_machine_hull", "8x gtceu:tungsten_carbide_huge_fluid_pipe", "16x gtceu:mar_m_200_steel_gear", "16x gtceu:lapis_plate", "16x gtceu:diamond_plate", "16x gtceu:obsidian_plate", "8x gtceu:double_mar_m_200_steel_plate", "16x gtceu:double_tungsten_steel_plate", "16x gtceu:double_tungsten_steel_plate")
        .inputFluids("gtceu:redstone 5760")
        .itemOutputs("gtlcore:heat_exchanger")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)

    gtr.assembler("gtlcore:supercritical_turbine_casing")
        .itemInputs("gtceu:tungstensteel_turbine_casing", "2x gtceu:mar_m_200_steel_rod", "gtceu:mar_m_200_steel_gear", "6x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtlcore:supercritical_turbine_casing")
        .EUt(16)
        .duration(50)

    gtr.assembler("gtlcore:supercritical_steam_turbine")
        .itemInputs("gtceu:luv_machine_hull", "4x #gtceu:circuits/luv", "2x gtceu:luv_electric_motor", "2x gtceu:mar_m_200_steel_gear", "2x gtceu:tungsten_carbide_large_fluid_pipe", "8x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtlcore:supercritical_steam_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    gtr.assembler("gtlcore:supercritical_mega_steam_turbine")
        .itemInputs("8x gtlcore:supercritical_steam_turbine", "8x #gtceu:circuits/uv", "8x gtceu:luv_electric_piston", "16x gtceu:luv_electric_pump", "8x gtceu:naquadah_turbine_blade", "8x gtceu:double_hsss_plate", "32x gtceu:double_mar_m_200_steel_plate")
        .itemOutputs("gtlcore:supercritical_mega_steam_turbine")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.extractor("gtlcore:antimatter")
        .itemInputs("gtlcore:pellet_antimatter")
        .outputFluids("gtceu:antimatter 1000")
        .duration(2000)
        .EUt(480)

    gtr.assembly_line("gtlcore:element_copying")
        .itemInputs("4x gtceu:uxv_scanner", "4x gtceu:uxv_canner", "4x gtceu:uxv_packer", "4x gtceu:uxv_extractor", "16x #gtceu:circuits/uxv", "8x gtceu:uxv_fluid_regulator", "16x gtceu:heavy_quark_degenerate_matter_small_fluid_pipe", "4x gtceu:uruium_nanoswarm", "32x gtceu:molybdenum_disilicide_rod", "32x gtceu:titanium_tungsten_carbide_rod", "32x gtceu:double_silicon_carbide_plate", "32x gtceu:double_heavy_quark_degenerate_matter_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:periodicium 2304", "gtceu:sunnarium 4608", "gtceu:vibramantium 4608")
        .itemOutputs("gtlcore:element_copying")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:star_ultimate_material_forge_factory"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.electric_blast_furnace("gtlcore:giga_chad")
        .itemInputs("64x gtceu:uiv_field_generator", "64x gtceu:uxv_field_generator", "64x gtceu:opv_field_generator")
        .inputFluids("gtceu:exciteddtec 10000000")
        .itemOutputs("gtlcore:giga_chad")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4000)
        .blastFurnaceTemp(36000)

    gtr.heat_exchanger("gtceu:hot_sodium_potassium")
        .inputFluids("gtceu:hot_sodium_potassium 1")
        .inputFluids("minecraft:water 160")
        .outputFluids("gtceu:sodium_potassium 1")
        .outputFluids("gtceu:steam 25600")
        .duration(200)

    gtr.heat_exchanger("gtceu:supercritical_sodium_potassium")
        .inputFluids("gtceu:supercritical_sodium_potassium 1")
        .inputFluids("gtceu:distilled_water 80")
        .outputFluids("gtceu:sodium_potassium 1")
        .outputFluids("gtceu:supercritical_steam 12800")
        .duration(200)
        .addData("eu", 12800)

    gtr.assembler("gtlcore:fission_reactor_casing")
        .itemInputs("gtceu:vanadium_steel_frame", "6x gtceu:lead_plate", "6x gtceu:reactor_steel_plate")
        .itemOutputs("2x gtlcore:fission_reactor_casing")
        .EUt(30)
        .duration(50)

    gtr.assembler("gtlcore:cooler")
        .itemInputs("gtlcore:fission_reactor_casing", "2x gtceu:annealed_copper_hex_wire", "8x gtceu:vanadium_steel_tiny_fluid_pipe", "4x gtceu:stainless_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:cooler")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtlcore:fission_fuel_assembly")
        .itemInputs("gtceu:graphite_block", "4x gtceu:long_stainless_steel_rod", "4x gtceu:double_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:fission_fuel_assembly")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtlcore:fission_reactor")
        .itemInputs("gtceu:iv_machine_hull", "4x #gtceu:circuits/iv", "gtceu:computer_monitor_cover", "4x gtceu:neutron_reflector", "8x gtceu:dense_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:fission_reactor")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtlcore:neutronium_block")
        .notConsumable("gtceu:neutronium_nanoswarm")
        .itemInputs("avaritia:neutron")
        .itemOutputs("9x gtceu:naquadah_dust", "9x gtceu:neutronium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.forming_press("gtlcore:reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_steel_ingot")
        .itemOutputs("gtlcore:reactor_fuel_rod")
        .EUt(30)
        .duration(200)

    gtr.forming_press("gtlcore:tungsten_carbide_reactor_fuel_rod")
        .notConsumable("gtceu:cell_extruder_mold")
        .itemInputs("gtceu:magnetic_neodymium_ingot", "gtceu:tungsten_carbide_ingot")
        .itemOutputs("gtlcore:tungsten_carbide_reactor_fuel_rod")
        .EUt(120)
        .duration(200)

    gtr.canner("gtlcore:reactor_uranium_simple")
        .itemInputs("gtlcore:reactor_fuel_rod", "16x gtceu:uranium_dust")
        .inputFluids("gtceu:uranium_235 96")
        .itemOutputs("gtlcore:reactor_uranium_simple")
        .EUt(1920)
        .duration(120)

    gtr.canner("gtlcore:reactor_thorium_simple")
        .itemInputs("gtlcore:reactor_fuel_rod", "12x gtceu:thorium_dust")
        .itemOutputs("gtlcore:reactor_thorium_simple")
        .EUt(480)
        .duration(120)

    gtr.canner("gtlcore:reactor_mox_simple")
        .itemInputs("gtlcore:reactor_fuel_rod", "18x gtceu:uranium_dust")
        .inputFluids("gtceu:plutonium 432")
        .itemOutputs("gtlcore:reactor_mox_simple")
        .EUt(7680)
        .duration(120)

    gtr.canner("gtlcore:reactor_naquadah_simple")
        .itemInputs("gtlcore:tungsten_carbide_reactor_fuel_rod", "4x gtceu:naquadah_dust")
        .inputFluids("gtceu:thorium 144")
        .itemOutputs("gtlcore:reactor_naquadah_simple")
        .EUt(30720)
        .duration(120)

    function assemble_fuel(name, isnq) {
        let rod = isnq ? "4x gtceu:tungsten_carbide_rod" : "4x gtceu:steel_rod"
        gtr.assembler("gtlcore:reactor_" + name + "_dual")
            .itemInputs("2x gtlcore:reactor_" + name + "_simple", rod)
            .itemOutputs("gtlcore:reactor_" + name + "_dual")
            .EUt(30)
            .duration(40)

        gtr.assembler("gtlcore:reactor_" + name + "_quad")
            .itemInputs("2x gtlcore:reactor_" + name + "_dual", rod)
            .itemOutputs("gtlcore:reactor_" + name + "_quad")
            .EUt(30)
            .duration(80)
    }

    assemble_fuel("uranium", false)
    assemble_fuel("thorium", false)
    assemble_fuel("mox", false)
    assemble_fuel("naquadah", true)

    function centrifuge_fuel(name, isnq, product, output, chance, extra) {
        let rod = isnq ? "gtceu:tungsten_carbide_rod" : "gtceu:steel_rod"
        let fuel_rod = isnq ? "gtlcore:tungsten_carbide_reactor_fuel_rod" : "gtlcore:reactor_fuel_rod"
        gtr.centrifuge("gtlcore:depleted_reactor_" + name + "_simple")
            .itemInputs("gtlcore:depleted_reactor_" + name + "_simple")
            .itemOutputs(fuel_rod)
            .chancedOutput(output + "x " + product, chance, extra)
            .chancedOutput("2x gtlcore:nuclear_waste", 1600, 500)
            .EUt(480)
            .duration(40)

        gtr.centrifuge("gtlcore:depleted_reactor_" + name + "_dual")
            .itemInputs("gtlcore:depleted_reactor_" + name + "_dual")
            .itemOutputs("2x " + fuel_rod, "4x " + rod)
            .chancedOutput(2 * output + "x " + product, chance, extra)
            .chancedOutput("4x gtlcore:nuclear_waste", 3600, 500)
            .EUt(480)
            .duration(80)

        gtr.centrifuge("gtlcore:depleted_reactor_" + name + "_quad")
            .itemInputs("gtlcore:depleted_reactor_" + name + "_quad")
            .itemOutputs("4x " + fuel_rod, "12x " + rod)
            .chancedOutput(4 * output + "x " + product, chance, extra)
            .chancedOutput("8x gtlcore:nuclear_waste", 8000, 500)
            .EUt(480)
            .duration(160)
    }

    centrifuge_fuel("uranium", false, "gtceu:plutonium_dust", 6, 2500, 100)
    centrifuge_fuel("thorium", false, "gtceu:uranium_dust", 4, 4000, 500)
    centrifuge_fuel("mox", false, "gtlcore:nuclear_waste", 8, 2000, 1000)
    centrifuge_fuel("naquadah", true, "gtceu:plutonium_dust", 2, 8000, 200)

    gtr.fission_reactor("gtlcore:reactor_thorium_simple")
        .itemInputs("gtlcore:reactor_thorium_simple")
        .itemOutputs("gtlcore:depleted_reactor_thorium_simple")
        .EUt(6)
        .duration(134400)
        .addData("FRheat", 1)

    gtr.fission_reactor("gtlcore:reactor_thorium_dual")
        .itemInputs("gtlcore:reactor_thorium_dual")
        .itemOutputs("gtlcore:depleted_reactor_thorium_dual")
        .EUt(8)
        .duration(172800)
        .addData("FRheat", 2)

    gtr.fission_reactor("gtlcore:reactor_thorium_quad")
        .itemInputs("gtlcore:reactor_thorium_quad")
        .itemOutputs("gtlcore:depleted_reactor_thorium_quad")
        .EUt(10)
        .duration(216000)
        .addData("FRheat", 3)

    gtr.fission_reactor("gtlcore:reactor_uranium_simple")
        .itemInputs("gtlcore:reactor_uranium_simple")
        .itemOutputs("gtlcore:depleted_reactor_uranium_simple")
        .EUt(3)
        .duration(112000)
        .addData("FRheat", 4)

    gtr.fission_reactor("gtlcore:reactor_uranium_dual")
        .itemInputs("gtlcore:reactor_uranium_dual")
        .itemOutputs("gtlcore:depleted_reactor_uranium_dual")
        .EUt(4)
        .duration(144000)
        .addData("FRheat", 5)

    gtr.fission_reactor("gtlcore:reactor_uranium_quad")
        .itemInputs("gtlcore:reactor_uranium_quad")
        .itemOutputs("gtlcore:depleted_reactor_uranium_quad")
        .EUt(5)
        .duration(180000)
        .addData("FRheat", 6)

    gtr.fission_reactor("gtlcore:reactor_mox_simple")
        .itemInputs("gtlcore:reactor_mox_simple")
        .itemOutputs("gtlcore:depleted_reactor_mox_simple")
        .EUt(1)
        .duration(78400)
        .addData("FRheat", 6)

    gtr.fission_reactor("gtlcore:reactor_mox_dual")
        .itemInputs("gtlcore:reactor_mox_dual")
        .itemOutputs("gtlcore:depleted_reactor_mox_dual")
        .EUt(2)
        .duration(100800)
        .addData("FRheat", 7)

    gtr.fission_reactor("gtlcore:reactor_mox_quad")
        .itemInputs("gtlcore:reactor_mox_quad")
        .itemOutputs("gtlcore:depleted_reactor_mox_quad")
        .EUt(3)
        .duration(128000)
        .addData("FRheat", 8)

    gtr.fission_reactor("gtlcore:reactor_naquadah_simple")
        .itemInputs("gtlcore:reactor_naquadah_simple")
        .itemOutputs("gtlcore:depleted_reactor_naquadah_simple")
        .EUt(3)
        .duration(160000)
        .addData("FRheat", 7)

    gtr.fission_reactor("gtlcore:reactor_naquadah_dual")
        .itemInputs("gtlcore:reactor_naquadah_dual")
        .itemOutputs("gtlcore:depleted_reactor_naquadah_dual")
        .EUt(5)
        .duration(240000)
        .addData("FRheat", 8)

    gtr.fission_reactor("gtlcore:reactor_naquadah_quad")
        .itemInputs("gtlcore:reactor_naquadah_quad")
        .itemOutputs("gtlcore:depleted_reactor_naquadah_quad")
        .EUt(7)
        .duration(360000)
        .addData("FRheat", 9)

    gtr.assembler("gtlcore:ulv_huge_item_import_bus")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemInputs("gtceu:ulv_input_bus", "gtlcore:primitive_robot_arm", "gtceu:bronze_crate", "4x #gtceu:circuits/ulv", "4x gtceu:wrought_iron_plate")
        .itemOutputs("gtmthings:ulv_huge_item_import_bus")
        .EUt(7)
        .duration(200)

    gtr.assembler("gtlcore:ulv_huge_item_export_bus")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemInputs("gtceu:ulv_output_bus", "gtlcore:primitive_robot_arm", "gtceu:bronze_crate", "4x #gtceu:circuits/ulv", "4x gtceu:wrought_iron_plate")
        .itemOutputs("gtmthings:ulv_huge_item_export_bus")
        .EUt(7)
        .duration(200)

    gtr.fuel_refining("gtlcore:cetane_boosted_diesel")
        .itemInputs("16x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 10000", "gtceu:oxygen 5000", "gtceu:light_fuel 10000", "gtceu:heavy_fuel 2000", "gtceu:nitration_mixture 4000")
        .outputFluids("gtceu:cetane_boosted_diesel 18000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)
        .blastFurnaceTemp(2200)

    gtr.fuel_refining("gtlcore:cetane_boosted_diesel_b")
        .itemInputs("12x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 10000", "gtceu:oxygen 5000", "gtceu:bio_diesel 16000", "gtceu:nitration_mixture 4000")
        .outputFluids("gtceu:cetane_boosted_diesel 14000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(600)
        .blastFurnaceTemp(2500)

    gtr.fuel_refining("gtlcore:high_octane_gasoline")
        .itemInputs("44x gtceu:carbon_dust")
        .inputFluids("gtceu:oxygen 12000", "gtceu:nitrogen 8000", "gtceu:naphtha 16000", "gtceu:refinery_gas 2000", "gtceu:toluene 4000", "gtceu:octane 3000")
        .outputFluids("gtceu:high_octane_gasoline 50000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)
        .blastFurnaceTemp(4800)

    gtr.fuel_refining("gtlcore:rocket_fuel")
        .circuit(1)
        .itemInputs("8x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 32000", "gtceu:oxygen 14000", "gtceu:nitrogen 12000", "gtceu:chlorine 10000")
        .outputFluids("gtceu:rocket_fuel 36000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1600)
        .blastFurnaceTemp(2600)

    gtr.fuel_refining("gtlcore:rocket_fuel_rp_1")
        .itemInputs("64x gtceu:carbon_dust")
        .inputFluids("gtceu:coal_gas 80000", "gtceu:oxygen 10000")
        .outputFluids("gtceu:rocket_fuel_rp_1 4000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1200)
        .blastFurnaceTemp(3800)

    gtr.fuel_refining("gtlcore:dense_hydrazine_fuel_mixture")
        .itemInputs("32x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 12000", "gtceu:oxygen 8000", "gtceu:nitrogen 10000", "gtceu:hydrogen_peroxide 4000")
        .outputFluids("gtceu:dense_hydrazine_fuel_mixture 8000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(800)
        .blastFurnaceTemp(3200)

    gtr.fuel_refining("gtlcore:rocket_fuel_cn3h7o3")
        .circuit(1)
        .itemInputs("12x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 14000", "gtceu:nitrogen 6000", "gtceu:nitric_acid 3000", "gtceu:hydrogen_peroxide 2000")
        .outputFluids("gtceu:rocket_fuel_cn3h7o3 4000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)
        .blastFurnaceTemp(3400)

    gtr.fuel_refining("gtlcore:rocket_fuel_h8n4c2o4")
        .circuit(2)
        .itemInputs("18x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 30000", "gtceu:nitrogen 18000", "gtceu:oxygen 24000", "gtceu:chlorine 10000")
        .outputFluids("gtceu:rocket_fuel_h8n4c2o4 12000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
        .blastFurnaceTemp(5000)

    gtr.fuel_refining("ad_astra:cryo_fuel")
        .itemInputs("8x ad_astra:ice_shard", "60x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 42000", "gtceu:oxygen 20000", "gtceu:nitrogen 8000", "gtceu:heavy_fuel 1000", "gtceu:light_fuel 4000")
        .outputFluids("ad_astra:cryo_fuel 8000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(6400)
        .blastFurnaceTemp(10000)

    gtr.fuel_refining("gtlcore:stellar_energy_rocket_fuel")
        .itemInputs("64x minecraft:fire_charge", "8x gtceu:hmxexplosive_dust", "4x gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:hydrogen_peroxide 8000", "gtceu:rocket_fuel_cn3h7o3 8000", "gtceu:dense_hydrazine_fuel_mixture 12000", "gtceu:rocket_fuel_rp_1 4000", "gtceu:nitration_mixture 4000", "gtceu:benzene 4000")
        .outputFluids("gtceu:stellar_energy_rocket_fuel 40000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(7200)
        .blastFurnaceTemp(14400)

    gtr.atomic_energy_excitation("gtlcore:naquadah_fuel")
        .notConsumable("gtceu:orichalcum_nanoswarm")
        .itemInputs("16x gtceu:naquadah_dust")
        .inputFluids("gtceu:hydrogen 30000", "gtceu:nitrogen 15000", "gtceu:fluorine 8000", "gtceu:nitric_acid 8000")
        .outputFluids("gtceu:naquadah_fuel 20000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(4000)
        .blastFurnaceTemp(12000)

    gtr.atomic_energy_excitation("gtlcore:enriched_naquadah_fuel")
        .notConsumable("gtceu:vibranium_nanoswarm")
        .notConsumableFluid("gtceu:caesium_fluoride 1000")
        .itemInputs("16x gtceu:enriched_naquadah_dust", "4x gtceu:antimony_dust")
        .inputFluids("gtceu:hydrogen 48000", "gtceu:nitrogen 30000", "gtceu:fluorine 12000", "gtceu:xenon 8000", "gtceu:radon 6000")
        .outputFluids("gtceu:enriched_naquadah_fuel 20000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(4000)
        .blastFurnaceTemp(12500)

    gtr.atomic_energy_excitation("gtlcore:hyper_fuel_1")
        .itemInputs("14x gtceu:naquadria_dust", "20x gtceu:enriched_naquadah_dust", "40x gtceu:naquadah_dust")
        .inputFluids("gtceu:hydrogen 100000", "gtceu:nitrogen 76000", "gtceu:fluorine 10000", "gtceu:radon 2000", "gtceu:xenon 4000", "gtceu:thorium 4608")
        .outputFluids("gtceu:hyper_fuel_1 24000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(3800)
        .blastFurnaceTemp(13200)

    gtr.atomic_energy_excitation("gtlcore:hyper_fuel_2")
        .itemInputs("4x gtceu:dubnium_dust", "6x gtceu:fermium_dust")
        .inputFluids("gtceu:hyper_fuel_1 6000", "gtceu:radon 40000", "gtceu:xenon 32000", "gtceu:thorium 3456", "gtceu:naquadria 864", "gtceu:uranium_235 2304")
        .outputFluids("gtceu:hyper_fuel_2 9600", "gtceu:hyper_fuel_1 500")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(4000)
        .blastFurnaceTemp(14000)

    gtr.atomic_energy_excitation("gtlcore:hyper_fuel_3")
        .itemInputs("6x gtceu:lawrencium_dust", "8x gtceu:adamantine_dust")
        .inputFluids("gtceu:hyper_fuel_2 6000", "gtceu:naquadria 864", "gtceu:thorium 1728", "gtceu:fermium 5184", "gtceu:uranium_235 2304", "gtceu:plutonium_241 4608")
        .outputFluids("gtceu:hyper_fuel_3 12000", "gtceu:hyper_fuel_2 750")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .blastFurnaceTemp(15200)

    gtr.atomic_energy_excitation("gtlcore:hyper_fuel_4")
        .itemInputs("8x gtceu:neutronium_dust", "12x gtceu:taranium_dust")
        .inputFluids("gtceu:hyper_fuel_3 6000", "gtceu:nobelium 8000", "gtceu:thorium 1728", "gtceu:fermium 2340", "gtceu:uranium_235 2304", "gtceu:plutonium_241 5184")
        .outputFluids("gtceu:hyper_fuel_4 16000", "gtceu:hyper_fuel_3 1000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4200)
        .blastFurnaceTemp(18000)

    gtr.atomic_energy_excitation("gtlcore:concentration_mixing_hyper_fuel_1")
        .notConsumable("gtceu:white_dwarf_mtter_nanoswarm")
        .itemInputs("4x gtlcore:resonating_gem", "16x gtceu:hassium_dust")
        .inputFluids("gtceu:hyper_fuel_4 8000", "gtceu:helium_plasma 6000", "gtceu:nickel_plasma 6000", "gtceu:oganesson 1152", "gtceu:naquadriatictaranium 2304", "gtceu:plutonium_241 864")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_1 12000", "gtceu:hyper_fuel_4 1500")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .blastFurnaceTemp(18800)

    gtr.atomic_energy_excitation("gtlcore:concentration_mixing_hyper_fuel_2")
        .notConsumable("gtceu:black_dwarf_mtter_nanoswarm")
        .itemInputs("16x gtceu:draconium_dust", "18x gtceu:starmetal_dust")
        .inputFluids("gtceu:concentration_mixing_hyper_fuel_1 6000", "gtceu:cosmic_element 60000", "gtceu:oxygen_plasma 6000", "gtceu:argon_plasma 6000", "gtceu:iron_plasma 6000", "gtceu:nitrogen_plasma 6000")
        .outputFluids("gtceu:concentration_mixing_hyper_fuel_2 12000", "gtceu:concentration_mixing_hyper_fuel_1 2000")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2400)
        .blastFurnaceTemp(21000)

    gtr.assembler("gtlcore:advanced_integrated_ore_processor")
        .itemInputs("16x gtlcore:integrated_ore_processor", "64x gtceu:crushing_wheels", "32x #gtceu:circuits/uiv", "16x gtceu:uiv_robot_arm", "32x gtceu:uiv_conveyor_module", "8x gtceu:uiv_electric_pump", "8x gtceu:uiv_emitter", "64x gtceu:double_dalisenite_plate", "64x gtceu:double_dalisenite_plate")
        .inputFluids("gtceu:inconel_792 82944")
        .itemOutputs("gtlcore:advanced_integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.dehydrator("gtlcore:polyimide")
        .inputFluids("gtceu:paa 144")
        .outputFluids("gtceu:polyimide 144")
        .EUt(30)
        .duration(270)

    gtr.dehydrator("gtlcore:stearic_acid")
        .inputFluids("gtceu:deglycerated_soap 1000")
        .outputFluids("gtceu:stearic_acid 800")
        .itemOutputs("gtceu:salt_dust")
        .EUt(2000)
        .duration(160)

    gtr.dehydrator("gtlcore:tungsten_trioxide_dust")
        .itemInputs("7x gtceu:tungstic_acid_dust")
        .itemOutputs("4x gtceu:tungsten_trioxide_dust")
        .EUt(120)
        .duration(150)

    gtr.dehydrator("gtlcore:silica_gel_dust")
        .inputFluids("gtceu:silica_gel_base 1000")
        .itemOutputs("3x gtceu:silica_gel_dust", "2x gtceu:salt_dust")
        .EUt(480)
        .duration(130)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.dehydrator("gtlcore:salt_dust")
        .inputFluids("gtceu:salt_water 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .EUt(30)
        .duration(160)

    gtr.chemical_reactor("gtlcore:tungsten_dust")
        .inputFluids("gtceu:hydrogen 6000")
        .itemInputs("4x gtceu:tungsten_trioxide_dust")
        .outputFluids("minecraft:water 3000")
        .itemOutputs("gtceu:tungsten_dust")
        .EUt(120)
        .duration(60)

    gtr.chemical_reactor("gtlcore:tungsten_trioxide_dust")
        .itemInputs("2x gtceu:tungsten_carbide_dust")
        .inputFluids("gtceu:oxygen 4000")
        .itemOutputs("4x gtceu:tungsten_trioxide_dust")
        .outputFluids("gtceu:carbon_monoxide 1000")
        .EUt(480)
        .duration(200)

    gtr.electric_blast_furnace("gtlcore:cadmium_tungstate_dust")
        .itemInputs("4x gtceu:tungsten_trioxide_dust", "2x gtceu:cadmium_sulfide_dust")
        .inputFluids("gtceu:oxygen 3000")
        .itemOutputs("6x gtceu:cadmium_tungstate_dust")
        .outputFluids("gtceu:sulfur_dioxide 1000")
        .EUt(120)
        .duration(320)
        .blastFurnaceTemp(2800)

    gtr.alloy_smelter("gtlcore:cadmium_sulfide_dust")
        .itemInputs("1x gtceu:cadmium_dust", "1x gtceu:sulfur_dust")
        .itemOutputs("2x gtceu:cadmium_sulfide_dust")
        .EUt(30)
        .duration(2400)

    gtr.electric_blast_furnace("gtlcore:bismuth_germanate_dust")
        .itemInputs("3x gtceu:germanium_dioxide_dust")
        .inputFluids("gtceu:bismuth_nitrate_solution 4000")
        .itemOutputs("33x gtceu:bismuth_germanate_dust")
        .outputFluids("gtceu:nitrogen_dioxide 12000")
        .EUt(5000000)
        .duration(80)
        .blastFurnaceTemp(7600)

    gtr.chemical_reactor("gtlcore:germanium_dioxide_dust")
        .itemInputs("gtceu:germanium_dust")
        .inputFluids("gtceu:oxygen 2000")
        .itemOutputs("3x gtceu:germanium_dioxide_dust")
        .EUt(120)
        .duration(400)

    gtr.large_chemical_reactor("gtlcore:bismuth_nitrate_solution")
        .itemInputs("gtceu:bismuth_dust")
        .inputFluids("gtceu:nitric_acid 6000")
        .outputFluids("gtceu:bismuth_nitrate_solution 1000", "gtceu:nitrogen_dioxide 3000", "minecraft:water 2000")
        .EUt(30)
        .duration(350)

    gtr.assembler("gtlcore:advanced_stellar_containment_casing")
        .itemInputs("gtlcore:stellar_containment_casing", "gtceu:uhv_field_generator", "8x gtceu:vibranium_screw", "gtceu:enderite_octal_wire", "4x gtceu:taranium_plate")
        .itemOutputs("gtlcore:advanced_stellar_containment_casing")
        .inputFluids("gtceu:astraltitanium 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(280)

    gtr.assembler("gtlcore:ultimate_stellar_containment_casing")
        .itemInputs("gtlcore:advanced_stellar_containment_casing", "gtceu:uev_field_generator", "8x gtceu:vibramantium_screw", "gtceu:legendarium_quadruple_wire", "8x gtceu:heavy_quark_degenerate_matter_plate")
        .itemOutputs("gtlcore:ultimate_stellar_containment_casing")
        .inputFluids("gtceu:celestialtungsten 144")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(460)

    //Component Assembly Line Casing
    gtr.assembler("gtlcore:component_assembly_line_casing_lv")
        .itemInputs("gtceu:steel_frame", "4x gtceu:dense_steel_plate", "4x gtceu:lv_robot_arm", "8x gtceu:lv_electric_piston", "10x gtceu:lv_electric_motor", "4x gtceu:steel_gear", "3x gtceu:manganese_phosphide_octal_wire", "16x #gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtlcore:component_assembly_line_casing_lv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_mv")
        .itemInputs("gtceu:aluminium_frame", "16x gtceu:double_aluminium_plate", "4x gtceu:mv_robot_arm", "8x gtceu:mv_electric_piston", "10x gtceu:mv_electric_motor", "4x gtceu:aluminium_gear", "3x gtceu:magnesium_diboride_octal_wire", "8x #gtceu:circuits/mv", "16x #gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 432")
        .itemOutputs("gtlcore:component_assembly_line_casing_mv")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_hv")
        .itemInputs("gtceu:stainless_steel_frame", "16x gtceu:double_stainless_steel_plate", "4x gtceu:hv_robot_arm", "8x gtceu:hv_electric_piston", "10x gtceu:hv_electric_motor", "4x gtceu:stainless_steel_gear", "3x gtceu:mercury_barium_calcium_cuprate_octal_wire", "8x #gtceu:circuits/hv", "16x #gtceu:circuits/mv")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtlcore:component_assembly_line_casing_hv")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_ev")
        .itemInputs("gtceu:titanium_frame", "16x gtceu:double_titanium_plate", "4x gtceu:ev_robot_arm", "8x gtceu:ev_electric_piston", "10x gtceu:ev_electric_motor", "4x gtceu:titanium_gear", "3x gtceu:uranium_triplatinum_octal_wire", "8x #gtceu:circuits/ev", "16x #gtceu:circuits/hv")
        .inputFluids("gtceu:soldering_alloy 720")
        .itemOutputs("gtlcore:component_assembly_line_casing_ev")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(320)

    gtr.assembler("gtlcore:component_assembly_line_casing_iv")
        .itemInputs("gtceu:tungsten_steel_frame", "16x gtceu:double_tungsten_steel_plate", "4x gtceu:iv_robot_arm", "8x gtceu:iv_electric_piston", "10x gtceu:iv_electric_motor", "4x gtceu:tungsten_steel_gear", "3x gtceu:samarium_iron_arsenic_oxide_octal_wire", "8x #gtceu:circuits/iv", "16x #gtceu:circuits/ev")
        .inputFluids("gtceu:soldering_alloy 864")
        .itemOutputs("gtlcore:component_assembly_line_casing_iv")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(320)

    gtr.assembly_line("gtlcore:component_assembly_line_casing_luv")
        .itemInputs("gtceu:europium_frame",
            "6x gtceu:dense_rhodium_plated_palladium_plate",
            "4x gtceu:luv_field_generator",
            "6x gtceu:luv_electric_pump",
            "8x gtceu:luv_robot_arm",
            "10x gtceu:luv_sensor",
            "16x gtceu:luv_conveyor_module",
            "4x gtceu:osmiridium_gear",
            "16x gtceu:small_rhodium_plated_palladium_gear",
            "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire",
            "8x #gtceu:circuits/luv",
            "16x #gtceu:circuits/iv")
        .inputFluids("gtceu:indalloy_140 3456", "gtceu:zeron_100 1728", "gtceu:soldering_alloy 1152", "gtceu:lubricant 4000")
        .itemOutputs("gtlcore:component_assembly_line_casing_luv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_iv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(128))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_zpm")
        .itemInputs("gtceu:naquadah_alloy_frame",
            "6x gtceu:dense_naquadah_alloy_plate",
            "4x gtceu:zpm_field_generator",
            "6x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_robot_arm",
            "10x gtceu:zpm_sensor",
            "16x gtceu:zpm_conveyor_module",
            "4x gtceu:naquadah_alloy_gear",
            "16x gtceu:small_naquadah_alloy_gear",
            "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire",
            "8x #gtceu:circuits/zpm",
            "16x #gtceu:circuits/luv")
        .inputFluids("gtceu:indalloy_140 4032", "gtceu:pikyonium 2016", "gtceu:neutronium 1008", "gtceu:lubricant 5000")
        .itemOutputs("gtlcore:component_assembly_line_casing_zpm")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_luv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(192))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_uv")
        .itemInputs("gtceu:tritanium_frame",
            "24x gtceu:double_tritanium_plate",
            "4x gtceu:uv_field_generator",
            "6x gtceu:uv_electric_pump",
            "8x gtceu:uv_robot_arm",
            "10x gtceu:uv_sensor",
            "16x gtceu:uv_conveyor_module",
            "4x gtceu:tritanium_gear",
            "16x gtceu:small_tritanium_gear",
            "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire",
            "8x #gtceu:circuits/uv",
            "16x #gtceu:circuits/zpm")
        .inputFluids("gtceu:indalloy_140 4608", "gtceu:artherium_sn 2304", "gtceu:abyssalalloy 1152", "gtceu:lubricant 6000")
        .itemOutputs("gtlcore:component_assembly_line_casing_uv")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_zpm"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_uhv")
        .itemInputs("gtceu:mithril_frame",
            "24x gtceu:double_mithril_plate",
            "4x gtceu:uhv_field_generator",
            "6x gtceu:uhv_electric_pump",
            "8x gtceu:uhv_robot_arm",
            "10x gtceu:uhv_sensor",
            "16x gtceu:uhv_conveyor_module",
            "4x gtceu:orichalcum_gear",
            "16x gtceu:small_orichalcum_gear",
            "4x gtceu:ruthenium_trinium_americium_neutronate_octal_wire",
            "8x #gtceu:circuits/uhv",
            "16x #gtceu:circuits/uv")
        .inputFluids("gtceu:indalloy_140 5184", "gtceu:tairitsu 2592", "gtceu:titansteel 1296", "gtceu:lubricant 7000")
        .itemOutputs("gtlcore:component_assembly_line_casing_uhv")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_uv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(384))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_uev")
        .itemInputs("gtceu:quantanium_frame",
            "24x gtceu:double_echoite_plate",
            "4x gtceu:uev_field_generator",
            "6x gtceu:uev_electric_pump",
            "8x gtceu:uev_robot_arm",
            "10x gtceu:uev_sensor",
            "16x gtceu:uev_conveyor_module",
            "4x gtceu:infuscolium_gear",
            "16x gtceu:small_infuscolium_gear",
            "4x gtceu:enderite_octal_wire",
            "8x #gtceu:circuits/uev",
            "16x #gtceu:circuits/uhv")
        .inputFluids("gtceu:mutated_living_solder 5760", "gtceu:quantum 2880", "gtceu:adamantine 1440", "gtceu:lubricant 8000")
        .itemOutputs("gtlcore:component_assembly_line_casing_uev")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_uhv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(512))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_uiv")
        .itemInputs("gtceu:vibranium_frame",
            "24x gtceu:double_vibranium_plate",
            "4x gtceu:uiv_field_generator",
            "6x gtceu:uiv_electric_pump",
            "8x gtceu:uiv_robot_arm",
            "10x gtceu:uiv_sensor",
            "16x gtceu:uiv_conveyor_module",
            "4x gtceu:hastelloyx_78_gear",
            "16x gtceu:small_hastelloyx_78_gear",
            "4x gtceu:echoite_octal_wire",
            "8x #gtceu:circuits/uiv",
            "16x #gtceu:circuits/uev")
        .inputFluids("gtceu:mutated_living_solder 6336", "gtceu:naquadriatictaranium 3168", "gtceu:flerovium 1584", "gtceu:lubricant 9000")
        .itemOutputs("gtlcore:component_assembly_line_casing_uiv")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_uev"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_uxv")
        .itemInputs("gtceu:draconium_frame",
            "24x gtceu:double_draconiumawakened_plate",
            "4x gtceu:uxv_field_generator",
            "6x gtceu:uxv_electric_pump",
            "8x gtceu:uxv_robot_arm",
            "10x gtceu:uxv_sensor",
            "16x gtceu:uxv_conveyor_module",
            "4x gtceu:vibramantium_gear",
            "16x gtceu:small_vibramantium_gear",
            "4x gtceu:legendarium_octal_wire",
            "8x #gtceu:circuits/uxv",
            "16x #gtceu:circuits/uiv")
        .inputFluids("gtceu:super_mutated_living_solder 6912", "gtceu:crystalmatrix 3456", "gtceu:quantumchromodynamically_confined_matter 1782", "gtceu:lubricant 10000")
        .itemOutputs("gtlcore:component_assembly_line_casing_uxv")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_uiv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_opv")
        .itemInputs("gtceu:infinity_frame",
            "24x gtceu:double_hypogen_plate",
            "4x gtceu:opv_field_generator",
            "6x gtceu:opv_electric_pump",
            "8x gtceu:opv_robot_arm",
            "10x gtceu:opv_sensor",
            "16x gtceu:opv_conveyor_module",
            "12x gtceu:celestialtungsten_gear",
            "24x gtceu:astraltitanium_gear",
            "4x gtceu:draconiumawakened_octal_wire",
            "8x #gtceu:circuits/opv",
            "16x #gtceu:circuits/uxv")
        .inputFluids("gtceu:super_mutated_living_solder 7488", "gtceu:white_dwarf_mtter 3744", "gtceu:chaos 1872", "gtceu:lubricant 20000")
        .itemOutputs("gtlcore:component_assembly_line_casing_opv")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_uxv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(8192))

    gtr.assembly_line("gtlcore:component_assembly_line_casing_max")
        .itemInputs("gtceu:eternity_frame",
            "24x gtceu:double_transcendentmetal_plate",
            "4x gtlcore:max_field_generator",
            "6x gtlcore:max_electric_pump",
            "8x gtlcore:max_robot_arm",
            "10x gtlcore:max_sensor",
            "16x gtlcore:max_conveyor_module",
            "8x gtceu:transcendentmetal_gear",
            "4x gtceu:hypogen_octal_wire",
            "8x #gtceu:circuits/max",
            "16x #gtceu:circuits/opv")
        .inputFluids("gtceu:spacetime 9216", "gtceu:black_dwarf_mtter 4608", "gtceu:magnetohydrodynamicallyconstrainedstarmatter 1872", "gtceu:lubricant 30000")
        .itemOutputs("gtlcore:component_assembly_line_casing_max")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_opv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembler("gtlcore:hsss_reinforced_borosilicate_glass")
        .itemInputs("4x gtceu:laminated_glass", "4x gtceu:double_hsss_plate", "32x gtceu:fine_borosilicate_glass_wire")
        .itemOutputs("2x gtlcore:hsss_reinforced_borosilicate_glass")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembly_line("gtlcore:component_assembly_line")
        .itemInputs("16x gtlcore:advanced_assembly_line",
            "16x gtceu:assembly_line_casing",
            "32x gtlcore:advanced_assembly_line_unit",
            "16x gtceu:uv_robot_arm",
            "32x gtceu:uv_conveyor_module",
            "32x gtceu:uhv_electric_motor",
            "16x gtceu:polybenzimidazole_huge_fluid_pipe",
            "64x gtceu:double_mithril_plate",
            "16x gtceu:uhv_fluid_solidifier",
            "16x #gtceu:circuits/uev",
            "20x #gtceu:circuits/uhv",
            "24x #gtceu:circuits/uv")
        .inputFluids("gtceu:indalloy_140 1296", "gtceu:soldering_alloy 1728", "gtceu:naquadria 2304", "gtceu:lubricant 16000")
        .itemOutputs("gtlcore:component_assembly_line")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(4200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:component_assembly_line_casing_ev"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(512))

    gtr.component_assembly_line("gtlcore:lv_electric_motor_ic")
        .itemInputs("6x gtceu:tin_hex_cable", "12x gtceu:copper_hex_wire", "48x gtceu:long_iron_rod", "48x gtceu:magnetic_iron_rod")
        .itemOutputs("64x gtceu:lv_electric_motor")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_motor_sc")
        .itemInputs("6x gtceu:tin_hex_cable", "12x gtceu:copper_hex_wire", "48x gtceu:long_steel_rod", "48x gtceu:magnetic_steel_rod")
        .itemOutputs("64x gtceu:lv_electric_motor")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_motor_sac")
        .itemInputs("6x gtceu:tin_hex_cable", "12x gtceu:annealed_copper_hex_wire", "48x gtceu:long_steel_rod", "48x gtceu:magnetic_steel_rod")
        .itemOutputs("64x gtceu:lv_electric_motor")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_motor_iac")
        .itemInputs("6x gtceu:tin_hex_cable", "12x gtceu:annealed_copper_hex_wire", "48x gtceu:long_iron_rod", "48x gtceu:magnetic_iron_rod")
        .itemOutputs("64x gtceu:lv_electric_motor")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_pump_sr")
        .itemInputs("48x gtceu:tin_rotor", "48x gtceu:tin_screw", "48x gtceu:bronze_normal_fluid_pipe", "48x gtceu:lv_electric_motor", "3x gtceu:tin_hex_cable")
        .inputFluids("gtceu:silicone_rubber 3456")
        .itemOutputs("64x gtceu:lv_electric_pump")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_pump_sbr")
        .itemInputs("48x gtceu:tin_rotor", "48x gtceu:tin_screw", "48x gtceu:bronze_normal_fluid_pipe", "48x gtceu:lv_electric_motor", "3x gtceu:tin_hex_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 3456")
        .itemOutputs("64x gtceu:lv_electric_pump")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_pump_rubber")
        .itemInputs("48x gtceu:tin_rotor", "48x gtceu:tin_screw", "48x gtceu:bronze_normal_fluid_pipe", "48x gtceu:lv_electric_motor", "3x gtceu:tin_hex_cable")
        .inputFluids("gtceu:rubber 3456")
        .itemOutputs("64x gtceu:lv_electric_pump")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_conveyor_module_rubber")
        .itemInputs("288x gtceu:rubber_plate", "96x gtceu:lv_electric_motor", "3x gtceu:tin_hex_cable")
        .itemOutputs("64x gtceu:lv_conveyor_module")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_conveyor_module_sbr")
        .itemInputs("288x gtceu:styrene_butadiene_rubber_plate", "96x gtceu:lv_electric_motor", "3x gtceu:tin_hex_cable")
        .itemOutputs("64x gtceu:lv_conveyor_module")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_conveyor_module_sr")
        .itemInputs("288x gtceu:silicone_rubber_plate", "96x gtceu:lv_electric_motor", "3x gtceu:tin_hex_cable")
        .itemOutputs("64x gtceu:lv_conveyor_module")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_electric_piston")
        .itemInputs("48x gtceu:lv_electric_motor", "48x gtceu:long_steel_rod", "16x gtceu:dense_steel_plate", "12x gtceu:steel_gear", "6x gtceu:tin_hex_cable")
        .itemOutputs("64x gtceu:lv_electric_piston")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_robot_arm")
        .itemInputs("96x gtceu:lv_electric_motor", "48x gtceu:lv_electric_piston", "48x gtceu:long_steel_rod", "48x #gtceu:circuits/lv", "9x gtceu:tin_hex_cable")
        .itemOutputs("64x gtceu:lv_robot_arm")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_field_generator")
        .itemInputs("96x #gtceu:circuits/lv", "96x gtceu:steel_plate", "48x minecraft:ender_pearl")
        .inputFluids("gtceu:manganese_phosphide 55296")
        .itemOutputs("64x gtceu:lv_field_generator")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_emitter")
        .itemInputs("96x #gtceu:circuits/lv", "48x gtceu:quartzite_gem", "6x gtceu:tin_hex_cable")
        .inputFluids("gtceu:brass 13824")
        .itemOutputs("64x gtceu:lv_emitter")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:lv_sensor")
        .itemInputs("48x #gtceu:circuits/lv", "48x gtceu:quartzite_gem", "24x gtceu:long_brass_rod", "21x gtceu:dense_steel_plate")
        .itemOutputs("64x gtceu:lv_sensor")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(96)
        .addData("CATier", 1)

    gtr.component_assembly_line("gtlcore:mv_electric_motor_ac")
        .itemInputs("48x gtceu:long_aluminium_rod", "24x gtceu:cupronickel_hex_wire", "48x gtceu:magnetic_steel_rod", "6x gtceu:copper_hex_cable")
        .itemOutputs("64x gtceu:mv_electric_motor")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_electric_motor_c")
        .itemInputs("48x gtceu:long_aluminium_rod", "24x gtceu:cupronickel_hex_wire", "48x gtceu:magnetic_steel_rod", "6x gtceu:annealed_copper_hex_cable")
        .itemOutputs("64x gtceu:mv_electric_motor")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_electric_pump_sr")
        .itemInputs("48x gtceu:bronze_rotor", "48x gtceu:bronze_screw", "48x gtceu:steel_normal_fluid_pipe", "48x gtceu:mv_electric_motor", "3x gtceu:copper_hex_cable")
        .inputFluids("gtceu:silicone_rubber 3456")
        .itemOutputs("64x gtceu:mv_electric_pump")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_electric_pump_sbr")
        .itemInputs("48x gtceu:bronze_rotor", "48x gtceu:bronze_screw", "48x gtceu:steel_normal_fluid_pipe", "48x gtceu:mv_electric_motor", "3x gtceu:copper_hex_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 3456")
        .itemOutputs("64x gtceu:mv_electric_pump")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_electric_pump_rubber")
        .itemInputs("48x gtceu:bronze_rotor", "48x gtceu:bronze_screw", "48x gtceu:steel_normal_fluid_pipe", "48x gtceu:mv_electric_motor", "3x gtceu:copper_hex_cable")
        .inputFluids("gtceu:rubber 3456")
        .itemOutputs("64x gtceu:mv_electric_pump")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_conveyor_module_rubber")
        .itemInputs("288x gtceu:rubber_plate", "96x gtceu:mv_electric_motor", "3x gtceu:copper_hex_cable")
        .itemOutputs("64x gtceu:mv_conveyor_module")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_conveyor_module_sbr")
        .itemInputs("288x gtceu:styrene_butadiene_rubber_plate", "96x gtceu:mv_electric_motor", "3x gtceu:copper_hex_cable")
        .itemOutputs("64x gtceu:mv_conveyor_module")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_conveyor_module_sr")
        .itemInputs("288x gtceu:silicone_rubber_plate", "96x gtceu:mv_electric_motor", "3x gtceu:copper_hex_cable")
        .itemOutputs("64x gtceu:mv_conveyor_module")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_electric_piston")
        .itemInputs("72x gtceu:double_aluminium_plate", "48x gtceu:mv_electric_motor", "48x gtceu:long_aluminium_rod", "12x gtceu:aluminium_gear", "6x gtceu:copper_hex_cable")
        .itemOutputs("64x gtceu:mv_electric_piston")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_robot_arm")
        .itemInputs("96x gtceu:mv_electric_motor", "48x gtceu:mv_electric_piston", "48x gtceu:long_aluminium_rod", "48x #gtceu:circuits/mv", "9x gtceu:copper_hex_cable")
        .itemOutputs("64x gtceu:mv_robot_arm")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_field_generator")
        .itemInputs("96x #gtceu:circuits/mv", "96x gtceu:aluminium_plate", "48x minecraft:ender_eye")
        .inputFluids("gtceu:magnesium_diboride 55296")
        .itemOutputs("64x gtceu:mv_field_generator")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_emitter")
        .itemInputs("96x #gtceu:circuits/mv", "48x gtceu:flawless_emerald_gem", "6x gtceu:copper_hex_cable")
        .inputFluids("gtceu:electrum 13824")
        .itemOutputs("64x gtceu:mv_emitter")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:mv_sensor")
        .itemInputs("96x gtceu:double_aluminium_plate", "48x #gtceu:circuits/mv", "48x gtceu:flawless_emerald_gem", "24x gtceu:long_electrum_rod")
        .itemOutputs("64x gtceu:mv_sensor")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(96)
        .addData("CATier", 2)

    gtr.component_assembly_line("gtlcore:hv_electric_motor")
        .itemInputs("48x gtceu:long_stainless_steel_rod", "24x gtceu:electrum_hex_wire", "48x gtceu:magnetic_steel_rod", "12x gtceu:silver_hex_cable")
        .itemOutputs("64x gtceu:hv_electric_motor")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_electric_pump_sr")
        .itemInputs("48x gtceu:steel_rotor", "48x gtceu:steel_screw", "48x gtceu:stainless_steel_normal_fluid_pipe", "48x gtceu:hv_electric_motor", "3x gtceu:gold_hex_cable")
        .inputFluids("gtceu:silicone_rubber 3456")
        .itemOutputs("64x gtceu:hv_electric_pump")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_electric_pump_sbr")
        .itemInputs("48x gtceu:steel_rotor", "48x gtceu:steel_screw", "48x gtceu:stainless_steel_normal_fluid_pipe", "48x gtceu:hv_electric_motor", "3x gtceu:gold_hex_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 3456")
        .itemOutputs("64x gtceu:hv_electric_pump")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_electric_pump_rubber")
        .itemInputs("48x gtceu:steel_rotor", "48x gtceu:steel_screw", "48x gtceu:stainless_steel_normal_fluid_pipe", "48x gtceu:hv_electric_motor", "3x gtceu:gold_hex_cable")
        .inputFluids("gtceu:rubber 3456")
        .itemOutputs("64x gtceu:hv_electric_pump")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_conveyor_module_rubber")
        .itemInputs("288x gtceu:rubber_plate", "96x gtceu:hv_electric_motor", "3x gtceu:gold_hex_cable")
        .itemOutputs("64x gtceu:hv_conveyor_module")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_conveyor_module_sbr")
        .itemInputs("288x gtceu:styrene_butadiene_rubber_plate", "96x gtceu:hv_electric_motor", "3x gtceu:gold_hex_cable")
        .itemOutputs("64x gtceu:hv_conveyor_module")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_conveyor_module_sr")
        .itemInputs("288x gtceu:silicone_rubber_plate", "96x gtceu:hv_electric_motor", "3x gtceu:gold_hex_cable")
        .itemOutputs("64x gtceu:hv_conveyor_module")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_electric_piston")
        .itemInputs("72x gtceu:double_stainless_steel_plate", "48x gtceu:hv_electric_motor", "48x gtceu:long_stainless_steel_rod", "12x gtceu:stainless_steel_gear", "6x gtceu:gold_hex_cable")
        .itemOutputs("64x gtceu:hv_electric_piston")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_robot_arm")
        .itemInputs("96x gtceu:hv_electric_motor", "48x gtceu:hv_electric_piston", "48x gtceu:long_stainless_steel_rod", "48x #gtceu:circuits/hv", "9x gtceu:gold_hex_cable")
        .itemOutputs("64x gtceu:hv_robot_arm")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_field_generator")
        .itemInputs("96x #gtceu:circuits/hv", "96x gtceu:stainless_steel_plate", "48x gtceu:quantum_eye")
        .inputFluids("gtceu:mercury_barium_calcium_cuprate 55296")
        .itemOutputs("64x gtceu:hv_field_generator")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_emitter")
        .itemInputs("96x #gtceu:circuits/hv", "48x minecraft:ender_eye", "6x gtceu:gold_hex_cable")
        .inputFluids("gtceu:chromium 13824")
        .itemOutputs("64x gtceu:hv_emitter")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:hv_sensor")
        .itemInputs("96x gtceu:double_stainless_steel_plate", "48x #gtceu:circuits/hv", "48x minecraft:ender_eye", "48x gtceu:chromium_rod")
        .itemOutputs("64x gtceu:hv_sensor")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(96)
        .addData("CATier", 3)

    gtr.component_assembly_line("gtlcore:ev_electric_motor")
        .itemInputs("48x gtceu:long_titanium_rod", "24x gtceu:kanthal_hex_wire", "48x gtceu:magnetic_neodymium_rod", "12x gtceu:aluminium_hex_cable")
        .itemOutputs("64x gtceu:ev_electric_motor")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_electric_pump_sr")
        .itemInputs("48x gtceu:stainless_steel_rotor", "48x gtceu:stainless_steel_screw", "48x gtceu:titanium_normal_fluid_pipe", "48x gtceu:ev_electric_motor", "3x gtceu:aluminium_hex_cable")
        .inputFluids("gtceu:silicone_rubber 3456")
        .itemOutputs("64x gtceu:ev_electric_pump")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_electric_pump_sbr")
        .itemInputs("48x gtceu:stainless_steel_rotor", "48x gtceu:stainless_steel_screw", "48x gtceu:titanium_normal_fluid_pipe", "48x gtceu:ev_electric_motor", "3x gtceu:aluminium_hex_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 3456")
        .itemOutputs("64x gtceu:ev_electric_pump")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_electric_pump_rubber")
        .itemInputs("48x gtceu:stainless_steel_rotor", "48x gtceu:stainless_steel_screw", "48x gtceu:titanium_normal_fluid_pipe", "48x gtceu:ev_electric_motor", "3x gtceu:aluminium_hex_cable")
        .inputFluids("gtceu:rubber 3456")
        .itemOutputs("64x gtceu:ev_electric_pump")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_conveyor_module_rubber")
        .itemInputs("288x gtceu:rubber_plate", "96x gtceu:ev_electric_motor", "3x gtceu:aluminium_hex_cable")
        .itemOutputs("64x gtceu:hv_conveyor_module")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_conveyor_module_sbr")
        .itemInputs("288x gtceu:styrene_butadiene_rubber_plate", "96x gtceu:ev_electric_motor", "3x gtceu:aluminium_hex_cable")
        .itemOutputs("64x gtceu:ev_conveyor_module")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_conveyor_module_sr")
        .itemInputs("288x gtceu:silicone_rubber_plate", "96x gtceu:ev_electric_motor", "3x gtceu:aluminium_hex_cable")
        .itemOutputs("64x gtceu:ev_conveyor_module")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_electric_piston")
        .itemInputs("72x gtceu:double_titanium_plate", "48x gtceu:ev_electric_motor", "48x gtceu:long_titanium_rod", "12x gtceu:titanium_gear", "6x gtceu:aluminium_hex_cable")
        .itemOutputs("64x gtceu:ev_electric_piston")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_robot_arm")
        .itemInputs("96x gtceu:ev_electric_motor", "48x gtceu:ev_electric_piston", "48x gtceu:long_titanium_rod", "48x #gtceu:circuits/ev", "9x gtceu:aluminium_hex_cable")
        .itemOutputs("64x gtceu:ev_robot_arm")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_field_generator")
        .itemInputs("96x #gtceu:circuits/ev", "96x gtceu:double_titanium_plate", "48x minecraft:nether_star")
        .inputFluids("gtceu:uranium_triplatinum 55296")
        .itemOutputs("64x gtceu:ev_field_generator")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_emitter")
        .itemInputs("96x #gtceu:circuits/ev", "48x gtceu:quantum_eye", "6x gtceu:aluminium_hex_cable")
        .inputFluids("gtceu:platinum 13824")
        .itemOutputs("64x gtceu:ev_emitter")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:ev_sensor")
        .itemInputs("96x gtceu:double_titanium_plate", "48x #gtceu:circuits/ev", "48x gtceu:quantum_eye", "24x gtceu:long_platinum_rod")
        .itemOutputs("64x gtceu:ev_sensor")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(96)
        .addData("CATier", 4)

    gtr.component_assembly_line("gtlcore:iv_electric_motor")
        .itemInputs("48x gtceu:long_tungsten_steel_rod", "24x gtceu:graphene_hex_wire", "48x gtceu:magnetic_neodymium_rod", "12x gtceu:tungsten_hex_cable")
        .itemOutputs("64x gtceu:iv_electric_motor")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_electric_pump_sr")
        .itemInputs("48x gtceu:tungsten_steel_rotor", "48x gtceu:tungsten_steel_screw", "48x gtceu:tungsten_steel_normal_fluid_pipe", "48x gtceu:iv_electric_motor", "3x gtceu:tungsten_hex_cable")
        .inputFluids("gtceu:silicone_rubber 3456")
        .itemOutputs("64x gtceu:iv_electric_pump")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_electric_pump_sbr")
        .itemInputs("48x gtceu:tungsten_steel_rotor", "48x gtceu:tungsten_steel_screw", "48x gtceu:tungsten_steel_normal_fluid_pipe", "48x gtceu:iv_electric_motor", "3x gtceu:tungsten_hex_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 3456")
        .itemOutputs("64x gtceu:iv_electric_pump")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_conveyor_module_sbr")
        .itemInputs("288x gtceu:styrene_butadiene_rubber_plate", "96x gtceu:iv_electric_motor", "3x gtceu:tungsten_hex_cable")
        .itemOutputs("64x gtceu:iv_conveyor_module")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_conveyor_module_sr")
        .itemInputs("288x gtceu:silicone_rubber_plate", "96x gtceu:iv_electric_motor", "3x gtceu:tungsten_hex_cable")
        .itemOutputs("64x gtceu:iv_conveyor_module")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_electric_piston")
        .itemInputs("48x gtceu:iv_electric_motor", "48x gtceu:long_tungsten_steel_rod", "16x gtceu:dense_tungsten_steel_plate", "12x gtceu:tungsten_steel_gear", "6x gtceu:tungsten_hex_cable")
        .itemOutputs("64x gtceu:iv_electric_piston")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_robot_arm")
        .itemInputs("96x gtceu:iv_electric_motor", "48x gtceu:iv_electric_piston", "48x gtceu:long_tungsten_steel_rod", "48x #gtceu:circuits/iv", "9x gtceu:tungsten_hex_cable")
        .itemOutputs("64x gtceu:iv_robot_arm")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_field_generator")
        .itemInputs("96x #gtceu:circuits/iv", "96x gtceu:double_tungsten_steel_plate", "48x gtceu:quantum_star")
        .inputFluids("gtceu:samarium_iron_arsenic_oxide 55296")
        .itemOutputs("64x gtceu:iv_field_generator")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_emitter")
        .itemInputs("96x #gtceu:circuits/iv", "48x gtceu:quantum_star", "6x gtceu:tungsten_hex_cable")
        .inputFluids("gtceu:iridium 13824")
        .itemOutputs("64x gtceu:iv_emitter")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:iv_sensor")
        .itemInputs("48x #gtceu:circuits/iv", "48x gtceu:quantum_star", "24x gtceu:long_iridium_rod", "21x gtceu:dense_tungsten_steel_plate")
        .itemOutputs("64x gtceu:iv_sensor")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(96)
        .addData("CATier", 5)

    gtr.component_assembly_line("gtlcore:luv_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_magnetic_samarium_rod", "6x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 6912", "gtceu:lubricant 12000", "gtceu:hsss 20352", "gtceu:ruthenium 36864", "gtceu:iridium 18432")
        .itemOutputs("64x gtceu:luv_electric_motor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_hsss_plate", "48x gtceu:luv_electric_motor", "6x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 6912", "gtceu:lubricant 12000", "gtceu:silicone_rubber 6912", "gtceu:niobium_titanium 6912", "gtceu:hsss 34560")
        .itemOutputs("64x gtceu:luv_electric_pump")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:luv_electric_motor", "48x gtceu:double_hsss_plate", "6x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 6912", "gtceu:lubricant 12000", "gtceu:styrene_butadiene_rubber 55296", "gtceu:hsss 22272")
        .itemOutputs("64x gtceu:luv_conveyor_module")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:luv_electric_motor", "96x gtceu:double_hsss_plate", "6x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 6912", "gtceu:lubricant 12000", "gtceu:hsss 74496")
        .itemOutputs("64x gtceu:luv_electric_piston")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/ev", "96x #gtceu:circuits/iv", "96x gtceu:luv_electric_motor", "48x gtceu:luv_electric_piston", "48x #gtceu:circuits/luv", "12x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:lubricant 12000", "gtceu:hsss 76032")
        .itemOutputs("64x gtceu:luv_robot_arm")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_field_generator")
        .itemInputs("144x gtceu:double_hsss_plate", "96x #gtceu:circuits/luv", "96x gtceu:luv_emitter", "48x gtceu:quantum_star", "48x gtceu:hsss_frame", "12x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:indium_tin_barium_titanium_cuprate 110592")
        .itemOutputs("64x gtceu:luv_field_generator")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/luv", "48x gtceu:luv_electric_motor", "48x gtceu:quantum_star", "48x gtceu:hsss_frame", "12x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 13824", "gtceu:palladium 165888", "gtceu:ruthenium 18432", "gtceu:iridium 9216")
        .itemOutputs("64x gtceu:luv_emitter")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:luv_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/luv", "96x gtceu:double_ruridit_plate", "48x gtceu:luv_electric_motor", "48x gtceu:quantum_star", "48x gtceu:hsss_frame", "12x gtceu:niobium_titanium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 13824", "gtceu:palladium 165888")
        .itemOutputs("64x gtceu:luv_sensor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(720)
        .addData("CATier", 6)

    gtr.component_assembly_line("gtlcore:zpm_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_magnetic_samarium_rod", "6x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 13824", "gtceu:lubricant 24000", "gtceu:europium 82944", "gtceu:osmiridium 40704")
        .itemOutputs("64x gtceu:zpm_electric_motor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_osmiridium_plate", "48x gtceu:zpm_electric_motor", "6x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 13824", "gtceu:lubricant 24000", "gtceu:silicone_rubber 13824", "gtceu:polybenzimidazole 20736", "gtceu:osmiridium 33792")
        .itemOutputs("64x gtceu:zpm_electric_pump")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:zpm_electric_motor", "48x gtceu:double_osmiridium_plate", "6x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 13824", "gtceu:lubricant 24000", "gtceu:styrene_butadiene_rubber 110592", "gtceu:osmiridium 22272")
        .itemOutputs("64x gtceu:zpm_conveyor_module")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:zpm_electric_motor", "96x gtceu:double_osmiridium_plate", "6x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 13824", "gtceu:lubricant 24000", "gtceu:osmiridium 74496")
        .itemOutputs("64x gtceu:zpm_electric_piston")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/iv", "96x #gtceu:circuits/luv", "96x gtceu:zpm_electric_motor", "48x gtceu:zpm_electric_piston", "48x #gtceu:circuits/zpm", "12x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 55296", "gtceu:lubricant 24000", "gtceu:osmiridium 76032")
        .itemOutputs("64x gtceu:zpm_robot_arm")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_field_generator")
        .itemInputs("144x gtceu:double_naquadah_alloy_plate", "96x #gtceu:circuits/zpm", "96x gtceu:zpm_emitter", "48x gtceu:quantum_star", "48x gtceu:naquadah_alloy_frame", "12x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 55296", "gtceu:uranium_rhodium_dinaquadide 110592")
        .itemOutputs("64x gtceu:zpm_field_generator")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/zpm", "48x gtceu:zpm_electric_motor", "96x gtceu:quantum_star", "48x gtceu:naquadah_alloy_frame", "12x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:trinium 165888", "gtceu:osmiridium 27648")
        .itemOutputs("64x gtceu:zpm_emitter")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:zpm_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/zpm", "96x gtceu:double_osmiridium_plate", "48x gtceu:zpm_electric_motor", "96x gtceu:quantum_star", "48x gtceu:naquadah_alloy_frame", "12x gtceu:vanadium_gallium_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:trinium 165888")
        .itemOutputs("64x gtceu:zpm_sensor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(720)
        .addData("CATier", 7)

    gtr.component_assembly_line("gtlcore:uv_electric_motor")
        .circuit(1)
        .itemInputs("6x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:lubricant 32000", "gtceu:americium 110592", "gtceu:tritanium 40704", "gtceu:naquadria 27648", "gtceu:samarium 6912")
        .itemOutputs("64x gtceu:uv_electric_motor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_electric_pump")
        .circuit(3)
        .itemInputs("288x gtceu:naquadah_plate", "48x gtceu:double_tritanium_plate", "48x gtceu:uv_electric_motor", "6x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:lubricant 32000", "gtceu:silicone_rubber 27648", "gtceu:tritanium 6144", "gtceu:naquadria 27648", "gtceu:naquadah_alloy 27648")
        .itemOutputs("64x gtceu:uv_electric_pump")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:uv_electric_motor", "48x gtceu:double_tritanium_plate", "6x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:lubricant 32000", "gtceu:styrene_butadiene_rubber 165888", "gtceu:tritanium 22272", "gtceu:naquadria 27648")
        .itemOutputs("64x gtceu:uv_conveyor_module")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:uv_electric_motor", "96x gtceu:double_tritanium_plate", "6x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 27648", "gtceu:lubricant 32000", "gtceu:tritanium 33024", "gtceu:naquadah_alloy 41472", "gtceu:naquadria 27648")
        .itemOutputs("64x gtceu:uv_electric_piston")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/luv", "96x #gtceu:circuits/zpm", "96x gtceu:uv_electric_motor", "48x gtceu:uv_electric_piston", "48x #gtceu:circuits/uv", "12x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 82944", "gtceu:lubricant 32000", "gtceu:tritanium 76032", "gtceu:naquadria 27648")
        .itemOutputs("64x gtceu:uv_robot_arm")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_field_generator")
        .itemInputs("144x gtceu:double_tritanium_plate", "96x #gtceu:circuits/uv", "96x gtceu:uv_emitter", "48x gtceu:gravi_star", "48x gtceu:tritanium_frame", "12x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 82944", "gtceu:enriched_naquadah_trinium_europium_duranide 110592", "gtceu:naquadria 27648")
        .itemOutputs("64x gtceu:uv_field_generator")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/uv", "48x gtceu:uv_electric_motor", "48x gtceu:gravi_star", "48x gtceu:tritanium_frame", "12x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 55296", "gtceu:tritanium 27648", "gtceu:naquadria 193536")
        .itemOutputs("64x gtceu:uv_emitter")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uv_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/uv", "96x gtceu:double_tritanium_plate", "48x gtceu:uv_electric_motor", "48x gtceu:gravi_star", "48x gtceu:tritanium_frame", "12x gtceu:yttrium_barium_cuprate_hex_cable")
        .inputFluids("gtceu:soldering_alloy 55296", "gtceu:naquadria 193536")
        .itemOutputs("64x gtceu:uv_sensor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(720)
        .addData("CATier", 8)

    gtr.component_assembly_line("gtlcore:uhv_electric_motor")
        .circuit(1)
        .itemInputs("48x gtlcore:magnetic_long_netherite_rod", "6x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 24000", "gtceu:soldering_alloy 48000", "gtceu:lubricant 96000", "gtceu:abyssalalloy 110592", "gtceu:highurabilityompoundteel 27648", "gtceu:orichalcum 40704")
        .itemOutputs("64x gtceu:uhv_electric_motor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_orichalcum_plate", "48x gtceu:uhv_electric_motor", "6x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 27648", "gtceu:soldering_alloy 55296", "gtceu:lubricant 96000", "gtceu:styrene_butadiene_rubber 6912", "gtceu:orichalcum 33792", "gtceu:highurabilityompoundteel 27648", "gtceu:neutronium 6912")
        .itemOutputs("64x gtceu:uhv_electric_pump")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:uhv_electric_motor", "48x gtceu:double_orichalcum_plate", "6x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 27648", "gtceu:lubricant 96000", "gtceu:styrene_butadiene_rubber 221184", "gtceu:orichalcum 22272", "gtceu:highurabilityompoundteel 27648", "gtceu:fluxed_electrum 13824")
        .itemOutputs("64x gtceu:uhv_conveyor_module")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:uhv_electric_motor", "96x gtceu:double_orichalcum_plate", "6x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 27648", "gtceu:soldering_alloy 55296", "gtceu:lubricant 96000", "gtceu:orichalcum 74496", "gtceu:highurabilityompoundteel 27648")
        .itemOutputs("64x gtceu:uhv_electric_piston")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/zpm", "96x #gtceu:circuits/uv", "96x gtceu:uhv_electric_motor", "48x gtceu:uhv_electric_piston", "48x #gtceu:circuits/uhv", "12x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 27648", "gtceu:soldering_alloy 55296", "gtceu:lubricant 96000", "gtceu:orichalcum 76032", "gtceu:highurabilityompoundteel 27648")
        .itemOutputs("64x gtceu:uhv_robot_arm")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_field_generator")
        .itemInputs("144x gtceu:double_neutronium_plate", "96x #gtceu:circuits/uhv", "96x gtceu:uhv_emitter", "96x gtceu:gravi_star", "48x gtceu:neutronium_frame", "12x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:ruthenium_trinium_americium_neutronate 110592", "gtceu:highurabilityompoundteel 27648")
        .itemOutputs("64x gtceu:uhv_field_generator")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/uhv", "48x gtceu:uhv_electric_motor", "96x gtceu:gravi_star", "48x gtceu:neutronium_frame", "12x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:soldering_alloy 110592", "gtceu:orichalcum 27648", "gtceu:abyssalalloy 110492", "gtceu:fluxed_electrum 110592", "gtceu:highurabilityompoundteel 27648")
        .itemOutputs("64x gtceu:uhv_emitter")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uhv_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/uhv", "96x gtceu:double_orichalcum_plate", "48x gtceu:uhv_electric_motor", "96x gtceu:gravi_star", "48x gtceu:neutronium_frame", "12x gtceu:europium_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:soldering_alloy 11092", "gtceu:abyssalalloy 110492", "gtceu:fluxed_electrum 110592", "gtceu:highurabilityompoundteel 27648")
        .itemOutputs("64x gtceu:uhv_sensor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .addData("CATier", 9)

    gtr.component_assembly_line("gtlcore:uev_electric_motor")
        .circuit(1)
        .itemInputs("48x gtlcore:magnetic_long_netherite_rod", "6x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 48000", "gtceu:soldering_alloy 96000", "gtceu:lubricant 192000", "gtceu:titansteel 110592", "gtceu:bohrium 27648", "gtceu:hastelloyx_78 40704")
        .itemOutputs("64x gtceu:uev_electric_motor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_hastelloyx_78_plate", "48x gtceu:uev_electric_motor", "6x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:soldering_alloy 110592", "gtceu:lubricant 192000", "gtceu:styrene_butadiene_rubber 13824", "gtceu:hastelloyx_78 33792", "gtceu:bohrium 27648", "gtceu:neutronium 6912")
        .itemOutputs("64x gtceu:uev_electric_pump")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:uev_electric_motor", "48x gtceu:double_hastelloyx_78_plate", "6x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:lubricant 192000", "gtceu:styrene_butadiene_rubber 276480", "gtceu:hastelloyx_78 22272", "gtceu:bohrium 27648", "gtceu:dalisenite 13824")
        .itemOutputs("64x gtceu:uev_conveyor_module")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:uev_electric_motor", "96x gtceu:double_hastelloyx_78_plate", "6x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:soldering_alloy 110592", "gtceu:lubricant 192000", "gtceu:hastelloyx_78 74496", "gtceu:bohrium 27648")
        .itemOutputs("64x gtceu:uev_electric_piston")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/uv", "96x #gtceu:circuits/uhv", "96x gtceu:uev_electric_motor", "48x gtceu:uev_electric_piston", "48x #gtceu:circuits/uev", "12x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 55296", "gtceu:soldering_alloy 110592", "gtceu:lubricant 192000", "gtceu:hastelloyx_78 76032", "gtceu:bohrium 27648")
        .itemOutputs("64x gtceu:uev_robot_arm")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_field_generator")
        .itemInputs("144x gtceu:double_quantanium_plate", "96x #gtceu:circuits/uev", "96x gtceu:uev_emitter", "192x gtceu:gravi_star", "48x gtceu:quantanium_frame", "12x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 110592", "gtceu:soldering_alloy 221184", "gtceu:enderite 110592", "gtceu:bohrium 27648")
        .itemOutputs("64x gtceu:uev_field_generator")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/uev", "48x gtceu:uev_electric_motor", "192x gtceu:gravi_star", "48x gtceu:quantanium_frame", "12x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 110592", "gtceu:soldering_alloy 221184", "gtceu:hastelloyx_78 27648", "gtceu:titansteel 110492", "gtceu:dalisenite 110592", "gtceu:bohrium 27648")
        .itemOutputs("64x gtceu:uev_emitter")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uev_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/uev", "96x gtceu:double_hastelloyx_78_plate", "48x gtceu:uev_electric_motor", "192x gtceu:gravi_star", "48x gtceu:quantanium_frame", "12x gtceu:mithril_hex_cable")
        .inputFluids("gtceu:mutated_living_solder 110592", "gtceu:soldering_alloy 221184", "gtceu:titansteel 110592", "gtceu:dalisenite 110592", "gtceu:bohrium 27648")
        .itemOutputs("64x gtceu:uev_sensor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .addData("CATier", 10)

    gtr.component_assembly_line("gtlcore:uiv_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_attuned_tengam_rod", "6x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 96000", "gtceu:soldering_alloy 192000", "gtceu:lubricant 384000", "gtceu:adamantine 110592", "gtceu:taranium 27648", "gtceu:infuscolium 40704")
        .itemOutputs("64x gtceu:uiv_electric_motor")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_infuscolium_plate", "48x gtceu:uiv_electric_motor", "6x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 110592", "gtceu:soldering_alloy 221184", "gtceu:lubricant 384000", "gtceu:styrene_butadiene_rubber 27648", "gtceu:infuscolium 33792", "gtceu:taranium 27648", "gtceu:neutronium 6912")
        .itemOutputs("64x gtceu:uiv_electric_pump")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:uiv_electric_motor", "48x gtceu:double_infuscolium_plate", "6x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 110592", "gtceu:lubricant 384000", "gtceu:styrene_butadiene_rubber 387072", "gtceu:infuscolium 22272", "gtceu:taranium 27648", "gtceu:arceusalloy2b 13824")
        .itemOutputs("64x gtceu:uiv_conveyor_module")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:uiv_electric_motor", "96x gtceu:double_infuscolium_plate", "6x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 110592", "gtceu:soldering_alloy 221184", "gtceu:lubricant 384000", "gtceu:infuscolium 74496", "gtceu:taranium 27648")
        .itemOutputs("64x gtceu:uiv_electric_piston")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/uhv", "96x #gtceu:circuits/uev", "96x gtceu:uiv_electric_motor", "48x gtceu:uiv_electric_piston", "48x #gtceu:circuits/uiv", "12x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 110592", "gtceu:soldering_alloy 221184", "gtceu:lubricant 384000", "gtceu:infuscolium 76032", "gtceu:taranium 27648")
        .itemOutputs("64x gtceu:uiv_robot_arm")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_field_generator")
        .itemInputs("144x gtceu:double_adamantium_plate", "96x #gtceu:circuits/uiv", "96x gtceu:uiv_emitter", "48x gtlcore:unstable_star", "48x gtceu:adamantium_frame", "12x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:soldering_alloy 442368", "gtceu:echoite 110592", "gtceu:taranium 27648")
        .itemOutputs("64x gtceu:uiv_field_generator")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/uiv", "48x gtceu:uiv_electric_motor", "48x gtlcore:unstable_star", "48x gtceu:adamantium_frame", "12x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:soldering_alloy 442368", "gtceu:infuscolium 27648", "gtceu:adamantine 110492", "gtceu:arceusalloy2b 110592", "gtceu:taranium 27648")
        .itemOutputs("64x gtceu:uiv_emitter")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uiv_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/uiv", "96x gtceu:double_infuscolium_plate", "48x gtceu:uiv_electric_motor", "48x gtlcore:unstable_star", "48x gtceu:adamantium_frame", "12x gtceu:neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:soldering_alloy 442368", "gtceu:adamantine 110592", "gtceu:arceusalloy2b 110592", "gtceu:taranium 27648")
        .itemOutputs("64x gtceu:uiv_sensor")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .addData("CATier", 11)

    gtr.component_assembly_line("gtlcore:uxv_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_attuned_tengam_rod", "6x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 192000", "gtceu:soldering_alloy 384000", "gtceu:lubricant 768000", "gtceu:naquadriatictaranium 110592", "gtceu:astraltitanium 27648", "gtceu:hastelloyk_243 40704")
        .itemOutputs("64x gtceu:uxv_electric_motor")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_hastelloyk_243_plate", "48x gtceu:uxv_electric_motor", "6x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:soldering_alloy 442368", "gtceu:lubricant 768000", "gtceu:styrene_butadiene_rubber 55296", "gtceu:hastelloyk_243 33792", "gtceu:astraltitanium 27648", "gtceu:neutronium 6912")
        .itemOutputs("64x gtceu:uxv_electric_pump")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:uxv_electric_motor", "48x gtceu:double_hastelloyk_243_plate", "6x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:lubricant 768000", "gtceu:styrene_butadiene_rubber 608256", "gtceu:hastelloyk_243 22272", "gtceu:astraltitanium 27648", "gtceu:titan_precision_steel 13824")
        .itemOutputs("64x gtceu:uxv_conveyor_module")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:uxv_electric_motor", "96x gtceu:double_hastelloyk_243_plate", "6x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:soldering_alloy 442368", "gtceu:lubricant 768000", "gtceu:hastelloyk_243 74496", "gtceu:astraltitanium 27648")
        .itemOutputs("64x gtceu:uxv_electric_piston")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/uev", "96x #gtceu:circuits/uiv", "96x gtceu:uxv_electric_motor", "48x gtceu:uxv_electric_piston", "48x #gtceu:circuits/uxv", "12x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 221184", "gtceu:soldering_alloy 442368", "gtceu:lubricant 768000", "gtceu:hastelloyk_243 76032", "gtceu:astraltitanium 27648")
        .itemOutputs("64x gtceu:uxv_robot_arm")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_field_generator")
        .itemInputs("144x gtceu:double_vibranium_plate", "96x #gtceu:circuits/uxv", "96x gtceu:uxv_emitter", "96x gtlcore:unstable_star", "48x gtceu:vibranium_frame", "12x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:soldering_alloy 884736", "gtceu:legendarium 110592", "gtceu:astraltitanium 27648")
        .itemOutputs("64x gtceu:uxv_field_generator")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/uxv", "48x gtceu:uxv_electric_motor", "96x gtlcore:unstable_star", "48x gtceu:vibranium_frame", "12x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:soldering_alloy 884736", "gtceu:hastelloyk_243 27648", "gtceu:naquadriatictaranium 110492", "gtceu:titan_precision_steel 110592", "gtceu:astraltitanium 27648")
        .itemOutputs("64x gtceu:uxv_emitter")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:uxv_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/uxv", "96x gtceu:double_hastelloyk_243_plate", "48x gtceu:uxv_electric_motor", "96x gtlcore:unstable_star", "48x gtceu:vibranium_frame", "12x gtceu:taranium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:soldering_alloy 884736", "gtceu:naquadriatictaranium 110592", "gtceu:titan_precision_steel 110592", "gtceu:astraltitanium 27648")
        .itemOutputs("64x gtceu:uxv_sensor")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1200)
        .addData("CATier", 12)

    gtr.component_assembly_line("gtlcore:opv_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_attuned_tengam_rod", "6x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 384000", "gtceu:soldering_alloy 768000", "gtceu:lubricant 1536000", "gtceu:starmetal 110592", "gtceu:celestialtungsten 27648", "gtceu:vibramantium 40704")
        .itemOutputs("64x gtceu:opv_electric_motor")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_electric_pump")
        .circuit(3)
        .itemInputs("48x gtceu:double_vibramantium_plate", "48x gtceu:opv_electric_motor", "6x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:soldering_alloy 884736", "gtceu:lubricant 1536000", "gtceu:styrene_butadiene_rubber 110592", "gtceu:vibramantium 33792", "gtceu:celestialtungsten 27648", "gtceu:neutronium 6912")
        .itemOutputs("64x gtceu:opv_electric_pump")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtceu:opv_electric_motor", "48x gtceu:double_vibramantium_plate", "6x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:lubricant 1536000", "gtceu:styrene_butadiene_rubber 1050624", "gtceu:vibramantium 22272", "gtceu:celestialtungsten 27648", "gtceu:hikarium 13824")
        .itemOutputs("64x gtceu:opv_conveyor_module")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_electric_piston")
        .circuit(2)
        .itemInputs("48x gtceu:opv_electric_motor", "96x gtceu:double_vibramantium_plate", "6x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:soldering_alloy 884736", "gtceu:lubricant 1536000", "gtceu:vibramantium 74496", "gtceu:celestialtungsten 27648")
        .itemOutputs("64x gtceu:opv_electric_piston")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/uiv", "96x #gtceu:circuits/uxv", "96x gtceu:opv_electric_motor", "48x gtceu:opv_electric_piston", "48x #gtceu:circuits/opv", "12x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 442368", "gtceu:soldering_alloy 884736", "gtceu:lubricant 1536000", "gtceu:vibramantium 76032", "gtceu:celestialtungsten 27648")
        .itemOutputs("64x gtceu:opv_robot_arm")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_field_generator")
        .itemInputs("144x gtceu:double_draconium_plate", "96x #gtceu:circuits/opv", "96x gtceu:opv_emitter", "192x gtlcore:unstable_star", "48x gtceu:draconium_frame", "12x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:draconiumawakened 110592", "gtceu:celestialtungsten 27648")
        .itemOutputs("64x gtceu:opv_field_generator")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/opv", "48x gtceu:opv_electric_motor", "192x gtlcore:unstable_star", "48x gtceu:draconium_frame", "12x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:vibramantium 27648", "gtceu:starmetal 110492", "gtceu:hikarium 110592", "gtceu:celestialtungsten 27648")
        .itemOutputs("64x gtceu:opv_emitter")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:opv_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/opv", "96x gtceu:double_vibramantium_plate", "48x gtceu:opv_electric_motor", "192x gtlcore:unstable_star", "48x gtceu:draconium_frame", "12x gtceu:crystalmatrix_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:starmetal 110592", "gtceu:hikarium 110592", "gtceu:celestialtungsten 27648")
        .itemOutputs("64x gtceu:opv_sensor")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(1200)
        .addData("CATier", 13)

    gtr.component_assembly_line("gtlcore:max_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_magmatter_rod", "48x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 768000", "gtceu:soldering_alloy 1536000", "gtceu:lubricant 3072000", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:infinity 27648", "gtceu:transcendentmetal 81408")
        .itemOutputs("64x gtlcore:max_electric_motor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_electric_pump")
        .circuit(3)
        .itemInputs("96x gtceu:double_transcendentmetal_plate", "48x gtlcore:max_electric_motor", "48x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:lubricant 3072000", "gtceu:styrene_butadiene_rubber 110592", "gtceu:transcendentmetal 33792", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:infinity 41472", "gtceu:neutronium 442368")
        .itemOutputs("64x gtlcore:max_electric_pump")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtlcore:max_electric_motor", "96x gtceu:double_transcendentmetal_plate", "48x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:lubricant 3072000", "gtceu:styrene_butadiene_rubber 1050624", "gtceu:transcendentmetal 44544", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtlcore:max_conveyor_module")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_electric_piston")
        .circuit(2)
        .itemInputs("48x gtlcore:max_electric_motor", "192x gtceu:double_transcendentmetal_plate", "48x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:lubricant 3072000", "gtceu:transcendentmetal 148992", "gtceu:infinity 27648")
        .itemOutputs("64x gtlcore:max_electric_piston")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/uxv", "96x #gtceu:circuits/opv", "192x gtlcore:max_electric_motor", "48x gtlcore:max_electric_piston", "48x #gtceu:circuits/amx", "96x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:lubricant 3072000", "gtceu:transcendentmetal 152064", "gtceu:infinity 27648")
        .itemOutputs("64x gtlcore:max_robot_arm")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_field_generator")
        .itemInputs("288x gtceu:double_chaos_plate", "96x #gtceu:circuits/max", "96x gtlcore:max_emitter", "192x gtlcore:nuclear_star", "48x gtceu:infinity_frame", "3072x gtceu:fine_cosmic_wire", "96x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 1769472", "gtceu:soldering_alloy 3538944", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:shirabon 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtlcore:max_field_generator")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/max", "48x gtlcore:max_electric_motor", "192x gtlcore:nuclear_star", "48x gtceu:infinity_frame", "3072x gtceu:cosmic_foil", "96x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 1769472", "gtceu:soldering_alloy 3538944", "gtceu:transcendentmetal 55296", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:shirabon 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtlcore:max_emitter")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    gtr.component_assembly_line("gtlcore:max_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/max", "192x gtceu:transcendentmetal_plate", "48x gtlcore:max_electric_motor", "192x gtlcore:nuclear_star", "48x gtceu:infinity_frame", "96x gtceu:cosmicneutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 1769472", "gtceu:soldering_alloy 3538944", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:shirabon 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtlcore:max_sensor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .addData("CATier", 14)

    //Isa Milled
    const isa_mill_ores = [
        ["gtceu:milled_almandine", "gtceu:raw_almandine", "#forge:ores/almandine"],
        ["gtceu:milled_chalcopyrite", "gtceu:raw_chalcopyrite", "#forge:ores/chalcopyrite"],
        ["gtceu:milled_grossular", "gtceu:raw_grossular", "#forge:ores/grossular"],
        ["gtceu:milled_monazite", "gtceu:raw_monazite", "#forge:ores/monazite"],
        ["gtceu:milled_nickel", "gtceu:raw_nickel", "#forge:ores/nickel"],
        ["gtceu:milled_pentlandite", "gtceu:raw_pentlandite", "#forge:ores/pentlandite"],
        ["gtceu:milled_platinum", "gtceu:raw_platinum", "#forge:ores/platinum"],
        ["gtceu:milled_pyrope", "gtceu:raw_pyrope", "#forge:ores/pyrope"],
        ["gtceu:milled_redstone", "gtceu:raw_redstone", "#forge:ores/redstone"],
        ["gtceu:milled_spessartine", "gtceu:raw_spessartine", "#forge:ores/spessartine"],
        ["gtceu:milled_sphalerite", "gtceu:raw_sphalerite", "#forge:ores/sphalerite"],
        ["gtceu:milled_enriched_naquadah", "gtceu:raw_enriched_naquadah", "#forge:ores/enriched_naquadah"]]
    isa_mill_ores.forEach((isa_mill_ore) => {
        gtr.isa_mill(isa_mill_ore[0] + "_rgs")
            .circuit(1)
            .itemInputs("16x " + isa_mill_ore[1])
            .inputFluids("gtceu:distilled_water 50")
            .itemOutputs("48x " + isa_mill_ore[0])
            .EUt(GTValues.VA[GTValues.EV])
            .duration(2400)
            .addData("grindball", 1)

        gtr.isa_mill(isa_mill_ore[0] + "_ral")
            .circuit(10)
            .itemInputs("16x " + isa_mill_ore[1])
            .inputFluids("gtceu:distilled_water 50")
            .itemOutputs("36x " + isa_mill_ore[0])
            .EUt(GTValues.VA[GTValues.EV])
            .duration(1200)
            .addData("grindball", 2)

        gtr.isa_mill(isa_mill_ore[0] + "_bgs")
            .circuit(1)
            .itemInputs("16x " + isa_mill_ore[2])
            .inputFluids("gtceu:distilled_water 100")
            .itemOutputs("96x " + isa_mill_ore[0])
            .EUt(GTValues.VA[GTValues.EV])
            .duration(4800)
            .addData("grindball", 1)

        gtr.isa_mill(isa_mill_ore[0] + "_bal")
            .circuit(10)
            .itemInputs("16x " + isa_mill_ore[2])
            .inputFluids("gtceu:distilled_water 100")
            .itemOutputs("72x " + isa_mill_ore[0])
            .EUt(GTValues.VA[GTValues.EV])
            .duration(2400)
            .addData("grindball", 2)
    })

    gtr.flotating_beneficiation("gtlcore:almandine_front")
        .itemInputs("32x gtceu:sodium_ethylxanthate_dust", "64x gtceu:milled_almandine")
        .inputFluids("gtceu:turpentine 18000")
        .outputFluids("gtceu:almandine_front 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:chalcopyrite_front")
        .itemInputs("32x gtceu:potassium_ethylxanthate_dust", "64x gtceu:milled_chalcopyrite")
        .inputFluids("gtceu:turpentine 12000")
        .outputFluids("gtceu:chalcopyrite_front 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:grossular_front")
        .itemInputs("32x gtceu:potassium_ethylxanthate_dust", "64x gtceu:milled_grossular")
        .inputFluids("gtceu:turpentine 28000")
        .outputFluids("gtceu:grossular_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:monazite_front")
        .itemInputs("32x gtceu:sodium_ethylxanthate_dust", "64x gtceu:milled_monazite")
        .inputFluids("gtceu:turpentine 30000")
        .outputFluids("gtceu:monazite_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:nickel_front")
        .itemInputs("32x gtceu:potassium_ethylxanthate_dust", "64x gtceu:milled_nickel")
        .inputFluids("gtceu:turpentine 25000")
        .outputFluids("gtceu:nickel_front 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:platinum_front")
        .itemInputs("32x gtceu:sodium_ethylxanthate_dust", "64x gtceu:milled_platinum")
        .inputFluids("gtceu:turpentine 35000")
        .outputFluids("gtceu:platinum_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:pyrope_front")
        .itemInputs("32x gtceu:sodium_ethylxanthate_dust", "64x gtceu:milled_pyrope")
        .inputFluids("gtceu:turpentine 8000")
        .outputFluids("gtceu:pyrope_front 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:redstone_front")
        .itemInputs("32x gtceu:sodium_ethylxanthate_dust", "64x gtceu:milled_redstone")
        .inputFluids("gtceu:turpentine 13000")
        .outputFluids("gtceu:redstone_front 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:spessartine_front")
        .itemInputs("32x gtceu:potassium_ethylxanthate_dust", "64x gtceu:milled_spessartine")
        .inputFluids("gtceu:turpentine 35000")
        .outputFluids("gtceu:spessartine_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:sphalerite_front")
        .itemInputs("32x gtceu:sodium_ethylxanthate_dust", "64x gtceu:milled_sphalerite")
        .inputFluids("gtceu:turpentine 14000")
        .outputFluids("gtceu:sphalerite_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:pentlandite_front")
        .itemInputs("32x gtceu:potassium_ethylxanthate_dust", "64x gtceu:milled_pentlandite")
        .inputFluids("gtceu:turpentine 14000")
        .outputFluids("gtceu:pentlandite_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(4800)

    gtr.flotating_beneficiation("gtlcore:enriched_naquadah_front")
        .itemInputs("64x gtceu:potassium_ethylxanthate_dust", "64x gtceu:milled_enriched_naquadah")
        .inputFluids("gtceu:turpentine 140000")
        .outputFluids("gtceu:enriched_naquadah_front 1000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(9600)

    gtr.chemical_reactor("gtlcore:sodium_ethylxanthate_dust")
        .itemInputs("9x gtceu:sodium_ethylate_dust")
        .inputFluids("gtceu:ethanol 1000", "gtceu:carbon_disulfide 1000")
        .itemOutputs("12x gtceu:sodium_ethylxanthate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(40)

    gtr.chemical_reactor("gtlcore:potassium_ethylxanthate_dust")
        .itemInputs("3x gtceu:potassium_ethylate_dust")
        .inputFluids("gtceu:carbon_disulfide 1000")
        .itemOutputs("12x gtceu:potassium_ethylxanthate_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(40)

    gtr.large_chemical_reactor("gtlcore:potassium_ethylate_dust")
        .circuit(2)
        .itemInputs("3x gtceu:potash_dust", "5x gtceu:quicklime_dust")
        .inputFluids("gtceu:carbon_dioxide 1000", "minecraft:water 5000")
        .itemOutputs("6x gtceu:potassium_ethylate_dust", "5x gtceu:high_purity_calcium_carbonate_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    gtr.mixer("gtlcore:sodium_ethylate_dust")
        .itemInputs("1x gtceu:sodium_dust")
        .inputFluids("gtceu:ethanol 1000")
        .itemOutputs("9x gtceu:sodium_ethylate_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)

    gtr.alloy_blast_smelter("gtlcore:carbon_disulfide")
        .circuit(8)
        .itemInputs("1x gtceu:carbon_dust", "2x gtceu:sulfur_dust")
        .outputFluids("gtceu:carbon_disulfide 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(350)
        .blastFurnaceTemp(1200)

    gtr.vacuum_drying("gtlcore:almandine_front_pro")
        .circuit(1)
        .inputFluids("gtceu:almandine_front 4000")
        .itemOutputs("64x gtceu:aluminium_dust", "64x gtceu:aluminium_dust", "64x gtceu:manganese_dust", "24x gtceu:manganese_dust", "24x gtceu:yttrium_dust", "16x gtceu:ytterbium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:chalcopyrite_front_pro")
        .circuit(2)
        .inputFluids("gtceu:chalcopyrite_front 4000")
        .itemOutputs("64x gtceu:copper_dust", "64x gtceu:copper_dust", "64x gtceu:iron_dust", "48x gtceu:iron_dust", "48x gtceu:cadmium_dust", "32x gtceu:indium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400)
        .blastFurnaceTemp(4500)

    gtr.vacuum_drying("gtlcore:grossular_front_pro")
        .circuit(3)
        .inputFluids("gtceu:grossular_front 4000")
        .itemOutputs("64x gtceu:calcium_dust", "64x gtceu:calcium_dust", "64x gtceu:aluminium_dust", "64x gtceu:aluminium_dust", "64x gtceu:tungsten_dust", "16x gtceu:thallium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:monazite_front_pro")
        .circuit(4)
        .inputFluids("gtceu:monazite_front 4000")
        .itemOutputs("64x gtceu:erbium_dust", "64x gtceu:neodymium_dust", "48x gtceu:thorium_dust", "32x gtceu:lanthanum_dust", "16x gtceu:lutetium_dust", "8x gtceu:europium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:nickel_front_pro")
        .circuit(5)
        .inputFluids("gtceu:nickel_front 4000")
        .itemOutputs("64x gtceu:nickel_dust", "64x gtceu:nickel_dust", "64x gtceu:cobalt_dust", "64x gtceu:cobalt_dust", "32x gtceu:iron_dust", "32x gtceu:rhodium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400)
        .blastFurnaceTemp(4500)

    gtr.vacuum_drying("gtlcore:platinum_front_pro")
        .circuit(6)
        .inputFluids("gtceu:platinum_front 4000")
        .itemOutputs("64x gtceu:platinum_dust", "48x gtceu:nickel_dust", "32x gtceu:iridium_dust", "32x gtceu:osmium_dust", "32x gtceu:palladium_dust", "32x gtceu:cobalt_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:pyrope_front_pro")
        .circuit(7)
        .inputFluids("gtceu:pyrope_front 4000")
        .itemOutputs("64x gtceu:magnesium_dust", "64x gtceu:magnesium_dust", "64x gtceu:aluminium_dust", "64x gtceu:manganese_dust", "64x gtceu:boron_dust", "48x gtceu:silicon_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2400)
        .blastFurnaceTemp(3500)

    gtr.vacuum_drying("gtlcore:redstone_front_pro")
        .circuit(8)
        .inputFluids("gtceu:redstone_front 4000")
        .itemOutputs("64x minecraft:redstone", "64x minecraft:redstone", "64x gtceu:manganese_dust", "64x gtceu:manganese_dust", "32x gtceu:yttrium_dust", "16x gtceu:ytterbium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400)
        .blastFurnaceTemp(4500)

    gtr.vacuum_drying("gtlcore:spessartine_front_pro")
        .circuit(9)
        .inputFluids("gtceu:spessartine_front 4000")
        .itemOutputs("64x gtceu:manganese_dust", "64x gtceu:manganese_dust", "64x gtceu:aluminium_dust", "32x gtceu:aluminium_dust", "32x gtceu:palladium_dust", "16x gtceu:strontium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:sphalerite_front_pro")
        .circuit(10)
        .inputFluids("gtceu:sphalerite_front 4000")
        .itemOutputs("64x gtceu:zinc_dust", "64x gtceu:zinc_dust", "64x gtceu:iron_dust", "32x gtceu:iron_dust", "64x gtceu:indium_dust", "64x gtceu:gallium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:pentlandite_front_pro")
        .circuit(11)
        .inputFluids("gtceu:pentlandite_front 4000")
        .itemOutputs("64x gtceu:iron_dust", "64x gtceu:iron_dust", "64x gtceu:nickel_dust", "64x gtceu:nickel_dust", "64x gtceu:bismuth_dust", "48x gtceu:ruthenium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .blastFurnaceTemp(5500)

    gtr.vacuum_drying("gtlcore:enriched_naquadah_front_pro")
        .circuit(12)
        .inputFluids("gtceu:enriched_naquadah_front 4000")
        .itemOutputs("64x gtceu:enriched_naquadah_dust", "64x gtceu:enriched_naquadah_dust", "64x gtceu:naquadah_dust", "32x gtceu:naquadah_dust", "64x gtceu:naquadria_dust", "32x gtceu:trinium_dust")
        .outputFluids("gtceu:red_mud 200", "minecraft:water 2000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2400)
        .blastFurnaceTemp(9500)

    gtr.assembly_line("gtlcore:isa_mill")
        .itemInputs("gtceu:luv_machine_hull",
            "2x gtlcore:inconel_625_gearbox",
            "8x gtceu:double_inconel_625_plate",
            "8x #gtceu:circuits/luv",
            "4x gtceu:luv_conveyor_module",
            "4x gtceu:inconel_792_gear",
            "16x gtceu:small_inconel_625_gear",
            "32x gtceu:tantalloy_61_screw",
            "8x gtceu:titanium_plate",
            "4x gtceu:niobium_titanium_quadruple_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 6000", "gtceu:zeron_100 1152")
        .itemOutputs("gtlcore:isa_mill")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:iv_macerator"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.IV])
            .CWUt(96))

    gtr.assembly_line("gtlcore:flotation_cell_regulator")
        .itemInputs("gtceu:luv_machine_hull",
            "2x gtlcore:flotation_cell",
            "8x gtceu:double_hastelloy_n_75_plate",
            "8x gtceu:double_incoloy_ma_956_plate",
            "8x #gtceu:circuits/luv",
            "2x gtceu:luv_electric_pump",
            "4x gtceu:stellite_gear",
            "16x gtceu:small_hastelloy_n_75_gear",
            "32x gtceu:tungsten_steel_foil",
            "4x gtceu:vanadium_gallium_quadruple_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 6000", "gtceu:watertight_steel 1152")
        .itemOutputs("gtlcore:flotation_cell_regulator")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:iv_ore_washer"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.IV])
            .CWUt(96))

    gtr.assembler("gtlcore:inconel_625_casing")
        .itemInputs("2x gtceu:ev_machine_hull", "4x gtceu:double_inconel_625_plate", "8x gtceu:double_hsse_plate", "16x gtceu:inconel_625_bolt")
        .inputFluids("gtceu:titanium 1152")
        .itemOutputs("2x gtlcore:inconel_625_casing")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtlcore:inconel_625_pipe")
        .itemInputs("2x gtceu:hsss_frame", "4x gtceu:double_inconel_625_plate", "8x gtceu:double_hsse_plate", "16x gtceu:inconel_625_bolt")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("2x gtlcore:inconel_625_pipe")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtlcore:inconel_625_gearbox")
        .itemInputs("gtceu:hsse_frame", "3x gtceu:inconel_625_gear", "6x gtceu:small_hsss_gear", "16x gtceu:hssg_bolt", "2x gtceu:tungsten_grinding_head")
        .inputFluids("gtceu:zeron_100 576")
        .itemOutputs("2x gtlcore:inconel_625_gearbox")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembler("gtlcore:hastelloy_n_75_casing")
        .itemInputs("2x gtceu:ev_machine_hull", "4x gtceu:double_nichrome_plate", "4x gtceu:double_watertight_steel_plate", "2x gtceu:long_hssg_rod", "16x gtceu:hastelloy_n_75_bolt")
        .inputFluids("gtceu:stainless_steel 1152")
        .itemOutputs("2x gtlcore:hastelloy_n_75_casing")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(500)

    gtr.assembler("gtlcore:hastelloy_n_75_gearbox")
        .itemInputs("gtceu:hssg_frame", "4x gtceu:double_hssg_plate", "3x gtceu:hastelloy_n_75_gear", "6x gtceu:hastelloy_n_75_gear", "16x gtceu:tungsten_carbide_bolt")
        .inputFluids("gtceu:hastelloy_x 576")
        .itemOutputs("2x gtlcore:hastelloy_n_75_gearbox")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(280)

    gtr.assembler("gtlcore:hastelloy_n_75_pipe")
        .itemInputs("gtceu:watertight_steel_frame", "6x gtceu:double_hastelloy_n_75_plate", "4x gtceu:tungsten_steel_small_fluid_pipe")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("2x gtlcore:hastelloy_n_75_pipe")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtlcore:flotation_cell")
        .itemInputs("7x gtceu:hastelloy_n_75_plate", "gtceu:assembly_line_grating", "gtceu:iv_electric_pump")
        .itemOutputs("gtlcore:flotation_cell")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    gtr.assembler("gtlcore:red_steel_casing")
        .circuit(6)
        .itemInputs("gtceu:hsla_steel_frame", "2x gtceu:titanium_carbide_plate", "4x gtceu:double_red_steel_plate")
        .itemOutputs("2x gtlcore:red_steel_casing")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)

    gtr.assembler("gtlcore:vacuum_drying_furnace")
        .itemInputs("gtceu:hsse_frame", "4x gtlcore:iv_dehydrator", "2x gtceu:double_titanium_tungsten_carbide_plate", "4x #gtceu:circuits/iv", "2x gtceu:iv_electric_piston", "3x gtceu:iridium_gear", "6x gtceu:small_titanium_gear", "24x gtceu:tantalloy_61_screw")
        .inputFluids("gtceu:platinum 1152")
        .itemOutputs("gtlcore:vacuum_drying_furnace")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)

    gtr.forming_press("gtlcore:grindball_soapstone")
        .notConsumable("gtceu:ball_casting_mold")
        .itemInputs("16x gtceu:soapstone_dust", "2x gtceu:soldering_alloy_ingot")
        .itemOutputs("kubejs:grindball_soapstone")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    gtr.forming_press("gtlcore:grindball_aluminium")
        .notConsumable("gtceu:ball_casting_mold")
        .itemInputs("16x gtceu:aluminium_dust", "2x gtceu:soldering_alloy_ingot")
        .itemOutputs("kubejs:grindball_aluminium")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    gtr.distillation_tower("gtlcore:turpentine")
        .inputFluids("gtceu:steam_cracked_turpentine 1000")
        .outputFluids("gtceu:turpentine 1000", "gtceu:naphtha 900")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)

    gtr.cracker("gtlcore:steam_cracked_turpentine")
        .circuit(1)
        .inputFluids("gtceu:leached_turpentine 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:steam_cracked_turpentine 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    gtr.chemical_bath("gtlcore:leached_turpentine")
        .itemInputs("#minecraft:logs")
        .inputFluids("gtceu:naphtha 1000")
        .outputFluids("gtceu:leached_turpentine 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(80)

    gtr.chemical_reactor("gtlcore:potash_dust")
        .circuit(1)
        .itemInputs("2x gtceu:potassium_dust")
        .inputFluids("gtceu:oxygen 1000")
        .itemOutputs("3x gtceu:potash_dust")
        .EUt(7)
        .duration(120)

    gtr.forge_hammer("gtlcore:special_ceramics_dust")
        .itemInputs("minecraft:brown_glazed_terracotta")
        .itemOutputs("gtceu:special_ceramics_dust")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)

    gtr.extruder("gtlcore:special_ceramics")
        .itemInputs("2x gtceu:special_ceramics_dust")
        .notConsumable("gtceu:plate_extruder_mold")
        .itemOutputs("gtlcore:special_ceramics")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20)

    gtr.circuit_assembler("gtlcore:hui_circuit_1")
        .itemInputs("gtceu:fiber_reinforced_printed_circuit_board", "16x gtceu:yellow_garnet_plate", "8x gtceu:soc", "32x gtceu:nor_memory_chip", "8x gtceu:aluminium_single_wire", "gtceu:aluminium_rotor")
        .itemOutputs("gtlcore:hui_circuit_1")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_2")
        .itemInputs("gtlcore:hui_circuit_1", "8x gtceu:blue_topaz_plate", "16x gtceu:nand_memory_chip", "8x gtceu:platinum_single_wire")
        .inputFluids("gtceu:polyethylene 288", "gtceu:vanadium 288", "gtceu:bronze 144", "gtceu:annealed_copper 144")
        .itemOutputs("gtlcore:hui_circuit_2")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_3")
        .itemInputs("gtlcore:hui_circuit_2", "8x gtceu:sodalite_plate", "gtceu:raw_crystal_chip", "8x gtceu:niobium_titanium_single_wire")
        .inputFluids("gtceu:polyvinyl_chloride 288", "gtceu:yttrium 288", "gtceu:black_steel 144", "gtceu:eglin_steel 144")
        .itemOutputs("gtlcore:hui_circuit_3")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_4")
        .itemInputs("gtlcore:hui_circuit_3", "8x gtceu:red_garnet_plate", "16x gtceu:qbit_cpu_chip", "8x gtceu:vanadium_gallium_single_wire")
        .inputFluids("gtceu:polytetrafluoroethylene 288", "gtceu:lutetium 288", "gtceu:tantalloy_61 144", "gtceu:hastelloy_n 144")
        .itemOutputs("gtlcore:hui_circuit_4")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:hui_circuit_5")
        .itemInputs("gtlcore:hui_circuit_4", "8x gtceu:opal_plate", "gtceu:neuro_processing_unit", "8x gtceu:yttrium_barium_cuprate_single_wire")
        .inputFluids("gtceu:polybenzimidazole 288", "gtceu:cerium 288", "gtceu:indalloy_140 144", "gtceu:lafium 144")
        .itemOutputs("gtlcore:hui_circuit_5")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:improved_superconductor_coil")
        .itemInputs("gtceu:superconducting_coil", "2x gtlcore:special_ceramics", "gtlcore:hui_circuit_1")
        .inputFluids("gtceu:mar_m_200_steel 1152", "gtceu:europium 144")
        .itemOutputs("gtlcore:improved_superconductor_coil")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:compressed_fusion_coil")
        .itemInputs("gtceu:fusion_coil", "gtlcore:inverter", "gtlcore:hui_circuit_2")
        .inputFluids("gtceu:tanmolyium 1152", "gtceu:americium 144")
        .itemOutputs("gtlcore:compressed_fusion_coil")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:advanced_compressed_fusion_coil")
        .itemInputs("gtlcore:compressed_fusion_coil", "gtceu:quantum_star", "gtlcore:hui_circuit_3")
        .inputFluids("gtceu:artherium_sn 1152", "gtceu:mithril 144")
        .itemOutputs("gtlcore:advanced_compressed_fusion_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:compressed_fusion_coil_mk2_prototype")
        .itemInputs("gtlcore:advanced_fusion_coil", "gtceu:gravi_star", "gtlcore:hui_circuit_4")
        .inputFluids("gtceu:dalisenite 1152", "gtceu:bohrium 144")
        .itemOutputs("gtlcore:compressed_fusion_coil_mk2_prototype")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:compressed_fusion_coil_mk2")
        .itemInputs("gtlcore:fusion_coil_mk2", "gtlcore:unstable_star", "gtlcore:hui_circuit_5")
        .inputFluids("gtceu:cinobite 1152", "gtceu:vibranium 144")
        .itemOutputs("gtlcore:compressed_fusion_coil_mk2")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:luv_compressed_fusion_reactor")
        .itemInputs("gtceu:luv_fusion_reactor", "gtlcore:improved_superconductor_coil", "16x gtlcore:hui_circuit_1", "16x gtceu:double_osmiridium_plate")
        .inputFluids("gtceu:niobium_titanium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:luv_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:zpm_compressed_fusion_reactor")
        .itemInputs("gtceu:zpm_fusion_reactor", "gtlcore:compressed_fusion_coil", "16x gtlcore:hui_circuit_2", "16x gtceu:double_europium_plate")
        .inputFluids("gtceu:vanadium_gallium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:zpm_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:uv_compressed_fusion_reactor")
        .itemInputs("gtceu:uv_fusion_reactor", "gtlcore:advanced_compressed_fusion_coil", "16x gtlcore:hui_circuit_3", "16x gtceu:double_americium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:uv_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:uhv_compressed_fusion_reactor")
        .itemInputs("gtlcore:uhv_fusion_reactor", "gtlcore:compressed_fusion_coil_mk2_prototype", "16x gtlcore:hui_circuit_4", "16x gtceu:double_orichalcum_plate")
        .inputFluids("gtceu:europium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:uhv_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtlcore:uev_compressed_fusion_reactor")
        .itemInputs("gtlcore:uev_fusion_reactor", "gtlcore:compressed_fusion_coil_mk2", "16x gtlcore:hui_circuit_5", "16x gtceu:double_seaborgium_plate")
        .inputFluids("gtceu:mithril 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtlcore:uev_compressed_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:advanced_fusion_coil")
        .itemInputs("gtlcore:improved_superconductor_coil", "2x gtceu:luv_field_generator", "gtceu:iv_electric_pump", "4x gtceu:neutron_reflector", "gtlcore:hui_circuit_2", "4x #gtceu:circuits/luv", "gtceu:naquadah_normal_fluid_pipe", "4x gtceu:duranium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 576")
        .itemOutputs("gtlcore:advanced_fusion_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fusion_coil_mk2")
        .itemInputs("gtlcore:compressed_fusion_coil_mk2_prototype", "2x gtceu:zpm_field_generator", "gtceu:luv_electric_pump", "4x gtceu:neutron_reflector", "gtlcore:hui_circuit_3", "4x #gtceu:circuits/zpm", "gtceu:naquadah_large_fluid_pipe", "4x gtceu:dubnium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 576")
        .itemOutputs("gtlcore:fusion_coil_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fusion_casing_mk4")
        .itemInputs("gtceu:uhv_machine_casing", "gtlcore:advanced_fusion_coil", "2x gtlcore:uhv_voltage_coil", "2x gtlcore:hui_circuit_4", "gtceu:uv_field_generator", "6x gtceu:orichalcum_plate")
        .inputFluids("gtceu:polybenzimidazole 1152")
        .itemOutputs("2x gtlcore:fusion_casing_mk4")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtlcore:fusion_casing_mk5")
        .itemInputs("gtceu:uev_machine_casing", "gtlcore:fusion_coil_mk2", "2x gtlcore:uev_voltage_coil", "2x gtlcore:hui_circuit_5", "gtceu:uhv_field_generator", "6x gtceu:seaborgium_plate")
        .inputFluids("gtceu:polybenzimidazole 2304")
        .itemOutputs("2x gtlcore:fusion_casing_mk5")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembly_line("gtlcore:uhv_fusion_reactor")
        .itemInputs("gtlcore:advanced_fusion_coil", "4x #gtceu:circuits/uev", "gtceu:gravi_star", "gtceu:double_orichalcum_plate", "2x gtceu:uv_field_generator", "64x gtlcore:nm_chip", "32x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:europium 1152")
        .itemOutputs("gtlcore:uhv_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:uv_fusion_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(240))

    gtr.assembly_line("gtlcore:uev_fusion_reactor")
        .itemInputs("gtlcore:fusion_coil_mk2", "4x #gtceu:circuits/uiv", "gtlcore:unstable_star", "gtceu:double_seaborgium_plate", "2x gtceu:uhv_field_generator", "64x gtlcore:nm_chip", "64x gtlcore:nm_chip", "32x gtceu:enderite_single_wire")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:mithril 1152")
        .itemOutputs("gtlcore:uev_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:uhv_fusion_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(600))

    gtr.assembly_line("gtlcore:mega_distillery")
        .itemInputs("16x gtceu:distillation_tower", "16x gtceu:evaporation_plant", "8x gtceu:tungsten_steel_huge_fluid_pipe", "16x gtceu:uhv_electric_pump", "4x gtceu:uev_sensor", "4x #gtceu:circuits/uiv", "32x gtceu:annealed_copper_hex_wire", "32x gtceu:watertight_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:indalloy_140 1152", "gtceu:stainless_steel 2304", "gtceu:polyvinyl_chloride 2880")
        .itemOutputs("gtlcore:mega_distillery")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_distillery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(600))

    gtr.assembly_line("gtlcore:nano_core")
        .itemInputs("16x gtceu:opv_buffer", "16x gtceu:cosmicneutronium_nanoswarm", "16x gtlcore:suprachronal_assembly_line", "8x gtlcore:component_assembly_line_casing_opv", "32x #gtceu:circuits/opv", "16x gtceu:cosmicneutronium_plate")
        .inputFluids("gtceu:super_mutated_living_solder 4608", "gtceu:indalloy_140 4608", "gtceu:naquadria 4608", "gtceu:hastelloyk_243 4608")
        .itemOutputs("gtlcore:nano_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtlcore:nano_forge_3"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1200))

    gtr.compressor("gtlcore:graphite_ingot")
        .itemInputs("gtceu:graphite_dust")
        .itemOutputs("gtceu:graphite_ingot")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)

    gtr.laser_engraver("gtlcore:singularity")
        .itemInputs("16x gtceu:magmatter_block")
        .itemInputs(Item.of("avaritia:singularity", `{Id:"avaritia:spacetime"}`).weakNBT())
        .itemOutputs("avaritia:singularity")
        .EUt(GTValues.VA[GTValues.MAX] * 262144)
        .duration(1600)

    //Trinium Compound
    gtr.vacuum_freezer("gtlcore:fuming_nitric_acid")
        .inputFluids("gtceu:fuming_nitric_acid 1000")
        .itemOutputs("5x gtceu:crystalline_nitric_acid_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(180)

    gtr.electric_blast_furnace("gtlcore:trinium_compound_dust")
        .itemInputs("40x gtceu:crystalline_nitric_acid_dust", "16x gtceu:trinium_compound_dust", "6x gtceu:sodium_perchlorate_dust")
        .inputFluids("gtceu:sulfur_dioxide 8000")
        .itemOutputs("8x gtceu:astatine_dust", "24x gtceu:selenium_oxide_dust")
        .outputFluids("gtceu:nitrated_triniite_compound_solution 4000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(265)
        .blastFurnaceTemp(9400)

    gtr.chemical_reactor("gtlcore:selenium_oxide_dust")
        .itemInputs("3x gtceu:selenium_oxide_dust")
        .inputFluids("gtceu:sulfur_dioxide 2000")
        .itemOutputs("gtceu:selenium_dust")
        .outputFluids("gtceu:sulfur_trioxide 2000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(260)

    gtr.chemical_reactor("gtlcore:nitrated_triniite_compound_solution")
        .itemInputs("36x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:nitrated_triniite_compound_solution 2000")
        .itemOutputs("29x gtceu:actinium_trinium_hydroxides_dust", "12x gtceu:sodium_sulfide_dust")
        .outputFluids("gtceu:residual_triniite_solution 2000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(190)

    gtr.dehydrator("gtlcore:residual_triniite_solution")
        .inputFluids("gtceu:residual_triniite_solution 2000")
        .itemOutputs("1x gtceu:salt_dust", "20x gtceu:sodium_nitrate_dust")
        .chancedOutput("2x gtceu:naquadria_dust", 4800, 0)
        .chancedOutput("1x gtceu:enriched_naquadah_dust", 5200, 0)
        .EUt(GTValues.VA[GTValues.IV])
        .duration(190)

    gtr.mixer("gtlcore:actinium_trinium_hydroxides_dust")
        .itemInputs("58x gtceu:actinium_trinium_hydroxides_dust", "6x gtceu:radium_dust", "1x gtlcore:protonated_fullerene_sieving_matrix")
        .inputFluids("minecraft:water 2000")
        .itemOutputs("1x gtlcore:saturated_fullerene_sieving_matrix")
        .outputFluids("gtceu:actinium_radium_hydroxide_solution 2000")
        .EUt(GTValues.VA[GTValues.ZPM] * 2)
        .duration(210)

    gtr.dissolution_treatment("gtlcore:actinium_radium_hydroxide_solution")
        .inputFluids("gtceu:actinium_radium_hydroxide_solution 10000")
        .inputFluids("gtceu:nitric_acid 120000")
        .outputFluids("gtceu:actinium_radium_nitrate_solution 130000")
        .EUt(GTValues.VA[GTValues.EV] * 2)
        .duration(2900)

    gtr.centrifuge("gtlcore:actinium_radium_nitrate_solution")
        .notConsumable("1x gtceu:trifluoroacetic_phosphate_ester_dust")
        .inputFluids("gtceu:actinium_radium_nitrate_solution 13000")
        .itemOutputs("26x gtceu:actinium_nitrate_dust", "27x gtceu:radium_nitrate_dust")
        .chancedOutput("4x gtceu:francium_dust", 2500, 0)
        .chancedOutput("1x gtceu:thorium_dust", 2500, 0)
        .chancedOutput("2x gtceu:protactinium_dust", 2500, 0)
        .chancedOutput("1x gtceu:radium_dust", 2500, 0)
        .outputFluids("minecraft:water 13000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(160)

    gtr.electric_blast_furnace("gtlcore:phosphorus_pentasulfide_dust")
        .itemInputs("10x gtceu:sulfur_dust", "4x gtceu:phosphorus_dust")
        .itemOutputs("14x gtceu:phosphorus_pentasulfide_dust")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(190)
        .blastFurnaceTemp(900)

    gtr.chemical_reactor("gtlcore:ethylene_sulfide")
        .itemInputs("7x gtceu:phosphorus_pentasulfide_dust")
        .inputFluids("gtceu:acetyl_chloride 5000", "gtceu:succinaldehyde 5000")
        .itemOutputs("7x gtceu:phosphorus_pentoxide_dust")
        .outputFluids("gtceu:ethylene_sulfide 5000", "gtceu:diluted_hydrochloric_acid 10000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(210)

    gtr.chemical_reactor("gtlcore:acetyl_chloride")
        .inputFluids("gtceu:ethenone 1000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:acetyl_chloride 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(160)

    gtr.large_chemical_reactor("gtlcore:ethyl_trifluoroacetate")
        .inputFluids("gtceu:hydrofluoric_acid 3000", "gtceu:acetyl_chloride 1000", "gtceu:ethanol 1000")
        .outputFluids("gtceu:ethyl_trifluoroacetate 1000", "gtceu:hydrogen 6000", "gtceu:hydrochloric_acid 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(230)

    gtr.chemical_reactor("gtlcore:trifluoroacetic_phosphate_ester_dust")
        .itemInputs("9x gtceu:sodium_ethylate_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:ethylene_sulfide 1000", "gtceu:ethyl_trifluoroacetate 1000")
        .itemOutputs("2x gtceu:salt_dust", "4x gtceu:trifluoroacetic_phosphate_ester_dust")
        .outputFluids("gtceu:ethanol 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(220)

    gtr.chemical_reactor("gtlcore:saturated_fullerene_sieving_matrix")
        .itemInputs("1x gtlcore:saturated_fullerene_sieving_matrix")
        .inputFluids("gtceu:krypton_difluoride 16000", "gtceu:fluoroantimonic_acid 8000")
        .itemOutputs("32x gtceu:antimony_trifluoride_dust", "50x gtceu:fluorocarborane_dust")
        .outputFluids("gtceu:krypton 16000", "gtceu:heavily_fluorinated_trinium_solution 8000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(180)

    gtr.chemical_reactor("gtlcore:krypton_difluoride")
        .notConsumable("1x gtceu:blacklight")
        .inputFluids("gtceu:fluorine 2000", "gtceu:krypton 1000")
        .outputFluids("gtceu:krypton_difluoride 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(190)

    gtr.centrifuge("gtlcore:heavily_fluorinated_trinium_solution")
        .inputFluids("gtceu:heavily_fluorinated_trinium_solution 8000")
        .itemOutputs("60x gtceu:trinium_tetrafluoride_dust")
        .outputFluids("gtceu:fluorine 16000", "gtceu:perfluorobenzene 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)

    gtr.electrolyzer("gtlcore:trinium_tetrafluoride_dust")
        .itemInputs("5x gtceu:trinium_tetrafluoride_dust")
        .inputFluids("gtceu:molten_calcium_salts 1000")
        .itemOutputs("1x gtceu:trinium_dust", "2x gtceu:calcium_dust")
        .outputFluids("gtceu:fluorine 6000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtr.mixer("gtlcore:molten_calcium_salts")
        .itemInputs("1x gtceu:calcium_dust")
        .inputFluids("gtceu:fluorite 432")
        .outputFluids("gtceu:molten_calcium_salts 1000")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(160)

    gtr.chemical_reactor("gtlcore:fluorite_dust")
        .itemInputs("1x gtceu:calcium_dust")
        .inputFluids("gtceu:fluorine 2000")
        .itemOutputs("3x gtceu:fluorite_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(160)

    gtr.assembler("gtlcore:protonated_fullerene_sieving_matrix")
        .itemInputs("50x gtceu:fluorocarborane_dust", "6x gtceu:fine_carbon_nanotubes_wire", "1x gtceu:fullerene_dust")
        .inputFluids("gtceu:perfluorobenzene 2000")
        .itemOutputs("1x gtlcore:protonated_fullerene_sieving_matrix")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)

    gtr.chemical_reactor("gtlcore:perfluorobenzene")
        .notConsumable("1x gtceu:rhenium_dust")
        .itemInputs("12x gtceu:potassium_fluoride_dust")
        .inputFluids("gtceu:benzene 1000", "gtceu:chlorine 6000")
        .itemOutputs("12x gtceu:rock_salt_dust")
        .outputFluids("gtceu:perfluorobenzene 1000", "gtceu:hydrogen 6000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(185)

    gtr.chemical_reactor("gtlcore:potassium_fluoride_dust")
        .itemInputs("1x gtceu:potassium_dust")
        .inputFluids("gtceu:fluorine 1000")
        .itemOutputs("2x gtceu:potassium_fluoride_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    gtr.large_chemical_reactor("gtlcore:fluorocarborane_dust")
        .itemInputs("50x gtceu:cesium_carborane_dust", "10x gtceu:silver_nitrate_dust", "2x gtceu:iodine_dust")
        .inputFluids("gtceu:trimethylsilane 1000", "gtceu:hydrochloric_acid 1000", "gtceu:fluorine 44000")
        .itemOutputs("50x gtceu:fluorocarborane_dust", "10x gtceu:caesium_nitrate_dust", "4x gtceu:silver_iodide_dust")
        .outputFluids("gtceu:hydrofluoric_acid 22000", "gtceu:trimethylchlorosilane 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(320)

    gtr.chemical_reactor("gtlcore:trimethylchlorosilane")
        .inputFluids("gtceu:methane 1000", "gtceu:dimethyldichlorosilane 1000")
        .outputFluids("gtceu:trimethylchlorosilane 1000", "gtceu:hydrogen 2000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(110)

    gtr.chemical_reactor("gtlcore:trimethylsilane")
        .itemInputs("2x gtceu:sodium_hydride_dust")
        .inputFluids("gtceu:trimethylchlorosilane 1000")
        .itemOutputs("2x gtceu:salt_dust")
        .outputFluids("gtceu:trimethylsilane 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(190)

    gtr.chemical_reactor("gtlcore:sodium_hydride_dust")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("gtceu:hydrogen 1000")
        .itemOutputs("2x gtceu:sodium_hydride_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)

    gtr.chemical_reactor("gtlcore:silver_nitrate_dust_chemical_compound")
        .itemInputs("3x gtceu:silver_oxide_dust")
        .inputFluids("gtceu:nitric_acid 2000")
        .itemOutputs("10x gtceu:silver_nitrate_dust")
        .outputFluids("minecraft:water 1000")
        .EUt(125)
        .duration(150)

    gtr.electrolyzer("gtlcore:caesium_nitrate_dust")
        .itemInputs("5x gtceu:caesium_nitrate_dust")
        .itemOutputs("1x gtceu:caesium_dust")
        .outputFluids("gtceu:nitrogen 1000", "gtceu:oxygen 3000")
        .EUt(30)
        .duration(170)

    gtr.electric_blast_furnace("gtlcore:silver_iodide_dust")
        .itemInputs("4x gtceu:silver_iodide_dust")
        .inputFluids("gtceu:oxygen 1000")
        .itemOutputs("3x gtceu:silver_oxide_dust", "2x gtceu:iodine_dust")
        .EUt(125)
        .duration(210)
        .blastFurnaceTemp(1100)

    gtr.electrolyzer("gtlcore:radium_nitrate_dust")
        .itemInputs("9x gtceu:radium_nitrate_dust")
        .itemOutputs("1x gtceu:radium_dust")
        .outputFluids("gtceu:nitrogen 2000", "gtceu:oxygen 6000")
        .EUt(500)
        .duration(160)

    gtr.electrolyzer("gtlcore:actinium_nitrate_dust")
        .itemInputs("13x gtceu:actinium_nitrate_dust")
        .itemOutputs("1x gtceu:actinium_dust")
        .outputFluids("gtceu:nitrogen 3000", "gtceu:oxygen 9000")
        .EUt(500)
        .duration(210)

    gtr.large_chemical_reactor("gtlcore:cesium_carborane_dust")
        .notConsumableFluid("gtceu:tetrahydrofuran 1000")
        .itemInputs("38x gtceu:cesium_carborane_precursor_dust", "2x gtceu:sodium_hydride_dust")
        .inputFluids("gtceu:borane_dimethyl_sulfide 1000")
        .itemOutputs("25x gtceu:cesium_carborane_dust", "2x gtceu:salt_dust")
        .outputFluids("gtceu:trimethylamine 1000", "gtceu:hydrogen_sulfide 1000", "gtceu:methane 2000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(260)

    gtr.chemical_reactor("gtlcore:borane_dimethyl_sulfide")
        .inputFluids("gtceu:diborane 1000", "gtceu:dimethyl_sulfide 2000")
        .outputFluids("gtceu:borane_dimethyl_sulfide 2000")
        .EUt(125)
        .duration(165)

    gtr.chemical_reactor("gtlcore:tetrahydrofuran")
        .inputFluids("gtceu:hydrogen 4000", "gtceu:formaldehyde 2000", "gtceu:acetylene 1000")
        .outputFluids("gtceu:tetrahydrofuran 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(75)

    gtr.large_chemical_reactor("gtlcore:cesium_carborane_precursor_dust")
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .itemInputs("24x gtceu:decaborane_dust", "3x gtceu:caesium_hydroxide_dust")
        .inputFluids("gtceu:methanol 3000", "gtceu:hydrochloric_acid 2000", "gtceu:sodium_cyanide 1000")
        .itemOutputs("38x gtceu:cesium_carborane_precursor_dust", "2x gtceu:salt_dust")
        .outputFluids("minecraft:water 4000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(240)

    gtr.electrolyzer("gtlcore:trimethylamine")
        .inputFluids("gtceu:trimethylamine 13000")
        .itemOutputs("3x gtceu:carbon_dust")
        .outputFluids("gtceu:hydrogen 9000", "gtceu:nitrogen 1000")
        .EUt(125)
        .duration(140)

    gtr.chemical_reactor("gtlcore:diborane")
        .itemInputs("18x gtceu:lithium_aluminium_hydride_dust")
        .inputFluids("gtceu:boron_fluoride 4000")
        .itemOutputs("18x gtceu:lithium_aluminium_fluoride_dust")
        .outputFluids("gtceu:diborane 2000")
        .EUt(30)
        .duration(80)

    gtr.chemical_bath("gtlcore:caesium_hydroxide_dust")
        .itemInputs("2x gtceu:caesium_dust")
        .inputFluids("gtceu:hydrogen_peroxide 1000")
        .itemOutputs("6x gtceu:caesium_hydroxide_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(180)

    gtr.large_chemical_reactor("gtlcore:decaborane_dust")
        .itemInputs("51x gtceu:sodium_borohydride_dust")
        .inputFluids("gtceu:boron_trifluoride_acetate 10000", "gtceu:hydrogen_peroxide 2000", "gtceu:hydrofluoric_acid 1000")
        .itemOutputs("24x gtceu:decaborane_dust", "2x gtceu:sodium_fluoride_dust", "45x gtceu:sodium_tetrafluoroborate_dust")
        .outputFluids("minecraft:water 1000", "gtceu:hydrogen 20000", "gtceu:diethyl_ether 10000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(380)

    gtr.chemical_reactor("gtlcore:lithium_aluminium_hydride_dust")
        .itemInputs("6x gtceu:sodium_aluminium_hydride_dust", "2x gtceu:lithium_chloride_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("6x gtceu:lithium_aluminium_hydride_dust")
        .outputFluids("gtceu:salt_water 1000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(320)

    gtr.electrolyzer("gtlcore:lithium_aluminium_fluoride_dust")
        .itemInputs("6x gtceu:lithium_aluminium_fluoride_dust")
        .itemOutputs("4x gtceu:aluminium_trifluoride_dust", "2x gtceu:lithium_fluoride_dust")
        .EUt(120)
        .duration(250)

    gtr.chemical_reactor("gtlcore:sodium_borohydride_dust")
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .itemInputs("8x gtceu:sodium_hydride_dust")
        .inputFluids("gtceu:ethanol 3000", "gtceu:boric_acide 1000")
        .itemOutputs("6x gtceu:sodium_borohydride_dust", "27x gtceu:sodium_ethylate_dust")
        .outputFluids("minecraft:water 3000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(120)

    gtr.mixer("gtlcore:boron_trifluoride_acetate")
        .inputFluids("gtceu:diethyl_ether 1000", "gtceu:boron_fluoride 1000")
        .outputFluids("gtceu:boron_trifluoride_acetate 1000")
        .EUt(125)
        .duration(150)

    gtr.chemical_reactor("gtlcore:sodium_tetrafluoroborate_dust")
        .circuit(2)
        .itemInputs("6x gtceu:sodium_tetrafluoroborate_dust")
        .itemOutputs("2x gtceu:sodium_fluoride_dust")
        .outputFluids("gtceu:boron_fluoride 1000")
        .EUt(125)
        .duration(120)

    gtr.dehydrator("gtlcore:diethyl_ether")
        .circuit(1)
        .notConsumableFluid("gtceu:sulfuric_acid 1000")
        .inputFluids("gtceu:ethanol 2000")
        .outputFluids("gtceu:diethyl_ether 1000")
        .EUt(750)
        .duration(120)

    gtr.chemical_reactor("gtlcore:lithium_chloride_dust")
        .circuit(1)
        .itemInputs("gtceu:lithium_dust")
        .inputFluids("gtceu:chlorine 1000")
        .itemOutputs("2x gtceu:lithium_chloride_dust")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(125)

    gtr.mixer("gtlcore:sodium_aluminium_hydride_dust")
        .itemInputs("4x gtceu:aluminium_hydride_dust", "2x gtceu:sodium_hydride_dust")
        .itemOutputs("6x gtceu:sodium_aluminium_hydride_dust")
        .EUt(30)
        .duration(190)

    gtr.chemical_reactor("gtlcore:aluminium_trifluoride_dust_a")
        .itemInputs("6x gtceu:sodium_fluoride_dust", "4x gtceu:aluminium_trifluoride_dust")
        .outputFluids("gtceu:sodium_hexafluoroaluminate 1000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    gtr.chemical_reactor("gtlcore:aluminium_trifluoride_dust_b")
        .itemInputs("8x gtceu:aluminium_trifluoride_dust")
        .inputFluids("minecraft:water 3000")
        .itemOutputs("5x gtceu:alumina_dust")
        .outputFluids("gtceu:hydrofluoric_acid 6000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(140)

    gtr.electrolyzer("gtlcore:sodium_hexafluoroaluminate")
        .itemInputs("10x gtceu:alumina_dust")
        .inputFluids("gtceu:sodium_hexafluoroaluminate 1000")
        .itemOutputs("4x gtceu:aluminium_dust", "6x gtceu:sodium_fluoride_dust", "4x gtceu:aluminium_trifluoride_dust")
        .outputFluids("gtceu:oxygen 6000")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    gtr.chemical_reactor("gtlcore:aluminium_hydride_dust")
        .itemInputs("1x gtceu:aluminium_dust")
        .inputFluids("gtceu:hydrogen 3000")
        .itemOutputs("4x gtceu:aluminium_hydride_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(80)

    gtr.electrolyzer("gtlcore:trinium_compound_dust")
        .itemInputs("14x gtceu:trinium_compound_dust")
        .itemOutputs("3x gtceu:trinium_dust", "3x gtceu:actinium_dust", "4x gtceu:selenium_dust", "4x gtceu:astatine_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(560)

    gtr.compressor("gtlcore:diamond_compressed_block")
        .itemInputs("8x minecraft:diamond_block")
        .itemOutputs("kubejs:diamond_compressed_block")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(300)

    gtr.rocket_engine("gtceu:rocket_engine_fuel_7")
        .inputFluids("ad_astra:cryo_fuel 10")
        .duration(120)
        .EUt(-2048)

    gtr.lightning_processor("gtlcore:nitric_oxide")
        .inputFluids("gtceu:air 10000")
        .outputFluids("gtceu:nitric_oxide 1000")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtlcore:digestion_tank")
        .itemInputs("gtceu:tungsten_steel_frame", "4x #gtceu:circuits/iv", "2x gtceu:iv_electric_pump", "4x gtceu:chromium_normal_fluid_pipe", "4x gtceu:double_electrum_plate", "4x gtceu:double_cupronickel_plate", "4x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtlcore:digestion_tank")
        .EUt(120)
        .duration(400)

    gtr.assembler("gtlcore:dissolving_tank")
        .itemInputs("gtceu:ev_machine_hull", "4x #gtceu:circuits/ev", "4x gtceu:ev_electric_pump", "4x gtceu:gold_normal_fluid_pipe", "8x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtlcore:dissolving_tank")
        .EUt(120)
        .duration(400)

    gtr.desulfurizer("gtlcore:light_fuel")
        .inputFluids("gtceu:sulfuric_light_fuel 12000")
        .outputFluids("gtceu:light_fuel 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.desulfurizer("gtlcore:heavy_fuel")
        .inputFluids("gtceu:sulfuric_heavy_fuel 12000")
        .outputFluids("gtceu:heavy_fuel 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.desulfurizer("gtlcore:naphtha")
        .inputFluids("gtceu:sulfuric_naphtha 12000")
        .outputFluids("gtceu:naphtha 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.desulfurizer("gtlcore:gas")
        .inputFluids("gtceu:sulfuric_gas 12000")
        .outputFluids("gtceu:refinery_gas 12000")
        .itemOutputs("1x gtceu:sulfur_dust")
        .duration(120)
        .EUt(30)

    gtr.large_boiler("gtlcore:tin_bucket")
        .itemInputs("1x gtceu:tin_ingot")
        .inputFluids("minecraft:lava 100")
        .outputFluids("gtceu:tin 144")
        .duration(5)

    gtr.assembler("gtlcore:grind_ball_hatch")
        .itemInputs("gtceu:vanadium_steel_frame", "gtceu:iv_input_bus", "8x gtceu:titanium_gear", "gtceu:double_tungsten_steel_plate", "32x gtceu:tungsten_steel_foil", "16x gtceu:fine_tin_wire")
        .inputFluids("gtceu:tungsten 1152")
        .itemOutputs("gtlcore:grind_ball_hatch")
        .duration(400)
        .EUt(480)

    gtr.assembler("gtlcore:radiation_hatch")
        .itemInputs("gtceu:zpm_input_bus", "8x gtceu:graphite_block", "16x gtceu:double_lead_plate", "gtceu:computer_monitor_cover")
        .inputFluids("gtceu:tin 2304")
        .itemOutputs("gtlcore:radiation_hatch")
        .duration(400)
        .EUt(1920)

    gtr.assembler("gtlcore:rotor_hatch")
        .itemInputs("gtceu:ev_input_bus", "gtceu:advanced_item_detector_cover", "4x gtceu:sterling_silver_large_restrictive_item_pipe", "16x gtceu:ev_conveyor_module")
        .inputFluids("gtceu:tin 2304")
        .itemOutputs("gtlcore:rotor_hatch")
        .duration(400)
        .EUt(480)
})
