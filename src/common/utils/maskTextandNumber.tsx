const maskTextAndNumber = (type: any, value: any) => {
  if (type == 'number') {
    const replacedStr = value.substr(3, 5);
    return value.replace(replacedStr, ' ***** ');
  } else if (type == 'email') {
    let email = value.replace(
      /^(.)(.*)(.@.*)$/,
      (_: any, a: any, b: any, c: any) => {
        console.log('A>>', a, b, c);
        a + b.replace(/./g, '*') + c;
      },
    );
    console.log('Email>>>', email);
  }
};
export default maskTextAndNumber;
