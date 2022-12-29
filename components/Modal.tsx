import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProps {
  modalButtonText: string
  modalButtonStyles?: string
  modalPopUpHeader: string
  modalPopUpHeaderStyles?: string
  modalPopUpText: string
  modalPopUpTextStyles?: string
  modalPopUpStyles?: string
  modalCancelButtonText?: string
  modalCancelButtonStyles?: string
  modalConfirmationButtonText?: string
  modalConfirmationButtonStyles?: string
}

const DEFAULT_BUTTON_STYLES =
  'rounded-[4px] bg-gray-800 hover:bg-gray-900 px-3 py-1 font-inter font-medium text-sm text-white'
const DEFAULT_POPUP_STYLES =
  'w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all'
const DEFAULT_POPUP_HEADER_STYLES =
  'font-inter text-lg font-medium leading-6 text-white'
const DEFAULT_POPUP_TEXT_STYLES = 'font-inter text-sm text-gray-400'
const DEFAULT_POPUP_CANCEL_BUTTON_STYLES =
  'font-inter inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200'

const DEFAULT_POPUP_CANCEL_TEXT = 'Cancel'

const Modal: React.FC<ModalProps> = ({
  modalButtonText,
  modalButtonStyles,
  modalPopUpHeader,
  modalPopUpHeaderStyles,
  modalPopUpText,
  modalPopUpTextStyles,
  modalPopUpStyles,
  modalCancelButtonText,
  modalCancelButtonStyles,
  modalConfirmationButtonText,
  modalConfirmationButtonStyles,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={modalButtonStyles || DEFAULT_BUTTON_STYLES}
      >
        {modalButtonText}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={modalPopUpStyles || DEFAULT_POPUP_STYLES}
                >
                  <Dialog.Title
                    className={
                      modalPopUpHeaderStyles || DEFAULT_POPUP_HEADER_STYLES
                    }
                  >
                    {modalPopUpHeader}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p
                      className={
                        modalPopUpTextStyles || DEFAULT_POPUP_TEXT_STYLES
                      }
                    >
                      {modalPopUpText}
                    </p>
                  </div>

                  <div className="flex mt-4 justify-end">
                    <button
                      type="button"
                      className={
                        modalCancelButtonStyles ||
                        DEFAULT_POPUP_CANCEL_BUTTON_STYLES
                      }
                      onClick={closeModal}
                    >
                      {modalCancelButtonText || DEFAULT_POPUP_CANCEL_TEXT}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
