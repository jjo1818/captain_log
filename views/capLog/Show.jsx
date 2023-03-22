import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  console.log(props)
  return (
    <DefaultLayout>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Title: {props.caplog.title}</h1>
        <h1>Entry: {props.caplog.entry}</h1>
        <h1>USS Jennifer: {props.caplog.shipIsBroken}</h1>{props.caplog.shipIsBroken ? 'is NOT broken' : 'is broken'}
        <br />
        <br />
        <div className="d-flex">
          <a href={`/caplog/${props.caplog._id}/edit`}>
            <button className="btn btn-outline-primary">Edit</button>
          </a>
          <form
            action={`/caplog/${props.caplog._id}?_method=DELETE`}
            method="POST"
          >
            <button className="btn btn-outline-danger mx-5">Delete</button>
          </form>
          <a href="/caplog">
            <button className="btn btn-outline-dark">Back</button>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;