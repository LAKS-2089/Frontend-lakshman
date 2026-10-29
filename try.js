
let user={name:"las",AGE:45,CITY:"CHENNAI"}
try{
//  let storage =JSON.parse(user)
// console.log(storage)
 let users=JSON.stringify(user,null,3)
  console.log(users)
}
catch (error){
    console.log("error:",error.message)

}
finally{
    console.log("finily")
}



