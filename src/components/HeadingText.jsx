import Square from "./Square";
import { motion } from "framer-motion";

const HeadingText = (props) => {
    const classes = "w-full " + props.className
  return (
    <div className={classes}>
      <div className="flex flex-row items-center gap-2">
        <Square></Square>
        <p className="font-clash text-vibrant-txt-color">{props.label}</p>
        <motion.div
          className="w-[50%] max-w-[150px] h-[1px] bg-root-txt-color"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{once:true}}
        ></motion.div>
      </div>
    </div>
  );
};

export default HeadingText;
