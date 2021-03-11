import React from 'react'
import MemoChildBlock, {ChildBlock} from './ChildBlock'

const parentStyle = () => ({
    width : '400px',
    height: '400px',
    background: 'green',
    display : 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const PartBlock = ({k}) => {
    return <div style = {parentStyle()}>
        {new Date().getSeconds()}
        <ChildBlock text = {'Normal'} n = {Math.floor(k / 10)}></ChildBlock>
        <MemoChildBlock text = {'Memo'} n = {Math.floor(k / 10)}></MemoChildBlock>
    </div>
}

export default PartBlock 