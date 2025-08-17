import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row text-left">
          
          {/* Address */}
          <div className="col-md-4 mb-3">
            <ul className="list-unstyled">
              <li><b>Address:</b></li>
              <li>West Shewrapara, Mirpur, Dhaka-1216</li>
            </ul>
          </div>

          {/* Empty Column (optional) */}
          <div className="col-md-4 mb-3">
            {/* You can put something here later */}
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-3">
            <ul className="list-unstyled">
              <li><b>Follow Us:</b></li>
              <li className="mt-2 d-flex justify-content-around">
                <a className="text-white mr-3" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a className="text-white ml-3 d-inline-block" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a className="text-white" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} NeedSite Zone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
