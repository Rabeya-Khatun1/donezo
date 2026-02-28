import React from 'react';
import { Plus, User as UserIcon } from 'lucide-react';
import Button from '../../buttons/Buttons';
import SectionHeader from '../../headers/SectionHeaders';

const User = ({ users }) => {

    const getStatusStyle = (status) => {
        if (status === 'active') {
            return 'bg-[#f0f9f4] text-[#4caf50] border-[#e8f5e9]';
        }
        return 'bg-[#fff5f5] text-[#ff5252] border-[#ffebee]';
    };

    const avatarStyles = [
        'bg-[#ffcdd2]',
        'bg-[#dcedc8]',
        'bg-[#c5cae9]',
        'bg-[#ffecb3]',
        'bg-[#e1bee7]'
    ];

    return (
        <div className="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 w-full overflow-hidden">
            <div className="flex justify-between items-center mb-4 md:mb-3 gap-2">
                <SectionHeader>Team Collaboration</SectionHeader>
                <Button
                    variant="secondary"
                    icon={Plus}
                    text="Add Member"
                    iconSize={14}
                    className="w-24 md:w-32 h-8 text-[10px] md:text-xs text-[#2d5a4c] px-2 flex-shrink-0"
                    onClick={() => console.log("Adding Member")}
                />
            </div>

            <div className="space-y-2">
                {users?.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between group gap-2">
                        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-[2px] md:border-[3px] border-white shadow-sm overflow-hidden flex-shrink-0 ${avatarStyles[index % avatarStyles.length]}`}>
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}&backgroundColor=transparent`}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="flex flex-col min-w-0">
                                <h3 className="text-sm md:text-[16px] text-gray-900 leading-tight font-medium truncate">
                                    {user.name}
                                </h3>
                                <p className="text-[9px] md:text-xs text-gray-400 truncate">
                                    Joined on{" "}
                                    <span className="text-gray-600">
                                        {new Date(user?.joinDate).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={`px-2 py-0.5 rounded-lg text-[9px] md:text-[11px] font-bold border capitalize flex-shrink-0 transition-all ${getStatusStyle(user.status)}`}>
                            {user.status === 'active' ? 'Active' : 'Inactive'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;