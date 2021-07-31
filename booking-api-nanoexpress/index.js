import redis from 'redis';
import nanoexpress from 'nanoexpress';

const app = nanoexpress();

const client = redis.createClient({
  host: process.env.REDIS_HOST
})

app.get('/', (req, res) => {
  return res.send({ status: 'ok' });
});

app.get('/redis', (req, res) => {
  client.incr('31', (err, reply) => {
    res.send({ value: reply });
  })
})

app.listen(3000);
