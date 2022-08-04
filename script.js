var rg;



var rg = new RiGrammar();
rg.addRule('<start>', 'The <n> meows',1);
rg.addRule("<n>", "cat |dog | mouse")
// console.log(rg);

var result = rg.expand();
console.log(result);
document.querySelector('.output').innerHTML = result



