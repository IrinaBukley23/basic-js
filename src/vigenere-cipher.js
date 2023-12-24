const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return this.type = type;
  }
  encrypt(message, key) {
    const alphabet = this.alphabet;
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }
    
    let result = '';
    let j = 0;
    
    for (let i = 0; i<message.length; i++) {
        if (j > key.length-1) {
            j = 0;
        };
        if (!alphabet.includes(message[i].toUpperCase())) {
            result +=message[i];
        } else {
            result += alphabet[(alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[j].toUpperCase()) ) % 26]
            j++
        }
    }
    return this.type ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    const alphabet = this.alphabet;
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }
    let result = '';
    let j = 0;

    for (let i = 0; i<message.length; i++) {
      if (j > key.length-1) {
        j = 0;
      };

      if (!alphabet.includes(message[i].toUpperCase())) {
        result +=message[i];
      } else {
        if ((alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase()) >= 0)) {
          result += alphabet[(alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase()) )]
          j++
        } else {
          let index = (alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase())) + 26;
          result += alphabet[index];
          j++
        }
          
      } 
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
