import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    minWidth: 344
  },
  typography: {
    fontWeight: 'bold'
  },
  actionRoot: {
    padding: '8px 8px 8px 16px',
    backgroundColor: _.get(theme, 'custom.overrides.CustomSnack.background', 'pink')
  },
  icons: {
    marginLeft: 'auto'
  },
  expand: {
    padding: '8px 8px',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  collapse: {
    padding: 16
  },
  checkIcon: {
    fontSize: 20,
    color: '#b3b3b3',
    paddingRight: 4
  },
  button: {
    padding: 0,
    textTransform: 'none'
  }
}));

var _ref = React.createElement(ExpandMoreIcon, null);

var _ref2 = React.createElement(CloseIcon, null);

var _ref3 = React.createElement(Typography, {
  gutterBottom: true
}, "PDF ready");

const CustomSnack = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    closeSnackbar
  } = useSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDismiss = () => {
    closeSnackbar(props.id);
  };

  return React.createElement(Card, {
    className: classes.card,
    ref: ref
  }, React.createElement(CardActions, {
    classes: {
      root: classes.actionRoot
    }
  }, React.createElement(Typography, {
    variant: "subtitle2",
    className: classes.typography
  }, "Report Complete"), React.createElement("div", {
    className: classes.icons
  }, React.createElement(IconButton, {
    "aria-label": "Show more",
    className: classnames(classes.expand, {
      [classes.expandOpen]: expanded
    }),
    onClick: handleExpandClick
  }, _ref), React.createElement(IconButton, {
    className: classes.expand,
    onClick: handleDismiss
  }, _ref2))), React.createElement(Collapse, {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true
  }, React.createElement(Paper, {
    className: classes.collapse
  }, _ref3, React.createElement(Button, {
    size: "small",
    className: classes.button
  }, React.createElement(CheckCircleIcon, {
    className: classes.checkIcon
  }), "Download now"))));
});
CustomSnack.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.number.isRequired
} : {};
export default CustomSnack;