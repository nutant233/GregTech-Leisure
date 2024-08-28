// priority: 97
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    const $LocalizationUtils = Java.loadClass("com.lowdragmc.lowdraglib.utils.LocalizationUtils")
    const $FormattingUtil = Java.loadClass("com.gregtechceu.gtceu.utils.FormattingUtil")
    const $ICoilType = Java.loadClass("com.gregtechceu.gtceu.api.block.ICoilType")
    const $ArrayList = Java.loadClass("java.util.ArrayList")
    const $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack")
    const $CycleItemStackHandler = Java.loadClass("com.lowdragmc.lowdraglib.utils.CycleItemStackHandler")
    const $I18n = LDLib.isClient() ? Java.loadClass("net.minecraft.client.resources.language.I18n") : null
    const GenerateDisassembly = Java.loadClass("com.gregtechceu.gtceu.data.recipe.GenerateDisassembly")
    const ResearchManager = Java.loadClass("com.gregtechceu.gtceu.utils.ResearchManager")

    event.create("greenhouse")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(3, 3, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    function getSCTier(tier) {
        switch (tier) {
            case 3:
                return $I18n.get("gtceu.tier.ultimate")
            case 2:
                return $I18n.get("gtceu.tier.advanced")
            default:
                return $I18n.get("gtceu.tier.base")
        }
    }

    GTRecipeTypes.register("stellar_forge", "multiblock")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(3, 2, 9, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARC_FURNACE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .addDataInfo(data => {
            if (LDLib.isClient()) return $LocalizationUtils.format("gtceu.recipe.stellar_containment_tier", getSCTier(data.getInt("SCTier")))
        })

    GTRecipeTypes.register("dimensionally_transcendent_plasma_forge", "multiblock")
        .setMaxIOSize(2, 2, 2, 2)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARC_FURNACE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.DTPF)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let temp = data.getInt("ebf_temp")
            let requiredCoil = $ICoilType.getMinRequiredType(temp)
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return $LocalizationUtils.format("gtceu.recipe.coil.tier", (temp > 21600 && temp <= 32000) ? "超级热容" : $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            let items = new $ArrayList()
            let temp = recipe.data.getInt("ebf_temp")
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => {
                let ctemp = coil.getKey().getCoilTemperature()
                if (ctemp == 273) {
                    return temp <= 32000
                } else {
                    return ctemp >= temp
                }
            }).map(coil => new $ItemStack(coil.getValue().get())).toList())
            widgetGroup.addWidget(new SlotWidget(new $CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false))
        })

    event.create("plasma_condenser")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("rare_earth_centrifugal")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 17, 0, 0)
        .setProgressBar(GuiTextures.CENTRIFUGE_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

    event.create("magic_manufacturer")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("sps_crafting")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(3, 1, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("matter_fabricator")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("void_miner")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 4, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("large_void_miner")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("random_ore")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 216, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("void_fluid_drilling_rig")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    event.create("world_data_scanner")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("annihilate_generator")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("hyper_reactor")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("advanced_hyper_reactor")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("large_naquadah_reactor")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMBUSTION)

    event.create("naquadah_reactor")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMBUSTION)

    event.create("rocket_engine")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.JET_ENGINE)

    event.create("cosmos_simulation")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 120, 1, 18)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("space_probe_surface_reception")
        .setEUIO("in")
        .setMaxTooltips(4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("decay_hastener")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("large_recycler")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_RECYCLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)

    event.create("mass_fabricator")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    GTRecipeTypes.register("circuit_assembly_line", "multiblock")
        .setEUIO("in")
        .setMaxIOSize(16, 1, 4, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .onRecipeBuild((recipeBuilder, provider) => {
            GenerateDisassembly.generateDisassembly(recipeBuilder, provider)
        })

    GTRecipeTypes.register("suprachronal_assembly_line", "multiblock")
        .setEUIO("in")
        .setMaxTooltips(4)
        .setMaxIOSize(16, 1, 4, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setHasResearchSlot(true)
        .onRecipeBuild((recipeBuilder, provider) => {
            ResearchManager.createDefaultResearchRecipe(recipeBuilder, provider)
            GenerateDisassembly.generateDisassembly(recipeBuilder, provider)
        })

    GTRecipeTypes.register("precision_assembler", "multiblock")
        .setEUIO("in")
        .setMaxTooltips(4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(4, 1, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .onRecipeBuild((recipeBuilder, provider) => {
            GenerateDisassembly.generateDisassembly(recipeBuilder, provider)
        })

    event.create("space_elevator")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)

    GTRecipeTypes.register("assembler_module", "multiblock")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(16, 1, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        .onRecipeBuild((recipeBuilder, provider) => {
            GenerateDisassembly.generateDisassembly(recipeBuilder, provider)
        })
        .addDataInfo(data => {
            if (LDLib.isClient()) return $LocalizationUtils.format("gtceu.recipe.sepm_tier", $FormattingUtil.formatNumbers(data.getInt("SEPMTier")))
        })

    event.create("miner_module")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("drilling_module")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("fishing_ground")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 24, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)

    event.create("large_infuser")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

    event.create("large_rotary")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("block_conversion")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("incubator")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(6, 1, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("pcb_factory")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    event.create("lava_furnace")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARC_FURNACE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)

    event.create("large_gas_collector")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("aggregation_device")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(9, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("super_particle_collider")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FUSIONLOOP)

    GTRecipeTypes.register("dimensional_focus_engraving_array", "multiblock")
        .setEUIO("in")
        .setMaxTooltips(6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .onRecipeBuild((recipeBuilder, provider) => {
            ResearchManager.createDefaultResearchRecipe(recipeBuilder, provider)
        })

    GTRecipeTypes.LASER_ENGRAVER_RECIPES.onRecipeBuild((recipeBuilder, provider) => {
        let recipe = GTRecipeTypes.get("dimensional_focus_engraving_array").copyFrom(recipeBuilder)
            .duration(recipeBuilder.duration * 0.2)
            .EUt(recipeBuilder.EUt() * 4)
        let value = Math.log10(recipeBuilder.EUt()) / Math.log10(4)
        if (value > 10) {
            recipe.CWUt(value / 4)["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"](Fluid.of("gtceu:euv_photoresist", value / 2).getFluidStack())
        } else {
            recipe["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"](Fluid.of("gtceu:photoresist", value).getFluidStack())
        }
        recipe.save(provider)
    })

    event.create("precision_laser_engraver")
        .setEUIO("in")
        .setMaxTooltips(5)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(9, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)

    event.create("dimensionally_transcendent_mixer")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(9, 1, 6, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)

    event.create("neutron_compressor")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

    event.create("qft")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(18, 1, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("super_computation")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)

    event.create("dragon_egg_copier")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 2, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("door_of_create")
        .setEUIO("in")
        .setMaxTooltips(4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("bedrock_drilling_rig")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)

    event.create("create_aggregation")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    GTRecipeTypes.register("gravitation_shockburst", "multiblock")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
        .onRecipeBuild((recipeBuilder, provider) => {
            ResearchManager.createDefaultResearchRecipe(recipeBuilder, provider)
        })

    event.create("ultimate_material_forge")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 2, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)

    event.create("slaughterhouse")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)

    event.create("dyson_sphere")
        .setEUIO("both")
        .setMaxTooltips(4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("petrochemical_plant")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 2, 12)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("dungeon")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("weather_control")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    GTRecipeTypes.register("distort", "multiblock")
        .setMaxIOSize(9, 9, 9, 9)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return $LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            let items = new $ArrayList()
            let temp = recipe.data.getInt("ebf_temp")
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList())
            widgetGroup.addWidget(new SlotWidget(new $CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false))
        })
        .setMaxTooltips(4)
        .setSound(GTSoundEntries.ARC)

    GTRecipeTypes.register("nano_forge", "multiblock")
        .setMaxIOSize(6, 1, 3, 0)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.nano_forge_tier", $FormattingUtil.formatNumbers(data.getInt("nano_forge_tier")))
        })
        .setSound(GTSoundEntries.SCIENCE)

    GTRecipeTypes.register("fission_reactor", "multiblock")
        .setMaxIOSize(1, 1, 0, 0)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.frheat", $FormattingUtil.formatNumbers(data.getInt("FRheat")))
        })

    GTRecipeTypes.register("fuel_refining", "multiblock")
        .setMaxIOSize(3, 0, 6, 1)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return $LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            let items = new $ArrayList()
            let temp = recipe.data.getInt("ebf_temp")
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList())
            widgetGroup.addWidget(new SlotWidget(new $CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false))
        })
        .setSound(GTSoundEntries.ARC)

    GTRecipeTypes.register("atomic_energy_excitation", "multiblock")
        .setMaxIOSize(3, 0, 6, 2)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return $LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            let items = new $ArrayList()
            let temp = recipe.data.getInt("ebf_temp")
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList())
            widgetGroup.addWidget(new SlotWidget(new $CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false))
        })
        .setSound(GTSoundEntries.ARC)

    GTRecipeTypes.register("component_assembly_line", "multiblock")
        .setMaxIOSize(9, 1, 9, 0)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.ca_tier", GTValues.VN[data.getInt("CATier")])
        })
        .setSound(GTSoundEntries.ASSEMBLER)

    function getGrindball(tier) {
        switch (tier) {
            case 2:
                return $I18n.get("material.gtceu.aluminium")
            default:
                return $I18n.get("material.gtceu.soapstone")
        }
    }

    GTRecipeTypes.register("isa_mill", "multiblock")
        .setMaxIOSize(2, 1, 1, 0)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
        .addDataInfo(data => {
            if (LDLib.isClient()) return $LocalizationUtils.format("gtceu.recipe.grindball", getGrindball(data.getInt("grindball")))
        })

    GTRecipeTypes.register("flotating_beneficiation", "multiblock")
        .setMaxIOSize(2, 0, 1, 1)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

    GTRecipeTypes.register("vacuum_drying", "multiblock")
        .setMaxIOSize(1, 6, 1, 2)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return $LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
})