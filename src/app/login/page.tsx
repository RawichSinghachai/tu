import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";

import logo from "../../../public/logo.png";

type Props = {};

const Login = (props: Props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        weight: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image
        src={logo}
        alt="Picture of the author"
        width={500}
        height={350}
        priority
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:'center'
        }}
      >
        <Card sx={{ p: 4, bgcolor: "#6B9CAF", borderRadius: 2, mb: 2 }}>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            <TextField
              id="outlined-basic"
              label="ชื่อผู้ใช้งาน/อีเมล"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{ bgcolor: "white",borderRadius: 2 }}
            />
            <TextField
              id="outlined-basic1"
              label="รหัสผ่าน"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{ bgcolor: "white",borderRadius: 2 }}
            />
          </Stack>
        </Card>
        <Button
          variant="contained"
          sx={{
            borderRadius: 6,
            p: 1,
            width: "200px",
            bgcolor: "#2B5171",
            "&:hover": { bgcolor: "#1b3347" },
          }}
        >
          <Typography variant="h6" sx={{ color: "#ffffff" }}>
            เข้าสู่ระบบ
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
