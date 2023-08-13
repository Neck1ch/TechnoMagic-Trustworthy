/** This function is called when mod is being constructed */
function init() {
	panel()
		.name("subtanium")
		.height(8 / 16.0)
		.generation("" + (1024000))
		.capacity("" + (4096000000))
		.transfer("" + (4096000))
	.buildAndRegister()
		.langBuilder()
			.put("en_us", "Subtanium Solar Panel")
			.put("ru_ru", "Субтаниумовая Солнечная Панель")
			.build();
			
	panel()
		.name("infinity")
		.height(8 / 16.0)
		.generation("" + (65536000))
		.capacity("" + (262144000000))
		.transfer("" + (262144000))
	.buildAndRegister()
		.langBuilder()
			.put("en_us", "Infinity Solar Panel")
			.put("ru_ru", "Бесконечная Солнечная Панель")
			.build();
}