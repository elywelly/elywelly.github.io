import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BodyFont } from "./BasicCard.style";
import { BoldFont, BoldHeading, Icon } from "../BasicInfo.tsx/BasicInfo.style";
import { Link } from "@mui/material";
import {
  ActivitySquare,
  Cat,
  Dumbbell,
  Github,
  Globe2,
  Mail,
  Pizza,
  Users2,
} from "lucide-react";

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
              <BoldHeading variant="body1" sx={{ fontWeight: "600" }}>
                What I bring to the table? 🪑
              </BoldHeading>
              We'll start off professionally. I have worked on projects of
              varying sizes, from building a front-end for an early-stage
              start-up, personal full-stack projects to enterprise experience.
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
              <BoldHeading variant="body1" sx={{ fontWeight: "600" }}>
                Technical Things 👩‍💻
              </BoldHeading>
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
              <b>
                designed mockups, built responsive UIs, implemented
                accessibility and Unit/E2E testings
              </b>
              .
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
                  padding: "10px 0",
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
              <BoldHeading
                variant="body1"
                sx={{
                  fontWeight: "600",
                  padding: "20px 0",
                  textAlign: "center",
                }}
              >
                More than just Tech 👩‍🔧
              </BoldHeading>
              Before becoming a Software Engineer, I was actually a teacher and
              Community specialist at a micro-blogging platform - Dayre. This
              was one of the posters that ran around Melbourne - inspired by my
              dog 😂
            </BodyFont>
          </CardContent>
        </Card>
      )}
      {section === "experiences" && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <BodyFont variant="body2">
              The platform had over 500 000 downloads and active users and I
              lead its Australian expansion. I{" "}
              <BoldFont>
                recruited ambassadors coupled with branding and marketing,
                collaborating with local businesses, successfully expanding its
                userbase in Australia
              </BoldFont>
              .
              <br />
              <br />
              My various experiences have deepened my understanding of{" "}
              <BoldFont>
                user psychology, creative problem-solving techniques and honed
                my ability to break down complex concepts and effectively
                communicate them to individuals with varying levels of technical
                understanding.
              </BoldFont>
              <br />
              <br />
              These invaluable skills would definitely enable me to contribute
              not only to the development process but overall{" "}
              <BoldFont>
                product strategy, user engagement and growth initiatives at Kiki
              </BoldFont>
              .
              <br />
              <br />
              Moving on from the professional...
            </BodyFont>
          </CardContent>
        </Card>
      )}
      {section === "me" && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <BodyFont variant="body2">
              <BoldHeading variant="body1" sx={{ fontWeight: "600" }}>
                A bit about me
              </BoldHeading>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  padding: "10px 0",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                  }}
                >
                  <Globe2 />
                  Sydney
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  padding: "10px 0",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                  }}
                >
                  <Cat />
                  Have an odd fear of cats
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  padding: "10px 0",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                  }}
                >
                  <Dumbbell />
                  Can deadlift over 100kg
                </Box>
              </Box>
              I think being 5'0, I am low-key obsessed with being strong since
              people may underestimate me from my height 😂, so I do a bunch of
              different sports - boxing, bouldering, BJJ.
              <br />
              <br />
              Great with people and working in a team having led teams and
              secured partnerships over the course of my career, including
              helping raise over $30 000 for the inception of Project Gen Z (for
              a children's charity)
              <br />
              <br />I try to live by the Wayne Gretzky saying:
              <BoldHeading
                variant="body1"
                sx={{
                  fontWeight: "600",
                  padding: "20px 0",
                  textAlign: "center",
                }}
              >
                You miss 100% of the shots you don't take
              </BoldHeading>
              I started to really live by this when I decided to dedicate time
              to learning Software over 2 years ago. I'm self-motivated and love
              a good challenge. The next was when I decided to apply for a job
              only 2 months into learning it. I wasn't confident I would get it,
              but what was the worst that could happen 🤷‍♀️. And then I got the
              job and it became my profession.
              <br />
              <br />
              <BoldFont>This is one of those moments.</BoldFont> When I read
              about Kiki and saw that you were hiring, I knew it was something I
              wanted to be a part of and could really contribute to. So here I
              am shooting my shot.
              <br />
              <br />
              Thank you for reading through this and my inbox is always open for
              Kiki:
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Link href="mailto:elynn@duck.com" color="inherit">
                  {" "}
                  <Mail />
                </Link>
                <Link href="https://github.com/elywelly" color="inherit">
                  {" "}
                  <Github />
                </Link>
              </Box>
            </BodyFont>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BasicCard;
