import IMenuOptions from '../interfaces/interface-menu';
import path from './const-path';

const menuOptions: IMenuOptions[] = [
  {
    // inicio/bots
    text: 'Bots',
    path: '/' +  path.home.home + '/' + path.home.bots,
    angularMaterialIcon: 'smart_toy',
  },
];

export default menuOptions;
