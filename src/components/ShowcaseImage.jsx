
const ShowcaseImage = (props) => {
  return (
    <div className="w-[400px] h-[400px] shrink-0">
        <img src={props.image} alt="" className='w-full h-full object-cover object-center rounded-xl ' />
    </div>
  )
}

export default ShowcaseImage