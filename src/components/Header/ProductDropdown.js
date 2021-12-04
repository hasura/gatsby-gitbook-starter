import React from 'react';

import arrowBlue from '../images/arrow-blue.svg';
import productIllus from '../images/product_illus.png';
import dbIcon from '../images/db_icon.svg';
import './navproduct.scss';

export const ProductDropdown = () => {
  return (
    <div className="navDrapdownWrapper">
      {/* Column 1 */}
      <div className="dropdown-column-section product-section">
        <a href="https://hasura.io/products/">
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
        </a>
      </div>
      {/* Column 2 */}
      <div className="center-content-section dropdown-column-section">
        <h4>GRAPHQL IN PRODUCTION</h4>
        <a href="https://hasura.io/graphql/caching/">
          <div className="dropdown-hover-effect-div">
            <h2>Caching</h2>
            <p>Get faster response times</p>
          </div>
        </a>
        <a href="https://hasura.io/graphql/security/">
          <div className="dropdown-hover-effect-div">
            <h2>Security</h2>
            <p>Declaratively protect your APIs</p>
          </div>
        </a>
        <a href="https://hasura.io/graphql/monitoring/">
          <div className="dropdown-hover-effect-div">
            <h2>Monitoring and Observability</h2>
            <p>Get insights on your API performance</p>
          </div>
        </a>
        <a href="https://hasura.io/graphql/production-ready-existing-apis/">
          <div className="dropdown-hover-effect-div">
            <h2>Existing GraphQL APIs</h2>
            <p>Add your GraphQL servers to Hasura </p>
          </div>
        </a>
      </div>
      {/* Column 3 */}
      <div className="navDrapdownListWrapper">
        <div className="content-div dropdown-column-section">
          <h4>SUPPORTED DATABASES</h4>
          <a href="https://hasura.io/graphql/database/postgresql/">
            <div className="dropdown-db-link dropdown-hover-effect-div">
              <img src={dbIcon} alt="hasura-database" className="db_icon" />
              <h2>Postgres</h2>
            </div>
          </a>
          <a href="https://hasura.io/graphql/database/sql-server/">
            <div className="dropdown-db-link dropdown-hover-effect-div">
              <img src={dbIcon} alt="hasura-database" className="db_icon" />
              <h2>SQL Server</h2>
            </div>
          </a>
          <a
            href="https://hasura.io/docs/latest/graphql/core/databases/bigquery/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="dropdown-db-link dropdown-hover-effect-div">
              <img src={dbIcon} alt="hasura-database" className="db_icon" />
              <h2>Big Query</h2>
            </div>
          </a>
          <div className="coming-soon-div">
            <h4>COMING SOON</h4>
            <div className="db-flex">
              <a href="https://hasura.io/graphql/database/oracle/">
                <h2>Oracle</h2>
              </a>
              <a href="https://hasura.io/graphql/database/mongodb/">
                <h2>MongoDb</h2>
              </a>
              <a href="https://hasura.io/graphql/database/mysql/">
                <h2>MySQL</h2>
              </a>
              <a href="https://hasura.io/graphql/database/elasticsearch/">
                <h2>Elastic</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
