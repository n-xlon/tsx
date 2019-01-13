interface Person {
  name: string,
  addr?: string,
  male: boolean,
  age: number
}

class User {
  discrible: string
  constructor (public name: string, public age: number, public addr: string) {
    this.discrible = `My name is ${name} and I'm age is ${age}, welcome my home! My house's address is ${addr}.`
  }
  welcomeWords (who: string) {
    if (who === 'my') {
      return this.discrible
    } else {
      return "I known't you"
    }
  }
}

function getName (person: any) {
  return person.name
}

export {
  User,
  getName
}

