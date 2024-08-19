//priority: 99
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    event.shaped("kubejs:warped_ender_pearl", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "minecraft:bone_meal",
        B: "minecraft:blaze_powder",
        D: "minecraft:ender_pearl"
    })

    event.shaped("travelanchors:travel_staff", [
        "  A",
        " B ",
        "B  "
    ], {
        A: "kubejs:warped_ender_pearl",
        B: "gtceu:long_vanadium_steel_rod"
    })

    event.shaped("travelanchors:travel_anchor", [
        "CAC",
        "DBD",
        "CAC"
    ], {
        A: "gtceu:double_iron_plate",
        B: "kubejs:warped_ender_pearl",
        C: "gtceu:wrought_iron_foil",
        D: "gtceu:vanadium_steel_screw"
    })

    event.shaped("kubejs:command_wand", [
        "  A",
        " B ",
        "B  "
    ], {
        A: "kubejs:command_block_core",
        B: "gtceu:eternity_rod"
    })

    event.shaped("kubejs:time_twister_wireless", [
        "CDC",
        "BAB",
        "CDC"
    ], {
        A: "kubejs:time_twister",
        D: "gtmthings:wireless_energy_monitor",
        C: "gtmthings:lv_wireless_energy_receive_cover",
        B: "minecraft:clock"
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

    gtr.electric_blast_furnace("kubejs:shining_obsidian")
        .itemInputs("minecraft:obsidian", "gtceu:vibrant_alloy_dust")
        .inputFluids("gtceu:glowstone 576")
        .itemOutputs("kubejs:shining_obsidian")
        .EUt(480)
        .duration(600)
        .blastFurnaceTemp(2600)

    gtr.chemical_bath("kubejs:ender_obsidian")
        .itemInputs("kubejs:shining_obsidian")
        .inputFluids("gtceu:ender_eye 1152")
        .itemOutputs("kubejs:ender_obsidian")
        .EUt(480)
        .duration(200)

    gtr.compressor("avaritia:compressed_crafting_table")
        .itemInputs("64x minecraft:crafting_table")
        .itemOutputs("avaritia:compressed_crafting_table")
        .EUt(480)
        .duration(200)
})

const $GTCapabilityHelper = Java.loadClass("com.gregtechceu.gtceu.api.capability.GTCapabilityHelper")
const $DamageTypes = Java.loadClass("net.minecraft.world.damagesource.DamageTypes")
const $MenuHooks = Java.loadClass("earth.terrarium.botarium.common.menu.MenuHooks")
const $PlanetsMenuProvider = Java.loadClass("earth.terrarium.adastra.common.menus.base.PlanetsMenuProvider")
const $WirelessEnergyManager = Java.loadClass("com.hepdd.gtmthings.api.misc.WirelessEnergyManager")
const $BigInteger = Java.loadClass("java.math.BigInteger")
const $RecipeHelper = Java.loadClass("com.gregtechceu.gtceu.api.recipe.RecipeHelper")
const $FormattingUtil = Java.loadClass("com.gregtechceu.gtceu.utils.FormattingUtil")
const $ClipContext = Java.loadClass("net.minecraft.world.level.ClipContext")

BlockEvents.rightClicked("kubejs:antimatter_charge", event => {
    if (event.player.getHeldItem("main_hand") == null && event.player.getHeldItem("off_hand") == null) {
        event.block.set("minecraft:air")
        event.getLevel().createExplosion(event.block.x, event.block.y, event.block.z).strength(100).explosionMode("tnt").explode()
        let entities = event.getLevel().getEntitiesWithin(AABB.of(event.block.x - 100, event.block.y - 50, event.block.z - 100, event.block.x + 100, event.block.y + 50, event.block.z + 100))
        for (let entity of entities) { if (entity.isLiving()) { entity.attack(1000000) } }
    }
})

BlockEvents.rightClicked("gtceu:sphere_of_harmony", event => {
    var machine = $GTCapabilityHelper.getRecipeLogic(event.level, event.block.pos, null).getMachine()
    if (machine.self().isFormed()) {
        machine.holder.self().getPersistentData().putString("sphere_of_harmony", event.player.uuid.toString())
    }
})

