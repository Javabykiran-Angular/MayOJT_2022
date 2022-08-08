//array destructor/de-reference
var a = [2, 85, 45, 77];
var t1 = a[0], t2 = a[1], t3 = a[2], t4 = a[3];
// console.log(`
//   t1=> ${t1}
//   t2=> ${t2}
//   t3=> ${t3}
//   t4=> ${t4}
// `);
var g1 = a[0], g3 = a[2], g4 = a[3];
// console.log(`
//   g1=> ${g1}
//   g3=> ${g3}
//   g4=> ${g4}
// `);
var h1 = a[0], arr = a.slice(1);
console.log("\n  h1 => ".concat(h1, "\n  arr => ").concat(arr, "\n"));
