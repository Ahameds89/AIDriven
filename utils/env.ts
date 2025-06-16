import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

const ENV = process.env.ENV || 'dev';
const envPath = path.resolve(process.cwd(), `.env.${ENV}`);

// Check if env file exists
if (!fs.existsSync(envPath)) {
  throw new Error(`Environment file not found: .env.${ENV}. Please create this file with required variables.`);
}

const result = dotenv.config({ path: envPath });

if (result.error) {
  throw new Error(`Failed to load environment file .env.${ENV}: ${result.error.message}`);
}

interface EnvConfig {
  username: string;
  password: string;
  baseURL: string;
}

// Get variables from the loaded .env file
const config: EnvConfig = {
  username: result.parsed?.USERNAME || '',
  password: result.parsed?.PASSWORD || '',
  baseURL: result.parsed?.BASE_URL || '',
};

export { config };