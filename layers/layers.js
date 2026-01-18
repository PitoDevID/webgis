var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKelurahan_1 = new ol.format.GeoJSON();
var features_BatasKelurahan_1 = format_BatasKelurahan_1.readFeatures(json_BatasKelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_1.addFeatures(features_BatasKelurahan_1);
var lyr_BatasKelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_1, 
                style: style_BatasKelurahan_1,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_1.png" /> Batas Kelurahan'
            });
var format_FasilitasUmum_2 = new ol.format.GeoJSON();
var features_FasilitasUmum_2 = format_FasilitasUmum_2.readFeatures(json_FasilitasUmum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_2.addFeatures(features_FasilitasUmum_2);
var lyr_FasilitasUmum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_2, 
                style: style_FasilitasUmum_2,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_2.png" /> Fasilitas Umum'
            });
var format_Pemukiman_3 = new ol.format.GeoJSON();
var features_Pemukiman_3 = format_Pemukiman_3.readFeatures(json_Pemukiman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_3.addFeatures(features_Pemukiman_3);
var lyr_Pemukiman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_3, 
                style: style_Pemukiman_3,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_3.png" /> Pemukiman'
            });
var format_BuildAI_4 = new ol.format.GeoJSON();
var features_BuildAI_4 = format_BuildAI_4.readFeatures(json_BuildAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildAI_4.addFeatures(features_BuildAI_4);
var lyr_BuildAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildAI_4, 
                style: style_BuildAI_4,
                popuplayertitle: 'Build AI',
                interactive: true,
                title: '<img src="styles/legend/BuildAI_4.png" /> Build AI'
            });
var format_jalanraya_5 = new ol.format.GeoJSON();
var features_jalanraya_5 = format_jalanraya_5.readFeatures(json_jalanraya_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanraya_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanraya_5.addFeatures(features_jalanraya_5);
var lyr_jalanraya_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanraya_5, 
                style: style_jalanraya_5,
                popuplayertitle: 'jalan raya',
                interactive: true,
                title: '<img src="styles/legend/jalanraya_5.png" /> jalan raya'
            });
var format_JalanGang_6 = new ol.format.GeoJSON();
var features_JalanGang_6 = format_JalanGang_6.readFeatures(json_JalanGang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_6.addFeatures(features_JalanGang_6);
var lyr_JalanGang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_6, 
                style: style_JalanGang_6,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_6.png" /> Jalan Gang'
            });
var format_JalanGangBuntu_7 = new ol.format.GeoJSON();
var features_JalanGangBuntu_7 = format_JalanGangBuntu_7.readFeatures(json_JalanGangBuntu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGangBuntu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGangBuntu_7.addFeatures(features_JalanGangBuntu_7);
var lyr_JalanGangBuntu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGangBuntu_7, 
                style: style_JalanGangBuntu_7,
                popuplayertitle: 'Jalan Gang Buntu',
                interactive: true,
                title: '<img src="styles/legend/JalanGangBuntu_7.png" /> Jalan Gang Buntu'
            });
var format_RelKereta_8 = new ol.format.GeoJSON();
var features_RelKereta_8 = format_RelKereta_8.readFeatures(json_RelKereta_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RelKereta_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RelKereta_8.addFeatures(features_RelKereta_8);
var lyr_RelKereta_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RelKereta_8, 
                style: style_RelKereta_8,
                popuplayertitle: 'Rel Kereta',
                interactive: true,
                title: '<img src="styles/legend/RelKereta_8.png" /> Rel Kereta'
            });
var format_JalanBiasa_9 = new ol.format.GeoJSON();
var features_JalanBiasa_9 = format_JalanBiasa_9.readFeatures(json_JalanBiasa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBiasa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBiasa_9.addFeatures(features_JalanBiasa_9);
var lyr_JalanBiasa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanBiasa_9, 
                style: style_JalanBiasa_9,
                popuplayertitle: 'Jalan Biasa',
                interactive: true,
                title: '<img src="styles/legend/JalanBiasa_9.png" /> Jalan Biasa'
            });
var format_Point_10 = new ol.format.GeoJSON();
var features_Point_10 = format_Point_10.readFeatures(json_Point_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_10.addFeatures(features_Point_10);
var lyr_Point_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_10, 
                style: style_Point_10,
                popuplayertitle: 'Point',
                interactive: true,
                title: '<img src="styles/legend/Point_10.png" /> Point'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasKelurahan_1.setVisible(true);lyr_FasilitasUmum_2.setVisible(true);lyr_Pemukiman_3.setVisible(true);lyr_BuildAI_4.setVisible(true);lyr_jalanraya_5.setVisible(true);lyr_JalanGang_6.setVisible(true);lyr_JalanGangBuntu_7.setVisible(true);lyr_RelKereta_8.setVisible(true);lyr_JalanBiasa_9.setVisible(true);lyr_Point_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasKelurahan_1,lyr_FasilitasUmum_2,lyr_Pemukiman_3,lyr_BuildAI_4,lyr_jalanraya_5,lyr_JalanGang_6,lyr_JalanGangBuntu_7,lyr_RelKereta_8,lyr_JalanBiasa_9,lyr_Point_10];
lyr_BatasKelurahan_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas M2': 'luas M2', 'luas HA': 'luas HA', });
lyr_FasilitasUmum_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas HA': 'luas HA', 'luas M2': 'luas M2', });
lyr_Pemukiman_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas M2': 'luas M2', 'luas HA': 'luas HA', });
lyr_BuildAI_4.set('fieldAliases', {'FID': 'FID', });
lyr_jalanraya_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'PanjangKM': 'PanjangKM', 'PanjangM': 'PanjangM', });
lyr_JalanGang_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjangKM': 'panjangKM', 'panjangM': 'panjangM', });
lyr_JalanGangBuntu_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjangKM': 'panjangKM', 'panjangM': 'panjangM', });
lyr_RelKereta_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Panjang': 'Panjang', });
lyr_JalanBiasa_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjangKM': 'panjangKM', 'panjangM': 'panjangM', });
lyr_Point_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BatasKelurahan_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas M2': 'TextEdit', 'luas HA': 'TextEdit', });
lyr_FasilitasUmum_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas HA': '', 'luas M2': '', });
lyr_Pemukiman_3.set('fieldImages', {'id': '', 'nama': '', 'luas M2': '', 'luas HA': '', });
lyr_BuildAI_4.set('fieldImages', {'FID': 'TextEdit', });
lyr_jalanraya_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'PanjangKM': '', 'PanjangM': '', });
lyr_JalanGang_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjangKM': '', 'panjangM': '', });
lyr_JalanGangBuntu_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjangKM': '', 'panjangM': '', });
lyr_RelKereta_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_JalanBiasa_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjangKM': '', 'panjangM': '', });
lyr_Point_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BatasKelurahan_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas M2': 'no label', 'luas HA': 'no label', });
lyr_FasilitasUmum_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas HA': 'no label', 'luas M2': 'no label', });
lyr_Pemukiman_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas M2': 'no label', 'luas HA': 'no label', });
lyr_BuildAI_4.set('fieldLabels', {'FID': 'no label', });
lyr_jalanraya_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'PanjangKM': 'no label', 'PanjangM': 'no label', });
lyr_JalanGang_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjangKM': 'no label', 'panjangM': 'no label', });
lyr_JalanGangBuntu_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjangKM': 'no label', 'panjangM': 'no label', });
lyr_RelKereta_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'Panjang': 'no label', });
lyr_JalanBiasa_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjangKM': 'no label', 'panjangM': 'no label', });
lyr_Point_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Point_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});