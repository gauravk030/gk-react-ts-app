// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 *
 */

import logoDark from 'assets/images/logo/gk-logo-1.svg';
import logo from 'assets/images/logo/gk-logo-1.svg';

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();
  const themeMode = false;
  return (
    <img src={theme.palette.mode === themeMode ? logoDark : logo} alt="GK Tech" width="60" />
  );
}
