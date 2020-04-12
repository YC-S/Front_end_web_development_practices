var http = require("http");
var querystring = require("querystring");

var contents = querystring.stringify({
  name: "yuanchen",
  email: "yuanchen@yahoo.com",
  address: "Tsinghua University",
});

var options = {
  host: "www.yc.com",
  path: "/application",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": contents.length,
  },
};

var req = http.request(options, function (res) {
  res.setEncoding("utf8");
  res.on("data", function (data) {
    console.log(data);
  });
});

req.write(contents);
req.end();
