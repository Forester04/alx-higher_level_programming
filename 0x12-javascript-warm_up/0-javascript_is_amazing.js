const myArg = prompt('Enter argument: ');
if((myArg.length === 0)){
    console.log('No argument');
} else if(myArg.length === 1) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}