const x = require('./methods');
let x2 = x.joinArgs.returnType("hi",134,["wow"],{
    LookForType: ["string","number","array"]
});
console.log(x2)
console.log(x.joinArgs.matchString("i","hel i",{
    SearchString: 'i'
}))