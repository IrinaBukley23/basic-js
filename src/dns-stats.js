const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let list = {};
  for (let i = 0; i < domains.length; i++) {
    let end = domains[i].length;
    let res = '';
    for (let k = domains[i].length - 1; k >= 0; k--) {
      if(domains[i][k] === '.' || k === 0) {
        res += (k === 0) ? `.${domains[i].slice(k, end)}` : domains[i].slice(k, end);
        if(list[res] === undefined) {
          list[res] = 1;
        } else {
          list[res] += 1;
        }
        end = k;
      }
    }
  }
  return list;
}

module.exports = {
  getDNSStats
};
