const Technology = (props) => {
  return (
    <div className="flex flex-row items-center smooth-transition">
        <img width={20} height={20} src={props.item.image} alt="" />
        <p className="font-clash text-root-txt-color ml-3 smooth-transition hover:text-complement-color">{props.item.label}</p>
    </div>
  )
}

export default Technology