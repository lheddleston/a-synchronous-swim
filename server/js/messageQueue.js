messages = []; // the storage unit for messages

const variable = "HELLO WORLD!!!!!";

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  // console.log("message queue: ", messages);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};