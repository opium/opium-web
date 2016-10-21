import { List, Map } from 'immutable';
import { entityFactory } from './Factory';
import Directory from './Directory';

const rawDirectory = {
  "type": "directory",
  "id": 1,
  "name": "",
  "pathname": "",
  "slug": "",
  "children": [
    {
      "type": "directory",
      "id": 2,
      "name": "Alps",
      "pathname": "Alps",
      "slug": "alps",
      "children": [

      ],
      "dtype": "directory",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/directories"
        }
      },
      "_embedded": {
        "directory_thumbnail": {
          "type": "file",
          "id": 5,
          "name": "2909_vallon_moy_res.jpg",
          "pathname": "Alps/2909_vallon_moy_res.jpg",
          "slug": "2909-vallon-moy-res-jpg",
          "exif": {
            "ColorSpace": "1",
            "Compression": "6",
            "DateTime": "2007:09:22 18:18:43",
            "ExifImageLength": "1732",
            "ExifImageWidth": "3000",
            "ExifOffset": "164",
            "JPEGInterchangeFormat": "302",
            "JPEGInterchangeFormatLength": "5732",
            "NativeDigest": "36864,40960,40961,37121,37122,40962,40963,37510,40964,36867,36868,33434,33437,34850,34852,34855,34856,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,0,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,23,24,25,26,27,28,30;36E1E303618CB1A3DA3EBDBB110F429F",
            "Orientation": "1",
            "PixelXDimension": "3000",
            "PixelYDimension": "1732",
            "ResolutionUnit": "2",
            "Software": "Adobe Photoshop CS2 Windows",
            "XResolution": "720000/10000",
            "YResolution": "720000/10000"
          },
          "dtype": "photo",
          "_links": {
            "self": {
              "href": "http://demo.opium.sitioweb.fr/v1/files/2909-vallon-moy-res-jpg"
            },
            "original": {
              "href": "http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg"
            }
          },
          "thumbnails": {
            "banner": "http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-200",
            "smallSquare": "http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/50-50",
            "image": "http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-auto"
          }
        }
      }
    },
    {
      "type": "directory",
      "id": 3,
      "name": "Pacific Ocean",
      "pathname": "Pacific Ocean",
      "slug": "pacific-ocean",
      "children": [

      ],
      "dtype": "directory",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/directories"
        }
      },
      "_embedded": {
        "directory_thumbnail": {
          "type": "file",
          "id": 15,
          "name": "2010_mavericks_competition_edit1.jpg",
          "pathname": "Pacific Ocean/2010_mavericks_competition_edit1.jpg",
          "slug": "2010-mavericks-competition-edit1-jpg",
          "exif": {
            "Artist": "SHAL-JACOBOVITZ                     ",
            "ColorSpace": "1",
            "Compression": "6",
            "Contrast": "0",
            "CustomRendered": "0",
            "DateTime": "2010:02:19 15:10:40",
            "DateTimeDigitized": "2010:02:13 08:56:09",
            "DateTimeOriginal": "2010:02:13 08:56:09",
            "DigitalZoomRatio": "1/1",
            "ExifImageLength": "2380",
            "ExifImageWidth": "3600",
            "ExifOffset": "276",
            "ExposureBiasValue": "0/1",
            "ExposureMode": "0",
            "ExposureProgram": "3",
            "ExposureTime": "1/6400",
            "Flash": "0",
            "FNumber": "14/5",
            "FocalLength": "400/1",
            "FocalLengthIn35mmFilm": "400",
            "GainControl": "0",
            "ISOSpeedRatings": "250",
            "JPEGInterchangeFormat": "882",
            "JPEGInterchangeFormatLength": "5355",
            "LightSource": "0",
            "Make": "NIKON CORPORATION",
            "MaxApertureValue": "3/1",
            "MeteringMode": "5",
            "Model": "NIKON D3",
            "Orientation": "1",
            "PhotometricInterpretation": "32803",
            "ResolutionUnit": "2",
            "Saturation": "0",
            "SceneCaptureType": "0",
            "SensingMethod": "2",
            "Sharpness": "0",
            "Software": "Adobe Photoshop CS3 Windows",
            "SubjectDistanceRange": "0",
            "SubSecTime": "11",
            "SubSecTimeDigitized": "11",
            "SubSecTimeOriginal": "11",
            "UserComment": "65, 83, 67, 73, 73, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32",
            "WhiteBalance": "0",
            "XResolution": "720000/10000",
            "YResolution": "720000/10000"
          },
          "dtype": "photo",
          "_links": {
            "self": {
              "href": "http://demo.opium.sitioweb.fr/v1/files/2010-mavericks-competition-edit1-jpg"
            },
            "original": {
              "href": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg"
            }
          },
          "thumbnails": {
            "banner": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/1170-200",
            "smallSquare": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/50-50",
            "image": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/1170-auto"
          }
        }
      }
    },
    {
      "type": "directory",
      "id": 4,
      "name": "Venezia",
      "pathname": "Venezia",
      "slug": "venezia",
      "children": [

      ],
      "dtype": "directory",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/directories"
        }
      },
      "_embedded": {
        "directory_thumbnail": {
          "type": "file",
          "id": 29,
          "name": "Basilica_di_San_Giorgio_Maggiore_a_Venezia.jpg",
          "pathname": "Venezia/Basilica_di_San_Giorgio_Maggiore_a_Venezia.jpg",
          "slug": "basilica-di-san-giorgio-maggiore-a-venezia-jpg",
          "exif": {
            "Artist": "Wolfgang Moroder                    ",
            "CFAPattern": "0, 2, 0, 2, 0, 1, 1, 2",
            "ColorSpace": "1",
            "ComponentsConfiguration": "1, 2, 3, 0",
            "Compression": "6",
            "Contrast": "0",
            "Copyright": "lusenberg.com                                         ",
            "CustomRendered": "0",
            "DateTime": "2013:05:22 11:42:08",
            "DateTimeDigitized": "2013-03-31T16:58+02:00",
            "DateTimeOriginal": "2013-03-31T16:58+02:00",
            "DigitalZoomRatio": "1/1",
            "ExifImageLength": "3729",
            "ExifImageWidth": "5923",
            "ExifOffset": "424",
            "ExifVersion": "0230",
            "ExposureBiasValue": "-4/6",
            "ExposureMode": "0",
            "ExposureProgram": "3",
            "ExposureTime": "1/400",
            "FileSource": "3",
            "Fired": "False",
            "Flash": "16",
            "FlashpixVersion": "0100",
            "FNumber": "9/1",
            "FocalLength": "24/1",
            "FocalLengthIn35mmFilm": "24",
            "Function": "False",
            "GainControl": "0",
            "GPSInfo": "1028",
            "GPSVersionID": "2.3.0.0",
            "ISOSpeedRatings": "100",
            "JPEGInterchangeFormat": "1142",
            "JPEGInterchangeFormatLength": "4352",
            "LightSource": "0",
            "Make": "NIKON CORPORATION",
            "MaxApertureValue": "3/1",
            "MeteringMode": "5",
            "Mode": "2",
            "Model": "NIKON D800",
            "NativeDigest": "36864,40960,40961,37121,37122,40962,40963,37510,40964,36867,36868,33434,33437,34850,34852,34855,34856,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,0,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,23,24,25,26,27,28,30;7AD9151E996706F09E5B8BFEDD506FCA",
            "Orientation": "1",
            "PixelXDimension": "5923",
            "PixelYDimension": "3729",
            "RedEyeMode": "False",
            "ReferenceBlackWhite": "0/1, 255/1, 0/1, 255/1, 0/1, 255/1",
            "ResolutionUnit": "2",
            "Return": "0",
            "Saturation": "0",
            "SceneCaptureType": "0",
            "SceneType": "1",
            "SensingMethod": "2",
            "Sharpness": "0",
            "Software": "Adobe Photoshop Elements 5.0 Windows",
            "SubjectDistanceRange": "0",
            "SubSecTime": "50",
            "SubSecTimeDigitized": "50",
            "SubSecTimeOriginal": "50",
            "UserComment": "65, 83, 67, 73, 73, 0, 0, 0, 87, 111, 108, 102, 103, 97, 110, 103, 32, 77, 111, 114, 111, 100, 101, 114, 32, 32, 108, 117, 115, 101, 110, 98, 101, 114, 103, 46, 99, 111, 109, 32, 32, 32, 32, 32",
            "WhiteBalance": "0",
            "XResolution": "3000000/10000",
            "YCbCrPositioning": "1",
            "YResolution": "3000000/10000"
          },
          "dtype": "photo",
          "_links": {
            "self": {
              "href": "http://demo.opium.sitioweb.fr/v1/files/basilica-di-san-giorgio-maggiore-a-venezia-jpg"
            },
            "original": {
              "href": "http://demo.opium.sitioweb.fr/basilica-di-san-giorgio-maggiore-a-venezia-jpg"
            }
          },
          "thumbnails": {
            "banner": "http://demo.opium.sitioweb.fr/basilica-di-san-giorgio-maggiore-a-venezia-jpg/thumbs/1170-200",
            "smallSquare": "http://demo.opium.sitioweb.fr/basilica-di-san-giorgio-maggiore-a-venezia-jpg/thumbs/50-50",
            "image": "http://demo.opium.sitioweb.fr/basilica-di-san-giorgio-maggiore-a-venezia-jpg/thumbs/1170-auto"
          }
        }
      }
    }
  ],
  "dtype": "directory",
  "_links": {
    "self": {
      "href": "http://demo.opium.sitioweb.fr/v1/directories/1"
    }
  },
  "_embedded": {
    "directory_thumbnail": null
  },
  "image_lines": [
    {
      "2": {
        "geometry": {
          "width": 200,
          "height": 200
        },
        "thumbs": "http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/200-200"
      },
      "3": {
        "geometry": {
          "width": 200,
          "height": 200
        },
        "thumbs": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/200-200"
      },
      "4": {
        "geometry": {
          "width": 200,
          "height": 200
        },
        "thumbs": "http://demo.opium.sitioweb.fr/basilica-di-san-giorgio-maggiore-a-venezia-jpg/thumbs/200-200"
      }
    }
  ]
};

