document.addEventListener('DOMContentLoaded', function() {

  // By default, submit button is disabled
  document.querySelector('#submit').disabled = true;
  document.querySelector('#currency').onkeyup = () => {
    if (document.querySelector('#currency').value.length > 0) {
      document.querySelector('#submit').disabled = false;
    } else {
      document.querySelector('#submit').disabled = true;
    }
  }

  document.querySelector('form').onsubmit = function() {
    fetch("https://cdn.cur.su/api/latest.json")
    .then(response => response.json())
    .then(data => {
      const currency = document.querySelector('#currency').value.toUpperCase();
      const rate = data.rates[currency];

      if (rate !== undefined) {
        document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;
      } else {
        document.querySelector('#result').innerHTML = 'Invalid currency';
      }

    })
    .catch(error => {
      console.log('Error:', error);
    });

    document.querySelector('#currency').value = '';

    return false;
  }

});