import React, { ReactElement } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { nameState, charState } from './state';

const Display = (): ReactElement => {
  const charName = useRecoilValue(charState);
  const [name] = useRecoilState(nameState);

  return (
    <div>
      <p>My name is {name}</p>
      <p>My name has {charName} characters</p>
    </div>
  );
};

export default Display;
