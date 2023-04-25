import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../inicializate.js'

export const setArticle = async (value) => {
  // Add a new document with a generated id.
  await addDoc(collection(db, 'articles'), {
    title: value.title.value,
    image: value.image.value,
    price: value.price.value,
    link: value.link.value
  })
}
