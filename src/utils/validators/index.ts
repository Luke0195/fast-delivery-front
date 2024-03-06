class Validator {
  constructor() {}

  validateHookFormField<T>(
    errors: T,
    fieldName: string,
    objectValue: any = '',
  ): boolean {
    if (objectValue === '')
      return errors[fieldName] && errors[fieldName].message
    return (
      errors[objectValue][fieldName] && errors[objectValue][fieldName].messsage
    )
  }

  isString(value: string): boolean {
    return typeof value === 'string'
  }
}

export default new Validator()
