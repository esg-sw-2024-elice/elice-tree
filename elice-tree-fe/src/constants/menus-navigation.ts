import { KEYS_ROUTE } from './keys-route';
import {
  TEXT_HEADER_NAVIGATION_ADD_TREE,
  TEXT_HEADER_NAVIGATION_CAMPAIGN,
  TEXT_HEADER_NAVIGATION_INTRODUCE_SERVICE,
} from './text';

export const menusNavigation = [
  {
    protected: false,
    text: TEXT_HEADER_NAVIGATION_INTRODUCE_SERVICE,
    to: KEYS_ROUTE.LANDING(),
  },
  {
    protected: true,
    text: TEXT_HEADER_NAVIGATION_ADD_TREE,
    to: KEYS_ROUTE.TODOS(),
  },
  {
    protected: true,
    text: TEXT_HEADER_NAVIGATION_CAMPAIGN,
    to: 'https://www.elice.io',
  },
];
