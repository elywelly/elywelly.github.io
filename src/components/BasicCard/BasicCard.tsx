import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BodyFont } from "./BasicCard.style";
import { Icon } from "../BasicInfo.tsx/BasicInfo.style";
import { Link } from "@mui/material";

type TSection = {
  section: string;
};

const BasicCard: React.FC<TSection> = ({ section }) => {
  return (
    <div>
      {section === "basic" && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <BodyFont variant="body2">
              I'm a Full-Stack Engineer with a unique blend of technical and
              non-technical skills and experience. I am absolutely obsessed with
              what Kiki is doing and would love to use my skills to help bring
              your vision to life. This site I developed is pretty much my
              homage to Kiki 😅
              <br />
              <br />
              <BodyFont variant="body2" sx={{ fontWeight: "600" }}>
                What I bring to the table?
              </BodyFont>
              <br />
              We'll start off technically. I have worked on projects of varying
              sizes, from building a front-end for an early-stage start-up,
              personal full-stack projects to enterprise experience.
            </BodyFont>
          </CardContent>
        </Card>
      )}
      {section === "projects" && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <BodyFont variant="body2">
              <BodyFont variant="body2" sx={{ fontWeight: "600" }}>
                Technical Things 👩‍💻
              </BodyFont>
              Some personal projects I have tinkered with -{" "}
              <Link
                href="https://github.com/elywelly/embedded"
                target="_blank"
                color="rgb(32, 165, 152)"
                underline="none"
              >
                {"Embedded"}
              </Link>{" "}
              (platform to consolidate your favourite posts from different
              social media sites) and{" "}
              <Link
                href="https://github.com/elywelly/cryptrack-app"
                target="_blank"
                color="rgb(32, 165, 152)"
                underline="none"
              >
                {"CrypTrack"}
              </Link>{" "}
              (to help you CrypTrack of all your crypto)
              <br />
              <br />
              Through personal projects and professional experiences, I have
              designed mockups, built responsive UIs, implemented accessibility
              and Unit/E2E testings.
              <br />
              <br />
              The biggest challenge and takeaway I have faced was definitely
              scaling and technical trade-offs. For instance, the focus on
              shipping meant things like performance optimisation would not be
              as optimal (e.g. Excessive API calls or relying on email dead
              letter queues - <i>ask me more bout it if you want to know 🫠</i>),
              so that became a point for future state as there was more focus on
              shipping it asap.
              <br />
              <br />
              These are also some of the tech stack that I have worked with. I
              would say I am familiar with most of your tech stack.
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  paddingTop: "10px",
                  justifyContent: "center",
                }}
              >
                <Icon className="devicon-react-original-wordmark" />
                <Icon className="devicon-typescript-plain" />
                <Icon className="devicon-postgresql-plain" />
                <Icon className="devicon-materialui-plain" />
                <Icon className="devicon-amazonwebservices-plain-wordmark" />
                <Icon className="devicon-storybook-plain" />
              </Box>
            </BodyFont>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BasicCard;
