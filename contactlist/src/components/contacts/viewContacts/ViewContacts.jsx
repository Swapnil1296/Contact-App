import React from "react";
import { Link } from "react-router-dom";

const ViewContacts = () => {
  return (
    <>
      <section>
        <div className="view-contact-intro p-3">
          <div className="row ">
            <div className="col">
              <p className="h3 text-danger">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quas ex, officia ducimus illo neque quos sint optio
                porro cumque repudiandae earum error, odit est laborum
                laboriosam corrupti? In, totam?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className=" conatact-img"
              />
            </div>
            <div className="col-md-8 align-items-center">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name:- <span className="fw-bold">Swapnil</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile:- <span className="fw-bold">7385476339</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email:-
                  <span className="fw-bold">Swapnil.langdage@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company:- <span className="fw-bold">INT</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title:-
                  <span className="fw-bold">Developer</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group:-
                  <span className="fw-bold">Pharma</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contact/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContacts;
