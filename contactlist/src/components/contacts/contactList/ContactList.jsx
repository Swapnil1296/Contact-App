import React from 'react';
import {Link} from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const ContactList = () => {
  return (
    <>
      <section className="contact-search">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Contact Manager
                  <Link to={'/contact/add'} className="btn btn-primary ms-2">
                    <AddCircleOutlineIcon />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error, voluptatibus quas consequatur commodi pariatur itaque.
                  Est repellendus beatae maxime maiores commodi. Consequatur
                  aspernatur ad possimus quidem dignissimos neque amet
                  repellendus?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form action="" className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="col-md-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                      className=" conatact-img"
                    />
                  </div>
                  <div className="col-md-7">
                    <ul className='list-group'></ul>
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
