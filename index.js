// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = function(name){
    cats.push(name)
}
const destructivelyPrependCat = function(name){
    cats.unshift(name)
}
const destructivelyRemoveLastCat = function(){
    cats.splice(-1)
}
const destructivelyRemoveFirstCat = function(){
    cats.shift()
}

const appendCat = function(name){
    return [...cats, name]
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    const newArray = [...cats]
    return newArray.splice(0, newArray.length -1)
}
const removeFirstCat = function(){
    const secondArray = [...cats]
    return secondArray.splice(1)
}