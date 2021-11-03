for(let i = 1; i <= 15; i++) {
  if(i % 5 ===0 && i % 3 === 0) {
    console.log(`${i}: fizz buzz`)
  } else if(i % 5 === 0) {
    console.log(`${i}: buzz`)
  } else if(i % 3 === 0) {
    console.log(`${i}: fizz`)
  } else {
    console.log(i)
  }
}


console.log(0 % 5);