import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const ListSitesDiv = styled.div`
  border-top: 2px solid grey;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;

  svg {
    margin: 0 1em;
    cursor: pointer;
    font-size: 1.5em;

    &:hover {
      transform: scale(1.2);
    }
  }

  span {
    margin: 0 0.5em;
    font-size: 1.3em;
    cursor: pointer;
  }

  .activePage {
    color: blue;
    border-bottom: 2px solid blue;
  }
`

const RenderedOffersDiv = styled.div`
  min-height: 1075px;
  margin-bottom: 1em;
`

const ListComponent = props => {
  let listPages = Array.from({ length: props.pages })
  const pagesHTML = listPages.map((_el, index) => {
    return (
      <span
        key={index}
        id={`page-${index + 1}`}
        className={index + 1 === props.page ? 'activePage' : ''}
      >
        {index + 1}
      </span>
    )
  })

  return (
    <>
      <RenderedOffersDiv>{props.itemsToRender}</RenderedOffersDiv>
      <ListSitesDiv>
        <div className='listControls' onClick={props.selectPageHandler}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={props.previousPageHandler}
          />
          {pagesHTML}
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={props.nextPageHandler}
          />
        </div>
      </ListSitesDiv>
    </>
  )
}

export default ListComponent
