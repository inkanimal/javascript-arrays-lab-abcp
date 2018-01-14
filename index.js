const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
