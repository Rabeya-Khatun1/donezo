import React from 'react';
import SectionHeader from '../../headers/SectionHeaders';
import { Plus, ShieldCheck, Zap, LayoutDashboard, Globe } from 'lucide-react';
import Button from '../../buttons/Buttons';

const Products = ({ products }) => {
    const iconStyles = [
        { icon: <ShieldCheck size={24} />, color: 'text-blue-600', bg: 'bg-blue-50' },
        { icon: <Zap size={24} />, color: 'text-amber-500', bg: 'bg-amber-50' },
        { icon: <LayoutDashboard size={24} />, color: 'text-purple-600', bg: 'bg-purple-50' },
        { icon: <Globe size={24} />, color: 'text-orange-600', bg: 'bg-orange-50' }
    ];

    return (
        <div className="col-span-4 bg-white rounded-2xl p-5 border border-gray-50">
            <div className="flex justify-between items-center mb-6">
                <SectionHeader>Products</SectionHeader>
                <Button
                    variant="secondary"
                    icon={Plus}
                    text="New"
                    className="w-18 h-7 lg:h-8 px-3 text-[10px] lg:text-xs rounded-full "
                    onClick={() => console.log("New Product")}
                />
            </div>

            <div className="space-y-6">
                {products?.map((product, index) => {
                    const style = iconStyles[index % iconStyles.length];

                    return (
                        <div key={product.id} className="flex items-center gap-4">
                            <div className={` rounded-xl ${style.color}`}>
                                {style.icon}
                            </div>

                            <div>
                                <p className="text-xs font-bold leading-tight text-gray-800">
                                    {product.name}
                                </p>
                                <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">
                                    Sales: {product.sales} | Price: ${product.price}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;