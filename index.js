function demoPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10);
      console.log(`Generated number: ${randomNumber}`);
  
      if (randomNumber >= 5) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
  
  async function runDemo() {
    try {
      const results = await Promise.all([
        demoPromise(),
        demoPromise()
      ]);
  
      console.log('All promises resolved:', results);
    } catch (error) {
      console.log('One or more promises rejected:', error);
    } finally {
      console.log('Finished processing promises');
    }
  }
  
  runDemo();
  