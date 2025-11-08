    import bcrypt from 'bcrypt'
    let user={
        "email":"rahul@gmail.com",
        "mobile":"9591619191",
        "cc":"4142515261627172",
        "pwd":"knr9591619191"
    }
    let salt = bcrypt.genSaltSync(10)
    let new_pwd=bcrypt.hashSync(user.pwd,salt)
    console.log(user.pwd)
    console.log(new_pwd)
    let result=bcrypt.compareSync("IloveInida",new_pwd)
    console.log(result)
    if(result){
        console.log("Login Success")
    }
    else{
        console.log("Login Failed")
    }