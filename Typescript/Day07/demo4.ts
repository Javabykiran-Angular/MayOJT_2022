// Simple Json Object
// java script object notation
//data is store in key & value format

let obj={
  fname:'Sumit',
  "lname":"Raokhande",
  id:9
}

//u can retrive value in 2 ways
//1 dot operator
//2 square operator

//1 dot operator
console.log(`
  First Name :: ${obj.fname}
  Last Name  :: ${obj.lname}
  Id         :: ${obj.id}
`)

//2 square operator

console.log(`==================================
  First Name :: ${obj["fname"]}
  Last Name  :: ${obj["lname"]}
  Id         :: ${obj['id']}
`)
