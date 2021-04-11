import React, { ReactElement } from 'react';

import MenuItem from './menu-item';
export interface Props {
  pathname: string;
}

const Menu = ({ pathname }: Props): ReactElement => {
  const navItems: NavigationItem[] = [
    {
      key: 'home',
      text: 'Home',
      navigateTo: '/',
    },
    {
      key: 'recoil-example-page-1',
      text: 'Recoil Example',
      navigateTo: '/recoil-example-page-1',
    },
  ];

  return (
    <div className="flex space-x-4">
      {navItems.map((item: NavigationItem) => (
        <MenuItem
          id={item.key}
          active={item.navigateTo === pathname}
          navigateTo={item.navigateTo}
          key={item.key}
          text={item.text}
          // icon={<item.icon size={16} />}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default Menu;
