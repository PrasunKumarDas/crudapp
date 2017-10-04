var faker = require('faker')
function generateUsers(){
var users = [];
for (var id =1; id <= 500 ;id++){
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var email = faker.internet.email();
var avatar = faker.internet.avatar();
users.push({
"id" : id,
"firstName" : firstName,
"lastName" : lastName,
"email" : email,
"avatar" : avatar
})
}
return {"users" : users}
}
module.exports = generateUsers