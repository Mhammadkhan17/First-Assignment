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
console.log("I just found a big table for today's dinner")
invitations.splice(0,0,"Yasir")
invitations.splice(2,0,"Hasan")
invitations.splice(6,0,"Hasnain")
console.log(invitations)
invitations.forEach(item => {
    console.log(`Hey ${item}, I am inviting you to dinner tonight.`)
})