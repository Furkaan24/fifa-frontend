import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Grid } from "@mui/material";
import PlayerSelector from "./PlayerSelector";
import PlayerCard from "./PlayerCard";

function PlayersSelectorForPosition({
  team,
  buttonDisabled,
  teamName,
  setTeamCount,
  setTotalValue,
}) {
  const seeingATeam = team === undefined ? false : true;
  const [addedPlayerOne, setAddedPlayerOne] = useState(false);
  const [addedPlayerTwo, setAddedPlayerTwo] = useState(false);
  const [addedPlayerThree, setAddedPlayerThree] = useState(false);
  const [addedPlayerFour, setAddedPlayerFour] = useState(false);
  const [addedPlayerFive, setAddedPlayerFive] = useState(false);
  const [addedPlayerSix, setAddedPlayerSix] = useState(false);
  const [addedPlayerSeven, setAddedPlayerSeven] = useState(false);
  const [addedPlayerEight, setAddedPlayerEight] = useState(false);
  const [addedPlayerNine, setAddedPlayerNine] = useState(false);
  const [addedPlayerTen, setAddedPlayerTen] = useState(false);
  const [addedPlayerEleven, setAddedPlayerEleven] = useState(false);

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);
  const playerOne = seeingATeam
    ? players.find((player) => player.name === team.playerOne)
    : null;
  const playerTwo = seeingATeam
    ? players.find((player) => player.name === team.playerTwo)
    : null;
  const playerThree = seeingATeam
    ? players.find((player) => player.name === team.playerThree)
    : null;
  const playerFour = seeingATeam
    ? players.find((player) => player.name === team.playerFour)
    : null;
  const playerFive = seeingATeam
    ? players.find((player) => player.name === team.playerFive)
    : null;
  const playerSix = seeingATeam
    ? players.find((player) => player.name === team.playerSix)
    : null;
  const playerSeven = seeingATeam
    ? players.find((player) => player.name === team.playerSeven)
    : null;
  const playerEight = seeingATeam
    ? players.find((player) => player.name === team.playerEight)
    : null;
  const playerNine = seeingATeam
    ? players.find((player) => player.name === team.playerNine)
    : null;
  const playerTen = seeingATeam
    ? players.find((player) => player.name === team.playerTen)
    : null;
  const playerEleven = seeingATeam
    ? players.find((player) => player.name === team.playerEleven)
    : null;
  const [selectedPlayerOne, setSelectedPlayerOne] = useState(
    seeingATeam ? playerOne : null
  );
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState(
    seeingATeam ? playerTwo : null
  );
  const [selectedPlayerThree, setSelectedPlayerThree] = useState(
    seeingATeam ? playerThree : null
  );
  const [selectedPlayerFour, setSelectedPlayerFour] = useState(
    seeingATeam ? playerFour : null
  );
  const [selectedPlayerFive, setSelectedPlayerFive] = useState(
    seeingATeam ? playerFive : null
  );
  const [selectedPlayerSix, setSelectedPlayerSix] = useState(
    seeingATeam ? playerSix : null
  );
  const [selectedPlayerSeven, setSelectedPlayerSeven] = useState(
    seeingATeam ? playerSeven : null
  );
  const [selectedPlayerEight, setSelectedPlayerEight] = useState(
    seeingATeam ? playerEight : null
  );
  const [selectedPlayerNine, setSelectedPlayerNine] = useState(
    seeingATeam ? playerNine : null
  );
  const [selectedPlayerTen, setSelectedPlayerTen] = useState(
    seeingATeam ? playerTen : null
  );
  const [selectedPlayerEleven, setSelectedPlayerEleven] = useState(
    seeingATeam ? playerEleven : null
  );

  return (
    <div>
      {seeingATeam ? (
        <Grid container spacing={1}>
          <Grid container item xs={4} md={4} justifyContent="end">
            {playerEleven ? (
              <PlayerCard
                playerName={playerEleven.name}
                imageURL={playerEleven.imageURL}
                inTeam={true}
                age={playerEleven.age}
                rating={playerEleven.rating}
                position={playerEleven.position}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerTen ? (
              <PlayerCard
                playerName={playerTen.name}
                imageURL={playerTen.imageURL}
                inTeam={true}
                age={playerTen.age}
                rating={playerTen.rating}
                position={playerTen.position}
              />
            ) : null}
          </Grid>
          <Grid item xs={4} md={4} textAlign={"center"}>
            {playerNine ? (
              <PlayerCard
                playerName={playerNine.name}
                imageURL={playerNine.imageURL}
                inTeam={true}
                age={playerNine.age}
                rating={playerNine.rating}
                position={playerNine.position}
              />
            ) : null}
          </Grid>
          <Grid item xs={4} md={4} container justifyContent="end">
            {playerEight ? (
              <PlayerCard
                playerName={playerEight.name}
                imageURL={playerEight.imageURL}
                inTeam={true}
                age={playerEight.age}
                rating={playerEight.rating}
                position={playerEight.position}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerSeven ? (
              <PlayerCard
                playerName={playerSeven.name}
                imageURL={playerSeven.imageURL}
                inTeam={true}
                age={playerSeven.age}
                rating={playerSeven.rating}
                position={playerSeven.position}
              />
            ) : null}
          </Grid>
          <Grid item xs={4} md={4}>
            {playerSix ? (
              <PlayerCard
                playerName={playerSix.name}
                imageURL={playerSix.imageURL}
                inTeam={true}
                age={playerSix.age}
                rating={playerSix.rating}
                position={playerSix.position}
              />
            ) : null}
          </Grid>
          <Grid item container xs={3} md={3} justifyContent="end">
            {playerFive ? (
              <PlayerCard
                playerName={playerFive.name}
                imageURL={playerFive.imageURL}
                inTeam={true}
                age={playerFive.age}
                rating={playerFive.rating}
                position={playerFive.position}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerFour ? (
              <PlayerCard
                playerName={playerFour.name}
                imageURL={playerFour.imageURL}
                inTeam={true}
                age={playerFour.age}
                rating={playerFour.rating}
                position={playerFour.position}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerThree ? (
              <PlayerCard
                playerName={playerThree.name}
                imageURL={playerThree.imageURL}
                inTeam={true}
                age={playerThree.age}
                rating={playerThree.rating}
                position={playerThree.position}
              />
            ) : null}
          </Grid>
          <Grid item xs={3} md={3} textAlign={"center"}>
            {playerTwo ? (
              <PlayerCard
                playerName={playerTwo.name}
                imageURL={playerTwo.imageURL}
                inTeam={true}
                age={playerTwo.age}
                rating={playerTwo.rating}
                position={playerTwo.position}
              />
            ) : null}
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={12}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {playerOne ? (
              <PlayerCard
                playerName={playerOne.name}
                imageURL={playerOne.imageURL}
                inTeam={true}
                age={playerOne.age}
                rating={playerOne.rating}
                position={playerOne.position}
              />
            ) : null}
          </Grid>
        </Grid>
      ) : (
        <Grid container rowSpacing={4}>
          {!addedPlayerEleven ? (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerSelector
                position={"Striker"}
                backendPosition={"striker3"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerEleven={setAddedPlayerEleven}
                setSelectedPlayerEleven={setSelectedPlayerEleven}
                setTotalValue={setTotalValue}
              />
            </Grid>
          ) : (
            <Grid container item xs={4} md={4} justifyContent="end">
              <PlayerCard
                playerName={selectedPlayerEleven.name}
                imageURL={selectedPlayerEleven.imageURL}
                inTeam={true}
                age={selectedPlayerEleven.age}
                rating={selectedPlayerEleven.rating}
                position={selectedPlayerEleven.position}
              />
            </Grid>
          )}

          {!addedPlayerTen ? (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerSelector
                position={"Striker"}
                backendPosition={"striker2"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerTen={setAddedPlayerTen}
                setSelectedPlayerTen={setSelectedPlayerTen}
                setTotalValue={setTotalValue}
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={4}
              md={4}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <PlayerCard
                playerName={selectedPlayerTen.name}
                imageURL={selectedPlayerTen.imageURL}
                inTeam={true}
                age={selectedPlayerTen.age}
                rating={selectedPlayerTen.rating}
                position={selectedPlayerTen.position}
              />
            </Grid>
          )}

          {!addedPlayerNine ? (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerSelector
                position={"Striker"}
                backendPosition={"striker1"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerNine={setAddedPlayerNine}
                setSelectedPlayerNine={setSelectedPlayerNine}
                setTotalValue={setTotalValue}
              />
            </Grid>
          ) : (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerCard
                playerName={selectedPlayerNine.name}
                imageURL={selectedPlayerNine.imageURL}
                inTeam={true}
                age={selectedPlayerNine.age}
                rating={selectedPlayerNine.rating}
                position={selectedPlayerNine.position}
              />
            </Grid>
          )}

          {!addedPlayerEight ? (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerSelector
                position={"Midfielder"}
                backendPosition={"midfielder3"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerEight={setAddedPlayerEight}
                setSelectedPlayerEight={setSelectedPlayerEight}
                setTotalValue={setTotalValue}
              />
            </Grid>
          ) : (
            <Grid item xs={4} md={4} container justifyContent="end">
              <PlayerCard
                playerName={selectedPlayerEight.name}
                imageURL={selectedPlayerEight.imageURL}
                inTeam={true}
                age={selectedPlayerEight.age}
                rating={selectedPlayerEight.rating}
                position={selectedPlayerEight.position}
              />
            </Grid>
          )}

          {!addedPlayerSeven ? (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerSelector
                position={"Midfielder"}
                backendPosition={"midfielder2"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerSeven={setAddedPlayerSeven}
                setSelectedPlayerSeven={setSelectedPlayerSeven}
                setTotalValue={setTotalValue}
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={4}
              md={4}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <PlayerCard
                playerName={selectedPlayerSeven.name}
                imageURL={selectedPlayerSeven.imageURL}
                inTeam={true}
                age={selectedPlayerSeven.age}
                rating={selectedPlayerSeven.rating}
                position={selectedPlayerSeven.position}
              />
            </Grid>
          )}

          {!addedPlayerSix ? (
            <Grid item xs={4} md={4} textAlign={"center"}>
              <PlayerSelector
                position={"Midfielder"}
                backendPosition={"midfielder1"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerSix={setAddedPlayerSix}
                setSelectedPlayerSix={setSelectedPlayerSix}
                setTotalValue={setTotalValue}
              />
            </Grid>
          ) : (
            <Grid item xs={4} md={4}>
              <PlayerCard
                playerName={selectedPlayerSix.name}
                imageURL={selectedPlayerSix.imageURL}
                inTeam={true}
                age={selectedPlayerSix.age}
                rating={selectedPlayerSix.rating}
                position={selectedPlayerSix.position}
              />
            </Grid>
          )}

          {!addedPlayerFive ? (
            <Grid item xs={3} md={3} textAlign={"center"}>
              <PlayerSelector
                position={"Defender"}
                backendPosition={"defender4"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerFive={setAddedPlayerFive}
                setTotalValue={setTotalValue}
                setSelectedPlayerFive={setSelectedPlayerFive}
              />
            </Grid>
          ) : (
            <Grid item container xs={3} md={3} justifyContent="end">
              <PlayerCard
                playerName={selectedPlayerFive.name}
                imageURL={selectedPlayerFive.imageURL}
                inTeam={true}
                age={selectedPlayerFive.age}
                rating={selectedPlayerFive.rating}
                position={selectedPlayerFive.position}
              />
            </Grid>
          )}

          {!addedPlayerFour ? (
            <Grid item xs={3} md={3} textAlign={"center"}>
              <PlayerSelector
                position={"Defender"}
                backendPosition={"defender3"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setAddedPlayerFour={setAddedPlayerFour}
                setTotalValue={setTotalValue}
                setSelectedPlayerFour={setSelectedPlayerFour}
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={3}
              md={3}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <PlayerCard
                playerName={selectedPlayerFour.name}
                imageURL={selectedPlayerFour.imageURL}
                inTeam={true}
                age={selectedPlayerFour.age}
                rating={selectedPlayerFour.rating}
                position={selectedPlayerFour.position}
              />
            </Grid>
          )}

          {!addedPlayerThree ? (
            <Grid item xs={3} md={3} textAlign={"center"}>
              <PlayerSelector
                position={"Defender"}
                backendPosition={"defender2"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setTotalValue={setTotalValue}
                setAddedPlayerThree={setAddedPlayerThree}
                setSelectedPlayerThree={setSelectedPlayerThree}
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={3}
              md={3}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <PlayerCard
                playerName={selectedPlayerThree.name}
                imageURL={selectedPlayerThree.imageURL}
                inTeam={true}
                age={selectedPlayerThree.age}
                rating={selectedPlayerThree.rating}
                position={selectedPlayerThree.position}
              />
            </Grid>
          )}

          {!addedPlayerTwo ? (
            <Grid item xs={3} md={3} textAlign={"center"}>
              <PlayerSelector
                position={"Defender"}
                backendPosition={"defender1"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setTotalValue={setTotalValue}
                setAddedPlayerTwo={setAddedPlayerTwo}
                setSelectedPlayerTwo={setSelectedPlayerTwo}
              />
            </Grid>
          ) : (
            <Grid item xs={3} md={3} textAlign={"center"}>
              <PlayerCard
                playerName={selectedPlayerTwo.name}
                imageURL={selectedPlayerTwo.imageURL}
                inTeam={true}
                age={selectedPlayerTwo.age}
                rating={selectedPlayerTwo.rating}
                position={selectedPlayerTwo.position}
              />
            </Grid>
          )}

          {!addedPlayerOne ? (
            <Grid item xs={12} md={12} textAlign={"center"}>
              <PlayerSelector
                position={"Keeper"}
                backendPosition={"keeper"}
                buttonDisabled={buttonDisabled}
                teamName={teamName}
                setTeamCount={setTeamCount}
                setTotalValue={setTotalValue}
                setAddedPlayerOne={setAddedPlayerOne}
                setSelectedPlayerOne={setSelectedPlayerOne}
              />
            </Grid>
          ) : (
            <Grid
              item
              container
              xs={12}
              md={12}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <PlayerCard
                playerName={selectedPlayerOne.name}
                imageURL={selectedPlayerOne.imageURL}
                inTeam={true}
                age={selectedPlayerOne.age}
                rating={selectedPlayerOne.rating}
                position={selectedPlayerOne.position}
              />
            </Grid>
          )}
        </Grid>
      )}
    </div>
  );
}

export default PlayersSelectorForPosition;
