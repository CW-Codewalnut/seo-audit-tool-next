import axios from "axios";

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_BASE_URL = process.env.NEXT_PUBLIC_APITABLE_BASE_URL;
const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const TableData = async (company: string) => {
  const response = await axios.get(`${AIRTABLE_BASE_URL}${BASE_ID}/${company}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return response;
};

export const DownloadPDF = async (company: string) => {
  const response = await axios.get(
    `${BACKEND_BASE_URL}/generate-pdf?queryParam1=${company}`,
    { responseType: 'arraybuffer' }
  );
  return response;
};
