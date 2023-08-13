onEvent("item.tooltip", (event) => {
    event.add(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(sword|shovel|(pick)?axe|hoe)/, [
        Text.red("Disabled"),
    ]);
});