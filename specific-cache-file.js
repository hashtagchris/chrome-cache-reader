const os = require('os')
const fs = require('fs/promises')

const { ChromeCacheFile } = require('./index')

async function main() {
  const cachePath = `${ os.homedir() }/Library/Caches/Google/Chrome/Default/Cache/Cache_Data`;

  const cacheFilePath = `${cachePath}/8107ddde5c88894a_0`

  const buf = await fs.readFile(cacheFilePath)
  const cacheFile = new ChromeCacheFile(cacheFilePath, buf)
  console.log(`Filename:`, cacheFile.filename)
  console.log(`Url:`, cacheFile.url)
  console.log(`Content-type:`, cacheFile.headers['content-type'])
  console.log(`Headers:`, cacheFile.headers)
}

main()
