/**
 * Функция принимает объект, имя свойства которое нужно изменить и новое имя свойства
 * Функция должна "переименовать" свойство в полученном объекте
 */
function renameProperty(obj, propName, newName) {
  obj[propName] = obj[newName];
}

/**
 * Функция принимает объект
 * Функция должна вернуть количество свойств объекта (числом)
 */
function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
}

/**
 * Функция принимает объект
 * Функция должна вернуть true если в объекте нет свойств или false в противном случае
 */
function isEmpty(obj) {}

/**
 * Функция принимает объект
 * Функция должна вернуть сумму значений свойств, где значение - число
 */
function numericPropsSum(obj) {}

/**
 * Функция принимает объект
 * Функция должна вернуть независимую копию объекта
 */
function clone(obj) {}

module.exports = {
  renameProperty,
  countKeys,
  isEmpty,
  numericPropsSum,
  clone
};
