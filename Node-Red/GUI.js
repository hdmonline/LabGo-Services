[
    {
        "id": "d51f78eb.883d98",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "63d34f49.3e715",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Delete all items",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 160,
        "y": 80,
        "wires": [
            [
                "297b442a.f5020c"
            ]
        ]
    },
    {
        "id": "297b442a.f5020c",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "DELETE",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/items",
        "tls": "",
        "x": 790,
        "y": 80,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "ccc13034.ba74c8",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/items",
        "tls": "",
        "x": 790,
        "y": 120,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "b41db182.9a171",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "63d34f49.3e715",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Add a sample item",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 170,
        "y": 120,
        "wires": [
            [
                "8acc261d.cd31d"
            ]
        ]
    },
    {
        "id": "8acc261d.cd31d",
        "type": "function",
        "z": "afcf7e95.c084d8",
        "name": "Create the JSON topic",
        "func": "msg.payload = {\"item_name\":\"powerdrill\", \"item_description\":\"Power Drill V181\", \"item_image_url\":\"https://images.homedepot-static.com/productImages/1f89a066-4101-4ade-b0c9-40f55ea30692/svn/ryobi-power-drills-p1810-64_1000.jpg\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 120,
        "wires": [
            [
                "a61d43cf.8a5b3"
            ]
        ]
    },
    {
        "id": "48fabf2.a7615c",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "63d34f49.3e715",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Get all items",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 150,
        "y": 40,
        "wires": [
            [
                "65420e8.6d81a7"
            ]
        ]
    },
    {
        "id": "65420e8.6d81a7",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/items",
        "tls": "",
        "x": 790,
        "y": 40,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "a61d43cf.8a5b3",
        "type": "json",
        "z": "afcf7e95.c084d8",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 610,
        "y": 120,
        "wires": [
            [
                "ccc13034.ba74c8"
            ]
        ]
    },
    {
        "id": "78c958a9.ed0fd",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "aecf3df8.354fc8",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Delete all tags",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 160,
        "y": 260,
        "wires": [
            [
                "caede110.bcf9b"
            ]
        ]
    },
    {
        "id": "caede110.bcf9b",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "DELETE",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/tags",
        "tls": "",
        "x": 790,
        "y": 260,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "edd8bc62.1a85b8",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "aecf3df8.354fc8",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Get all tags",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 150,
        "y": 220,
        "wires": [
            [
                "ff7cccd8.21f6f8"
            ]
        ]
    },
    {
        "id": "ff7cccd8.21f6f8",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/tags",
        "tls": "",
        "x": 790,
        "y": 220,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "e054ae3b.56a44",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "87823d42.85792",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Add a sample student inventory",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 210,
        "y": 420,
        "wires": [
            [
                "34d22517.6af6f2"
            ]
        ]
    },
    {
        "id": "34d22517.6af6f2",
        "type": "function",
        "z": "afcf7e95.c084d8",
        "name": "Create the JSON topic",
        "func": "msg.payload = {\"student_id\": \"903235213\", \"checkin_timestamp\":\"2018-06-21T18:20:14.959504Z\", \"checkout_timestamp\": \"\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 480,
        "y": 420,
        "wires": [
            [
                "6c6385b0.67f67c"
            ]
        ]
    },
    {
        "id": "6c6385b0.67f67c",
        "type": "json",
        "z": "afcf7e95.c084d8",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 650,
        "y": 420,
        "wires": [
            [
                "b2651de.02ca4e"
            ]
        ]
    },
    {
        "id": "b2651de.02ca4e",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/studentinventories/checkin",
        "tls": "",
        "x": 790,
        "y": 420,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "85036e24.b96be",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/studentinventories",
        "tls": "",
        "x": 790,
        "y": 340,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "43e81511.98fc3c",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "87823d42.85792",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Get all student inventories",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 190,
        "y": 340,
        "wires": [
            [
                "85036e24.b96be"
            ]
        ]
    },
    {
        "id": "2affef4a.d40d8",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "90ae88b3.8d3688",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Add a sample inventory",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 190,
        "y": 580,
        "wires": [
            [
                "60baef51.eef308"
            ]
        ]
    },
    {
        "id": "60baef51.eef308",
        "type": "function",
        "z": "afcf7e95.c084d8",
        "name": "Create the JSON topic",
        "func": "msg.payload = {\"item_name\":\"powerdrill\", \"rfid_tag\": \"3d32ea52\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 480,
        "y": 580,
        "wires": [
            [
                "a85100f2.709fd8"
            ]
        ]
    },
    {
        "id": "a85100f2.709fd8",
        "type": "json",
        "z": "afcf7e95.c084d8",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 650,
        "y": 580,
        "wires": [
            [
                "3cd44869.44408"
            ]
        ]
    },
    {
        "id": "3cd44869.44408",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/inventories",
        "tls": "",
        "x": 790,
        "y": 580,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "5dcc78c8.76371",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "90ae88b3.8d3688",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Get all inventories",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 170,
        "y": 500,
        "wires": [
            [
                "cb61c96d.53fb18"
            ]
        ]
    },
    {
        "id": "cb61c96d.53fb18",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/inventories",
        "tls": "",
        "x": 790,
        "y": 500,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "3f6dd08b.ee0d98",
        "type": "ui_text",
        "z": "afcf7e95.c084d8",
        "group": "52c4e9e9.7787a8",
        "order": 0,
        "width": "6",
        "height": "10",
        "name": "",
        "label": "Message:",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 1100,
        "y": 540,
        "wires": []
    },
    {
        "id": "fa723b8d.45f27",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "90ae88b3.8d3688",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Delete all inventories",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 180,
        "y": 540,
        "wires": [
            [
                "fc6fc949.6aef6"
            ]
        ]
    },
    {
        "id": "fc6fc949.6aef6",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "DELETE",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/inventories",
        "tls": "",
        "x": 790,
        "y": 540,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "7b2e3ede.c6ff9",
        "type": "ui_button",
        "z": "afcf7e95.c084d8",
        "name": "",
        "group": "87823d42.85792",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Delete all student inventories",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 200,
        "y": 380,
        "wires": [
            [
                "194a5fb0.dffce8"
            ]
        ]
    },
    {
        "id": "194a5fb0.dffce8",
        "type": "http request",
        "z": "afcf7e95.c084d8",
        "name": "",
        "method": "DELETE",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/studentinventories",
        "tls": "",
        "x": 790,
        "y": 380,
        "wires": [
            [
                "3f6dd08b.ee0d98"
            ]
        ]
    },
    {
        "id": "63d34f49.3e715",
        "type": "ui_group",
        "z": "",
        "name": "Items",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "aecf3df8.354fc8",
        "type": "ui_group",
        "z": "",
        "name": "Tags",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "87823d42.85792",
        "type": "ui_group",
        "z": "",
        "name": "Student Inventories",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "90ae88b3.8d3688",
        "type": "ui_group",
        "z": "",
        "name": "Inventories",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "52c4e9e9.7787a8",
        "type": "ui_group",
        "z": "",
        "name": "Text Message",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "25",
        "collapse": false
    },
    {
        "id": "1b3e391e.94af97",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard"
    }
]