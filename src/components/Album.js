import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    width: '133%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '70%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Album({ space, count, list }) {
  const classes = useStyles();
  const cards = [];
  for (var i = 0; i < count; i++) {
    cards.push(i);
  }

  // console.log(space);
  console.log(list);
  // console.log(list[0].title);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Grid container spacing={space}>
          {cards.map(card => {
            console.log("card: " + card);
            return (
              <Grid item key={card} xs={12} sm={6} md={3}>
                {(list.length === 0) ? <div></div> :
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={list[card].poster}
                      title={list[card].title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        <strong>{list[card].title}</strong><br />
                        <strong>기간 </strong> {list[card].date} <br />
                        <strong>장소 </strong> {list[card].place}
                      </Typography>
                    </CardContent>
                  </Card>}
              </Grid>
            );
          })}
        </Grid>
      </main>
    </React.Fragment>
  );
}

