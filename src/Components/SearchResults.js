import React  from 'react'

class SeacrhResults extends React.Component {
  
  render() {
    return (
      <div className="image-results">
          {this.props.results.map(image => (
              <div>
                  <img className="img-list" src={image.urls.small}
                       key={image.id}/>
              </div>

          ))}
      </div>
    )
  }
}

export default SeacrhResults