import { useState } from "react";
import * as React from "react";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CompanyLogo from "../images/CompanyLogo.png";
import { Checkbox, Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const style = {
    position: "absolute" /* or absolute */,
    backgroundColor: "#f3fff4",
  };

  let navigate = useNavigate();

  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center"
      style={style}
    >
      <div
        className="mx-auto p-5 shadow rounded-lg"
        style={{
          backgroundColor: "#fff",
          width: "500px",
        }}
      >
        <div className="row justify-content-center mx-0 px-5">
          <img src={CompanyLogo} alt="companyLogo" height="45px" />
          <p className="text-muted w-100 mt-4 text-center">
            Login Portalına Hoşgelidiniz
          </p>
          <hr className="w-100"></hr>
          <TextField
            required
            className="w-100 mt-4"
            helperText="Lüften E-Posta adresinizi giriniz"
            id="outlined-basic"
            label="E-Posta"
            type="email"
            error={email === ""}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />

          <TextField
            required
            className="w-100 mt-3"
            helperText="Lütfen şifrenizi giriniz"
            id="outlined-password-input"
            label="Şifre"
            error={values.password === ""}
            variant="outlined"
            type={values.showPassword ? "text" : "password"}
            onChange={handlePasswordChange("password")}
            value={values.password}
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
          <div className="row w-100 justify-content-between mx-0">
            <Box>
              <Checkbox className="pt-2" label="Şifremi Hatırla" />
            </Box>
            <a className="text-muted pt-2" href="/blank">
              Şifremi Unuttum?
            </a>
          </div>
          <Button
            className="w-100 mt-4 bg-success"
            variant="contained"
            onClick={() => {
              navigate("/home");
            }}
          >
            Giriş Yap
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
