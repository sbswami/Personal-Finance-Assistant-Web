import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { StepConnector } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    tile: {
      margin: 20,
    },
    paper: {
      padding: theme.spacing(3, 2),
      maxWidth: 600,
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);


