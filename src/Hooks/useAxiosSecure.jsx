import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {
 
    const baseURL = import.meta.env.API_URL
   
   const axiosSecure = axios.create({baseURL})
   
   return axiosSecure;
};

export default useAxiosSecure;