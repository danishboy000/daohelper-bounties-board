import {useState} from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import './App.css';
import Column from './components/Column'
import columnsData from './data/columns'

function App() {
  //columns data will eventually come from database, for now its hard coded
  const [columns,setColumns] = useState(columnsData)

  const onDragEnd = result => {
    if(!result.destination) return; // if item is dragged outside of column
    
    const {source,destination} = result
    if(source.droppableId !== destination.droppableId) // if item is dragged in another column
    {
      // remove item for source column and add into destination column
      const [sourceColumn] = columns.filter( column => column.id === source.droppableId)
      const [destColumn] = columns.filter( column => column.id === destination.droppableId)
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      sourceColumn.items = sourceItems
      destColumn.items = destItems
      setColumns([...columns])
    }
    else // if item is dragged in same column
    {
      // remove item from source index and add into destination index in same column
      const [column] = columns.filter( column => column.id === source.droppableId)
      const copiedItems = [...column.items]
      const [removedItems] = copiedItems.splice(source.index,1)
      copiedItems.splice(destination.index,0,removedItems)
      column.items = copiedItems
      setColumns([...columns])
    }
    

  }

  const allColumns = columns.map((column,index) => {
    return (
      <Droppable droppableId = {column.id} key = {column.id}>
      {
        (provided,snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref = {provided.innerRef}
            >
            
              <Column items = {column.items} color = {column.color} title = {column.title} />
              {provided.placeholder}
            </div>
          )
        }
      }
      </Droppable>
    )
  })

  return (
    <div className="App" style={{ backgroundImage: "url('/background.png')" }}>
      <div className="bountiesCon">
        <div className = 'bountiesTitle'>
          <h1>Bounties</h1>
        </div>
        <div className = 'bountiesBody'>
          <DragDropContext onDragEnd = {result => onDragEnd(result)}>
          {
            allColumns
          }
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