const rawDirectoryWithParent = {
  "type": "directory",
  "id": 3,
  "name": "Pacific Ocean",
  "pathname": "Pacific Ocean",
  "parent": {
    "type": "directory",
    "id": 1,
    "name": "",
    "pathname": "",
    "slug": "",
    "children": [

    ],
    "dtype": "directory",
    "_links": {
      "self": {
        "href": "http://demo.opium.sitioweb.fr/v1/directories/1"
      }
    },
    "_embedded": {
      "directory_thumbnail": null
    }
  },
  "slug": "pacific-ocean",
  "children": [
    {
      "type": "file",
      "id": 15,
      "name": "2010_mavericks_competition_edit1.jpg",
      "pathname": "Pacific Ocean/2010_mavericks_competition_edit1.jpg",
      "slug": "2010-mavericks-competition-edit1-jpg",
      "exif": {
        "Artist": "SHAL-JACOBOVITZ                     ",
        "ColorSpace": "1",
        "Compression": "6",
        "Contrast": "0",
        "CustomRendered": "0",
        "DateTime": "2010:02:19 15:10:40",
        "DateTimeDigitized": "2010:02:13 08:56:09",
        "DateTimeOriginal": "2010:02:13 08:56:09",
        "DigitalZoomRatio": "1/1",
        "ExifImageLength": "2380",
        "ExifImageWidth": "3600",
        "ExifOffset": "276",
        "ExposureBiasValue": "0/1",
        "ExposureMode": "0",
        "ExposureProgram": "3",
        "ExposureTime": "1/6400",
        "Flash": "0",
        "FNumber": "14/5",
        "FocalLength": "400/1",
        "FocalLengthIn35mmFilm": "400",
        "GainControl": "0",
        "ISOSpeedRatings": "250",
        "JPEGInterchangeFormat": "882",
        "JPEGInterchangeFormatLength": "5355",
        "LightSource": "0",
        "Make": "NIKON CORPORATION",
        "MaxApertureValue": "3/1",
        "MeteringMode": "5",
        "Model": "NIKON D3",
        "Orientation": "1",
        "PhotometricInterpretation": "32803",
        "ResolutionUnit": "2",
        "Saturation": "0",
        "SceneCaptureType": "0",
        "SensingMethod": "2",
        "Sharpness": "0",
        "Software": "Adobe Photoshop CS3 Windows",
        "SubjectDistanceRange": "0",
        "SubSecTime": "11",
        "SubSecTimeDigitized": "11",
        "SubSecTimeOriginal": "11",
        "UserComment": "65, 83, 67, 73, 73, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32",
        "WhiteBalance": "0",
        "XResolution": "720000/10000",
        "YResolution": "720000/10000"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/2010-mavericks-competition-edit1-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 16,
      "name": "Dolphins_on_the_Pacific_Ocean.jpg",
      "pathname": "Pacific Ocean/Dolphins_on_the_Pacific_Ocean.jpg",
      "slug": "dolphins-on-the-pacific-ocean-jpg",
      "exif": {
        "ColorSpace": "1",
        "ComponentsConfiguration": "1, 2, 3, 0",
        "Compression": "6",
        "DateTime": "2009:09:01 00:49:03",
        "DateTimeOriginal": "2009-01-18T16:53:10Z",
        "ExifImageLength": "1427",
        "ExifImageWidth": "1956",
        "ExifOffset": "260",
        "ExifVersion": "0220",
        "ExposureTime": "0/1",
        "Fired": "False",
        "Flash": "32",
        "Function": "True",
        "JPEGInterchangeFormat": "518",
        "JPEGInterchangeFormatLength": "3459",
        "LightSource": "0",
        "Make": "Research In Motion",
        "Mode": "0",
        "Model": "BlackBerry 9530",
        "NativeDigest": "36864,40960,40961,37121,37122,40962,40963,37510,40964,36867,36868,33434,33437,34850,34852,34855,34856,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,0,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,23,24,25,26,27,28,30;1A3A71AF59A3BAF2D45C7E1AABCF1C60",
        "Orientation": "1",
        "PixelXDimension": "1956",
        "PixelYDimension": "1427",
        "RedEyeMode": "False",
        "ResolutionUnit": "2",
        "Return": "0",
        "Software": "Adobe Photoshop Elements 5.0 (20060914.r.77)  Windows",
        "SubjectDistance": "0/1",
        "XResolution": "720000/10000",
        "YCbCrPositioning": "2",
        "YResolution": "720000/10000"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/dolphins-on-the-pacific-ocean-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/dolphins-on-the-pacific-ocean-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/dolphins-on-the-pacific-ocean-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/dolphins-on-the-pacific-ocean-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/dolphins-on-the-pacific-ocean-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 17,
      "name": "Image-Pacific-Ocean_-4.jpg",
      "pathname": "Pacific Ocean/Image-Pacific-Ocean_-4.jpg",
      "slug": "image-pacific-ocean-4-jpg",
      "exif": {
        "ColorSpace": "65535",
        "Compression": "6",
        "DateTime": "2007:12:02 18:01:59",
        "ExifImageLength": "1152",
        "ExifImageWidth": "1728",
        "ExifOffset": "164",
        "JPEGInterchangeFormat": "302",
        "JPEGInterchangeFormatLength": "2207",
        "Orientation": "1",
        "ResolutionUnit": "2",
        "Software": "Adobe Photoshop Elements 2.0",
        "XResolution": "150/1",
        "YResolution": "150/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/image-pacific-ocean-4-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/image-pacific-ocean-4-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/image-pacific-ocean-4-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/image-pacific-ocean-4-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/image-pacific-ocean-4-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 18,
      "name": "Lima,_Peru_Pacific_Ocean_city.jpg",
      "pathname": "Pacific Ocean/Lima,_Peru_Pacific_Ocean_city.jpg",
      "slug": "lima-peru-pacific-ocean-city-jpg",
      "exif": {
        "ColorSpace": "1",
        "ComponentsConfiguration": "1, 2, 3, 0",
        "ExifImageLength": "2409",
        "ExifImageWidth": "4284",
        "ExifOffset": "162",
        "ExifVersion": "48, 50, 50, 48",
        "FlashPixVersion": "48, 49, 48, 48",
        "ReferenceBlackWhite": "0/1, 255/1, 128/1, 255/1, 128/1, 255/1",
        "ResolutionUnit": "2",
        "XResolution": "300/1",
        "YCbCrPositioning": "2",
        "YResolution": "300/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/lima-peru-pacific-ocean-city-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/lima-peru-pacific-ocean-city-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/lima-peru-pacific-ocean-city-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/lima-peru-pacific-ocean-city-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/lima-peru-pacific-ocean-city-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 19,
      "name": "Pacific-Ocean_-1.jpg",
      "pathname": "Pacific Ocean/Pacific-Ocean_-1.jpg",
      "slug": "pacific-ocean-1-jpg",
      "exif": {
        "ColorSpace": "65535",
        "Compression": "6",
        "DateTime": "2007:12:02 17:57:41",
        "ExifImageLength": "2000",
        "ExifImageWidth": "3000",
        "ExifOffset": "164",
        "JPEGInterchangeFormat": "302",
        "JPEGInterchangeFormatLength": "2716",
        "Orientation": "1",
        "ResolutionUnit": "2",
        "Software": "Adobe Photoshop Elements 2.0",
        "XResolution": "150/1",
        "YResolution": "150/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/pacific-ocean-1-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/pacific-ocean-1-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/pacific-ocean-1-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/pacific-ocean-1-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/pacific-ocean-1-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 20,
      "name": "Pacific_Ocean_flotsam_at_rest_at_Kirby_Cove_Beach.jpg",
      "pathname": "Pacific Ocean/Pacific_Ocean_flotsam_at_rest_at_Kirby_Cove_Beach.jpg",
      "slug": "pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg",
      "exif": {
        "CFAPattern": "0, 2, 0, 2, 1, 2, 0, 1",
        "ColorSpace": "1",
        "ComponentsConfiguration": "1, 2, 3, 0",
        "CompressedBitsPerPixel": "4/1",
        "Compression": "6",
        "Contrast": "0",
        "CustomRendered": "0",
        "DateTime": "2010:11:05 09:14:31",
        "DateTimeDigitized": "2010:06:02 15:37:38",
        "DateTimeOriginal": "2010:06:02 15:37:38",
        "DigitalZoomRatio": "1/1",
        "ExifImageLength": "2592",
        "ExifImageWidth": "3872",
        "ExifOffset": "228",
        "ExifVersion": "48, 50, 50, 49",
        "ExposureBiasValue": "0/6",
        "ExposureMode": "0",
        "ExposureProgram": "0",
        "ExposureTime": "10/2000",
        "FileSource": "3",
        "Flash": "31",
        "FlashPixVersion": "48, 49, 48, 48",
        "FNumber": "80/10",
        "FocalLength": "360/10",
        "FocalLengthIn35mmFilm": "54",
        "GainControl": "0",
        "ISOSpeedRatings": "100",
        "JPEGInterchangeFormat": "934",
        "JPEGInterchangeFormatLength": "12787",
        "LightSource": "0",
        "Make": "NIKON CORPORATION",
        "MaxApertureValue": "47/10",
        "MeteringMode": "5",
        "Model": "NIKON D60",
        "Orientation": "1",
        "ResolutionUnit": "2",
        "Saturation": "0",
        "SceneCaptureType": "0",
        "SceneType": "1",
        "SensingMethod": "2",
        "Sharpness": "0",
        "Software": "Adobe Photoshop Elements 2.0",
        "SubjectDistanceRange": "0",
        "SubSecTime": "70",
        "SubSecTimeDigitized": "70",
        "SubSecTimeOriginal": "70",
        "UserComment": "65, 83, 67, 73, 73, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32",
        "WhiteBalance": "0",
        "XResolution": "300/1",
        "YCbCrPositioning": "2",
        "YResolution": "300/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 21,
      "name": "Pacific_ocean_coastal_area_51.jpg",
      "pathname": "Pacific Ocean/Pacific_ocean_coastal_area_51.jpg",
      "slug": "pacific-ocean-coastal-area-51-jpg",
      "exif": [

      ],
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/pacific-ocean-coastal-area-51-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/pacific-ocean-coastal-area-51-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/pacific-ocean-coastal-area-51-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/pacific-ocean-coastal-area-51-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/pacific-ocean-coastal-area-51-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 22,
      "name": "Pacific_ocean_up_sun_from_the_rocks.jpg",
      "pathname": "Pacific Ocean/Pacific_ocean_up_sun_from_the_rocks.jpg",
      "slug": "pacific-ocean-up-sun-from-the-rocks-jpg",
      "exif": [

      ],
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/pacific-ocean-up-sun-from-the-rocks-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/pacific-ocean-up-sun-from-the-rocks-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/pacific-ocean-up-sun-from-the-rocks-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/pacific-ocean-up-sun-from-the-rocks-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/pacific-ocean-up-sun-from-the-rocks-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 23,
      "name": "Photographing_a_model.jpg",
      "pathname": "Pacific Ocean/Photographing_a_model.jpg",
      "slug": "photographing-a-model-jpg",
      "exif": {
        "ApertureValue": "370648/65536",
        "ColorSpace": "1",
        "ComponentsConfiguration": "1, 2, 3, 0",
        "Compression": "6",
        "CustomRendered": "0",
        "DateTime": "2009:10:23 20:39:31",
        "DateTimeDigitized": "2009:10:23 17:28:28",
        "DateTimeOriginal": "2009:10:23 17:28:28",
        "ExifImageLength": "1968",
        "ExifImageWidth": "2019",
        "ExifOffset": "232",
        "ExifVersion": "48, 50, 50, 49",
        "ExposureBiasValue": "0/3",
        "ExposureMode": "0",
        "ExposureProgram": "6",
        "ExposureTime": "1/800",
        "Flash": "16",
        "FlashPixVersion": "48, 49, 48, 48",
        "FNumber": "71/10",
        "FocalLength": "70/1",
        "FocalPlaneResolutionUnit": "2",
        "FocalPlaneXResolution": "3888000/877",
        "FocalPlaneYResolution": "2592000/582",
        "InteroperabilityIndex": "R98",
        "InteroperabilityOffset": "932",
        "InteroperabilityVersion": "48, 49, 48, 48",
        "ISOSpeedRatings": "400",
        "JPEGInterchangeFormat": "1058",
        "JPEGInterchangeFormatLength": "5762",
        "Make": "Canon",
        "MeteringMode": "5",
        "Model": "Canon EOS DIGITAL REBEL XTi",
        "Orientation": "1",
        "ResolutionUnit": "2",
        "SceneCaptureType": "0",
        "ShutterSpeedValue": "632020/65536",
        "Software": "Adobe Photoshop CS3 Windows",
        "UserComment": "0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0",
        "WhiteBalance": "0",
        "XResolution": "720000/10000",
        "YCbCrPositioning": "2",
        "YResolution": "720000/10000"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/photographing-a-model-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/photographing-a-model-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/photographing-a-model-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/photographing-a-model-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/photographing-a-model-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 24,
      "name": "Point_Mugu_September_2013_006.jpg",
      "pathname": "Pacific Ocean/Point_Mugu_September_2013_006.jpg",
      "slug": "point-mugu-september-2013-006-jpg",
      "exif": {
        "ApertureValue": "6918863/1000000",
        "CFAPattern": "2, 0, 2, 0, 0, 1, 1, 2",
        "Compression": "6",
        "Contrast": "0",
        "CustomRendered": "0",
        "DateTime": "2013:12:10 22:05:13",
        "DateTimeDigitized": "2013:09:03 17:59:37",
        "DateTimeOriginal": "2013:09:03 17:59:37",
        "DigitalZoomRatio": "1/1",
        "ExifOffset": "220",
        "ExifVersion": "48, 50, 51, 48",
        "ExposureBiasValue": "0/6",
        "ExposureMode": "1",
        "ExposureProgram": "1",
        "ExposureTime": "20/1",
        "FileSource": "3",
        "Flash": "0",
        "FNumber": "11/1",
        "FocalLength": "520/10",
        "FocalLengthIn35mmFilm": "78",
        "GainControl": "0",
        "ISOSpeedRatings": "100",
        "JPEGInterchangeFormat": "948",
        "JPEGInterchangeFormatLength": "14324",
        "LightSource": "0",
        "Make": "NIKON CORPORATION",
        "MaxApertureValue": "50/10",
        "MeteringMode": "5",
        "Model": "NIKON D5100",
        "ResolutionUnit": "2",
        "Saturation": "0",
        "SceneCaptureType": "0",
        "SceneType": "1",
        "SensingMethod": "2",
        "Sharpness": "0",
        "ShutterSpeedValue": "-4321928/1000000",
        "Software": "Adobe Photoshop Camera Raw 6.7.1 (Windows)",
        "SubjectDistance": "-1/1",
        "SubjectDistanceRange": "0",
        "SubSecTimeDigitized": "20",
        "SubSecTimeOriginal": "20",
        "WhiteBalance": "0",
        "XResolution": "300/1",
        "YResolution": "300/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/point-mugu-september-2013-006-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-006-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-006-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-006-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-006-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 25,
      "name": "Point_Mugu_September_2013_013.jpg",
      "pathname": "Pacific Ocean/Point_Mugu_September_2013_013.jpg",
      "slug": "point-mugu-september-2013-013-jpg",
      "exif": {
        "ApertureValue": "6/1",
        "CFAPattern": "2, 0, 2, 0, 0, 1, 1, 2",
        "Compression": "6",
        "Contrast": "0",
        "CustomRendered": "0",
        "DateTime": "2013:12:05 13:37:59",
        "DateTimeDigitized": "2013:09:03 19:12:29",
        "DateTimeOriginal": "2013:09:03 19:12:29",
        "DigitalZoomRatio": "1/1",
        "ExifOffset": "220",
        "ExifVersion": "48, 50, 51, 48",
        "ExposureBiasValue": "0/6",
        "ExposureMode": "1",
        "ExposureProgram": "1",
        "ExposureTime": "30/1",
        "FileSource": "3",
        "Flash": "0",
        "FNumber": "8/1",
        "FocalLength": "180/10",
        "FocalLengthIn35mmFilm": "27",
        "GainControl": "0",
        "ISOSpeedRatings": "100",
        "JPEGInterchangeFormat": "948",
        "JPEGInterchangeFormatLength": "12902",
        "LightSource": "0",
        "Make": "NIKON CORPORATION",
        "MaxApertureValue": "36/10",
        "MeteringMode": "5",
        "Model": "NIKON D5100",
        "ResolutionUnit": "2",
        "Saturation": "0",
        "SceneCaptureType": "0",
        "SceneType": "1",
        "SensingMethod": "2",
        "Sharpness": "0",
        "ShutterSpeedValue": "-4906891/1000000",
        "Software": "Adobe Photoshop Camera Raw 6.7.1 (Windows)",
        "SubjectDistance": "-1/1",
        "SubjectDistanceRange": "0",
        "SubSecTimeDigitized": "80",
        "SubSecTimeOriginal": "80",
        "WhiteBalance": "0",
        "XResolution": "300/1",
        "YResolution": "300/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/point-mugu-september-2013-013-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-013-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-013-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-013-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-013-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 26,
      "name": "Sunset_clouds_and_crepuscular_rays_over_pacific_edit.jpg",
      "pathname": "Pacific Ocean/Sunset_clouds_and_crepuscular_rays_over_pacific_edit.jpg",
      "slug": "sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg",
      "exif": [

      ],
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 27,
      "name": "The_Pacific_Ocean_coastline_as_seen_from_Valencia_Peak.jpg",
      "pathname": "Pacific Ocean/The_Pacific_Ocean_coastline_as_seen_from_Valencia_Peak.jpg",
      "slug": "the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg",
      "exif": {
        "ApertureValue": "7400879/1000000",
        "Artist": "Michael \"Mike\" L. Baird",
        "Compression": "6",
        "Copyright": "(C) Michael \"Mike\" L. Baird bairdphotos.com",
        "CustomRendered": "0",
        "DateTime": "2009:06:13 16:42:33",
        "DateTimeDigitized": "2009:06:13 11:49:09",
        "DateTimeOriginal": "2009:06:13 11:49:09",
        "ExifOffset": "1362",
        "ExifVersion": "48, 50, 50, 49",
        "ExposureBiasValue": "0/1",
        "ExposureMode": "0",
        "ExposureProgram": "2",
        "ExposureTime": "1/400",
        "Flash": "16",
        "FNumber": "13/1",
        "FocalLength": "28/1",
        "FocalPlaneResolutionUnit": "2",
        "FocalPlaneXResolution": "4368000/1415",
        "FocalPlaneYResolution": "2912000/942",
        "ImageDescription": "The Pacific Ocean coastline as seen from Valencia Peak trail in Montana de Oro.  The bluff trail below is one of the most popular and most-enjoyed and easily accessible trails in the entire California State Parks system.  It is a rare and valued treat to experience this view from the ~1000' elevation here.  Scenes from a Digital Photo Walk (DPW) up Valencia Peak in Montana de Oro, 13 June 2009, led by docents Jerry Kirkhart and Mike Baird.  Five visitors enjoyed the walk, taking 2 hours 45 minutes to reach the summit versus the allotted 1.5 hours due to all the photo taking and discussions taking place. Desc. Digital Photo Walk (Valencia Peak) On this vigorous photo walk, bring a point-and-shoot or SLR digital camera. All photographic skill levels are welcome. Experienced docent photographers will help you improve your outdoor and nature photography skills. Meet at the bluff parking area 300' South of the Ranch House in Montana de Oro.  Wear hiking boots or sturdy shoes, bring water and snack. 1347' elevation gain. See photomorrobay.com for more information. (Strenuous) 3.7 mi., 3 hrs.",
        "ISOSpeedRatings": "400",
        "JPEGInterchangeFormat": "1826",
        "JPEGInterchangeFormatLength": "12357",
        "Make": "Canon",
        "MaxApertureValue": "375/100",
        "MeteringMode": "5",
        "Model": "Canon EOS 5D",
        "ResolutionUnit": "2",
        "SceneCaptureType": "0",
        "ShutterSpeedValue": "8643856/1000000",
        "WhiteBalance": "0",
        "XResolution": "150/1",
        "YResolution": "150/1"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg/thumbs/1170-auto"
      }
    },
    {
      "type": "file",
      "id": 28,
      "name": "Umpqua_River_Pacific_Ocean.jpg",
      "pathname": "Pacific Ocean/Umpqua_River_Pacific_Ocean.jpg",
      "slug": "umpqua-river-pacific-ocean-jpg",
      "exif": [

      ],
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/umpqua-river-pacific-ocean-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/umpqua-river-pacific-ocean-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/umpqua-river-pacific-ocean-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/umpqua-river-pacific-ocean-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/umpqua-river-pacific-ocean-jpg/thumbs/1170-auto"
      }
    }
  ],
  "dtype": "directory",
  "_links": {
    "self": {
      "href": "http://demo.opium.sitioweb.fr/v1/directories"
    }
  },
  "_embedded": {
    "directory_thumbnail": {
      "type": "file",
      "id": 15,
      "name": "2010_mavericks_competition_edit1.jpg",
      "pathname": "Pacific Ocean/2010_mavericks_competition_edit1.jpg",
      "parent": {
        "type": "directory",
        "id": 3,
        "name": "Pacific Ocean",
        "pathname": "Pacific Ocean",
        "slug": "pacific-ocean",
        "_links": {
          "self": {
            "href": "http://demo.opium.sitioweb.fr/v1/directories"
          }
        },
        "_embedded": {
          "directory_thumbnail": null
        }
      },
      "slug": "2010-mavericks-competition-edit1-jpg",
      "exif": {
        "Artist": "SHAL-JACOBOVITZ                     ",
        "ColorSpace": "1",
        "Compression": "6",
        "Contrast": "0",
        "CustomRendered": "0",
        "DateTime": "2010:02:19 15:10:40",
        "DateTimeDigitized": "2010:02:13 08:56:09",
        "DateTimeOriginal": "2010:02:13 08:56:09",
        "DigitalZoomRatio": "1/1",
        "ExifImageLength": "2380",
        "ExifImageWidth": "3600",
        "ExifOffset": "276",
        "ExposureBiasValue": "0/1",
        "ExposureMode": "0",
        "ExposureProgram": "3",
        "ExposureTime": "1/6400",
        "Flash": "0",
        "FNumber": "14/5",
        "FocalLength": "400/1",
        "FocalLengthIn35mmFilm": "400",
        "GainControl": "0",
        "ISOSpeedRatings": "250",
        "JPEGInterchangeFormat": "882",
        "JPEGInterchangeFormatLength": "5355",
        "LightSource": "0",
        "Make": "NIKON CORPORATION",
        "MaxApertureValue": "3/1",
        "MeteringMode": "5",
        "Model": "NIKON D3",
        "Orientation": "1",
        "PhotometricInterpretation": "32803",
        "ResolutionUnit": "2",
        "Saturation": "0",
        "SceneCaptureType": "0",
        "SensingMethod": "2",
        "Sharpness": "0",
        "Software": "Adobe Photoshop CS3 Windows",
        "SubjectDistanceRange": "0",
        "SubSecTime": "11",
        "SubSecTimeDigitized": "11",
        "SubSecTimeOriginal": "11",
        "UserComment": "65, 83, 67, 73, 73, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32",
        "WhiteBalance": "0",
        "XResolution": "720000/10000",
        "YResolution": "720000/10000"
      },
      "dtype": "photo",
      "_links": {
        "self": {
          "href": "http://demo.opium.sitioweb.fr/v1/files/2010-mavericks-competition-edit1-jpg"
        },
        "original": {
          "href": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg"
        }
      },
      "thumbnails": {
        "banner": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/1170-200",
        "smallSquare": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/50-50",
        "image": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/1170-auto"
      }
    }
  },
  "image_lines": [
    {
      "15": {
        "geometry": {
          "width": 276.80672268908,
          "height": 183
        },
        "thumbs": "http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/276.80672268908-183"
      },
      "16": {
        "geometry": {
          "width": 250.83952347582,
          "height": 183
        },
        "thumbs": "http://demo.opium.sitioweb.fr/dolphins-on-the-pacific-ocean-jpg/thumbs/250.83952347582-183"
      },
      "17": {
        "geometry": {
          "width": 274.5,
          "height": 183
        },
        "thumbs": "http://demo.opium.sitioweb.fr/image-pacific-ocean-4-jpg/thumbs/274.5-183"
      },
      "18": {
        "geometry": {
          "width": 325.43462017435,
          "height": 183
        },
        "thumbs": "http://demo.opium.sitioweb.fr/lima-peru-pacific-ocean-city-jpg/thumbs/325.43462017435-183"
      }
    },
    {
      "19": {
        "geometry": {
          "width": 291,
          "height": 194
        },
        "thumbs": "http://demo.opium.sitioweb.fr/pacific-ocean-1-jpg/thumbs/291-194"
      },
      "20": {
        "geometry": {
          "width": 289.8024691358,
          "height": 194
        },
        "thumbs": "http://demo.opium.sitioweb.fr/pacific-ocean-flotsam-at-rest-at-kirby-cove-beach-jpg/thumbs/289.8024691358-194"
      },
      "21": {
        "geometry": {
          "width": 286.49789029536,
          "height": 194
        },
        "thumbs": "http://demo.opium.sitioweb.fr/pacific-ocean-coastal-area-51-jpg/thumbs/286.49789029536-194"
      },
      "22": {
        "geometry": {
          "width": 258.66666666667,
          "height": 194
        },
        "thumbs": "http://demo.opium.sitioweb.fr/pacific-ocean-up-sun-from-the-rocks-jpg/thumbs/258.66666666667-194"
      }
    },
    {
      "23": {
        "geometry": {
          "width": 167.22408536585,
          "height": 163
        },
        "thumbs": "http://demo.opium.sitioweb.fr/photographing-a-model-jpg/thumbs/167.22408536585-163"
      },
      "24": {
        "geometry": {
          "width": 203.75,
          "height": 163
        },
        "thumbs": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-006-jpg/thumbs/203.75-163"
      },
      "25": {
        "geometry": {
          "width": 244.5,
          "height": 163
        },
        "thumbs": "http://demo.opium.sitioweb.fr/point-mugu-september-2013-013-jpg/thumbs/244.5-163"
      },
      "26": {
        "geometry": {
          "width": 255.53444180523,
          "height": 163
        },
        "thumbs": "http://demo.opium.sitioweb.fr/sunset-clouds-and-crepuscular-rays-over-pacific-edit-jpg/thumbs/255.53444180523-163"
      },
      "27": {
        "geometry": {
          "width": 244.5294755877,
          "height": 163
        },
        "thumbs": "http://demo.opium.sitioweb.fr/the-pacific-ocean-coastline-as-seen-from-valencia-peak-jpg/thumbs/244.5294755877-163"
      }
    },
    {
      "28": {
        "geometry": {
          "width": 302.11480362538,
          "height": 200
        },
        "thumbs": "http://demo.opium.sitioweb.fr/umpqua-river-pacific-ocean-jpg/thumbs/302.11480362538-200"
      }
    }
  ]
};

it('test passing anything to entityFactory', () => {
  const item = entityFactory({ a: 'A' });

  expect(item instanceof Map).toBeTruthy();
  expect(item.get('a')).toEqual('A');
});

it('generate a valid entity', () => {
  const directory = new Directory(rawDirectory);

  expect(directory instanceof Directory).toBeTruthy();
  expect(directory.id).toEqual(1);
  expect(directory.name).toEqual('');
  expect(directory.children instanceof List).toBeTruthy();
  expect(directory.parent).toBeFalsy();

  const alps = directory.children.first();
  expect(alps instanceof Directory).toBeTruthy();
  expect(alps.id).toEqual(2);
  expect(alps.name).toEqual('Alps');

  const imageLines = directory.imageLines;
  expect(imageLines instanceof List).toBeTruthy();
  expect(imageLines.size).toEqual(1);
  expect(imageLines.first() instanceof Map).toBeTruthy();
  expect(imageLines.first().size).toEqual(3);

  expect(directory.getChildById(2).name).toEqual('Alps');
  expect(directory.getChildrenSize()).toEqual(3);
});

it('generate a valid entity with parent', () => {
  const directory = new Directory(rawDirectoryWithParent);

  expect(directory instanceof Directory).toBeTruthy();
  expect(directory.parent instanceof Directory).toBeTruthy();
});
