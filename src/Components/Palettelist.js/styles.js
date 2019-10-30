const style = {
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "royalblue"
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center"
  },
  miniboxContainer: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridColumnGap: "5%"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between"
  },
  formLink: {
    color: "white",
    borderBottom: "2px solid black",
    "&:hover": {
      color: "black",
      borderBottom: "2px solid white"
    }
  }
};
export default style;
