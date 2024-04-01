function onInput() {
    if (search.value == "gba") {
        gba.style.display = "flex"
        rpg.style.display = "flex"
        mlp.style.display = "flex"
    } else if (search.value == "GBA") {
        gba.style.display = "flex"
        rpg.style.display = "flex"
        mlp.style.display = "flex"
    } else if (search.value == "game") {
        gba.style.display = "flex"
        rpg.style.display = "flex"
        mlp.style.display = "flex"
    } else if (search.value == "rpg") {
        gba.style.display = "none"
        rpg.style.display = "flex"
        mlp.style.display = "none"
    } else if (search.value == "RPG") {
        gba.style.display = "none"
        rpg.style.display = "flex"
        mlp.style.display = "none"
    } else if (search.value == "MLP") {
        gba.style.display = "none"
        rpg.style.display = "none"
        mlp.style.display = "flex"
    } else if (search.value == "mlp") {
        gba.style.display = "none"
        rpg.style.display = "none"
        mlp.style.display = "flex"
    } else if (search.value == "multi") {
        gba.style.display = "none"
        rpg.style.display = "none"
        mlp.style.display = "flex"
    } else if (search.value == "multiplayer") {
        gba.style.display = "none"
        rpg.style.display = "none"
        mlp.style.display = "flex"
    } else {
        gba.style.display = "none"
        rpg.style.display = "none"
        mlp.style.display = "none"
    }
    return
}