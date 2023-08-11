import styles from './styles.module.css'

export const TableContainer = ({ children }) => <table className={styles.container}>{children}</table>

export const TableHead = ({ titles }) => (
  <thead>
    <tr>
      {titles.map((item, index) => (
        <TableTitle key={`table-title-${index}`}>{item}</TableTitle>
      ))}
    </tr>
  </thead>
)

export const TableBody = ({ children, innerRef, provided }) => (
  <tbody ref={innerRef} {...provided.droppableProps}>
    {children}
    {provided.placeholder}
  </tbody>
)

export const TableRow = ({ elements, innerRef, provided }) => {
  if (!Array.isArray(elements) && typeof elements === 'object') {
    elements = Object.values(elements)
  }
  return (
    <tr className={styles.row} ref={innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      {elements.map((item, index) => (
        <TableItem key={`table-item-${index}`}>{item}</TableItem>
      ))}
    </tr>
  )
}

export const TableTitle = ({ children }) => <th className={styles.title}>{children}</th>

export const TableItem = ({ children }) => <td className={styles.item}>{children}</td>
