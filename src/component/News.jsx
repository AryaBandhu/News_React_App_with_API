import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    artical = [
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Sarah Min",
        "title": "Dow rises, tries for 5-day winning streak in last day of August: Live updates - CNBC",
        "description": "Investors are coming off a positive session for the major averages Wednesday.",
        "url": "https://www.cnbc.com/2023/08/30/stock-market-today-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107265697-1688156688275-Vesta-TF-Photo-AJ-20230630-0022-PRESS-2.jpg?v=1693435387&w=1920&h=1080",
        "publishedAt": "2023-08-31T14:11:00Z",
        "content": "The Dow Jones Industrial Average rose Thursday, the last day of the month, as Wall Street tried to stretch a late-August winning streak to five sessions.\r\nThe Dow climbed 111 points, or 0.3%. The S&a… [+1673 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "By Chris Lau, Sana Noor Haq, Ed Upright, <a href=\"/profiles/leinz-vales\">Leinz Vales</a> and <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, CNN",
        "title": "Russia's war in Ukraine: Live updates - CNN",
        "description": "Russia destroyed a drone approaching Moscow Thursday, the city's mayor said, a day after Russia came under the largest drone assault on its territory since it launched its war on Ukraine. Follow here for live updates.",
        "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-08-31-23/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230830135119-russian-attack-kyiv-0830-super-tease.jpg",
        "publishedAt": "2023-08-31T14:07:00Z",
        "content": "Ukrainian forces are making gradual progress in their counteroffensive against Russian defense lines in southeastern regions of the country, according to official Ukrainian accounts and Russian milit… [+1717 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Lillian Rizzo",
        "title": "Taylor Swift Eras Tour concert film will open in theaters same day as new 'Exorcist' movie - CNBC",
        "description": "A concert film of Taylor Swift's \"Eras Tour\" will  hit theaters on October 13, going up against the release date of horror flick \"The Exorcist: Believer.\"",
        "url": "https://www.cnbc.com/2023/08/31/taylor-swift-concert-film-new-exorcist-open-same-day.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107278484-1690547920631-gettyimages-1564226733-haywardphoto259752_ihmeasjy_v2grkwli.jpeg?v=1693488434&w=1920&h=1080",
        "publishedAt": "2023-08-31T13:27:14Z",
        "content": "Taylor Swift performs onstage during the Taylor Swift | The Eras Tour at Lumen Field on July 22, 2023 in Seattle, Washington. \r\nMove over, Barbenheimer. This next big movie duo will make your head sp… [+2716 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "John Bacon, Douglas Soule, Christopher Cann",
        "title": "Idalia live updates: Tropical storm brings major flooding to Southeast - USA TODAY",
        "description": "Gradual weakening of Idalia was expected, but the tropical storm remained capable of destruction with 'life-threatening' flooding in the Carolinas.",
        "url": "https://www.usatoday.com/story/news/nation/2023/08/31/hurricane-tropical-storm-idalia-live-updates-path-damage-flooding/70725736007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/08/31/USAT/e9151b95-1767-4da2-b264-7048dc55ad2a-XXX_083023_Hurricane_Idalia_Savannah_aftermath_RB_2.JPG?crop=5471,3078,x0,y278&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2023-08-31T13:24:25Z",
        "content": "PERRY, Fla. Idalia, a raging monster of a hurricane when it slammed across Florida, had retreated to tropical storm status Thursday but continued to pound parts of the Southeast with drenching downpo… [+4015 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Paul Davidson",
        "title": "PCE inflation measure picked up in July. Will Fed raise rates again? - USA TODAY",
        "description": "PCE inflation, a measure tracked closely by the Federal Reserve, picked up in July. A core reading stayed elevated.",
        "url": "https://www.usatoday.com/story/money/2023/08/31/july-pce-inflation-report-today/70723559007/",
        "urlToImage": "https://www.usatoday.com/gcdn/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/12/15/USATODAY/usatsports/bag-with-inflation-on-it.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp",
        "publishedAt": "2023-08-31T13:23:54Z",
        "content": "An inflation measure thats watched closely by the Federal Reserve edged higher in July, possibility raising the chances that the Federal Reserve will raise interest rates again this year.\r\nConsumer p… [+3619 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Chris Welch",
        "title": "Jabra announces its most premium (and toughest) earbuds yet - The Verge",
        "description": "Jabra’s Elite 10 earbuds offer upgraded sound quality and head tracking spatial audio. The Elite 8 Active have been put through a gauntlet of tests to attract fitness customers.",
        "url": "https://www.theverge.com/2023/8/31/23853416/jabra-elite-10-elite-8-active-announced",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ezpo6ZJ0fZSurG3upltjyQYEWy4=/0x0:2040x1409/1200x628/filters:focal(1020x705:1021x706)/cdn.vox-cdn.com/uploads/chorus_asset/file/24886245/elite10.jpg",
        "publishedAt": "2023-08-31T13:00:00Z",
        "content": "Jabra announces its most premium (and toughest) earbuds yet\r\nJabra announces its most premium (and toughest) earbuds yet\r\n / The Elite 10 and Elite 8 Active are Jabras latest flagships as the company… [+4774 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Daisy Dobrijevic",
        "title": "Last Super Blue Moon until 2037 lights up skies around the world (photos) - Space.com",
        "description": "The rare Super Blue Moon was one of the biggest and brightest moons of the year.",
        "url": "https://www.space.com/rare-super-blue-moon-2023-photos",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/4DL9jGaFqZESUWXo6Dr6Ko-1200-80.jpg",
        "publishedAt": "2023-08-31T12:50:03Z",
        "content": "The Super Blue Moon — one of the biggest and brightest moons of the year — rose on Aug. 30; inspiring skywatchers around the world to reach for their cameras and capture some incredible photographs. … [+7814 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": ", USA TODAY",
        "title": "U.S. Embassy urges Americans to leave Haiti 'as soon as possible' - USA TODAY",
        "description": "Haiti's gangs have created a dangerous situation in the country, where kidnappings and violence is rampant. Calls for an international force to help stabilize Haiti have led to no action.",
        "url": "https://www.usatoday.com/story/news/world/2023/08/31/u-s-embassy-in-haiti-to-americans-leave-as-soon-as-possible/70725773007/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/08/31/USAT/1abd21ec-f5c7-431c-8e54-4698fe2577b4-AFP_AFP_33R364W.jpeg?auto=webp&crop=4442,2499,x1,y348&format=pjpg&width=1200",
        "publishedAt": "2023-08-31T12:48:45Z",
        "content": "American citizens in Haiti should leave the country \"as soon as possible\" because of spiraling security and infrastructure \"challenges,\" the U.S. Embassy said in a travel advisory issued late Wednesd… [+1857 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Aya Elamroussi",
        "title": "Tropical Storm Idalia threatens flooding in North Carolina after damaging thousands of Florida homes - CNN",
        "description": "Tropical Storm Idalia keeps pounding the Southeast’s Atlantic coast, prompting flash flood warnings in North Carolina as parts of Florida’s west coast survey extensive damage from the most powerful hurricane to slam its Big Bend region in more than a century.",
        "url": "https://www.cnn.com/2023/08/31/weather/florida-tropical-storm-idalia-damage-thursday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230830201349-29-idalia-steinhatchee-0830.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-31T12:34:00Z",
        "content": "Editors Note: Affected by the storm? Use CNNs lite site for low bandwidth.\r\nTropical Storm Idalia keeps pounding the Southeasts Atlantic coast, prompting flash flood warnings in North Carolina as par… [+7279 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Rohan Goswami",
        "title": "Apple reportedly tests 3D printing to manufacture the new Apple Watch - CNBC",
        "description": "Apple is reportedly testing 3D printing for the new Apple Watch Series 9 and will possibly roll the manufacturing process out to more products down the road.",
        "url": "https://www.cnbc.com/2023/08/31/apple-is-testing-3d-printing-to-manufacture-the-new-apple-watch-report.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107294406-1693484797323-Apple-Watch-S8-2up-hero-220907.jpg?v=1693485298&w=1920&h=1080",
        "publishedAt": "2023-08-31T12:29:51Z",
        "content": "Apple is testing the use of 3D printers to make the stainless steel chassis for its soon-to-be-released smartwatches, Bloomberg reported, citing people familiar with the matter.\r\nThe company is repor… [+1215 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Netflix's One Piece: Is Hollywood finally doing anime right? - BBC",
        "description": "The live action adaptation of a cult manga classic has received positive reviews from critics.",
        "url": "https://www.bbc.com/news/entertainment-arts-66670171",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17A1A/production/_130949769_one_piece_n_s1_00_23_08_10rc.jpg",
        "publishedAt": "2023-08-31T11:49:05Z",
        "content": "Netflix's live-action adaptation of the Japanese anime series One Piece has been described as a surprise hit, receiving mostly praise from critics.\r\nThe show follows a group of pirates on the hunt fo… [+3034 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": null,
        "title": "When experts opened a West Point time capsule, they found nothing. The box turned out to hold hidden treasure after all. - CBS News",
        "description": "The lead box believed to have been placed by cadets in the base of a monument actually contained six silver American coins dating from 1795 to 1828 and a commemorative medal.",
        "url": "https://www.cbsnews.com/news/west-point-time-capsule-hidden-treasure-coins-medal/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/08/31/1b2d36b8-95e6-4c87-b11e-58689dd30929/thumbnail/1200x630/cf137db27d56298b8926d7f76273ae07/ap23242775209288.jpg?v=a8a34dbc23229a263a09ea92e9d5b7dc",
        "publishedAt": "2023-08-31T11:36:00Z",
        "content": "West Point historians open lead box hidden in 194-year-old statue \r\nWest Point historians open lead box hidden in 194-year-old statue02:06\r\nA nearly 200-year-old West Point time capsule that appeared… [+4756 chars]"
        },
        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Timothy Nerozzi",
        "title": "Unseen video of Prigozhin appears online days after funeral - Fox News",
        "description": "A previously unseen video of Wagner Group mercenary leader Yevgeny Prigozhin surfaced this week following the warlord's funeral in St. Petersburg, Russia.",
        "url": "https://www.foxnews.com/world/unseen-video-prigozhin-appears-online-days-funeral",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/Prigozhin-africa-after-funeral.png",
        "publishedAt": "2023-08-31T11:26:20Z",
        "content": "A previously unseen video of Wagner Group leader Yevgeny Prigozhin emerged Thursday following the mercenary warlord's funeral.\r\nThe undated video, posted to a Wagner-aligned Telegram channel, shows P… [+3033 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": null,
        "title": "Nebraska vs. Minnesota odds, line, time: 2023 college football picks, Week 1 predictions from proven model - CBS Sports",
        "description": "SportsLine's model just revealed its CFB picks, predictions and best bets for Minnesota Golden Gophers vs. Nebraska Cornhuskers on Thursday",
        "url": "https://www.cbssports.com/college-football/news/nebraska-vs-minnesota-odds-line-time-2023-college-football-picks-week-1-predictions-from-proven-model/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/08/31/49aa29a2-5c52-442f-b670-aad1320f687e/thumbnail/1200x675/d62bd45142fec7a9ca66342dea658b03/anthony-grant-nebraska-cornhuskers-usatsi.jpg",
        "publishedAt": "2023-08-31T11:14:05Z",
        "content": "The Minnesota Golden Gophers will look to continue their recent mastery of the Nebraska Cornhuskers when they meet in a Big Ten West opener on Thursday. The Golden Gophers, who finished 5-4 in the co… [+4137 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Kara Scannell, Jeremy Herb, Lauren del Valle, Nicki Brown, Piper Hudspeth Blackburn",
        "title": "New York AG's office alleges Trump inflated his net worth by as much as $2.2 billion in 1 year - CNN",
        "description": "Donald Trump inflated his net worth by as much as $2.2 billion in one year, lawyers for the New York attorney general’s office alleged as part of their civil fraud lawsuit against the former president, his adult sons and the Trump Organization.",
        "url": "https://www.cnn.com/2023/08/30/politics/donald-trump-wealth-new-york/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230830145920-01-donald-trump-053123.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-31T11:07:00Z",
        "content": "Donald Trump inflated his net worth by as much as $2.2 billion in one year, lawyers for the New York attorney generals office alleged as part of their civil fraud lawsuit against the former president… [+9850 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Grant Shapps gets defence job in mini reshuffle - BBC",
        "description": "Rishi Sunak promotes veteran Grant Shapps and newcomer Claire Coutinho in a limited shake-up of his ministerial team.",
        "url": "https://www.bbc.com/news/uk-politics-66668941",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C016/production/_130947194_mediaitem130947193.jpg",
        "publishedAt": "2023-08-31T11:04:41Z",
        "content": "Rishi Sunak has promoted cabinet veteran Grant Shapps to the role of defence secretary in a mini reshuffle of his top team.\r\nMr Shapps, who has held five ministerial jobs in the past year, replaces B… [+5087 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": null,
        "title": "What precautions should people take for Labor Day and back-to-school? A doctor explains - CNN",
        "description": "Coronavirus cases are rising again as Americans plan to celebrate Labor Day and children head back to school. Here are the precautions Dr. Leana Wen recommends you take.",
        "url": "https://www.cnn.com/2023/08/31/health/labor-day-coronavirus-increase-wellness/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230829143748-01-holiday-coronavirus-increase-top-wellness-stock.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-31T10:51:00Z",
        "content": "As families prepare to gather for Labor Day and children head back to schools, coronavirus cases are once again on the rise.\r\nCovid-19 hospital admissions are up more than 18% in the most recent week… [+7069 chars]"
        }
        ]
        

        constructor(){
            super();
            this.state = {
                artical: this.artical,
                loading : false
            }
        }

  render() {
    return (
      <div className='container'>
        <h1>News Project </h1>
        <div className="row">
            {this.state.artical.map((element)=>{
                return (
                    <div className="col-md-4 my-2" key={element.url}>
                        <NewsItem tittle={element.title.slice(0,45)} discription={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default News
