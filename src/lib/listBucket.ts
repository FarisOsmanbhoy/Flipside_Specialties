import { supabase } from './supabase';

export async function listBucketImages(bucket: string) {
  const { data, error } = await supabase.storage.from(bucket).list('', { limit: 200 });
  if (error) throw new Error(error.message);
  return (data ?? [])
    .filter(f => /\.(png|jpe?g|webp|avif|svg)$/i.test(f.name))
    .map(f => supabase.storage.from(bucket).getPublicUrl(f.name).data.publicUrl);
}

export function altFromFilename(name: string) {
  return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
}