import mongoose from "mongoose";
import routes from "./routes";

import { DEV_DB_NAME, MONGOGB_DEV_URL, PORT } from "./configs/constants";

mongoose
  .connect(MONGOGB_DEV_URL as string, { dbName: DEV_DB_NAME })
  .then(() => {
    console.debug("Database connected");
  })
  .catch((error) => {
    console.debug(error);
  });

routes.listen(PORT, () => {
  console.debug(`Starting app on PORT ${PORT}`);
});
