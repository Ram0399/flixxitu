import React from "react";
import Banner from "../Banner";
import Row from "../Row";
import request from "../Request";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
