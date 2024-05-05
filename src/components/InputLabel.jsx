import React from "react"

// eslint-disable-next-line react/display-name
const InputLabel = React.forwardRef((props, ref)=>{
  const inputclasses = "bg-transparent border border-root-txt-color w-full md:w-[90%] max-w-[400px] p-3 rounded-md mt-4 focus:border-vibrant-txt-color text-vibrant-txt-color font-manrope"
  return (
    <div className="flex flex-col w-full">

        <label htmlFor={props.id} className="font-manrope text-dim-root-txt-color">{props.label}</label>

        {
            props.type == 'textarea'? <textarea ref={ref} rows={5} id={props.id} type={props.type} className={inputclasses} required />: <input id={props.id} ref={ref} type={props.type} className={inputclasses} required/>
        }
    </div>
  )
})

export default InputLabel