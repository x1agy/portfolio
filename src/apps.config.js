import { displayTerminal } from '@/components/apps/terminal';
import { displaySettings } from '@/components/apps/settings';
import { displayChrome } from '@/components/apps/chrome';
import { displayTrash } from '@/components/apps/trash';
import { displayGedit } from '@/components/apps/gedit';
import { displayAboutAiden } from '@/components/apps/aiden';
import { displayTerminalCalc } from '@/components/apps/calc';
import { VsCode } from '@/components';

const apps = [
  // {
  //   id: 'about-aiden',
  //   title: 'About Aiden',
  //   icon: './images/logos/aidenmori.png',
  //   disabled: false,
  //   favourite: true,
  //   desktop_shortcut: true,
  //   screen: displayAboutAiden,
  // },
  {
    id: 'chrome',
    title: 'Google Chrome',
    icon: './themes/Yaru/apps/chrome.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: 'calc',
    title: 'Calc',
    icon: './themes/Yaru/apps/calc.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: 'vscode',
    title: 'Visual Studio Code',
    icon: './themes/Yaru/apps/vscode.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: VsCode,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: './themes/Yaru/apps/bash.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },

  {
    id: 'settings',
    title: 'Settings',
    icon: './themes/Yaru/apps/gnome-control-center.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: 'gedit',
    title: 'Contact Me',
    icon: './themes/Yaru/apps/gedit.png',
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: 'trash',
    title: 'Trash',
    icon: './themes/Yaru/system/user-trash-full.png',
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
