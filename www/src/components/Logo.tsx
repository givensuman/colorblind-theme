import React from "react";
import clsx from "clsx";

const Image: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => {
  return (
    <img src="../../assets/logo.png" alt="logo" className={clsx("max-h-24 rounded-lg shadow-lg", className)} {...props} />
  )
}

const Logo = () => {
  return (
    <div className="flex relative">
      <Image className="opacity-25 blur-md relative left-16 z-0" />
      <Image className="opacity-50 blur-sm relative left-8 z-10" />
      <Image className="z-20" />
      <Image className="opacity-50 blur-sm relative right-8 z-10" />
      <Image className="opacity-25 blur-md relative right-16 z-0" />
    </div>
  )
}

export default Logo;
