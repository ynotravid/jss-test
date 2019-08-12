"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _notistack = require("notistack");

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      maxWidth: 400,
      minWidth: 344
    },
    typography: {
      fontWeight: 'bold'
    },
    actionRoot: {
      padding: '8px 8px 8px 16px',
      backgroundColor: _lodash.default.get(theme, 'custom.overrides.CustomSnack.background', 'pink')
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
  };
});

var _ref = _react.default.createElement(_ExpandMore.default, null);

var _ref2 = _react.default.createElement(_Close.default, null);

var _ref3 = _react.default.createElement(_Typography.default, {
  gutterBottom: true
}, "PDF ready");

var CustomSnack = _react.default.forwardRef(function (props, ref) {
  var classes = useStyles();

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      closeSnackbar = _useSnackbar.closeSnackbar;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  var handleDismiss = function handleDismiss() {
    closeSnackbar(props.id);
  };

  return _react.default.createElement(_Card.default, {
    className: classes.card,
    ref: ref
  }, _react.default.createElement(_CardActions.default, {
    classes: {
      root: classes.actionRoot
    }
  }, _react.default.createElement(_Typography.default, {
    variant: "subtitle2",
    className: classes.typography
  }, "Report Complete"), _react.default.createElement("div", {
    className: classes.icons
  }, _react.default.createElement(_IconButton.default, {
    "aria-label": "Show more",
    className: (0, _classnames2.default)(classes.expand, (0, _defineProperty2.default)({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick
  }, _ref), _react.default.createElement(_IconButton.default, {
    className: classes.expand,
    onClick: handleDismiss
  }, _ref2))), _react.default.createElement(_Collapse.default, {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true
  }, _react.default.createElement(_Paper.default, {
    className: classes.collapse
  }, _ref3, _react.default.createElement(_Button.default, {
    size: "small",
    className: classes.button
  }, _react.default.createElement(_CheckCircle.default, {
    className: classes.checkIcon
  }), "Download now"))));
});

CustomSnack.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.default.number.isRequired
} : {};
var _default = CustomSnack;
exports.default = _default;