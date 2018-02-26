const marsExploration = (signalStrength) => {
  signalStrength = signalStrength.toLowerCase().split('');

  const result = signalStrength.filter((signal) => {
    return signal !== 's' && signal !== 'o'
  })

  if (!result.length) {
    return 0;
  }
  return result.length;
}

marsExploration('SOSSOSSOS')
