import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
    width: '130%',
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
  // console.log(list);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
          <Grid container spacing={space}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="http://www.mmca.go.kr/upload/education/2019/11/2019110104024045812846.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>
                    <strong>[광장: 미술과 사회 1900-2019] 2부 연계 다원예술프로젝트 퍼포먼스</strong><br/>
                      기간: 2020.01.11. ~ 2020.01.15. <br/>
                      장소: 국립현대미술관 서울관
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      </main>
    </React.Fragment>
  );
}