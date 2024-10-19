ServerEvents.recipes((event) => {
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
                "item": "gtlcore:fishbig_fabric"
            },
            "B": {
                "item": "gtlcore:fishbig_frame"
            },
            "C": {
                "item": "gtlcore:fishbig_hair"
            },
            "D": {
                "item": "gtlcore:fishbig_hade"
            },
            "E": {
                "item": "gtlcore:fishbig_lhand"
            },
            "F": {
                "item": "gtlcore:fishbig_body"
            },
            "G": {
                "item": "gtlcore:fishbig_rhand"
            },
            "H": {
                "item": "gtlcore:fishbig_lleg"
            },
            "I": {
                "item": "gtlcore:fishbig_rleg"
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