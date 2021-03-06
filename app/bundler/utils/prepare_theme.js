import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import themeConstructor from 'lib-theme-contructor';
import theme from '../../src/themes/default';

export default (name, output) => themeConstructor.createThemes([
  {
    name,
    entry: path.join(__dirname, '../../node_modules/lib-react-components/styles/index.sss'),
    out: output,
    options: theme,
  },
]);
