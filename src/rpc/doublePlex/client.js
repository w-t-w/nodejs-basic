const net = require("net");

const HOST_NAME = "127.0.0.1";
const PORT = 4000;

const LESSON_ID = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
];
const lesson_length = LESSON_ID.length;

let index = Math.floor(Math.random() * lesson_length),
    oldBuffer = null,
    packageLength = 0,
    seq = 0,
    id = LESSON_ID[index];

const socket = new net.Socket({});

socket.connect({
    host: HOST_NAME,
    port: PORT
});

socket.write(encode(id));

for (let i = 0; i < 200; i++) {
    index = Math.floor(Math.random() * lesson_length);
    id = LESSON_ID[index];
    socket.write(encode(id));
}

socket.on("data", function (buffer) {
    if (oldBuffer) {
        buffer = Buffer.concat([oldBuffer, buffer]);
    }

    while (packageLength = isBufferComplete(buffer)) {
        const package = buffer.slice(0, packageLength);

        const {seq, data} = decode(package);
        console.log(`包头为 ${seq} 所对应的课程名称为 ${data}`);

        buffer = buffer.slice(packageLength);
    }

    oldBuffer = buffer;
});

function encode(id) {
    const header = Buffer.alloc(8);
    header.writeInt32BE(seq);
    const body = Buffer.alloc(4);
    body.writeInt32BE(id);
    const body_length = body.length;
    header.writeInt32BE(body_length, 4);
    console.log(`包头为 ${seq} 所对应的课程 ID 为 ${id}`);
    seq++;
    return Buffer.concat([header, body]);
}

function decode(buffer) {
    const seq = buffer.readInt32BE();
    const body = buffer.slice(8);
    return {
        seq,
        data: body.toString()
    };
}

function isBufferComplete(buffer) {
    if (buffer.length <= 8) return 0;
    const body_length = buffer.readInt32BE(4);
    return 8 + body_length;
}


