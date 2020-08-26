import React from 'react'
import classes from './PhotoContainer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons'

interface IProps {
  mainPhoto: string
  listSite: number
  photos: []
  showImgModalHandler: () => void
  previousImageListItem: () => void
  nextImageListItem: () => void
}

const PhotoContainer: React.FC<IProps> = props => {
  return (
    <div className={classes.PhotoContainer}>
      <img
        className={classes.MainPhoto}
        src={props.mainPhoto}
        alt={`big landscape`}
        onClick={props.showImgModalHandler}
      />
      <div className={classes.PhotosSlider}>
        <button
          onClick={props.previousImageListItem}
          disabled={props.listSite === 1}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>
        <div className={classes.PhotosListDiv}>
          <ul className='PhotosList'>{props.photos}</ul>
        </div>
        <button
          onClick={props.nextImageListItem}
          disabled={props.listSite + 5 >= props.photos.length}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>
    </div>
  )
}

export default PhotoContainer
