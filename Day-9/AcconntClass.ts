class Account {
    amount: number;
    Name: string;
    openingDate: Date;
    constructor(amount: number,
        Name: string,
        openingDate: Date) {
        this.amount = amount
        this.Name = Name
        this.openingDate = openingDate

    }
}

const account1: Account = new Account(100, "rama", new Date())

console.log("Account Holder Name: " + account1.Name);
console.log(" Ammount : " + account1.amount);
console.log("Opening Date:  " + account1.openingDate);
