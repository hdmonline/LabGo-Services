[
    {
        "id": "785d78a8.5f798",
        "type": "tab",
        "label": "REST API",
        "disabled": false,
        "info": ""
    },
    {
        "id": "958cf14.1c2a71",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "/v1/items",
        "url": "/v1/items",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 100,
        "y": 60,
        "wires": [
            [
                "540e19a5.a75998"
            ]
        ]
    },
    {
        "id": "d7ae720c.a33f2",
        "type": "mysql",
        "z": "785d78a8.5f798",
        "mydb": "2ccc4c99.d52f64",
        "name": "Lab Go Database",
        "x": 1530,
        "y": 100,
        "wires": [
            [
                "7170299.6d85a58"
            ]
        ]
    },
    {
        "id": "540e19a5.a75998",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Get the list of the items",
        "func": "msg.topic = \"SELECT * FROM item LIMIT 1000\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1130,
        "y": 60,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "3090be33.f3130a",
        "type": "http response",
        "z": "785d78a8.5f798",
        "name": "Return the results",
        "statusCode": "",
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "x": 1910,
        "y": 100,
        "wires": []
    },
    {
        "id": "c4a6b45d.6727c",
        "type": "debug",
        "z": "785d78a8.5f798",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 1890,
        "y": 60,
        "wires": []
    },
    {
        "id": "a87bac89.bc0328",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/items",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 180,
        "wires": [
            [
                "b28b7024.7c1518"
            ]
        ]
    },
    {
        "id": "b28b7024.7c1518",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Insert an item to the items table",
        "func": "msg.topic = \"INSERT IGNORE INTO `item` (`item_name`, `item_description`, `item_image_url`) VALUES ('\" + msg.payload.item_name + \"', '\" + msg.payload.item_description + \"', '\" + msg.payload.item_image_url + \"');\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1110,
        "y": 180,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "a58b3408.eac89",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/tags",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 280,
        "wires": [
            [
                "e842390b.71ebd"
            ]
        ]
    },
    {
        "id": "e842390b.71ebd",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Get the list of the items",
        "func": "msg.topic = \"SELECT * FROM rfid_tag LIMIT 1000\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1130,
        "y": 280,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "df75e8f6.e0c8c8",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/tags",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 400,
        "wires": [
            [
                "d611819f.356f18"
            ]
        ]
    },
    {
        "id": "d611819f.356f18",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Add an item by its tag",
        "func": "msg.topic = \"INSERT IGNORE INTO `rfid_tag` (`item_id`, `rfid_tag`) VALUES ((SELECT item_id from item WHERE item_name='\" + msg.payload.item_name + \"'), '\" + msg.payload.rfid_tag + \"')\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1140,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "17d201ce.007aee",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete tags",
        "func": "msg.topic = \"DELETE FROM `rfid_tag`;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1170,
        "y": 320,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "5c957516.08dd8c",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/tags",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 320,
        "wires": [
            [
                "17d201ce.007aee"
            ]
        ]
    },
    {
        "id": "483a1e5b.7fb8b",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete items",
        "func": "msg.topic = \"DELETE FROM `item`;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1170,
        "y": 100,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "a9654b3f.fb41b8",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/items",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 100,
        "wires": [
            [
                "483a1e5b.7fb8b"
            ]
        ]
    },
    {
        "id": "77e5a5fb.c659b4",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete an item with name",
        "func": "msg.topic = \"DELETE FROM `item` WHERE item_name ='\" + msg.payload + \"';\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1130,
        "y": 140,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "5e465fde.2bb898",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/items/:item_name",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 140,
        "wires": [
            [
                "3da5c1f4.4d28b6"
            ]
        ]
    },
    {
        "id": "3da5c1f4.4d28b6",
        "type": "template",
        "z": "785d78a8.5f798",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{req.params.item_name}}",
        "output": "str",
        "x": 500,
        "y": 140,
        "wires": [
            [
                "77e5a5fb.c659b4"
            ]
        ]
    },
    {
        "id": "55ec6305.f455f4",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete an item with its tag",
        "func": "msg.topic = \"DELETE FROM `item` WHERE item_id ='\" + msg.payload + \"';\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1130,
        "y": 360,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "71783ba2.ad1cc4",
        "type": "template",
        "z": "785d78a8.5f798",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{req.params.rfid_tag}}",
        "output": "str",
        "x": 500,
        "y": 360,
        "wires": [
            [
                "55ec6305.f455f4"
            ]
        ]
    },
    {
        "id": "a559c437.ee588",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/tags/:rfid_tag",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 360,
        "wires": [
            [
                "71783ba2.ad1cc4"
            ]
        ]
    },
    {
        "id": "a0f21bd1.327bf8",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/inventories",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 480,
        "wires": [
            [
                "4c4d7ee8.66ad9"
            ]
        ]
    },
    {
        "id": "4c4d7ee8.66ad9",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Get the list of the items in the inventory",
        "func": "msg.topic = \"SELECT * FROM inventory_v_item_v_rfid_tag LIMIT 1000\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1080,
        "y": 480,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "91f71f63.cf587",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/inventories",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 600,
        "wires": [
            [
                "e353359a.c91f28"
            ]
        ]
    },
    {
        "id": "e353359a.c91f28",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Add an item to inventory by its tag and name",
        "func": "msg.topic = \"INSERT IGNORE INTO `rfid_tag` (`item_id`, `rfid_tag`) VALUES ((SELECT item_id from item WHERE item_name='\" + msg.payload.item_name + \"'), '\" + msg.payload.rfid_tag + \"');\";\nmsg.topic += \"INSERT IGNORE INTO `inventory` (`rfid_tag_id`) VALUES ( (SELECT rfid_tag_id from rfid_tag WHERE rfid_tag= '\" + msg.payload.rfid_tag + \"') );\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 600,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "a112b087.0d94c8",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete tags",
        "func": "msg.topic = \"DELETE FROM `rfid_tag`;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1170,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "b1f6121d.f2b8b",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/inventories",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 520,
        "wires": [
            [
                "a112b087.0d94c8"
            ]
        ]
    },
    {
        "id": "4bd9d4f8.bb0b64",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete an item from inventory with its tag",
        "func": "msg.topic = \"DELETE FROM `item` WHERE items_item_id ='\" + msg.payload + \"';\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1080,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "ac4a1d75.ef3a08",
        "type": "template",
        "z": "785d78a8.5f798",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{req.params.rfid_tag}}",
        "output": "str",
        "x": 500,
        "y": 560,
        "wires": [
            [
                "4bd9d4f8.bb0b64"
            ]
        ]
    },
    {
        "id": "db7156bb.891a6",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/inventories/:rfid_tag",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 560,
        "wires": [
            [
                "ac4a1d75.ef3a08"
            ]
        ]
    },
    {
        "id": "69317562.906b6c",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Get the list of the items in the inventory",
        "func": "msg.topic = \"SELECT * FROM student_inventory_v_item_v_rfid_tag LIMIT 1000\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1080,
        "y": 760,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "7ee621b2.cd83b",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/studentinventories",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 760,
        "wires": [
            [
                "69317562.906b6c"
            ]
        ]
    },
    {
        "id": "24ad7b05.206244",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/studentinventories/:student_id",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 800,
        "wires": [
            [
                "45093792.67d998"
            ]
        ]
    },
    {
        "id": "45093792.67d998",
        "type": "template",
        "z": "785d78a8.5f798",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{req.params.student_id}}",
        "output": "str",
        "x": 500,
        "y": 800,
        "wires": [
            [
                "c19a65f1.194c8"
            ]
        ]
    },
    {
        "id": "c19a65f1.194c8",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Show the inventory history of the student",
        "func": "msg.topic = \"SELECT * FROM labgo.student_inventory_v_item_v_rfid_tag WHERE student_id = '\" + msg.payload + \"';\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1080,
        "y": 800,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "ff53da75.e1236",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/studentinventories/checkin",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 920,
        "wires": [
            [
                "bf8e9cdc.c7b5f8"
            ]
        ]
    },
    {
        "id": "eca7a47a.85a818",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/studentinventories",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 840,
        "wires": [
            [
                "16ff5433.91c304"
            ]
        ]
    },
    {
        "id": "16ff5433.91c304",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete tags",
        "func": "msg.topic = \"DELETE FROM `user_inventory`;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1170,
        "y": 840,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "6fd868f4.179ae8",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/studentinventories/:student_id",
        "method": "delete",
        "upload": false,
        "swaggerDoc": "",
        "x": 200,
        "y": 880,
        "wires": [
            [
                "635e89c6.b89b88"
            ]
        ]
    },
    {
        "id": "635e89c6.b89b88",
        "type": "template",
        "z": "785d78a8.5f798",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{req.params.student_id}}",
        "output": "str",
        "x": 500,
        "y": 880,
        "wires": [
            [
                "6d034855.b8477"
            ]
        ]
    },
    {
        "id": "6d034855.b8477",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Delete an item from inventory with its tag",
        "func": "msg.topic = \"DELETE FROM `user_inventory` WHERE student_id ='\" + msg.payload + \"';\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1080,
        "y": 880,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "541112d.6c8c8ec",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Insert incoming (checking in) rfid tags",
        "func": "msg.topic = \"INSERT IGNORE INTO `incoming_rfid_tag` (`rfid_tag_id`) VALUES ((SELECT rfid_tag_id from rfid_tag WHERE rfid_tag='\" + msg.payload.rfid_tag + \"'));\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1090,
        "y": 660,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "761745e2.f85f2c",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/incomingrfidtags",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 660,
        "wires": [
            [
                "541112d.6c8c8ec"
            ]
        ]
    },
    {
        "id": "4bd0cd50.a6a9fc",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Insert outgoing (checking out) rfid tags",
        "func": "msg.topic = \"INSERT IGNORE INTO `outgoing_rfid_tag` (`rfid_tag_id`) VALUES ((SELECT rfid_tag_id from rfid_tag WHERE rfid_tag='\" + msg.payload.rfid_tag + \"'));\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1090,
        "y": 700,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "99392f9e.f91fd8",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/outgoingrfidtags",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 700,
        "wires": [
            [
                "4bd0cd50.a6a9fc"
            ]
        ]
    },
    {
        "id": "7170299.6d85a58",
        "type": "json",
        "z": "785d78a8.5f798",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 1710,
        "y": 100,
        "wires": [
            [
                "3090be33.f3130a",
                "c4a6b45d.6727c"
            ]
        ]
    },
    {
        "id": "99c6ec7f.c5e42",
        "type": "mysql",
        "z": "785d78a8.5f798",
        "mydb": "2ccc4c99.d52f64",
        "name": "Lab Go Database",
        "x": 730,
        "y": 920,
        "wires": [
            [
                "b2fb33d4.1588e8",
                "38777122.be1766"
            ]
        ]
    },
    {
        "id": "bf8e9cdc.c7b5f8",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Get all incoming rfid tags",
        "func": "// first store the message to retrieve it later:\nflow.set('incoming_rfid_message',msg.payload);\n\nmsg.topic = \"SELECT * FROM incoming_rfid_tag;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 920,
        "wires": [
            [
                "99c6ec7f.c5e42"
            ]
        ]
    },
    {
        "id": "b2fb33d4.1588e8",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Add student_id and timestamps",
        "func": "// retrieve the original requested message\nvar requested_msg = flow.get('incoming_rfid_message');\n    \nfor(var i = 0; i < msg.payload.length; i++)\n{\n    msg.topic = \"UPDATE `user_inventory` SET `checkin_timestamp`=NOW() WHERE `student_id`='\"+ requested_msg.student_id + \"' AND rfid_tag_id = '\" + msg.payload[i].rfid_tag_id + \"';\"\n}\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1110,
        "y": 920,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "38777122.be1766",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Remove the incoming rfid tags from the database",
        "func": "msg.topic = \"DELETE FROM `incoming_rfid_tag`;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1050,
        "y": 960,
        "wires": [
            [
                "572e993d.53d0c"
            ]
        ]
    },
    {
        "id": "572e993d.53d0c",
        "type": "mysql",
        "z": "785d78a8.5f798",
        "mydb": "2ccc4c99.d52f64",
        "name": "Lab Go Database",
        "x": 1390,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "871c7156.77991",
        "type": "http in",
        "z": "785d78a8.5f798",
        "name": "",
        "url": "/v1/studentinventories/checkout",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 1000,
        "wires": [
            [
                "4432e9b1.50e97"
            ]
        ]
    },
    {
        "id": "4432e9b1.50e97",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Get all outgoing rfid tags",
        "func": "// first store the message to retrieve it later:\nflow.set('outgoing_rfid_message',msg.payload);\n\nmsg.topic = \"SELECT * FROM outgoing_rfid_tag;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 1000,
        "wires": [
            [
                "d910aedd.608698"
            ]
        ]
    },
    {
        "id": "d910aedd.608698",
        "type": "mysql",
        "z": "785d78a8.5f798",
        "mydb": "2ccc4c99.d52f64",
        "name": "Lab Go Database",
        "x": 730,
        "y": 1000,
        "wires": [
            [
                "7d68aabc.b3cec4",
                "85e96a18.31947"
            ]
        ]
    },
    {
        "id": "7d68aabc.b3cec4",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Add student_id and timestamps",
        "func": "// retrieve the original requested message\nvar requested_msg = flow.get('outgoing_rfid_message');\n\nmsg.topic = \"\";\nfor(var i = 0; i < msg.payload.length; i++)\n{\n    msg.topic += \"INSERT IGNORE INTO `user_inventory` (`student_id`, `rfid_tag_id`) VALUES ( '\" + requested_msg.student_id + \"', '\" + msg.payload[i].rfid_tag_id + \"');\";\n}\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1110,
        "y": 1000,
        "wires": [
            [
                "d7ae720c.a33f2"
            ]
        ]
    },
    {
        "id": "85e96a18.31947",
        "type": "function",
        "z": "785d78a8.5f798",
        "name": "Remove the outgoing rfid tags from the database",
        "func": "msg.topic = \"DELETE FROM `outgoing_rfid_tag`;\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1050,
        "y": 1040,
        "wires": [
            [
                "572e993d.53d0c"
            ]
        ]
    },
    {
        "id": "2ccc4c99.d52f64",
        "type": "MySQLdatabase",
        "z": "",
        "host": "labgodb.cvft9rxx7ntv.us-east-1.rds.amazonaws.com",
        "port": "3306",
        "db": "labgo",
        "tz": ""
    }
]