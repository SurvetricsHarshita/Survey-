

function Q9Consent() {
  const qrCodeUrl = "/we.jpg"; // Replace with actual QR code URL

  return (
    <div className=" absolute  ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-30 max-w-20">
     
  
      <img 
  src={qrCodeUrl} 
  alt="QR Code" 
  style={{ width: '200px', height: '200px' }} 
  className="object-contain border border-gray-300 rounded-md"
/>

   
      </div>
    </div>
  );
}

export default Q9Consent;
