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
}

export default new Validator()
