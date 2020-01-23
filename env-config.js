const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-poch.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-poch.herokuapp.com',
  'process.env.CLIENT_ID': 'CppsZcIhy8gz2J7023tQHcHk8VqMfF7Q'
}