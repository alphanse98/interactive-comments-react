import React from 'react'
import './EditBtn.scss'

function EditBtn(props) {
  let updateState=(e,ChildIndex)=>{
    props.setEditData(e)
    props.setEditIndex(ChildIndex)
  }
  return (
    <button className='EditBtn' onClick={()=>updateState(props.e,props.ChildIndex)}>Edit</button>
  )
}

export default EditBtn