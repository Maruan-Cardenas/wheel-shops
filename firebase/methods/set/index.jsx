import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../inicializate.js'

export const setArticles = async (value) => {
  await addDoc(collection(db, 'articles'), {
    title: value.title,
    image: value.image,
    price: value.price,
    cents: value.cents,
    link: value.link,
    brand: value.brand,
    category: value.category
  }).then(() => {
    location.reload()
  })
}