BlockEvents.rightClicked("minecraft:crying_obsidian", event => {
    if (event.player.getHeldItem("main_hand") == null && event.player.getHeldItem("off_hand") == null) {
        let name = event.player.getName().getString()
        let dim = event.getLevel().getDimension()
        if (dim != "kubejs:flat") {
            let value = dim == "kubejs:void" ? 1 : 10
            event.player.persistentData.putDouble("y_f", event.player.y + 1)
            event.player.persistentData.putString("dim_f", dim)
            event.getServer().runCommandSilent(`execute in kubejs:flat as ${name} run tp ${event.block.x * value} 64 ${event.block.z * value}`)
            event.getServer().runCommandSilent(`execute in kubejs:flat run fill ${event.block.x * value} 63 ${event.block.z * value} ${event.block.x * value} 63 ${event.block.z * value} minecraft:crying_obsidian`)
        } else {
            let dima = event.player.persistentData.getString("dim_f")
            let value = dima == "kubejs:void" ? 1 : 10
            event.getServer().runCommandSilent(`execute in ${dima} as ${name} run tp ${event.block.x / value} ${event.player.persistentData.getDouble("y_f")} ${event.block.z / value}`)
        }
    }
})

BlockEvents.rightClicked("minecraft:obsidian", event => {
    if (event.player.getHeldItem("main_hand") == null && event.player.getHeldItem("off_hand") == null) {
        let name = event.player.getName().getString()
        let dim = event.getLevel().getDimension()
        if (dim != "kubejs:void") {
            let value = dim == "kubejs:flat" ? 1 : 10
            event.player.persistentData.putDouble("y_v", event.player.y + 1)
            event.player.persistentData.putString("dim_v", dim)
            event.getServer().runCommandSilent(`execute in kubejs:void as ${name} run tp ${event.block.x * value} 64 ${event.block.z * value}`)
            event.getServer().runCommandSilent(`execute in kubejs:void run fill ${event.block.x * value} 63 ${event.block.z * value} ${event.block.x * value} 63 ${event.block.z * value} minecraft:obsidian`)
        }
        else {
            let dima = event.player.persistentData.getString("dim_v")
            let value = dima == "kubejs:flat" ? 1 : 10
            event.getServer().runCommandSilent(`execute in ${dima} as ${name} run tp ${event.block.x / value} ${event.player.persistentData.getDouble("y_v")} ${event.block.z / value}`)
        }
    }
})

