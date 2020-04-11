import React from "react";

const EstimatorForm = () => {
  return (
    <div className="container-sm">
      <p className="my-4 text-center font-weight-bold">
        Fill the form to Estimate
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="region">Region</label>
          <input type="text" className="form-control" id="region" />
        </div>
        <div className="form-group">
          <label htmlFor="average-age">Average Age</label>
          <input type="text" className="form-control" id="average-age" />
        </div>
        <div className="form-group">
          <label htmlFor="average-daily-income-usd">
            Average Daily Income in USD
          </label>
          <input
            type="text"
            className="form-control"
            id="average-daily-income-usd"
          />
        </div>
        <div className="form-group">
          <label htmlFor="average-daily-income-population">
            Average Daily Income of Population
          </label>
          <input
            type="text"
            className="form-control"
            id="average-daily-income-population"
          />
        </div>
        <div className="form-group">
          <label htmlFor="population">Population</label>
          <input
            type="text"
            className="form-control"
            id="population"
            data-population
          />
        </div>
        <div className="form-group">
          <label htmlFor="period-type">Period Type</label>
          <select className="form-control" id="period-type" data-period-type>
            <option>Days</option>
            <option>Weeks</option>
            <option>Months</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time-to-elapse">Time To Elapse</label>
          <input
            type="text"
            className="form-control"
            id="time-to-elapse"
            data-time-to-elapse
          />
        </div>
        <div className="form-group">
          <label htmlFor="reported-cases">Reported Cases</label>
          <input
            type="text"
            className="form-control"
            id="reported-cases"
            data-reported-cases
          />
        </div>
        <div className="form-group">
          <label htmlFor="total-hospital-beds">Total Hospital Beds</label>
          <input
            type="text"
            className="form-control"
            id="total-hospital-beds"
            data-total-hospital-beds
          />
        </div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          data-go-estimate
        >
          Estimate
        </button>
      </form>
    </div>
  );
};

export default EstimatorForm;
