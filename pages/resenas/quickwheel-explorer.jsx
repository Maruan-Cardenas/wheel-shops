import styles from './Resanas.module.scss'

// Components
import Layout from '../../components/Layout'

// Nextjs components
import Image from 'next/image'
import Link from 'next/link'

// Images
import { useState } from 'react'
import QuickWheelExplorerImg from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-1.jpg'
import QuickWheelExplorerImg2 from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-2.jpg'
import QuickWheelExplorerImg3 from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-3.jpg'
import QuickWheelExplorerImg4 from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-4.jpg'
import QuickWheelExplorerImg5 from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-5.jpg'
import QuickWheelExplorerImg6 from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-6.jpg'
import QuickWheelExplorerImg7 from '../../public/resenas/quickwheel-explorer/quickwheel-explorer-7.jpg'

const QuickWheelExplorer = () => {
  const [image, setImage] = useState(QuickWheelExplorerImg)
  return (
    <Layout
      title='QuickWheel Explorer 6000w | Potencia y autonomía | Patinetes eléctricos'
      description='Disfruta de la sorprendente potencia del QuickWheel Explorer de 6000W y su batería SVOLT de 60V/ 38,4 Ah, con una autonomía de 100Km aproximadamente y una velocidad punta de 85Km/h. Con Certificado Europeo y limitación de fábrica a 25Km/h deslimitable con solo apretar un botón.'
    >
      <div className={styles.review}>
        <section className={styles.header}>
          <h1 className={styles.title}>QuickWheel Explorer 6000w</h1>
          <div className={styles.paragraph}>
            <p>
              Disfruta de la sorprendente potencia del <strong>QuickWheel Explorer</strong> de 6000W y su batería SVOLT de 60V/ 38,4 Ah, con una autonomía de 100Km aproximadamente y una velocidad punta de 85Km/h. Con Certificado Europeo y limitación de fábrica a 25Km/h deslimitable con solo apretar un botón.
            </p>
            <Link href='https://amzn.to/44bpPCv' target='_blank' rel='noopener noreferrer'>Comprar en Amazon</Link>
          </div>
          <Image src={image} alt='Smartgyro Speedway' />
        </section>
        <div className={styles.images}>
          <Image
            src={QuickWheelExplorerImg}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg)}
          />
          <Image
            src={QuickWheelExplorerImg2}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg2)}
          />
          <Image
            src={QuickWheelExplorerImg3}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg3)}
          />
          <Image
            src={QuickWheelExplorerImg4}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg4)}
          />
          <Image
            src={QuickWheelExplorerImg5}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg5)}
          />
          <Image
            src={QuickWheelExplorerImg6}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg6)}
          />
          <Image
            src={QuickWheelExplorerImg7}
            alt='Smartgyro Speedway'
            onClick={() => setImage(QuickWheelExplorerImg7)}
          />
        </div>
        <section className={styles.characteristics}>
          <h2>Características del QuickWheel Explorer</h2>
          <ul>
            <li><strong>Motor de:</strong> 6000W de potencia.</li>
            <li><strong>batería</strong> SVOLT de 60V a 38,4Ah.</li>
            <li><strong>Incluido: </strong> Asiento y maleta.</li>
            <li><strong>Autonomía: </strong> 90-100km.</li>
            <li><strong>Velocidad: </strong> limitado a 25km/h desbloqueable a 85km/h.</li>
            <li><strong>Manillar: </strong> regulable en altura.</li>
            <li><strong>Soporta pendientes de hasta: </strong> el 40%.</li>
          </ul>
        </section>
        <section className={styles.description}>
          <h2>¿Por qué comprar QuickWheel Explorer?</h2>
          <p>
            Si eres un amante de los vehículos eléctricos, en concreto de las motocicletas, seguro que te interesa conocer el QuickWheel Explorer de 6000W. Se trata de una moto con gran potencia capaz de recorrer hasta 100 km con una sola carga gracias a su batería SVOLT de 60V/ 38,4 Ah. Además, puede alcanzar una velocidad punta de 85 Km/h, aunque viene limitada de fábrica a 25 Km/h, lo que la hace apta para ser utilizada en ciudades.
          </p>
          <p>
            Su diseño es moderno y atractivo, con acabados de alta calidad y una línea imponente que refleja su gran poderío. Además, está equipado con neumáticos sin cámara todoterreno, lo que lo hace ideal tanto para terrenos off-road como para ciudad.
          </p>
        </section>
        <section className={styles.buy}>
          <h2>¿Dónde comprar QuickWheel Explorer?</h2>
          <div>
            <Image src={QuickWheelExplorerImg2} alt='QuickWheel Explorer' />
            <p>
              El QuickWheel Explorer está disponible en Amazon por un precio de 1749€. A continuación, te dejamos el enlace directo para que puedas comprarlo:
              <Link href='https://amzn.to/44bpPCv' target='_blank' rel='noopener noreferrer'>Comprar en Amazon</Link>
            </p>
          </div>
        </section>
        <section className={styles.video}>
          <h2>Video oficial de QuickWheel Explorer</h2>
          <iframe src='https://www.youtube.com/embed/fOnHTw7NtAc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
        </section>
        <section className={styles.advantages}>
          <h2>Todas las ventajas de QuickWheel Explorer</h2>
          <ul>
            <li>✅<strong>Frenos de disco: </strong>El sistema de frenos de disco del QuickWheel Explorer garantiza una frenada segura y eficiente en cualquier circunstancia.</li>
            <li>✅<strong>Suspensión delantera y trasera: </strong>La suspensión en ambas ruedas proporciona una conducción suave y cómoda, incluso en terrenos irregulares.</li>
            <li>✅<strong>Potencia de 6000W: </strong>El potente motor de 6000W del QuickWheel Explorer te permite subir pendientes y superar obstáculos con facilidad.</li>
            <li>✅<strong>Gran autonomía: </strong>Con una batería de 60V, el QuickWheel Explorer ofrece una autonomía de hasta 90km en condiciones de máxima exigencia, y de hasta 100km km en superficies planas.</li>
            <li>✅<strong>Display frontal: </strong>El display frontal del QuickWheel Explorer te muestra información útil durante tu trayecto, como la velocidad, la distancia recorrida y la batería restante.</li>
          </ul>
        </section>
        <div className={styles.law}>
          <section>
            <h2>Normativa de tráfico para utilizar QuickWheel Explorer</h2>
            <p>
              Antes de circular es importante conocer las normas que tienen que cumplir los usuarios de los vehículos de movilidad personal (VMP) en sus desplazamientos urbanos y hacerlo de forma segura.
            </p>
            <p>
              Cada Ayuntamiento puede regular, de una manera específica, la circulación de VMP (entre ellos, los patinetes eléctricos). Sin embargo, todos los usuarios deben cumplir unas condiciones mínimas que veremos a continuación.
            </p>
            <ul>
              <li>🟢 Está prohibido que los VMP vayan por aceras, zonas peatonales, pasos de travesía, autopistas, autovías, vías interurbanas o túneles en ámbito urbano. Las vías autorizadas para circular las indicará una ordenanza municipal. Si no la hubiera, se permite la circulación por cualquier calzada urbana.</li>
              <li>🟢 La velocidad de estos vehículos deberá estar entre 6 y 25 km/h.</li>
              <li>🟢 Está prohibido que los patinetes eléctricos circulen por aceras.</li>
            </ul>
          </section>
          <section>
            <h2>Requisitos técnicos de obligatorios patinete eléctrico</h2>
            <ul>
              <li>
                🟢 Dispositivo de advertencia acústica (timbre)
                Luces y dispositivos reflectantes traseros y delanteros.
              </li>
              <li>
                🟢 Sistema de frenado
              </li>
              <li>
                🟢 Se aconseja, además: El uso del casco, aún cuando la ordenanza municipal no lo contemple como obligatorio.
                Seguro de responsabilidad civil.
              </li>

            </ul>
          </section>
        </div>
        <section className={styles.video}>
          <h2>Review del QuickWheel Explorer</h2>
          <iframe src='https://www.youtube.com/embed/y9Spi8r93fE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
        </section>
      </div>
    </Layout>
  )
}

export default QuickWheelExplorer
