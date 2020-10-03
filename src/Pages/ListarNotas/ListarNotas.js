import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  makeStyles,
  IconButton,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Edit } from "@material-ui/icons";

import { Menu } from "../../Components";
import {
  aluno,
  professor,
  alunos,
  disciplinas,
  consultarAluno,
} from "../../Data/Menu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function ListarNotas(props) {
  let { loginReducer, history } = props;

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Menu
      data={loginReducer.auth}
      history={history}
      items={loginReducer.auth.profile === 1 ? professor : aluno}
      content={
        <Container
          style={{ display: "flex", flexDirection: "column", padding: 32 }}
        >
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Aluno</TableCell>
                  <TableCell>Disciplina</TableCell>
                  <TableCell align="right">AV1</TableCell>
                  <TableCell align="right">APS1</TableCell>
                  <TableCell align="right">AV2</TableCell>
                  <TableCell align="right">APS2</TableCell>
                  <TableCell align="right">AV3</TableCell>
                  <TableCell align="right">Média</TableCell>
                  {loginReducer.auth.profile === 1 ? (
                    <TableCell align="right">Editar</TableCell>
                  ) : null}
                </TableRow>
              </TableHead>
              <TableBody>
                {consultarAluno.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.aluno}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.av1}</TableCell>
                    <TableCell align="right">{row.aps1}</TableCell>
                    <TableCell align="right">{row.av2}</TableCell>
                    <TableCell align="right">{row.aps2}</TableCell>
                    <TableCell align="right">{row.av3}</TableCell>
                    <TableCell align="right">{row.avg}</TableCell>
                    {loginReducer.auth.profile === 1 ? (
                      <TableCell align="right">
                        <IconButton
                          color="inherit"
                          aria-label="Open drawer"
                          edge="start"
                          onClick={() => history.push("/cadastrarNotas")}
                        >
                          <Edit />
                        </IconButton>
                      </TableCell>
                    ) : null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      }
    />
  );
}
