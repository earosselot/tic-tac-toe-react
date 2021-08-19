import {ImCross} from 'react-icons/im'
import {FiCircle} from 'react-icons/fi'

function GameBox({ value, className, onClickGameBox }) {
  const label = value === 'X' ? <ImCross height="100px" width="100px" /> : <FiCircle />

  return (
    <>
      {<div className={className} onClick={onClickGameBox}>{value && label}</div>}
    </>
  )
}

export default GameBox