import React from "react";
import { Link } from "gatsby";

import arrowBlue from "../images/arrow-blue.svg";
import productIllus from "../images/product_illus.png";
import dbIcon from "../images/db_icon.svg";
import linkIcon from "../images/icon_link.svg";
import "./navproduct.scss";

export const ProductDropdown = () => {
  return (
    <div className="navDrapdownWrapper">
      {/* Column 1 */}
      <div className="dropdown-column-section product-section">
        <Link to="/products/">
          <div className="product-content-wrapper">
            <h4>PRODUCT</h4>
            <img src={productIllus} alt="Product" id="product-illus" />
            <h2>Hasura Product Offerings</h2>
            <p>
              Choose from our Open Source Community Edition, fully-managed Hasura Cloud or on-prem
              Hasura Enterprise Edition.
            </p>
            <div className="nav-link">
              Go To Products
              <img src={arrowBlue} alt="Arrow" className="arrow-img" />
            </div>
          </div>
        </Link>
      </div>
      {/* Column 2 */}
      <div className="center-content-section dropdown-column-section">
        <h4>GRAPHQL IN PRODUCTION</h4>
        <Link to="/graphql/caching/">
          <div className="dropdown-hover-effect-div">
            <h2>Caching</h2>
            <p>Get faster response times</p>
          </div>
        </Link>
        <Link to="/graphql/security/">
          <div className="dropdown-hover-effect-div">
            <h2>Security</h2>
            <p>Declaratively protect your APIs</p>
          </div>
        </Link>
        <Link to="/graphql/monitoring/">
          <div className="dropdown-hover-effect-div">
            <h2>Monitoring and Observability</h2>
            <p>Get insights on your API performance</p>
          </div>
        </Link>
        <Link to="/graphql/production-ready-existing-apis/">
          <div className="dropdown-hover-effect-div">
            <h2>Existing GraphQL APIs</h2>
            <p>Add your GraphQL servers to Hasura </p>
          </div>
        </Link>
      </div>
      {/* Column 3 */}
      <div className="navDrapdownListWrapper">
        <div className="content-div dropdown-column-section">
          <h4>SUPPORTED DATABASES</h4>
          <Link to="/graphql/database/postgresql/">
            <div className="dropdown-db-link dropdown-hover-effect-div">
              <img src={dbIcon} alt="hasura-database" className="db_icon" />
              <h2>Postgres</h2>
              <img src={linkIcon} alt="hasura-database-link" className="link_img" />
            </div>
          </Link>
          <Link to="/graphql/database/sql-server/">
            <div className="dropdown-db-link dropdown-hover-effect-div">
              <img src={dbIcon} alt="hasura-database" className="db_icon" />
              <h2>SQL Server</h2>
              <img src={linkIcon} alt="hasura-database-link" className="link_img" />
            </div>
          </Link>
          <a
            href="https://hasura.io/docs/latest/graphql/core/databases/bigquery/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="dropdown-db-link dropdown-hover-effect-div">
              <img src={dbIcon} alt="hasura-database" className="db_icon" />
              <h2>Big Query</h2>
              <img src={linkIcon} alt="hasura-database-link" className="link_img" />
            </div>
          </a>
          <div className="coming-soon-div">
            <h4>COMING SOON</h4>
            <div className="db-flex">
              <Link to="/graphql/database/oracle/">
                <h2>Oracle</h2>
              </Link>
              <Link to="/graphql/database/mongodb/">
                <h2>MongoDb</h2>
              </Link>
              <Link to="/graphql/database/mysql/">
                <h2>MySQL</h2>
              </Link>
              <Link to="/graphql/database/elasticsearch/">
                <h2>Elastic</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
