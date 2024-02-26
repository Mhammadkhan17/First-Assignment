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
console.log("I can only invite only 2 people.")
let x = invitations.pop()
console.log(`I am sorry ${x}, I can't have you tonight.`)
let x2 = invitations.pop()
console.log(`I am sorry ${x2}, I can't have you tonight.`)
let x3 = invitations.pop()
console.log(`I am sorry ${x3}, I can't have you tonight.`)
let x4 = invitations.pop()
console.log(`I am sorry ${x4}, I can't have you tonight.`)
console.log(invitations)
invitations.forEach(item => {
    console.log(`Hey ${item}, I am inviting you to dinner tonight.`)
})
console.log(invitations)
let left_people = invitations.length
console.log(`I am inviting the remaining ${left_people} people.`)