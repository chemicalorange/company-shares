import { TableBody, TableContainer, TableHead, TableRow } from '../table'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export function TableDnd({ titles, elements, onUpdate }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(elements)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    onUpdate(items)
  }
  return (
    <TableContainer>
      <TableHead titles={titles} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={'table-droppable'}>
          {(provided) => (
            <TableBody innerRef={provided.innerRef} provided={provided}>
              {elements.map((row, index) => (
                <Draggable draggableId={row.id} index={index} key={row.id}>
                  {(provided) => <TableRow elements={row} provided={provided} innerRef={provided.innerRef} />}
                </Draggable>
              ))}
            </TableBody>
          )}
        </Droppable>
      </DragDropContext>
    </TableContainer>
  )
}
