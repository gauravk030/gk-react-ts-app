// material-ui
import { useTheme } from '@mui/material/styles';

// /**
//  * if you want to use image instead of <svg> uncomment following.
//  * /
import logoDark from 'assets/images/logo/gk-logo-2.svg';
import logo from 'assets/images/logo/gk-logo-2.svg';
 

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  const theme = useTheme();
  const themeMode = false;
  return (
      <img src={theme.palette.mode === themeMode ? logoDark : logo} alt="GK Tech" width="90" />
  );
}
