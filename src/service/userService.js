import axios from "axios";

export const getUserData = async () => {
  try {
    const response = await axios.get("/public/mock/userDataMock.json");
    return response.data;
  } catch (error) {
    console.error('Error al capturar los datos de usuario', error)
    throw error;
  }
};
