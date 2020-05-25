function solution(record) {
  message = [];

  record.forEach(function (r) {
    var checkInput = r.split(" ");

    if (checkInput[0] == "Enter") {
      if (message.length == 0) {
        message.push({
          id: checkInput[1],
          name: checkInput[2],
          message: checkInput[2] + " come in",
        });
      } else {
        for (let i = 0; i < message.length; i++) {
          if (message[i].id == checkInput[1]) {
            let lastMessage = message[i].message.split(" ");

            message[i].id = checkInput[1];
            message[i].name = checkInput[2];
            message[i].message =
              message[i].name + " " + lastMessage[1] + " " + lastMessage[2];
          } else {
            message.push({
              id: checkInput[1],
              name: checkInput[2],
              message: checkInput[2] + " come in",
            });
          }
        }
      }
    } else if (checkInput[0] == "Leave") {
      for (let i = 0; i < message.length; i++) {
        if (message[i].id == checkInput[1]) {
          message.push({
            id: checkInput[1],
            name: message[i].name,
            message: message[i].name + " has left",
          });

          break;
        }
      }
    } else if (checkInput[0] == "Change") {
      for (let i = 0; i < message.length; i++) {
        if (message[i].id == checkInput[1]) {
          let lastMessage = message[i].message.split(" ");

          message[i].id = checkInput[1];
          message[i].name = checkInput[2];
          message[i].message =
            message[i].name + " " + lastMessage[1] + " " + lastMessage[2];
        }
      }
    }
  });

  getNewMessage = message.map((v, i) => {
    return v.message;
  });
  console.log(getNewMessage);
}

let start = true;

record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

//Record is an array containing the following strings and its length is 1 ~ 100,000.
var testRegexLength = /^([a-zA-Z0-9 ]){1,100000}$/;

//The length of the user ID and nickname is 1 ~ 10.
var testRegexIdName = /^([a-zA-Z0-9 ]){1,10}$/;

for (let loop = 0; loop < record.length; loop++) {
  if (testRegexLength.test(record[loop]) == false) {
    start = false;
    console.log(
      "Record is an array containing the following strings and its length is 1 ~ 100,000."
    );
  }

  //Record is an array containing the following strings and its length is 1 ~ 100,000.
  let checkInput = record[loop].split(" ");
  if (checkInput[0] == "Leave") {
    if (testRegexIdName.test(checkInput[1]) == false) {
      start = false;
      console.log("Id must 1 - 10 strings");
    }
  } else {
    //The length of the user ID and nickname is 1 ~ 10.
    if (
      testRegexIdName.test(checkInput[1]) == false ||
      testRegexIdName.test(checkInput[2]) == false
    ) {
      console.log(checkInput[1]);
      start = false;
      console.log(
        "Id : " +
          checkInput[1] +
          " or Name : " +
          checkInput[2] +
          " must 1 - 10 strings"
      );
    }
  }
}

if (start == true) {
  solution(record);
}
