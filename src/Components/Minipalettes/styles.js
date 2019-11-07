const style = {
  root: {
    padding: "0.7rem",
    backgroundColor: "white",
    borderRadius: "5px",
    position: "relative",
    margin: "0.5rem",
    cursor: "pointer",
    "&:hover span": {
      opacity: 1
    }
  },
  colors: {
    width: "100%",

    height: "190px",
    backgroundColor: "#34495E",
    borderRadius: "5px",
    overflow: "hidden"
  },
  info: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    color: "black",
    fontSize: "1.2rem"
  },
  emoji: {
    color: "black"
  },
  color: {
    width: "20%",
    height: "25%",
    marginBottom: "-4px",
    display: "inline-block",
    overflow: "hidden"
  },
  deleteIcon: {
    position: "absolute",
    top: "0rem",
    right: "0rem",
    color: "white",
    backgroundColor: "crimson",
    padding: "0.5rem 0.8rem",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
    zIndex: "120"
  }
};

export default style;
