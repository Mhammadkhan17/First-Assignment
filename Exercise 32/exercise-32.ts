let current_users  = ["Yasir", "Ahmed", "Asad", "Usama", "Taha"];
let new_users = ["taha", "Saad", "Anas", "Hamza", "ahmed"];

for (let new_user of new_users) {
    let username_exists = current_users.some(users => users.toLowerCase() === new_user.toLowerCase());
    if (username_exists) {
        console.log(`he username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`username '${new_user}' is available.`);
    }
}