BlockEvents.rightClicked("kubejs:reactor_core", event => {
    if ((event.player.getHeldItem("main_hand") == null && event.player.getHeldItem("off_hand") == null) || event.player.getHeldItem("main_hand") == "kubejs:nether_data") {
        let pos = event.block.getPos()
        let dim = event.getLevel().getDimension()
        if (dim == "kubejs:ancient_world" || dim == "minecraft:the_nether") {
            let dimdata = dim == "kubejs:ancient_world" ? "aw" : "ne"
            event.server.runCommandSilent(`execute in ${event.player.persistentData.getString(`dim_${dimdata}`)} as ${event.player.getName().getString()} run tp ${event.player.persistentData.getDouble(`pos_${dimdata}_x`)} ${event.player.persistentData.getDouble(`pos_${dimdata}_y`)} ${event.player.persistentData.getDouble(`pos_${dimdata}_z`)}`)
        } else {
            if (event.level.getBlockState(pos.offset(1, 0, 0)).getBlock().getId() == "gtceu:steel_block" && event.level.getBlockState(pos.offset(-1, 0, 0)).getBlock().getId() == "gtceu:steel_block" && event.level.getBlockState(pos.offset(0, 0, 1)).getBlock().getId() == "gtceu:steel_block" && event.level.getBlockState(pos.offset(0, 0, -1)).getBlock().getId() == "gtceu:steel_block" && event.level.getBlockState(pos.offset(1, 0, 1)).getBlock().getId() == "minecraft:diamond_block" && event.level.getBlockState(pos.offset(1, 0, -1)).getBlock().getId() == "minecraft:diamond_block" && event.level.getBlockState(pos.offset(-1, 0, 1)).getBlock().getId() == "minecraft:diamond_block" && event.level.getBlockState(pos.offset(-1, 0, -1)).getBlock().getId() == "minecraft:diamond_block") {
                event.player.persistentData.putDouble("pos_aw_x", event.player.x)
                event.player.persistentData.putDouble("pos_aw_y", event.player.y)
                event.player.persistentData.putDouble("pos_aw_z", event.player.z)
                event.player.persistentData.putString("dim_aw", dim)
                event.server.runCommandSilent(`execute in kubejs:ancient_world as ${event.player.getName().getString()} run tp ${0} ${128} ${0}`)
                event.server.runCommandSilent(`execute in kubejs:ancient_world run fill ${0} ${127} ${0} ${0} ${127} ${0} kubejs:reactor_core`)
            } else if (event.level.getBlockState(pos.offset(1, 0, 0)).getBlock().getId() == "minecraft:gold_block" && event.level.getBlockState(pos.offset(-1, 0, 0)).getBlock().getId() == "minecraft:gold_block" && event.level.getBlockState(pos.offset(0, 0, 1)).getBlock().getId() == "minecraft:gold_block" && event.level.getBlockState(pos.offset(0, 0, -1)).getBlock().getId() == "minecraft:gold_block" && event.level.getBlockState(pos.offset(1, 0, 1)).getBlock().getId() == "minecraft:emerald_block" && event.level.getBlockState(pos.offset(1, 0, -1)).getBlock().getId() == "minecraft:emerald_block" && event.level.getBlockState(pos.offset(-1, 0, 1)).getBlock().getId() == "minecraft:emerald_block" && event.level.getBlockState(pos.offset(-1, 0, -1)).getBlock().getId() == "minecraft:emerald_block") {
                if (event.player.getHeldItem("main_hand") == "kubejs:nether_data") {
                    event.player.persistentData.putDouble("pos_ne_x", event.player.x)
                    event.player.persistentData.putDouble("pos_ne_y", event.player.y)
                    event.player.persistentData.putDouble("pos_ne_z", event.player.z)
                    event.player.persistentData.putString("dim_ne", dim)
                    event.server.runCommandSilent(`execute in minecraft:the_nether as ${event.player.getName().getString()} run tp ${0} ${128} ${0}`)
                    event.server.runCommandSilent(`execute in minecraft:the_nether run fill ${0} ${127} ${0} ${0} ${127} ${0} kubejs:reactor_core`)
                } else {
                    event.player.setStatusMessage("需要手持数据")
                }
            } else {
                event.player.setStatusMessage("结构错误")
            }
        }
    }
})

BlockEvents.broken("kubejs:create_aggregatione_core", event => {
    let command_block = event.getLevel().getBlock(event.block.x, event.block.y + 1, event.block.z)
    if (command_block == "minecraft:command_block" || command_block == "minecraft:chain_command_block" || command_block == "minecraft:repeating_command_block") {
        event.getServer().runCommandSilent(`execute at ${event.player.getName().getString()} run fill ${event.block.x} ${event.block.y + 1} ${event.block.z} ${event.block.x} ${event.block.y + 1} ${event.block.z} minecraft:air`)
    }
})

function getEyePositionPos(level, player) {
    return level.clip(new $ClipContext(player.getEyePosition(1), player.getEyePosition(1).add(player.getViewVector(1).scale(5)), $ClipContext.Block.OUTLINE, $ClipContext.Fluid.NONE, player)).getBlockPos()
}

function getEyePositionRecipeLogic(level, player) {
    return $GTCapabilityHelper.getRecipeLogic(level, getEyePositionPos(level, player), null)
}

