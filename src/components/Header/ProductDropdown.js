import React from 'react';

import arrowBlue from '../images/arrow-blue.svg';
import productIllus from '../images/product_illus.png';
// import dbIcon from '../images/db_icon.svg';
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
        <h4 className="product-h4">CAPABILITIES</h4>
        <a href="https://hasura.io/product/performance/">
          <div className="dropdown-hover-effect-div flex-center">
            <img
              src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683017758/main-web/icons/speedometer-03_1_oebuvh.png"
              alt="Performance-icon"
              mb="-2px"
              display="inline-block"
              loading="lazy"
            />
            <h2>Performance</h2>
          </div>
        </a>
        <a href="https://hasura.io/product/instant-api/">
          <div className="dropdown-hover-effect-div flex-center">
            <img
              src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683017758/main-web/icons/zap-fast_wwz9av.png"
              alt="instant-api-icon"
              width="24px"
              loading="lazy"
            />
            <h2>Instant API</h2>
          </div>
        </a>
        <a href="https://hasura.io/product/observability/">
          <div className="dropdown-hover-effect-div flex-center">
            <img
              src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683017758/main-web/icons/line-chart-down-04_uo6zba.png"
              alt="obsrvability-icon"
              loading="lazy"
            />
            <h2>Observability</h2>
          </div>
        </a>
        <a href="https://hasura.io/product/api-security/">
          <div className="dropdown-hover-effect-div flex-center">
            <img
              src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683017758/main-web/icons/shield-tick_1_skxzzx.png"
              alt="security-icon"
              loading="lazy"
            />
            <h2>API Security</h2>
          </div>
        </a>
        <a href="https://hasura.io/product/authorization/">
          <div className="dropdown-hover-effect-div flex-center">
            <img
              src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683017758/main-web/icons/eye_2_npzxta.png"
              alt="auth-icon"
              loading="lazy"
            />
            <h2>Authorization</h2>
          </div>
        </a>
      </div>
      {/* Column 3 */}
      <div className="navDrapdownListWrapper">
        <div className="content-div dropdown-column-section db-tile">
          <h4 className="product-h4">SUPPORTED DATABASES</h4>
          <a href="https://hasura.io/graphql/database/postgresql/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683015064/main-web/icons/Frame_10856_zjm7mi.png"
                alt="postgres-icon"
                loading="lazy"
              />
              <h2>PostgreSQL</h2>
            </div>
          </a>
          <a href="https://hasura.io/graphql/database/sql-server/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683015064/main-web/icons/Frame_10855_cpcyco.png"
                alt="sql-server-icon"
                loading="lazy"
              />
              <h2>SQL Server</h2>
            </div>
          </a>
          <a href="https://hasura.io/graphql/database/oracle/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683015064/main-web/icons/Frame_10858_rtxoiq.png"
                alt="oracle-icon"
                loading="lazy"
              />
              <h2>Oracle</h2>
            </div>
          </a>
          <a href="https://hasura.io/graphql/database/mysql/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683015065/main-web/icons/Frame_10859_smmeif.png"
                alt="mysql-icon"
                loading="lazy"
              />
              <h2>MySQL</h2>
            </div>
          </a>
          <a href="https://hasura.io/graphql/database/snowflake/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683106455/main-web/Frame_10861_whhg1y.png"
                alt="snowflake-db-icon"
                loading="lazy"
              />
              <h2>Snowflake</h2>
            </div>
          </a>
        </div>
      </div>
      {/* Column 4 */}
      <div className="navDrapdownListWrapper">
        <div className="content-div dropdown-column-section db-tile db-tile-four">
          <a href="https://hasura.io/graphql/database/mariadb/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683015064/main-web/icons/Frame_10857_lxndky.png"
                alt="maria-db-icon"
                minWidth="24px"
                width="24px"
                mr="18px"
              />
              <h2>MariaDB</h2>
            </div>
          </a>
          <a href="https://hasura.io/docs/latest/databases/postgres/neon/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683106455/main-web/Frame_10855_yicbip.png"
                alt="neon-db-icon"
                minWidth="24px"
                width="24px"
                mr="18px"
              />
              <h2>Neon</h2>
            </div>
          </a>
          <a href="https://hasura.io/docs/latest/databases/bigquery/getting-started/index/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683106455/main-web/Frame_10858_h6bpnt.png"
                alt="google-big-query-icon"
                minWidth="24px"
                width="24px"
                mr="18px"
              />
              <h2>Google BigQuery</h2>
            </div>
          </a>
          <a href="https://hasura.io/docs/latest/databases/postgres/alloy/">
            <div className="dropdown-hover-effect-div flex-center">
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1683106455/main-web/Frame_10859_unj4yf.png"
                alt="alloy-db-icon"
                minWidth="24px"
                width="24px"
                mr="18px"
              />
              <h2>AlloyDB</h2>
            </div>
          </a>
          <a href="https://hasura.io/graphql/database/">
            <div className="dropdown-hover-effect-div flex-center nav-link">
              View all Databases
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1669634477/main-web/icons/arrow-blue_ybhodi.svg"
                alt="right-arrow-icon"
                minWidth="18px"
                width="18px"
                ml="6px"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
