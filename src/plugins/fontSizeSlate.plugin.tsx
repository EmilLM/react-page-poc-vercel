import { pluginFactories } from '@react-page/plugins-slate';

export default pluginFactories.createComponentPlugin<{
    fontSize: number;
  }>({
    addHoverButton: true,
    addToolbarButton: true,
    type: 'SetFontSize',
    object: 'mark',
    icon: <span>Size</span>,
    label: 'Size',
    Component: 'span',
    getStyle: ({ fontSize }) => ({ fontSize }),
    controls: {
      type: 'autoform',
      schema: {
        type: 'object',
        required: ['fontSize'],
        properties: {
           fontSize: {
            type: "number",
            default: 16,
          },
          },
        },
      },
    });