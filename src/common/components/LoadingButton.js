import React from 'react';
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

const LoadingButton = (props) => {
    const { classes, loading, ...other } = props;

    if (loading) {
        return (
            <Button className={classes.button} {...other}>
                <CircularProgress />
            </Button>
        );
    } else {
        return (
            <Button className={classes.button} {...other} />
        );
    }
};

LoadingButton.defaultProps = {
    loading: false,
};

export default withStyles(styles)(LoadingButton);