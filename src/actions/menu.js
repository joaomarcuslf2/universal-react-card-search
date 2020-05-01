import { OPEN_MENU, CLOSE_MENU } from '@constants/menu';

export function toggleMenu(dispatch, getState) {
  const { isOpen } = getState().menu;

  if (isOpen) {
    return {
      type: CLOSE_MENU,
    };
  }
  return {
    type: OPEN_MENU,
  };
}
