function Buttons({fontSize, set_fontSize}){
    return (
      <div className='buttons'>
        <button onClick={()=>{set_fontSize(fontSize+1)}} className='font-sizeUp-btn'>▲</button>
        <button onClick={()=>{set_fontSize(fontSize-1)}} className='font-sizeDown-btn'>▼</button>
      </div>
    )
}

export default Buttons;