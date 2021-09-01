const somethingWillhappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("upsi!");
    }
  });
};

somethingWillhappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const somethingWillhappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    } else {
      const error = new Error("Whoop!");
      reject(error);
    }
  });
};

somethingWillhappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillhappen(), somethingWillhappen2()])
  .then((response) => {
    console.log("Array of Results: ", response);
  })
  .catch((err) => {
    console.error(err);
  });
