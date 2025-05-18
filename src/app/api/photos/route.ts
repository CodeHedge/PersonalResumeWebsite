import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public/photos');
    const files = fs.readdirSync(photosDirectory);

    const photos = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      })
      .map(file => ({
        name: file,
        src: `/photos/${file}`
      }));

    return NextResponse.json(photos);
  } catch (error) {
    console.error('Error reading photos directory:', error);
    return NextResponse.json({ error: 'Failed to load photos' }, { status: 500 });
  }
} 