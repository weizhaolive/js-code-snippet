// call、apply 和 bind 可以改变 this 的指向
const bar = {
  name: "bar",
  battery: 50,
  charge: function (level1, level2) {
    this.battery = level1 + level2;
  },
};

const foo = {
  name: "foo",
  battery: 30,
};

bar.charge(40, 40);
console.log(`bar's battery: ${bar.battery}%`);

// call
bar.charge.call(foo, 30, 30);
console.log(`foo's battery(call): ${foo.battery}%`);

// apply
bar.charge.apply(foo, [30, 40]);
console.log(`foo's battery(apply): ${foo.battery}%`);

// bind
const fooyBattery = bar.charge.bind(foo);
fooyBattery(40, 40);
console.log(`foo's battery(bind): ${foo.battery}%`);
