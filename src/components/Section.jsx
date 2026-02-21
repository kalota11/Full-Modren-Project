const Section = ({
  className,
  id,
  customPaddings,
  children,
}) => {
  return (
    <section
      id={id}
      className={`
        relative
        ${
          customPaddings
            ? customPaddings
            : "py-10 lg:py-16 xl:py-20"
        }
        ${className || ""}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
