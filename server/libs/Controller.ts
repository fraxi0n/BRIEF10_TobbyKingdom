import { Request, Response } from "express";

export abstract class Controller {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

    protected errorManager = (pResult: any) => {
      switch (pResult) {
        case 404: {
          this.response.status(pResult);
          return this.response.send(Error("404 aucun objet trouvé "));
        }
        case 400: {
          this.response.status(pResult);
          return this.response.send(Error("400 mauvaise requête "));
        }
      }
    };
  
}
