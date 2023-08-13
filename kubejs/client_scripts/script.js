// priority: 0
onEvent('jei.hide.items', e => {
	e.hide([
		/endless:singularity_.*/
	]);
	e.hide([
		'tconstruct:cobalt_ingot',
		'refinedstorage:creative_storage_disk',
		'refinedstorage:creative_fluid_storage_disk',
		'refinedstorage:silicon',
		'extendedcrafting:handheld_table',
		'steampowered:steel_ingot',
		'steampowered:cast_iron_ingot',
		'steampowered:steel_sheet',
		'steampowered:cast_iron_sheet',
		'steampowered:bronze_sheet',
		'appliedenergistics2:silicon',
		'appliedenergistics2:certus_quartz_dust',
		'appliedenergistics2:nether_quartz_dust',
		'createaddition:diamond_grit',
		'appliedenergistics2:gold_dust',
		'appliedenergistics2:iron_dust',
		'appliedenergistics2:fluix_dust',
		'endless:neutron_compressor',
	]);
})