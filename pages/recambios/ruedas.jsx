import Image from 'next/image'
import Link from 'next/link'
import Answer from '../../components/Answer'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { myLoader } from '../../components/myLoader'
import { useGetArticlesFilter } from '../../firebase/methods/get'
import changeWheel from '../../public/consejos/cabezera-cambiar-rueda-miniatura.jpg'
import styles from './Recambio.module.scss'

const Ruedas = () => {
  const articles = useGetArticlesFilter('articles', 'ruedas', 'category')
  return (
    <Layout
      title='Ruedas para patinetes eléctricos'
      description='Comprar ruedas para patinetes eléctricos en nuestra tienda en línea. Ofrecemos una amplia selección de ruedas de alta calidad para las principales marcas: vivobike, ducati, cetotec, gotrax, xiaomi, dever, alfawise, hiboy, viron, wayscral, wispeed, zwheel. Mejorar tu experiencia de movilidad.'
    >
      <section className={styles.recambios}>
        <h1 className={styles.title}>¿Necesitas ruedas nuevas para tú patinete eléctrico?</h1>
        <p className={styles.description}>
          En nuestra tienda encontrarás las mejores ruedas en todos los tamaño para tú <strong>patinete eléctrico.</strong>
        </p>
        <div className={styles.cardBox}>
          {
            articles.map((article) => (
              <Card article={article} key={article.id} h2 />
            ))
          }
        </div>
      </section>
      <section className={styles.changeWheel}>
        <h2 className={styles.title}>Como cambiar las ruedas de tu patinete eléctrico</h2>
        <p className={styles.description}>
          No sabes como cambiar las ruedas de tu patinete eléctrico, no te preocupes, en este artículo te explicamos como hacerlo de forma muy rápida y sencilla.
        </p>
        <Link href='/consejos/como-cambiar-ruedas-de-scooter'>
          <Image width={0} height={0} loader={myLoader} src={changeWheel} alt='Cambiar ruedas de patinete eléctrico' />
        </Link>
      </section>
      <section className={styles.changeWheel}>
        <h2 className={styles.title}>Preguntas frecuentes</h2>
        <Answer
          title='¿Cuándo cambiar las ruedas de tu patinete eléctrico?'
          answer='Si las ruedas de un patinete eléctrico tienen una banda de rodadura desgastada hasta el punto de quedar plana o lisa, es crucial reemplazarlas. El motivo es que la falta de agarre resultante puede perjudicar seriamente la estabilidad y el control del vehículo. Tanto las ruedas inflables como las ruedas antipinchazos disponen de un indicador que muestra cuándo es necesario cambiarlas.'
          answer2='Los pinchazos o cortes en las ruedas de un patinete eléctrico pueden ser peligrosos, ya que pueden provocar una pérdida de aire y, por ende, dificultar el control del vehículo. Por tanto, es importante revisar los neumáticos con detenimiento para detectar posibles poros o cortes. En caso de que se encuentren, es recomendable reemplazar las ruedas cuanto antes para prevenir cualquier riesgo de accidente. Esta situación solo es posible en el caso de las ruedas inflables.'
        />
        <Answer
          title='Diferencias entre ruedas macizas y ruedas con cámara de aire'
          answer='<strong>Las ruedas inflables</strong> proporcionan un mayor confort a quienes las utilizan. Son más amortiguadoras que las ruedas macizas, ya que pueden absorber los impactos de los desniveles del terreno y reducir las vibraciones en el recorrido. No obstante, también presentan una pequeña desventaja, ya que son más propensas a pincharse. Por esta razón, es recomendable tener una cubierta de repuesto a mano en caso de pinchazo. De lo contrario, si no se cuenta con un repuesto, deberás llevar el patinete al hombro hasta conseguir una cubierta nueva.'
          answer2='<strong>Las ruedas macizas</strong> se caracterizan por transmitir vibraciones a lo largo de todo el patinete, aunque tienen la ventaja de ser muy resistentes a los pinchazos. Estas ruedas suelen ser más pequeñas que las inflables y, por lo tanto, soportan menos peso.'
        />
      </section>
    </Layout>
  )
}

export default Ruedas
