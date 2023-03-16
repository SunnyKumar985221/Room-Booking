import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setinfo] = useState({});
  const handleClick = (e) => {
    setinfo((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    console.log(info.username);
  }
  const submit = async (e)=> {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("username" , info.username);
    formdata.append("email" , info.email);
    formdata.append("password" , info.password);
    formdata.append("image", file);
    await axios.post("/auth/register" , formdata)

  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Name</label>
                <input onChange={handleClick} name="username" type="text" placeholder="Name" />
              </div>

              <div className="formInput">
                <label>Phone Number</label>
                <input onChange={handleClick} name="password" type="text" placeholder="password" />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input onChange={handleClick} name="email" type="text" placeholder="Email" />
              </div>

              


              <button onClick={submit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
