import styles from './Resanas.module.scss'

// Components
import Layout from '../../components/Layout'

// Nextjs components
import Image from 'next/image'
import Link from 'next/link'

// Images
import { useState } from 'react'
import SmartgyroSpeedwayImg10 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-10.jpg'
import SmartgyroSpeedwayImg11 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-11.jpg'
import SmartgyroSpeedwayImg12 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-12.jpg'
import SmartgyroSpeedwayImg13 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-13.jpg'
import SmartgyroSpeedwayImg14 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-14.jpg'
import SmartgyroSpeedwayImg2 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-2.jpg'
import SmartgyroSpeedwayImg3 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-3.jpg'
import SmartgyroSpeedwayImg4 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-4.jpg'
import SmartgyroSpeedwayImg5 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-5.jpg'
import SmartgyroSpeedwayImg6 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-6.jpg'
import SmartgyroSpeedwayImg7 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-7.jpg'
import SmartgyroSpeedwayImg8 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-8.jpg'
import SmartgyroSpeedwayImg9 from '../../public/resenas/smartgyro-speedway/smartgyro-speedway-9.jpg'
import SmartgyroSpeedwayImg from '../../public/resenas/smartgyro-speedway/smartgyro-speedway.jpg'

const SmartgyroSpeedway = () => {
  const [image, setImage] = useState(SmartgyroSpeedwayImg)
  return (
    <Layout
      title='SmartGyro Speedway V3.0 | Mejor Tecnología | Patinete Eléctrico'
      description='Descubre el patinete eléctrico SmartGyro Speedway, un modelo todoterreno que te llevará a cualquier lugar. Con neumáticos de 10", sistema de frenos de disco y suspensión en ambas ruedas, podrás conducir con seguridad en cualquier terreno. Además, su batería de larga duración y potente motor te permitirán recorrer largas distancias sin problema.'
    >
      <div className={styles.review}>
        <section className={styles.header}>
          <h1 className={styles.title}>Patinete Smartgyro Speedway V3.0</h1>
          <div className={styles.paragraph}>
            <p>
              Descubre el patinete eléctrico <strong>SmartGyro Speedway</strong>, un modelo todoterreno que te llevará a cualquier lugar. Con neumáticos de 10", sistema de frenos de disco y suspensión en ambas ruedas, podrás conducir con seguridad en cualquier terreno. Además, su batería de larga duración y potente motor te permitirán recorrer largas distancias sin problema.
            </p>
            <Link href='https://amzn.to/3Ldxl78' target='_blank' rel='noopener noreferrer'>Comprar en Amazon</Link>
          </div>
          <Image src={image} alt='Smartgyro Speedway' />
        </section>
        <div className={styles.images}>
          <Image
            src={SmartgyroSpeedwayImg}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg)}
          />
          <Image
            src={SmartgyroSpeedwayImg2}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg2)}
          />
          <Image
            src={SmartgyroSpeedwayImg3}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg3)}
          />
          <Image
            src={SmartgyroSpeedwayImg4}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg4)}
          />
          <Image
            src={SmartgyroSpeedwayImg5}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg5)}
          />
          <Image
            src={SmartgyroSpeedwayImg6}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg6)}
          />
          <Image
            src={SmartgyroSpeedwayImg7}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg7)}
          />
          <Image
            src={SmartgyroSpeedwayImg8}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg8)}
          />
          <Image
            src={SmartgyroSpeedwayImg9}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg9)}
          />
          <Image
            src={SmartgyroSpeedwayImg10}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg10)}
          />
          <Image
            src={SmartgyroSpeedwayImg11}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg11)}
          />
          <Image
            src={SmartgyroSpeedwayImg12}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg12)}
          />
          <Image
            src={SmartgyroSpeedwayImg13}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg13)}
          />
          <Image
            src={SmartgyroSpeedwayImg14}
            alt='Smartgyro Speedway'
            onClick={() => setImage(SmartgyroSpeedwayImg14)}
          />
        </div>
        <section className={styles.characteristics}>
          <h2>Características de SmartGyro Speedway</h2>
          <ul>
            <li><strong>Motor de:</strong> 500W</li>
            <li><strong>Velocidad máxima limitada a:</strong> 25 km/h</li>
            <li><strong>Batería de litio:</strong> con una capacidad de 12.500 mAh</li>
            <li><strong>Autonomía de:</strong> 45 Km / 3 modos de conducción seleccionables desde su display (Eco, Confort y Sport)</li>
            <li><strong>Tiempo de carga de:</strong> 6-8 horas</li>
            <li><strong>Ruedas neumáticas Tubeless de:</strong> 10" resistentes y estables preparadas para circular por todo tipo de terrenos</li>
            <li><strong>Sistema de frenos de:</strong> disco</li>
            <li><strong>Suspensión:</strong> delantera y trasera</li>
            <li><strong>Peso de:</strong> 22 kg</li>
            <li><strong>Soporta hasta:</strong> 120 kg</li>
            <li><strong>Dimensiones de:</strong> 119 x 45 x 23cm</li>
            <li><strong>Potente iluminación Led:</strong> Foco frontal de alto brillo, leds en la base, intermitentes seleccionables desde el manillar y luz de freno trasera.</li>
          </ul>
        </section>
        <section className={styles.description}>
          <h2>¿Por qué comprar Smartgyro Speedway?</h2>
          <p>
            Si buscas un patinete eléctrico que sea resistente y robusto, capaz de transportarte con seguridad tanto en ciudad como en caminos, el SmartGyro Speedway es la elección ideal. Con neumáticos de 10" y un sistema de frenos de disco, podrás circular por cualquier terreno con total confianza.
          </p>
          <p>
            Además, este modelo cuenta con suspensión en ambas ruedas, lo que es especialmente útil en terrenos irregulares como empedrados o caminos de tierra. Con un motor de 500W y una velocidad máxima de 45 km/h (deslimitado), podrás subir cuestas y recorrer largas distancias sin problema.
          </p>
          <p>
            Su batería de 48V ofrece una autonomía de hasta 40 km en máxima exigencia, aunque en terrenos más planos podrás aprovechar una distancia de hasta 45 km antes de tener que cargarla. Y a pesar de su tamaño, su cuerpo de aluminio reforzado se pliega fácilmente para guardar en cualquier espacio.
          </p>
          <p>
            En cuanto a su manejo, el SmartGyro Speedway incluye una pantalla en el manillar que muestra la distancia recorrida y la batería disponible, así como luz LED delantera y trasera para mayor visibilidad en condiciones de poca luz. En resumen, si buscas un patinete eléctrico seguro y resistente para tus desplazamientos diarios, el SmartGyro Speedway es una excelente opción.
          </p>
        </section>
        <section className={styles.buy}>
          <h2>¿Dónde comprar Smartgyro Speedway?</h2>
          <div>
            <Image src={SmartgyroSpeedwayImg13} alt='Smartgyro Speedway' />
            <p>
              El SmartGyro Speedway está disponible en Amazon por un precio de 689.58€. A continuación, te dejamos el enlace directo para que puedas comprarlo:
              <Link href='https://amzn.to/3Ldxl78' target='_blank' rel='noopener noreferrer'>Comprar en Amazon</Link>
            </p>
          </div>
        </section>
        <section className={styles.video}>
          <h2>Video oficial de SMARTGYRO SPEEDWAY V.3</h2>
          <iframe src='https://www.youtube.com/embed/KCQDDPWt4aM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
        </section>
        <section className={styles.advantages}>
          <h2>Todas las ventajas de Smartgyro Speedway</h2>
          <ul>
            <li>✅<strong>Frenos de disco: </strong>El sistema de frenos de disco del SmartGyro Speedway garantiza una frenada segura y eficiente en cualquier circunstancia.</li>
            <li>✅<strong>Suspensión delantera y trasera: </strong>La suspensión en ambas ruedas proporciona una conducción suave y cómoda, incluso en terrenos irregulares.</li>
            <li>✅<strong>Potencia de 500W: </strong>El potente motor de 500W del SmartGyro Speedway te permite subir pendientes y superar obstáculos con facilidad.</li>
            <li>✅<strong>Gran autonomía: </strong>Con una batería de 48V, el SmartGyro Speedway ofrece una autonomía de hasta 40 km en condiciones de máxima exigencia, y de hasta 45 km en superficies planas.</li>
            <li>✅<strong>Cuerpo plegable: </strong>A pesar de su tamaño, el cuerpo del SmartGyro Speedway se puede plegar para facilitar su almacenamiento y transporte.</li>
            <li>✅<strong>Display frontal: </strong>El display frontal del SmartGyro Speedway te muestra información útil durante tu trayecto, como la velocidad, la distancia recorrida y la batería restante.</li>
          </ul>
        </section>
        <div className={styles.law}>
          <section>
            <h2>Normativa de tráfico para utilizar SmartGyro Speedway</h2>
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
          <h2>Review del SMARTGYRO SPEEDWAY v.3.0</h2>
          <iframe src='https://www.youtube.com/embed/bafY9q-XuI0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
        </section>
      </div>
    </Layout>
  )
}

export default SmartgyroSpeedway
