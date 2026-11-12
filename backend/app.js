// import express from 'express';
// import cors from 'cors';
// import { fileURLToPath } from 'url';
// import path from 'path';
// import routes from './routes/index.js';
// import errorHandler from './middleware/errorHandler.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Health check route
// app.get('/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

// app.use('/api', routes);
// app.use(errorHandler);

import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Do not advertise the framework in the X-Powered-By response header.
app.disable('x-powered-by');

// Origins allowed to call this API from a browser.
// Set CORS_ORIGINS to a comma-separated list, e.g.
//   CORS_ORIGINS=https://app.example.com,https://admin.example.com
// The defaults are the local frontend dev ports.
const DEFAULT_ORIGINS = ['http://localhost:3000', 'http://localhost:5173'];
const allowedOrigins = (process.env.CORS_ORIGINS || DEFAULT_ORIGINS.join(','))
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    // Requests with no Origin header (curl, server-to-server, same-origin) are not browser
    // cross-origin requests, so CORS does not apply to them.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Unlisted origin: no CORS headers are sent, so the browser blocks the response.
    return callback(null, false);
  },
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
import routes from './routes/index.js';
app.use('/api', routes);

export default app;

// app.use(errorHandler);

// export default app;
