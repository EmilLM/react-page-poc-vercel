import React, { useState } from 'react';

// The editor core
import { pluginFactories } from '@react-page/plugins-slate';


export default pluginFactories.createComponentPlugin<{
    fontFamily: string;
  }>({
    addHoverButton: true,
    addToolbarButton: true,
    type: 'SetFontFamily',
    object: 'mark',
    icon: <span>Fonts</span>,
    label: 'Fonts',
    Component: 'span',
    getStyle: ({ fontFamily }) => ({ fontFamily }),
    controls: {
      type: 'autoform',
      schema: {
        type: 'object',
        required: ['fontFamily'],
        properties: {
           fontFamily: {
            type: "string",
            enum: ["overpass", "lato", "capriola","Arial","veranda"],
          },
          },
        },
      },
    });