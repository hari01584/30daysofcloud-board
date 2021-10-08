import Head from "next/head";
import Table from "../src/table";
import { Typography } from "@material-ui/core";

export default function Home() {
  const data = require("../data/data.json");
  return (
    <>
      <Head>
        <title>DSC 30 Days of Cloud - Progress Board</title>
      </Head>
      <div style={{ padding: 50 }}>
        <footer className="flex apart">
          <Typography variant="body2" color="textSecondary">
            Last updated: {data.buildDate}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <a
              href="https://github.com/developer-student-club-thapar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Developer Student Clubs - TIET
            </a>
          </Typography>
        </footer>
        <div className="center">
          <Typography className="bolder" variant="h2" color="textPrimary">
            GDSC - {data.institute}
          </Typography>
          <Typography className="bolder" variant="h4" color="secondary">
            30 Days of Cloud - Progress Board
          </Typography>
        </div>
        <Table data={data.resultsWithRank}></Table>
      </div>
    </>
  );
}
