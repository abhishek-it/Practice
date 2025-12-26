setTimeout(() => {
  console.log("Task 1 done");

  setTimeout(() => {
    console.log("Task 2 done");

    setTimeout(() => {
      console.log("Task 3 done");

      setTimeout(() => {
        console.log("Task 4 done");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
