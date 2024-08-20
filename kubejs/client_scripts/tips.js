ItemEvents.tooltip(event => {
    event.add("kubejs:basic_control_circuit", "§aULV级电路")
    event.add("kubejs:advanced_control_circuit", "§cLV级电路")
    event.add("kubejs:elite_control_circuit", "§bMV级电路")
    event.add("kubejs:ultimate_control_circuit", "§5HV级电路")
    event.add("kubejs:ultima_control_circuit", "§4EV级电路")
    event.add("kubejs:warped_ender_pearl", "潜行右键可设置个人传送点，右键传送到传送点")
    event.add("kubejs:hyper_stable_self_healing_adhesive", "§7选择性完全粘合，即使在撕裂或损坏时也有效")
    event.add("kubejs:black_body_naquadria_supersolid", "§7如液体般流动，不反射任何电磁波，完美地将其吸收与传递")
    event.add("kubejs:stellar_containment_casing", "§7生成最大可抵御超新星爆发的力场防护")
    event.add("kubejs:command_wand", "需要左手拿着命令方块，且只能放在创造稳定核心上方")
    event.add("kubejs:uruium_coil_block", ["可为超维度等离子锻炉提供32000K炉温", "恒星锻炉模式仅可使用该线圈"])
    event.add(["gtceu:space_elevator", "gtceu:door_of_create", "gtceu:large_rotary", "gtceu:block_conversion_room", "gtceu:create_aggregation"], "运行前需要将电路设置为1")
    event.add("gtceu:advanced_assembly_line", ["可拓展至64格", "只能使用数据靶仓"])
    event.add("gtceu:weather_control", ["1号电路切换晴天", "2号电路切换雨天", "3号电路切换雷暴"])
    event.add("gtceu:create_aggregation", ["只能在创造维度运行", "需要创造计算机为其提供算力"])
    event.add("gtceu:greenhouse", ["需要阳光才能运行", "如太阳光照不足，速度就会减缓"])
    event.add("gtceu:large_greenhouse", "无需要阳光就能运行")
    event.add("gtceu:star_ultimate_material_forge_factory", "最大并行数：1000")
    event.add("gtceu:create_computation", "需要输入MAX级电压")
    event.add("gtceu:slaughterhouse", ["电动刷怪塔，自动杀怪", "电压等级每高出MV1级，每次处理次数+8", "1号电路为非敌对生物，2号为敌对生物", "实体生成模式为玩家击杀的实际掉落，需要非和平模式", "非实体生成模式为虚拟掉落，可以和平模式，由玩家击杀的掉落物无法获取", "注意机器内部除玩家外任何实体都会被攻击"])
    event.add("gtceu:dimensionally_transcendent_steam_boiler", ["最大蒸汽产出：4096000mB/t", "需要连续运行1个小时才能达到最大输出"])
    event.add("kubejs:essence_block", "将骨块放置在转换室获得")
    event.add("kubejs:draconium_block_charged", "将注入龙力的黑曜石放置在转换室获得")
    event.add("gtceu:block_conversion_room", ["每秒随机选取机器内部一个位置的方块进行转化", "电压等级每高出MV1级，每次转换方块数量+4，且不会重复"])
    event.add("minecraft:crimson_stem", "将橡木原木放置在转换室获得")
    event.add("minecraft:warped_stem", "将白桦木原木放置在转换室获得")
    event.add("minecraft:bone_block", "将钙块放置在转换室获得")
    event.add("minecraft:moss_block", "将草方块放置在转换室获得")
    event.add("minecraft:sculk", "将苔藓块放置在转换室获得")
    event.add("minecraft:command_block", "将磁流体约束恒星物质块丢入创造之门获得")
    event.add("minecraft:chain_command_block", "将连锁命令方块核心与即将破坏的命令方块聚合获得")
    event.add("minecraft:repeating_command_block", "循环命令方块核心与即将破坏的脉冲命令方块聚合获得")
    event.add("gtceu:large_rotary", ["能够执行所有气转液配方", "需要在管道方块旁放置气体储罐并自动输出", "每秒最大转化数量为1000x2^(4+电压等级)"])
    event.add("gtceu:void_miner", "读取数据采集虚空的矿物")
    event.add("gtceu:large_recycler", "电压等级每高出EV1级，最大并行数x4")
    event.add("gtceu:void_fluid_drilling_rig", "读取数据钻取虚空的流体")
    event.add("gtceu:large_void_miner", ["精准模式消耗精华采集指定矿脉", "随机模式消耗10KB的钻井液和更长的耗时随机采集所有矿石", "随机模式注意输出空间要足够，推荐使用ME输出总成"])
    event.add("gtceu:stellar_forge", ["利用爆弹在瞬间产生的巨大能量来熔合物质", "§7在运行时供能不足可能导致星球毁灭"])
    event.add("gtceu:large_rock_crusher", "需要在输入仓中放入对应流体")
    event.add("gtceu:plasma_condenser", "等离子专用冷冻机")
    event.add("gtceu:rare_earth_centrifugal", "稀土专用离心机")
    event.add("gtceu:magic_manufacturer", "将电能转化为魔力")
    event.add("gtceu:chemical_distort", ["线圈温度每高出配方温度100K，并行加4", "更高的电压不会提供额外温度"])
    event.add(["gtceu:dimensional_focus_engraving_array", "gtceu:mega_wiremill", "gtceu:mega_presser", "gtceu:mega_extractor"], "线圈温度每高出900K，并行数x2")
    event.add("gtceu:sps_crafting", "借助魔力合成特殊的物品")
    event.add("gtceu:matter_fabricator", "产出特殊物质")
    event.add("gtceu:engraving_laser_plant", "精密激光模式不支持并行")
    event.add(["gtceu:nano_forge_1", "gtceu:nano_forge_2", "gtceu:nano_forge_3"], ["只能使用激光仓", "放入对应的纳米蜂群才能工作，并且按蜂群数量来并行"])
    event.add("gtceu:nano_forge_1", ["并行数为蜂群数量"])
    event.add("gtceu:nano_forge_2", ["处理2阶配方时，并行数为蜂群数量", "处理1阶配方时并行数量翻倍，超频模式改为无损超频"])
    event.add("gtceu:nano_forge_3", ["处理3阶配方时，并行数为蜂群数量", "处理2阶配方时并行数量翻倍", "处理1阶配方时并行数翻4倍，超频模式改为每提高4倍功率获得8倍提速"])
    event.add("ad_astra:oxygen_loader", "§c仅合成，无法产出氧气")
    event.add(["gtceu:dimensionally_transcendent_dirt_forge", "gtceu:dimensionally_transcendent_steam_oven"], ["拥有524288的最大并行", "并且直接完成配方"])
    event.add(["gtceu:large_chemical_plant", "gtceu:chemical_plant"], "线圈等级每高出白铜一级能耗降低5%")
    event.add(["gtceu:processing_plant", "gtceu:assemble_plant", "gtceu:separated_plant", "gtceu:mixed_plant"], ["耗能倍数x0.8", "耗时倍数x0.9", "每种模式都需要放入一个对应电压等级的机器才能运行", "电压等级每高出LV一级，最大并行数+4，上限为16"])
    event.add("gtceu:space_elevator", ["可安装最多8个拓展模块", "查询JEI多方块信息获取模块位置", "提升电压等级可为模块提供耗时减免"])
    event.add("gtceu:suprachronal_assembly_line_module", "安装在超时空装配线两侧")
    event.add("gtceu:suprachronal_assembly_line", ["§8§l不可视之触", "可在两侧拓展模块，模块与主机共享并行数", "查询JEI多方块信息获取模块位置"])
    event.add(["gtceu:suprachronal_assembly_line_module", "gtceu:suprachronal_assembly_line"], "耗时倍数x0.4")
    event.add("gtceu:hyper_reactor", ["每次运行前提供额外的1mb等离子体将获得16的并行", "不同燃料所需的等离子体不同", "从1-4顺序为：", "山铜，末影，魔金，亚稳态𬭶"])
    event.add("gtceu:advanced_hyper_reactor", ["提供不同等离子体获得不同并行", "星辉：8，致密中子：16"])
    event.add("gtceu:a_mass_fabricator", ["耗能倍数x0.8", "耗时倍数x0.5"])
    event.add("gtceu:dimensionally_transcendent_mixer", "运行搅拌机配方时时间减少为0.2倍")
    event.add("gtceu:pcb_factory", ["放入纳米蜂群可获得减免", "可使用金和振金，每个提升1%速度", "振金还可使能耗降低4倍"])
    event.add("gtceu:space_probe_surface_reception", "不要遮挡")
    event.add(["gtceu:mega_alloy_blast_smelter", "gtceu:large_rock_crusher"], ["耗能倍数x0.8", "耗时倍数x0.6"])
    event.add("gtceu:super_blast_smelter", "耗时倍数x0.2")
    event.add("gtceu:dyson_sphere", ["发射戴森球模块后开始工作", "每次运行都有(模块数量/128 + 1)%的概率损坏一次模块", "当损坏高于60%时，输出效率随损坏值由100%逐渐降低到20%，并输出随损坏值增强的红石信号", "当损坏达到100%时减少一次模块发射数量，并重制损坏值", "在损坏值高于60%时发射不会增加发射次数，但会重制损坏值", "产能功率，和需求算力由发射的模块数量决定", "每次发射可使功率增加1A MAX"])
    event.add("gtceu:bedrock_drilling_rig", ["需要基岩在钻头下方", "每次运行都有10%的概率破坏基岩"])
    event.add("gtceu:super_computation", ["根据不同的电压等级获得算力输出", "且每种算力输出需要不同的电路主机8个", "提供UIV级电压时，需要放入光学处理器主机，并提供1024CWU/t", "提供UXV级电压时，需要放入奇异处理器主机，并提供2048CWU/t", "提供OpV级电压时，需要放入寰宇处理器主机，并提供4096CWU/t", "提供MAX级电压时，需要放入超因果处理器主机，并提供8192CWU/t"])
    event.add("gtceu:blaze_blast_furnace", ["需每秒提供§b10x(功率÷120)^1/2§r的§e液态烈焰§r", "耗时倍数x0.5", "最大并行数固定为4"])
    event.add("gtceu:cold_ice_freezer", ["需每秒提供§b10x电压等级^2§r的§b液态冰§r", "耗时倍数x0.5", "最大并行数固定为4"])
    event.add("gtceu:annihilate_generator", ["终极质能转换"])
    event.add("gtceu:sphere_of_harmony", ["创造一个微缩宇宙，并获取里面的资源", "这台多方块机器需要太多EU，无法用常规手段供能", "由无线EU网络直接供给EU，具体数值可在GUI内查看", "工作前需设置好电路", "执行特殊超频模式，每提升16倍功率提升2倍速度，超频由编程电路调节", "1号不执行超频，2-4分别执行1，2，3次超频", "启动需1024B的宇宙素，与1024KB的氢和氦", "氢和氦存储在机器内部，在机器准备工作之前会持续消耗"])
    event.add("gtceu:integrated_ore_processor", ["一步完成矿石处理", "1号电路为研磨-研磨-离心", "2号电路为研磨-洗矿-热离-研磨", "3号电路为研磨-洗矿-研磨-离心", "4号电路为研磨-洗矿-筛选-离心", "5号电路为研磨-浸洗-热离-研磨", "6号电路为研磨-浸洗-研磨-离心", "7号电路为研磨-浸洗-筛选-离心"])
    event.add("gtceu:fission_reactor", ["反应堆在运行前会获得最大并行数量为燃料组件数量的并行", "反应堆在运行过程中会根据配方产热","如果温度高于1500K，反应堆将会损坏，损坏达到100%后反应堆爆炸", "在运行过程中提供冷却液并根据不同冷却液的冷却液系数来控制温度", "冷却液系数：蒸馏水：800，钠钾合金：20", "反应堆冷却有如下参数：", "最低冷却液需求量和最高冷却液供给量", "最低需求量=配方产热x实际并行数量x当前温度/1500", "最高供给量=冷却组件x8", "当供给量>=需求量时达到消耗冷却液条件，消耗提供的冷却液，消耗量为需求量x冷却液系数，并阻止反应堆升温", "如果供给量是需求量的n倍，则执行特殊超频，超频次数为n", "再次消耗需求量的冷却液，并减少1秒时间，如果无法供给冷却液则中断超频，如果进度到达100%则中断超频并消耗一次需求量的冷却液使温度降低1K", "由蒸馏水作为冷却液时将产生蒸汽，产生量：消耗量xmin(160,160/(1.4^(373-温度)))", "由钾钠合金作为冷却液时产生热钾钠合金，产生量=消耗量，如果温度高于825K则产生同等量的超临界钠钾合金", "无论反应堆是否具有消耗冷却液的条件都能执行配方","反应堆停止工作后温度将每秒降低1K"])
    event.add(["gtceu:dimensionally_transcendent_plasma_forge",
        "gtceu:advanced_sps_crafting",
        "gtceu:naquadah_reactor",
        "gtceu:hyper_reactor",
        "gtceu:advanced_hyper_reactor",
        "gtceu:element_copying",
        "gtceu:mage_assembler",
        "gtceu:suprachronal_assembly_line",
        "gtceu:superconducting_electromagnetism",
        "gtceu:dimensionally_transcendent_mixer",
        "gtceu:dimensional_focus_engraving_array",
        "gtceu:qft",
        "gtceu:matter_fabricator",
        "gtceu:field_extruder_factory",
        "gtceu:mega_presser",
        "gtceu:mega_wiremill",
        "gtceu:mega_extractor",
        "gtceu:mega_canner",
        "gtceu:holy_separator",
        "gtceu:crystalline_infinity",
        "gtceu:a_mass_fabricator",
        "gtceu:field_extrusion_factory",
        "gtceu:cooling_tower",
        "gtceu:super_blast_smelter",
        "gtceu:super_particle_collider",
        "gtceu:large_chemical_plant",
        "gtceu:star_ultimate_material_forge_factory"], "允许同时使用激光仓")
    event.add(["gtceu:magic_manufacturer",
        "gtceu:sps_crafting",
        "gtceu:plasma_condenser",
        "gtceu:chemical_plant",
        "gtceu:circuit_printer",
        "gtceu:crystalline_infinity",
        "gtceu:large_chemical_reactor",
        "gtceu:space_probe_surface_reception",
        "gtceu:superconducting_electromagnetism",
        "gtceu:dimensionally_transcendent_plasma_forge",
        "gtceu:dimensional_focus_engraving_array",
        "gtceu:advanced_sps_crafting",
        "gtceu:precision_assembler",
        "gtceu:large_infuser",
        "gtceu:pcb_factory",
        "gtceu:large_gas_collector",
        "gtceu:aggregation_device",
        "gtceu:assembler_module",
        "gtceu:gravitation_shockburst",
        "gtceu:suprachronal_assembly_line",
        "gtceu:resource_collection",
        "gtceu:engraving_laser_plant",
        "gtceu:dimensionally_transcendent_mixer",
        "gtceu:field_extruder_factory",
        "gtceu:mage_assembler",
        "gtceu:mega_presser",
        "gtceu:mega_wiremill",
        "gtceu:holy_separator",
        "gtceu:mega_extractor",
        "gtceu:mega_canner",
        "gtceu:stellar_forge",
        "gtceu:mass_fabricator",
        "gtceu:a_mass_fabricator",
        "gtceu:star_ultimate_material_forge_factory",
        "gtceu:dragon_egg_copier",
        "gtceu:cooling_tower",
        "gtceu:large_chemical_plant"], Text.keybind("gtceu.machine.perfect_oc"))
    event.add(["gtceu:rare_earth_centrifugal",
        "gtceu:chemical_plant",
        "gtceu:matter_fabricator",
        "gtceu:advanced_assembly_line",
        "gtceu:mass_fabricator",
        "gtceu:element_copying",
        "gtceu:holy_separator",
        "gtceu:mega_canner",
        "gtceu:a_mass_fabricator",
        "gtceu:crystalline_infinity",
        "gtceu:dragon_egg_copier",
        "gtceu:superconducting_electromagnetism",
        "gtceu:suprachronal_assembly_line",
        "gtceu:dimensionally_transcendent_plasma_forge",
        "gtceu:decay_hastener",
        "gtceu:advanced_sps_crafting",
        "gtceu:mage_assembler",
        "gtceu:field_extruder_factory",
        "gtceu:precision_assembler",
        "gtceu:fishing_ground",
        "gtceu:pcb_factory",
        "gtceu:super_particle_collider",
        "gtceu:engraving_laser_plant",
        "gtceu:dimensionally_transcendent_mixer",
        "gtceu:field_extrusion_factory",
        "gtceu:qft",
        "gtceu:large_pyrolyse_oven",
        "gtceu:large_chemical_plant",
        "gtceu:large_incubator",
        "gtceu:large_rock_crusher",
        "gtceu:large_greenhouse",
        "gtceu:cooling_tower",
        "gtceu:large_cracker",
        "gtceu:mega_alloy_blast_smelter",
        "gtceu:super_blast_smelter"], Text.keybind("gtceu.multiblock.parallelizable.tooltip"))
})