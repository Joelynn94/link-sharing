import { Card } from "@/components/Card";
import { CardBody } from "@/components/CardBody";
import { CardFooter } from "@/components/CardFooter";
import { Button } from "@/components/Button";
import { AddLink } from "@/components/AddLink";
import { LinksEmpty } from "@/components/LinksEmpty";
import { LinkDetails } from "@/components/LinkDetails";

export default function Links() {
  return (
    <Card>
      <CardBody>
        <h1 className="text-2xl mb-2">Customize your links</h1>
        <p className="text-gray-400">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <AddLink />
        {/* <LinkDetails /> */}
        <LinksEmpty />
      </CardBody>

      <CardFooter>
        <div className="flex md:justify-end">
          <Button
            type="button"
            variant="primary"
            className="w-full md:w-fit"
            disabled
          >
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

{
  /* <p className="text-center text-gray-400">
Use the "Add new link" button to{"\n"}
get started. Once you have more{"\n"}
than one link, you can reorder and{"\n"}
edit them. We're here to help you{"\n"}
share your profiles with everyone!
</p> */
}
