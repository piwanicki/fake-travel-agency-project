import React, { useState } from 'react'
import classes from './PhotoContainer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons'

interface IProps {
  mainPhoto: string
  photos: []
  showImgModalHandler: () => void
}

const PhotoContainer: React.FC<IProps> = props => {
  let [listSite, setListSite] = useState(1)
  const nextImageListItem = () => {
    const PhotosListDiv = document.querySelector('.PhotosList')!
    PhotosListDiv['style'].transform = `translateX(-${listSite * 180}px)`
    PhotosListDiv['style'].transition = 'transform 0.5s'
    setListSite(++listSite)
  }

  const previousImageListItem = () => {
    const currentPosition = listSite * 180 - 180
    const PhotosListDiv = document.querySelector('.PhotosList')!
    PhotosListDiv['style'].transform = `translateX(-${currentPosition - 180}px)`
    PhotosListDiv['style'].transition = 'transform 0.5s'
    setListSite(--listSite)
  }

  return (
    <div className={classes.PhotoContainer}>
      <img
        className={classes.MainPhoto}
        src={props.mainPhoto}
        alt={`big landscape`}
        onClick={props.showImgModalHandler}
      />
      <div className={classes.PhotosSlider}>
        <button onClick={previousImageListItem} disabled={listSite === 1}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>
        <div className={classes.PhotosListDiv}>
          <ul className='PhotosList'>{props.photos}</ul>
        </div>
        <button
          onClick={nextImageListItem}
          disabled={listSite + 5 >= props.photos.length}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>
    </div>
  )
}

export default PhotoContainer
