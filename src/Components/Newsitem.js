import REACT_APP_NEWS_API from 'react'
const Newsitem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source, BadgeColor, BadgeTextcolor
    } =props
    return (
      <div>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0", }}>
            <span className={`badge rounded-pill text-${BadgeTextcolor} bg-${BadgeColor}`} style={{ left: "90%", zIndex: '1' }}>
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://s.yimg.com/ny/api/res/1.2/f2Bcphfx6gVEKTtUeZyGHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTA-/https://s.yimg.com/os/creatr-uploaded-images/2022-04/bb33e920-c472-11ec-ad5f-036212784c84" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem