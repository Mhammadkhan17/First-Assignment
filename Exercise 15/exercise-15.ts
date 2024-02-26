let invitations = ["Asad", "Hamza", "Imran"]
invitations.forEach(item => {
    console.log(`Hey ${item}, I am inviting you to dinner tonight.`)
})
console.log(invitations[2],"can't make it.")
invitations.splice(2,2,"Ahmed");
console.log(invitations)
invitations.forEach(item => {
    console.log(`Hey ${item}, I am inviting you to dinner tonight.`)
})