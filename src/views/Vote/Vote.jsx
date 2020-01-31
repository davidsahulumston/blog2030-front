import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Vote.css";
import ThemeMonth from "./ThemeMonth/ThemeMonth";
import TecIdeas from "./TecIdeas/TecIdeas";
import MoreIdeas from "./MoreIdeas/MoreIdeas";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    width: "100%"
    // backgroundColor: theme.palette.background.paper,
  }
}));

const mapStatetoProps = state => {
  return {
    blogs: state.blogs
  };
};


function Vote({ blogs }) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(!blogs || blogs.length === 0) {
    return <CircularProgress/>
  }

  let blog = blogs.data.filter(({data:{isMonthIdea}}) => isMonthIdea === true);
  
  //console.log(blog);

  let blogIdea = blogs.data.filter(({data:{isMonthIdea}}) => isMonthIdea !== true);


  return (
    <div className={classes.root}>
      <div className="containerVote">
        <Typography variant="h3">Conoce + ideas</Typography>
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Temas del mes" {...a11yProps(0)} />
          <Tab label="Ideas TEC" {...a11yProps(1)} />
          <Tab label="Más ideas" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ThemeMonth data={blog} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TecIdeas />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MoreIdeas data={blogIdea} />
      </TabPanel>
    </div>
  );
}

export default connect(
  mapStatetoProps,
  null
)(Vote);
