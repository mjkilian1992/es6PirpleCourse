function Man(name){
    this.name = name;
}

function isMortal(obj){
    if (obj instanceof Man){
        // All men are mortal
        return true;
    }
    // Could be other types of mortal but they are beyond the scope
    return false;
}

socrates = new Man('Socrates');

let mortalOutput = '';
if (isMortal(socrates)) {
    mortalOutput = 'mortal';
} else {
    mortalOutput = 'not mortal';
}
console.log(`Socrates is ${mortalOutput}`);


