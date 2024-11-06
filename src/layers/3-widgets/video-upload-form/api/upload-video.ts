export const uploadVideo = async (data: any) => {
  console.log("Uploading video data:", data);
  const { title, description, file } = data;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("title", title);
  formData.append("description", description);
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
