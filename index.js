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
kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}
kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten(name){
  kittens.push(name)
  return kittens
}
kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name){
  return kittens[...kittens, name]
}
kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name){

}
