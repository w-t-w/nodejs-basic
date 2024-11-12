const protoBuf = require("protocol-buffers");
const path = require("path");
const fs = require("fs");

const PROTO_DIR = path.resolve(__dirname, "./data/personal.proto");

const schema = protoBuf(fs.readFileSync(PROTO_DIR, "utf-8"), "utf-8");

const buffer_first = Buffer.from("hello geekBang!");
const buffer_second = Buffer.from([1, 2, 3, 4, 5]);
const buffer_third = Buffer.alloc(20);

console.log(buffer_first);
console.log(buffer_second);
console.log(buffer_third);

buffer_second.writeInt8(12, 1);
console.log(buffer_second);
buffer_second.writeInt16BE(512, 2);
console.log(buffer_second);
buffer_second.writeInt16LE(512, 2);
console.log(buffer_second);

const wtw = {
    id: 18006,
    name: "wtw",
    hobby: ["basketball", "tennis"]
};

const wtw_buffer = schema.Column.encode(wtw);
console.log(wtw_buffer);
const wtw_repeat = schema.Column.decode(wtw_buffer);
console.log(wtw_repeat);
