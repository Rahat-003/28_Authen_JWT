function app1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("app1 is running at 3000");
      reject("app1 is not running");
    }, 2000);
  });
}

// async function fn()

function app2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("app2 is running at 3000");
      reject("app2 is not running");
    }, 2000);
  });
}

app1()
    .then((val) => {
        console.log(val);
        return app2();
    })
    .then((val) => {
        console.log(val);
    })

// async function action() {
//     const a1 = await app1();
//     console.log(a1);

//     setTimeout(() => {
//       console.log('mama');
//     }, 2000);

// }

// action();
