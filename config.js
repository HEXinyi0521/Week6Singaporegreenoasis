var config = {
    style: 'mapbox://styles/hexinyi0521/cm7uay1xc00f601qu0x01ef4h',
    accessToken: 'pk.eyJ1IjoiaGV4aW55aTA1MjEiLCJhIjoiY203dTdydmxmMDFndTJycXN3cHkybHY5cCJ9.vZZQOhyDe4mJUqD1YnuySQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'How Green is Singapore?🌿',
    subtitle: 'From Garden City to City in Nature: Explore Parks & Green Corridors in Singapore',
    byline: 'By Xinyi He',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Park System Overview',
            image: './asset/LGY.JPG',
            description: 'On June 16, 1963, Singapore held its first tree-planting ceremony, during which the late founding Prime Minister Lee Kuan Yew planted a Mempat Tree, symbolizing the vision of transforming the island into a lush, green paradise.<br><br>Today, Singapore boasts an impressive green cover. In this story map, we explore the geographical distribution, experiential value and significance of green spaces in Singapore.<a href="https://felt.com/map/Singapore-Park-System-Overview-4LCf6zOXSRKvum6CfNZ2CB?loc=1.3147,103.8471,11.14z"> <strong>Explore more</strong></a>  <br><br> The first map highlights the extensive park system, offering a glimpse into how these green havens are woven into the fabric of the city.<br><br><img src="images/legend1.png" style="height:200%;width:300px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 1
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0              
                },
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 1
               }
            ],
            onChapterExit: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 1
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 1
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                     layer: 'subzonecensus2010shp-drsstq',
                     opacity: 0.8
                },
                {
                 layer:'subzonecensus2010shp-drsstq (1)',
                 opacity: 0.2
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Park Connector Network',
            description: 'Park Connector Network (PCN) is a system of green corridors linking parks, nature reserves and urban areas for walking, cycling and recreation. It enhances connectivity across the island, promoting a sustainable and active lifestyle.<br><br><img src="images/legend2.png" style="height:200%;width:300px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 1
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 1
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 0.8
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0.2
               }
            ],
            onChapterExit: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 1
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 1               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 0.5
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 1
               }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Population Density Distribution',
            description: 'This map shows the population density across Singapore (classification: jenks; crid type: hexagonal grid). It is highest in the central and mature residential areas, with towns like Toa Payoh, Queenstown and Tampines. <br><br> How does park accessibility relate to population distribution? Scroll down, next map will show the relationship between them.<br><br><img src="images/legend3.png" style="height:200%;width:300px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0               
                },
                {
                    layer: 'populationdensity',
                    opacity: 1               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 0.5
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 1
               }
            ],
            onChapterExit: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0.8               
                },
                {
                    layer: 'populationdensity',
                    opacity: 1              
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 0.5
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 1
               }
            ],
        },
        {
            id: 'fourth-container',
            alignment: 'right',
            hidden: false,
            title: 'Greanery Accessibility',
            image: './asset/CIB.PNG',
            description: 'Within the communities, there are CIB awards encouraging residents to enhance biodiversity through sustainable gardening practices.<br><br> In larger scale, our mapping excercise informs us that there are parks within a 500-meter serve distance in areas with high population density. It ensures easy access to green spaces for residents in densely populated neighborhoods.<img src="images/legend4.png" style="height:100%;width:200px;"></img>',
            location: {
                center: [103.80664, 1.40085],
                zoom: 11,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 8, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0.8                
                },
                {
                    layer: 'populationdensity',
                    opacity: 1               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 0.5
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 1
               }
            ],
            onChapterExit: [
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0.5
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 1
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 1
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'right',
            hidden: false,
            title: 'Central Natrue Reserve',
            image: './asset/seletar.JPG',
            description: 'Zoom in, we can take a look at the Central Water Reserve. It is a scenic area offering beautiful views of nature. <br><br> Our mapping shows the popular routes for cycling and hiking, with well-maintained trails surrounding the reservoir. Visitors can enjoy the peaceful environment while engaging in outdoor activities amidst lush greenery.<br><br><img src="images/legend5.png" style="height:100%; width:100px;"></img>',
            location: {
                center: [103.80664, 1.40085],
                zoom: 12.5,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 8, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 1
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 1
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0.5
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ],
            onChapterExit: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 1
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 1
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0.5
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                 layer:'subzonecensus2010shp-drsstq (1)',
                 opacity: 1
                }
                
            ]
        },
        {
            id: 'sixth-container',
            alignment: 'left',
            hidden: false,
            title: 'Regional Park: East Coast Park',
            image: './asset/ecp1.jpg',
            description: 'Themed “Recreation for All”, this park has something for everyone. Enjoy diverse recreational, sporting and dining activities alongside views of the sea.<br> <br>You will enjoy a perfect day when you cycle in East Coast Park, capture the beautiful sunset, camp by the sea at night, listen to the sound of the waves, and have a barbecue and laugh with friends.',
            link: 'https://felt.com/map/Personal-Experience-East-Coast-Park-copy-s80KB0ZLRI9BOc10y5neCQA?loc=1.31074,103.95076,14.03z',
            location: {
                center: [103.93582, 1.30802],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0.5
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ],
            onChapterExit: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0.5
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ]
        },
        {
            id: 'seventh-container',
            alignment: 'fully',
            hidden: false,
            title: 'City Park: Garden by the Bay',
            image: './asset/GDBB.jpg',
            description: 'In this park, you can find two plant cool houses, namely the Flower Dome and the Cloud Forest, which house a vast collection of flowers and plants from all over the world. <br> <br> The Supertrees are the landmarks. They serve multiple practical functions, such as collecting rainwater, generating solar energy, and acting as ventilation ducts. Moreover, the park frequently hosts a variety of cultural events and exhibitions.',
            link:'https://felt.com/map/Personal-Experience-Garden-by-the-Bay-OZd9CLQqoQvisiNH2MUSUhC?loc=1.28333,103.865191,17.18z',
            location: {
                center: [103.86609, 1.28111],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0.5
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ],
            onChapterExit: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 0
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 0
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 0
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ]
        },
        {
            id: 'eighth-container',
            alignment: 'fully',
            hidden: false,
            title: 'Gonna Explore More?',
            description: 'Stay tuned! Our website will be updated to provide more information from the experiences. You can also share your park visit experiences by sending them to the email: Catherineho6880@gmail.com.<br><br>Let the author help you contribute to making this website more vibrant with the story of visiting parks in Singapore.',
            location: {
                center: [103.79396,  1.39224],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 1
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 1
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ],
            onChapterExit: [
                {
                    layer: 'central nature reserve biking routes',
                    opacity: 0
                },
                {
                    layer: 'central nature reserve hiking trail',
                    opacity: 0
                },
                {
                    layer: 'nparksparksandnaturereserves',
                    opacity: 1
                },
                {
                    layer: 'mp19parksandopenspace',
                    opacity: 1
                },                
                {
                    layer: 'park_serve_500m',
                    opacity: 0                
                },
                {
                    layer: 'populationdensity',
                    opacity: 0               
                },
                {
                    layer: 'parkconnectorloop-91kute',
                    opacity: 1
                },
                {
                    layer: 'subzonecensus2010shp-drsstq',
                    opacity: 1
               },
               {
                layer:'subzonecensus2010shp-drsstq (1)',
                opacity: 0
               }
            ]
        }
    ]
};