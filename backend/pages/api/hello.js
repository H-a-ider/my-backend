import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'HEAD', 'POST', 'DELETE'], // Allow specified methods
});

// Helper function to run the middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Running the CORS middleware
  await runMiddleware(req, res, cors);

  // My API logic
  const name = process.env.NAME || "Guest";
  res.status(200).json({ message: `Hello ${name}` });
}
