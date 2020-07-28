import React from 'react'

const Shape = (props) => {
    const shape = props.shape
    const selectShape = props.selectShape

    return (
        <div className={shape} onClick={() => selectShape(shape)}/>
    )
}
export default Shape