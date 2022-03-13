import React from "react";

export const Heading = ({ text, children, className }) => {
  return (
    <h5
      className={`${className}  font-sora lg:text-5xl text-3xl font-extrabold leading-relaxed`}
    >
      {text ? text : children}
    </h5>
  );
};

export const MdHeading = ({ text, children, className }) => {
  return (
    <h3 className={`${className} font-sora font-bold lg:text-4xl text-2xl`}>
      {text ? text : children}
    </h3>
  );
};
export const SubText = ({ text, children, className }) => {
  return (
    <h4
      className={`${className} font-sora font-bold lg:text-2xl md:text-xl text-base`}
    >
      {text ? text : children}
    </h4>
  );
};

export const BsText = ({ text, children, className }) => {
  return (
    <h5 className={`${className} text-black font-sora sm:text-xl text-lg`}>
      {text ? text : children}
    </h5>
  );
};

export const SmText = ({ text, children, className }) => {
  return (
    <h5 className={`${className} font-sora font-semibold text-sm sm:text-base`}>
      {text ? text : children}
    </h5>
  );
};
