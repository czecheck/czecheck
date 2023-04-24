const fs = require('fs')
const path = require('path')

const srcDirPath = path.join(__dirname, 'src')

fs.readdir(srcDirPath, (err, files) => {
  if (err) {
    console.error('Error while reading directory:', err)
    return
  }

  const indexContent = files.reduce((content, file) => {
    if (!fs.statSync(path.join(srcDirPath, file)).isFile()) {
      return content
    }

    const fileName = path.parse(file).name

    if (fileName.startsWith('_') || fileName === 'index') {
      return content
    }

    return (
      content +
      `export { default as ${fileName} } from './${fileName}.js'` +
      '\n'
    )
  }, '')

  fs.writeFile(path.join(srcDirPath, 'index.ts'), indexContent, (err) => {
    if (err) {
      console.error('Error while writing file:', err)
    }
  })
})
