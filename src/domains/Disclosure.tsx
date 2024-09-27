export type Disclosure = {
  isOpen: boolean;

  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}