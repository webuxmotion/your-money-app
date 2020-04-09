import { useRef } from 'react'

export const useCountRenders = (name = 'default name') => {
  const renders = useRef(0)
  console.log('renders:', name, renders.current++)
}
