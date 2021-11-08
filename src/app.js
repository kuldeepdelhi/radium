const obj = require('./logger')
const helperObj = require('./util/helper')
const formatterobj = require('../validator/formatter')
const obj1 = require('underscore')
const obj2 = require('lodash')

function mainfunction() {
    console.log('this is my main function')
}
obj.log('module')
obj.welcome()
console.log('the endpoint of the logging system is '+obj.endpoint)
console.log('------------------------------')
helperObj.printDate()
helperObj.printMonth()
helperObj.getBatchInfo()
console.log('------------------------------')
formatterobj.trimInput()
formatterobj.changetoLowerCase()
formatterobj.changetoUpperCase()
console.log('------------------------------')
//console.log('the endpoint of the logging system is '+obj.endpoint)
console.log(obj1.first(["apple","orange"]))
console.log(obj1.first(["apple","orange"],21))
console.log(obj1.last(["apple","orange"]))
console.log(obj1.last(["apple","orange","mango"],2))
console.log(obj2.chunk(['jan','feb','mar','april','may','june','jul','aug','sep','oct','nov','dec'],3))
console.log(obj2.tail([1,3,5,7,9,11,13,15,17,19]));
console.log(obj2.union([2,3,4,5,6],[3,4],[1,2,3,4]));
console.log(obj2.fromPairs(
    [
      //  [“horror”, "the shinning"],
       ["horror", "the shinning"],
      ["drama", "titanic"],
        ["thriller", "shutterisland"],
        ["fantasy", "penslabyrinth"]
    ]
    ))