export default function myInclude() {
  let myArray = [1,2,3,4,5,6];
  myArray.map((item, index) => {
    console.log(`include,第${index}项的值为：${item}`);
  })
}