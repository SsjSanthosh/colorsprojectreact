import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../Helpers/Breakpoint";
const drawerWidth = 350;
export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: "100vh",
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),

    marginLeft: 0
  },
  createTitle: {
    textAlign: "center",
    marginRight: "3rem",
    [sizes.down("sm")]: {
      display: "none"
    }
  },
  colorDiv: {
    marginTop: "66px"
  },
  navForm: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
  },
  navInput: {
    width: "60%",
    marginTop: "-1rem"
  },

  btn1: {
    width: "40%",
    height: "60%",
    marginLeft: "1rem"
  },
  btn2: {
    width: "120%",
    marginLeft: "1rem",
    height: "30%"
  },
  drawerTitle: {
    textAlign: "center",
    margin: "2rem 0"
  },
  btnDiv: {
    margin: "0 auto"
  },
  drawerBtn: {
    margin: "1rem"
  },
  colorpicker: {
    width: "80% !important",
    margin: "0 auto",
    marginBottom: "2rem"
  },
  colorForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  colorInput: {
    width: "50%",
    margin: "0 auto",
    marginBottom: "2rem"
  },
  addBtn: {
    width: "50%",
    padding: "1rem 3rem",
    margin: "0 auto"
  }
}));
