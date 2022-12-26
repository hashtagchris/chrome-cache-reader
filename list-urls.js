const os = require('os')
const { ChromeCacheReader } = require('./index')

async function main() {
  const options = {
    databasePath: './database',
    cachePath: `${ os.homedir() }/Library/Caches/Google/Chrome/Default/Cache/Cache_Data`,
  }
  const reader = new ChromeCacheReader(options)

  await reader.update(options)

  // console.log(reader.db)

  for await (const [key, value] of reader.db.iterator({})) {
    if (key.includes("nodejs.org")) {
      console.log(`${key} ${value.contentType} ${value.bytes} bytes`)
    }
  }
}
main()
