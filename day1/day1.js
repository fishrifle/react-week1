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

const avgAge = users.reduce((sum, u) => sum + u.age, 0) / users.length
console.log("Average age:", avgAge)

const [first, second] = users
const { name: firstName } = first
console.log(firstName)

const newUser = { ...first, city: "Nashville" }
console.log(newUser)

function greet(name) {
    return `Hello ${name}`
}
const greetArrow = (name) => `Hi ${name}`
console.log(greetArrow("Jesse"))

const score = 85
if (score >= 90) console.log("Excellent")
else if (score >= 70) console.log("Good")
else console.log("Needs improvement")

const products = [
    { name: "Shoes", price: 70 },
    { name: "Socks", price: 10 },
    { name: "Hat", price: 25 }
]

const cheap = products.filter(p => p.price < 50)
console.log("Affordable:", cheap)