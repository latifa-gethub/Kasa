 

const TitleLocation = (props) => {
  return (
    <div className='titleLocation'>
        <h2 className='title'>{props.title}</h2>
        <p>{props.location}</p>
    </div>
  )
}

export default TitleLocation