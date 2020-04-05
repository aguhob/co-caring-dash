import React from 'react';

const Iframe = ({ title, source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }
    
    const siteTitle = title
    const src = source;     
    return (
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe title = {siteTitle} src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;
