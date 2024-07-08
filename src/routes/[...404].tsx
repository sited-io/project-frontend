import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import { indexPath } from ".";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Back to <a href={indexPath()}>sited.io</a>
      </p>
    </main>
  );
}
