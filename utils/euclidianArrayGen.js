export default function euclidianArrayGen(segmentsAmount, stepsAmount) {
  let array1 = [];
  let array2 = [];

  for (let i = 0; i < segmentsAmount; i++) {
    if (i < stepsAmount) {
      array1.push("1");
    } else {
      array2.push("0");
    }
  }
  let j = 1;
  while (array2.length > 0) {
    let new1 = [];
    let new2 = [...array2];
    let new3 = [];
    for (let i = 0; i < array1.length; i++) {
      if (new2[0]) {
        new1.push(array1[i] + new2[0]);
        new2.splice(0, 1);
      } else {
        new3.push(array1[i]);
      }
    }
    array1 = new1;
    array2 = new2.concat(new3);
    j++;
  }

  let binaryStrings = array1.join("").split("");

  let euclidianArray = [];

  for (let i = 0; i < binaryStrings.length; i++) {
    if (binaryStrings[i] === "1") {
      euclidianArray.push(i);
    }
  }

  return euclidianArray;
}
