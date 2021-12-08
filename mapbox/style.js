
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "building_1": {
            "type": "geojson",
            "data": json_building_1
        }
                    ,
        "building_2": {
            "type": "geojson",
            "data": json_building_2
        }
                    ,
        "building_3": {
            "type": "geojson",
            "data": json_building_3
        }
                    ,
        "building_4": {
            "type": "geojson",
            "data": json_building_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_building_1_0",
            "type": "circle",
            "source": "building_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_building_2_0",
            "type": "fill",
            "source": "building_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e8718d'}
        }
,
        {
            "id": "lyr_building_3_0",
            "type": "circle",
            "source": "building_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_building_4_0",
            "type": "fill",
            "source": "building_4",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#d5b43c'}
        }
],
}