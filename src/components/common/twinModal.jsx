import React from "react";
import Modal from "@material-tailwind/react/Modal";
// import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
// import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { RedButton } from "../../containers/profileContainer/header";


export function ModalBox({ children, showModal, setShowModal }) {
    // const [showModal, setShowModal] = React.useState(false);
  
    return (
      <>
     
        <Modal
          size='regular'
          active={showModal}
          toggler={() => setShowModal(false)}
          className='fixed top-0 right-0'
        >
          <ModalBody className=''>{children}</ModalBody>
         
            <Button
              buttonType='link'
              onClick={(e) => setShowModal(false)}
              className='absolute -top-4 -right-4 hover:bg-black hover:text-white bg-dark-700 h-8 w-8 rounded-full text-base text-white'
            >
              X
            </Button>
        </Modal>
      </>
    );
}
  
export function RedModal({ children, title }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <RedButton
        color='lightBlue'
        type='button'
        onClick={(e) => setShowModal(true)}
        className=''
      >
        {title}
      </RedButton>

      <Modal
        size='regular'
        active={showModal}
        toggler={() => setShowModal(false)}
        className=' bg-dark-700'
      >
        <ModalBody className='relative bg-dark-700 p-6'>{children}</ModalBody>
       
          <Button
            buttonType='link'
            onClick={(e) => setShowModal(false)}
            className='absolute -top-4 -right-4 hover:bg-black hover:text-white bg-dark-700 h-8 w-8 rounded-full text-base text-white'
          >
            X
          </Button>
      </Modal>
    </>
  );
}

export function GrayModal({ children, title }) {
    const [showModal, setShowModal] = React.useState(false);
  
    return (
      <>
        <button
          type='button'
          onClick={(e) => setShowModal(true)}
          className='py-2 px-3 text-white  text-base hover:!bg-hover-900 bg-dark-600 shadow-none focus:outline-none font-prime'
        >
          {title}
        </button>
  
        <Modal
          size='regular'
          active={showModal}
          toggler={() => setShowModal(false)}
          className=' bg-dark-700'
        >
          <ModalBody className='relative bg-dark-700 p-6'>{children}</ModalBody>
         
            <Button
              buttonType='link'
              onClick={(e) => setShowModal(false)}
              className='absolute -top-4 -right-4 hover:bg-black hover:text-white bg-dark-700 h-8 w-8 rounded-full text-base text-white'
            >
              X
            </Button>
        </Modal>
      </>
    );
  }
  