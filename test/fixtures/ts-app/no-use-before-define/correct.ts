class ABC {

}

const instance = new ABC();
testABC(instance);

function testABC(abc: ABC) {
  console.info(abc);
}
