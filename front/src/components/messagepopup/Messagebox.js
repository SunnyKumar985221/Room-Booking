import React from "react";
import "./messagebox.css";
const Messagebox = ({ props }) => {
  return (
    <>
      {props == "message" && <div className="message"> </div>}
      {props == "message2" && <div className="message">Messagebox2</div>}
      {props == "message3" && <div className="message">Messagebox3</div>}
      {props == "notification" && (
        <div className="message">
          <div className="messagebox">
            <div className="headermessage">
              <span>Notification</span>
              <span>Clear all</span>
            </div>
            <div className="bodymessage">
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
              <p>sadasdsasadsf sssssssssssssssssss sssssssssss sssssssssssss sssssss sssssssssss ssssssssssss</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Messagebox;
