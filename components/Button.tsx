import React from 'react'

interface ButtonProps {
  buttonText: string
  buttonStyles?: string
  buttonHandler: () => any
}

const DEFAULT_BUTTON_STYLES =
  'rounded-[4px] bg-pink-700 hover:bg-pink-800 px-3 py-1 font-inter font-medium text-sm text-white'

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonStyles,
  buttonHandler,
}) => {
  return (
    <>
      <button
        type="button"
        className={buttonStyles || DEFAULT_BUTTON_STYLES}
        onClick={buttonHandler}
      >
        {buttonText}
      </button>
    </>
  )
}

export default Button
