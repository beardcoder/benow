import { useState } from 'react'

export const useMenu = (initialValue: boolean) => {
  const [open, setOpen] = useState(initialValue)
  const toggleOpen = (state: boolean | undefined = undefined) => {
    setOpen(state ==! undefined ? state : !open)
  }
  return {open, toggleOpen}
}
