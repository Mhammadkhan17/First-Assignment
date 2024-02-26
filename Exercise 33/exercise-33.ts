let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let rest_of_num = "th";
    if (number === 1) {
        rest_of_num = "st";
    } else if (number === 2) {
        rest_of_num = "nd";
    } else if (number === 3) {
        rest_of_num = "rd";
    }
    console.log(`${number}${rest_of_num}`);
}
