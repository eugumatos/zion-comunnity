"use client"

import { createContext, useState, ReactNode } from "react";
import { Disclosure } from "@/domains/Disclosure";

type DisclosureProviderProps = {
  children?: ReactNode;
}

const DisclosureContext = createContext({} as Disclosure);

const DisclosureProvider = ({ children }: DisclosureProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <DisclosureContext.Provider value={{ isOpen, onOpen, onClose, onToggle }}>
      {children}
    </DisclosureContext.Provider>
  )
}

export { DisclosureContext, DisclosureProvider };