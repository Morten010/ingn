export async function upload(file: File) {


  const form = new FormData();

  form.append('fileUpload', file);

  // It is not recommended to use the HYGRAPH_ASSET_TOKEN in the Front-End.
  // In this example we're using it, but in a real application you should
  // use a backend to upload the file and use the HYGRAPH_ASSET_TOKEN there.
  const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    body: form,
  });

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
  return {
    data
  }
}