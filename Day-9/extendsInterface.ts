interface Person {
    age: number,
    Name: string
}

interface Musician extends Person {
    instrument: string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.Name = "kamal"
drummer.instrument = "Drums"
console.log("Name:  " + drummer.Name);
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);