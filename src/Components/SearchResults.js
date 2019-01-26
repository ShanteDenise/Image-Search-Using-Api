import React  from 'react'

class SeacrhResults extends React.Component {
  
  render() {
    return (
      <div>
          {this.props.results.map(image => (
              <div>
                  <img src={image.urls.small}/>
              </div>

          ))}
      </div>
    )
  }
}

export default SeacrhResults