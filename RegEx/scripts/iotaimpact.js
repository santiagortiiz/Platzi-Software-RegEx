let reg = new RegExp('\[[\w]+\]')
let text = "fgd gf23[g[dsf32]er[23]323dsf"
let match = text.matchAll(reg)

console.log(match)


let result = text.replace(/\[([\w]+)\]/, 'SLASH')
console.log(result)