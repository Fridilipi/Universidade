import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Menu } from "../../Components";
import { aluno, professor, consultarAluno } from "../../Data/Menu";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

export default function ConsultarNotas(props) {
  let { loginReducer, history } = props;

  const classes = useStyles();

  return (
    <Menu
      data={loginReducer.auth}
      history={history}
      items={loginReducer.auth.profile === 1 ? professor : aluno}
      content={
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Disciplina</TableCell>
                  <TableCell align="right">AV1</TableCell>
                  <TableCell align="right">APS1</TableCell>
                  <TableCell align="right">AV2</TableCell>
                  <TableCell align="right">APS2</TableCell>
                  <TableCell align="right">AV3</TableCell>
                  <TableCell align="right">Média</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {consultarAluno.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.av1}</TableCell>
                    <TableCell align="right">{row.aps1}</TableCell>
                    <TableCell align="right">{row.av2}</TableCell>
                    <TableCell align="right">{row.aps2}</TableCell>
                    <TableCell align="right">{row.av3}</TableCell>
                    <TableCell align="right">{row.avg}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    />
  );
}
