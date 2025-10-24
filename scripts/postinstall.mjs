import * as fs from "fs"
import * as path from "path"

const basePath = process.env.INIT_CWD || process.cwd()
const biomeConfigPath = path.join(basePath, "bimoe.json")
const lefthookPath = path.join(basePath, "lefthook.json")

const biome_config_map = {
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@atolycs/my-npm-config"]
}

const lefthook_config_map = {
  "$schema": "https://json.schemastore.org/lefthook.json",
  "remotes": [
    {
      "git_url": "https://github.com/atolycs/my-npm-config",
      "configs": [
        "lefthook/lefthook.json"
      ]
    }
  ]
}

if (!fs.existsSync(biomeConfigPath)) {
  console.log("==> Installing biome config...")
  fs.writeFileSync(biomeConfigPath, JSON.stringify(biome_config_map, null, 2))
}

if (!fs.existsSync(lefthookPath)) {
  console.log("==> Installing lefthook config...")
  fs.writeFileSync(lefthookPath, JSON.stringify(lefthook_config_map, null, 2))
}
