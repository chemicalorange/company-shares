import { render, screen } from '@testing-library/react'
import { TableBody, TableContainer, TableHead, TableRow } from './index'

const titles = ['Name', 'Age']
const data = [
  ['one', 'two'],
  ['three', 'two'],
]
describe('Table constructor component', () => {
  it('Table renders', () => {
    render(
      <TableContainer>
        <TableHead titles={titles}></TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`row-title-${index}`} elements={row} />
          ))}
        </TableBody>
      </TableContainer>,
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('one')).toBeInTheDocument()
  })

  it('Table renders without data', () => {
    render(
      <TableContainer>
        <TableHead></TableHead>
        <TableBody>
          <TableRow />
        </TableBody>
      </TableContainer>,
    )
    expect(screen.queryByRole('td')).toBeNull()
  })
})
