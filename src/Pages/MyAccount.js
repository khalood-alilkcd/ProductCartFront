import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Image,
  Form,
  Button,
  Badge,
  Tab,
} from "react-bootstrap";
import { useThemeHook } from "../GloabalComponents/ThemeProvider";
import Heading from "../Components/Heading";
import profilePix from "../images/profile-picture.png";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { IoLocateSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import OrderCard from "../Components/OrderCard";
import "./MyAccount.css";

const MyAccount = () => {
  const [theme] = useThemeHook();
  return (
    <Container className="py-5 mt-5 container-fluid ">
      <Heading Heading="My Account" />
      <Tab.Container defaultActiveKey="my-orders">
        <Row className="justify-content-evenly  mt-4 p-1">
          <Col
            sm={3}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded h-100 mb-3 user-menu`}
          >
            <Row className="mb-3 py-2">
              <Col xs={3} className="pe-0">
                <Image
                  src={profilePix}
                  thumbnail
                  fluid
                  roundedCircle
                  className="p-0"
                />
              </Col>
              <Col xs={9} className="pt-1">
                <span>Hello,</span>
                <h4>Code With KH</h4>
              </Col>
            </Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Nav.Link eventKey="my-orders">
                  My orders
                  <FaClipboardList size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="account-details">
                  Account Details
                  <FaUser size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="address">
                  Address
                  <IoLocateSharp size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="1.4rem">
                  Wallet
                  <GiWallet size="1.4rem" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            sm={8}
            md={7}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded `}
          >
            <Tab.Content>
              <Tab.Pane eventKey="my-orders">
                <Heading heading="My Orders" size="h3" />
                <OrderCard
                  orderDate="24 Jun, 2022"
                  orderId="1234"
                  title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                  img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  deliveredDate="05 July, 2022"
                />
                <OrderCard
                  orderDate="24 Jun, 2022"
                  orderId="1334"
                  title="Mens Casual Premium Slim Fit T-Shirts"
                  img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  deliveredDate="05 July, 2022"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="account-details">
                <Heading heading="Account details" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="address">
                <Heading heading="Address" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="wallet">
                <Heading heading="Wallet" size="h3" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default MyAccount;
