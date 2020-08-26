import React, { useState } from 'react'
import classes from './DescriptionTabs.module.scss'
import { useEffect } from 'react'

interface IProps {
  activeTab: string
  updateContent: (id) => void
}

const DescriptionTabs: React.FC<IProps> = props => {
  const [activeTab, selectTab] = useState(props.activeTab)
  const selectTabHandler = (id: string) => {
    if (id !== '') {
      document.getElementById(activeTab)?.classList.remove(classes.SelectedTab)
      document.getElementById(id)?.classList.add(classes.SelectedTab)
      selectTab(id)
      props.updateContent(id)
    }
  }

  useEffect(() => {
    document.getElementById(activeTab)?.classList.add(classes.SelectedTab)
  })

  return (
    <div
      className={classes.DescriptionTabs}
      onClick={e => selectTabHandler(e.target['id'])}
    >
      {props.children}
    </div>
  )
}

export default DescriptionTabs
