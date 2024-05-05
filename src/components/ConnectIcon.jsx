const ConnectIcon = (props) => {
  return (
    <a href={props.link} className="text-[2rem] text-root-txt-color smooth-transition hover:text-complement-color hover:scale-hover" target="_blank" rel="noreferrer">
        {props.children}
    </a>
  )
}

export default ConnectIcon