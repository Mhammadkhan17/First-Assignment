let usernames = ["admin", "Asad", "Yasir", "Moiz", "hamza"];
for (let only_admin of usernames) {
    if ( only_admin === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${only_admin}, thank you for logging in again.`);
    }
}