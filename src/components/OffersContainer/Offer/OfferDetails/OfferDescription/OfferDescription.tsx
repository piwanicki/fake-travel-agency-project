import React from 'react'
import classes from './OfferDescription.module.scss'
import DescriptionTabs from '../../../../../UI/DescriptionTabs/DescriptionTabs'
import Tab from '../../../../../UI/DescriptionTabs/Tab/Tab'

interface IProps {
  updateContent: () => void
  activeTab: string
  descriptionContent: React.Component
}

const OfferDescription: React.FC<IProps> = props => {
  const { updateContent, activeTab, descriptionContent } = props
  return (
    <div className={classes.OfferDescription}>
      <DescriptionTabs updateContent={updateContent} activeTab={activeTab}>
        <Tab tabTitle='Description' id='desc' />
        <Tab tabTitle='Localization' id='loc' />
        <Tab tabTitle='Guide' id='guide' />
        <Tab tabTitle='Reviews' id='rev' />
      </DescriptionTabs>
      <div className={classes.DescriptionText}>{descriptionContent}</div>
    </div>
  )
}

export default OfferDescription
