import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aOmIIJ9Cr0d88wDB0Of_mhGjBF0vwGhiiIvaHqGELWQ",
  },
});
