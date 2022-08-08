
//array destructor/de-reference

let a:number[]=[2,85,45,77];

let [t1,t2,t3,t4]=a;
// console.log(`
//   t1=> ${t1}
//   t2=> ${t2}
//   t3=> ${t3}
//   t4=> ${t4}
// `);

let [g1,,g3,g4]=a;
// console.log(`
//   g1=> ${g1}

//   g3=> ${g3}
//   g4=> ${g4}
// `);

let [h1,...arr]=a;
console.log(`
  h1 => ${h1}
  arr => ${arr}
`)


