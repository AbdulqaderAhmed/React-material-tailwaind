import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export default function DataCard({ data }) {
  const [open, setOpen] = useState(false);
  const { title, description, posture } = data;
  const handleOpen = () => setOpen(!open);

  return (
    <Card className="mx-auto mt-14 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={posture} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={handleOpen} variant="gradient">
          Read More
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button variant="gradient" color="black" onClick={handleOpen}>
              <span>Back</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
