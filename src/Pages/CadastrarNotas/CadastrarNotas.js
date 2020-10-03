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
} from "@material-ui/core";

import { Menu } from "../../Components";
import { aluno, professor, alunos, disciplinas } from "../../Data/Menu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function CadastrarNotas(props) {
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Alunos
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
              label="Alunos"
            >
              {alunos.map((item, index) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Disciplina
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
              label="Disciplina"
            >
              {disciplinas.map((item, index) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            className={classes.formControl}
            id="outlined-basic"
            label="APS 1"
            variant="outlined"
          />
          <TextField
            className={classes.formControl}
            id="outlined-basic"
            label="AV 1"
            variant="outlined"
          />

          <TextField
            className={classes.formControl}
            id="outlined-basic"
            label="APS 2"
            variant="outlined"
          />
          <TextField
            className={classes.formControl}
            id="outlined-basic"
            label="AV 2"
            variant="outlined"
          />

          <TextField
            className={classes.formControl}
            id="outlined-basic"
            label="AV 3"
            variant="outlined"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              toast.success("Nota cadastrada com sucesso.");
              history.push("/listagem-alunos");
            }}
            className={classes.submit}
          >
            Cadastrar Nota
          </Button>
        </Container>
      }
    />
  );
}
