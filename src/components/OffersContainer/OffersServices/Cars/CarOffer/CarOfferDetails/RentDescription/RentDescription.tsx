import React from 'react'
import classes from './RentDescription.module.scss'
import DescriptionTabs from '../../../../../../../UI/DescriptionTabs/DescriptionTabs'
import Tab from '../../../../../../../UI/DescriptionTabs/Tab/Tab'

interface IProps {
  updateContent: () => void
  currentContent: string
  descriptionContent: React.Component
}

const RentDescription: React.FC<IProps> = props => {
  return (
    <div className={classes.RentForm}>
      <DescriptionTabs
        updateContent={props.updateContent}
        activeTab={props.currentContent}
      >
        <Tab tabTitle='Details' id='rentDetails' />
        <Tab tabTitle='Rent Form' id='rentForm' />
      </DescriptionTabs>
      <div className={classes.DescriptionText}>{props.descriptionContent}</div>
    </div>
  )
}

export default RentDescription
