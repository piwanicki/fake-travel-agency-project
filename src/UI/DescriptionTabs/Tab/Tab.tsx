import React from 'react'
import classes from './Tab.module.scss'

interface IProps {
  id: string
  tabTitle: string
}

const Tab: React.FC<IProps> = props => {
  return (
    <div className={classes.Tab} id={props.id}>
      {props.tabTitle}
    </div>
  )
}

export default Tab
