import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LaunchDetailsContainer,
  Section,
} from "../styles/LaunchDetails.styled";
import { Status } from "../styles/Common.styled";
import { fetchLaunchDetails } from "../api/LaunchesAPI";

const LaunchDetail = () => {
  const { id } = useParams();
  const [launchDetails, setLaunchDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchLaunchDetails(id)
      .then((data) => {
        setLaunchDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <LaunchDetailsContainer>
      <h1>{launchDetails.name}</h1>
      {launchDetails.links.patch.small && (
        <center>
          <img src={launchDetails.links.patch.small} alt="launch logo" />
        </center>
      )}
      <Section>
        <h3>
          Mission Status:{" "}
          <Status $success={launchDetails.success}>
            {launchDetails.success
              ? "Success"
              : launchDetails.success == null
              ? "Upcoming"
              : "Failed"}
          </Status>
        </h3>
        {launchDetails.links.patch.small && launchDetails.links.patch.large && (
          <h3>
            {" "}
            Mission Patches:{" "}
            <a
              href={launchDetails.links.patch.small}
              target="_blank"
              rel="noreferrer"
            >
              small
            </a>{" "}
            <a
              href={launchDetails.links.patch.large}
              target="_blank"
              rel="noreferrer"
            >
              large
            </a>{" "}
          </h3>
        )}
        <p>{launchDetails.details}</p>
        {launchDetails.links.wikipedia && (
          <a
            href={launchDetails.links.wikipedia}
            target="_blank"
            rel="noreferrer"
          >
            Read more about {launchDetails.name}
          </a>
        )}
      </Section>
      <Section>
        <h2>Rocket Details:</h2>
        {launchDetails.rocket.flickr_images[0] && (
          <img src={launchDetails.rocket.flickr_images[0]} alt="Rocket" />
        )}
        <ul>
          <li>
            <label>Name: </label>
            {launchDetails.rocket.name}
          </li>
          <li>
            <label>Description: </label>
            {launchDetails.rocket.description}
          </li>
          <li>
            <label>Stages:</label> {launchDetails.rocket.stages}
          </li>
          <li>
            <label>Boosters:</label> {launchDetails.rocket.boosters}
          </li>
          <li>
            <label>Cost per Launch: $</label>
            {launchDetails.rocket.cost_per_launch.toLocaleString()}
          </li>
          <li>
            <label>Success Rate:</label> {launchDetails.rocket.success_rate_pct}
            %
          </li>
          {launchDetails.rocket.wikipedia && (
            <a
              href={launchDetails.rocket.wikipedia}
              target="_blank"
              rel="noreferrer"
            >
              Read more about {launchDetails.rocket.name}
            </a>
          )}
        </ul>
      </Section>
      <Section>
        <h2>Payload Details:</h2>
        {launchDetails.payloads.map((payload, index) => (
          <ul key={index}>
            <li>
              <label>Name: </label>
              {payload.name}
            </li>
            <li>
              <label>Type: </label>
              {payload.type}
            </li>
            <li>
              <label>Mass:</label> {payload.mass_kg} kg
            </li>
            <li>
              <label>Orbit Regime: </label>
              {payload.regime}
            </li>
          </ul>
        ))}
      </Section>
      <Section>
        <h2>Launchpad Details:</h2>
        <ul>
          <li>
            <label>Name: </label>
            {launchDetails.launchpad.name}
          </li>
          <li>
            <label>Launch Site: </label>
            {launchDetails.launchpad.locality}, {launchDetails.launchpad.region}
          </li>
        </ul>
      </Section>
    </LaunchDetailsContainer>
  );
};

export default LaunchDetail;
