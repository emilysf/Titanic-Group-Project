/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Route2',
                            type: 'image',
                            rect: ['0px', '0px', '905px', '385px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Route2.png",'0px','0px']
                        },
                        {
                            id: 'south',
                            symbolName: 'south',
                            type: 'rect',
                            rect: ['759px', '119px', '173', '26', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'cher',
                            symbolName: 'cher',
                            type: 'rect',
                            rect: ['765px', '213px', '140', '34', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.99429']]
                        },
                        {
                            id: 'queen',
                            symbolName: 'queen',
                            type: 'rect',
                            rect: ['666', '98', '139', '34', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'titanic',
                            symbolName: 'titanic',
                            type: 'rect',
                            rect: ['321px', '279px', '42', '38', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.52381','1.52381']]
                        },
                        {
                            id: 'ice2',
                            symbolName: 'ice',
                            type: 'rect',
                            rect: ['273px', '247px', '64', '54', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.35004','1.35004']]
                        },
                        {
                            id: 'date2',
                            symbolName: 'date',
                            type: 'rect',
                            rect: ['301', '186', '147', '58', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '905px', '385px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 16380,
                    autoPlay: true,
                    data: [
                        [
                            "eid102",
                            "opacity",
                            0,
                            0,
                            "easeOutSine",
                            "${titanic}",
                            '1',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            13829,
                            409,
                            "easeOutSine",
                            "${titanic}",
                            '1',
                            '0.5396980047225952'
                        ],
                        [
                            "eid96",
                            "opacity",
                            14238,
                            195,
                            "easeOutSine",
                            "${titanic}",
                            '0.5396980047225952',
                            '0.37389498949050903'
                        ],
                        [
                            "eid103",
                            "opacity",
                            14433,
                            447,
                            "easeOutSine",
                            "${titanic}",
                            '0.37389498949050903',
                            '0.17863982382829'
                        ],
                        [
                            "eid98",
                            "opacity",
                            14880,
                            713,
                            "easeOutSine",
                            "${titanic}",
                            '0.1786399930715561',
                            '0'
                        ],
                        [
                            "eid55",
                            "left",
                            630,
                            647,
                            "easeOutSine",
                            "${titanic}",
                            '770px',
                            '765px'
                        ],
                        [
                            "eid56",
                            "left",
                            1837,
                            2496,
                            "linear",
                            "${titanic}",
                            '765px',
                            '714px'
                        ],
                        [
                            "eid67",
                            "left",
                            5001,
                            8576,
                            "easeOutSine",
                            "${titanic}",
                            '714px',
                            '320px'
                        ],
                        [
                            "eid89",
                            "left",
                            13577,
                            661,
                            "easeOutSine",
                            "${titanic}",
                            '320px',
                            '321px'
                        ],
                        [
                            "eid94",
                            "left",
                            14238,
                            642,
                            "easeOutSine",
                            "${titanic}",
                            '321px',
                            '316px'
                        ],
                        [
                            "eid97",
                            "left",
                            14880,
                            713,
                            "easeOutSine",
                            "${titanic}",
                            '316px',
                            '306px'
                        ],
                        [
                            "eid132",
                            "left",
                            0,
                            0,
                            "easeOutSine",
                            "${cher}",
                            '765px',
                            '765px'
                        ],
                        [
                            "eid117",
                            "left",
                            1277,
                            1533,
                            "easeOutSine",
                            "${cher}",
                            '765px',
                            '767px'
                        ],
                        [
                            "eid75",
                            "opacity",
                            9780,
                            1200,
                            "easeOutSine",
                            "${ice2}",
                            '0',
                            '0.38'
                        ],
                        [
                            "eid76",
                            "opacity",
                            10980,
                            1109,
                            "easeOutSine",
                            "${ice2}",
                            '0.3799999952316284',
                            '0.7'
                        ],
                        [
                            "eid77",
                            "opacity",
                            12089,
                            1488,
                            "easeOutSine",
                            "${ice2}",
                            '0.699999988079071',
                            '1'
                        ],
                        [
                            "eid133",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${cher}",
                            '213px',
                            '193px'
                        ],
                        [
                            "eid109",
                            "top",
                            1277,
                            0,
                            "easeOutSine",
                            "${cher}",
                            '193px',
                            '193px'
                        ],
                        [
                            "eid115",
                            "opacity",
                            880,
                            817,
                            "easeOutSine",
                            "${cher}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            2142,
                            1488,
                            "easeOutSine",
                            "${cher}",
                            '1',
                            '0'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            13577,
                            0,
                            "easeOutSine",
                            "${ice2}",
                            '1.35004',
                            '1.35004'
                        ],
                        [
                            "eid124",
                            "opacity",
                            630,
                            1067,
                            "easeOutSine",
                            "${south}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "left",
                            13577,
                            0,
                            "easeOutSine",
                            "${ice2}",
                            '273px',
                            '273px'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            13577,
                            0,
                            "easeOutSine",
                            "${ice2}",
                            '1.35004',
                            '1.35004'
                        ],
                        [
                            "eid79",
                            "scaleY",
                            13577,
                            0,
                            "easeOutSine",
                            "${titanic}",
                            '1.52381',
                            '1.52381'
                        ],
                        [
                            "eid54",
                            "top",
                            630,
                            647,
                            "easeOutSine",
                            "${titanic}",
                            '142px',
                            '174px'
                        ],
                        [
                            "eid62",
                            "top",
                            1837,
                            2496,
                            "easeOutSine",
                            "${titanic}",
                            '174px',
                            '131px'
                        ],
                        [
                            "eid68",
                            "top",
                            5001,
                            8576,
                            "easeOutSine",
                            "${titanic}",
                            '131px',
                            '267px'
                        ],
                        [
                            "eid90",
                            "top",
                            13577,
                            2016,
                            "easeOutSine",
                            "${titanic}",
                            '267px',
                            '284px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            3235,
                            561,
                            "easeOutSine",
                            "${queen}",
                            '0',
                            '0.4029789865016937'
                        ],
                        [
                            "eid135",
                            "opacity",
                            3796,
                            875,
                            "easeOutSine",
                            "${queen}",
                            '0.4029789865016937',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            5706,
                            258,
                            "easeOutSine",
                            "${queen}",
                            '1',
                            '0.42'
                        ],
                        [
                            "eid141",
                            "opacity",
                            5964,
                            718,
                            "easeOutSine",
                            "${queen}",
                            '0.41999998688697815',
                            '0'
                        ],
                        [
                            "eid83",
                            "top",
                            13577,
                            0,
                            "easeOutSine",
                            "${ice2}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            13577,
                            0,
                            "easeOutSine",
                            "${titanic}",
                            '1.52381',
                            '1.52381'
                        ],
                        [
                            "eid148",
                            "opacity",
                            14130,
                            403,
                            "easeOutSine",
                            "${date2}",
                            '0',
                            '0.539698'
                        ],
                        [
                            "eid146",
                            "opacity",
                            14533,
                            1847,
                            "easeOutSine",
                            "${date2}",
                            '0.539698',
                            '1'
                        ]
                    ]
                }
            },
            "titanic": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['8px', '-14px', '42px', '38px', 'auto', 'auto'],
                            id: 'ticon2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ticon2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '42px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ice": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '55px', 'auto', 'auto'],
                            id: 'ice',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ice.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "south": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'southampton',
                            text: 'Southampton',
                            align: 'left',
                            rect: ['0px', '0px', '173px', '26px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '173px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cher": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'cherbourg',
                            text: 'Cherbourg',
                            align: 'left',
                            rect: ['0px', '0px', '140px', '34px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "queen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4',
                            text: 'Queenstown',
                            align: 'left',
                            rect: ['0px', '0px', '139px', '34px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '139px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "date": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: 'April 15, 1912<br>2:20am ',
                            id: 'date',
                            opacity: '1',
                            align: 'center',
                            rect: ['0px', '0px', '147px', '58px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '147px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("route_edgeActions.js");
})("EDGE-45993276");
