// const { Readable } = require('stream');

// const generateDataStream = () => {
//   let previousValue: any = null;
//   let changeOccurred: any = false;

//   return new Readable({
//     objectMode: true,
//     read() {
//       // Simulate a data stream with random values
//       const newValue = Math.floor(Math.random() * 100);

//       if (previousValue !== null && newValue !== previousValue) {
//         changeOccurred = true; // Stop condition
//       }

//       previousValue = newValue;

//       if (changeOccurred) {
//         this.push(null); // End the stream
//       } else {
//         this.push(newValue);
//       }
//     }
//   });
// };

// const processStreamData = async (stream: any) => {
//   return new Promise((resolve) => {
//     stream.on('data', (chunk: any) => {
//       console.log(`Processing: ${chunk}`);
//       process.nextTick(() => recursiveProcess(stream, chunk));
//     });

//     stream.on('end', () => {
//       console.log('Stream ended.');
//       resolve(0);
//     });
//   });
// };

// const recursiveProcess = (stream: any, lastValue: any) => {
//   stream.once('data', (currentValue: any) => {
//     if (currentValue !== lastValue) {
//       console.log(`Value changed from ${lastValue} to ${currentValue}. Stopping recursion.`);
//       stream.push(null); // End the stream manually
//       return;
//     }

//     console.log(`Value remains the same: ${currentValue}. Recursing...`);
//     process.nextTick(() => recursiveProcess(stream, currentValue));
//   });
// };

// // Initialize the stream
// const stream = generateDataStream();

// // Start processing the stream
// processStreamData(stream).then(() => {
//   console.log('Processing completed.');
// });

const fn1 = (...a: [number, string]) => {
  return (...b: any[]) => {
    fn2(...a)
  }
}

const fn2 = (d: number, c: string) => {

}

const c = fn1(1, "2");
c(5)