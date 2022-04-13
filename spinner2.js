let timer = 100, spinArr = ['\r|   ','\r/   ','\r-   ', '\r\\   ', '\r|   ','\r/   ','\r-   ', '\r\\   ', '\r|   '];
for (const spin of spinArr) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, timer);
  timer = timer + 200;
};