ItemEvents.rightClicked("kubejs:time_twister_wireless", event => {
    if (!event.player.isFake() && event.player.isSteppingCarefully()) {
        var recipeLogic = getEyePositionRecipeLogic(event.level, event.player)
        if (recipeLogic != null && recipeLogic.isWorking()) {
            let reducedDuration = (recipeLogic.getDuration() - recipeLogic.getProgress()) * 0.5
            let eu = 8 * reducedDuration * $RecipeHelper.getInputEUt(recipeLogic.getLastRecipe())
            if (eu > 0 && $WirelessEnergyManager.addEUToGlobalEnergyMap(event.player.uuid, $BigInteger.valueOf(- eu))) {
                recipeLogic.setProgress(recipeLogic.getProgress() + reducedDuration)
                event.player.setStatusMessage("消耗了 " + $FormattingUtil.formatNumbers(eu) + " EU，使机器运行时间减少了 " + reducedDuration + " tick")
            }
        }
    }
})

function consume(player, hand) {
    player.damageHeldItem()
    let tt = player.persistentData.getInt("tt")
    player.persistentData.putInt("tt", tt - 1)
    if (tt > 0) {
        player.setStatusMessage("可使用次数：" + (tt - 1))
    } else {
        player.addItemCooldown(player.getHeldItem(hand), 20)
    }
}

ItemEvents.rightClicked("kubejs:time_twister", event => {
    if (!event.player.isFake() && event.player.isSteppingCarefully()) {
        var recipeLogic = getEyePositionRecipeLogic(event.level, event.player)
        if (recipeLogic != null && recipeLogic.isWorking()) {
            if (event.player.isCreative()) {
                recipeLogic.setProgress(recipeLogic.getDuration() - recipeLogic.getProgress() - 20)
            } else {
                if (recipeLogic.getMachine().self().getRecipeType() == GTRecipeTypes.PRIMITIVE_BLAST_FURNACE_RECIPES) {
                    recipeLogic.setProgress(recipeLogic.getProgress() + 100)
                    consume(event.player, event.hand)
                } else if (recipeLogic.getMachine().self().getTier() < 4 && $RecipeHelper.getInputEUt(recipeLogic.getLastRecipe()) > 0) {
                    if (recipeLogic.getDuration() > 400) {
                        recipeLogic.setProgress(recipeLogic.getProgress() + (4 - recipeLogic.getMachine().self().getTier()) * 40)
                        consume(event.player, event.hand)
                    } else if (recipeLogic.getDuration() > 200) {
                        recipeLogic.setProgress(recipeLogic.getProgress() + (4 - recipeLogic.getMachine().self().getTier()) * 20)
                        consume(event.player, event.hand)
                    } else if (recipeLogic.getDuration() > 40) {
                        recipeLogic.setProgress(recipeLogic.getProgress() + (4 - recipeLogic.getMachine().self().getTier()) * 10)
                        consume(event.player, event.hand)
                    }
                }
            }
        }
    }
})

