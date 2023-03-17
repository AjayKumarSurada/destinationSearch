import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imageUrl} = destinationDetails
  return (
    <li>
      <div className="destination-card">
        <img
          src={imageUrl}
          className="destination-pic"
          alt="destinationsList"
        />
        <h1 className="name"> {name} </h1>
      </div>
    </li>
  )
}

export default DestinationItem
