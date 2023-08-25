import { FC } from "react";
import { motion } from "framer-motion";

interface IImageSwitcherProps {
  images: any[];
  currentIndex: number;
}

const ImageSwitcher: FC<IImageSwitcherProps> = ({ images, currentIndex }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <motion.img
        key={currentIndex}
        {...images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ImageSwitcher;
