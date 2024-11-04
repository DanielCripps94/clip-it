export const uploadVideo = async (acceptedFiles: File[]) => {
  const file = acceptedFiles[0];
  const formData = new FormData();

  formData.append("file", file);
  formData.append("title", "My Video Title");
  formData.append("description", "My Video Description");
  formData.append("published", "true");

  try {
    const response = await fetch("/api/videos/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Uploaded video data:", data);
    } else {
      const errorData = await response.json();
    }
  } catch (error) {
    console.error("Error uploading video:", error);
  } finally {
  }
};
