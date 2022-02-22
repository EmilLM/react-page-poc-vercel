import type { CellPlugin } from '@react-page/editor';

import { defaultSlate, customizedSlate } from './slate';
import { fakeImageUploadService } from '../utils/uploadImage.function';


import background, { ModeEnum } from '@react-page/plugins-background';
import divider from '@react-page/plugins-divider';
import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';


import '@react-page/plugins-background/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';

import containerPlugin from './container.plugin';
import buttonPlugin from './button.plugin';
import buttonWithModalPlugin from './buttonWithModal.plugin';
import customImagePlugin from './customImage.plugin';


// Define which plugins we want to use.

export const cellPlugins = [
  defaultSlate,
  customizedSlate,
  spacer,
  imagePlugin({ imageUpload: fakeImageUploadService('/images/react.png') }),
  divider,
  background({
    imageUpload: fakeImageUploadService('/images/sea-bg.jpg'),
    enabledModes:
      ModeEnum.COLOR_MODE_FLAG |
      ModeEnum.IMAGE_MODE_FLAG |
      ModeEnum.GRADIENT_MODE_FLAG,
  }),
  // custom plugins 
  containerPlugin,
  buttonPlugin,
  buttonWithModalPlugin,
  customImagePlugin
];