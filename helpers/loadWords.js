const axios = require('axios');

module.exports = () => {
  return new Promise((resolve, reject) => {

    const loadNoun = () => axios.get('http://free-generator.ru/generator.php?action=word&type=1');
    const loadAdjective = () => axios.get('http://free-generator.ru/generator.php?action=word&type=2');

    Promise.all([loadNoun(), loadAdjective()])
      .then(data => {
        const word1 = data[0].data.word.word;
        const word2 = data[1].data.word.word;

        resolve([word1, word2]);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      })
  });
}
