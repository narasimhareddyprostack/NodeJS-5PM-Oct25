import jwt from 'jsonwebtoken'

let user_payload={
    "email":"rg@gmail.com",
    "password":"Tp123"
}
let secret_Key="DontTellAnyOne"
let token=jwt.sign(user_payload,secret_Key)
console.log(token)

user_payload=jwt.verify(token,secret_Key)
console.log(user_payload)