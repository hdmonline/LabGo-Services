[
    {
        "id": "3f5c54ad.d080ac",
        "type": "AWS S3",
        "z": "740cd5a8.e6e684",
        "aws": "a26c25d3.5eb878",
        "operation": "ListObjects",
        "Bucket": "photo-collection-1",
        "Key": "",
        "UploadId": "",
        "CopySource": "",
        "Id": "",
        "Delete": "",
        "AccelerateConfiguration": "",
        "AnalyticsConfiguration": "",
        "CORSConfiguration": "",
        "ServerSideEncryptionConfiguration": "",
        "InventoryConfiguration": "",
        "BucketLoggingStatus": "",
        "MetricsConfiguration": "",
        "NotificationConfiguration": "",
        "Policy": "",
        "ReplicationConfiguration": "",
        "RequestPaymentConfiguration": "",
        "Tagging": "",
        "VersioningConfiguration": "",
        "WebsiteConfiguration": "",
        "PartNumber": "",
        "name": "",
        "x": 400,
        "y": 360,
        "wires": [
            [
                "dc4131f2.deddd",
                "26bb263f.7c6bc2"
            ]
        ]
    },
    {
        "id": "2470962b.b98daa",
        "type": "http in",
        "z": "740cd5a8.e6e684",
        "name": "",
        "url": "/list",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 220,
        "y": 360,
        "wires": [
            [
                "3f5c54ad.d080ac"
            ]
        ]
    },
    {
        "id": "9c2214c.276e7e8",
        "type": "http response",
        "z": "740cd5a8.e6e684",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 770,
        "y": 360,
        "wires": []
    },
    {
        "id": "dc4131f2.deddd",
        "type": "json",
        "z": "740cd5a8.e6e684",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 590,
        "y": 360,
        "wires": [
            [
                "9c2214c.276e7e8",
                "6a24fe3d.a268f"
            ]
        ]
    },
    {
        "id": "6a24fe3d.a268f",
        "type": "debug",
        "z": "740cd5a8.e6e684",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 830,
        "y": 280,
        "wires": []
    },
    {
        "id": "691e7f9.55b78",
        "type": "AWS Rekognition",
        "z": "740cd5a8.e6e684",
        "aws": "a26c25d3.5eb878",
        "operation": "SearchFacesByImage",
        "SourceImage": "https://s3.amazonaws.com/photo-collection-1/IMG_0295+2.JPG",
        "TargetImage": "https://s3.amazonaws.com/photo-collection-1/IMG_0307.JPG",
        "CollectionId": "Collection-Id-1",
        "Input": "",
        "Output": "",
        "Name": "",
        "Settings": "",
        "RoleArn": "",
        "FaceIds": "",
        "Image": "",
        "Id": "",
        "JobId": "",
        "FaceId": "",
        "Video": "",
        "name": "",
        "x": 1000,
        "y": 760,
        "wires": [
            [
                "474803f4.d11c24",
                "3d4173ba.1f9e4c"
            ]
        ]
    },
    {
        "id": "26bb263f.7c6bc2",
        "type": "debug",
        "z": "740cd5a8.e6e684",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 630,
        "y": 280,
        "wires": []
    },
    {
        "id": "1cf7b93b.6a5be7",
        "type": "AWS S3",
        "z": "740cd5a8.e6e684",
        "aws": "a26c25d3.5eb878",
        "operation": "GetObject",
        "Bucket": "photo-collection-1",
        "Key": "IMG_0295 2.JPG",
        "UploadId": "",
        "CopySource": "",
        "Id": "",
        "Delete": "",
        "AccelerateConfiguration": "",
        "AnalyticsConfiguration": "",
        "CORSConfiguration": "",
        "ServerSideEncryptionConfiguration": "",
        "InventoryConfiguration": "",
        "BucketLoggingStatus": "",
        "MetricsConfiguration": "",
        "NotificationConfiguration": "",
        "Policy": "",
        "ReplicationConfiguration": "",
        "RequestPaymentConfiguration": "",
        "Tagging": "",
        "VersioningConfiguration": "",
        "WebsiteConfiguration": "",
        "PartNumber": "",
        "name": "",
        "x": 520,
        "y": 460,
        "wires": [
            [
                "e615440d.0d6ba8"
            ]
        ]
    },
    {
        "id": "cec1cca2.5faec",
        "type": "AWS Rekognition",
        "z": "740cd5a8.e6e684",
        "aws": "a26c25d3.5eb878",
        "operation": "CreateCollection",
        "SourceImage": "",
        "TargetImage": "",
        "CollectionId": "Collection-Id-1",
        "Input": "",
        "Output": "",
        "Name": "",
        "Settings": "",
        "RoleArn": "",
        "FaceIds": "",
        "Image": "",
        "Id": "",
        "JobId": "",
        "FaceId": "",
        "Video": "",
        "name": "",
        "x": 520,
        "y": 560,
        "wires": [
            [
                "f6ff4026.5c25e"
            ]
        ]
    },
    {
        "id": "ab6b5b56.2f5c3",
        "type": "http in",
        "z": "740cd5a8.e6e684",
        "name": "",
        "url": "/createCollection",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 260,
        "y": 560,
        "wires": [
            [
                "cec1cca2.5faec"
            ]
        ]
    },
    {
        "id": "f6ff4026.5c25e",
        "type": "http response",
        "z": "740cd5a8.e6e684",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 730,
        "y": 560,
        "wires": []
    },
    {
        "id": "b1616614.2f38f8",
        "type": "AWS Rekognition",
        "z": "740cd5a8.e6e684",
        "aws": "a26c25d3.5eb878",
        "operation": "IndexFaces",
        "SourceImage": "",
        "TargetImage": "",
        "CollectionId": "Collection-Id-1",
        "Input": "",
        "Output": "",
        "Name": "",
        "Settings": "",
        "RoleArn": "",
        "FaceIds": "",
        "Image": "",
        "Id": "",
        "JobId": "",
        "FaceId": "",
        "Video": "",
        "name": "",
        "x": 970,
        "y": 640,
        "wires": [
            [
                "d1c46146.930a78",
                "abd19e6a.436ce8"
            ]
        ]
    },
    {
        "id": "2679ff1d.093ad8",
        "type": "http in",
        "z": "740cd5a8.e6e684",
        "name": "",
        "url": "/v1/images/:image",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 270,
        "y": 640,
        "wires": [
            [
                "7afda486.fb55fc"
            ]
        ]
    },
    {
        "id": "d1c46146.930a78",
        "type": "http response",
        "z": "740cd5a8.e6e684",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1190,
        "y": 640,
        "wires": []
    },
    {
        "id": "a4c1d332.a3402",
        "type": "http in",
        "z": "740cd5a8.e6e684",
        "name": "",
        "url": "/v1/compare",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 240,
        "y": 760,
        "wires": [
            [
                "d332e2a2.3baaa"
            ]
        ]
    },
    {
        "id": "474803f4.d11c24",
        "type": "http response",
        "z": "740cd5a8.e6e684",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1250,
        "y": 760,
        "wires": []
    },
    {
        "id": "abd19e6a.436ce8",
        "type": "debug",
        "z": "740cd5a8.e6e684",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1190,
        "y": 600,
        "wires": []
    },
    {
        "id": "2c6fcf38.c1b2a8",
        "type": "http in",
        "z": "740cd5a8.e6e684",
        "name": "",
        "url": "/pic",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 220,
        "y": 460,
        "wires": [
            [
                "1cf7b93b.6a5be7"
            ]
        ]
    },
    {
        "id": "e615440d.0d6ba8",
        "type": "http response",
        "z": "740cd5a8.e6e684",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 770,
        "y": 460,
        "wires": []
    },
    {
        "id": "c3fdc33.3bebb4",
        "type": "function",
        "z": "740cd5a8.e6e684",
        "name": "Set S3 Image Object",
        "func": "msg.Image = {\"S3Object\": {\"Bucket\": \"photo-collection-1\", \"Name\": msg.payload }};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 640,
        "wires": [
            [
                "b1616614.2f38f8"
            ]
        ]
    },
    {
        "id": "7afda486.fb55fc",
        "type": "template",
        "z": "740cd5a8.e6e684",
        "name": "get parameters",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{req.params.image}}",
        "output": "str",
        "x": 500,
        "y": 640,
        "wires": [
            [
                "c3fdc33.3bebb4"
            ]
        ]
    },
    {
        "id": "d332e2a2.3baaa",
        "type": "function",
        "z": "740cd5a8.e6e684",
        "name": "Set S3 Image Object",
        "func": "//msg.Image = {\"S3Object\": {\"Bucket\": \"photo-collection-1\", \"Name\": \"IMG_0295 2.JPG\" }};\nmsg.Image = {\"S3Object\": {\"Bucket\": \"photo-check-1\", \"Name\": \"IMAGE.JPG\" }};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 760,
        "wires": [
            [
                "691e7f9.55b78"
            ]
        ]
    },
    {
        "id": "3d4173ba.1f9e4c",
        "type": "debug",
        "z": "740cd5a8.e6e684",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1250,
        "y": 720,
        "wires": []
    },
    {
        "id": "a26c25d3.5eb878",
        "type": "amazon config",
        "z": "",
        "name": "Mahmoud-Parto-AWS1",
        "region": "us-east-1",
        "proxyRequired": false,
        "proxy": ""
    }
]