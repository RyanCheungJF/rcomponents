import React from 'react'

interface ButtonProps {
  buttonText: string
  buttonStyles?: string
  buttonTextStyles?: string
  buttonHandler: () => any
}

const DEFAULT_BUTTON_STYLES =
  'rounded-[4px] bg-pink-700 hover:bg-pink-800 px-3 py-1'
const DEFAULT_BUTTON_TEXT_STYLES = 'font-inter font-medium text-sm text-white'

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonStyles,
  buttonTextStyles,
  buttonHandler,
}) => {
  return (
    <>
      <button
        className={buttonStyles || DEFAULT_BUTTON_STYLES}
        onClick={buttonHandler}
      >
        <p className={buttonTextStyles || DEFAULT_BUTTON_TEXT_STYLES}>
          {buttonText}
        </p>
      </button>
    </>
  )
}

export default Button
