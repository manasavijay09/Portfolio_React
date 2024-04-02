import Card from "react-bootstrap/Card";
import Image from "../../../public/password.png";
import Social from "../../../public/social.png";

function Portfolio() {
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={Image} style={{ width: "100%" }} alt="PassawordGenerator"/>
    //   <Card.Body>
    //     <Card.Title>Password_Generator</Card.Title>
    //     <Card.Text>
    //       A password is randomly generated based on criteria that the user
    //       provides when prompted.
    //     </Card.Text>
    //     <Card.Link href="https://manasavijay09.github.io/Password_Generator/">
    //       GitHub Link
    //     </Card.Link>
    //   </Card.Body>

    //   <br />
    //   <Card border="secondary" style={{ width: '18rem' }}>
    //     <Card.Header>Header</Card.Header>
    //     <Card.Body>
    //       <Card.Title>Secondary Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   </Card>

    <>
      <div class="project">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Project 1 </Card.Header>
          <Card.Body>
            <Card.Img
              variant="top"
              src={Image}
              style={{ width: "100%" }}
              alt="PassawordGenerator"
            />
            <Card.Title>Password_Generator</Card.Title>
            <Card.Text>
              A password is randomly generated based on criteria that the user
              provides when prompted. <br />
              <Card.Link href="https://manasavijay09.github.io/Password_Generator/">
                GitHub Link
              </Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Social Network API</Card.Header>
          <Card.Body>
            <Card.Img
              variant="top"
              src={Social}
              style={{ width: "100%" }}
              alt="Social-Network-API"
            />
            <Card.Title>Social Network API</Card.Title>
            <Card.Text>
              This Project walkthrough how to build an API for a social network
              web application where users can share their thoughts, react to
              friends’ thoughts, and create a friend list.
            </Card.Text>
          </Card.Body>
        </Card>

        <br />

        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />

      <Card border="danger" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Danger Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="light" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default Portfolio;
