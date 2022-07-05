const alarmArray = process.argv.slice(2);

const alarm = (givenArray) => {
  if (givenArray.length === 0) {
    return;
  }

  for (const g of givenArray) {
    let alarmTime = Number(g);
    if (Number.isFinite(alarmTime) && alarmTime >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        // console.log('boop');

      }, alarmTime);
    }
  }
};
alarm(alarmArray);
