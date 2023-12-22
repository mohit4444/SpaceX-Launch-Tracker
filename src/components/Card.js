import { StyledCard } from "../styles/Card.styled";
import genericimg from "../assets/genericlaunch.jpg";
import { useNavigate } from "react-router-dom";
import { Status } from "../styles/Common.styled";

export default function Card({
  item: { id, name, success, links, date_local },
}) {
  const formattedDate = new Date(date_local).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/launch/${id}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <div>
        <center>
          {links.patch.small != null ? (
            <img src={`${links.patch.small}`} alt="launch logo" />
          ) : (
            <img src={genericimg} alt="launch logo" />
          )}
        </center>
      </div>
      <div>
        <h2>{name}</h2>
        <b>Status:</b>{" "}
        <Status $success={success}>
          {success ? "Success" : success == null ? "Upcoming" : "Failed"}
        </Status>
        <br></br>
        <label>
          <b>Date:</b> {formattedDate}
        </label>
      </div>
    </StyledCard>
  );
}
