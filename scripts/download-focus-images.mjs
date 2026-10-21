import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import https from 'node:https';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/images/focus');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToDownload = [
  {
    name: 'ai-workflows.webp',
    // Unsplash: Artificial Intelligence, Deep Learning & Code Neural Networks
    url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&auto=format&fit=crop&q=80',
    description: 'Artificial Intelligence & Agent Workflows',
  },
  {
    name: 'cybersecurity.webp',
    // Unsplash: Cybersecurity & Digital Network Defense
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80',
    description: 'Cybersecurity & Web Security Systems',
  },
  {
    name: 'robotics-hardware.webp',
    // Unsplash: Real Microcontroller, Arduino Wiring & Breadboard
    url: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=900&auto=format&fit=crop&q=80',
    description: 'Robotics & Hardware Microcontroller Systems',
  },
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading real non-AI photographs for Focus Areas...');
  for (const item of imagesToDownload) {
    try {
      console.log(`Fetching ${item.description}...`);
      const buffer = await fetchBuffer(item.url);
      const targetPath = path.join(outputDir, item.name);
      await sharp(buffer)
        .resize(800, 600, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(targetPath);
      console.log(`Saved: ${targetPath}`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err.message);
    }
  }
}

run();

