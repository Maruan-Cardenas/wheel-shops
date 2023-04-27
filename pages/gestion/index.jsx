import { Field, Form, Formik } from 'formik'
import Layout from '../../components/Layout'
import { setArticles } from '../../firebase/methods/set'
import styles from './Gestion.module.scss'

const Gestion = () => {
  const initialValues = {
    title: '',
    price: '',
    cents: '',
    image: '',
    link: '',
    category: '',
    brand: []
  }

  return (
    <Layout>
      <section className={styles.gestion}>
        <h1>Gestion</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors = {}
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setArticles(values)
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Field
                type='text'
                name='title'
                placeholder='Titulo'
              />
              <div className={styles.price}>
                <Field
                  type='number'
                  name='price'
                  placeholder='Precio'
                />
                <Field
                  type='number'
                  name='cents'
                  placeholder='Céntimos'
                />
              </div>
              <Field
                type='text'
                name='image'
                placeholder='Imagen'
              />
              <Field
                type='text'
                name='link'
                placeholder='Link'
              />
              <div
                class={styles.inputBox}
                role='group'
                aria-labelledby='my-radio-group'
              >
                <span>
                  Categoría:
                </span>
                <Field
                  type='radio'
                  name='category'
                  value='ruedas'
                  id='ruedas'
                />
                <label for='ruedas'>
                  Ruedas
                </label>
                <Field
                  type='radio'
                  name='category'
                  value='baterias'
                  id='baterias'
                />
                <label for='baterias'>
                  Baterías
                </label>
                <Field
                  type='radio'
                  name='category'
                  value='cagador'
                  id='cargador'
                />
                <label for='cargador'>
                  Cargador
                </label>
                <Field
                  type='radio'
                  name='category'
                  value='patinetes'
                  id='patinetes'
                />
                <label for='patinetes'>
                  Patinetes
                </label>
              </div>
              <div class={styles.inputBox} role='group' aria-labelledby='my-radio-group'>
                <span>
                  Marcas:
                </span>
                <Field
                  type='checkbox'
                  name='brand'
                  value='Speedway'
                  id='speedway'
                />
                <label for='speedway'>
                  Speedway
                </label>
                <Field
                  type='checkbox'
                  name='brand'
                  value='xiaomi'
                  id='xiaomi'
                />
                <label for='xiaomi'>
                  Xiaomi
                </label>
                <Field
                  type='checkbox'
                  name='brand'
                  value='ninebot'
                  id='ninebot'
                />
                <label for='ninebot'>
                  Ninebot
                </label>
                <Field
                  type='checkbox'
                  name='brand'
                  value='inmotion'
                  id='inmotion'
                />
                <label for='inmotion'>
                  Inmotion
                </label>
                <Field
                  type='checkbox'
                  name='brand'
                  value='cecotec'
                  id='cecotec'
                />
                <label for='cecotec'>
                  Cecotec
                </label>

              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.submit}
                  type='submit'
                >
                  Publicar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </Layout>
  )
}

export default Gestion
