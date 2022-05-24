const log = function(a, b, ...rest) {
  console.log(a, b, rest);
}

log('basic', 'second' , 'notBasic', 'oneMoreRest', 'moreRest'); //первые два обязательно будут, а остальные по возможности(попадают в массив)


// старая запись 
function calcOrDouble(number, basis) {
  basis = basis || 2; // возвращается первое правдивое выражение, если basis не задаем ( то есть не вписываем 5), то будет undefined. undefined это false. из выражения false || 2 возвращается 2
  console.log(number * basis);
}

calcOrDouble(3);


// со стандарат ES6. даем стандартное значение для basis, если не указали при вызове
function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3);