import axios from "axios";

const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const startDownloadPDF = async (company: string) => {
    const response = await axios.get(
      `${BACKEND_BASE_URL}/generate-pdf?queryParam1=${company}`,
      { responseType: 'arraybuffer' }
    );
    return response;
  };