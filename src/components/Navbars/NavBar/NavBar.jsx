import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className=" d-md-none sticky-top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/"
                    className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
                    <div>
                      <img src="./Vector.png" alt="" />
                      <span className="mx-2 text-dark">Home</span>
                    </div>
                  </Link>
                </li>
                <li className="d-flex mx-5 mt-3">
                  <div>
                    <img
                      style={{ width: "1.3rem", height: "1.3rem" }}
                      src="./Vector (9).png"
                      alt=""
                    />
                  </div>
                  <div>
                    <NavDropdown
                      title="Orders"
                      className="menu-item ms-2"
                      id="basic-nav-dropdown">
                      <NavDropdown.Item
                        className=" fw-bolder text-dark"
                        as={Link}
                        to="">
                        Order
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </li>
                <li>
                  <Link
                    to=""
                    className="menu-item text-white fw-bolder py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
                    <div>
                      <img src="./Vector (1).png" alt="" />
                      <span className="mx-2">Subscription</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
                    <div>
                      <img src="./Vector19.png" alt="" />
                      <span className="mx-2">Customers</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <li className="d-flex mx-5 mt-3">
                    <img
                      style={{ width: "1.6rem", height: "1.7rem" }}
                      src="./Vector (3).png"
                      alt=""
                    />

                    <NavDropdown
                      title="Products"
                      className="ms-2"
                      id="basic-nav-dropdown">
                      <NavDropdown.Item className="text-dark" as={Link} to="">
                        All Product
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className=" fw-bolder text-dark"
                        as={Link}
                        to="">
                        Categories
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className=" fw-bolder text-dark"
                        as={Link}
                        to="latest">
                        Attributes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className=" fw-bolder text-dark"
                        as={Link}
                        to="latest">
                        Gift cards
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className=" fw-bolder text-dark"
                        as={Link}
                        to="latest">
                        Purchase links
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <Link
                    to=""
                    className="menu-item fw-bolder text-white py-3 mx-4 mt-2 px-4 d-flex align-items-center text-decoration-none">
                    <div>
                      <img src="./Vector (5).png" alt="" />
                      <span className="mx-2">Discount</span>
                    </div>
                  </Link>
                  <Link
                    to=""
                    className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
                    <div>
                      <img src="./Vector (6).png" alt="" />
                      <span className="mx-2">Reporting</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
        <li className="d-flex mt-5 name">
          <div className="mx-3">
            <img
              src="./Ellipse 21.png"
              alt=""
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <div className="mt-2">
            <h1>Oluwafemi</h1>
          </div>
        </li>
      </Container>
    </Navbar>
  );
};

export default NavBar;
