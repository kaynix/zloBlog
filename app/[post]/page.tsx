import styles from './page.module.css'

export default function post(props) {
  return (
    <section className={styles.main}>
      <h1>props.title</h1>
      <p>blogs by ID - content </p>
    </section>
  )
}
