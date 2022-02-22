import type { CellPlugin } from '@react-page/editor';
import ButtonWithModal from '../components/Custom/ButtonWithModal'
import { ColorPickerField } from '@react-page/editor';

interface Data {
    text: string;
    style: {
        width: string;
        height: number;
        margin: string;
        padding: number;
        border: string;
        borderRadius: number;
        backgroundColor: string;
        textColor: string;
        fontSize: number;
        fontWeight: number;
        position: string;
    }
}

const buttonWithModalPlugin: CellPlugin<Data> = {
    Renderer: ({ children, data }) => <ButtonWithModal data={data}>{children}</ButtonWithModal>,
    id: 'button-with-modal-plugin',
    title: 'TnCButton',
    description: 'Button with modal plugin.',
    version: 1,
    isInlineable: true,
    allowClickInside: true,
    controls: [
        {
            title: 'Content',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        text: {
                            type: 'string',
                            default: 'Button'
                        }
                    },
                }
            }
        },
        {
            title: 'Sizing',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        style: {
                            type: 'object',
                            properties: {
                                width: {
                                    type: 'string',
                                },
                                height: {
                                    type: 'number',
                                },
                                fontSize: {
                                    type: 'number',
                                    default: 16
                                },
                                fontWeight: {
                                    type: 'number',
                                    default: 400
                                }
                            },
                        }
                    }
                }
            }
        },
        {
            title: 'Coloring',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        style: {
                            type: 'object',
                            properties: {
                                backgroundColor: {
                                    type: 'string',
                                    default: 'lightgray',
                                    uniforms: {
                                        component: ColorPickerField,
                                    },
                                },
                                textColor: {
                                    type: 'string',
                                    default: 'black',
                                    uniforms: {
                                        component: ColorPickerField,
                                    },
                                },
                                border: {
                                    type: 'string',
                                    default: ''
                                },
                               

                            },
                        }
                    }
                }
            }
        },
        {
            title: 'Spacing',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        style: {
                            type: 'object',
                            properties: {
                                margin: {
                                    type: 'string',
                                    default: '0px 0px 0px 0px'
                                },
                                padding: {
                                    type: 'number',
                                    default: 10,
                                },
                                borderRadius: {
                                    type: 'number',
                                    default: 0
                                },
                                position: {
                                    type: 'string',
                                    default: 'static',
                                }
                            },
                        }
                    }
                }
            }
        },
        
    ],   
};


export default buttonWithModalPlugin;