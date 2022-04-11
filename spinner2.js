const spinner = function() {
  let timer = 100;
  let spinArr = ['\r|   ','\r/   ','\r-   ', '\r\\   ', '\r|   ' ];

  for (const spin of spinArr) {
    setTimeout(() => {
      process.stdout.write(spin);
    }, timer);
    timer = timer + 200;
  }
};

spinner();