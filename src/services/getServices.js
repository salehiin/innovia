import axios from "axios";

export const getServices = async () => {
    const res = await axios.get('http://localhost:3000/services/api/get-all');
    return res.data;
}

export const getServicesDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const service = res.json()  
    return service;
}

// import axios from "axios";

// export const getServices = async () => {
//   try {
//     const res = await axios.get(
//       `http://localhost:3000/services/api/get-all`
//     );
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// export const getServicesDetails = async (id) => {
//   try {
//     const res = await axios.get(
//       `http://localhost:3000/services/api/${id}`
//     );
//     return res.data;
//   } catch (error) {
//     return {};
//   }
// };