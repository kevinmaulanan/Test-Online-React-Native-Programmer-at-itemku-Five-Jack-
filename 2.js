function solution(N, users) {
  outputStage = [];

  for (let a = 1; a < N + 1; a++) {
    if (users.length == 1 || users.length == 0) {
      outputCount = "Stage " + a + " : " + 0 + "/" + 1;
      hasil = { stage: a, value: 0 };
    } else {
      let minUsers = Math.min.apply(Math, users);

      let count = 0;

      users.forEach(function (user) {
        if (user == minUsers) {
          count++;
        }
      });

      outputCount = "Stage " + a + " : " + count + "/" + users.length;

      value = count / users.length;
      users = users.filter((item) => item !== minUsers);

      hasil = { stage: a, value: value };
    }
    outputStage.push(hasil);
    console.log(outputCount);
  }

  outputStage.sort(function (a, b) {
    return b.value - a.value;
  });

  let sortStage = Object.values(outputStage).map((v, i) => {
    return v.stage;
  });

  console.log(sortStage);
}

let start = true;

let N = 5;
let users = [2, 1, 2, 6, 2, 4, 3, 3];

//N, total stages: 1 ~ 500
if (N > 500 || N < 0) {
  start = false;
}

if (users.length < 1 || users.length > 20000) {
  start = false;
  console.log(" The length of array users must 1 ~ 200,000");
}
//users  contain numbers 1 ~ N + 1
for (let loop = 0; loop < users.length - 1; loop++) {
  if (users[loop] < 1 || users[loop] > N + 1) {
    start = false;
    console.log("users must contain numbers 1 ~ N + 1");
  }
}

if (start == true) {
  solution(N, users);
}
