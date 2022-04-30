import React from 'react'

type ModalProps = {
  /** The title */
  title: string,
  /** If true, the modal appears */
  show: boolean,
  /** Function that sets the show prop's value */
  setShow: (show: boolean) => void,
  /** Children element that appear in the modal after the title */
  children: React.ReactNode | React.ReactNode[]
}

export default function Modal({ title, show, setShow, children }: ModalProps) {

  /**
   * Closes the modal
   * @param {React.MouseEvent<HTMLDivElement>} e 
   */
  const close = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setShow(false);
  }

  // --------------------------------------------

  return (
    <div className={`z-40 fixed inset-0 ${show ? 'flex' : 'hidden'} items-center justify-center p-4`}>
      <div className="cursor-pointer fixed inset-0 bg-dark bg-opacity-70" onClick={close}></div>

      <div className="relative w-full px-3.5 py-6 rounded-xl bg-white">
        <p className="text-2xl text-dark font-extrabold">{title}</p>

        {children}
      </div>
    </div>
  )
}