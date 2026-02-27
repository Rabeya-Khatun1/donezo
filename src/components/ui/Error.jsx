import { AlertTriangle } from "lucide-react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-60 text-center">
      <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
      
      <h2 className="text-lg font-semibold text-gray-800">
        Something went wrong
      </h2>
      
      <p className="text-gray-500 mt-1">
        Please try again later.
      </p>
    </div>
  );
};

export default Error;