ItemEvents.rightClicked("kubejs:command_wand", event => {
    let name = event.player.getName().getString()
    let pos = getEyePositionPos(event.level, event.player)
    let block = event.level.getBlock(pos.x, pos.y, pos.z)
    if (block == "kubejs:create_aggregatione_core" && event.level.getBlock(pos.x, pos.y + 1, pos.z) == "minecraft:air") {
        if (event.player.getHeldItem("off_hand") == "minecraft:command_block") {
            event.player.offHandItem.count--
            event.getServer().runCommandSilent(`execute at ${name} run fill ${pos.x} ${pos.y + 1} ${pos.z} ${pos.x} ${pos.y + 1} ${pos.z} minecraft:command_block`)
        }
        if (event.player.getHeldItem("off_hand") == "minecraft:chain_command_block") {
            event.player.offHandItem.count--
            event.getServer().runCommandSilent(`execute at ${name} run fill ${pos.x} ${pos.y + 1} ${pos.z} ${pos.x} ${pos.y + 1} ${pos.z} minecraft:chain_command_block`)
        }
        if (event.player.getHeldItem("off_hand") == "minecraft:repeating_command_block") {
            event.player.offHandItem.count--
            event.getServer().runCommandSilent(`execute at ${name} run fill ${pos.x} ${pos.y + 1} ${pos.z} ${pos.x} ${pos.y + 1} ${pos.z} minecraft:repeating_command_block`)
        }
    }
    if (event.player.isSteppingCarefully() && block == "minecraft:command_block") {
        block.set("minecraft:air")
        event.getServer().runCommandSilent(`execute at ${name} run summon minecraft:item ${pos.x} ${block.y} ${pos.z} {PickupDelay:10,Motion:[0.0,0.2,0.0],Item:{id:"minecraft:command_block",Count:1b}}`)
    }
    if (event.player.isSteppingCarefully() && block == "minecraft:chain_command_block") {
        block.set("minecraft:air")
        event.getServer().runCommandSilent(`execute at ${name} run summon minecraft:item ${pos.x} ${block.y} ${pos.z} {PickupDelay:10,Motion:[0.0,0.2,0.0],Item:{id:"minecraft:chain_command_block",Count:1b}}`)
    }
    if (event.player.isSteppingCarefully() && block == "minecraft:repeating_command_block") {
        block.set("minecraft:air")
        event.getServer().runCommandSilent(`execute at ${name} run summon minecraft:item ${pos.x} ${block.y} ${pos.z} {PickupDelay:10,Motion:[0.0,0.2,0.0],Item:{id:"minecraft:repeating_command_block",Count:1b}}`)
    }
})

ItemEvents.firstRightClicked("avaritia:infinity_sword", event => {
    let name = event.player.getName().getString()
    let targetX = 0, targetZ = 0, targetY = 0, xr = 0, yr = 0, index = 0
    function pos(index, xr, yr) {
        targetX = Math.round(event.player.x - (Math.sin(yr) * index * Math.abs(Math.cos(xr))))
        targetZ = Math.round(event.player.z + (Math.cos(yr) * index * Math.abs(Math.cos(xr))))
        targetY = Math.round(event.player.y - Math.sin(xr) * index) + 1
    }
    function rotation() {
        let rotation = event.player.getRotationVector()
        xr = rotation.x * (3.1415926535897932 / 180)
        yr = rotation.y * (3.1415926535897932 / 180)
    }

    if (event.player.isSteppingCarefully()) {
        rotation()
        pos(4, xr, yr)
        let posarray = [targetX, targetY, targetZ]
        event.getServer().runCommandSilent(`execute at ${name} run tp @e[distance=..100,type=item] ${targetX} ${targetY} ${targetZ}`)
        for (index = 3; index < 100; index++) {
            pos(index, xr, yr)
            let entities = event.getLevel().getEntitiesWithin(AABB.of(targetX - 1, targetY - 1, targetZ - 1, targetX + 1, targetY + 1, targetZ + 1))
            for (let entity of entities) {
                if (entity.isLiving()) {
                    entity.teleportTo(posarray[0], posarray[1], posarray[2])
                }
            }
        }
    }
    if (!event.player.isSteppingCarefully()) {
        rotation()
        for (index = 3; index < 100; index++) {
            pos(index, xr, yr)
            event.getServer().runCommandSilent(`execute at ${name} run particle minecraft:end_rod ${targetX} ${targetY} ${targetZ} 0.001 0.001 0.001 0.1 10 force`)
            let entities = event.getLevel().getEntitiesWithin(AABB.of(targetX - 1, targetY - 1, targetZ - 1, targetX + 1, targetY + 1, targetZ + 1))
            for (let entity of entities) {
                if (entity.isLiving()) {
                    entity.attack(event.player.damageSources().source($DamageTypes.MAGIC, event.player), 10000)
                }
            }
        }
    }
})

