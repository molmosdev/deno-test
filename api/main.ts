import express from "npm:express@4.18.2";

const app = express();

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/dinosaurs", (_req: express.Request, res: express.Response) => {
  res.send("T-Rex, Velociraptor, Stegosaurus");
});

app.get("/dinosaurs/:id", (req: express.Request, res: express.Response) => {
  res.send(`You requested dinosaur ${req.params.id}`);
});

app.get(
  "/dinosaurs/:id/teeth",
  (req: express.Request, res: express.Response) => {
    res.send(`Dinosaur ${req.params.id} has 48 teeth`);
  }
);

app.listen(8000);
