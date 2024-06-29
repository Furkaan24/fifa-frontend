import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

function PlayerCard({
  playerName,
  position,
  rating,
  age,
  imageURL,
  player,
  inTeam,
  selectedPlayer,
}) {
  const isSelected = player && selectedPlayer && player === selectedPlayer;
  const imageHeight = inTeam ? 100 : 200;
  const styleForSelected = isSelected
    ? {
        backgroundColor: "#21f3bf",
        border: "2px solid #2196f3",
        borderRadius: "5px",
      }
    : { backgroundColor: "#" };
  const styleForInTeam = inTeam
    ? {
        width: "85px",
        backgroundColor: "#21f3bf",
      }
    : { backgroundColor: "#21f3bf" };

  return (
    <Fragment>
      <Card
        elevation={isSelected ? 24 : 1}
        raised={isSelected}
        sx={{ maxWidth: 250 }}
        style={{
          ...styleForSelected,
          ...styleForInTeam,
        }}
      >
        <Tooltip
          title={
            <Fragment>
              <Typography variant="body2" color="inherit">
                Position: {position}
              </Typography>
              <Typography variant="body2" color="inherit">
                Rating: {rating}
              </Typography>
              <Typography variant="body2" color="inherit">
                Age: {age}
              </Typography>
            </Fragment>
          }
          arrow
        >
          <CardMedia
            component="img"
            alt="football player"
            height={imageHeight}
            image={imageURL}
          />
        </Tooltip>
        <CardContent
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column", // Center content vertically
            padding: inTeam ? "4px" : "16px", // Reduce padding if inTeam
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              whiteSpace: "nowrap",
              fontSize: "0.9rem", // Smaller font size for the name
            }}
          >
            {playerName}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
}

export default PlayerCard;