ItemEvents.firstRightClicked("kubejs:warped_ender_pearl", event => {
    let name = event.player.getName().getString()
    let pearl = event.player.persistentData.getInt("pearl").toString()
    if (event.player.isSteppingCarefully()) {
        event.player.persistentData.putDouble("posx" + pearl, event.player.x)
        event.player.persistentData.putDouble("posy" + pearl, event.player.y)
        event.player.persistentData.putDouble("posz" + pearl, event.player.z)
        event.player.persistentData.putString("dim_b" + pearl, event.getLevel().getDimension())
        event.getServer().runCommandSilent(`playsound minecraft:entity.enderman.ambient ambient ${name} ${event.player.x} ${event.player.y} ${event.player.z}`)
        event.player.setStatusMessage("坐标已保存至该槽位")
    }
    if (!event.player.isSteppingCarefully()) {
        if (event.player.persistentData.getDouble("posx" + pearl) != null) {
            event.getServer().runCommandSilent(`execute in ${event.player.persistentData.getString("dim_b" + pearl)} run tp ${name} ${event.player.persistentData.getDouble("posx" + pearl)} ${event.player.persistentData.getDouble("posy" + pearl)} ${event.player.persistentData.getDouble("posz" + pearl)}`)
            event.getServer().runCommandSilent(`playsound minecraft:entity.enderman.teleport ambient ${name} ${event.player.x} ${event.player.y} ${event.player.z}`)
        }
    }
})

PlayerEvents.tick(event => {
    if (event.player.age % 20 == 0) {
        event.player.onUpdateAbilities()
        let hfa = event.player.getArmorSlots().toString() == "[1 space_fermium_boots, 1 space_fermium_leggings, 1 space_fermium_chestplate, 1 space_fermium_helmet]"
        let fa = event.player.getArmorSlots().toString() == "[1 fermium_boots, 1 fermium_leggings, 1 fermium_chestplate, 1 fermium_helmet]"
        let ma = event.player.getArmorSlots().toString() == "[1 magnetohydrodynamicallyconstrainedstarmatter_boots, 1 magnetohydrodynamicallyconstrainedstarmatter_leggings, 1 magnetohydrodynamicallyconstrainedstarmatter_chestplate, 1 magnetohydrodynamicallyconstrainedstarmatter_helmet]"
        let name = event.player.getName().getString()
        if (event.player.getLevel().getDimension() == "kubejs:create") {
            if (!ma) {
                event.player.getServer().runCommandSilent(`execute in minecraft:overworld as ${name} run tp 0 100 0`)
                event.player.kill()
            }
            event.getServer().runCommandSilent(`execute at ${name} run kill @e[distance=..100,name=!${name},type=!item]`)
        }
        if (ma || fa || hfa) {
            event.player.potionEffects.add("minecraft:saturation", 200, 0, false, false)
            if (event.player.persistentData.getBoolean("nv")) {
                event.player.potionEffects.add("minecraft:night_vision", 300, 0, false, false)
            }
            if (!event.player.abilities.mayfly) {
                event.player.abilities.mayfly = true
                event.player.persistentData.putInt("fly", 1)
                event.player.persistentData.putInt("fspeed", 1)
                event.player.persistentData.putBoolean("nv", false)
            }
        } else if (event.player.persistentData.getInt("fly") == 1) {
            event.player.abilities.mayfly = false
            event.player.persistentData.putInt("fly", 0)
            event.player.abilities.setFlyingSpeed(0.05)
            event.player.persistentData.putInt("fspeed", 1)
        }
        let tt = event.player.persistentData.getInt("tt")
        let tti = event.player.getHeldItem("main_hand") == "kubejs:time_twister"
        if (tt > 20) {
            if (tti) {
                event.player.setStatusMessage("可使用次数：" + 20)
            }
        } else {
            event.player.persistentData.putInt("tt", tt + 1)
            if (tti) {
                event.player.setStatusMessage("可使用次数：" + (tt + 1))
            }
        }
    }
})

