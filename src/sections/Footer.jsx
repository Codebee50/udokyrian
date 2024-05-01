import LinkFlex from "../components/LinkFlex"
import { footerItems } from "../constants"
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="pt-[20vh]  padding-x max-container bg-deep-background w-[90%] ">
        <div className="flex flex-col">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 pb-20 gap-14 justify-between ">
                {
                    footerItems.map((footerItem, index)=> (
                        <LinkFlex key={`footeritm${index}`}  items={footerItem} />

                    ))
                }

                <div className="flex flex-col">
                    <a className={`text-[1rem] font-semibold text-vibrant-txt-color mb-[2px] font-manrope `} >Connect with me</a>
                    <div className="flex flex-row items-center mt-3 gap-2 flex-wrap">
                        <div className=" bg-black10 text-vibrant-txt-color p-2 flex shrink-0 rounded-md border-[0.5px] border-dim-root-txt-color">
                            <IoLogoFacebook size={'1.2em'}/>
                        </div>
                        <div className=" bg-black10 text-vibrant-txt-color p-2 flex shrink-0 rounded-md border-[0.5px] border-dim-root-txt-color">
                            <IoLogoTwitter size={'1.2em'}/>
                        </div>
                        <div className=" bg-black10 text-vibrant-txt-color p-2 flex shrink-0 rounded-md border-[0.5px] border-dim-root-txt-color">
                            <IoLogoLinkedin size={'1.2em'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t-strokeBlack py-9  border-t-[0.5px] border-t-dim-root-txt-color  flex flex-wrap gap-5 flex-row items-center justify-between w-full">
                <p className="font-manrope text-dim-root-txt-color text-[0.7rem] sm:text-sm font-normal" >@2024 Codebee, All rights Reserved</p>

               
            </div>
        </div>
    </footer>
  )
}

export default Footer