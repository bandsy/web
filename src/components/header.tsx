import React, { useState, useEffect } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Button from "./shared/Button";
import LanguagePicker from "./LanguagePicker";
import SideModal from "./shared/SideModal";
import UserModal from "./modals/UserModal";
import MessagingModal from "./modals/MessagingModal";

const NavBar = styled.div`
  padding: 30px 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: transparent;

  &.background {
    background-color: ${(x: any) => x.theme.white};
  }
`;

const ProfilePicture = styled.div<{
  arrow: any;
}>`
  height: 57px;
  width: 57px;
  border-radius: 5px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 15px;

  img {
    height: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(x: any) => x.theme.pink};
    top: 0;
    left: 0;
    transform: translate(-100%);
    transition: transform 250ms ease-in;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${x => x.arrow}) no-repeat center;
    transform: translate(-100%);
    transition: transform 400ms ease;
  }

  &:hover::before {
    transform: translate(-75%);
  }

  &.open::before,
  &.open::after {
    transform: translate(0) !important;
  }
`;

interface props {
  siteTitle: string;
}

const loggedIn = false;

const Header = ({ siteTitle = "bandsy" }: props) => {
  const intl = useIntl();
  const [languagePicker, setLanguagePicker] = useState(false);
  const [sideMenu, setSideMenu] = useState(null);
  const [navBg, setNavBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSideMenuSelection = (name: string) => {
    if (sideMenu === name) {
      setSideMenu(null);
    } else {
      setSideMenu(name);
    }
  };

  return (
    <NavBar className={navBg && "background"}>
      <Container>
        <Row alignItems="center" justifyContent="between">
          <Col col="auto">
            <Link to="/">
              <img
                src={require("../images/branding/text.svg")}
                alt={siteTitle}
                style={{ height: "47px" }}
              />
            </Link>
          </Col>
          {loggedIn ? (
            <Col col="auto" hiddenLgDown>
              <ProfilePicture
                className={sideMenu === "messages" && "open"}
                onClick={() => handleSideMenuSelection("messages")}
                arrow={require("../images/icons/arrow.svg")}
              >
                <img src={require("../images/icons/messages.svg")} />
              </ProfilePicture>
              <ProfilePicture
                className={sideMenu === "userSettings" && "open"}
                onClick={() => handleSideMenuSelection("userSettings")}
                style={{
                  backgroundImage: `url(${"https://cdn.discordapp.com/attachments/678593423015673928/696335670611935392/20200405_132906.jpg"})`,
                }}
                arrow={require("../images/icons/arrow.svg")}
              />
            </Col>
          ) : (
            <Col col="auto" hiddenLgDown>
              <Button onClick={() => setLanguagePicker(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10,8A10,10,0,1,0,20,18,10,10,0,0,0,10,8Zm7.79,6.129H14.464a11.735,11.735,0,0,0-1.742-4.4A8.748,8.748,0,0,1,17.79,14.129ZM13.548,18a19.058,19.058,0,0,1-.173,2.581H6.625a19.292,19.292,0,0,1,0-5.161h6.75A19.058,19.058,0,0,1,13.548,18ZM10,9.29c1.085,0,2.476,1.778,3.149,4.839h-6.3C7.524,11.069,8.915,9.29,10,9.29Zm-2.722.44a11.746,11.746,0,0,0-1.742,4.4H2.21A8.748,8.748,0,0,1,7.278,9.73ZM1.29,18a8.655,8.655,0,0,1,.391-2.581H5.331A20.449,20.449,0,0,0,5.161,18a19.723,19.723,0,0,0,.169,2.581H1.681A8.655,8.655,0,0,1,1.29,18Zm.919,3.871H5.536a11.734,11.734,0,0,0,1.742,4.4,8.748,8.748,0,0,1-5.069-4.4ZM10,26.71c-1.085,0-2.476-1.778-3.149-4.839h6.3c-.673,3.06-2.065,4.839-3.149,4.839Zm2.722-.44a11.746,11.746,0,0,0,1.742-4.4H17.79A8.748,8.748,0,0,1,12.722,26.27Zm1.948-5.69A20.449,20.449,0,0,0,14.839,18a19.723,19.723,0,0,0-.169-2.581h3.649a8.709,8.709,0,0,1,0,5.161Z"
                    transform="translate(0 -8)"
                  />
                </svg>
                {intl.formatMessage({ id: "language" })}
              </Button>
              <Link to="/login">
                <Button ml>{intl.formatMessage({ id: "login" })}</Button>
              </Link>
              <Link to="/signup">
                <Button pink ml>
                  {intl.formatMessage({ id: "signup" })}
                </Button>
              </Link>
            </Col>
          )}
        </Row>
      </Container>

      <LanguagePicker
        visible={languagePicker}
        setVisibility={setLanguagePicker}
      />

      {loggedIn && (
        <SideModal
          side="right"
          name="userSettings"
          visible={sideMenu}
          setVisibility={handleSideMenuSelection}
        >
          <UserModal />
        </SideModal>
      )}
      {loggedIn && (
        <SideModal
          side="right"
          name="messages"
          visible={sideMenu}
          setVisibility={handleSideMenuSelection}
        >
          <MessagingModal />
        </SideModal>
      )}
    </NavBar>
  );
};

export default Header;
