const sizes = {
  up() {},
  down(size) {
    const sizes = {
      xs: "600px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1500px"
    };
    return `@media only screen and (max-width:${sizes[size]})`;
  }
};

export default sizes;
