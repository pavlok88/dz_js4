// -------------------------- 1‌ ‌Массивы‌ ‌(объект‌ ‌Array) ‌---------------------
console.log(`------- 1‌ ‌Массивы‌ ‌(объект‌ ‌Array)-------`)
// 1.1‌ ‌Функция‌ ‌принимает‌ ‌2‌ ‌массива‌ ‌и‌ ‌возвращает‌ ‌новый‌ ‌массив,‌ ‌в‌ ‌котором‌ ‌
// собраны‌ ‌общие‌ ‌элементы‌ ‌(то‌ ‌есть‌ ‌элементы,‌ ‌которые‌ ‌встречаются‌ ‌и‌ ‌в‌ ‌первом‌ ‌
// и‌ ‌во‌ ‌втором‌ ‌массивах)‌ ‌без‌ ‌повторений‌ ‌

const array1 = [1, 2, 2, 5, 6, 6];
const array2 = [2, 4, 4, 5, 5, 7];

function combineArrays(arr1, arr2) {
  arr1 = new Set(arr1);
  arr1 = [...arr1];
  arr2 = new Set(arr2);
  arr2 = [...arr2];
  return arr1.filter(i => arr2.includes(i));
};
console.log(combineArrays(array1, array2));
// 1.2‌ ‌Даны‌ ‌два‌ ‌массива.‌ ‌Объедините‌ ‌их‌ ‌и‌ ‌преобразовав‌ ‌в‌ ‌строку.‌ 

const combi = [...array1, ...array2].join('');
console.log(combi);


// --------------------------  2‌ ‌Строки‌ ‌(объект‌ ‌String)‌---------------------
console.log(`------- 2‌ ‌Строки‌ ‌(объект‌ ‌String)-------`)
// 2.1‌ ‌Напишите‌ ‌функцию,‌ ‌которая‌ ‌преобразует‌ ‌первую‌ ‌букву‌ ‌каждого‌ ‌слова‌ ‌
// строки‌ ‌str‌ ‌в‌ ‌верхний‌ ‌регистр.‌ ‌

const str = 'hello javascript, you are amazing =)';

function firsLetterUp(strIn) {
  strIn = strIn.split(' ');
  return strIn.map(i => i.replace(i[0], i[0].toUpperCase())).join(' ')
}
console.log(firsLetterUp(str));


// 2.2‌ ‌Написать‌ ‌функцию‌ ‌для‌ ‌проверки‌ ‌спама‌ ‌в‌ ‌переданной‌ ‌строке.‌ ‌Функция‌ ‌
// возвращает‌ ‌true,‌ ‌если‌ ‌строка‌ ‌содержит‌ ‌спам.‌ ‌Спамом‌ ‌считать‌ ‌следующие‌ ‌
// слова:‌ ‌100%‌ ‌бесплатно,‌ ‌увеличение‌ ‌продаж,‌ ‌только‌ ‌сегодня,‌ ‌не‌ ‌удаляйте,‌ ‌ххх.‌ ‌
// Функция‌ ‌должна‌ ‌быть‌ ‌нечувствительна‌ ‌к‌ ‌регистру.‌ ‌

const text = 'только сегодня бесплатное ‌увеличение‌ ‌продаж';

function spamCheck(txt) {
  txt = txt.toLowerCase();
  const spamBase = ['‌100%‌ ‌бесплатно', '‌увеличение‌ ‌продаж', 'только‌ ‌сегодня', 'не‌ ‌удаляйте', '‌ххх'];
  return !!spamBase.find(i => txt.includes(i));
}
console.log(spamCheck(text));


// -------------------------- 3‌ ‌Классы‌ ‌-------------------------------------
console.log(`------- 3‌ ‌Классы‌ -------`)
// 3.1‌ ‌Реализуйте‌ ‌класс‌ ‌‌Worker‌‌ ‌(Работник),‌ ‌который‌ ‌будет‌ ‌иметь‌ ‌следующие‌ ‌
// свойства:‌ ‌‌name‌‌ ‌(имя),‌ ‌‌surname‌‌ ‌(фамилия),‌ ‌‌rate‌‌ ‌(ставка‌ ‌за‌ ‌день‌ ‌работы),‌ ‌‌days‌ ‌
// (количество‌ ‌отработанных‌ ‌дней).‌ ‌Также‌ ‌класс‌ ‌должен‌ ‌иметь‌ ‌метод‌ ‌‌getSalary()‌,‌ ‌
// который‌ ‌будет‌ ‌выводить‌ ‌зарплату‌ ‌работника.‌ ‌Зарплата‌ ‌-‌ ‌это‌ ‌произведение‌ ‌
// (умножение)‌ ‌ставки‌ ‌‌rate‌‌ ‌на‌ ‌количество‌ ‌отработанных‌ ‌дней‌ ‌‌days‌ ‌
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

// 3.2‌ ‌С‌ ‌помощью‌ ‌класса‌ ‌‌Worker‌‌ ‌создайте‌ ‌двух‌ ‌рабочих‌ ‌и‌ ‌найдите‌ ‌сумму‌ ‌их‌ ‌
// зарплат.‌ ‌
const worker1 = new Worker('Bill', 'Jhonson', 2000, 20);
const worker2 = new Worker('Jhon', 'Doe', 1800, 19);
const totalSalary = worker1.getSalary() + worker2.getSalary();
console.log(`totalSalary = ${totalSalary}`);
// 3.3‌ ‌Модифицируйте‌ ‌класс‌ ‌‌Worker‌‌ ‌следующим‌ ‌образом:‌ ‌сделайте‌ ‌все‌ ‌его‌ ‌
// свойства‌ ‌приватными,‌ ‌а‌ ‌для‌ ‌их‌ ‌чтения‌ ‌сделайте‌ ‌методы-геттеры‌ ‌
class WorkerPrivate {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  get name() { return this._name; }
  get surname() { return this._surname;}
  get rate() { return this._rate;}
  get days() { return this._days;}
  get salary(){return this.rate * this.days;}
}
const worker3 = new WorkerPrivate('Bill', 'Jhonson', 2000, 20);
const worker4 = new WorkerPrivate('Jhon', 'Doe', 1800, 19);
//  -------------------------- 4‌ ‌Set‌ --------------------------------------‌
console.log(`------- 4‌ ‌Set‌ -------`)
// Создайте коллекцию Set с начальными значениями 1,2,3. 
const set = new Set([1, 2, 3]);
console.log(set);

// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
console.log(set.has(3));
console.log(set.has(4));

// Добавите еще несколько элементов.
set.add(4);
set.add(5).add(6);
console.log(set);

// С помощью цикла for-of переберите ее значения и выведите в консоль.
for (let i of set) console.log(i);

// Найдите сумму этих значений.
let sum = 0;
for (let i of set) sum += i;
console.log(sum);

// Удалите элемент 2.
set.delete(2);

// Очистите всю коллекцию.
set.clear();

//  -------------------------- 5 Map -------------------------------------- 
console.log(`------- 5 Map‌ -------`)
// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
const mapArr1 = ['one', 'number 1'];
const mapArr2 = ['two', 'number 2'];
const map = new Map([mapArr1, mapArr2]);
console.log(map);

// Получите список ключей и значений отдельно.
console.log(map.keys());
console.log(map.values());

// Получите текущее количество элементов.
console.log(map.size);

// Добавьте и удалите элемент
map.set('three', 'number 3');

// Произведите поиск по ключу
console.log(map.get('one'));