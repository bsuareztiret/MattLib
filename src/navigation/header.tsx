import { Link } from "react-router-dom";

const BenyHeader = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      alignContent: "center",
      padding: "2%",
      backgroundColor: "dark-grey"
    }}>
      <Link to="/">
        <div>
          <p>
            home
          </p>
        </div>
      </Link>
      <Link to="/bio">
        <div>
          <p>
            bio
          </p>
        </div>
      </Link>
      <Link to="/contact">
        <div>
          <p>
            contact
          </p>
        </div>
      </Link>
      <Link to="/question">
        <div>
          <p>
            question
          </p>
        </div>
      </Link>
    </nav>
  )
}

export default BenyHeader;