import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    keySide: {
      color: '#090faf',
      width: 200,
    },
    valueSide: {
      color: '#000000',
      width: 300,
    }
  })
);