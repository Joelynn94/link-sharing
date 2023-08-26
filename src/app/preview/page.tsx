import { Card } from "@/components/Card";
import { CardBody } from "@/components/CardBody";

export default function Preview() {
  return (
    <div className="flex items-center justify-center mt-24">
      <Card className="shadow-xl">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="308"
            height="632"
            fill="none"
            viewBox="0 0 308 632"
          >
            <circle cx="153.5" cy="112" r="48" fill="#EEE" />
            <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
            <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
            <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
          </svg>
        </CardBody>
      </Card>
    </div>
  );
}
