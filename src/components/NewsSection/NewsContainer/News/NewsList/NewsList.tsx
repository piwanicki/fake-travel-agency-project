import React from 'react'
import classes from './NewsList.module.scss'
import { RootReducer } from '../../../../..'
import { connect } from 'react-redux'

interface MapStateToPropsTypes {
  news: any
}

const NewsList: React.FC<MapStateToPropsTypes> = props => {
  const newsJSX = Object.keys(props.news).map(key => {
    return (
      <li key={key}>
        <h4>{props.news[key]['header']}</h4>
        <p>{props.news[key]['details']}</p>
      </li>
    )
  })

  return (
    <div className={classes.NewsList}>
      <h2>News</h2>
      <hr />
      <ul>{newsJSX}</ul>
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => {
  return {
    news: state.news.news
  }
}

export default connect<MapStateToPropsTypes, null, null, RootReducer>(
  mapStateToProps,
  null
)(NewsList)
