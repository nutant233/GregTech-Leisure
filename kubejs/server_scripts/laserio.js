ServerEvents.recipes(event => {
    event.forEachRecipe({ mod: "laserio", not: [{ output: "laserio:laser_wrench" }, { output: "laserio:card_holder" }, { output: "laserio:card_cloner" }] }, recipe => {
        if (recipe.getOriginalRecipeResult().getItem().getId() != recipe.getOriginalRecipeIngredients()[0].getItemIds()[0]) {
            recipe.getOriginalRecipeResult().getItem().maxStackSize = 64
            recipe.getOriginalRecipeResult().setCount(64)
        }
    })
})
