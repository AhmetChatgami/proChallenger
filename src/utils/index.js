import axios from "axios";

export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    formData,
  );

  return data.data.display_url;
};


// update user info in DB

export const saveOrUpdateUser = asyc (userData)=>{
  const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/user`, userData)

  return data;
}