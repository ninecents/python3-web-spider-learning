// Java.perform(function () {
//   console.log("i am coming");
//   var MainActivity = Java.use(
//     "com.example.seccon2015.rock_paper_scissors.MainActivity"
//   );
//   MainActivity.onClick.implementation = function (v) {
//     this.onClick(v);
//     console.log("mmm:" + this.m.value);
//     console.log("nnn:" + this.n.value);
//   };

//   var TT = Java.use(
//     "com.example.seccon2015.rock_paper_scissors.MainActivity$1"
//   );
//   TT.run.implementation = function () {
//     this.this$0.value.m.value = 1;
//     this.this$0.value.n.value = 2;
//     this.run();
//   };
// });

Java.perform(function () {
  send("ddd");
  var t = Java.use("java.util.ArrayList").$new();
  t.add("11");
  var MainActivity = Java.use(
    "com.example.seccon2015.rock_paper_scissors.MainActivity"
  );

  var MainActivity1 = Java.use(
    "com.example.seccon2015.rock_paper_scissors.MainActivity$1"
  );

  MainActivity.onClick.implementation = function (v1) {
    send("bef:" + this.m.value);
    //this.cnt.value=1000
    this.onClick(v1);
    send("aft:" + this.m.value);
    send("aft:" + this.n.value);
  };
  MainActivity.calc.implementation = function () {
    var c = this.calc();
    send("value this.calc:" + c);
    return c;
  };

  MainActivity1.run.implementation = function () {
    send("qqqqq");
    send("vvv:" + this.this$0.value.m.value);
    this.this$0.value.m.value = 1;
    this.this$0.value.n.value = 2;
    send("fffff");
    this.run();
  };
});
