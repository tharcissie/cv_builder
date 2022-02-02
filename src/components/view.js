import React from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const View = () => {

  const printDocument = () => {
    const input = document.getElementById('cv');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
  }



  let data = JSON.parse(localStorage.getItem("cv"));
  const cv = data.input
  console.log(data.input)


  return <div>
    <div className='container mt-5'>
      <div className='mb-2'>
        <button className='btn btn-sm btn-success mr-2' onClick={() =>printDocument()}>Download</button>
        <button className='btn btn-sm btn-info'>Share</button>
      </div>
      <div id='cv' className='card p-5'> <div className='row'>
        <div className='col-md-7 p-2'>
          <div className='align-center'>
            <h1 style={{color:"blue"}}><b>{cv.names}</b></h1>
            <p>{cv.email}</p>
            <p>{cv.phone}</p>
            <a href={cv.linkedin}>{cv.linkedin}</a>
          </div>
        </div>
        <div className='col-md-5 p-2'>
        </div>
      </div>
      </div>
    </div>
  </div>;
};

export default View
