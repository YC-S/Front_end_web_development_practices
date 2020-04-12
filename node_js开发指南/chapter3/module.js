var name;

exports.setName = function (thyname) {
  name = thyname;
};

exports.sayHello = function () {
  console.log("Hello " + name);
};
