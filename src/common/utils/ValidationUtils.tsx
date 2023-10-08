/**
 * pass email address to validate
 * @param email
 * @returns
 */
export const emailValidate = (email: string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export const EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * name validation function
 * @param name
 * @returns
 */
export const nameValidate = (name: string) => {
  const regEx = /^[a-zA-Z ]*$/;
  return regEx.test(name);
};

/**
 * pawword validator
 * @param pass
 * @returns
 */
// export const passwordValidate = (pass: string) => {
//   const regularExpression = /^.{8,}$/;
//   return regularExpression.test(pass);
// };
export const passwordValidate = (value: any) => {
  if (!value) {
    return 'Password is required';
  } else if (value.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  return true;
};

/**
 * otp validator
 * @param otp
 * @returns
 */
export const otpValidation = (otp: string) => {
  return null;
};

export const removeBrackets = (value: string) => {
  var value1;
  if (value) {
    value1 = value
      .replace(new RegExp('<<', 'g'), '')
      .replace(new RegExp('>>', 'g'), '');
    value1 = value1.replace('dfrac/g', 'frac');
    value1 = value1.replace('dfrac ', 'dfrac');
    value1 = value1.replace('frac /g', 'frac');
    value1 = value1.replace('\\cdot /g', '.');
    value1 = value1.replace('\\sqrt [/g', '\\sqrt[');
    value1 = value1.replace('\\sqrt ', '\\sqrt');
    value1 = value1.replace('\\overrightarrow/g', '\\vec');
    value1 = value1.replace("'/g", '\\prime');
    value1 = value1.replace('\\right)/g', ')');
    value1 = value1.replace(' right)/g', ')');
    value1 = value1.replace('right)/g', ')');
    value1 = value1.replace('\\left(/g', '(');
    value1 = value1.replace(' left(/g', '(');
    value1 = value1.replace('left(/g', '(');

    value1 = value1.replace('\\overline ', '\\overline');

    if (value1.includes('\\\\pounds')) {
      value1 = value1.replace('\\\\pounds', '£');
    } else {
      value1 = value1.replace('\\pounds', '£');
    }
    if (value1.includes('\\\\euro')) {
      value1 = value1.replace('\\\\euro', '€');
    } else {
      value1 = value1.replace('\\euro', '€');
    }
    if (value1.includes('\\\\dollar')) {
      value1 = value1.replace('\\\\dollar', '$');
    } else {
      value1 = value1.replace('\\dollar', '$');
    }
    if (value1.includes('\\cdot  ')) {
      value1 = value1.replace('\\cdot  ', '\\cdot ');
    }
  }

  return value1?.trim();
};
