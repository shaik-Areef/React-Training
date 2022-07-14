var Account = /** @class */ (function () {
    function Account(amount, Name, openingDate) {
        this.amount = amount;
        this.Name = Name;
        this.openingDate = openingDate;
    }
    return Account;
}());
var account1 = new Account(100, "rama", new Date());
console.log("Account Holder Name: " + account1.Name);
console.log(" Ammount : " + account1.amount);
console.log("Opening Date:  " + account1.openingDate);
