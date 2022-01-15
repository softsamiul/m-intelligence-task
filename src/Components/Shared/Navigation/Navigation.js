import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import UserAvatar from "../../../assets/images/user-avatar.png";
import BrandLogo from "../../../assets/images/logo.png";
import AnswerQueryImg from "../../../assets/images/setting-icon.png";
import DashBoardIcon from "../../../assets/images/dashboard-icon.png";
import AnomaliesIcon from "../../../assets/images/anomalies.png";
import NotificationIcon from "../../../assets/images/notification-icon.png";
import Fade from "react-reveal/Fade";
import "./Navigation.scss";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="navigation">
      <Fade top>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img
                className="brand-logo-img"
                src={BrandLogo}
                alt="Unified Analytics Logo"
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <span className="brand-logo-text">Unified</span> Analytics
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <img src={AnswerQueryImg} alt="Answer Engine icon" />
                    <Typography textAlign="center">Answer Engine</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <img src={DashBoardIcon} alt="DashBoard Icon" />
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <img src={AnomaliesIcon} alt="Anomalies Icon" />
                    <Typography textAlign="center">Anomalies</Typography>
                  </MenuItem>
                </Menu>
              </Box>

              {/* Brand Logo */}
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <img
                    className="brand-logo-img"
                    src={BrandLogo}
                    alt="Unified Analytics Logo"
                  />
                  Unified Analytics
                </Typography>
              </Box>

              {/* Navbar Item */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Box className="menu-item-wrapper">
                  <img
                    className="menu-item-icon"
                    src={AnswerQueryImg}
                    alt="Answer Engine icon"
                  />
                  <Button
                    className="menu-item-custom"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Answer Engine
                  </Button>
                </Box>
                <Box className="menu-item-wrapper dashboard-wrap">
                  <img
                    className="menu-item-icon"
                    src={DashBoardIcon}
                    alt="DashBoard Icon"
                  />
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Dashboard
                  </Button>
                </Box>
                <Box className="menu-item-wrapper">
                  <img
                    className="menu-item-icon"
                    src={AnswerQueryImg}
                    alt="Anomalies Icon"
                  />
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Anomalies
                  </Button>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 0 }} className="navbar-right-section">
                <img src={NotificationIcon} alt="Notification" />
                <span className="navbar-user-text">
                  Hello <span className="username-text">Era</span>
                </span>
                <Tooltip title="Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={UserAvatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Fade>
    </div>
  );
};

export default Navigation;
