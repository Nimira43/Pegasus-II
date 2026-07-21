import { collection, deleteDoc, doc, setDoc, updateDoc, type DocumentData } from 'firebase/firestore'
import { db } from '../firebase/firebase'

type Options = {
  path: string
}

export const useFirestoreActions = <T extends DocumentData>({ path }: Options ) => {
  const create = async (data: T) => {
    try {
      const ref = doc(collection(db, path))
      await setDoc(ref, data)
      return ref
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  const update = async (id: string, data: T) => {
    try {
      const ref = doc(db, path, id)
      await updateDoc(ref, data)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  const remove = async (id: string) => {
    try {
      const ref = doc(db, path, id)
      await deleteDoc(ref)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return {create, update, remove}
}