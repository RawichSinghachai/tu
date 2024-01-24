"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Sidebar from "../../components/menu/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type Props = {};

const chart = (props: Props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", height: "100vh" }}
    >
      <Sidebar />

      <Box>
        <Box
          sx={{ height: "500px", width: "500px", bgcolor: "#ffffff", mt: 1 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{mt:2}}
        >

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="h6"
            sx={{
              bgcolor: "#6B9CAF",
              color: "#ffffff",
              borderRadius: 6,
              p: 0.5,
              width: "150px",
              textAlign: "center",
            }}
          >
            จำนวนการเดิน
          </Typography>

          <Typography
            variant="h6"
            sx={{
                bgcolor: "#cfcfcb",
              color: "#2B5171",
              borderRadius: 6,
              p: 0.5,
              width: "150px",
              textAlign: "center",
            }}
          >
            5 ครั้ง
          </Typography>
        </Stack>


        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="h6"
            sx={{
              bgcolor: "#6B9CAF",
              color: "#ffffff",
              borderRadius: 6,
              p: 0.5,
              width: "150px",
              textAlign: "center",
            }}
          >
            เวลาในการเดิน
          </Typography>

          <Typography
            variant="h6"
            sx={{
                bgcolor: "#cfcfcb",
              color: "#2B5171",
              borderRadius: 6,
              p: 0.5,
              width: "150px",
              textAlign: "center",
            }}
          >
            7 นาที
          </Typography>
        </Stack>


        </Stack>
      </Box>
    </Box>
  );
};

export default chart;
