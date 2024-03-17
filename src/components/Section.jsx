/* eslint-disable react/prop-types */
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossOffset,
  customPadding,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
    relative ${
      customPadding ||
      `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
    }
    ${className || ""}    
    `}
    >
      {children}

      {crosses && (
        <>
          {" "}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossOffset && crossOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossOffset={crossOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
