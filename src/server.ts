import { Request, Response } from 'express'

import app from "./app"

const PORT: Number = +process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (_req: Request, res: Response) => {
    res.send(`
    Application online. 
    Server listening on port ${PORT}.
    `)
  })