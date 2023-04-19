import { homeStr } from "./pages/hom03";

const  homStr = new homeStr();

describe("strHom", () => {
         it("homStrona", () => {
          
            homStr.navigate();
            homStr.logOut();

        });
    });