import React from 'react'

interface InputProps {
  placeholder?: string
  passwordInput?: boolean
  inputStyles?: string
  errorMessage: string
}

const DEFAULT_INPUT_STYLES =
  'appearance-none border-2 shadow-sm py-2 px-3 rounded focus:outline-none focus:shadow-outline'

const Input: React.FC<InputProps> = ({
  placeholder,
  passwordInput,
  inputStyles,
  errorMessage,
}) => {
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
        />
        {errorMessage != '' && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
      </div>
    </>
  )
}

export default Input
