import {CgClose} from 'react-icons/cg'
import {FiCircle} from 'react-icons/fi'

function GameBox({ value, className, onClickGameBox }) {
  const label = value === 'X' ? <CgClose size="50px" /> : <FiCircle size="45px" />

  return (
    <>
      {<div className={className} onClick={onClickGameBox}>{value && label}</div>}
    </>
  )
}

export default GameBox