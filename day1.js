let name = "Jesse"
const country = "USA"
name= "Luna"
console.log(`$aa{name} lives in ${country}`)

const users = [
    { name: "Luna", age: 24 },
    { name: "Ray", age: 30 },
    {name: "Sky", age: 28 }
]
console.log(users[1].name)

const ages = users.map(u => u.age)
console.log("All ages:", ages)

const adults = users.filter(u => u.age > 25)
console.log("Adults:", adults)


    

