import { Fragment } from "react"
import Footer from "./Footer"

const Codebee = () => {
  return (
    <Fragment>
    <section className="w-full min-h-[50vh] flex flex-col items-center justify-center ">
      <div>
        <div className="flex flex-row items-start gap-5">
              <h2 className="text-vibrant-txt-color font-manrope text-5xl font-bold background-animate-text max-[300px]:text-3xl">Code Bee</h2>
              <svg width={20} height={20} className='smooth-transition hover:scale-hover fill-complement-color'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.97 48.81"><defs></defs><title>Code bee</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="52.79" cy="11.18" r="11.18"/><circle cx="11.18" cy="37.04" r="11.18"/><path d="M56.57,23.79a13,13,0,0,1-14.86-21A23.92,23.92,0,0,0,8.87,22.57a14.22,14.22,0,0,1,2.45-.21A14.78,14.78,0,0,1,22.66,46.62,23.93,23.93,0,0,0,56.59,24.9C56.59,24.53,56.58,24.16,56.57,23.79Z"/></g></g></svg>
          </div>
          <p className="max-w-[200px] text-dim-root-txt-color font-manrope font-light text-sm mt-2">More work will eventually equal more results.</p>
      </div>



    </section>
    <Footer/>

    </Fragment>

  )
}

export default Codebee