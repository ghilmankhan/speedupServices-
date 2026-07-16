import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import contactRoutes from './routes/contact.js';

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim()).filter(Boolean)
  : process.env.NODE_ENV === 'production'
    ? ['https://speedupservices.com', 'https://www.speedupservices.com']
    : ['http://localhost:3000', 'http://localhost:5173'];

app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ limit: '100kb', extended: true }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', contactRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email provider: ${process.env.EMAIL_USER || 'Not configured'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  WARNING: Email credentials not configured. Contact form will not work.');
  }
  if (!process.env.CONTACT_RECEIVER) {
    console.warn('⚠️  WARNING: Contact receiver email not configured.');
  }
});
