import Money from "../money";

export default Catalog;

interface Catalog {

    findBy: (barCode:string) => Money;

}