import React from 'react';

function Card({ title, icon, onClick }) {
    const iconElement = React.cloneElement(icon, {
        className: `${icon.props?.className || ''} w-8.75 h-8.75 p-1.25 absolute bottom-2.25 right-2.25 stroke-[#585858]`.trim()
    });

    return (
        <div className="card h-50 p-3.75 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] transition-all duration-300 ease-in-out" onClick={onClick}>
            <p className="text-[17px] text-[#585858]">{title}</p>
            {iconElement}
        </div>
    );
}

export default Card;