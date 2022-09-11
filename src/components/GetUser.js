import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import { Button, Modal, Typography } from "@mui/material";
import { Checkbox, Box } from "@mui/joy";

function GetUser() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState({});
  function setUserPayment(user) {
    user.payment = (user.payment * 105.75) / 100;
    setUser(user);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8002/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const bg = {
    backgroundColor: "#ffffff",
    height: "695px",
  };

  const rows = users;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "rgb(18, 18, 18)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="shadow rounded-lg p-4" style={bg}>
      <h3 className="w-100 text-center text-info mb-5">ABC Şirket</h3>
      <div className="row">
        <div className="col-8">
          <table>
            <thead>
              <tr className="border border-primary text-primary">
                <th className="border-right border-primary px-3 py-2"></th>
                <th className="border-right border-primary px-3 py-2">
                  Ad Soyad
                </th>
                <th className="border-right border-primary px-3 py-2">
                  E-posta
                </th>
                <th className="border-right border-primary px-3 py-2">Maaş</th>
                <th className="border-right border-primary px-3 py-2">
                  Departman
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((item, index) => (
                <tr className="border border-primary">
                  <td className="border-right border-primary px-3 py-2">
                    <Box>
                      <Checkbox
                        className="pt-2"
                        onClick={() => setUserPayment(item)}
                      />
                    </Box>
                  </td>
                  <td className="border-right border-primary px-3 py-2">
                    {item.name}
                  </td>
                  <td className="border-right border-primary px-3 py-2">
                    {item.email}
                  </td>
                  <td className="border-right border-primary px-3 py-2">
                    {item.payment}
                  </td>
                  <td className="px-3 py-2">{item.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <div className="row justify-content-center">
            <Button variant="outlined">Tarih Seçiniz</Button>
          </div>
          <div className="row mt-5">
            <div className="text-info text-center w-100">
              <h6>Seçtiğiniz tarih</h6>
            </div>
            <div className="text-info text-center w-100">
              <h3>3. Çeyreğe</h3>
            </div>
            <div className="text-info text-center w-100">
              <h6>denk gelmektedir.</h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="text-info text-center w-100">
              <h6>Enflasyon Oranı</h6>
            </div>
            <div className="text-info text-center w-100">
              <h4>5.75%</h4>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <Button variant="contained" onClick={handleOpen}>
              Hesapla
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="text-light"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Yeni Maaş
          </Typography>
          <Typography
            className="text-light"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {user.name} yeni maaşı {user.payment}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default GetUser;
