function typeOfData(data) {
  if (typeof data === "number") {
    return "o tipo do dado é number"
  } else if (typeof data === "string") {
    return "o tipo do dado é string"
  } else if (typeof data === "boolean") {
    return "o tipo do dado é boolean"
  }
}

console.log(typeOfData(1));
console.log(typeOfData('1'));
console.log(typeOfData(true));