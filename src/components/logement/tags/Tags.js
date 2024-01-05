 
/* import { TagItem } from './TagItem' */
const Tags = (props) => {
  const tags=props.tags
  
  return (
    <div>
      {
        tags.map((tag)=>(
          <button key={tag} className='button-tag'>{tag}</button>
        ))
      } 
    </div>
  )
}
export default Tags