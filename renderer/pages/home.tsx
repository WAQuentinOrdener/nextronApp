import React from 'react';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core/styles';
import { resolve } from '../helpers';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  CardActions,
  ListSubheader
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      marginLeft: drawerWidth,
      padding: theme.spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {}

const Home = withStyles(styles)(
  class extends React.Component<Props> {
    state = {};

    render() {
      const { classes } = this.props;

      return (
        <React.Fragment>
          <Head>
            <title>CoreElectron</title>
          </Head>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
            anchor="left"
          >
            <div className={classes.toolbar} />
            <Divider />
            <List
              subheader={<ListSubheader component="div">Design Assistant functions</ListSubheader>}
            >
              {['Function 1 ', 'Function 2', 'Function 3', 'Function 4'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List subheader={<ListSubheader component="div">Other function bundle</ListSubheader>}>
              {['Other function 1', 'Other function 2', 'Other function 3'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <Card>
              <img src={resolve('static/logo.png')} title="Route image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Wire route
                </Typography>
                <Typography component="p">Wire route description</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Open with CATIA
                </Button>
              </CardActions>
            </Card>
            <Button variant="contained" color="secondary">
              <a href={resolve('next')}>Go to next page</a>
            </Button>
          </main>
        </React.Fragment>
      );
    }
  }
);

export default Home;
