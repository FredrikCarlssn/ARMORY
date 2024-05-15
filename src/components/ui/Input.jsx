import boxBackground from "../../img/ui/box-background.png";
import boxBackgroundHover from "../../img/ui/box-background-hover.png";
import boxBackgroundActive from "../../img/ui/box-background-selected.png";
import boxBackgroundError from "../../img/ui/box-background-error.png";

import { useState } from "react";

export const Input = ({ placeholder, value, onChange, error, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = (e) => {
    setIsHovered(true);
  };

  const onMouseLeave = (e) => {
    setIsHovered(false);
  };

  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      placeholder={placeholder}
      className={`bg-transparent appearance-none outline-none text-xs text-center no-spinner bg-contain bg-no-repeat transition-all duration-200 ${className}`}
      style={{
        backgroundImage: error
          ? `url(${boxBackgroundError})`
          : isFocused
          ? `url(${boxBackgroundActive})`
          : isHovered
          ? `url(${boxBackgroundHover})`
          : `url(${boxBackground})`,
      }}
      min={0}
      type="number"
      value={value}
      onChange={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onError={(e) => console.log(e)}
    />
  );
};