function flyspeed(player, max) {
    if (player.isSteppingCarefully()) {
        player.abilities.setFlyingSpeed(0.05)
        player.setStatusMessage("飞行速度重置")
        player.persistentData.putInt("fspeed", 1)
    } else {
        let speed = player.abilities.getFlyingSpeed()
        let speeda = player.persistentData.getInt("fspeed")
        if (speed < max) {
            player.abilities.setFlyingSpeed(0.05 * speeda)
            player.persistentData.putInt("fspeed", speeda + 1)
            player.setStatusMessage("飞行速度x" + speeda)
        } else {
            player.setStatusMessage("达到极限")
        }
    }
}

NetworkEvents.dataReceived("global.flyingspeedKey.consumeClick", (event) => {
    if (event.player.getArmorSlots().toString() == "[1 magnetohydrodynamicallyconstrainedstarmatter_boots, 1 magnetohydrodynamicallyconstrainedstarmatter_leggings, 1 magnetohydrodynamicallyconstrainedstarmatter_chestplate, 1 magnetohydrodynamicallyconstrainedstarmatter_helmet]") {
        flyspeed(event.player, 0.4)
    }
    if (event.player.getArmorSlots().toString() == "[1 fermium_boots, 1 fermium_leggings, 1 fermium_chestplate, 1 fermium_helmet]") {
        flyspeed(event.player, 0.2)
    }
    if (event.player.getArmorSlots().toString() == "[1 space_fermium_boots, 1 space_fermium_leggings, 1 space_fermium_chestplate, 1 space_fermium_helmet]") {
        flyspeed(event.player, 0.2)
    }
    if (event.player.getArmorSlots().toString() == "[1 infinity_boots, 1 infinity_pants, 1 infinity_chestplate, 1 infinity_helmet]") {
        flyspeed(event.player, 0.3)
    }
})

NetworkEvents.dataReceived("gt.se.st", event => {
    event.player.addTag("spaceelevatorst")
    $MenuHooks.openMenu(event.player, new $PlanetsMenuProvider())
})

NetworkEvents.dataReceived("global.nightvisionKey.consumeClick", event => {
    if (event.player.getArmorSlots().toString() == "[1 fermium_boots, 1 fermium_leggings, 1 fermium_chestplate, 1 fermium_helmet]" || event.player.getArmorSlots().toString() == "[1 magnetohydrodynamicallyconstrainedstarmatter_boots, 1 magnetohydrodynamicallyconstrainedstarmatter_leggings, 1 magnetohydrodynamicallyconstrainedstarmatter_chestplate, 1 magnetohydrodynamicallyconstrainedstarmatter_helmet]" || event.player.getArmorSlots().toString() == "[1 space_fermium_boots, 1 space_fermium_leggings, 1 space_fermium_chestplate, 1 space_fermium_helmet]") {
        if (event.player.persistentData.getBoolean("nv")) {
            event.player.persistentData.putBoolean("nv", false)
            event.player.removeEffect("minecraft:night_vision")
            event.player.setStatusMessage("夜视关闭")
        } else {
            event.player.persistentData.putBoolean("nv", true)
            event.player.setStatusMessage("夜视开启")
        }
    }
})

NetworkEvents.dataReceived("global.pearlKey.consumeClick", event => {
    if (event.player.getHeldItem("main_hand") == "kubejs:warped_ender_pearl") {
        let pearl = event.player.persistentData.getInt("pearl")
        if (event.player.isSteppingCarefully()) {
            if (pearl == 0) {
                event.player.persistentData.putInt("pearl", 10)
                event.player.setStatusMessage("坐标槽位：10")
            } else {
                event.player.persistentData.putInt("pearl", pearl - 1)
                event.player.setStatusMessage("坐标槽位：" + (pearl - 1))
            }
        } else {
            if (pearl == 10) {
                event.player.persistentData.putInt("pearl", 0)
                event.player.setStatusMessage("坐标槽位：0")
            } else {
                event.player.persistentData.putInt("pearl", pearl + 1)
                event.player.setStatusMessage("坐标槽位：" + (pearl + 1))
            }
        }
    }
})

