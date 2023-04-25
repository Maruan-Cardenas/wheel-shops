import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../inicializate.js'

export const useGetArticlesFilter = (name, category) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const arrData = []
      const querySnapshot = await getDocs(query(collection(db, name), where('category', '==', category)))
      querySnapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() })
      })
      setData(arrData)
    }
    if (category && name) getData()
  }, [category, name])
  return data
}

export const useGetAllArticles = (name) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const arrData = []
      const querySnapshot = await getDocs(collection(db, name))
      querySnapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() })
      })
      setData(arrData)
    }
    getData()
  }, [name])
  return data
}
