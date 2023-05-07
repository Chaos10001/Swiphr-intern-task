import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideSlider from "../../Navbars/Side-Slider/Side-Slider";
import Form from "react-bootstrap/Form";
import "./home.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <Container>
      <Row className="">
        <Col lg={1} className="me-3">
          <SideSlider />
        </Col>
        <Col className="p-5">
          <div className="hero">
            <button className="rounded d-flex">
              <div className="mt-1">
                <ArrowLeftOutlined />
                <span>Back</span>
              </div>
            </button>
            <div className="hero-2 d-flex">
              <div>
                <h1 className="fw-bolder mt-3">New Product</h1>
              </div>
              <div className="float-start mt-3">
                <button>Save Product</button>
              </div>
            </div>
          </div>
          <Row className="hero-body">
            <Col>
              <h2>Product name</h2>
              <Form.Group className="mb-3 form1">
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <h2>Product name</h2>
              <Form.Group className="mb-3 form2">
                <Form.Control type="email" placeholder="Optional"/>
              </Form.Group>
            </Col>
          </Row>
          <span className="mt-4 fw-bold">Type</span>
          <Row className="hero-content d-flex gap-3">
            <Col>
              <div className="shadow-sm content1 mt-4 justify-content-center align-items-center rounded border border-success">
                <h1 className="d-flex p-4">
                  <img src="./Vector (3).png" alt="" className="me-3" />
                  <span className="fw-bold">Physical</span>
                </h1>
                <p className="ps-4 pt-2">
                  Item has weight and needs shipping or customer pickup
                </p>
              </div>
            </Col>
            <Col>
              <div className="shadow-sm content1 mt-4 justify-content-center align-items-center rounded">
                <h1 className="d-flex p-4">
                  <img src="./Vector (10).png" alt="" className="me-3" />
                  <span className="fw-bold">Digital</span>
                </h1>
                <p className="ps-4 pt-2">
                  Item is delivered digitally or provided as a service
                </p>
              </div>
            </Col>
            <Col>
              <div className="shadow-sm content1 mt-4 justify-content-center align-items-center rounded">
                <h1 className="d-flex p-4">
                  <img src="./Vector (8).png" alt="" className="me-3" />
                  <span className="fw-bold">Bundle</span>
                </h1>
                <p className="ps-4 pt-2">
                  Items are grouped into several physical or digital products
                </p>
              </div>
            </Col>
          </Row>
          <div className="hero2 mt-5">
            <span className="fw-bold">Type</span>
            <div className=" hero2-content text-center justify-content-center align-items-center">
              <img
                src="./Vector (7).png"
                alt=""
                style={{ marginTop: "5rem" }}
              />
              <h3 className="fw-bold mt-2">Add image</h3>
              <p>Drag & drop upload</p>
            </div>
          </div>
          <div className="hero3 mt-5">
            <h2>Categories</h2>
            <Form.Group>
              <Form.Control type="email" />
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
