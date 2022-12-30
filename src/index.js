const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];

  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }

  let newArr = arr.map((el) => {
    let str = '';
    for (let i = 0; i < el.length; i += 2) {
      if (el[i] === '1' && el[i + 1] === '0') {
        str = str + '.'
      }

      if (el[i] === '1' && el[i + 1] === '1') {
        str = str + '-'
      }
    }

    return str;
  });

  let decArr = newArr.map((el) => {
    return el === '' ? ' ' : MORSE_TABLE[el];
  });

  return decArr.join('');
}

module.exports = {
    decode
}