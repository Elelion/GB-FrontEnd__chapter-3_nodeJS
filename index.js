/**
 * идем в настройки WebStorm и ставим галочку на...
 * preferences -> поиск -> nodeJs -> Coding assistance for NodeJs
 */

/**
 * выведет 2 елемента
 * 1 - какая нода сейчас отрабатывает те что исполняет наш код
 * 2 - какой код те из какого файла он исполняется
 *
 * process - описывает текущий процесс
 */
console.log(process.argv);

/**
 * если написать
 * node index.js Vasiliy
 * то будет не 2 елемента а 3
 */

/**
 * забираем агрументы что вы вводим в nodeJs в консоли
 * Метод slice() возвращает новый массив, содержащий копию части исходного массива
 *
 * далее вводим команду:
 * node index.js Vasiliy
 *
 * если нужно передать два параметра то пишем так:
 * node index.js Vasiliy
 */
const args = process.argv.slice(2);
const [name] = args;

console.log('hello NodeJs to ' + name);


/**/


// подкючаем нашу библиотеку
// const color = require('colors');

/**
 * для того что бы использовать import, мы должна в package.json указать
 * значение "type": "module", НО тогда перестанет работать это
 * const color = require('colors');
 */
import colors from "colors";

// задаем цвет для консольки
// console.log(color.green('Hello world'));
console.log(colors.red('Hello world'));


/**/


/**
 * momentJs - библиотека для работы с датами
 *
 * package.json - файл, на основе которого будут установлены все записимости
 * по средством команды: npm i / yarn
 *
 * package-lock.json - список фиксированых зависимостей, те говорит нам о том
 * какие версии уже установлены и работают
 * что бы установить пакеты на основе строго фиксированных версий, нам нужно
 * запустить команду: npm ci
 * ВАЖНО: данный метод используется только при развертывании на продакшене!!!
 */

/**
 * что бы создать свой скрипт, идем в package.json
 * и пишем:
 * "scripts": {
 *    "start": "node index.js"
 *  },
 *
 *  после чего пишем npm run start / yarn start
 */


/**/


const arg = +process.argv.slice(2);
console.log(colors.yellow('---task1---'))
console.log('arg: ', arg);

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getPrimes = (num) => {
  const result = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  if (result.length <= 0 || isNaN(arg))
    console.log(colors.red("В диапазоне нет простых чисел ;("));

  console.log('result: ', result);

  let counter = 0;
  result.forEach((el) => {
    if (counter === 0) {
      console.log(colors.red(el));
      counter++;
    } else if (counter === 1) {
      console.log(colors.yellow(el));
      counter++;
    } else {
      console.log(colors.green(el));
      counter = 0;
    }
  });
};

getPrimes(arg);
