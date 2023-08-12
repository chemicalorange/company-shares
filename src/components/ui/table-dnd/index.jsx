import { TableBody, TableContainer, TableHead, TableRow } from '../table'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { updateOrder } from '../../../store/slices/companySharesSlice'

export function TableDnd({ titles, elements, firstIndex }) {
  const dispatch = useDispatch()
  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    dispatch(
      updateOrder({ srcIndex: firstIndex + result.source.index, destIndex: firstIndex + result.destination.index }),
    )
  }
  return (
    <TableContainer>
      <TableHead titles={['#', ...titles]} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={'table-droppable'}>
          {(provided) => (
            <TableBody innerRef={provided.innerRef} provided={provided}>
              {elements.map((row, index) => (
                <Draggable draggableId={row.id} index={index} key={row.id}>
                  {(provided) => (
                    <TableRow
                      elements={[index + 1, ...Object.values(row)]}
                      provided={provided}
                      innerRef={provided.innerRef}
                    />
                  )}
                </Draggable>
              ))}
            </TableBody>
          )}
        </Droppable>
      </DragDropContext>
    </TableContainer>
  )
}
