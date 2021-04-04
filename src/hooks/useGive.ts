import { useContext } from 'react'
import { Context } from '../contexts/GiveProvider'

const useGive = () => {
  const { give } = useContext(Context)
  return give
}

export default useGive
