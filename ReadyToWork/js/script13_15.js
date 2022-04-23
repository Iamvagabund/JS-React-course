"use strict";

if(4 == 5) {
  console.log('ok!!!!');
} else {
  console.log('Error');
}


const num = 50;

if (num < 49) {
  console.log('error');
} else if (num > 100) {
  console.log ('много');
} else {
  console.log('ok');
}

(num === 49) ? console.log('ok') : console.log('error!!');


const number = 50;

switch (number) {
  case 49:
    console.log('NOOOOoo');
    break;
  case 100:
    console.log('NOOOOoo');
    break;
  case 51:
    console.log('Daaaaaaa');
    break;
  default:
    console.log('Not now, it`s default');
    break;
}


let nu = 50;

while (nu < 55) {
  console.log(nu);
  nu++;
}


let doing = 50;

do {
  console.log(doing);
  doing++;
}
while (doing < 54);


let forfor = 50;

for (let i = 1; i < 3; i++) {
  console.log(forfor);
  forfor++;
}


for (let i = 1; i < 8; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

for (let i = 1; i < 8; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}