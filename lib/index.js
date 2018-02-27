import 'normalize.css';
import './index.css';
import screen from './screen';
import print from 'spectacle/lib/themes/default/print';

/**
 * Create the theme.
 */
const createTheme = function(name, custom) {
  return {
    screen: screen(name, custom),
    print: print()
  };
};

export default createTheme;