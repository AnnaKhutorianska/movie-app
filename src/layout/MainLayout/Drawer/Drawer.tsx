import { FC } from "react";
import { Divider, IconButton, List, Drawer as MuiDrawer, Typography } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DrawerHeader } from "./Drawer.styles";
import Filters from "@/components/Filters";

interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}
const Drawer: FC<DrawerProps> = ({ open, handleDrawerClose }) => {
  return (
    <MuiDrawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography> App </Typography>
        <IconButton onClick={handleDrawerClose}>
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Filters filters={["All", "Movies", "People", "TV"]} />
      <Divider />
      <List>
        {["Favorits", "Compare", "Account"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </MuiDrawer>
  );
};

export default Drawer;
