import styles from './styles.module.css'

export const TableContainer = ({ children }) => <table className={styles.container}>{children}</table>

export const TableHead = ({ titles }) => (
  <thead>
    <tr>{titles && titles.map((item, index) => <TableTitle key={`table-title-${index}`}>{item}</TableTitle>)}</tr>
  </thead>
)

export const TableBody = ({ children, innerRef, provided }) => {
  let componentsAttrs = {}

  if (innerRef && provided) {
    componentsAttrs = {
      ref: innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps,
    }
  }

  return (
    <tbody {...componentsAttrs}>
      {children}
      {provided && provided.placeholder}
    </tbody>
  )
}

export const TableRow = ({ elements, innerRef, provided }) => {
  let componentsAttrs = {}

  if (innerRef && provided) {
    componentsAttrs = {
      ref: innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps,
    }
  }

  return (
    <tr className={styles.row} {...componentsAttrs}>
      {elements && elements.map((item, index) => <TableItem key={`table-item-${index}`}>{item}</TableItem>)}
    </tr>
  )
}

export const TableTitle = ({ children }) => <th className={styles.title}>{children}</th>

export const TableItem = ({ children }) => <td className={styles.item}>{children}</td>
