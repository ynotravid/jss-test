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
        minWidth: 344,
    },
    typography: {
        fontWeight: 'bold',
    },
    actionRoot: {
        padding: '8px 8px 8px 16px',
        backgroundColor: _.get(theme, 'custom.overrides.CustomSnack.background', 'pink'),
    },
    icons: {
        marginLeft: 'auto',
    },
    expand: {
        padding: '8px 8px',
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    collapse: {
        padding: 16,
    },
    checkIcon: {
        fontSize: 20,
        color: '#b3b3b3',
        paddingRight: 4,
    },
    button: {
        padding: 0,
        textTransform: 'none',
    },
}));

const CustomSnack = React.forwardRef((props, ref) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDismiss = () => {
        closeSnackbar(props.id);
    };

    return (
        <Card className={classes.card} ref={ref}>
            <CardActions classes={{ root: classes.actionRoot }}>
                <Typography variant="subtitle2" className={classes.typography}>Report Complete</Typography>
                <div className={classes.icons}>
                    <IconButton
                        aria-label="Show more"
                        className={classnames(classes.expand, { [classes.expandOpen]: expanded })}
                        onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton className={classes.expand} onClick={handleDismiss}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Paper className={classes.collapse}>
                    <Typography gutterBottom>PDF ready</Typography>
                    <Button size="small" className={classes.button}>
                        <CheckCircleIcon className={classes.checkIcon} />
                        Download now
                    </Button>
                </Paper>
            </Collapse>
        </Card>
    );
});

CustomSnack.propTypes = {
    id: PropTypes.number.isRequired,
}

export default CustomSnack
