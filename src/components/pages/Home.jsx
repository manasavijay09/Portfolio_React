// import Carousel from 'react-bootstrap/Carousel';
// import TempImage from './images/Screenshot.png';

// function Home() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         {/* <TempImage text="First slide" /> */}
//         <Carousel.Caption>
//           <h2>Hi My Name Is Manasa</h2>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <TempImage text="Second slide" /> */}
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <TempImage text="Third slide" /> */}
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Home;
import Card from 'react-bootstrap/Card';
import Image from '../../../public/profile.jpg'

// function Home() {
//   return (
//     <Card style={{ width: '18rem' }}>
      
//       <Card.Img   variant="start"  src={Image} style={{ width: "100%" }} alt="Manasa"  />
//       <Card.Body class="home" >
//         <Card.Title>Hi My Name Is </Card.Title>
//         <Card.Title className="text">MANASA</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
        
//       </Card.Body>
//     </Card>
//   );
// }
import Alert from 'react-bootstrap/Alert';

function Home() {
  return (
    <Alert variant="primary">
      <Card.Img  class="name" variant="start"  src={Image} style={{ width: "20%" }} alt="Manasa"  />
      <Alert.Heading class="hi">Hi My Name Is Manasa</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}



export default Home;