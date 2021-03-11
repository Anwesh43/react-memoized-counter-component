import React from 'react'

const childStyle = () => ({
    width: '100px',
    height: '100px',
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})
const ChildBlock = ({n, text}) => {
    console.log("rendering child")
    return <div style = {childStyle()}>
       {text}&nbsp;{new Date().getSeconds()}
    </div>
}
export default React.memo(ChildBlock)

export {ChildBlock}