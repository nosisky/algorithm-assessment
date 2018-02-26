const compareTriplet = (rating1, rating2) => {

  let bob = 0;
  let alice = 0;

  rating1.map((score, index) => {
    const greater = Math.max(score, rating2[index]);

    if (score !== rating2[index]) {
      if (rating1.indexOf(greater) > -1) {
        bob += 1;
      } else {
        alice += 1;
      }
    }
  })

  return [bob, alice];
}

compareTriplet([1, 2, 3, 6, 10], [1, 2, 3, 10, 11])
