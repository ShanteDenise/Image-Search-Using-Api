import React  from 'react'



class SeacrhResults extends React.Component {
  
  render() {
    return (
      <div className="image-results">
          {this.props.results.map(image => (
              <div>
                  <a href = {image.user.links.html} alt="linktounsplash" target="_blank"> 
                  <img className="img-list" src={image.urls.small} alt="searchresult"
                       key={image.id}/>
                       <div class="middle">
                          <p class="text">{image.user.username}</p>
                        
                      </div>
                      </a>
  

              </div>

          ))}
      </div>
    )
  }
}

export default SeacrhResults