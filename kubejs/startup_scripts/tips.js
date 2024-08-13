ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemTooltipEvent", event => {
    if (!LDLib.isClient()) return
    const TextUtil = Java.loadClass("com.gregtechceu.gtceu.utils.TextUtil")
    function addfull_colortooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.full_color(text)))
    }
    function adddark_purplish_redtooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.dark_purplish_red(text)))
    }
    function addwhite_bluetooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.white_blue(text)))
    }
    function addpurplish_redtooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.purplish_red(text)))
    }
    function addgoldentooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.golden(text)))
    }
    function adddark_greentooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.dark_green(text)))
    }
    function addtooltip(text) {
        event.getToolTip().add(Component.literal("§7" + text))
    }
    function unknown() {
        addtooltip("普通的设备无法使用它")
        event.getToolTip().add(Component.literal("§2等级-").append(Component.literal(TextUtil.white_blue("未知"))))
    }
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"]
    tiers.forEach((suprachronal) => {
        if (event.getItemStack().getId() == "kubejs:suprachronal_" + suprachronal) {
            addtooltip("运行在已知时空之外")
            addwhite_bluetooltip(suprachronal.toUpperCase() + "级电路")
        }
    })
    tiers.slice(0, 12).forEach((magneto_resonatic) => {
        if (event.getItemStack().getId() == "kubejs:circuit_resonatic_" + magneto_resonatic) {
            addtooltip("§d" + magneto_resonatic.toUpperCase() + "级电路")
        }
    })
    switch (event.getItemStack().getId()) {
        case "gtceu:dimensionally_transcendent_dirt_forge":
            addfull_colortooltip("原始人的第一个巨构")
            break
        case "gtceu:door_of_create":
            addwhite_bluetooltip("登神之路为你打开")
            break
        case "kubejs:create_ultimate_battery":
            addtooltip("能凭空产生能量")
            unknown()
            break
        case "kubejs:suprachronal_mainframe_complex":
            addtooltip("能凭空产生算力")
            unknown()
            break
        case "kubejs:supracausal_mainframe":
            addtooltip("万物归一者，原初的神迹")
            addfull_colortooltip("MAX级电路")
            break
        case "kubejs:supracausal_computer":
            addtooltip("超越时间之影")
            addfull_colortooltip("OpV级电路")
            break
        case "kubejs:supracausal_assembly":
            addtooltip("跨过真理之门前的宏伟障壁")
            addfull_colortooltip("UXV级电路")
            break
        case "kubejs:supracausal_processor":
            addtooltip("宇宙的法则涌现于此")
            addfull_colortooltip("UIV级电路")
            break
        case "kubejs:cosmic_assembly":
            addtooltip("于握揽微微转动")
            adddark_purplish_redtooltip("UIV级电路")
            break
        case "kubejs:cosmic_computer":
            addtooltip("密度趋近于奇点的小东西")
            adddark_purplish_redtooltip("UXV级电路")
            break
        case "kubejs:cosmic_mainframe":
            addtooltip("模拟一切，分析一切，理解一切")
            adddark_purplish_redtooltip("OpV级电路")
            break
        case "kubejs:cosmic_processor":
            addtooltip("手握星辰")
            adddark_purplish_redtooltip("UEV级电路")
            break
        case "kubejs:exotic_assembly":
            addtooltip("量子随机游走")
            addpurplish_redtooltip("UEV级电路")
            break
        case "kubejs:exotic_computer":
            addtooltip("以自旋控制一切")
            addpurplish_redtooltip("UIV级电路")
            break
        case "kubejs:exotic_mainframe":
            addtooltip("来自未来的电路")
            addpurplish_redtooltip("UXV级电路")
            break
        case "kubejs:exotic_processor":
            addtooltip("超级磁性半导体电路")
            addpurplish_redtooltip("UHV级电路")
            break
        case "kubejs:optical_assembly":
            addtooltip("光子涌流")
            addgoldentooltip("UHV级电路")
            break
        case "kubejs:optical_computer":
            addtooltip("超大规模计算数据支持")
            addgoldentooltip("UEV级电路")
            break
        case "kubejs:optical_mainframe":
            addtooltip("计算速度无限逼近于光速")
            addgoldentooltip("UIV级电路")
            break
        case "kubejs:optical_processor":
            addtooltip("超高效光电子载运")
            addgoldentooltip("UV级电路")
            break
        case "kubejs:bioware_assembly":
            addtooltip("似乎能听到窃窃私语")
            adddark_greentooltip("UV级电路")
            break
        case "kubejs:bioware_computer":
            addtooltip("金属之间布满了黏菌")
            adddark_greentooltip("UHV级电路")
            break
        case "kubejs:bioware_mainframe":
            addtooltip("菌群意识网络")
            adddark_greentooltip("UEV级电路")
            break
        case "kubejs:bioware_processor":
            addtooltip("粘稠的有机浆液附着于表面")
            adddark_greentooltip("ZPM级电路")
    }
})