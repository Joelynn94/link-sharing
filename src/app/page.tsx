import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Devlinks</h1>
      <ul>
        <li>
          - Create, read, update, delete links and see previews in the mobile
          mockup
        </li>
        <li>
          - Receive validations if the links form is submitted without a URL or
          with the wrong URL pattern for the platform
        </li>
        <li>- Drag and drop links to reorder them</li>
        <li>
          - Add profile details like profile picture, first name, last name, and
          email
        </li>
        <li>
          - Receive validations if the profile details form is saved with no
          first or last name
        </li>
        <li>
          - Preview their devlinks profile and copy the link to their clipboard
        </li>
        <li>
          - View the optimal layout for the interface depending on their
          device's screen size
        </li>
        <li>
          - See hover and focus states for all interactive elements on the page
        </li>
        <li>
          - **Bonus**: Save details to a database (build the project as a
          full-stack app)
        </li>
        <li>
          - **Bonus**: Create an account and log in (add user authentication to
          the full-stack app)
        </li>
      </ul>
    </div>
  );
}
