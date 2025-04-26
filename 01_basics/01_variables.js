const accountId = 1
let accountEmail = 'abc@gmail.com'
var accountPsswd = 'Abc@123'
accountCity = "America"

//accountId = 2// It is not allowed because we have made accountId as constant using const keyword.

accountEmail = 'pqr@gmail.com'
accountPsswd = 'Pqr@123'
accountCity = 'london'

let accountState;

console.log(accountId);
console.table([ accountEmail, accountId, accountPsswd, accountCity, accountState])
console.log(accountState)
