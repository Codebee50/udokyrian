const LinkFlex = (props) => {
  return (
    <div className="flex flex-col gap-4">
        {/* <a className="text-white font-manrope font-semibold">{props.header}</a> */}
        {
            props.items.map((item)=>(
                <a className={`text-dim-root-txt-color text-[0.9rem] font-manrope ${item.head && 'text-[1rem] font-semibold text-vibrant-txt-color mb-[2px]'} `} href={item.link} key={item.label}>{item.label}</a>
            ))
        }
    </div>
  )
}

export default LinkFlex