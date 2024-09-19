ServerEvents.recipes((event) => {
    event.remove({ id: "minecraft:double_compressed_crafting_table" })
    event.remove({ id: "minecraft:compressed_crafting_table" })
    event.remove({ id: "minecraft:crystal_matrix" })
    event.remove({ id: "minecraft:neutron_pile" })
    event.remove({ id: "minecraft:neutron_pile_from_ingots" })
    event.remove({ id: "minecraft:neutron_ingot_from_nuggets" })
    event.remove({ id: "minecraft:neutron_ingot_from_neutron_block" })
    event.remove({ id: "minecraft:neutron_nugget" })
    event.remove({ id: "minecraft:neutron" })
    event.remove({ id: "avaritia:diamond_lattice" })
    event.remove({ id: "avaritia:extreme_crafting_table" })

    event.custom({
        "type": "avaritia:shaped_extreme_craft",
        "category": "misc",
        "pattern": [
            "J  ACA  J",
            "   ADA   ",
            "  ABABA  ",
            " ABBBBBA ",
            "AEABFBAGA",
            " ABBBBBA ",
            "  ABABA  ",
            " AHA AIA ",
            "J A   A J"
        ],
        "key": {
            "A": {
                "item": "kubejs:fishbig_fabric"
            },
            "B": {
                "item": "kubejs:fishbig_frame"
            },
            "C": {
                "item": "kubejs:fishbig_hair"
            },
            "D": {
                "item": "kubejs:fishbig_hade"
            },
            "E": {
                "item": "kubejs:fishbig_lhand"
            },
            "F": {
                "item": "kubejs:fishbig_body"
            },
            "G": {
                "item": "kubejs:fishbig_rhand"
            },
            "H": {
                "item": "kubejs:fishbig_lleg"
            },
            "I": {
                "item": "kubejs:fishbig_rleg"
            },
            "J": {
                "item": "avaritia:singularity"
            }
        },
        "result": {
            "item": "expatternprovider:fishbig"
        },
        "show_notification": true
    })
})