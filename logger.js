var url = '';

function log(message){
    console.log(message);
}
//module.exports.url1 = url;
module.exports.log = log; // above ojects, url/log function are not accessile outside the module, to make it
// accessible, we need to write code like #line no.7, no need to give same name of module, u can write something
//like module.exports.outputmessage = log; so log function available as outputmessage to other module, so other 
//module call log of this module as/with name outputmessage 
//console.log(module);// this line used to see the module details, in output, under exports{}, u can see what are all
//methods/variable we made it as global/accessible for another module