
const InputLabel = (props) => {
    const inputclasses = "bg-transparent border border-root-txt-color w-full md:w-[90%] max-w-[400px] p-3 rounded-md mt-4 focus:border-vibrant-txt-color text-vibrant-txt-color font-manrope"
  return (
    <div className="flex flex-col w-full">

        <label htmlFor={props.id} className="font-manrope text-dim-root-txt-color">{props.label}</label>

        {
            props.type == 'textarea'? <textarea rows={5} id={props.id} type={props.type} className={inputclasses}/>: <input id={props.id} type={props.type} className={inputclasses}/>


        }
    </div>
  )
}

export default InputLabel