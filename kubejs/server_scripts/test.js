ServerEvents.recipes(event => {
    event.recipes.gtceu.distort("1")
        .itemInputs("gtceu:steel_dust")
        .itemOutputs("gtceu:damascus_steel_dust")
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(10000)
})