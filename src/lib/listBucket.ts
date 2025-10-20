import { supabase } from './supabase';

export async function listBucketImages(bucket: string, subfolder: string = '') {
  console.log('🔍 Attempting to list images from bucket:', bucket);
  console.log('📁 Looking in subfolder:', subfolder || 'root');

  const { data, error } = await supabase.storage.from(bucket).list(subfolder, { limit: 200 });

  console.log('📦 Raw data from Supabase:', data);
  console.log('❌ Error from Supabase:', error);

  if (error) {
    console.error('Storage error:', error);
    throw new Error(error.message);
  }

  const filteredFiles = (data ?? [])
    .filter(f => f.name && /\.(png|jpe?g|webp|avif|svg)$/i.test(f.name))

  console.log('🖼️ Filtered image files:', filteredFiles);

  const publicUrls = filteredFiles.map(f => {
    const filePath = subfolder ? `${subfolder}/${f.name}` : f.name;
    const publicUrl = supabase.storage.from(bucket).getPublicUrl(filePath).data.publicUrl;
    console.log('🔗 Generated URL for', f.name, ':', publicUrl);
    return publicUrl;
  });

  console.log('✅ Final URLs array:', publicUrls);
  console.log('✅ Total logos found:', publicUrls.length);
  return publicUrls;
}

export function altFromFilename(name: string) {
  return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
}