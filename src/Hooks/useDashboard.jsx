import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useDashboard = () => {

    const axisoSecure = useAxiosSecure();

    const { data: dashboard = [], isLoading: loading, isError: error } = useQuery({
        queryKey: ["overview"],
        queryFn: async () => {
            const res = await axisoSecure.get("https://task-api-eight-flax.vercel.app/api/dashboard")
// console.log("res is", res)
            return res?.data;
        }
    })

    return { dashboard, loading, error }
};

export default useDashboard;