import React from 'react'
import { ListItem, ListItemText, List} from '@mui/material'

function Todo(props) {
  return (
    <div>
        <List className="todo_list">
         <ListItem>
                 
                <ListItemText primary={props.text} secondary="deadline EOD"/>
         </ListItem>

        </List> 
    </div>
  )
}

export default Todo
