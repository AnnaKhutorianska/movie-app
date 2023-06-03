import { FC } from "react";
import { HeaderBar } from "./Header.styles";
import { IconButton, Toolbar, Typography } from "@mui/material";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import Search from "./HeaderContent/Search";

interface HeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const Header: FC<HeaderProps> = ({ open, handleDrawerOpen }) => {
  return (
    <HeaderBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          {open ? <FormatIndentDecreaseIcon /> : <FormatIndentIncreaseIcon />}
        </IconButton>
        <Search />
      </Toolbar>
    </HeaderBar>
  );
};

export default Header;
