import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({ region: process.env.AWS_REGION });
const LABEL_BUCKET_NAME = process.env.S3_LABEL_BUCKET_NAME;

export async function uploadLabelFile(key, body, contentType) {
  const command = new PutObjectCommand({
    Bucket: LABEL_BUCKET_NAME,
    Key: key,
    Body: body,
    ContentType: contentType,
  });

  await s3Client.send(command);
}

export async function getLabelFile(key) {
  const command = new GetObjectCommand({
    Bucket: LABEL_BUCKET_NAME,
    Key: key,
  });

  const response = await s3Client.send(command);
  return streamToBuffer(response.Body);
}

export async function getSignedLabelUrl(key, expiresIn = 3600) {
  const command = new GetObjectCommand({
    Bucket: LABEL_BUCKET_NAME,
    Key: key,
  });
  return getSignedUrl(s3Client, command, { expiresIn });
}

async function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}
