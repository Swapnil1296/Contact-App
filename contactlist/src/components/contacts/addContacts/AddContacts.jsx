import React from "react";
import { Link } from "react-router-dom";

const AddContacts = () => {
  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col p-3">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className="fs-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat voluptatem magni fugiat officiis quas dolorem placeat
                quis natus facilis velit quisquam aperiam debitis qui, similique
                dignissimos ut, excepturi delectus! Libero.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Photo Url" />
                </div>
                <div className="mb-2">
                  <input type="number" className="form-control" placeholder="Mobile" />
                </div>
                <div className="mb-2">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Company" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Title" />
                </div>
                <div className="mb-2">
                 <select className="form-control">
                  <option value="">Select a Group</option>
                 </select>
                </div>
                <div className="mb-2">
                  <input type="submit" className="btn btn-success" value="Create"/>
                  <Link to={'/contact/list'} className="ms-2 btn btn-dark">Cancel</Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddContacts;
