import { supabase } from './supabase';

export async function listBucketImages(bucket: string): Promise<string[]> {
  try {
    const { data, error } = await supabase.storage.from(bucket).list('', { limit: 100 });
    if (error) throw new Error(error.message);
    
    return (data ?? [])
      .filter(f => /\.(png|jpe?g|webp|avif|svg)$/i.test(f.name))
      .map(f => supabase.storage.from(bucket).getPublicUrl(f.name).data.publicUrl);
  } catch (error) {
    console.error(`Error fetching images from bucket "${bucket}":`, error);
    return [];
  }
}

export function altFromFilename(url: string): string {
  const filename = url.split('/').pop() || '';
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim() || 'Partner logo';
}