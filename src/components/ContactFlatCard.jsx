const ContactFlatCard = (props) => {
  return (
    <div className="flex flex-row gap-3 w-full py-4 rounded-2xl">
        <div className="flex rounded-full">
            <props.icon className="fill-complement-color m-auto" size={'1.2em'}/>
        </div>

        <a href={props.href} className="flex flex-col">
            <p className="font-manrope font-semibold text-vibrant-txt-color">{props.label}</p>
            <p className="font-manrope text-dim-root-txt-color">{props.value}</p>
        </a>
    </div>
  )
}

export default ContactFlatCard