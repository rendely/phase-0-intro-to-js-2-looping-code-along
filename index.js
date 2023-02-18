function writeCards(names, giftType){
  const thankYous = [];
  for (let i = 0; i < names.length; i++){
    thankYous.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
  }
  return thankYous;
}

function countDown(n){
  while (n >= 0){
    console.log(n);
    n--;
  }
}