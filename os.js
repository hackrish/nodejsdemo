const os=require('os');
var totalmem1 = os.totalmem;
var type = os.platform;
var arch = os.arch;
console.log(totalmem1);
console.log(type);
console.log(arch)
