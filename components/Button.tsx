import React from 'react'

interface ButtonProps {
  buttonText: string
  buttonStyles?: string
  buttonHandler: () => any
}

const DEFAULT_BUTTON_STYLES =
  'rounded-[4px] bg-gray-800 dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-gray-700 px-3 py-1 font-inter font-medium text-sm'

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
