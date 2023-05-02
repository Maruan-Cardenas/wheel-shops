import styles from './Resanas.module.scss'

// Components
import Layout from '../../components/Layout'

// Nextjs components
import Image from 'next/image'
import Link from 'next/link'

// Images
import { useState } from 'react'
import xiaomiElectricScooter2 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-2.jpg'
import xiaomiElectricScooter3 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-3.jpg'
import xiaomiElectricScooter4 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-4.jpg'
import xiaomiElectricScooter5 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-5.jpg'
import xiaomiElectricScooter6 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-6.jpg'
import xiaomiElectricScooter7 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-7.jpg'
import xiaomiElectricScooter8 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-8.jpg'
import xiaomiElectricScooter9 from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-9.jpg'
import xiaomiElectricScooter from '../../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite.jpg'

const SmartgyroSpeedway = () => {
  const [image, setImage] = useState(xiaomiElectricScooter)
  return (
    <Layout
      title='Xiaomi Electric Scooter 3 Lite V3.0 | Mejor Tecnología | Patinete Eléctrico'
      description='El Xiaomi Scooter 3 Lite es una excelente opción para aquellos que buscan un patinete eléctrico asequible, ligero y fácil de transportar. Es perfecto para trayectos cortos en la ciudad. Además, cuenta con un diseño elegante y funcionalidades como conectividad Bluetooth y una app para controlar el patinete.'
    >
      <div className={styles.review}>
        <section className={styles.header}>
          <h1 className={styles.title}>Patinete Eléctrico Xiaomi Scooter 3 Lite</h1>
          <div className={styles.paragraph}>
            <p>
              <strong>El Xiaomi Scooter 3 Lite</strong> es una excelente opción para aquellos que buscan un patinete eléctrico asequible, ligero y fácil de transportar. Es perfecto para trayectos cortos en la ciudad. Además, cuenta con un diseño elegante y funcionalidades como conectividad Bluetooth y una app para controlar el patinete.
            </p>
            <Link href='https://amzn.to/3VnELtc' target='_blank' rel='noopener noreferrer'>Comprar en Amazon</Link>
          </div>
          <Image src={image} alt='Xiaomi Electric Scooter 3 Lite' />
        </section>
        <div className={styles.images}>
          <Image
            src={xiaomiElectricScooter}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter)}
          />
          <Image
            src={xiaomiElectricScooter2}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter2)}
          />
          <Image
            src={xiaomiElectricScooter3}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter3)}
          />
          <Image
            src={xiaomiElectricScooter4}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter4)}
          />
          <Image
            src={xiaomiElectricScooter5}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter5)}
          />
          <Image
            src={xiaomiElectricScooter6}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter6)}
          />
          <Image
            src={xiaomiElectricScooter7}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter7)}
          />
          <Image
            src={xiaomiElectricScooter8}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter8)}
          />
          <Image
            src={xiaomiElectricScooter9}
            alt='Xiaomi Electric Scooter 3 Lite'
            onClick={() => setImage(xiaomiElectricScooter9)}
          />
        </div>
        <section className={styles.characteristics}>
          <h2>Características de Xiaomi Electric Scooter 3 Lite</h2>
          <ul>
            <li><strong>Potencia del Motor:</strong> 250W</li>
            <li><strong>Velocidad Máxima:</strong> 25 km/h</li>
            <li><strong>Autonomía:</strong> 20 km</li>
            <li><strong>Tiempo de Carga:</strong> 5 horas</li>
            <li><strong>Peso:</strong> 13 kg</li>
            <li><strong>Capacidad de Carga:</strong> 100 kg</li>
            <li><strong>Dimensiones:</strong> 110.5 x 43 x 113.7 cm</li>
            <li><strong>Neumáticos de cámara de aire de:</strong> 8 pulgadas</li>
            <li><strong>Modos de Conducción:</strong> 3</li>
            <li><strong>Luces:</strong> Luz de posición y freno + reflectores</li>
            <li><strong>Conectividad:</strong> Bluetooth / compatibilidad con app Xiaomi Home</li>
            <li><strong>Extras:</strong> Plegable / pantalla LCD / frenos eléctricos E-ABS + freno de tambor</li>
            <li><strong>Capacidad de la bateria:</strong> 5200 mAh / 187 Wh</li>
          </ul>
        </section>
        <section className={styles.description}>
          <h2>¿Por qué comprar la Xiaomi Electric Scooter 3 Lite?</h2>
          <p>
            La Xiaomi Electric Scooter 3 Lite es una de las mejores opciones de patinetes eléctricos del mercado gracias a su calidad, diseño y precio atractivo. Este patinete eléctrico es construido con materiales de alta calidad que lo hacen resistente y duradero, lo que garantiza su larga vida útil. Además, su diseño moderno y elegante lo hace muy atractivo a la vista de los usuarios, convirtiéndolo en uno de los patinetes eléctricos más populares en la actualidad. Pero lo mejor de todo es su precio, que es muy competitivo en comparación con otros patinetes eléctricos de características similares.
          </p>
          <p>
            La Xiaomi Electric Scooter 3 Lite también ofrece una excelente experiencia de uso gracias a su gran autonomía y velocidad. Con una autonomía de hasta 20 km y una velocidad máxima de 25 km/h, este patinete eléctrico es ideal para desplazarse en la ciudad, ir al trabajo o para pasear en el parque. Además, su potente motor y batería de alta calidad hacen que la conducción sea suave y segura en todo momento, lo que convierte a la Xiaomi Electric Scooter 3 Lite en una excelente opción para usuarios de todas las edades y habilidades.
          </p>
          <p>
            Otra ventaja de la Xiaomi Electric Scooter 3 Lite es su facilidad de uso y portabilidad. Este patinete eléctrico es fácil de plegar y transportar, lo que lo hace ideal para llevar en el transporte público, guardar en el maletero del coche o llevar en el ascensor. Además, su peso ligero y tamaño compacto lo hacen fácil de maniobrar y almacenar en cualquier lugar. En resumen, la Xiaomi Electric Scooter 3 Lite es una excelente opción de compra para cualquier persona que busque un patinete eléctrico de calidad, diseño atractivo, gran autonomía y velocidad, facilidad de uso y portabilidad, todo a un precio muy atractivo.
          </p>
        </section>
        <section className={styles.buy}>
          <h2>¿Dónde comprar Xiaomi Electric Scooter 3 Lite?</h2>
          <div>
            <Image src={xiaomiElectricScooter3} alt='Xiaomi Electric Scooter 3 Lite' />
            <p>
              El Xiaomi Electric Scooter 3 Lite está disponible en Amazon por un precio de 289€. A continuación, te dejamos el enlace directo para que puedas comprarlo:
              <Link href='https://amzn.to/3VnELtc' target='_blank' rel='noopener noreferrer'>Comprar en Amazon</Link>
            </p>
          </div>
        </section>
        <section className={styles.advantages}>
          <h2>Todas las ventajas de Xiaomi Electric Scooter 3 Lite</h2>
          <ul>
            <li>✅<strong>Precio: </strong>Es el Scooter con la mejor calidad-precio de Xiaomi</li>
            <li>✅<strong>Autonomía: </strong>20 km</li>
            <li>✅<strong>Velocidad: </strong>Capaz de garantizar hasta 25 km/h y dispone de 3 modos de conducción</li>
            <li>✅<strong>Batería: </strong>moderna de capacidad adecuada</li>
            <li>✅<strong>Motor: </strong>Motor eficiente y de buena potencia para el precio de venta</li>
            <li>✅<strong>Peso: </strong>Modelo muy ligero con un sistema de plegado óptimo</li>
            <li>✅<strong>Diseño: </strong>Cuenta con diseño mejorado con plataforma más ancha y más baja para mayor estabilidad</li>
            <li>✅<strong>Extras: </strong> Pantalla LCD de buenas dimensiones, Sistema de frenos de buena calidad que incluye frenos regenerativos, Ofrece conectividad bluetooth y compatibilidad con la app Mi Home</li>
          </ul>
        </section>
        <div className={styles.law}>
          <section>
            <h2>Normativa de tráfico para utilizar Xiaomi Electric Scooter 3 Lite</h2>
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
          <h2>Review del Xiaomi Electric Scooter 3 Lite v.3.0</h2>
          <iframe src='https://www.youtube.com/embed/FbV8XaDyPnA' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
        </section>
      </div>
    </Layout>
  )
}

export default SmartgyroSpeedway
