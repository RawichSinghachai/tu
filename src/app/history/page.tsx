"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import Sidebar from "../../components/menu/Sidebar";
import TableDisplay from "../../components/TableDisplay";


type Props = {};

const History = (props: Props) => {
  return (
    <Box sx={{ display: "flex",justifyContent:'space-evenly'}}>
      <Sidebar />

      {/* cotent */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml:4,
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={8}
          sx={{mb:4}}
        >
          <Avatar alt="Cindy Baker"  sx={{height:100,width:100}}/>
          <Card sx={{ maxWidth: 500, bgcolor: "#2B5171", p: 2 }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                Name ...
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                Singname ...
              </Typography>
            </Stack>

            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Nickname ...
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                Height...
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                weight...
              </Typography>
            </Stack>
          </Card>
        </Stack>

        <TableDisplay />
      </Box>
    </Box>
  );
};

export default History;
