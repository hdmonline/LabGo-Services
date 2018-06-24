[
    {
        "id": "f1fc1d35.3f124",
        "type": "ParticleSSE in",
        "z": "5f5d85d9.0b5ed4",
        "baseurl": "403a19b8.8d2bb8",
        "evtname": "rfid_tag_check_in",
        "devid": "34003f000547363339343638",
        "consolelog": false,
        "x": 220,
        "y": 240,
        "wires": [
            [
                "9bad1eb0.23f34"
            ]
        ]
    },
    {
        "id": "84e74ef7.b646d8",
        "type": "http response",
        "z": "5f5d85d9.0b5ed4",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1090,
        "y": 240,
        "wires": []
    },
    {
        "id": "8f6ba9aa.ac9ad",
        "type": "http request",
        "z": "5f5d85d9.0b5ed4",
        "name": "Incoming RFID Tags",
        "method": "POST",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/incomingrfidtags",
        "tls": "",
        "x": 880,
        "y": 240,
        "wires": [
            [
                "84e74ef7.b646d8"
            ]
        ]
    },
    {
        "id": "9bad1eb0.23f34",
        "type": "function",
        "z": "5f5d85d9.0b5ed4",
        "name": "Create JSON topic",
        "func": "msg.payload = {\"rfid_tag\": msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 240,
        "wires": [
            [
                "8f6ba9aa.ac9ad",
                "71a2f76d.9e82f"
            ]
        ]
    },
    {
        "id": "71a2f76d.9e82f",
        "type": "debug",
        "z": "5f5d85d9.0b5ed4",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 790,
        "y": 180,
        "wires": []
    },
    {
        "id": "8a907771.bd71b8",
        "type": "ParticleSSE in",
        "z": "5f5d85d9.0b5ed4",
        "baseurl": "403a19b8.8d2bb8",
        "evtname": "rfid_tag_check_out",
        "devid": "34003f000547363339343638",
        "consolelog": false,
        "x": 230,
        "y": 380,
        "wires": [
            [
                "2726a9b7.90bd6e"
            ]
        ]
    },
    {
        "id": "55fab411.12df8c",
        "type": "http response",
        "z": "5f5d85d9.0b5ed4",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1090,
        "y": 340,
        "wires": []
    },
    {
        "id": "86ef686c.d7344",
        "type": "http request",
        "z": "5f5d85d9.0b5ed4",
        "name": "Outgoing RFID Tags",
        "method": "POST",
        "ret": "txt",
        "url": "http://ec2-52-90-6-153.compute-1.amazonaws.com:1880/v1/outgoingrfidtags",
        "tls": "",
        "x": 880,
        "y": 340,
        "wires": [
            [
                "55fab411.12df8c"
            ]
        ]
    },
    {
        "id": "2726a9b7.90bd6e",
        "type": "function",
        "z": "5f5d85d9.0b5ed4",
        "name": "Create JSON topic",
        "func": "msg.payload = {\"rfid_tag\": msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 340,
        "wires": [
            [
                "86ef686c.d7344",
                "8306f001.4d1ae8"
            ]
        ]
    },
    {
        "id": "8306f001.4d1ae8",
        "type": "debug",
        "z": "5f5d85d9.0b5ed4",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 790,
        "y": 280,
        "wires": []
    },
    {
        "id": "d969cda4.8da198",
        "type": "ui_button",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 2089f91a",
        "group": "e70e3dee.c4d74",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "rfid_tag: 2089f91a",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "5c05bf70.0ec858"
            ]
        ]
    },
    {
        "id": "5c05bf70.0ec858",
        "type": "function",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 2089f91a",
        "func": "msg.payload = \"2089f91a\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 160,
        "wires": [
            [
                "9bad1eb0.23f34"
            ]
        ]
    },
    {
        "id": "3159533d.9fe06c",
        "type": "function",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 3d32ea52",
        "func": "msg.payload = \"3d32ea52\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 340,
        "wires": [
            [
                "2726a9b7.90bd6e"
            ]
        ]
    },
    {
        "id": "d5e18aad.ce8ee",
        "type": "ui_button",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 3d32ea52",
        "group": "4b3b4758.c5661",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "rfid_tag: 3d32ea52",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 340,
        "wires": [
            [
                "3159533d.9fe06c"
            ]
        ]
    },
    {
        "id": "d399f0aa.b2aa9",
        "type": "function",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 2089f91a",
        "func": "msg.payload = \"2089f91a\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 300,
        "wires": [
            [
                "2726a9b7.90bd6e"
            ]
        ]
    },
    {
        "id": "d0db483.4910cb8",
        "type": "ui_button",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 2089f91a",
        "group": "4b3b4758.c5661",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "rfid_tag: 2089f91a",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 300,
        "wires": [
            [
                "d399f0aa.b2aa9"
            ]
        ]
    },
    {
        "id": "e2e9657.26bc298",
        "type": "function",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 3d32ea52",
        "func": "msg.payload = \"3d32ea52\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "3185b923.051436",
        "type": "ui_button",
        "z": "5f5d85d9.0b5ed4",
        "name": "rfid_tag: 3d32ea52",
        "group": "e70e3dee.c4d74",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "rfid_tag: 3d32ea52",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 200,
        "wires": [
            [
                "e2e9657.26bc298"
            ]
        ]
    },
    {
        "id": "403a19b8.8d2bb8",
        "type": "particle-cloud",
        "z": "",
        "host": "https://api.particle.io",
        "port": "443",
        "accesstoken": "1de6a0efcd3a751f3559700860c90ddd1f35c831",
        "name": ""
    },
    {
        "id": "e70e3dee.c4d74",
        "type": "ui_group",
        "z": "",
        "name": "Check in",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "4b3b4758.c5661",
        "type": "ui_group",
        "z": "",
        "name": "Check out",
        "tab": "1b3e391e.94af97",
        "disp": true,
        "width": "6",
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