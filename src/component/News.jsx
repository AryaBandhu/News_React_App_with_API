import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <h1>News Project </h1>
        <div className="row">
            <div className="col-md-4 my-2">
                <NewsItem tittle="This is Tittle" discription="This is Demo Discription " imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230830145920-01-donald-trump-053123.jpg?c=16x9&q=w_800,c_fill"/>
            </div>
            <div className="col-md-4 my-2">
                <NewsItem tittle="This is Tittle" discription="This is Demo Discription "/>
            </div>
            <div className="col-md-4 my-2">
                <NewsItem tittle="This is Tittle" discription="This is Demo Discription "/>
            </div>
        </div>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
