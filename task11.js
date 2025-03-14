let count = 0;

const startMessageInterval = (message) => {
    const intervalId = setInterval(() => {
        console.log(message);
        count++;

        if (count >= 5) {
            clearInterval(intervalId);
        }
    }, 2000);
};

startMessageInterval("This is a two-second delayed message");

