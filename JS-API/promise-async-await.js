function callHugo(success) {
  return new Promise((resolve, reject) => {
    console.log(`Calling Hugo...`);
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

// 链式写法
callHugo(true)
  .then(() => {
    console.log(`Hugo picked up the phone`);
  })
  .catch(() => {
    console.log(`Hugo rejected the call`);
  });

// 同步写法
async function action() {
  try {
    await callHugo(false);
    console.log(`Hugo picked up the phone`);
  } catch (e) {
    console.log(`Hugo rejected the call`);
  }
}
action();

// 同步自调用写法
(async () => {
  try {
    await callHugo(true);
    console.log(`Hugo picked up the phone`);
  } catch (e) {
    console.log(`Hugo rejected the call`);
  }
})();
