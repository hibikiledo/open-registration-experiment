import redis from 'redis';
import nanoexpress from 'nanoexpress';

const app = nanoexpress();

const client = redis.createClient({
  host: process.env.REDIS_HOST
})

app.get('/', (req, res) => {
  return res.send({ status: 'ok' });
});

app.get('/redis', async (req, res) => {
  const value = await new Promise((resolve, reject) => {
    client.incr('31', (err, reply) => {
      if (err) reject(err)
      else resolve(reply)
    })
  })
  res.send({ value })
})

app.listen(3000);
