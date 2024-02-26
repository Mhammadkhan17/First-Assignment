let magician_name = ["David Copperfield", "Dynamo", "David Blaine", "Criss Angel"]
function show_magician () {
    console.log(magician_name)
}
show_magician();

let makegreat = magician_name
function make_great () {
    magician_name.forEach(item => {
        console.log(`The great "${item}".`)
    });
}
make_great()