import React from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import './css/style.css'
import {
  LinkedinShareButton, LinkedinIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon
} from "react-share";

const View = () => {

  const printDocument = () => {
    const input = document.getElementById('cv');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      });
  }

  const currentURL = window.location.href
  console.log(currentURL)

  let data = JSON.parse(localStorage.getItem("cv"));
  const cv = data.input
  console.log(data.input)


  return <div>
    <div className='container mt-5'>
      <div className='mb-2'>
        <button className='btn btn-sm btn-info mr-2' onClick={() => printDocument()}><i className="fas fa-download"></i>Download</button>
        <button className='btn btn-sm btn-success mr-2' data-toggle="modal" data-target="#exampleModal" ><i className="fas fa-share"></i>Share</button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Share With</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <TwitterShareButton
                className='mr-3'
                  url={currentURL}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton
                className='mr-3'
                  url={currentURL}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton
                  url={currentURL}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-9'>
          <div id='cv' className='card'>
            <div className='row'>
              <div className='col-md-7 p-5 '>
                <div className='profile'>
                  <h1 className='name'><b>{cv.names}</b></h1>
                  <div className='ml-5'>
                    <p><i className="far fa-envelope-open"></i> {cv.email}</p>
                    <p><i className="fas fa-phone"></i> {cv.phone}</p>
                    <a href={cv.linkedin}><i className="fab fa-linkedin text-dark"></i> {cv.linkedin}</a>
                  </div>
                </div>

                <div className='work'>
                  <h6 className='text-uppercase'><i className="fas fa-user-graduate"></i> <b>Educational Backgroound</b></h6>
                  <div className='row mt-4'>
                    <div className='col-4 date'>
                      <p>{cv.enter} - {cv.leave}</p>
                    </div>
                    <div className='col-1'><i className="far fa-dot-circle"></i></div>
                    <div className='col-7'>
                      <p className='text-uppercase'><b>{cv.school}</b></p>
                      <p> <small>{cv.course}</small></p>
                      <p>{cv.des1}</p>

                    </div>

                  </div>
                  {cv.school1 ? <div className='row mt-4'>
                    <div className='col-4 date'>
                      <p>{cv.enter1} - {cv.leave1}</p>
                    </div>
                    <div className='col-1'><i className="far fa-dot-circle"></i></div>
                    <div className='col-7'>
                      <p className='text-uppercase'><b>{cv.school1}</b></p>
                      <p> <small>{cv.course1}</small></p>
                      <p>{cv.des2}</p>
                    </div>
                  </div> : null}
                </div>

                <div className='experience mt-5'>
                  <h6 className='text-uppercase'><i className="fas fa-user-graduate"></i> <b>Experience</b></h6>
                  <div className='row mt-4'>
                    <div className='col-4 date'>
                      <p>{cv.start} - {cv.end}</p>
                    </div>
                    <div className='col-1'><i className="far fa-dot-circle"></i></div>
                    <div className='col-7'>
                      <p className='text-uppercase'><b>{cv.company}</b></p>
                      <p> <small>{cv.job}</small></p>
                      <p>{cv.des3}</p>
                    </div>

                  </div>
                  {cv.company1 ? <div className='row mt-4'>
                    <div className='col-4 date'>
                      <p>{cv.start1} - {cv.end1}</p>
                    </div>
                    <div className='col-1'><i className="far fa-dot-circle"></i></div>
                    <div className='col-7'>
                      <p className='text-uppercase'><b>{cv.company1}</b></p>
                      <p> <small>{cv.job1}</small></p>
                      <p>{cv.des4}</p>
                    </div>
                  </div> : null}
                </div>

              </div>
              <div className='col-md-5 p-5 left'>
                <i className="fas fa-quote-left quote"></i>
                <p className='p-4'>{cv.summary}</p>
                <i className="fas fa-quote-right quote"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default View
