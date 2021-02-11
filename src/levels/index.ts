import fs from 'fs'

const files = fs.readFileSync('.')

console.log({ files })