import { logowanie2user } from "./pages/log03" ;

const logUse = new logowanie2user
        
    describe("LogInOut", () => {
        it("Log2User", () => {
         
            logUse.logowanieUserFirst();

            logUse.logowanieUserSecond();

            logUse.menuStrony();

            


       });
   });
    

