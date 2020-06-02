class MyString  {

    reverse(str){
        return [...str].reverse().join('');
      }

      ucFirst([ first, ...rest ], locale = navigator.language) {
        return [ first.toLocaleUpperCase(locale), ...rest ].join('');
      }  

      ucWords (str) {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }
}

var str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde')); 