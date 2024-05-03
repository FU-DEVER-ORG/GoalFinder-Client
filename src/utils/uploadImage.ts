import { constants } from '@/settings';

export const UploadImage = async (files: any) => {
  const formData = new FormData();
  formData.append('upload_preset', 'w4v0dgza');
  for (const file of files) {
    formData.append('file', file);
  }
  const data = await fetch(constants.ASSETS_URL, {
    method: 'POST',
    body: formData,
  }).then((r) => r.json());
  return data?.url;
};
