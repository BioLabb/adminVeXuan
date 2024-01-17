import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { auth } from "../utils/database";
import { signInWithGoogle } from "../api/auth";
import { writeVeXuan } from "../api/veXuanRealTime";
import { setVeXuanWithId } from "../api/storeVeXuan";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);
  const [pass, setPass] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePass = (e) => {
    setOpen(e.target.value);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const onsubmit = (e) => {
    
 };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className="mb-0">Đăng nhập</p>
        </DialogTitle>
        <DialogContent>
          <Stack>
            <TextField
              onChange={handleUser}
              id="standard-basic"
              label="Tài khoản"
              variant="standard"
            />
            <TextField
              onChange={handlePass}
              id="standard-basic"
              label="Mật khẩu"
              variant="standard"
            />
            <Button
              onClick={onsubmit}
              variant="contained"
              style={{ marginTop: "10px" }}
            >
              Đăng nhập
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
