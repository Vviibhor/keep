import React from 'react'
import "./sidebar.css"

export default function sidebar() {

    return (
<div className="just">
<br></br>
    <div className="row">
        <span></span><i className="material-icons">
        notes
        </i>
        <h5>Notes</h5>  
     </div>   
     <br></br>
     <div className="row">
        <i className="material-icons">
        notification_important
        </i><h5>Reminder</h5>
        </div>
        
        
     <hr>
     </hr>   
     <div className="row">
        <i className="material-icons">
        chat_bubble_outline
        </i><h5>Labels</h5>
        </div>
        
 </div>

    )
}
