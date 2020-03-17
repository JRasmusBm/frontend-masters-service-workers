"use strict";

var index = 0;

self.onmessage = onMessage;

function onMessage(event) {
  getNextFib();
}

function getNextFib() {
  var val = fib(index);
  self.postMessage({ index, fib: val });
  index++;
  setTimeout(getNextFib, 0);
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
