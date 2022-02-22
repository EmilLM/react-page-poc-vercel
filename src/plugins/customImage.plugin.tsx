import type { CellPlugin } from '@react-page/editor';
import CustomImage from '../components/Custom/CustomImage'
import ImageForm from '../customForms/imageUpload.form';
import { defaultSettings } from '../customForms/imageForm.settings'
import { fakeImageUploadService } from '../utils/uploadImage.function'

interface Data {
    boxStyle: {
        width: string;
        height: string;
        margin: string;
        padding: number;
        border: string;
        borderRadius: number;
        display: string;
        flexDirection: string;
        justifyContent: string;
        alignItems: string
    }
    imgStyle: {
        width: string;
        height: string
    }
    src: string;
}

const customImagePlugin: CellPlugin<Data> = {
    Renderer: ({ children, data }) => <CustomImage data={data}>{children}</CustomImage>,
    id: 'simple-image',
    title: 'Custom image',
    description: 'A custom image plugin.',
    version: 1,
    isInlineable: true,
    allowInlineNeighbours: true,
    allowClickInside: true,
    controls: [
        {
            title: 'Upload',
            controls: {
                type: 'custom',
                Component: (props) => (
                  <ImageForm
                    {...props}
                    translations={defaultSettings.translations}
                    imageUpload={fakeImageUploadService('/images/react.png')}
                  />
                ),
            },
        },
        {
            title: 'Img size',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        imgStyle: {
                            type: 'object',
                            properties: {
                                width: {
                                    type: 'string',
                                    default: '200px'
                                },
                                height: {
                                    type: 'string',
                                    default: 'auto'
                                },
                            },
                        }
                    }
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
                        boxStyle: {
                            type: 'object',
                            properties: {
                                width: {
                                    type: 'string',
                                    default: '100%'
                                },
                                height: {
                                    type: 'string',
                                    default: '100%'
                                },
                            },
                        }
                    }
                }
            }
        },
        {
            title: 'Border',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        boxStyle: {
                            type: 'object',
                            properties: {
                                border: {
                                    type: 'string',
                                    default: ''
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
            title: 'Spacing',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        boxStyle: {
                            type: 'object',
                            properties: {
                                margin: {
                                    type: 'string',
                                    default: '0px 0px 0px 0px'
                                },
                                padding: {
                                    type: 'number',
                                    default: 0,
                                },
                            },
                        }
                    }
                }
            }
        },
        {
            title: 'Display',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    properties: {
                        boxStyle: {
                            type: 'object',
                            properties: {
                                display: {
                                    type: 'string',
                                    default: 'grid'
                                },
                                flexDirection: {
                                    type: 'string',
                                    default: 'row',
                                },
                                justifyContent: {
                                    type: 'string',
                                    default: 'center'
                                },
                                alignItems: {
                                    type: 'string',
                                    default: 'center'
                                }
                            },
                        }
                    }
                }
            }
        },
    ],   
};


export default customImagePlugin;