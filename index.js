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
function destructivelyRemoveFirstKitten(){
  kittens.push()
  return kittens
}
kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name){
  return [...kittens, name]
}
kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name){
  return [name,...kittens]
}
kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}