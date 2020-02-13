import { useState, useEffect } from 'react';
import { TaskType, FormInputsHookOption, FormInputsHookReturnType } from '../react-app-env';

const useFormInputs = (initialFormValue: TaskType, options: FormInputsHookOption): FormInputsHookReturnType => {
  const [state, updateState] = useState<{[key: string]: string}>({
    ...Object.keys(options).reduce((acc, cur) => ({...acc, [cur]: ''}), {}),
  })
  const onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const errors = Object.keys(options).reduce((acc, cur) => {
    const option = options[cur];
    const error = []
    if(option.minLength && option.maxLength && (state[cur].length > option.maxLength || state[cur].length < option.minLength)) {
      error.push(`Minimum of ${option.minLength} and Maximum of ${option.maxLength} is allowed`)
    }
    return {
      ...acc,
      [cur]: error
    }
  }, {})
  const hasErrors = !!Object.keys(errors).length
  return { values: state, onChange, errors, hasErrors }
}

export default useFormInputs;