import styles from './Answer.module.scss'

const Answer = ({ title, answer, answer2 }) => {
  return (
    <article className={styles.answer}>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
      {answer2 && <p dangerouslySetInnerHTML={{ __html: answer2 }} />}
    </article>
  )
}

export default Answer
