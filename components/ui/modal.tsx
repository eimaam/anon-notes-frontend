import * as Dialog from '@radix-ui/react-dialog';
import { asChildPropDef } from '@radix-ui/themes/props';
import { PlusIcon } from 'lucide-react';
import React, { FC } from 'react'

interface IModal {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
  }

const Modal = ({
    open,
    setOpen,
    children
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
  }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
{children}
<ModalContent />
    </Dialog.Root>
  )
}


const ModalContent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="inset-0 fixed top-1/2 left-1/2  bg-red-900">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you&apos;re done.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <PlusIcon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}



Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;

export default Modal