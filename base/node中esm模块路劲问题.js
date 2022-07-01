import { cwd } from 'process'
import { parse, dirname } from 'path'

console.log(cwd())
console.log(import.meta.url)
console.log(dirname(import.meta.url))
console.log(parse(import.meta.url))