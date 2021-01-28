import React from 'react';

import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const GlobalLayout = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {title && (
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

GlobalLayout.defaultProps = {
  title: '',
};

GlobalLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default GlobalLayout;