NetworkEvents.dataReceived("global.vajraKey.consumeClick", event => {
    let item = event.player.getHeldItem("main_hand")
    if (item == "gtceu:echoite_vajra") {
        let value = event.player.isSteppingCarefully() ? 10 : 1
        let speed = item.getNbt().getCompound("GT.Tool").getFloat("ToolSpeed")
        if (speed < 100) {
            item.getNbt().getCompound("GT.Tool").putFloat("ToolSpeed", speed + value)
            event.player.setStatusMessage("速度：" + (speed + value))
        } else if (speed < 1000) {
            item.getNbt().getCompound("GT.Tool").putFloat("ToolSpeed", speed + value * 10)
            event.player.setStatusMessage("速度：" + (speed + value * 10))
        } else {
            item.getNbt().getCompound("GT.Tool").putFloat("ToolSpeed", 10)
            event.player.setStatusMessage("速度：10")
        }
    }
})

ItemEvents.firstLeftClicked("gtceu:echoite_vajra", event => {
    if (event.player.isSteppingCarefully() && !event.player.isMiningBlock()) {
        event.item.getNbt().getCompound("GT.Behaviours").getByte("RelocateMinedBlocks") == 1 ? (event.item.getNbt().getCompound("GT.Behaviours").remove("RelocateMinedBlocks"), event.player.setStatusMessage("磁力吸引：关闭")) : (event.item.getNbt().getCompound("GT.Behaviours").putByte("RelocateMinedBlocks", 1), event.player.setStatusMessage("磁力吸引：打开"))
    }
})

EntityEvents.hurt("player", event => {
    if (event.entity.getArmorSlots().toString() == "[1 magnetohydrodynamicallyconstrainedstarmatter_boots, 1 magnetohydrodynamicallyconstrainedstarmatter_leggings, 1 magnetohydrodynamicallyconstrainedstarmatter_chestplate, 1 magnetohydrodynamicallyconstrainedstarmatter_helmet]") {
        event.cancel()
    }
    if ((event.getSource().type().msgId() == "oxygen" || event.getSource().type().msgId() == "drown") && (event.entity.getArmorSlots().toString() == "[1 quarktech_boots, 1 quarktech_leggings, 1 advanced_quarktech_chestplate, 1 quarktech_helmet]" || event.entity.getArmorSlots().toString() == "[1 quarktech_boots, 1 quarktech_leggings, 1 quarktech_chestplate, 1 quarktech_helmet]" || event.player.getArmorSlots().toString() == "[1 space_fermium_boots, 1 space_fermium_leggings, 1 space_fermium_chestplate, 1 space_fermium_helmet]")) {
        event.cancel()
    }
})

BlockEvents.leftClicked("minecraft:bedrock", (event) => {
    if (event.player.getHeldItem("main_hand") == "kubejs:bedrock_destroyer") {
        event.block.set("minecraft:air")
    }
})

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.getInt("pearl") == null) {
        event.player.persistentData.putInt("pearl", 0)
    }
})

BlockEvents.broken("gtceu:active_transformer", event => {
    if ($GTCapabilityHelper.getRecipeLogic(event.level, event.block.pos, null).getMachine().self().isFormed()) {
        let pos = event.block.pos
        let coordinates = [pos.offset(1, 0, 0), pos.offset(-1, 0, 0), pos.offset(0, 0, -1), pos.offset(0, 0, 1), pos.offset(0, 1, 0), pos.offset(0, -1, 0)]
        for (let i in coordinates) {
            if (event.level.getBlock(coordinates[i]) == "gtceu:superconducting_coil") {
                event.getLevel().createExplosion(coordinates[i].x, coordinates[i].y, coordinates[i].z).strength(20).explosionMode("tnt").explode()
            }
        }
    }
})

EntityEvents.spawned("minecraft:bat", event => {
    event.cancel()
})

ServerEvents.entityLootTables(event => {
    event.addEntity("ad_astra:glacian_ram", l => {
        l.addPool(p => {
            p.addItem("kubejs:glacio_spirit").weight(1)
            p.addItem("ad_astra:ice_shard").weight(9)
        })
    })
})