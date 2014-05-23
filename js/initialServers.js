/*
 *     Copyright (c) 2013 CoNWeT Lab., Universidad Politécnica de Madrid
 *     Copyright (c) 2013 IGN - Instituto Geográfico Nacional
 *     Centro Nacional de Información Geográfica
 *     http://www.ign.es/
 *
 *     This file is part of the GeoWidgets Project,
 *
 *     http://conwet.fi.upm.es/geowidgets
 *
 *     Licensed under the GNU General Public License, Version 3.0 (the 
 *     "License"); you may not use this file except in compliance with the 
 *     License.
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     under the License is distributed in the hope that it will be useful, 
 *     but on an "AS IS" BASIS, WITHOUT ANY WARRANTY OR CONDITION,
 *     either express or implied; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *  
 *     See the GNU General Public License for specific language governing
 *     permissions and limitations under the License.
 *
 *     <http://www.gnu.org/licenses/gpl.txt>.
 *
 */

var initialServers = [
    {
        "type"    : "WMS",
        "name"    : "WMS Services",
        "services": [            
            {'name': 'Catastro', 'url': 'http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx'},
            {'name': 'Ortofotos PNOA máxima actualidad', 'url': 'http://www.ign.es/wms-inspire/pnoa-ma'},
            {'name': 'CartoCiudad', 'url': 'http://www.cartociudad.es/wms/CARTOCIUDAD/CARTOCIUDAD'},            
            {'name': 'Cartografía Raster', 'url': 'http://www.ign.es/wms-inspire/mapa-raster'},
            {'name': 'CORINE- Ocupación de suelo de España', 'url': 'http://www.ign.es/wms-inspire/corine'},
            {'name': 'Mapa Base de España', 'url': 'http://www.ign.es/wms-inspire/ign-base'},
            {'name': 'Mapa de Madrid de 1902 de Facundo Cañada', 'url': 'http://idehistoricamadrid.org/USIG/services/Mapas_Tematicos_WMS_Carto/mapserver/WMSServer'},
            {'name': 'Modelos Digitales del Terreno de España', 'url': 'http://www.ign.es/wms-inspire/mdt'},
            {'name': 'Radicación solar global en España', 'url': 'http://adrase.ceta-ciemat.es/geoserver/Portalgeosolar/wms'},
            {'name': 'Redes geodésicas', 'url': 'http://www.ign.es/wms-inspire/redes-geodesicas'},
            {'name': 'SIOSE- Ocupación de suelo de España', 'url': 'http://www.ign.es/wms-inspire/siose'}
        ]
    },
    {
        "type"    : "WMSC",
        "name"    : "WMSC Services",
        "services": [
            {'name': 'CartoCiudad', 'url': 'http://www.cartociudad.es/wms-c/CARTOCIUDAD/CARTOCIUDAD'},
            {'name': 'Cartografía raster', 'url': 'http://www.ign.es/wms-c/mapa-raster'},
            {'name': 'Mapa base de España', 'url': 'http://www.ign.es/wms-c/ign-base'},
            {'name': 'MPNOA máxima actualidad', 'url': 'http://www.ign.es/wms-c/PNOA/PNOA'},
            {'name': 'Callejero Digital de Andalucía', 'url': 'http://www.juntadeandalucia.es/servicios/mapas/callejero/wms-tiled'},
            {'name': 'Ortofotografía 2010-2011', 'url': 'http://www.ideandalucia.es/geowebcache/service/wms'},
            {'name': 'Municipio - Zaragoza | Mapa Base (Ayuntamiento de Zaragoza)', 'url': 'http://idezar.zaragoza.es/IDEZar_Base_Tiled/WMSTileCache'}
        ]
    },
   {
        "type"    : "WMTS",
        "name"    : "WMTS Services",
        "services": [
				{'name': 'CartoCiudad WMTS', 'url': 'http://www.cartociudad.es/wmts/CARTOCIUDAD/CARTOCIUDAD'}
        ]
    },
    {
        "type"    : "RSS",
        "name"    : "GeosRSS Services",
        "services": [
            {'name': 'Reuters: World News', 'url': 'http://ws.geonames.org/rssToGeoRSS?feedUrl=http://feeds.reuters.com/reuters/worldNews'},
            {'name': 'Marca.com', 'url': 'http://ws.geonames.org/rssToGeoRSS?feedUrl=http://marca.feedsportal.com/rss/portada.xml'},
            {'name': 'El Mundo', 'url': 'http://ws.geonames.org/rssToGeoRSS?feedUrl=http://elmundo.feedsportal.com/elmundo/rss/portada.xml'},
            {'name': '20 Minutos', 'url': 'http://ws.geonames.org/rssToGeoRSS?feedUrl=http://20minutos.feedsportal.com/c/32489/f/478284/index.rss'}
        ]
    }/*,
    {
        "type"    : "CSW",
        "name"    : "CSW Services",
        "service_types": ["CSW"],
        "services": [
            {'name': 'IGN CSW Inspire', 'url': 'http://www.ign.es/csw-inspire/srv/es/csw', 'type': 'CSW'},
         ]
    }*/
];
