// Listen to item registry event
onEvent('item.registry', event => {
    event.create('trustworthy:creative_singularity').maxStackSize(16).displayName('§dCreative Singularity').glow(true);
    event.create('trustworthy:alloy_ultimate').displayName('§dUltimate Alloy');
    event.create('trustworthy:unstable_techno_magic_heart').maxStackSize(1).displayName('§dUnstable Heart Techno Magic').glow(true);
    event.create('trustworthy:techno_magic_heart').maxStackSize(1).displayName('§dHeart Techno Magic').glow(true);
    event.create('trustworthy:infinity_core').maxStackSize(8).displayName('§dInfinity Core').glow(true);
    event.create('trustworthy:pulsating_black_hole').displayName('Pulsating Black Hole');
    event.create('trustworthy:custom_singularity').maxStackSize(16).displayName('§cCustom Singularity');
    event.create('trustworthy:ores_singularity').maxStackSize(16).displayName('§3Ores Singularity');
    event.create('trustworthy:vanilla_singularity').maxStackSize(16).displayName('§aVanilla Singularity');
    event.create('trustworthy:terrasteel_stump').displayName('Terrasteel Stump');
    event.create('trustworthy:terrasteel_butt').displayName('Terrasteel Butt');
    event.create('trustworthy:armorplating_ultimate').displayName('Maximale Ultimate Armor Plating');
//Creative casts
    event.create('trustworthy:creative_blank').maxStackSize(1).displayName('§dCreative Blank');
    event.create('trustworthy:creative_broad_axe_head').maxStackSize(1).displayName('§dCreative Broad Axe Head');
    event.create('trustworthy:creative_broad_blade').maxStackSize(1).displayName('§dCreative Broad Blade');
    event.create('trustworthy:creative_coin').maxStackSize(1).displayName('§dCreative Coin');
    event.create('trustworthy:creative_gear').maxStackSize(1).displayName('§dCreative Gear');
    event.create('trustworthy:creative_gem').maxStackSize(1).displayName('§dCreative Gem');
    event.create('trustworthy:creative_hammer_head').maxStackSize(1).displayName('§dCreative Hammer Head');
    event.create('trustworthy:creative_ingot').maxStackSize(1).displayName('§dCreative Ingot');
    event.create('trustworthy:creative_large_plate').maxStackSize(1).displayName('§dCreative Large Plate');
    event.create('trustworthy:creative_nugget').maxStackSize(1).displayName('§dCreative Nugget');
    event.create('trustworthy:creative_pickaxe_head').maxStackSize(1).displayName('§dCreative Pickaxe Head');
    event.create('trustworthy:creative_plate').maxStackSize(1).displayName('§dCreative Plate');
    event.create('trustworthy:creative_repair_kit').maxStackSize(1).displayName('§dCreative Repair Kit');
    event.create('trustworthy:creative_rod').maxStackSize(1).displayName('§dCreative Rod');
    event.create('trustworthy:creative_small_axe_head').maxStackSize(1).displayName('§dCreative Small Axe Hear');
    event.create('trustworthy:creative_small_blade').maxStackSize(1).displayName('§dCreative Small Blade');
    event.create('trustworthy:creative_tool_binding').maxStackSize(1).displayName('§dCreative Tool Binding');
    event.create('trustworthy:creative_tool_handle').maxStackSize(1).displayName('§dCreative Tool Handle');
    event.create('trustworthy:creative_tough_handle').maxStackSize(1).displayName('§dCreative Tough Handle');
    event.create('trustworthy:creative_wire').maxStackSize(1).displayName('§dCreative Wire');
    event.create('trustworthy:creative_body_plate').maxStackSize(1).displayName('§dBody Plate');
    event.create('trustworthy:creative_feet_plate').maxStackSize(1).displayName('§dFeet Plate');
    event.create('trustworthy:creative_head_plate').maxStackSize(1).displayName('§dHead Plate');
    event.create('trustworthy:creative_legs_plate').maxStackSize(1).displayName('§dLegs Plate');
    event.create('trustworthy:creative_mail').maxStackSize(1).displayName('§dMail');
    event.create('trustworthy:perfect_iridium_alloy_enriched_quantum_schematic_core').displayName('Advanced Reinforced Perfect Atomic Plate Enriched With Iridium Alloy Quantum Concentrated Schematic Core');
    event.create('trustworthy:charged_with_atomic_perfect_enriched_iridium_alloy_plate_of_the_awakened_concentrated_schematic_core').displayName('Charged With Atomic Perfect Enriched Iridium Alloy Plate Of The Awakened Concentrated Schematic Core').glow(true);
    event.create('trustworthy:unstable_atomic_perfect_awakened_plate_of_a_chaotic_concentrated_schematic_core').displayName('Unstable Atomic Perfect Awakened Plate Of A Chaotic Concentrated Schematic Core').glow(true);

    event.create('ftbquests:creative_lootbox').displayName('Creative Lootbox');
    event.create('ftbquests:spirit_lootbox').displayName('Spirit Box');
})

onEvent('block.registry', e => {
    e.create('trustworthy:mythic_soil').displayName('§bMythic Soil').material('grass').hardness(0.6);
    e.create('trustworthy:subtanium_crux').displayName('Subtanium Crux');
    e.create('trustworthy:psimetal_block_1x').displayName('Psimetal Block 1x');
    e.create('trustworthy:psimetal_block_2x').displayName('Psimetal Block 2x');
    e.create('trustworthy:psimetal_block_3x').displayName('Psimetal Block 3x');
    e.create('trustworthy:triple_compressed_crafting_table').displayName('Triple Compressed Crafting Table');
})