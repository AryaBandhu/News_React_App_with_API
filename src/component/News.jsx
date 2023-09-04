import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

        constructor(){
            super();
            this.state = {
                articles: [],
                loading : false,
                page : 1
            }
        }

        async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=70e1df0dac3e4c76938f262fbc7b3f26&pageSize=15&page=1`
            try {
                let data = await fetch(url);
                let parseddata = await data.json();
                this.setState({articles : parseddata.articles}); 
            } catch (error) {
                console.error("Error fetching data: ", error);
                this.setState({ loading: false });
            }
        }

        handlepreviwsbtn = async () => {
            console.log("privius")
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=70e1df0dac3e4c76938f262fbc7b3f26&page=${this.state.page - 1}&pageSize=15`
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                page : this.state.page - 1,
                articles : parseddata.articles
            }); 
            
        }

        handlenextbtn = async () => {
            console.log("next")
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=70e1df0dac3e4c76938f262fbc7b3f26&page=${this.state.page + 1}&pageSize=15`
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles : parseddata.articles
            }); 
        }

  render() {
    return (
      <div className='container'>
        <h1>News Project </h1>
        <div className="row">
            {this.state.articles.map((element, index)=>{
                return (
                    <div className="col-md-4 my-2" key={index}>
                        <NewsItem tittle={element.title} discription={element.description} imageUrl={!element.urlToImage ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUz7wMFODMUXLEpiwVxC0mcjAWQnKH7qMeQ&usqp=CAU" : element.urlToImage} newsUrl={element.url}/>
                    </div>
                )
            })}
        </div>
        <div className="container d-flex justify-content-around mb-4 mt-4 " >
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviwsbtn}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handlenextbtn}> Next  &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
