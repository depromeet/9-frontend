import validator from 'validator';

class SignUpFormValidator {
  constructor(validations) {
    this.validations = validations
  }

  validate(state) {
    const validation = this.validResult();

    this.validations.forEach(rule => {
      if (!validation[rule.field].isInvalid) {
        const field_value = state[rule.field].toString();
        const args = rule.args || [];
        const validation_method =
          typeof rule.method === 'string' ?
            validator[rule.method] :
            rule.method

        if (validation_method(field_value, ...args, state) !== rule.formValid) {
          validation[rule.field] = { isInvalid: true, message: rule.message };
          validation.isValid = false
        }
      }
    })

    return validation;
  }

  validResult() {
    const validation = {};
    this.validations.forEach(rule => {
      validation[rule.field] = { isInvalid: false, message: '' }
    });
    return { isValid: true, ...validation };
  }
}

export default SignUpFormValidator;
