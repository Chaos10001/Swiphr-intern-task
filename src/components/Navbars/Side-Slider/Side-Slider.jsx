import "./Slider-Slider.css";
import { HouseFill } from "react-bootstrap-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const SideSlider = () => {
  return (
    <div className="main d-none d-md-block ">
      <div className="d-flex mt-5 text-center mx-4">
        <div>
          <img
            style={{ width: "2.5rem", height: "2.5rem" }}
            src="./logo.png"
            alt=""
            className="img1"
          />
        </div>
        <div>
          <h1 className="fw-bold my-3  mx-2">Sellaz</h1>
        </div>
      </div>
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
          <li className="d-flex  mx-5 mt-3 mb-3">
            <img src="./Vector (9).png" alt="" />
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
              <img src="./Vector (3).png" alt="" />

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
          <li className="d-flex mx-5 name">
            <img src="./Ellipse 21.png" alt="" />
            <NavDropdown title="Oluwafemi" className="ms-2">
              <NavDropdown.Item className="text-dark" as={Link} to="">
                All Product
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSlider;
