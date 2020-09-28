import React from 'react'
import classes from './PopupContainer.module.scss'

type IProps = {
  title: string
  checkboxHandler: () => void
  showPopupHandler: () => void
}

const PopupContainer: React.FC<IProps> = props => {
  return (
    <div className={classes.PopupContainer}>
      {props.children}

      <span>
        I have read and accept {props.title}
        <input type='checkbox' onChange={props.checkboxHandler} />
      </span>

      <span onClick={props.showPopupHandler} className={classes.RejectBtn}>
        Close
      </span>
    </div>
  )
}

export default PopupContainer
