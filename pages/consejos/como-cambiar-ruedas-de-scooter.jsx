import Image from 'next/image'
import Link from 'next/link'
import GoogleAds from '../../components/GoogleAds'
import Layout from '../../components/Layout'
import { myLoader } from '../../components/myLoader'
import head from '../../public/consejos/cabezera-cambiar-rueda.jpg'
import foot from '../../public/consejos/pie-cambiar-rueda.jpeg'
import styles from './Consejos.module.scss'

const ChangeWheel = () => {
  return (
    <Layout
      title='Como cambiar las ruedas de tu patinete electrico'
      description='Cada vez son más los usuarios que optan por utilizar patinetes eléctricos como su principal medio de transporte debido a las ventajas que ofrece en términos de ahorro de combustible y tiempo. Sin embargo, con el uso frecuente de estos vehículos, es normal que ciertos componentes se desgasten, como es el caso de las ruedas.'
    >
      <section className={styles.changeWheel}>
        <h1 className={styles.title}>Como cambiar las ruedas de tu patinete eléctrico</h1>
        <Image loader={myLoader} height={0} width={0} src={head} alt='Chica agarrando una scooter eléctrica' />
        <p className={styles.description}>Cada vez son más los usuarios que optan por utilizar patinetes eléctricos como su principal medio de transporte debido a las ventajas que ofrece en términos de ahorro de combustible y tiempo. Sin embargo, con el uso frecuente de estos vehículos, es normal que ciertos componentes se desgasten, como es el caso de las ruedas. En este sentido, es recomendable acudir a un servicio técnico para su cambio, <strong>aunque en algunos casos puede resultar más conveniente y económico realizar la sustitución uno mismo.</strong></p>
        <Link target='_blank' href='https://amzn.to/3LpB7uo' rel='noreferrer'>Mejores Ruedas para Scooter</Link>
        <p className={styles.description}>Por esta razón, <strong>queremos ofrecerte algunos consejos para que puedas cambiar las ruedas de tu patinete eléctrico en casa</strong>, de forma segura y sencilla. Recuerda que es fundamental utilizar materiales de calidad para garantizar un correcto funcionamiento y prolongar la vida útil de tu scooter.</p>
      </section>
      <section className={styles.tutorial}>
        <h2>Compra correctamente las ruedas de tu scooter</h2>
        <p>Cambiar las ruedas no es solo cambiar el aspecto de tu patinete, también es importante por la seguridad que estas te brindan. Asegúrate de comprar ruedas con las mismas especificaciones que las ruedas que traía de fábrica. Es importante que no cambies las especificaciones de las ruedas, ya que son cruciales para la estabilidad de tu patinete y tu seguridad. <Link target='_blank' href='https://amzn.to/3LpB7uo' rel='noreferrer'>Aquí encotrarás todas las ruedas disponibles.</Link></p>
      </section>
      <section className={styles.tutorial}>
        <h2>Vamos es fácil ahora cambiemos la ruedas de tu scooter eléctrica</h2>
        <p>¡Aprende a cambiar las ruedas de tu patinete eléctrico y dale un toque personalizado! Sabemos que puede sonar un poco aburrido, pero ¡no te preocupes! Te enseñaremos a hacerlo de manera fácil y divertida.</p>
        <p><strong>Primero, necesitas retirar las ruedas que ya tienes instaladas.</strong> Coloca el patinete sobre una superficie que no dañe las ruedas y te permita trabajar con ellas.</p>
        <ol>
          <li><strong>Quita el embellecedor</strong> que protege los tornillos con cuidado para evitar dañarlo.</li>
          <li>Utiliza el destornillador adecuado para quitar los tornillos que sujetan la rueda a la base. <strong>¡Cuidado! No olvides quitar la tuerca del patinete eléctrico que fija el motor.</strong></li>
          <li>Una vez que hayas retirado los tornillos, <strong>retira la rueda con cuidado</strong> para evitar dañar el motor. Si la rueda está muy ajustada, puedes ayudarte con un martillo de goma para aflojarla.</li>
        </ol>

        <GoogleAds />
        <p><strong>Al momento de instalar las nuevas ruedas, sigue cuidadosamente las instrucciones del fabricante.</strong> En algunos casos, hacerlo tú mismo puede ser complicado y el montaje podría quedar defectuoso. Si necesitas cambiar tu rueda maciza, es preferible sustituir la rueda completa; no intentes cambiar el neumático ya que puede resultar muy difícil. Si las llantas son tubeless o con cámara, resulta un poco más sencillo, pero aún necesitarás un poco de fuerza.</p>
        <p>Vacía por completo la cámara y mete la válvula hacia dentro. Luego, introduce una herramienta plana entre la rueda y el neumático y aplica un movimiento de palanca. Un destornillador puede servirte, pero asegúrate de cubrirlo con cinta aislante para evitar dañar la llanta. Coloca la rueda en el suelo y cambia la cámara o el neumático nuevo. Ahora debes volver a colocar el neumático en la llanta y enjabonar el borde para que entre mejor. Con ayuda de destornilladores, ve introduciendo la goma de la rueda en la llanta y ¡listo!</p>
        <p>No te preocupes si tienes dificultades para encajar el neumático en la llanta. Puedes calentar la llanta para ablandarla y hacer el proceso más fácil. ¡Así que no te rindas y dale una nueva apariencia a tu patinete!</p>
        <p>Muy bien! Ahora que tienes tus nuevas ruedas instaladas, es importante que las pruebes en un lugar seguro para asegurarte de que están funcionando correctamente.</p>
        <Image height={0} width={0} loader={myLoader} src={foot} alt='Patinete en un camino en el campo' />
        <p>En general, es recomendable que pruebes tu patinete eléctrico en un espacio libre de tráfico o en un parque, donde puedas manejarlo con tranquilidad y sin poner en peligro a otras personas.</p>
      </section>
    </Layout>
  )
}

export default ChangeWheel
