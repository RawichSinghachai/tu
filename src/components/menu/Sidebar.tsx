import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const drawerWidth = 260;

const Sidebar = (props: Props) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: {
          desktop: "block",
          laptop: "block",
          tablet: "block",
          mobile: "none",
        },
      }}
    >
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
            boxSizing: "border-box",
            bgcolor: "#6B9CAF",
            borderRadius: 4,
            ml: 1,
            mt: 1,
            p: 1,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            bgcolor: "#2B5171",
            color: "#FFFFFF",
            m: 2,
            p: 0.5,
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          My File
        </Typography>
        <Divider />
        <List>
          {/* <Link href='/history' style={{textDecoration:'none'}}> */}
          <ListItem
            disablePadding
            sx={{ my: 2 }}
            onClick={() => router.push("/history")}
          >
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <PersonIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                ข้อมูลผู้ใช้งาน
              </Typography>
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          {/* <Link href='/chart' style={{textDecoration:'none'}}> */}
          <ListItem
            disablePadding
            sx={{ my: 2 }}
            onClick={() => router.push("/chart")}
          >
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <TrendingUpIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                ความก้าวหน้า
              </Typography>
            </ListItemButton>
          </ListItem>
          {/* </Link> */}

          <ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <TrendingUpIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                อัตราการเต้นหัวใจ
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton
              sx={{
                bgcolor: "#cfcfcb",
                "&:hover": { bgcolor: "#a8a8a8" },
                borderRadius: 8,
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                <TrendingUpIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{ color: "#000000" }}>
                เกร็ดน่ารู้
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
