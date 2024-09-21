// priority: 95
const BlockBehaviour = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour")
const BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")
WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", ["ad_astra:moon_desh_ore", "ad_astra:moon_iron_ore", "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_iron_ore", "ad_astra:mars_diamond_ore", "ad_astra:mars_ostrum_ore", "ad_astra:mars_ice_shard_ore",
        "ad_astra:venus_coal_ore", "ad_astra:venus_gold_ore", "ad_astra:venus_diamond_ore", "ad_astra:venus_calorite_ore",
        "ad_astra:glacio_ice_shard_ore", "ad_astra:glacio_coal_ore", "ad_astra:glacio_copper_ore", "ad_astra:glacio_iron_ore",
        "ad_astra:mercury_iron_ore", "ad_astra:glacio_deepslate_lapis_ore", "ad_astra:glacio_deepslate_iron_ore",
        "ad_astra:glacio_lapis_ore", "ad_astra:glacio_deepslate_copper_ore", "ad_astra:glacio_deepslate_coal_ore"])
})
GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
    TagPrefix.oreTagPrefix("moon_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("ad_astra:moon_stone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "ad_astra:block/moon_stone")

    TagPrefix.oreTagPrefix("mars_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("ad_astra:mars_stone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "ad_astra:block/mars_stone")

    TagPrefix.oreTagPrefix("venus_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("ad_astra:venus_stone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "ad_astra:block/venus_stone")

    TagPrefix.oreTagPrefix("mercury_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("ad_astra:mercury_stone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "ad_astra:block/mercury_stone")

    TagPrefix.oreTagPrefix("glacio_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("ad_astra:glacio_stone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "ad_astra:block/glacio_stone")

    TagPrefix.oreTagPrefix("titanstone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("kubejs:titanstone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "kubejs:block/titanstone")

    TagPrefix.oreTagPrefix("plutostone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("kubejs:plutostone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "kubejs:block/plutostone")

    TagPrefix.oreTagPrefix("iostone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("kubejs:iostone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "kubejs:block/iostone")

    TagPrefix.oreTagPrefix("ganymedestone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("kubejs:ganymedestone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "kubejs:block/ganymedestone")

    TagPrefix.oreTagPrefix("enceladusstone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("kubejs:enceladusstone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "kubejs:block/enceladusstone")

    TagPrefix.oreTagPrefix("ceresstone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock("kubejs:ceresstone").defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            "kubejs:block/ceresstone")
})
GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("all_layer")
        .targets("#minecraft:stone_ore_replaceables",
            "minecraft:nerherstone",
            "minecraft:endstone",
            "ad_astra:moon_stone",
            "ad_astra:mars_stone",
            "ad_astra:venus_stone",
            "ad_astra:mercury_stone",
            "ad_astra:glacio_stone",
            "kubejs:titanstone",
            "kubejs:plutostone",
            "kubejs:iostone",
            "kubejs:ganymedestone",
            "kubejs:enceladusstone",
            "kubejs:ceresstone")
        .dimensions("minecraft:overworld",
            "minecraft:the_nether",
            "minecraft:the_end",
            "kubejs:ancient_world",
            "ad_astra:moon",
            "ad_astra:mars",
            "ad_astra:venus",
            "ad_astra:mercury",
            "ad_astra:glacio",
            "kubejs:titan",
            "kubejs:pluto",
            "kubejs:io",
            "kubejs:ganymede",
            "kubejs:enceladus",
            "kubejs:ceres",
            "kubejs:barnarda")
})