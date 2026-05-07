import { useState } from 'react';

const FormLayouts = () => {
  const [activeForm, setActiveForm] = useState('vertical');

  return (
    <div>
      <div className="page-header"><h2>Bootstrap Form Layouts</h2></div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button className={`nav-link ${activeForm === 'vertical' ? 'active' : ''}`}
            onClick={() => setActiveForm('vertical')}>Vertical</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeForm === 'horizontal' ? 'active' : ''}`}
            onClick={() => setActiveForm('horizontal')}>Horizontal</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeForm === 'inline' ? 'active' : ''}`}
            onClick={() => setActiveForm('inline')}>Inline</button>
        </li>
      </ul>

      {activeForm === 'vertical' && (
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
      {activeForm === 'horizontal' && (
        <form>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      )}
      {activeForm === 'inline' && (
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hidden">Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-12">
            <label className="visually-hidden">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};
export default FormLayouts;

