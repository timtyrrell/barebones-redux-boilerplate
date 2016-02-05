const SomethingFetcher = {
  fetch: (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({text: text});
      }, 2000);
    });
  },
};

export default SomethingFetcher;
