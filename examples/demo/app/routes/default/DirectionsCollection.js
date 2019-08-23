import { Repeater, PureContainer, Controller as CxController } from "cx/ui";
import { DirectionsRenderer } from "../../../lib";

const collection = [
    {
        geocoded_waypoints: [
            {
                geocoder_status: "OK",
                place_id: "Eig3NiBXZXN0IEVuZCBBdmUsIE5ldyBZb3JrLCBOWSAxMDAyMywgVVNB",
                types: ["street_address"]
            },
            {
                geocoder_status: "OK",
                place_id: "EiozNTItMzk4IFcgNTd0aCBTdCwgTmV3IFlvcmssIE5ZIDEwMDE5LCBVU0E",
                types: ["street_address"]
            }
        ],
        routes: [
            {
                bounds: {
                    south: 40.7678,
                    west: -73.99139000000001,
                    north: 40.77407,
                    east: -73.98542
                },
                copyrights: "Map data ©2017 Google",
                legs: [
                    {
                        distance: { text: "0.7 mi", value: 1052 },
                        duration: { text: "5 mins", value: 277 },
                        end_address: "352-398 W 57th St, New York, NY 10019, USA",
                        end_location: {
                            lat: 40.7678048,
                            lng: -73.98542220000002
                        },
                        start_address: "76 West End Ave, New York, NY 10023, USA",
                        start_location: {
                            lat: 40.7740699,
                            lng: -73.98866950000001
                        },
                        steps: [
                            {
                                distance: { text: "0.2 mi", value: 311 },
                                duration: { text: "2 mins", value: 90 },
                                end_location: {
                                    lat: 40.7716232,
                                    lng: -73.99045230000002
                                },
                                polyline: {
                                    points: "}tzwFd|qbMf@ZhAv@|@j@~@n@b@X`@Zv@d@fAr@r@b@"
                                },
                                start_location: {
                                    lat: 40.7740699,
                                    lng: -73.98866950000001
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "}tzwFd|qbMf@ZhAv@|@j@~@n@b@X`@Zv@d@fAr@r@b@",
                                path: [
                                    { lat: 40.77407, lng: -73.98867 },
                                    { lat: 40.77387, lng: -73.98881 },
                                    { lat: 40.773500000000006, lng: -73.98909 },
                                    { lat: 40.77319000000001, lng: -73.98931 },
                                    {
                                        lat: 40.772870000000005,
                                        lng: -73.98955000000001
                                    },
                                    { lat: 40.772690000000004, lng: -73.98968 },
                                    { lat: 40.77252, lng: -73.98982000000001 },
                                    {
                                        lat: 40.772240000000004,
                                        lng: -73.99001000000001
                                    },
                                    { lat: 40.77188, lng: -73.99027000000001 },
                                    {
                                        lat: 40.771620000000006,
                                        lng: -73.99045000000001
                                    }
                                ],
                                lat_lngs: [
                                    { lat: 40.77407, lng: -73.98867 },
                                    { lat: 40.77387, lng: -73.98881 },
                                    { lat: 40.773500000000006, lng: -73.98909 },
                                    { lat: 40.77319000000001, lng: -73.98931 },
                                    {
                                        lat: 40.772870000000005,
                                        lng: -73.98955000000001
                                    },
                                    { lat: 40.772690000000004, lng: -73.98968 },
                                    { lat: 40.77252, lng: -73.98982000000001 },
                                    {
                                        lat: 40.772240000000004,
                                        lng: -73.99001000000001
                                    },
                                    { lat: 40.77188, lng: -73.99027000000001 },
                                    {
                                        lat: 40.771620000000006,
                                        lng: -73.99045000000001
                                    }
                                ],
                                instructions: "Head <b>southwest</b> on <b>West End Ave</b> toward <b>W 62nd St</b>",
                                maneuver: "",
                                start_point: {
                                    lat: 40.7740699,
                                    lng: -73.98866950000001
                                },
                                end_point: {
                                    lat: 40.7716232,
                                    lng: -73.99045230000002
                                }
                            },
                            {
                                distance: { text: "0.1 mi", value: 166 },
                                duration: { text: "1 min", value: 42 },
                                end_location: {
                                    lat: 40.770312,
                                    lng: -73.99139020000001
                                },
                                polyline: {
                                    points: "sezwFhgrbM`Al@z@j@jAv@z@h@"
                                },
                                start_location: {
                                    lat: 40.7716232,
                                    lng: -73.99045230000002
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "sezwFhgrbM`Al@z@j@jAv@z@h@",
                                path: [
                                    {
                                        lat: 40.771620000000006,
                                        lng: -73.99045000000001
                                    },
                                    { lat: 40.77129, lng: -73.99068000000001 },
                                    {
                                        lat: 40.770990000000005,
                                        lng: -73.99090000000001
                                    },
                                    { lat: 40.770610000000005, lng: -73.99118 },
                                    { lat: 40.77031, lng: -73.99139000000001 }
                                ],
                                lat_lngs: [
                                    {
                                        lat: 40.771620000000006,
                                        lng: -73.99045000000001
                                    },
                                    { lat: 40.77129, lng: -73.99068000000001 },
                                    {
                                        lat: 40.770990000000005,
                                        lng: -73.99090000000001
                                    },
                                    { lat: 40.770610000000005, lng: -73.99118 },
                                    { lat: 40.77031, lng: -73.99139000000001 }
                                ],
                                instructions: "Continue onto <b>11th Ave</b>",
                                maneuver: "",
                                start_point: {
                                    lat: 40.7716232,
                                    lng: -73.99045230000002
                                },
                                end_point: {
                                    lat: 40.770312,
                                    lng: -73.99139020000001
                                }
                            },
                            {
                                distance: { text: "0.4 mi", value: 575 },
                                duration: { text: "2 mins", value: 145 },
                                end_location: {
                                    lat: 40.7678048,
                                    lng: -73.98542220000002
                                },
                                maneuver: "turn-left",
                                polyline: {
                                    points: "m}ywFdmrbM`AyCDOdDkKlFwPX{@"
                                },
                                start_location: {
                                    lat: 40.770312,
                                    lng: -73.99139020000001
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "m}ywFdmrbM`AyCDOdDkKlFwPX{@",
                                path: [
                                    { lat: 40.77031, lng: -73.99139000000001 },
                                    { lat: 40.769980000000004, lng: -73.99062 },
                                    { lat: 40.76995, lng: -73.99054000000001 },
                                    { lat: 40.76912, lng: -73.98856 },
                                    { lat: 40.76793000000001, lng: -73.98572 },
                                    { lat: 40.7678, lng: -73.98542 }
                                ],
                                lat_lngs: [
                                    { lat: 40.77031, lng: -73.99139000000001 },
                                    { lat: 40.769980000000004, lng: -73.99062 },
                                    { lat: 40.76995, lng: -73.99054000000001 },
                                    { lat: 40.76912, lng: -73.98856 },
                                    { lat: 40.76793000000001, lng: -73.98572 },
                                    { lat: 40.7678, lng: -73.98542 }
                                ],
                                instructions: 'Turn <b>left</b> onto <b>W 57th St</b><div style="font-size:0.9em">Destination will be on the right</div>',
                                start_point: {
                                    lat: 40.770312,
                                    lng: -73.99139020000001
                                },
                                end_point: {
                                    lat: 40.7678048,
                                    lng: -73.98542220000002
                                }
                            }
                        ],
                        traffic_speed_entry: [],
                        via_waypoint: [],
                        via_waypoints: []
                    }
                ],
                overview_polyline: "}tzwFd|qbMnFnDdAt@~BxA|FtDz@h@`AyCjD{KfGsR",
                summary: "West End Ave and W 57th St",
                warnings: [],
                waypoint_order: [],
                overview_path: [
                    { lat: 40.77407, lng: -73.98867 },
                    { lat: 40.772870000000005, lng: -73.98955000000001 },
                    { lat: 40.77252, lng: -73.98982000000001 },
                    { lat: 40.77188, lng: -73.99027000000001 },
                    { lat: 40.770610000000005, lng: -73.99118 },
                    { lat: 40.77031, lng: -73.99139000000001 },
                    { lat: 40.769980000000004, lng: -73.99062 },
                    { lat: 40.76912, lng: -73.98856 },
                    { lat: 40.7678, lng: -73.98542 }
                ]
            }
        ],
        status: "OK",
        request: {
            origin: { lat: 40.77410687, lng: -73.98875713000001 },
            destination: { lat: 40.76770418, lng: -73.98549557000001 },
            travelMode: "DRIVING"
        }
    },
    {
        geocoded_waypoints: [
            {
                geocoder_status: "OK",
                place_id: "ChIJd-dqHoVYwokR0KBbDOfoOjQ",
                types: ["street_address"]
            },
            {
                geocoder_status: "OK",
                place_id: "ChIJ6zoMO5ZYwokRRn4MlDOqPu8",
                types: ["street_address"]
            }
        ],
        routes: [
            {
                bounds: {
                    south: 40.778220000000005,
                    west: -73.97553,
                    north: 40.787690000000005,
                    east: -73.96056
                },
                copyrights: "Map data ©2017 Google",
                legs: [
                    {
                        distance: { text: "1.3 mi", value: 2125 },
                        duration: { text: "8 mins", value: 494 },
                        end_address: "45 E 82nd St, New York, NY 10028, USA",
                        end_location: {
                            lat: 40.77822390000001,
                            lng: -73.96056429999999
                        },
                        start_address: "100 W 85th St, New York, NY 10024, USA",
                        start_location: { lat: 40.7859425, lng: -73.9730164 },
                        steps: [
                            {
                                distance: { text: "0.2 mi", value: 242 },
                                duration: { text: "1 min", value: 51 },
                                end_location: {
                                    lat: 40.7869996,
                                    lng: -73.97553089999997
                                },
                                polyline: { points: "c_}wFjznbMsEtN" },
                                start_location: {
                                    lat: 40.7859425,
                                    lng: -73.9730164
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "c_}wFjznbMsEtN",
                                path: [
                                    { lat: 40.785940000000004, lng: -73.97302 },
                                    { lat: 40.787000000000006, lng: -73.97553 }
                                ],
                                lat_lngs: [
                                    { lat: 40.785940000000004, lng: -73.97302 },
                                    { lat: 40.787000000000006, lng: -73.97553 }
                                ],
                                instructions: "Head <b>northwest</b> on <b>W 85th St</b> toward <b>Amsterdam Ave</b>",
                                maneuver: "",
                                start_point: {
                                    lat: 40.7859425,
                                    lng: -73.9730164
                                },
                                end_point: {
                                    lat: 40.7869996,
                                    lng: -73.97553089999997
                                }
                            },
                            {
                                distance: { text: "289 ft", value: 88 },
                                duration: { text: "1 min", value: 32 },
                                end_location: {
                                    lat: 40.7876872,
                                    lng: -73.97501349999999
                                },
                                maneuver: "turn-right",
                                polyline: { points: "we}wF`jobMiCgB" },
                                start_location: {
                                    lat: 40.7869996,
                                    lng: -73.97553089999997
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "we}wF`jobMiCgB",
                                path: [
                                    { lat: 40.787000000000006, lng: -73.97553 },
                                    {
                                        lat: 40.787690000000005,
                                        lng: -73.97501000000001
                                    }
                                ],
                                lat_lngs: [
                                    { lat: 40.787000000000006, lng: -73.97553 },
                                    {
                                        lat: 40.787690000000005,
                                        lng: -73.97501000000001
                                    }
                                ],
                                instructions: "Turn <b>right</b> at the 1st cross street onto <b>Amsterdam Ave</b>",
                                start_point: {
                                    lat: 40.7869996,
                                    lng: -73.97553089999997
                                },
                                end_point: {
                                    lat: 40.7876872,
                                    lng: -73.97501349999999
                                }
                            },
                            {
                                distance: { text: "0.3 mi", value: 546 },
                                duration: { text: "2 mins", value: 144 },
                                end_location: {
                                    lat: 40.7852883,
                                    lng: -73.96934999999996
                                },
                                maneuver: "turn-right",
                                polyline: {
                                    points: "aj}wFxfobMlFsP|A{En@sBv@_C\\cALc@"
                                },
                                start_location: {
                                    lat: 40.7876872,
                                    lng: -73.97501349999999
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "aj}wFxfobMlFsP|A{En@sBv@_C\\cALc@",
                                path: [
                                    {
                                        lat: 40.787690000000005,
                                        lng: -73.97501000000001
                                    },
                                    {
                                        lat: 40.786500000000004,
                                        lng: -73.97219000000001
                                    },
                                    { lat: 40.786030000000004, lng: -73.97109 },
                                    { lat: 40.785790000000006, lng: -73.97051 },
                                    { lat: 40.78551, lng: -73.96987 },
                                    { lat: 40.785360000000004, lng: -73.96953 },
                                    { lat: 40.78529, lng: -73.96935 }
                                ],
                                lat_lngs: [
                                    {
                                        lat: 40.787690000000005,
                                        lng: -73.97501000000001
                                    },
                                    {
                                        lat: 40.786500000000004,
                                        lng: -73.97219000000001
                                    },
                                    { lat: 40.786030000000004, lng: -73.97109 },
                                    { lat: 40.785790000000006, lng: -73.97051 },
                                    { lat: 40.78551, lng: -73.96987 },
                                    { lat: 40.785360000000004, lng: -73.96953 },
                                    { lat: 40.78529, lng: -73.96935 }
                                ],
                                instructions: "Turn <b>right</b> at the 1st cross street onto <b>W 86th St</b>",
                                start_point: {
                                    lat: 40.7876872,
                                    lng: -73.97501349999999
                                },
                                end_point: {
                                    lat: 40.7852883,
                                    lng: -73.96934999999996
                                }
                            },
                            {
                                distance: { text: "0.6 mi", value: 920 },
                                duration: { text: "2 mins", value: 145 },
                                end_location: {
                                    lat: 40.7802241,
                                    lng: -73.96137599999997
                                },
                                polyline: {
                                    points: "a{|wFlcnbMNi@BKBKBMBMBKBIBK@KBMDWN_ABKBODMDMBKDKDKDKDIDIRa@Xm@JSDGDKDIBIHWFSBG@CFQFQJc@b@yBh@qCHa@DSBKBGFSDMDMDODIDKFKDIFGFGDGHEFEFEFCFCHCLC\\Gv@OVITIJEJGVOJKFIFIFIFIPYPYTa@NUPUVWPOh@e@LKNOJMfAkA"
                                },
                                start_location: {
                                    lat: 40.7852883,
                                    lng: -73.96934999999996
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "a{|wFlcnbMNi@BKBKBMBMBKBIBK@KBMDWN_ABKBODMDMBKDKDKDKDIDIRa@Xm@JSDGDKDIBIHWFSBG@CFQFQJc@b@yBh@qCHa@DSBKBGFSDMDMDODIDKFKDIFGFGDGHEFEFEFCFCHCLC\\Gv@OVITIJEJGVOJKFIFIFIFIPYPYTa@NUPUVWPOh@e@LKNOJMfAkA",
                                path: [
                                    { lat: 40.78529, lng: -73.96935 },
                                    {
                                        lat: 40.785210000000006,
                                        lng: -73.96914000000001
                                    },
                                    { lat: 40.78519, lng: -73.96908 },
                                    { lat: 40.78517, lng: -73.96902 },
                                    { lat: 40.78515, lng: -73.96895 },
                                    { lat: 40.78513, lng: -73.96888000000001 },
                                    { lat: 40.78511, lng: -73.96882000000001 },
                                    { lat: 40.785090000000004, lng: -73.96877 },
                                    { lat: 40.785070000000005, lng: -73.96871 },
                                    { lat: 40.78506, lng: -73.96865000000001 },
                                    { lat: 40.78504, lng: -73.96858 },
                                    {
                                        lat: 40.78501000000001,
                                        lng: -73.96846000000001
                                    },
                                    { lat: 40.78493, lng: -73.96814 },
                                    { lat: 40.78491, lng: -73.96808 },
                                    { lat: 40.784890000000004, lng: -73.968 },
                                    { lat: 40.78486, lng: -73.96793000000001 },
                                    { lat: 40.78483000000001, lng: -73.96786 },
                                    { lat: 40.78481, lng: -73.96780000000001 },
                                    { lat: 40.784780000000005, lng: -73.96774 },
                                    { lat: 40.78475, lng: -73.96768 },
                                    { lat: 40.78472, lng: -73.96762000000001 },
                                    {
                                        lat: 40.784690000000005,
                                        lng: -73.96757000000001
                                    },
                                    { lat: 40.78466, lng: -73.96752000000001 },
                                    {
                                        lat: 40.784560000000006,
                                        lng: -73.96735000000001
                                    },
                                    { lat: 40.78443, lng: -73.96712000000001 },
                                    { lat: 40.78437, lng: -73.96702 },
                                    { lat: 40.78434, lng: -73.96698 },
                                    { lat: 40.784310000000005, lng: -73.96692 },
                                    { lat: 40.78428, lng: -73.96687 },
                                    { lat: 40.78426, lng: -73.96682000000001 },
                                    { lat: 40.78421, lng: -73.9667 },
                                    { lat: 40.78417, lng: -73.9666 },
                                    { lat: 40.784150000000004, lng: -73.96656 },
                                    { lat: 40.78414, lng: -73.96654000000001 },
                                    { lat: 40.7841, lng: -73.96645000000001 },
                                    {
                                        lat: 40.784060000000004,
                                        lng: -73.96636000000001
                                    },
                                    {
                                        lat: 40.784000000000006,
                                        lng: -73.96618000000001
                                    },
                                    { lat: 40.783820000000006, lng: -73.96557 },
                                    { lat: 40.78361, lng: -73.96484000000001 },
                                    { lat: 40.78356, lng: -73.96467000000001 },
                                    {
                                        lat: 40.783530000000006,
                                        lng: -73.96457000000001
                                    },
                                    { lat: 40.78351000000001, lng: -73.96451 },
                                    { lat: 40.78349, lng: -73.96447 },
                                    { lat: 40.78345, lng: -73.96437 },
                                    {
                                        lat: 40.78342000000001,
                                        lng: -73.96430000000001
                                    },
                                    { lat: 40.783390000000004, lng: -73.96423 },
                                    { lat: 40.78336, lng: -73.96415 },
                                    { lat: 40.78333000000001, lng: -73.9641 },
                                    {
                                        lat: 40.783300000000004,
                                        lng: -73.96404000000001
                                    },
                                    { lat: 40.783260000000006, lng: -73.96398 },
                                    { lat: 40.78323, lng: -73.96393 },
                                    { lat: 40.783190000000005, lng: -73.96389 },
                                    {
                                        lat: 40.783150000000006,
                                        lng: -73.96385000000001
                                    },
                                    {
                                        lat: 40.783120000000004,
                                        lng: -73.96381000000001
                                    },
                                    { lat: 40.78307, lng: -73.96378 },
                                    { lat: 40.783030000000004, lng: -73.96375 },
                                    {
                                        lat: 40.782990000000005,
                                        lng: -73.96372000000001
                                    },
                                    { lat: 40.78295000000001, lng: -73.9637 },
                                    { lat: 40.78291, lng: -73.96368000000001 },
                                    { lat: 40.78286000000001, lng: -73.96366 },
                                    {
                                        lat: 40.782790000000006,
                                        lng: -73.96364000000001
                                    },
                                    { lat: 40.78264, lng: -73.9636 },
                                    { lat: 40.782360000000004, lng: -73.96352 },
                                    { lat: 40.78224, lng: -73.96347 },
                                    { lat: 40.78213, lng: -73.96342 },
                                    { lat: 40.782070000000004, lng: -73.96339 },
                                    { lat: 40.78201000000001, lng: -73.96335 },
                                    {
                                        lat: 40.781890000000004,
                                        lng: -73.96327000000001
                                    },
                                    { lat: 40.78183000000001, lng: -73.96321 },
                                    { lat: 40.78179, lng: -73.96316 },
                                    { lat: 40.78175, lng: -73.96311 },
                                    {
                                        lat: 40.781710000000004,
                                        lng: -73.96306000000001
                                    },
                                    {
                                        lat: 40.781670000000005,
                                        lng: -73.96301000000001
                                    },
                                    {
                                        lat: 40.781580000000005,
                                        lng: -73.96288000000001
                                    },
                                    { lat: 40.781490000000005, lng: -73.96275 },
                                    { lat: 40.781380000000006, lng: -73.96258 },
                                    { lat: 40.7813, lng: -73.96247000000001 },
                                    { lat: 40.78121, lng: -73.96236 },
                                    {
                                        lat: 40.781090000000006,
                                        lng: -73.96224000000001
                                    },
                                    {
                                        lat: 40.781000000000006,
                                        lng: -73.96216000000001
                                    },
                                    { lat: 40.78079, lng: -73.96197000000001 },
                                    { lat: 40.78072, lng: -73.96191 },
                                    { lat: 40.780640000000005, lng: -73.96183 },
                                    { lat: 40.78058, lng: -73.96176000000001 },
                                    { lat: 40.78022, lng: -73.96138 }
                                ],
                                lat_lngs: [
                                    { lat: 40.78529, lng: -73.96935 },
                                    {
                                        lat: 40.785210000000006,
                                        lng: -73.96914000000001
                                    },
                                    { lat: 40.78519, lng: -73.96908 },
                                    { lat: 40.78517, lng: -73.96902 },
                                    { lat: 40.78515, lng: -73.96895 },
                                    { lat: 40.78513, lng: -73.96888000000001 },
                                    { lat: 40.78511, lng: -73.96882000000001 },
                                    { lat: 40.785090000000004, lng: -73.96877 },
                                    { lat: 40.785070000000005, lng: -73.96871 },
                                    { lat: 40.78506, lng: -73.96865000000001 },
                                    { lat: 40.78504, lng: -73.96858 },
                                    {
                                        lat: 40.78501000000001,
                                        lng: -73.96846000000001
                                    },
                                    { lat: 40.78493, lng: -73.96814 },
                                    { lat: 40.78491, lng: -73.96808 },
                                    { lat: 40.784890000000004, lng: -73.968 },
                                    { lat: 40.78486, lng: -73.96793000000001 },
                                    { lat: 40.78483000000001, lng: -73.96786 },
                                    { lat: 40.78481, lng: -73.96780000000001 },
                                    { lat: 40.784780000000005, lng: -73.96774 },
                                    { lat: 40.78475, lng: -73.96768 },
                                    { lat: 40.78472, lng: -73.96762000000001 },
                                    {
                                        lat: 40.784690000000005,
                                        lng: -73.96757000000001
                                    },
                                    { lat: 40.78466, lng: -73.96752000000001 },
                                    {
                                        lat: 40.784560000000006,
                                        lng: -73.96735000000001
                                    },
                                    { lat: 40.78443, lng: -73.96712000000001 },
                                    { lat: 40.78437, lng: -73.96702 },
                                    { lat: 40.78434, lng: -73.96698 },
                                    { lat: 40.784310000000005, lng: -73.96692 },
                                    { lat: 40.78428, lng: -73.96687 },
                                    { lat: 40.78426, lng: -73.96682000000001 },
                                    { lat: 40.78421, lng: -73.9667 },
                                    { lat: 40.78417, lng: -73.9666 },
                                    { lat: 40.784150000000004, lng: -73.96656 },
                                    { lat: 40.78414, lng: -73.96654000000001 },
                                    { lat: 40.7841, lng: -73.96645000000001 },
                                    {
                                        lat: 40.784060000000004,
                                        lng: -73.96636000000001
                                    },
                                    {
                                        lat: 40.784000000000006,
                                        lng: -73.96618000000001
                                    },
                                    { lat: 40.783820000000006, lng: -73.96557 },
                                    { lat: 40.78361, lng: -73.96484000000001 },
                                    { lat: 40.78356, lng: -73.96467000000001 },
                                    {
                                        lat: 40.783530000000006,
                                        lng: -73.96457000000001
                                    },
                                    { lat: 40.78351000000001, lng: -73.96451 },
                                    { lat: 40.78349, lng: -73.96447 },
                                    { lat: 40.78345, lng: -73.96437 },
                                    {
                                        lat: 40.78342000000001,
                                        lng: -73.96430000000001
                                    },
                                    { lat: 40.783390000000004, lng: -73.96423 },
                                    { lat: 40.78336, lng: -73.96415 },
                                    { lat: 40.78333000000001, lng: -73.9641 },
                                    {
                                        lat: 40.783300000000004,
                                        lng: -73.96404000000001
                                    },
                                    { lat: 40.783260000000006, lng: -73.96398 },
                                    { lat: 40.78323, lng: -73.96393 },
                                    { lat: 40.783190000000005, lng: -73.96389 },
                                    {
                                        lat: 40.783150000000006,
                                        lng: -73.96385000000001
                                    },
                                    {
                                        lat: 40.783120000000004,
                                        lng: -73.96381000000001
                                    },
                                    { lat: 40.78307, lng: -73.96378 },
                                    { lat: 40.783030000000004, lng: -73.96375 },
                                    {
                                        lat: 40.782990000000005,
                                        lng: -73.96372000000001
                                    },
                                    { lat: 40.78295000000001, lng: -73.9637 },
                                    { lat: 40.78291, lng: -73.96368000000001 },
                                    { lat: 40.78286000000001, lng: -73.96366 },
                                    {
                                        lat: 40.782790000000006,
                                        lng: -73.96364000000001
                                    },
                                    { lat: 40.78264, lng: -73.9636 },
                                    { lat: 40.782360000000004, lng: -73.96352 },
                                    { lat: 40.78224, lng: -73.96347 },
                                    { lat: 40.78213, lng: -73.96342 },
                                    { lat: 40.782070000000004, lng: -73.96339 },
                                    { lat: 40.78201000000001, lng: -73.96335 },
                                    {
                                        lat: 40.781890000000004,
                                        lng: -73.96327000000001
                                    },
                                    { lat: 40.78183000000001, lng: -73.96321 },
                                    { lat: 40.78179, lng: -73.96316 },
                                    { lat: 40.78175, lng: -73.96311 },
                                    {
                                        lat: 40.781710000000004,
                                        lng: -73.96306000000001
                                    },
                                    {
                                        lat: 40.781670000000005,
                                        lng: -73.96301000000001
                                    },
                                    {
                                        lat: 40.781580000000005,
                                        lng: -73.96288000000001
                                    },
                                    { lat: 40.781490000000005, lng: -73.96275 },
                                    { lat: 40.781380000000006, lng: -73.96258 },
                                    { lat: 40.7813, lng: -73.96247000000001 },
                                    { lat: 40.78121, lng: -73.96236 },
                                    {
                                        lat: 40.781090000000006,
                                        lng: -73.96224000000001
                                    },
                                    {
                                        lat: 40.781000000000006,
                                        lng: -73.96216000000001
                                    },
                                    { lat: 40.78079, lng: -73.96197000000001 },
                                    { lat: 40.78072, lng: -73.96191 },
                                    { lat: 40.780640000000005, lng: -73.96183 },
                                    { lat: 40.78058, lng: -73.96176000000001 },
                                    { lat: 40.78022, lng: -73.96138 }
                                ],
                                instructions: "Continue onto <b>85th St Transverse</b>",
                                maneuver: "",
                                start_point: {
                                    lat: 40.7852883,
                                    lng: -73.96934999999996
                                },
                                end_point: {
                                    lat: 40.7802241,
                                    lng: -73.96137599999997
                                }
                            },
                            {
                                distance: { text: "0.1 mi", value: 161 },
                                duration: { text: "1 min", value: 55 },
                                end_location: {
                                    lat: 40.7789593,
                                    lng: -73.96230379999997
                                },
                                maneuver: "turn-right",
                                polyline: {
                                    points: "k{{wFrqlbMtA|@f@\\fBjATN"
                                },
                                start_location: {
                                    lat: 40.7802241,
                                    lng: -73.96137599999997
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "k{{wFrqlbMtA|@f@\\fBjATN",
                                path: [
                                    { lat: 40.78022, lng: -73.96138 },
                                    { lat: 40.779790000000006, lng: -73.96169 },
                                    {
                                        lat: 40.779590000000006,
                                        lng: -73.96184000000001
                                    },
                                    { lat: 40.779070000000004, lng: -73.96222 },
                                    { lat: 40.778960000000005, lng: -73.9623 }
                                ],
                                lat_lngs: [
                                    { lat: 40.78022, lng: -73.96138 },
                                    { lat: 40.779790000000006, lng: -73.96169 },
                                    {
                                        lat: 40.779590000000006,
                                        lng: -73.96184000000001
                                    },
                                    { lat: 40.779070000000004, lng: -73.96222 },
                                    { lat: 40.778960000000005, lng: -73.9623 }
                                ],
                                instructions: "Turn <b>right</b> onto <b>5th Ave</b>/<b>Museum Mile</b>",
                                start_point: {
                                    lat: 40.7802241,
                                    lng: -73.96137599999997
                                },
                                end_point: {
                                    lat: 40.7789593,
                                    lng: -73.96230379999997
                                }
                            },
                            {
                                distance: { text: "0.1 mi", value: 168 },
                                duration: { text: "1 min", value: 67 },
                                end_location: {
                                    lat: 40.77822390000001,
                                    lng: -73.96056429999999
                                },
                                maneuver: "turn-left",
                                polyline: { points: "os{wFjwlbMzB_HJ_@J[" },
                                start_location: {
                                    lat: 40.7789593,
                                    lng: -73.96230379999997
                                },
                                travel_mode: "DRIVING",
                                encoded_lat_lngs: "os{wFjwlbMzB_HJ_@J[",
                                path: [
                                    { lat: 40.778960000000005, lng: -73.9623 },
                                    { lat: 40.77834, lng: -73.96086000000001 },
                                    { lat: 40.77828, lng: -73.9607 },
                                    { lat: 40.778220000000005, lng: -73.96056 }
                                ],
                                lat_lngs: [
                                    { lat: 40.778960000000005, lng: -73.9623 },
                                    { lat: 40.77834, lng: -73.96086000000001 },
                                    { lat: 40.77828, lng: -73.9607 },
                                    { lat: 40.778220000000005, lng: -73.96056 }
                                ],
                                instructions: 'Turn <b>left</b> onto <b>E 82nd St</b><div style="font-size:0.9em">Destination will be on the right</div>',
                                start_point: {
                                    lat: 40.7789593,
                                    lng: -73.96230379999997
                                },
                                end_point: {
                                    lat: 40.77822390000001,
                                    lng: -73.96056429999999
                                }
                            }
                        ],
                        traffic_speed_entry: [],
                        via_waypoint: [],
                        via_waypoints: []
                    }
                ],
                overview_polyline: "c_}wFjznbMsEtNiCgBjIoWrC{Ij@_CZqBRw@To@x@cB\\q@X}@\\kA|AaITu@Vs@\\e@^Yf@OtAWl@SVMb@[^g@hAkBh@m@z@u@pBuBzFvDrC{I",
                summary: "W 86th St and 85th St Transverse",
                warnings: [],
                waypoint_order: [],
                overview_path: [
                    { lat: 40.785940000000004, lng: -73.97302 },
                    { lat: 40.787000000000006, lng: -73.97553 },
                    { lat: 40.787690000000005, lng: -73.97501000000001 },
                    { lat: 40.786030000000004, lng: -73.97109 },
                    { lat: 40.78529, lng: -73.96935 },
                    { lat: 40.785070000000005, lng: -73.96871 },
                    { lat: 40.78493, lng: -73.96814 },
                    { lat: 40.78483000000001, lng: -73.96786 },
                    { lat: 40.78472, lng: -73.96762000000001 },
                    { lat: 40.78443, lng: -73.96712000000001 },
                    { lat: 40.78428, lng: -73.96687 },
                    { lat: 40.784150000000004, lng: -73.96656 },
                    { lat: 40.784000000000006, lng: -73.96618000000001 },
                    { lat: 40.783530000000006, lng: -73.96457000000001 },
                    { lat: 40.78342000000001, lng: -73.96430000000001 },
                    { lat: 40.783300000000004, lng: -73.96404000000001 },
                    { lat: 40.783150000000006, lng: -73.96385000000001 },
                    { lat: 40.782990000000005, lng: -73.96372000000001 },
                    { lat: 40.782790000000006, lng: -73.96364000000001 },
                    { lat: 40.782360000000004, lng: -73.96352 },
                    { lat: 40.78213, lng: -73.96342 },
                    { lat: 40.78201000000001, lng: -73.96335 },
                    { lat: 40.78183000000001, lng: -73.96321 },
                    { lat: 40.781670000000005, lng: -73.96301000000001 },
                    { lat: 40.7813, lng: -73.96247000000001 },
                    { lat: 40.781090000000006, lng: -73.96224000000001 },
                    { lat: 40.78079, lng: -73.96197000000001 },
                    { lat: 40.78022, lng: -73.96138 },
                    { lat: 40.778960000000005, lng: -73.9623 },
                    { lat: 40.778220000000005, lng: -73.96056 }
                ]
            }
        ],
        status: "OK",
        request: {
            origin: { lat: 40.78583811, lng: -73.97309302999997 },
            destination: { lat: 40.77816917, lng: -73.96060467000001 },
            travelMode: "DRIVING"
        }
    }
];

class Controller extends CxController {
    onInit() {
        this.store.set("$page.directions", collection);
    }
}

export default (
    <cx>
        <PureContainer controller={Controller}>
            <Repeater
                controller={Controller}
                records-bind="$page.directions"
                cached
            >
                <DirectionsRenderer
                    directions-bind="$record"
                    options={{
                        preserveViewport: true
                    }}
                />
            </Repeater>
        </PureContainer>
    </cx>
);
