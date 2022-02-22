import type { CellPlugin } from '@react-page/editor';
import Container from '../components/Custom/Container'
import { ColorPickerField } from '@react-page/editor';

interface Data {
    style: {
        height: string;
        width: string;
        margin: string;
        padding: number;
        border: string;
        borderRadius: number;
        backgroundColor: string;
        textColor: string;
        position: string;
        zIndex: number;
        top: number;
        right: number;
    }
   
}

const containerPlugin: CellPlugin<Data> = {
    Renderer: ({children, data}) => <Container data={data}>{children}</Container>,
    id: 'container-plugin',
    title: 'Container',
    description: 'Container with variable height & width.',
    version: 1,
    isInlineable: true,
    allowInlineNeighbours: true,
    // cellStyle: {
    //     width: '50%',
    // },
    controls: [
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
                                    default: '100%'
                                },
                                height: {
                                    type: 'string',
                                    default: '100%',
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
                                    default: 'white',
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
                                }
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
                                }
                            },
                        }
                    }
                }
            }
        },
        {
            title: 'Positioning',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        style: {
                            type: 'object',
                            properties: {
                                position: {
                                    type: 'string',
                                    default: 'static'
                                },
                                zIndex: {
                                    type: 'number',
                                    default: 1,
                                },
                                top: {
                                    type: 'number',
                                    default: 0
                                },
                                right: {
                                    type: 'number',
                                    default: 0
                                }
                            },
                        }
                    }
                }
            }
        },
        
    ],   
};


export default containerPlugin;