import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react/cjs/react.production.min";
const DUMMY_MEETUPS = [
  {
    id: "1",
    image: "https://via.placeholder.com/50",
    title: "Meetup 1",
    address: "address 1",
  },
  {
    id: "2",
    image: "https://via.placeholder.com/50",
    title: "Meetup 2",
    address: "address 2",
  },
  {
    id: "3",
    image: "https://via.placeholder.com/50",
    title: "Meetup 3",
    address: "address 3",
  },
];

function HomePage() {
  return (
    <Fragment>
        <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
    </Fragment>
  );
}
export default HomePage;
