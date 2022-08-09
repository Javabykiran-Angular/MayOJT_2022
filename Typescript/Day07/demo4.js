// Simple Json Object
// java script object notation
//data is store in key & value format
var obj = {
    fname: 'Sumit',
    "lname": "Raokhande",
    id: 9
};
//u can retrive value in 2 ways
//1 dot operator
//2 square operator
//1 dot operator
console.log("\n  First Name :: ".concat(obj.fname, "\n  Last Name  :: ").concat(obj.lname, "\n  Id         :: ").concat(obj.id, "\n"));
//2 square operator
console.log("==================================\n  First Name :: ".concat(obj["fname"], "\n  Last Name  :: ").concat(obj["lname"], "\n  Id         :: ").concat(obj['id'], "\n"));
