const config = await Bun.file("./.replit").text();

const parsedConfig = Bun.TOML.parse(config);

console.log(parsedConfig);

const replitJson = {
	$schema: ".schemas/Dotreplit.json",
	...parsedConfig,
};

await Bun.write("./replit.json", JSON.stringify(replitJson, null, 2));
