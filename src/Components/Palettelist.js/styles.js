import sizes from "../../Helpers/Breakpoint";
import bg from "../../Helpers/bg.svg";
const style = {
  root: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    backgroundColor: "#0e1d61",
    backgroundImage: `url(${bg})`
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  title: {
    textAlign: "center"
  },
  miniboxContainer: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      margin: "0 auto",
      marginLeft: "0.5rem"
    },
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
    },
    [sizes.down("sm")]: {
      fontSize: "1rem"
    }
  },
  title: {
    color: "azure",
    [sizes.down("sm")]: {
      fontSize: "1rem"
    }
  }
};
export default style;
