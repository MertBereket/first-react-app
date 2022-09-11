import { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState(0);
  const [department, setDepartment] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8002/users`)
      .then((res) => {
        setId(res.data.lenght + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(`http://localhost:8002/users`, {
        name: name,
        email: email,
        payment: payment,
        department: department,
        id: id,
        password: values.password,
      });
      console.log(resp.data);
      window.location.reload(false);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const bg = {
    backgroundColor: "#ffffff",
  };
  return (
    <div
      className="d-flex w-100 h-100 justify-content-center align-items-center"
      style={bg}
    >
      <div className="mx-auto p-4 shadow rounded-lg">
        <h4 className="text-info text-center mt-3">Çalışan Ekle</h4>
        <TextField
          className="w-100 mt-4"
          helperText="Ad Soyad"
          id="outline-basic"
          label="Ad Soyad"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="w-100 mt-4"
          helperText="E-Posta"
          id="outline-basic"
          label="E-Posta"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="w-100 mt-4"
          helperText="Maaş"
          id="outline-basic"
          label="Maaş"
          type="number"
          variant="outlined"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
        <TextField
          className="w-100 mt-4"
          helperText="Departman"
          id="outline-basic"
          label="Departman"
          type="text"
          variant="outlined"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <TextField
          className="w-100 mt-4"
          helperText="Şifre"
          id="outline-basic"
          label="Şifre"
          type={values.showPassword ? "text" : "password"}
          variant="outlined"
          value={values.password}
          onChange={handlePasswordChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="row w-100 justify-content-center mx-0 mb-4">
          <Button
            className="w-50 mt-4 bg-info"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Ekle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
