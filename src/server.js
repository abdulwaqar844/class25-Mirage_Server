import movies from "./movies/movies.json"
import { createServer } from "miragejs"

export function makeServer() {
  let server = createServer({
    

    routes() {
      this.namespace = "api";
      this.get("/movies", (schema) => {
        return movies;
      })
      this.post("/add",(schema,req)=>{
          const NewMovie=JSON.parse(req.requestBody);
          movies.push(NewMovie);
          return movies;

      })
    },
  })

  return server
}