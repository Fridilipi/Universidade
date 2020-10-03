import React from "react";
import { Menu } from "../../Components";
import { aluno, professor } from "../../Data/Menu";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lastRefreshedTypography: {
    float: "right",
  },
  lastRefreshed: {
    margin: -10,
    marginRight: 20,
  },
  cardTitle: {
    whiteSpace: "nowrap",
  },
  gridRoot: {
    flexGrow: 1,
    padding: 20,
  },
  cardRoot: {
    minWidth: 275,
    cursor: "pointer",
  },
  welcomeContainer: {
    padding: "0px 20px",
  },
}));

function Home(props) {
  let { loginReducer, history } = props;
  const classes = useStyles();
  return (
    <Menu
      data={loginReducer.auth}
      history={history}
      items={loginReducer.auth.profile === 1 ? professor : aluno}
      content={
        loginReducer.auth.profile === 1 ? (
          <>
            <div>
              <h2>Sistema de controle de notas</h2>
            </div>
            <div className={classes.gridRoot}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.cardTitle}
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        Valor médio das notas
                      </Typography>
                      <Typography variant="h3" component="h2">
                        8.5
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.cardTitle}
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        Desvio padrão das notas
                      </Typography>
                      <Typography variant="h3" component="h2">
                        4.8
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.cardTitle}
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        Quartis das notas
                      </Typography>
                      <Typography variant="h3" component="h2">
                        7.12
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.cardTitle}
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        Histograma das notas
                      </Typography>
                      <Typography variant="h3" component="h2">
                        5
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.cardTitle}
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        Maior nota
                      </Typography>
                      <Typography variant="h3" component="h2">
                        10
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.cardTitle}
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        Menor nota
                      </Typography>
                      <Typography variant="h3" component="h2">
                        1.5
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2>Sistema de consulta de notas</h2>
            </div>
          </>
        )
      }
    />
  );
}
export default Home;
