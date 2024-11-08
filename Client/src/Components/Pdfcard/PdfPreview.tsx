import React from 'react';

const PdfPreview = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',

        }}>
   <iframe
                src="https://gandrille.github.io/tech-notes/Web_Design/TypeScript/2019%20typescript%20deep%20dive.pdf" // Replace with your PDF file path
                width="100%"
                height="750px"
                title="PDF Viewer"
            />
        </div>
    );
};

export default PdfPreview;
