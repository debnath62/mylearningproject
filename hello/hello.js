const x= require("underscore")
function loDashTail(){
    const t= x.tail([1,2,3,4,5,6,7,8,9,10])
    console.log(t)
}
function lodashUnion(){
    const u=x.union([["horror","shining"],["drama","titanic"],["rrr","bahubali"],["rrr","bahubali"]])
    console.log(u)

}

 module.exports.loDashTail=loDashTail
module.exports.lodashUnion=lodashUnion