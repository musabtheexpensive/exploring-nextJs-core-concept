import React from 'react';

const DynamicPage = ({params,searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This Is Dynamic Page:{params.id}</h1>
            <h1>SearchBy:{searchParams.category}</h1>
            
        </div>
    );
};

export default DynamicPage;