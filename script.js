let array = ["this", "that", "this also", "this and that", "thought", "That", "this", "thaat"];

console.log(["this", "that", "this also", "this and that", "thought", "That", "this", "thaat"]);

console.log(array);

const orderString = (arr) => {
  return arr.sort((first, second) => {
    if(first.toLowerCase() < second.toLowerCase()){
      return -1;
    }
    else if(first.toLowerCase() > second.toLowerCase()){
      return 1;
    }
    else{
      return 0;
    }
  });
};

for (let i = 0; i < 10; i++){
  console.log(i);
}

let str = "AuStIn";
console.log(str.toLowerCase());
console.log(str);
console.log("hdsssss".charCodeAt(0))

console.log(array);
//orderString(array);
console.log(orderString(array));

console.log(array);