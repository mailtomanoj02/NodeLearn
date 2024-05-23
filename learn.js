const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
const handleResize = () => {
  console.log("Window resized!");
};
const myObject = {
  value: 0,
  increment: function () {
    console.log(this);
    this.value++;
    console.log(this.value); // This should refer to myObject
  },
};

const debouncedIncrement = debounce(myObject.increment, 1000);

debouncedIncrement();
// myObject.increment();
