import { atom, selector } from 'recoil';

const nameState = atom({ key: 'nameState', default: '' });

const charState = selector({
  key: 'chatState',
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { nameState, charState };
