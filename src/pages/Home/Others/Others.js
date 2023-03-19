import React from 'react';
import { Container, Row } from "react-bootstrap";
import img2 from "../../../images/collection/colt-2.png";
import img3 from "../../../images/collection/colt-3.png";
import img5 from "../../../images/collection/colt-5.png";
import img6 from "../../../images/collection/colt-6.png";
import img1 from "../../../images/collection/colt-7.png";
import img4 from "../../../images/collection/colt-9.png";
import "./Others.css";

const Others = () => {
    return (
      <div>
        <Container className="my-5">
          <h1 className="text-center fw-3 text-header">
            <span className="word-color">C</span>OLLECTION
          </h1>

          <Row lg={1} md={1} xs={1} className="g-4">
            <div className="card-align my-5">
              <div className="card border-0 shadow">
                <div className="inner">
                  <img src={img1} className="w-50" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4 className="product-text">
                      <i className="fas fa-window-minimize"></i> Roses Vanilla
                      <i className="fas fa-window-minimize"></i>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="card w-100 border-0 shadow">
                <div className="inner">
                  <img src={img2} className="w-50" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4 className="product-text">
                      <i className="fas fa-window-minimize"></i>Instant Crush
                      <i className="fas fa-window-minimize"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card w-100 border-0 shadow">
                <div className="inner">
                  <img src={img3} className="w-50" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4 className="product-text">
                      <i className="fas fa-window-minimize"></i> Black Gold
                      <i className="fas fa-window-minimize"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card w-100 border-0 shadow">
                <div className="inner">
                  <img src={img4} className="w-50" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4 className="product-text">
                      <i className="fas fa-window-minimize"></i> Coco Vanilla
                      <i className="fas fa-window-minimize"></i>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="card w-100 border-0 shadow">
                <div className="inner">
                  <img src={img5} className="w-50" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4 className="product-text">
                      <i className="fas fa-window-minimize"></i> Velvet Vanilla
                      <i className="fas fa-window-minimize"></i>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="card w-100 border-0 shadow">
                <div className="inner">
                  <img src={img6} className="w-50" alt="..." />
                </div>
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4 className="product-text">
                      <i className="fas fa-window-minimize"></i> Lemon Line
                      <i className="fas fa-window-minimize"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
};

export default Others;