let magician_name = ["David Copperfield", "Dynamo", "David Blaine", "Criss Angel"];

function show_magician(magician_name) {
    console.log(magician_name);
}

function make_great() {
    let greatMagicians = magician_name.map(magician => `The Great "${magician}"`);
    return greatMagicians;
}

let original_magician = magician_name.slice();
let greatMagicians = make_great(original_magician);

show_magician(original_magician);
show_magician(greatMagicians);