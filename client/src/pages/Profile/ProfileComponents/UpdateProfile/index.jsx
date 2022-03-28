import React, { useEffect, useState } from "react";
import {
  getMyProfile,
  updateMyProfile,
} from "../../../../actions/profile.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../shared/Spinner";
const UpdateProfile = () => {
  const dispatch = useDispatch();

  const [Form, setForm] = useState({
    bio: "",
    birthday: "",
  });
  const onInputChange = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode

    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };

  //call  auth action and send data from th form
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(updateMyProfile(Form));
    //ba3ed maykamel yraja formul fer8a
    setForm({
      ...Form,
      bio: "",
      birthday: "",
    });
  };
  const { isLoading } = useSelector((state) => {
    return state.profileReducers;
  });
  return isLoading ? (
    <Spinner />
  ) : (
    <div className=" col-lg-6 central-meta  editing-info">
      <h5 className="f-title">
        <i className="ti-info-alt"></i> Edit Basic Information
      </h5>

      <form onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group half">
          <input type="text" id="input" />
          <label className="control-label" htmlFor="input">
            First Name
          </label>
          <i className="mtrl-select"></i>
        </div>
        <div className="form-group half">
          <input type="text" />
          <label className="control-label" htmlFor="input">
            Last Name
          </label>
          <i className="mtrl-select"></i>
        </div>
        <div className="form-group">
          <input type="text" />
          <label className="control-label" htmlFor="input">
            <a
              href="https://wpkixx.com/cdn-cgi/l/email-protection"
              className="__cf_email__"
              data-cfemail="4b0e262a22270b"
            >
              [email&#160;protected]
            </a>
          </label>
          <i className="mtrl-select"></i>
        </div>
        <div className="form-group">
          <input type="text" />
          <label className="control-label" htmlFor="input">
            Phone No.
          </label>
          <i className="mtrl-select"></i>
        </div>
        <div className="form-group">
          <input
            type="date"
            value={Form.birthday}
            name="birthday"
            onChange={(e) => onInputChange(e)}
          />
          <label className="control-label" htmlFor="input">
            birthday
          </label>
        </div>

        <div className="form-group">
          <input type="text" />
          <label className="control-label" htmlFor="input">
            City
          </label>
          <i className="mtrl-select"></i>
        </div>

        <div className="form-group">
          <textarea
            value={Form.bio}
            name="bio"
            onChange={(e) => onInputChange(e)}
            rows="2"
            id="textarea"
            required
          ></textarea>
          <label className="control-label" htmlFor="textarea">
            bio
          </label>
          <i className="mtrl-select"></i>
        </div>
        <div className="submit-btns">
          <button type="reset" className="mtr-btn">
            <span>Cancel</span>
          </button>
          <button type="submit" className="mtr-btn">
            <span>Update</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
