const fs = require("fs");
const path = "./cache.json";

function saveCache(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function readCache() {
  if (!fs.existsSync(path)) return null;
  return JSON.parse(fs.readFileSync(path));
}

module.exports = { saveCache, readCache };
