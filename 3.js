function solution(relation) {
  let countId = 0;
  let countNameMajor = 0;
  let hasil = 0;
  for (let baris1 = 0; baris1 < relation.length; baris1++) {
    for (let kolom1 = 0; kolom1 < relation[baris1].length; kolom1++) {
      for (let baris2 = 0; baris2 < relation.length; baris2++) {
        for (let kolom2 = 0; kolom2 < relation[baris2].length; kolom2++) {
          if (kolom1 == 0 && kolom2 == 0) {
            if (relation[baris1][kolom1] === relation[baris2][kolom2]) {
              countId++;
            }
          }

          if (kolom1 == 1 && kolom2 == 2) {
            if (
              relation[baris1][kolom1] == relation[baris2][kolom1] &&
              relation[baris1][kolom2] == relation[baris2][kolom2]
            ) {
              countNameMajor++;
            } else {
            }
          }
        }
      }
    }
  }

  if (countId == relation.length) {
    hasil++;
  }
  if (countNameMajor == relation.length) {
    hasil++;
  }
  console.log(hasil);
}

let start = true;
let relation = [
  [100, "ryan", "music", 2],
  [200, "apeach", "math", 2],
  [300, "tube", "computer", 3],
  [400, "con", "computer", 4],
  [500, "muzi", "music", 3],
  [600, "apeach", "music", 2],
];

//The length of the row of relation is 1 ~ 20, and each row represents a tuple of relations.
if (relation.length > 20 || relation.length <= 0) {
  start = false;
  console.log("Rows not big from 20 or not kurang dari 1");
}

//The length of the relation column is 1 ~ 8, and each column indicates the attribute of the relation.
for (let loopColoum = 0; loopColoum < relation.length; loopColoum++) {
  if (relation[loopColoum].length <= 0 || relation[loopColoum].length > 10) {
    start = false;
    console.log("Colum not big from 10 or not kurang dari 1");
  } else {
  }
}

//The length of all strings in relation is 1 ~ 8, and consists of only lowercase letters and numbers.
var testRegex = /^([a-z0-9]){1,10}$/;

for (let baris = 0; baris < relation.length; baris++) {
  for (let kolom = 0; kolom < relation[baris].length; kolom++) {
    if (testRegex.test(relation[baris][kolom]) == false) {
      start = false;
      console.log(
        "The length of " +
          relation[baris][kolom] +
          " in relation is 1 ~ 8, and consists of only lowercase letters and numbers"
      );
    }
  }
}

//if true, running function solution
if (start === true) {
  solution(relation);
}
