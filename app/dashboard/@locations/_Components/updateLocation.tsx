'use client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPencil} from "react-icons/lu";

export default function UpdateLocation({children, store} : {children: ReactNode, store: string | string[] | undefined}) {
  if (!store) return <div />;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="p-2" onPress={onOpen} color="primary" ><LuPencil size={20} /> Editar</Button>
      <Modal isOpen={isOpen} className="bg-green-200" onOpenChange={onOpenChange}>
        <ModalContent >
          {() => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}