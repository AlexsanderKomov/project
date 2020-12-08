
// console.log(4 / 0);

// let string = "Hello";

// console.log(string);


// let persone = {
//    name: "Jonh",
//    age: 25,
//    isMarried: true
// };

// console.log(persone["name"]);

// let arr = ["plum.png", "orange.jpg", "app.bmp"];

// console.log(arr[1]);

// console.log(4 + ' string');

// let one = true;
// let tu = true;
// let fo = true;

// console.log(0 || 5 && false);



if (2 * 4 == 8) {
   console.log('Верно!');

}



if (num < 49) {
   console.log('Неверно!');
} else if (num > 100) {
   console.log('Много!');
} else {
   console.log('Верно!');
}

(num == 50) ? console.log('Верно!') : console.log('Не верно!');

switch (num) {
   case num < 49:
      console.log('Не верно!')
      break;
   case num > 100:
      console.log('Много!')
      break;
   case num > 80:
      console.log('Все еще много!')
      break;
   case 50:
      console.log('Верно!')
      break;
   default:
      console.log('Что-то пошло не так!')
      break;
}

let num = 50;
// while (num < 55) {
//    console.log(num);
//    num++;

// }

do {
   console.log(num);
   num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
   if (i == 6) {
      continue;
   }
   console.log(i);
}


