class Validator {
  constructor() {}

  validateHookFormField<T>(errors: T, fieldName: string): boolean {
    return errors[fieldName] && errors[fieldName].message
  }
}

export default new Validator()
