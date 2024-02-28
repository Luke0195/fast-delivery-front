export async function urlToFIle(url: string) {
  const response = await fetch(url)
  // Convert data to blob
  const data = await response.blob()

  const mime = data.type // getMimiType;
  const fileExtension = mime.slice(mime.indexOf('/' + 1, mime.length))
  const metadata = {
    type: mime,
  }
  const file = new File([data], `file.${fileExtension}`, metadata)
  return file
}
