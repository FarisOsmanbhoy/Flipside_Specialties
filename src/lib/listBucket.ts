import { supabase } from './supabase';

export async function listBucketImages(bucket: string) {
  console.log('🔍 Attempting to list images from bucket:', bucket);
  
  const { data, error } = await supabase.storage.from(bucket).list('', { limit: 200 });
  
  console.log('📦 Raw data from Supabase:', data);
  console.log('❌ Error from Supabase:', error);
  
  if (error) throw new Error(error.message);
  
  const filteredFiles = (data ?? [])
    .filter(f => /\.(png|jpe?g|webp|avif|svg)$/i.test(f.name))
  
  console.log('🖼️ Filtered image files:', filteredFiles);
  
  const publicUrls = filteredFiles.map(f => {
    const publicUrl = supabase.storage.from(bucket).getPublicUrl(f.name).data.publicUrl;
    console.log('🔗 Generated URL for', f.name, ':', publicUrl);
    return publicUrl;
  });
  
  console.log('✅ Final URLs array:', publicUrls);
  return publicUrls;
}

export function altFromFilename(name: string) {
  return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
}