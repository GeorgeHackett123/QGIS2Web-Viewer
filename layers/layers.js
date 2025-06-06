var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_almar_layer_PolygonZ_1 = new ol.format.GeoJSON();
var features_almar_layer_PolygonZ_1 = format_almar_layer_PolygonZ_1.readFeatures(json_almar_layer_PolygonZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almar_layer_PolygonZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almar_layer_PolygonZ_1.addFeatures(features_almar_layer_PolygonZ_1);
var lyr_almar_layer_PolygonZ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almar_layer_PolygonZ_1, 
                style: style_almar_layer_PolygonZ_1,
                popuplayertitle: 'almar_layer_PolygonZ',
                interactive: true,
                title: '<img src="styles/legend/almar_layer_PolygonZ_1.png" /> almar_layer_PolygonZ'
            });
var format_almar_layer_LineStringZ_2 = new ol.format.GeoJSON();
var features_almar_layer_LineStringZ_2 = format_almar_layer_LineStringZ_2.readFeatures(json_almar_layer_LineStringZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almar_layer_LineStringZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almar_layer_LineStringZ_2.addFeatures(features_almar_layer_LineStringZ_2);
var lyr_almar_layer_LineStringZ_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almar_layer_LineStringZ_2, 
                style: style_almar_layer_LineStringZ_2,
                popuplayertitle: 'almar_layer_LineStringZ',
                interactive: true,
                title: '<img src="styles/legend/almar_layer_LineStringZ_2.png" /> almar_layer_LineStringZ'
            });
var format_camera_points_final2_3 = new ol.format.GeoJSON();
var features_camera_points_final2_3 = format_camera_points_final2_3.readFeatures(json_camera_points_final2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camera_points_final2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camera_points_final2_3.addFeatures(features_camera_points_final2_3);
var lyr_camera_points_final2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camera_points_final2_3, 
                style: style_camera_points_final2_3,
                popuplayertitle: 'camera_points_final2',
                interactive: true,
                title: '<img src="styles/legend/camera_points_final2_3.png" /> camera_points_final2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_almar_layer_PolygonZ_1.setVisible(true);lyr_almar_layer_LineStringZ_2.setVisible(true);lyr_camera_points_final2_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_almar_layer_PolygonZ_1,lyr_almar_layer_LineStringZ_2,lyr_camera_points_final2_3];
lyr_almar_layer_PolygonZ_1.set('fieldAliases', {'ELEVATION': 'ELEVATION', });
lyr_almar_layer_LineStringZ_2.set('fieldAliases', {'ELEVATION': 'ELEVATION', });
lyr_camera_points_final2_3.set('fieldAliases', {'Label': 'Label', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Roll': 'Roll', 'Pitch': 'Pitch', 'Yaw': 'Yaw', });
lyr_almar_layer_PolygonZ_1.set('fieldImages', {'ELEVATION': 'TextEdit', });
lyr_almar_layer_LineStringZ_2.set('fieldImages', {'ELEVATION': '', });
lyr_camera_points_final2_3.set('fieldImages', {'Label': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Roll': 'TextEdit', 'Pitch': 'TextEdit', 'Yaw': 'TextEdit', });
lyr_almar_layer_PolygonZ_1.set('fieldLabels', {'ELEVATION': 'inline label - always visible', });
lyr_almar_layer_LineStringZ_2.set('fieldLabels', {'ELEVATION': 'no label', });
lyr_camera_points_final2_3.set('fieldLabels', {'Label': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Z': 'inline label - visible with data', 'Roll': 'inline label - visible with data', 'Pitch': 'inline label - visible with data', 'Yaw': 'inline label - visible with data', });
lyr_camera_points_final2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});