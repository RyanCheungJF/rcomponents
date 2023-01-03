import React, { Dispatch, SetStateAction } from 'react'

interface InputProps {
  placeholder?: string
  passwordInput?: boolean
  inputStyles?: string
  errorMessage: string
  inputHandler: Dispatch<SetStateAction<string>>
}

const DEFAULT_INPUT_STYLES =
  'appearance-none border-2 shadow-sm py-2 px-3 rounded focus:outline-none focus:shadow-outline'

const Input: React.FC<InputProps> = ({
  placeholder,
  passwordInput,
  inputStyles,
  errorMessage,
  inputHandler,
}) => {
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    inputHandler(event.target.value)
  }

  return (
    <>
      <div>
        <input
          type={passwordInput ? 'password' : 'text'}
          placeholder={placeholder}
          className={
            (inputStyles || DEFAULT_INPUT_STYLES) +
            (errorMessage != '' && ' border-red-500')
          }
          onChange={handleChange}
        />
        {errorMessage != '' && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
      </div>
    </>
  )
}

export default Input
