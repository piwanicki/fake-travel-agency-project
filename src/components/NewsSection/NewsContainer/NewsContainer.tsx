import React from 'react'
import classes from './NewsContainer.module.scss'
import News from './News/News'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../..'

interface MapStateToPropsTypes {
  news: any
  newsLoading: boolean
}

const NewsContainer: React.FC<MapStateToPropsTypes> = props => {
  const news = props.news
  const mainNews = Object.keys(news).splice(0, 3)
  const mainNewsJSX = mainNews.map(n => {
    return <News key={n} header={news[n].header} details={news[n].details} />
  })
  return (
    <div className={classes.NewsContainer}>
      <div className={classes.NewsHeaderBox}>
        <span>News</span>
        <Link to='/News'>
          Read more... <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </Link>
      </div>
      {mainNewsJSX}
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => {
  return {
    news: state.news.news,
    newsLoading: state.news.newsLoading
  }
}

export default connect(mapStateToProps, null)(NewsContainer)
