const ConnectIcon = (props) => {
  return (
    <a href={props.link} className="text-[2rem] text-root-txt-color smooth-transition hover:text-complement-color hover:scale-hover">
        {props.children}
    </a>
  )
}

export default ConnectIcon