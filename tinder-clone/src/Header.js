import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header({ backButton }) {
  const history = useHistory();
  return (
    // BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      {/* <IconButton> */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmle1hmy3o5x9.i.optimole.com%2FwA1fu2Y-oILtP-KZ%2Fw%3A1920%2Fh%3A1080%2Fq%3A100%2Fhttps%3A%2F%2Fwww.web-designlondon.co.uk%2Fwp-content%2Fuploads%2F2020%2F01%2Fcolour-gradient-tinder-1.png&f=1&nofb=1"
          alt=""
        />
      </Link>
      {/* </IconButton> */}
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
